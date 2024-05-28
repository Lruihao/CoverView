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
        {customIcon && (
          <div className="mx-4">
            <img alt="Custom Icon" className="rounded-full object-cover w-24 h-24 bg-white p-1 border-2 border-white" src={customIcon} />
          </div>
        )}
        {icon.value === 'custom' && !customIcon && <i className="w-24 h-24 rounded-full bg-white p-1 border-2 border-white mx-auto mx-4" />}
        {icon.value === 'hugo-fixit' && (
          <div className="mr-auto mx-4 flex items-center justify-center relative">
            <img alt="Hugo Icon" className="w-24 h-24 rounded-full bg-white border-8 border-white" src={hugoIcon} />
            <img alt="FixIt Icon" className="w-7/12 h-7/12 rounded-full absolute bg-white border-2 border-white" src={fixitIcon} />
          </div>
        )}
        {icon.value !== 'custom' && icon.value !== 'hugo-fixit' && (
          <div className="mx-4">
            <img
              alt={`${icon.label} Icon`}
              className="rounded-full object-cover w-24 h-24 bg-white p-1 border-2 border-white"
              data-icon={icon.value}
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon.value}/${icon.value}-${icon.opts[0]}.svg`}
            />
          </div>
        )}
        <h1 className={`whitespace-pre-wrap text-3xl px-4 text-white md:text-5xl ${fontBold}`}>{title}</h1>

        <div className={`${font} w-full h-12 flex px-4 items-center`}>
          <h2 className="text-2xl text-white font-semibold">{author}</h2>
        </div>
      </div>
    </div>
  )
}

export default OutlineTheme
