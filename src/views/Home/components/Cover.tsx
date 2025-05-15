import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import cover1 from '@/assets/images/cover1.webp'
import cover2 from '@/assets/images/cover2.webp'
import cover3 from '@/assets/images/cover3.webp'

function CoverSection() {
  const { t } = useTranslation()

  return (
    <div className="bg-indigo-50/80">
      <div className="mx-auto md:px-20 py-6 flex flex-col items-center">
        <h1 className="md:w-7/12 m-10 text-center md:text-5xl text-3xl font-extrabold text-gray-700 font-Anek">{t('home.description')}</h1>
        <Link className="hover:translate-x-2 duration-300 bg-gray-700 hover:bg-gray-800 group rounded-full px-4 md:px-8 text-white md:text-2xl text-lg mx-auto font-Inter font-semibold md:p-4 p-2" to="/editor">
          <span className="md:text-2xl text-lg">
            {t('home.goEditor')}
            {' '}
            ➜
          </span>
        </Link>
      </div>
      <div className="temple flex flex-row items-center justify-center mx-auto md:w-10/12 py-10">
        <div className="m-4 transform -translate-y-20 border border-gray-200 animate hover:scale-105 hover:-rotate-3 rotate-6 duration-100 bg-white p-2 shadow-xs w-1/5 rounded-lg flex flex-col">
          <img alt="cover1" className="border border-gray-100 rounded-sm mb-2" src={cover2} />
          <p className="animate animate-pulse bg-gray-50 md:h-5 h-2 rounded-sm mb-2" />
          <p className="animate animate-pulse w-8/12 bg-gray-50 md:h-5 h-2 rounded-sm mb-2" />
        </div>

        <div className="m-4 transform hover:scale-105 border border-gray-200 hover:rotate-3 -rotate-2 duration-300 bg-white p-4 shadow-xs w-1/3 rounded-lg flex flex-col">
          <img alt="cover-2" className="rounded-sm border border-gray-100 mb-2" src={cover1} />
          <p className="animate animate-pulse bg-gray-50 md:h-6 h-3 rounded-sm mb-2" />
          <p className="animate animate-pulse w-8/12 bg-gray-50 md:h-6 h-3 rounded-sm mb-2" />
        </div>

        <div className="m-4 transform -translate-y-20 border border-gray-200 animate hover:scale-105 hover:rotate-3 -rotate-6 duration-100 bg-white p-2 shadow-xs w-1/5 rounded-lg flex flex-col">
          <img alt="cover3" className="rounded-sm border border-gray-100 mb-2" src={cover3} />
          <p className="animate animate-pulse bg-gray-50 md:h-5 h-2 rounded-sm mb-2" />
          <p className="animate animate-pulse w-8/12 bg-gray-50 md:odd:h-5 h-2 rounded-sm mb-2" />
        </div>
      </div>
    </div>
  )
}

export default CoverSection
