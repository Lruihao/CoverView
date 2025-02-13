import type { ChangeEventHandler } from 'react'
import { languages } from '@/i18n'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function SwitchLang() {
  const { i18n } = useTranslation()
  const currentLang = i18n.resolvedLanguage
  const [selected, setSelected] = useState(currentLang)

  const changeLanguage: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const lang = e.target.value
    i18n.changeLanguage(lang)
    setSelected(lang)
  }

  return (
    <select
      className="font-Nunito font-semibold text-sm bg-transparent outline-none cursor-pointer"
      value={selected}
      onChange={changeLanguage}
    >
      {
        languages.map(language => (
          <option key={language.code} value={language.code}>{language.name}</option>
        ))
      }
    </select>
  )
}

export default SwitchLang
