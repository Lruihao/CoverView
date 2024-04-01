import React from 'react'
import hugoIcon from '../../assets/icons/hugo.svg'
import fixitIcon from '../../assets/icons/fixit.svg'

const OutlineTheme = ({ config }) => {
  const { title, bgColor, author, icon, font, customIcon } = config
  const fontBold = font !== 'font-Virgil' ? 'font-bold' : ''

  return (
    <div
      className="theme-outline overflow-y-hidden rounded flex flex-col text-gray-800 px-10 h-full"
      style={{ backgroundColor: bgColor }}
    >
      <div className={`${font} rounded-2xl py-10 px-4 flex flex-col h-full justify-around`}>
        {customIcon ? (
          <div className="mx-4">
            <img alt="Custom Icon" className="rounded-full object-cover w-24 h-24 bg-white p-1 border-2 border-white" src={customIcon} />
          </div>
        ) : icon.value === 'hugo-fixit' ? (
          <div className="mr-auto mx-4 flex items-center justify-center relative">
            <img alt="Hugo Icon" className="w-24 h-24 rounded-full bg-white border-8 border-white" src={hugoIcon} />
            <img alt="FixIt Icon" className="w-7/12 h-7/12 rounded-full absolute bg-white border-2 border-white" src={fixitIcon} />
          </div>
        ) : (
          <div className="mr-auto px-4 flex items-center justify-center">
            <i className={`devicon-${icon.value}-plain text-white dev-icon text-8xl`} />
          </div>
        )}
        <h1 className={`text-3xl px-4 text-white md:text-5xl ${fontBold}`}>{title}</h1>

        <div className={`${font} w-full h-12 flex px-4 items-center`}>
          <h2 className="text-2xl text-white font-semibold">{author}</h2>
        </div>
      </div>
    </div>
  )
}

export default OutlineTheme
