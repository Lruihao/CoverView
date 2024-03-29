import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './en'
import zhCN from './zh-cn'

i18n
  /**
   * 检测用户当前使用的语言
   * https://github.com/i18next/i18next-browser-languageDetector
   */
  .use(LanguageDetector)
  // 注入 react-i18next 实例
  .use(initReactI18next)
  /**
   * 初始化 i18next
   * https://www.i18next.com/overview/configuration-options
   */
  .init({
    debug: process.env.NODE_ENV === 'development',
    lng: 'zh-CN',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      'en': en,
      'zh-CN': zhCN,
    },
  })

i18n.on('languageChanged', (lang) => {
  // console.log(lang)
  document.title = `CoverView - ${i18n.t('home.description')}`
})

export const languages = [
  { code: 'en', name: en.name },
  { code: 'zh-CN', name: zhCN.name },
]

export default i18n
