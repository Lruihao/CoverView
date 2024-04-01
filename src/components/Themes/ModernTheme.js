import React from 'react'
import hugoIcon from '../../assets/icons/hugo.svg'
import fixitIcon from '../../assets/icons/fixit.svg'

const ModernTheme = ({ config }) => {
  const { title, bgColor, pattern, author, icon, font, customIcon } = config

  return (
    <div
      className={`theme-modern overflow-y-hidden h-full rounded-xl text-gray-800 flex items-center p-4 ${pattern}`}
      style={{ backgroundColor: bgColor }}
    >
      {customIcon ? (
        <div className="mx-auto flex items-center justify-center">
          <img alt="Custom Icon" className="w-32 h-32 rounded-full bg-white border-8 border-white" src={customIcon} />
        </div>
      ) : icon.value === 'hugo-fixit' ? (
        <div className="mx-auto flex items-center justify-center relative">
          <img alt="Hugo Icon" className="w-32 h-32 rounded-full bg-white border-8 border-white" src={hugoIcon} />
          <img alt="FixIt Icon" className="w-7/12 h-7/12 rounded-full absolute bg-white border-2 border-white" src={fixitIcon} />
        </div>
      ) : (
        <div className="flex items-center justify-center rounded-full p-6 w-32 h-32 bg-white mx-auto">
          <i className={`devicon-${icon.value}-plain p-4 dev-icon text-7xl`} />
        </div>
      )}

      <div className="h-full w-2/3">
        <div className={`${font} bg-white px-12 justify-center text-left rounded-xl h-full p-4 flex flex-col`}>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">{title}</h1>
          <h2 className="text-xl mt-10 font-semibold text-left ">{author}</h2>
        </div>
      </div>
    </div>
  )
}

export default ModernTheme
