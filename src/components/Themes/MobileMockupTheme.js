import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { getPasteImage } from '../../utils'

const MobileMockupTheme = ({ config }) => {
  const { t } = useTranslation()
  const { bgColor, title, font } = config
  const fontBold = font !== 'font-Virgil' ? 'font-bold' : ''
  const [image, setImage] = useState()

  const handlePaste = async (e) => getPasteImage(e).then(url => setImage(url))

  useEffect(() => {
    /**
     * 监控粘贴事件
     * Windows: Ctrl + V
     * Mac: Command + V
     */
    document.addEventListener('paste', handlePaste)
    return () => {
      // 组件销毁时移除事件监听
      document.removeEventListener('paste', handlePaste)
    }
  }, [])

  return (
    <div
      className="theme-mobile overflow-y-hidden flex flex-row items-center justify-center rounded h-full px-8 pt-4"
      style={{ backgroundColor: bgColor }}
    >
      <h1 className={`whitespace-pre-wrap ${font} ${fontBold} text-2xl w-1/2 md:text-4xl px-4 text-white font-bold text-left`}>{title}</h1>

      <div
        className="w-5/12 mx-auto mt-auto group shadow-lg flex flex-col bg-white border-t-8 border-x-8 border-gray-800 rounded-t-3xl"
        style={{ height: 'min(calc(100% - 1rem), 400px)' }}
      >
        <div className="bg-gray-800 h-8 w-full p-2 pb-3 flex items-center rounded-t">
          <div className="flex mx-auto items-center">
            <div className="bg-white h-3 w-3 rounded-full mx-1" />
            <div className="bg-white h-2 w-20 rounded-full mx-1" />
          </div>
        </div>

        {image ? (
          <div className="group relative">
            <img alt="preview" className="object-cover rounded h-full" src={image} />
            <button className="absolute top-2 right-2 cursor-pointer" onClick={() => setImage('')}>
              <svg
                className="group-hover:inline-block bg-gray-500 hidden w-8 h-8 p-2 text-white rounded-full z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </button>
          </div>
        ) : (
          <div className="flex flex-col rounded-xl px-4 py-20 bg-white items-center justify-center">
            <input
              className="text-sm flex flex-col cursor-pointer mb-2 bg-white rounded border w-full"
              type="file"
              onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
            />
            <span className="text-center italic text-sm">{t('editor.uploadScreenshot')}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default MobileMockupTheme
