import fixitLogo from '@/assets/icons/fixit.svg'
import devLogo from '@/assets/images/dev-logo.svg'
import hashnodeLogo from '@/assets/images/hashnode-logo.svg'
import { useTranslation } from 'react-i18next'

function Supports() {
  const { t } = useTranslation()

  return (
    <div className="md:w-6/12 my-20 mx-auto">
      <div className="text-center m-4">
        <p className="text-2xl my-2 font-semibold font-Inter text-gray-600">{t('home.supportsPlatforms')}</p>
      </div>
      <div className="flex mx-auto justify-center">
        <img alt="hashnode" className="w-20 m-2" src={hashnodeLogo} />
        <img alt="dev" className="w-20 m-2" src={devLogo} />
        <img alt="hugo-fixit" className="w-20 m-2" src={fixitLogo} />
      </div>
    </div>
  )
}

export default Supports
