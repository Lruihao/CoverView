/* eslint-disable react-dom/no-dangerously-set-innerhtml */
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function Faq() {
  const [showMsg, setShowMsg] = useState(false)
  const { t } = useTranslation()

  return (
    <>
      <Header />
      <div className="mx-auto md:pt-20 pt-10 pb-20 md:px-48 px-4">
        <h1 className="mx-auto font-bold md:text-4xl text-2xl font-Anek text-center">{t('faq.title')}</h1>
        <div className="flex flex-wrap justify-center md:mt-20 mt-10 font-Inter relative">
          {(t('faq.questions', { returnObjects: true }) as { a: string, q: string }[]).map(item => (
            <div className="md:w-1/2 grow p-4" key={item.a}>
              <p className="text-xl font-bold py-2">{item.q}</p>
              <p className="text-lg text-gray-700" dangerouslySetInnerHTML={{ __html: item.a }} />
            </div>
          ))}
        </div>

        <div className="md:w-1/2 mx-auto text-center md:mt-20 mt-10">
          <button type="button" className="text-6xl text-center m-2" onClick={() => setShowMsg(!showMsg)}>💡</button>
          <p className="text-xl font-Anek font-semibold text-gray-800">{t('faq.tips.title')}</p>
        </div>
        <div
          className={`md:w-7/12 text-4xl border border-gray-200 text-center mx-auto mt-10 p-10 rounded-xl shadow-md font-Nunito ${showMsg ? 'block' : 'hidden'}`}
        >
          {t('faq.tips.content')}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Faq
