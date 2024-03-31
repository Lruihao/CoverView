import React from 'react'
import hugoIcon from '../../assets/icons/hugo.svg'
import fixitIcon from '../../assets/icons/fixit.svg'

function BasicTheme({ config }) {
  const { title, bgColor, pattern, author, icon, font, customIcon } = config

  return (
    <div
      className={`theme-basic overflow-y-hidden flex text-gray-800 items-center h-full ${pattern}`}
      style={{ backgroundColor: bgColor }}
    >
      <div className={`${font} bg-white md:w-10/12 m-auto flex flex-col pt-12 rounded-xl`}>
        <div className="px-12">
          <div>
            <h1 className="text-3xl md:text-5xl text-gray-800 font-bold text-center">{title}</h1>
          </div>
        </div>

        <div className="flex mx-4 p-4 rounded-xl items-center bg-white">
          {customIcon ? (
            <img alt="Custom Icon" className="w-12 h-12 my-4 mr-auto ml-2 rounded-full" src={customIcon} />
          ) : icon.value === 'hugo-fixit' ? (
            <div className="flex items-center gap-1 mr-auto ml-2 p-4">
              <img alt="Hugo Icon" className="w-12 h-12 rounded-full" src={hugoIcon} />
              <span className="text-xl font-black">+</span>
              <img alt="FixIt Icon" className="w-12 h-12 rounded-full" src={fixitIcon} />
            </div>
          ) : (
            <div className="mr-auto ml-2 flex items-center justify-center">
              <i className={`devicon-${icon.value}-plain p-4 dev-icon text-5xl`} />
            </div>
          )}

          <h2 className="text-xl ml-auto mr-2 font-semibold">{author}</h2>
        </div>
      </div>
    </div>
  )
}

export default BasicTheme
