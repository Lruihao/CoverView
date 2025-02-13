import type { ColorTheme, ThemeConfig, ThemeFont, ThemeIcon } from '@/types'
import fixitIcon from '@/assets/icons/fixit.svg'
import { fontOptions, patternOptions, platformOptions } from '@/common'
import { useDevIcon } from '@/hooks/useDevIcon'
import { TabPanel } from '@headlessui/react'
import { useTranslation } from 'react-i18next'
import Select from 'react-select'
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
    updateSettings({ platform: e.target.value })
    if (e.target.value === 'hugo-fixit') {
      updateSettings({ icon: { label: 'Hugo FixIt', value: 'hugo-fixit', opts: [] } })
    }
  }
  const getRandomTheme = (theme: ColorTheme, pattern: string) =>
    updateSettings({ pattern, bgColor: theme.bgColor, borderColor: theme.bdColor })

  return (
    <TabPanel>
      <div className="m-2 flex flex-col">
        <span className="font-medium pb-1">{t('editor.title')}</span>
        <textarea
          className="focus:outline-none border text-gray-700 text-xl rounded p-2 h-24"
          placeholder={t('editor.title')}
          value={settings.title}
          onChange={e => updateSettings({ title: e.target.value })}
        />
      </div>

      <div className="flex flex-col m-2">
        <span className="font-medium pb-1">{t('editor.author')}</span>
        <input
          className="focus:outline-none border text-gray-700 text-xl rounded bg-white p-2"
          placeholder={t('editor.author')}
          type="text"
          value={settings.author}
          onChange={e => updateSettings({ author: e.target.value })}
        />
      </div>

      <div className="flex flex-col m-2">
        <span className="font-medium pb-1">{t('editor.icon')}</span>
        <Select
          className="outline-none focus:outline-none text-xl text-gray-700"
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
          className="focus:outline-none text-lg cursor-pointer bg-white rounded border m-2"
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
          <span className="font-medium pb-1">{t('editor.font')}</span>
          <select
            className="focus:outline-none text-gray-700 text-xl p-2 rounded border"
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
          <span className="font-medium pb-1">{t('editor.platform')}</span>
          <select
            className="focus:outline-none text-gray-700 text-xl p-2 rounded border"
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
          className="w-1/3 focus:outline-none border text-gray-700 text-xl rounded p-2 m-2"
          min={500}
          placeholder="width"
          type="number"
          value={settings.customPlatformWidth}
          onChange={e => updateSettings({ customPlatformWidth: Number(e.target.value) })}
        />
        <input
          className="w-1/3 focus:outline-none border text-gray-700 text-xl rounded p-2 m-2"
          min={1}
          placeholder="x"
          type="number"
          value={settings.customPlatformX}
          onChange={e => updateSettings({ customPlatformX: Number(e.target.value) })}
        />
        :
        <input
          className="w-1/3 focus:outline-none border text-gray-700 text-xl rounded p-2 m-2"
          min={1}
          placeholder="y"
          type="number"
          value={settings.customPlatformY}
          onChange={e => updateSettings({ customPlatformY: Number(e.target.value) })}
        />
      </div>

      <div className={`flex items-center ${settings.theme === 'background' ? 'hidden' : ''}`}>
        <div className="flex flex-col m-2 w-1/2">
          <span className="font-medium pb-1">{t('editor.color')}</span>
          <div className="border rounded flex items-center p-2">
            <span className="text-xl text-gray-700 mx-2">{settings.bgColor}</span>
            <input
              className="h-8 w-8 ml-auto mr-1 rounded"
              type="color"
              value={settings.bgColor}
              onChange={e => updateSettings({ bgColor: e.target.value })}
            />
          </div>
        </div>
        <div className="flex flex-col m-2 w-1/2">
          <span className="font-medium pb-1">{t('editor.pattern')}</span>
          <select
            className="focus:outline-none border text-xl p-2 rounded"
            value={settings.pattern}
            onChange={e => updateSettings({ pattern: e.target.value })}
          >
            {patternOptions.map(item => (<option key={item}>{item}</option>))}
          </select>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 md:gap-4 m-2">
        <RandomTheme
          className={settings.theme === 'background' ? 'hidden' : ''}
          onThemeChange={getRandomTheme}
        />
        <button
          type="button"
          className="bg-gray-700 text-white rounded-lg text-lg font-semibold py-1 px-4 border"
          onClick={handleReset}
        >
          <span>{t('editor.resetBtn')}</span>
        </button>
      </div>
    </TabPanel>
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
