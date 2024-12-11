import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import logo from '../assets/icons/logo.png'
import SwitchLang from './SwitchLang'

function Header() {
  const { t } = useTranslation()
  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 text-xl md:px-2 flex border-b border-gray-100 p-2 w-full">
      <Link className="flex items-center" to="/">
        <img alt="logo" className="w-8 h-8 mx-2" src={logo} />
        <h1 className="font-semibold">CoverView</h1>
      </Link>

      <div className="flex items-center md:gap-8 gap-2 ml-auto md:mr-4">
        <Link className="text-gray-700 hover:text-gray-800 text-base font-Nunito" to="/faq">
          💡
          {' '}
          <span className="hidden md:inline-block">{t('common.howToUse')}</span>
        </Link>
        <a
          className="text-gray-700 hover:text-gray-800 text-base font-Nunito"
          href="https://github.com/Lruihao/CoverView"
          rel="noreferrer"
          target="_blank"
        >
          <span className="text-sm">
            ⭐
            {t('common.star')}
          </span>
        </a>
        <SwitchLang />
      </div>
    </div>
  )
}

export default Header
