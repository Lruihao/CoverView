import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './CoverImage.css'
import domtoimage from 'dom-to-image-more'
import * as clipboard from 'clipboard-polyfill'

const downloadFmtOptions = [
  { label: 'PNG' , value: 'png' },
  { label: 'JPEG', value: 'jpeg' },
  { label: 'SVG', value: 'svg' },
  { label: 'Blob', value: 'blob' },
]

function ComponentToImg(props) {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false)
  const [downloadFmt, setDownloadFmt] = useState('png')
  const [quality, setQuality] = useState(1)
  const componentRef = React.createRef()

  /**
   * 获取下载按钮图标
   * @param {Boolean} loading whether loading
   * @param {String} downloadFmt download format
   * @returns {JSX.Element} download icon
   */
  function _getDownloadIcon (loading, downloadFmt) {
    if (loading) {
      return (
        <svg
          aria-hidden="true"
          className="w-6 h-6 text-white animate animate-spin"
          fill="currentColor"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        ><path d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z" /></svg>
      )
    }
    if (downloadFmt === 'blob') {
      return (
        <svg
          aria-hidden="true"
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        ><path d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      )
    }
    return (
      <svg
        aria-hidden="true"
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      ><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>
    )
  }

  /**
   * download image
   */
  function downloadImage() {
    setLoading(true)
    const coverviewEl = componentRef.current.querySelector('.coverview-preview-container')
    const { width, height } = coverviewEl.getBoundingClientRect()
    // get the device original scale
    const deviceScale = window.matchMedia('only screen and (max-width: 768px)').matches ? 0.5 : 1
    // recover original width and height
    const originalWidth = width / deviceScale
    const originalHeight = height / deviceScale
    // scale the image when downloading
    const scale = downloadFmt === 'svg' ? 1 : 2
    const downloadOptions = {
      width: originalWidth * scale,
      height: originalHeight * scale,
      copyDefaultStyles: false,
      quality: quality, // quality of the jpeg image
      filter: (node) => !node.classList?.contains('download-ignore'),
      style: {
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        width: `${originalWidth}px`,
        height: `${originalHeight}px`,
        margin: 0,
      },
    }
    const downloadMethod = {
      png: domtoimage.toPng,
      jpeg: domtoimage.toJpeg,
      svg: domtoimage.toSvg,
      blob: domtoimage.toBlob,
    }
    downloadMethod[downloadFmt](coverviewEl, downloadOptions).then((data) => {
      // copy image to clipboard
      if (downloadFmt === 'blob') {
        const blob = new Blob([data], { type: 'image/png' })
        const item = new clipboard.ClipboardItem({ 'image/png': blob })
        clipboard.write([item])
        setLoading(false)
        return
      }

      // download the image as cover_{timestamp}.{format}
      const link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')
      link.href = data
      link.download = `cover_${new Date().getTime().toString().slice(-6)}.${downloadFmt}`
      link.click()
      setLoading(false)
    }).catch((error) => {
      setLoading(false)
      console.error('oops, something went wrong!', error)
    })
  }

  return (
    <div className="lg:w-2/3 flex m-6 flex-col items-center justify-center">
      <div className="md:w-full scale-50 md:scale-100" ref={componentRef}>{props.children}</div>
      <div className="flex items-center justify-center gap-4 m-6">
        <div className="flex items-center justify-center">
          {downloadFmt === 'jpeg' && (
            <input
              className="w-24 mr-2"
              disabled={loading}
              max="1"
              min="0.01"
              step="0.01"
              title="Image Quality"
              type="range"
              value={quality} onChange={(e) => setQuality(Number(e.target.value))}
            />
          )}
          <select
            className="h-10 px-1 focus:outline-none border-4 border-gray-700 rounded-lg rounded-r-none"
            disabled={loading}
            value={downloadFmt}
            onChange={(e) => {
              setDownloadFmt(e.target.value)
              setQuality(1)
            }}
          >
            {downloadFmtOptions.map((item) => (<option key={item.value} value={item.value}>{item.label}</option>))}
          </select>
          <button
            className="border border-l-0 p-2 bg-gray-700 hover:bg-gray-800 flex items-center text-white rounded-lg rounded-l-none"
            disabled={loading}
            onClick={() => downloadImage()}
          >
            <span>{_getDownloadIcon(loading, downloadFmt)}</span>
            <span className="mx-2">{t(downloadFmt === 'blob' ? 'editor.copyBtn' : 'editor.downloadBtn')}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ComponentToImg
