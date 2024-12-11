import type { ThemeProps } from './themeProps'
import fixitIcon from '../../assets/icons/fixit.svg'
import hugoIcon from '../../assets/icons/hugo.svg'

function ModernTheme({ config }: ThemeProps) {
  const { title, bgColor, pattern, author, icon, font, customIcon } = config
  const fontBold = font !== 'font-Virgil' ? 'font-bold' : ''

  return (
    <div
      className={`theme-modern overflow-y-hidden h-full rounded-xl text-gray-800 flex items-center p-4 ${pattern}`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="mx-auto flex items-center justify-center relative">
        {customIcon && (<img alt="Custom Icon" className="w-32 h-32 rounded-full border-8 border-white" src={customIcon} />)}
        {icon.value === 'custom' && !customIcon && <i className="w-32 h-32 rounded-full bg-white border-8 border-white" />}
        {icon.value === 'hugo-fixit' && <img alt="Hugo Icon" className="w-32 h-32 rounded-full bg-white border-8 border-white" src={hugoIcon} />}
        {icon.value === 'hugo-fixit' && <img alt="FixIt Icon" className="w-7/12 h-7/12 rounded-full absolute bg-white border-2 border-white" src={fixitIcon} />}
        {icon.value !== 'custom' && icon.value !== 'hugo-fixit' && (
          <img
            alt={`${icon.label} Icon`}
            className="w-32 h-32 rounded-full bg-white border-8 border-white"
            data-icon={icon.value}
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon.value}/${icon.value}-${icon.opts[0]}.svg`}
          />
        )}
      </div>

      <div className="h-full w-2/3">
        <div className={`${font} bg-white px-12 justify-center text-left rounded-xl h-full p-4 flex flex-col`}>
          <h1 className={`whitespace-pre-wrap text-3xl md:text-5xl text-gray-800 ${fontBold}`}>{title}</h1>
          <h2 className="text-xl mt-10 font-semibold text-left ">{author}</h2>
        </div>
      </div>
    </div>
  )
}

export default ModernTheme
