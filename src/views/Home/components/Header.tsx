import logo from '@/assets/icons/logo.png'
import SwitchLang from '@/components/SwitchLang'
import { useTranslation } from 'react-i18next'

function Header() {
  const { t } = useTranslation()

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 text-xl flex border-b border-gray-100 p-2 w-full md:px-32">
      <div className="flex items-center">
        <img alt="logo" className="w-8 h-8 mx-2" src={logo} />
        <h1 className="font-semibold md:text-xl text-lg font-Inter">CoverView</h1>
      </div>
      <a
        className="hover:translate-x-2 duration-300 bg-gray-700 group rounded-xl md:px-4 text-white md:text-sm text-xs ml-auto mr-2 md:mr-4 font-Inter font-semibold p-2"
        href="https://github.com/Lruihao/CoverView"
        rel="noreferrer"
        target="_blank"
      >
        <span className="text-sm">
          ⭐
          {' '}
          {t('common.star')}
        </span>
      </a>
      <SwitchLang />
    </header>
  )
}

export default Header
