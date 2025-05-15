/* eslint-disable react-dom/no-dangerously-set-innerhtml */
import { useTranslation } from 'react-i18next'
import cover1 from '@/assets/images/cover1.webp'
import cover2 from '@/assets/images/cover2.webp'
import cover3 from '@/assets/images/cover3.webp'
import cover4 from '@/assets/images/cover4.webp'
import step1 from '@/assets/images/step1.png'
import step2 from '@/assets/images/step2.png'

function Usage() {
  const { t } = useTranslation()

  return (
    <div className="bg-violet-50/70">
      <h2 className="md:text-5xl text-3xl md:w-7/12 md:mx-auto pt-20 mx-10 font-bold font-Anek text-center text-gray-700" dangerouslySetInnerHTML={{ __html: t('home.step.title') }} />
      <div className="md:w-8/12 mt-10 mb-6 flex md:flex-row flex-col mx-auto justify-between gap-10">
        <div className="md:w-1/3 flex flex-col mx-10">
          <div className="text-center">
            <div className="text-xl w-max mx-auto text-white py-1 px-4 font-Anek font-semibold bg-indigo-400 rounded-full">Step 1</div>
            <p className="md:text-3xl text-2xl p-4 text-center mx-auto my-2 font-semibold font-Inter text-gray-700">{t('home.step.1')}</p>
          </div>
          <img alt="preview" className="mt-2 rounded-lg shadow-xs" src={step1} />
        </div>

        <div className="flex flex-col md:w-1/3 mx-10">
          <div className="text-center">
            <div className="text-xl w-max mx-auto text-white py-1 px-4 font-Anek font-semibold bg-indigo-400 rounded-full">Step 2</div>
            <p className="md:text-3xl text-2xl p-4 text-center mx-auto my-2 font-semibold font-Inter text-gray-700">{t('home.step.2')}</p>
          </div>
          <img alt="preview" className="mt-2 rounded-lg shadow-xs" src={step2} />
        </div>
      </div>

      <div className="md:w-8/12 flex md:flex-row flex-col justify-center items-center mx-auto pb-10">
        <div className="text-center md:w-1/3 m-4">
          <div className="text-xl w-max mx-auto text-white py-1 px-4 font-Anek font-semibold bg-indigo-400 rounded-full">Step 3</div>
          <p className="md:text-3xl text-2xl p-4 text-center mx-auto my-2 font-semibold font-Inter text-gray-700">{t('home.step.3.0')}</p>
          <p className="md:text-xl text-gray-500 text-lg">{t('home.step.3.1')}</p>
        </div>

        <div className="flex md:w-8/12 hideout p-6">
          <div className="flex flex-col w-1/2 ">
            <img alt="preview" className="hover:scale-105 duration-300 m-2 rounded-lg shadow-xs" src={cover1} />
            <img alt="preview" className="hover:scale-105 duration-300 m-2 rounded-lg shadow-xs" src={cover2} />
          </div>

          <div className="flex flex-col mt-4 w-1/2">
            <img alt="preview" className="hover:scale-105 duration-300 m-2 rounded-lg shadow-xs" src={cover3} />
            <img alt="preview" className="hover:scale-105 duration-300 m-2 rounded-lg shadow-xs" src={cover4} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Usage
