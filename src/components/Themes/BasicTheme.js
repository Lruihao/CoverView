import React from 'react'
import hugoIcon from '../../assets/icons/hugo.svg'
import fixitIcon from '../../assets/icons/fixit.svg'

function BasicTheme({ config }) {
  const { title, bgColor, pattern, author, icon, font, customIcon } = config
  const fontBold = font !== 'font-Virgil' ? 'font-bold' : ''

  return (
    <div
      className={`theme-basic overflow-y-hidden flex text-gray-800 items-center h-full ${pattern}`}
      style={{ backgroundColor: bgColor }}
    >
      <div className={`${font} bg-white md:w-10/12 m-auto flex flex-col pt-12 rounded-xl`}>
        <div className="px-12">
          <div>
            <h1 className={`text-3xl md:text-5xl text-gray-800 text-center ${fontBold}`}>{title}</h1>
          </div>
        </div>

        <div className="flex mx-4 p-4 rounded-xl items-center bg-white">
          {customIcon && <img alt="Custom Icon" className="w-12 h-12 my-4 mr-auto ml-2 rounded-full" src={customIcon} />}
          {icon.value === 'custom' && !customIcon && <i className="w-12 h-12 my-4 mr-auto ml-2 rounded-full" />}
          {icon.value === 'hugo-fixit' && (
            <div className="flex items-center gap-1 mr-auto ml-2 p-4">
              <img alt="Hugo Icon" className="w-12 h-12 rounded-full" src={hugoIcon} />
              <span className="text-xl font-black">+</span>
              <img alt="FixIt Icon" className="w-12 h-12 rounded-full" src={fixitIcon} />
            </div>
          )}
          {icon.value !== 'custom' && icon.value !== 'hugo-fixit' && (
            <img
              alt={`${icon.label} Icon`}
              className="w-12 h-12 my-4 mr-auto ml-2"
              data-icon={icon.value}
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon.value}/${icon.value}-${icon.opts[0]}.svg`}
            />
          )}

          <h2 className="text-xl ml-auto mr-2 font-semibold">{author}</h2>
        </div>
      </div>
    </div>
  )
}

export default BasicTheme
