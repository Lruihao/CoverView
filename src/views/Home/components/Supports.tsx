import SvgIcon from '@/components/SvgIcon'
import { useTranslation } from 'react-i18next'

function Supports() {
  const { t } = useTranslation()

  return (
    <div className="pt-20 mx-auto bg-blue-50">
      <div className="text-center m-4">
        <p className="text-2xl my-2 font-semibold font-Inter text-gray-600">{t('home.supportsPlatforms')}</p>
      </div>
      <div className="flex mx-auto justify-center gap-4 p-2 text-[5rem]">
        <SvgIcon name="hashnode" />
        <SvgIcon name="dev" />
        <SvgIcon name="fixit" />
      </div>
    </div>
  )
}

export default Supports
