/* eslint-disable react-dom/no-dangerously-set-innerhtml */
import { scrollToTop } from '@/common/utils'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-gradient-to-tr from-gray-700 via-slate-900 to-gray-800 text-white p-2">
      <div className="md:w-8/12 mx-auto pt-32 p-6">
        <h2 className="md:text-6xl text-4xl text-center font-Anek font-bold mx-auto">{t('home.summary.title')}</h2>
        <p className="md:text-2xl text-lg font-Inter text-gray-300 text-center py-4 md:w-8/12 mx-auto">{t('home.summary.content')}</p>
        <Link to="/editor">
          <button type="button" className="flex mx-auto my-4 hover:translate-x-2 duration-300 bg-indigo-500 hover:bg-indigo-600 rounded-full text-white md:text-xl text-base font-Nunito font-semibold p-4 px-8">
            {t('home.tryItNow')}
            {' '}
            ➜
          </button>
        </Link>
      </div>
      <div className="p-10 flex md:text-lg text-sm md:flex-row flex-col-reverse font-Inter md:px-20 md:gap-20 justify-center items-center">
        <div className="md:w-1/2 md:text-left text-center">
          <span dangerouslySetInnerHTML={{ __html: t('home.footer.copyright') }} />
        </div>

        <div className="md:w-1/3 md:text-lg text-sm flex flex-col md:items-end items-center">
          <div className="flex md:justify-end justify-center">
            <Link className="m-2 hover:underline" to="/faq" onClick={scrollToTop}>
              {t('common.howToUse')}
            </Link>
            <a
              className="m-2 hover:underline"
              href="https://github.com/Lruihao/CoverView"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </div>
          <span
            className="text-xs mx-2 md:text-left text-center text-gray-300 hidden md:inline"
            dangerouslySetInnerHTML={{ __html: t('home.footer.authorBlog') }}
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
