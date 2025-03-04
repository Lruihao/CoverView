import logo from '@/assets/images/logo.png'
import SwitchLang from '@/components/SwitchLang'
import { useTranslation } from 'react-i18next'

function Header() {
  const { t } = useTranslation()

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-indigo-50/80 text-xl flex border-b border-indigo-50 p-2 w-full md:px-32">
      <div className="flex items-center">
        <img alt="logo" className="w-8 h-8 mx-2" src={logo} />
        <h1 className="font-semibold md:text-xl text-lg font-Inter">CoverView</h1>
      </div>
      <a
        className="hover:translate-x-2 duration-300 md:px-4 md:text-sm text-xs ml-auto mr-2 md:mr-4 font-Nunito font-semibold p-2"
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
