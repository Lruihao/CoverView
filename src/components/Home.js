import React from 'react'
import { useTranslation } from 'react-i18next'
import SwitchLang from './SwitchLang'
import { Link } from 'react-router-dom'
import logo from '../assets/icons/logo.png'
import cover1 from '../assets/images/cover1.webp'
import cover2 from '../assets/images/cover2.webp'
import cover3 from '../assets/images/cover3.webp'
import cover4 from '../assets/images/cover4.webp'
import step1 from '../assets/images/step1.png'
import step2 from '../assets/images/step2.png'
import hashnodeLogo from '../assets/images/hashnode-logo.png'
import devLogo from '../assets/images/dev-logo.png'
import WallOfLove from './walloflove'

function Home() {
  const { t } = useTranslation()
  const tweetText = encodeURIComponent('type your thoughts here, Try https://coverview.lruihao.cn by @Lruihao')

  return (
    <div className="bg-gray-50">
      <div className="text-xl flex border-b border-gray-100 p-2 md:w-10/12 mx-auto">
        <div className="flex items-center">
          <img alt="logo" className="w-8 h-8 mx-2" src={logo} />
          <h1 className="font-semibold md:text-xl text-lg font-Inter">CoverView</h1>
        </div>
        <a
          className="hover:translate-x-2 duration-300 bg-gray-700 group rounded-xl md:px-4 text-white md:text-sm text-xs ml-auto mr-2 font-Inter font-semibold p-2"
          href="https://github.com/Lruihao/CoverView"
          rel="noreferrer"
          target="_blank"
        >
          <span className="text-sm">⭐ {t('common.star')}</span>
        </a>
        <SwitchLang />
      </div>

      <div className="mx-auto md:px-20 py-6 flex flex-col items-center">
        <h1 className="md:w-7/12 m-10 text-center md:text-5xl text-3xl font-extrabold text-gray-700 font-Anek">{t('home.description')}</h1>
        <Link className="hover:translate-x-2 duration-300 bg-gray-700 hover:bg-gray-800 group rounded-full px-4 md:px-8 text-white md:text-2xl text-lg mx-auto font-Inter font-semibold md:p-4 p-2" to="/editor">
          <span className="md:text-2xl text-lg">{t('home.openEditor')} ➡️</span>
        </Link>
      </div>

      <div className=" temple flex flex-row items-center justify-center mx-auto md:w-10/12">
        <div className="m-4 transform -translate-y-20 border animate hover:scale-105 hover:-rotate-3  rotate-6 duration-100 bg-white p-2 shadow-sm w-1/5 rounded-lg flex flex-col ">
          <img alt="cover1" className="border border-gray-100 rounded mb-2" src={cover2} />
          <p className="animate animate-pulse bg-gray-50 md:h-5 h-2 rounded mb-2" />
          <p className="animate animate-pulse w-8/12 bg-gray-50 md:h-5 h-2 rounded mb-2" />
        </div>

        <div className="m-4 transform hover:scale-105 hover:rotate-3 -rotate-2  duration-300 bg-white p-4 shadow-sm w-1/3 rounded-lg flex flex-col ">
          <img alt="cover-2" className="rounded border border-gray-100 mb-2" src={cover1} />
          <p className="animate animate-pulse bg-gray-50 md:h-6 h-3 rounded mb-2" />
          <p className="animate animate-pulse w-8/12 bg-gray-50 md:h-6 h-3 rounded mb-2" />
        </div>

        <div className="m-4 transform -translate-y-20 border animate hover:scale-105 hover:rotate-3 -rotate-6 duration-100 bg-white p-2 shadow-sm w-1/5 rounded-lg flex flex-col ">
          <img alt="cover3" className="rounded border border-gray-100 mb-2" src={cover3} />
          <p className="animate animate-pulse bg-gray-50 md:h-5 h-2 rounded mb-2" />
          <p className="animate animate-pulse w-8/12 bg-gray-50 md:odd:h-5 h-2 rounded mb-2" />
        </div>
      </div>

      <div className="md:my-32  my-10 mx-auto">
        <div className="md:w-10/12 mx-auto flex flex-col ">
          <div className="md:w-9/12 text-center mx-auto ">
            <h2 className="text-5xl py-4 font-bold font-Anek text-gray-700">{t('home.whyCoverImages')}</h2>
          </div>

          <div className="flex md:flex-row flex-col mx-auto justify-center my-10">
            <div className="m-10 p-10 bg-white rounded-xl shadow-xl shadow-gray-100 flex flex-col  md:w-4/12 ">
              <div className=" my-2 bg-purple-300 h-24 w-24 p-4 flex justify-center items-center rounded-full">
                <svg
                  className="text-white w-20 h-20"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <p className="text-2xl md:text-left text-center text-gray-700" dangerouslySetInnerHTML={{__html: t('home.reason1')}} />
            </div>

            <div className="m-10 p-10 bg-white rounded-xl shadow-xl shadow-gray-100 flex  flex-col  md:w-4/12 ">
              <div className=" my-2 bg-green-300 h-24 w-24 p-4 flex justify-center items-center rounded-full">
                <svg
                  className="text-white w-20 h-20"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <p className="text-2xl md:text-left text-center text-gray-700" dangerouslySetInnerHTML={{__html: t('home.reason2')}} />
            </div>
          </div>
        </div>

        <h2 className="md:text-5xl text-3xl md:w-1/2 mx-auto mt-32 font-bold font-Anek text-center text-gray-700" dangerouslySetInnerHTML={{__html: t('home.step.title')}} />
        <div className="md:w-8/12 my-20 flex md:flex-row flex-col mx-auto">
          <div className="md:w-1/3 flex flex-col mx-10">
            <div className="text-center">
              <div className="text-xl mx-auto w-10 h-10 p-2 font-bold text-white bg-gray-700 rounded-full flex items-center justify-center">1</div>
              <p className="text-2xl my-2 font-semibold font-Inter text-gray-600">{t('home.step.1')}</p>
            </div>
            <img alt="preview" className="mt-2 rounded-lg shadow-sm" src={step1} />
          </div>

          <div className="flex items-center font-bold text-3xl text-center mx-auto">➟➟➟➟➩</div>

          <div className="flex flex-col md:w-1/3 mx-10">
            <div className="text-center">
              <div className="text-xl mx-auto w-10 h-10 p-2 font-bold text-white bg-gray-700 rounded-full flex items-center justify-center">2</div>
              <p className="text-2xl my-2 font-semibold font-Inter text-gray-600">{t('home.step.2')}</p>
            </div>
            <img alt="preview" className="mt-2 rounded-lg shadow-sm" src={step2} />
          </div>
        </div>

        <div className="md:w-8/12  flex md:flex-row flex-col justify-center items-center mx-auto">
          <div className="text-center md:w-1/3 m-4">
            <div className="text-xl mx-auto w-10 h-10 p-2 font-bold text-white bg-gray-700 rounded-full flex items-center justify-center">3</div>
            <p className="text-2xl my-2 font-semibold font-Inter text-gray-600">{t('home.step.3.0')}</p>
            <p className="text-xl">{t('home.step.3.1')}</p>
          </div>

          <div className="flex md:w-8/12 hideout p-6">
            <div className="flex flex-col w-1/2 ">
              <img alt="preview" className=" hover:scale-105 duration-300 m-2 rounded-lg shadow-sm" src={cover1} />
              <img alt="preview" className="hover:scale-105 duration-300  m-2 rounded-lg shadow-sm" src={cover2} />
            </div>

            <div className="flex flex-col mt-4 w-1/2">
              <img alt="preview" className="hover:scale-105 duration-300   m-2 rounded-lg shadow-sm" src={cover3} />
              <img alt="preview" className="hover:scale-105 duration-300  m-2 rounded-lg shadow-sm" src={cover4} />
            </div>
          </div>
        </div>

        <div className="md:w-6/12 my-20 mx-auto">
          <div className="text-center m-4">
            <p className="text-2xl my-2 font-semibold font-Inter text-gray-600">{t('home.supportsPlatforms')}</p>
          </div>
          <div className="flex mx-auto justify-center">
            <img alt="hashnode" className="w-20 m-2" src={hashnodeLogo} />
            <img alt="dev" className="w-20 m-2" src={devLogo} />
          </div>
        </div>

        <button className="flex mx-auto mb-4 hover:translate-x-2 duration-300 bg-blue-400 rounded-full px-6 text-white text-xl font-Inter font-semibold p-2">
          <a href={`https://twitter.com/intent/tweet?text=${tweetText}`} rel="noreferrer" target="_blank">{t('home.shareOnTwitter')} 👏</a>
        </button>

        <WallOfLove />

        <div className="md:w-8/12 mx-auto pt-24 p-4">
          <h2 className="text-6xl text-center font-Anek font-bold text-gray-700 mx-auto">{t('home.summary.title')}</h2>
          <p className="text-2xl text-center py-4 md:w-8/12 mx-auto">{t('home.summary.content')}</p>
          <Link to="/editor">
            <button className="flex mx-auto my-4 hover:translate-x-2 duration-300 bg-gray-700  rounded-full px-6 text-white text-xl font-Inter font-semibold p-4">
              {t('home.tryItNow')} ➡️
            </button>
          </Link>
        </div>
      </div>

      <footer className="bg-white p-10 flex md:flex-row flex-col font-Inter md:px-20 md:gap-20 justify-center items-center">
        <div className="md:w-1/2 flex flex-col">
          <span className="text-lg mt-2 md:text-left text-center" dangerouslySetInnerHTML={{__html: t('home.footer.copyright')}} />
          <span className="text-lg mt-1 md:text-left text-center" dangerouslySetInnerHTML={{__html: t('home.footer.authorBlog')}} />
        </div>

        <div className="md:w-1/3 md:text-lg md:justify-end justify-center text-sm flex flex-wrap">
          <Link className="m-2 hover:font-semibold" to="/faq">💡 {t('common.howToUse')}</Link>
          <a className="m-2 hover:font-semibold" href="https://github.com/Lruihao/CoverView" rel="noreferrer" target="_blank">⭐ {t('common.star')}</a>
          <span className="text-sm font-Nunito mx-2">
            {t('home.footer.thanks')}{' '}
            <a className="font-semibold" href="https://twitter.com/WankhadeRutik" rel="noreferrer" target="_blank">Rutik Wankhade</a>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Home
