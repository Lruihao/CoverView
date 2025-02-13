/* eslint-disable react-dom/no-dangerously-set-innerhtml */
import { useTranslation } from 'react-i18next'

function Importance() {
  const { t } = useTranslation()

  return (
    <div className="md:w-10/12 mx-auto flex flex-col">
      <div className="md:w-9/12 text-center mx-auto">
        <h2 className="text-5xl py-4 font-bold font-Anek text-gray-700">{t('home.whyCoverImages')}</h2>
      </div>

      <div className=" flex md:flex-row flex-col mx-auto justify-center my-10">
        <div className="m-10 p-10 bg-white rounded-xl shadow-xl shadow-gray-100 flex flex-col md:w-4/12">
          <div className="my-2 bg-purple-300 h-24 w-24 p-4 flex justify-center items-center rounded-full">
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
          <p className="text-2xl md:text-left text-center text-gray-700" dangerouslySetInnerHTML={{ __html: t('home.reason1') }} />
        </div>

        <div className="m-10 p-10 bg-white rounded-xl shadow-xl shadow-gray-100 flex flex-col md:w-4/12">
          <div className="my-2 bg-green-300 h-24 w-24 p-4 flex justify-center items-center rounded-full">
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
          <p className="text-2xl md:text-left text-center text-gray-700" dangerouslySetInnerHTML={{ __html: t('home.reason2') }} />
        </div>
      </div>
    </div>
  )
}

export default Importance
