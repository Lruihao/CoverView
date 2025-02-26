import type { ColorTheme, ThemeConfig, ThemeFont, ThemeIcon } from '@/types'
import fixitIcon from '@/assets/icons/fixit.svg'
import { fontOptions, patternOptions, platformOptions } from '@/common'
import { useDevIcon } from '@/hooks/useDevIcon'
import { useTranslation } from 'react-i18next'
import Select from 'react-select'
import EditorTheme from './EditorTheme'
import RandomTheme from './RandomTheme'

export interface EditorSettingsProps {
  settings: ThemeConfig
  updateSettings: (updater: Partial<ThemeConfig>) => void
  handleReset: () => void
}

function EditorSettings({ settings, updateSettings, handleReset }: EditorSettingsProps) {
  const { t } = useTranslation()
  const devIconOptions = useDevIcon()

  const handleSelectPlatform = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'hugo-fixit') {
      updateSettings({ platform: e.target.value, icon: { label: 'Hugo FixIt', value: 'hugo-fixit', opts: [] } })
      return
    }
    updateSettings({ platform: e.target.value })
  }
  const getRandomTheme = (theme: ColorTheme, pattern: string) =>
    updateSettings({ pattern, bgColor: theme.bgColor, borderColor: theme.bdColor })

  return (
    <div className="lg:w-1/3 p-4 border-dashed border-r-2 border-gray-300 bg-linear-to-r from-indigo-50/50 via-gray-100 to-indigo-50/50">
      <div className="m-2 flex flex-col">
        <span className="font-medium pb-1 text-sm">{t('editor.title')}</span>
        <textarea
          className="focus:outline-hidden border border-gray-300/70 hover:border-gray-300 bg-white text-gray-700 text-xl rounded-sm p-2 h-24"
          placeholder={t('editor.title')}
          value={settings.title}
          onChange={e => updateSettings({ title: e.target.value })}
        />
      </div>

      <div className="flex flex-col m-2">
        <span className="font-medium pb-1 text-sm">{t('editor.author')}</span>
        <input
          className="focus:outline-hidden border border-gray-300/70 hover:border-gray-300 text-gray-700 text-xl rounded-sm bg-white p-2"
          placeholder={t('editor.author')}
          type="text"
          value={settings.author}
          onChange={e => updateSettings({ author: e.target.value })}
        />
      </div>

      <EditorTheme
        settings={settings}
        updateSettings={updateSettings}
      />

      <div className="flex flex-col m-2">
        <span className="font-medium pb-1 text-sm">{t('editor.icon')}</span>
        <Select
          className="outline-hidden focus:outline-hidden text-xl text-gray-700 rounded-sm"
          formatOptionLabel={formatOptionLabel}
          options={devIconOptions}
          value={settings.icon}
          onChange={selected => updateSettings({
            icon: selected!,
            iconStyle: selected!.opts[0],
            iconStyleOptions: selected!.opts,
            customIcon: '',
          })}
        />
      </div>

      <div className={`flex items-center justify-center ${settings.icon.value === 'custom' ? '' : 'hidden'}`}>
        <input
          className="focus:outline-hidden text-base cursor-pointer bg-white rounded-sm border border-gray-300/70 hover:border-gray-300 p-2 m-2 w-full"
          type="file"
          onChange={e => updateSettings({
            customIcon: e.target.files?.[0]
              ? URL.createObjectURL(e.target.files[0])
              : '',
          })}
        />
      </div>

      <div className="flex items-center">
        <div className="flex flex-col m-2 w-1/2">
          <span className="font-medium pb-1 text-sm">{t('editor.font')}</span>
          <select
            className="focus:outline-hidden text-gray-700 text-xl p-2 rounded-sm bg-white border border-gray-300/70 hover:border-gray-300"
            value={settings.font}
            onChange={e => updateSettings({ font: e.target.value as ThemeFont })}
          >
            {
              fontOptions.map(font => (
                <option key={font} value={font}>{t(`editor.fonts.${font}`)}</option>
              ))
            }
          </select>
        </div>
        <div className="flex flex-col m-2 w-full">
          <span className="font-medium pb-1 text-sm">{t('editor.platform')}</span>
          <select
            className="focus:outline-hidden text-gray-700 text-xl p-2 rounded-sm bg-white border border-gray-300/70 hover:border-gray-300"
            value={settings.platform}
            onChange={handleSelectPlatform}
          >
            <option value="custom">{t('editor.custom')}</option>
            {
              platformOptions.map(platform => (
                <option key={platform.value} value={platform.value}>{platform.label}</option>
              ))
            }
          </select>
        </div>
      </div>

      <div className={`flex items-center justify-center ${settings.platform === 'custom' ? '' : 'hidden'}`}>
        <input
          className="w-1/3 focus:outline-hidden bg-white border border-gray-300/70 hover:border-gray-300 text-gray-700 text-xl rounded-sm p-2 m-2"
          min={500}
          placeholder="width"
          type="number"
          value={settings.customPlatformWidth}
          onChange={e => updateSettings({ customPlatformWidth: Number(e.target.value) })}
        />
        <input
          className="w-1/3 focus:outline-hidden bg-white border border-gray-300/70 hover:border-gray-300 text-gray-700 text-xl rounded-sm p-2 m-2"
          min={1}
          placeholder="x"
          type="number"
          value={settings.customPlatformX}
          onChange={e => updateSettings({ customPlatformX: Number(e.target.value) })}
        />
        :
        <input
          className="w-1/3 focus:outline-hidden bg-white border border-gray-300/70 hover:border-gray-300 text-gray-700 text-xl rounded-sm p-2 m-2"
          min={1}
          placeholder="y"
          type="number"
          value={settings.customPlatformY}
          onChange={e => updateSettings({ customPlatformY: Number(e.target.value) })}
        />
      </div>

      <div className={`flex items-center ${settings.theme === 'background' ? 'hidden' : ''}`}>
        <div className="flex flex-col m-2 w-1/2">
          <span className="font-medium pb-1 text-sm">{t('editor.color')}</span>
          <div className="bg-white border border-gray-300/70 hover:border-gray-300 rounded-sm flex items-center p-2">
            <span className="text-xl text-gray-700 mx-2">{settings.bgColor}</span>
            <input
              className="h-8 w-8 ml-auto mr-1 rounded-sm"
              type="color"
              value={settings.bgColor}
              onChange={e => updateSettings({ bgColor: e.target.value })}
            />
          </div>
        </div>
        <div className="flex flex-col m-2 w-1/2">
          <span className="font-medium pb-1 text-sm">{t('editor.pattern')}</span>
          <select
            className="focus:outline-hidden bg-white border border-gray-300/70 hover:border-gray-300 text-xl p-2 rounded-sm"
            value={settings.pattern}
            onChange={e => updateSettings({ pattern: e.target.value })}
          >
            {patternOptions.map(item => (<option key={item}>{item}</option>))}
          </select>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 md:gap-4 m-2 mt-4">
        <button
          type="button"
          className="flex items-center bg-gray-700 hover:bg-gray-800 text-white rounded-lg py-2 px-4 border"
          onClick={handleReset}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 16c1.671 0 3-1.331 3-3s-1.329-3-3-3-3 1.331-3 3 1.329 3 3 3z"></path>
            <path d="M20.817 11.186a8.94 8.94 0 0 0-1.355-3.219 9.053 9.053 0 0 0-2.43-2.43 8.95 8.95 0 0 0-3.219-1.355 9.028 9.028 0 0 0-1.838-.18V2L8 5l3.975 3V6.002c.484-.002.968.044 1.435.14a6.961 6.961 0 0 1 2.502 1.053 7.005 7.005 0 0 1 1.892 1.892A6.967 6.967 0 0 1 19 13a7.032 7.032 0 0 1-.55 2.725 7.11 7.11 0 0 1-.644 1.188 7.2 7.2 0 0 1-.858 1.039 7.028 7.028 0 0 1-3.536 1.907 7.13 7.13 0 0 1-2.822 0 6.961 6.961 0 0 1-2.503-1.054 7.002 7.002 0 0 1-1.89-1.89A6.996 6.996 0 0 1 5 13H3a9.02 9.02 0 0 0 1.539 5.034 9.096 9.096 0 0 0 2.428 2.428A8.95 8.95 0 0 0 12 22a9.09 9.09 0 0 0 1.814-.183 9.014 9.014 0 0 0 3.218-1.355 8.886 8.886 0 0 0 1.331-1.099 9.228 9.228 0 0 0 1.1-1.332A8.952 8.952 0 0 0 21 13a9.09 9.09 0 0 0-.183-1.814z"></path>
          </svg>
          <span>{t('editor.resetBtn')}</span>
        </button>
        <RandomTheme
          className={settings.theme === 'background' ? 'hidden' : ''}
          onThemeChange={getRandomTheme}
        />
      </div>
    </div>
  )
}

function formatOptionLabel({ value, label, opts }: ThemeIcon) {
  return (
    <div className="flex items-center">
      <span className="mr-2">{label}</span>
      <div className="ml-auto mr-2">
        {value !== 'custom' && (
          <img
            alt={`${label} Icon`}
            className="w-6 h-6"
            src={value === 'hugo-fixit'
              ? fixitIcon
              : `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${value}/${value}-${opts[0]}.svg`}
          />
        )}
      </div>
    </div>
  )
}

export default EditorSettings
