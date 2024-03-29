import React from 'react'
import { useTranslation } from 'react-i18next'
import { languages } from '../i18n'

function SwitchLang() {
  const { i18n } = useTranslation()
  const currentLang = localStorage.getItem('coverview-lang') ?? i18n.resolvedLanguage
  const [selected, setSelected] = React.useState(currentLang)

  // 初始化本地或已选择的语言
  React.useEffect(() => {
    i18n.changeLanguage(currentLang)
  }, [i18n, currentLang])

  const changeLanguage = (e) => {
    const lang = e.target.value
    i18n.changeLanguage(lang)
    setSelected(lang)
    localStorage.setItem('coverview-lang', lang)
  }

  return (
    <select
      className="font-Nunito font-semibold text-sm bg-transparent outline-none cursor-pointer ml-4"
      value={selected}
      onChange={changeLanguage}
    >
      {
        languages.map((language) => (
          <option key={language.code} value={language.code}>{language.name}</option>
        ))
      }
    </select>
  )
}

export default SwitchLang
