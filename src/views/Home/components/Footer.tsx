/* eslint-disable react-dom/no-dangerously-set-innerhtml */
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-gray-800  text-white p-2">
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
      <div className="p-10 flex md:flex-row flex-col font-Inter md:px-20 md:gap-20 justify-center items-center">
        <div className="md:w-1/2 flex flex-col">
          <span className="text-lg mt-2 md:text-left text-center" dangerouslySetInnerHTML={{ __html: t('home.footer.copyright') }} />
          <span className="text-lg mt-1 md:text-left text-center hidden md:inline" dangerouslySetInnerHTML={{ __html: t('home.footer.authorBlog') }} />
        </div>

        <div className="md:w-1/3 md:text-lg md:justify-end justify-center text-sm flex flex-wrap">
          <Link className="m-2 hover:font-semibold" to="/faq">
            💡
            {' '}
            {t('common.howToUse')}
          </Link>
          <a className="m-2 hover:font-semibold" href="https://github.com/Lruihao/CoverView" rel="noreferrer" target="_blank">
            ⭐
            {' '}
            {t('common.star')}
          </a>
          <span className="text-sm font-Nunito mx-2 hidden md:inline">
            {t('home.footer.thanks')}
            {' '}
            <a className="font-semibold" href="https://twitter.com/WankhadeRutik" rel="noreferrer" target="_blank">Rutik Wankhade</a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
