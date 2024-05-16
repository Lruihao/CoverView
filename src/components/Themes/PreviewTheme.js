import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { getPasteImage } from '../../utils'

const PreviewTheme = ({ config }) => {
  const { t } = useTranslation()
  const { bgColor, title, font } = config
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
      className="theme-preview overflow-y-hidden flex flex-col rounded p-4 pb-0 h-full"
      style={{ backgroundColor: bgColor }}
    >
      <h1 className={`${font} ${font !=='font-Virgil' ? 'font-bold' : '' } text-2xl md:text-3xl p-10 text-white text-center my-auto`}>{title}</h1>

      <div className="w-10/12 group mx-auto mb-0 shadow-lg flex flex-col bg-white rounded-t-xl border-white">
        <div className="bg-gray-800 h-8 w-full p-2 flex items-center rounded-t-xl">
          <div className="bg-red-400 h-3 w-3 rounded-full mx-1" />
          <div className="bg-yellow-400 h-3 w-3 rounded-full mx-1" />
          <div className="bg-green-400 h-3 w-3 rounded-full mx-1" />
          <button className="ml-auto mr-2 cursor-pointer" onClick={() => setImage('')}>
            <svg
              className="group-hover:inline-block hidden w-4 h-4 text-white rounded-full z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
        </div>

        {image ? (<div><img alt="preview" className="object-cover" src={image} /></div>) : (
          <div className="flex flex-col p-20 bg-white items-center justify-center">
            <input
              className="text-xl cursor-pointer mb-2 bg-white rounded border"
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

export default PreviewTheme
