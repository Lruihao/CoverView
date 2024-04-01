import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './CoverImage.css'
import domtoimage from 'dom-to-image-more'

function ComponentToImg(props) {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false)
  const componentRef = React.createRef()

  function downloadImage() {
    setLoading(true)
    const coverviewEl = componentRef.current.querySelector('.coverview-preview-container')
    const { width, height } = coverviewEl.getBoundingClientRect()
    const scale = 2
    domtoimage.toPng(coverviewEl, {
      width: width * scale,
      height: height * scale,
      cacheBust: true,
      copyDefaultStyles: false,
      style: {
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        width: `${width}px`,
        height: `${height}px`,
        margin: 0,
      },
    }).then((dataUrl) => {
      const a = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')
      a.href = dataUrl
      a.download = 'cover.png'
      a.click()
      setLoading(false)
    }).catch((error) => {
      console.error('oops, something went wrong!', error)
    })
  }

  return (
    <div className="lg:w-2/3 flex m-6 flex-col items-center justify-center">
      <div className="md:w-full scale-50 md:scale-100" ref={componentRef}>{props.children}</div>
      <button
        className="border p-2 bg-gray-700 hover:bg-gray-800 flex items-center text-white text-xl rounded-lg m-4 px-4"
        disabled={loading}
        onClick={() => downloadImage()}
      >
        <span>
          {loading ? (
            <svg
              className="w-6 h-6 text-white animate animate-spin"
              fill="currentColor"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          )}
        </span>

        <span className="mx-2">{t('editor.downloadBtn')}</span>
      </button>
    </div>
  )
}

export default ComponentToImg
