import type { Resource } from 'i18next'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import translationEN from './en'
import translationZhCN from './zh-CN'

const langResources: Resource = {
  'en': {
    name: 'English',
    translation: translationEN,
  },
  'zh-CN': {
    name: '简体中文',
    translation: translationZhCN,
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // 检测用户当前使用的语言
    // https://github.com/i18next/i18next-browser-languageDetector
    detection: {
      // 使用 localStorage 存储用户选择的语言
      lookupLocalStorage: 'coverview-lang',
    },
    // 初始化 i18next
    // https://www.i18next.com/overview/configuration-options
    debug: import.meta.env.NODE_ENV === 'development',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: langResources,
  })

/**
 * 监听语言变化
 */
i18n.on('languageChanged', (lang) => {
  localStorage.setItem('coverview-lang', lang)
  document.title = `CoverView - ${i18n.t('home.description')}`
})

export const languages = Object.keys(langResources).map(code => ({
  code,
  name: langResources[code].name as string,
}))

export default i18n
