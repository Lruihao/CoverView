import type { ToImageOptions } from '@/services/toImage'
import type { DownloadFormat } from '@/types'
import type { PropsWithChildren } from 'react'
import { toImage } from '@/services/toImage'
import * as clipboard from 'clipboard-polyfill'
import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

const downloadFmtOptions: { label: string, value: DownloadFormat }[] = [
  { label: 'PNG', value: 'png' },
  { label: 'JPEG', value: 'jpeg' },
  { label: 'SVG', value: 'svg' },
  { label: 'Blob', value: 'blob' },
]

export interface DownloadIconProps {
  loading: boolean
  downloadFmt: string
}

function DownloadIcon({ loading, downloadFmt }: DownloadIconProps) {
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
      >
        <path d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z" />
      </svg>
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
      >
        <path d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
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
    >
      <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  )
}

function ComponentToImg({ children }: PropsWithChildren) {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false)
  const [downloadFmt, setDownloadFmt] = useState<DownloadFormat>('png')
  const [quality, setQuality] = useState(1)
  const componentRef = useRef<HTMLDivElement | null>(null)

  /**
   * download image
   */
  function downloadImage() {
    if (!componentRef.current)
      return
    setLoading(true)
    const coverviewEl = componentRef.current.querySelector('.coverview-preview-container')! as HTMLElement
    const { width, height } = coverviewEl.getBoundingClientRect()
    // get the device original scale
    const deviceScale = window.matchMedia('only screen and (max-width: 768px)').matches ? 0.5 : 1
    // recover original width and height
    const originalWidth = width / deviceScale
    const originalHeight = height / deviceScale
    // scale the image when downloading
    const scale = downloadFmt === 'svg' ? 1 : 2
    const downloadOptions: ToImageOptions = {
      width: originalWidth * scale,
      height: originalHeight * scale,
      copyDefaultStyles: false,
      quality, // quality of the jpeg image
      filter: node => !(node as HTMLElement).classList?.contains('download-ignore'),
      style: {
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        width: `${originalWidth}px`,
        height: `${originalHeight}px`,
        margin: '0',
      },
    }
    toImage(coverviewEl, downloadFmt, downloadOptions).then((data) => {
      // copy image to clipboard
      if (downloadFmt === 'blob') {
        const blob = new Blob([data], { type: 'image/png' })
        const item = new clipboard.ClipboardItem({ 'image/png': blob })
        clipboard.write([item])
        setLoading(false)
        return
      }

      // download the image as cover_{timestamp}.{format}
      const link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a') as HTMLAnchorElement
      link.href = data.toString()
      link.download = `cover_${new Date().getTime().toString().slice(-6)}.${downloadFmt}`
      link.click()
      setLoading(false)
    }).catch((error: Error) => {
      setLoading(false)
      console.error('oops, something went wrong!', error)
    })
  }

  return (
    <div className="lg:w-2/3 flex m-6 flex-col items-center justify-center">
      <div className="md:w-full scale-50 md:scale-100" ref={componentRef}>{children}</div>
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
              value={quality}
              onChange={e => setQuality(Number(e.target.value))}
            />
          )}
          <select
            className="h-10 px-1 focus:outline-hidden border-4 border-gray-700 rounded-lg rounded-r-none"
            disabled={loading}
            value={downloadFmt}
            onChange={(e) => {
              setDownloadFmt(e.target.value as DownloadFormat)
              setQuality(1)
            }}
          >
            {downloadFmtOptions.map(item => (<option key={item.value} value={item.value}>{item.label}</option>))}
          </select>
          <button
            type="button"
            className="border border-l-0 p-2 bg-gray-700 hover:bg-gray-800 flex items-center text-white rounded-lg rounded-l-none"
            disabled={loading}
            onClick={() => downloadImage()}
          >
            <span>
              <DownloadIcon loading={loading} downloadFmt={downloadFmt} />
            </span>
            <span className="mx-2">{t(downloadFmt === 'blob' ? 'editor.copyBtn' : 'editor.downloadBtn')}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ComponentToImg
