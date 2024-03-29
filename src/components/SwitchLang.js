import React from 'react'
import { useTranslation } from 'react-i18next'
import { languages } from '../i18n'

function SwitchLang() {
  const { i18n } = useTranslation()
  const currentLang = i18n.resolvedLanguage
  const [selected, setSelected] = React.useState(currentLang)

  const changeLanguage = (e) => {
    const lang = e.target.value
    i18n.changeLanguage(lang)
    setSelected(lang)
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
