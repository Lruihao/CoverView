import React from 'react'
import hugoIcon from '../../assets/icons/hugo.svg'
import fixitIcon from '../../assets/icons/fixit.svg'

const OutlineTheme = ({ config }) => {
  const { title, bgColor, author, icon, font, customIcon } = config

  return (
    <div
      className="theme-outline overflow-y-hidden rounded flex flex-col text-gray-800 px-10 h-full"
      style={{ backgroundColor: bgColor }}
    >
      <div className={`${font} rounded-2xl py-10 md:py-6 flex flex-col h-full`}>
        {customIcon ? (
          <div className="m-4 ml-6">
            <img alt="Custom Icon" className="rounded-full object-cover w-24 h-24 bg-white p-1 border-2 border-white" src={customIcon} />
          </div>
        ) : icon.value === 'hugo-fixit' ? (
          <div className="mr-auto m-4 ml-6 flex items-center justify-center relative">
            <img alt="Hugo Icon" className="w-24 h-24 rounded-full bg-white border-8 border-white" src={hugoIcon} />
            <img alt="FixIt Icon" className="w-7/12 h-7/12 rounded-full absolute bg-white border-2 border-white" src={fixitIcon} />
          </div>
        ) : (
          <div className="mr-auto ml-2 flex items-center justify-center">
            <i className={`devicon-${icon.value}-plain text-white p-4 dev-icon text-8xl`} />
          </div>
        )}
        <h1 className="text-3xl p-4 text-white md:text-5xl font-bold ">{title}</h1>

        <div className={`${font} w-full h-16 flex mt-auto mb-0 p-2 px-6 items-center `}>
          <h2 className="text-2xl text-white font-semibold">{author}</h2>
        </div>
      </div>
    </div>
  )
}

export default OutlineTheme
