import logo from '@/assets/icons/logo.png'
import { scrollToTop } from '@/common/utils'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import SwitchLang from './SwitchLang'

function Header() {
  const { t } = useTranslation()
  const tweetText = encodeURIComponent(t('home.tweetText'))

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-indigo-50/80 text-xl px-4 py-2 flex border-b border-indigo-100 w-full">
      <Link className="flex items-center" to="/" onClick={scrollToTop}>
        <img alt="logo" className="w-8 h-8 mx-2" src={logo} />
        <h1 className="font-semibold">CoverView</h1>
      </Link>

      <div className="flex items-center md:gap-4 gap-2 ml-auto md:mr-4">
        <a
          className="bg-gray-700 hover:bg-gray-800 px-4 rounded-full p-1 text-white md:text-sm flex items-center text-xs font-Nunito"
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
        <a
          href={`https://x.com/intent/tweet?text=${tweetText}`}
          className="bg-blue-400 hover:bg-blue-500 md:text-sm text-xs rounded-full px-4 font-semibold text-white p-1 hidden md:inline"
          rel="noreferrer"
          target="_blank"
        >
          {t('home.shareOnTwitter')}
        </a>
        <SwitchLang />
      </div>
    </header>
  )
}

export default Header
