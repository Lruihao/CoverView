import type { ColorTheme, ThemeConfig } from '../types'
import { TabPanel } from '@headlessui/react'
import { useTranslation } from 'react-i18next'
import { themeOptions } from '../common'
import RandomTheme from './RandomTheme'

export interface RandomThemeProps {
  settings: ThemeConfig
  updateSettings: (updater: Partial<ThemeConfig>) => void
}

function EditorTheme({ settings, updateSettings }: RandomThemeProps) {
  const { t } = useTranslation()
  const getRandomTheme = (theme: ColorTheme, pattern: string) =>
    updateSettings({ pattern, bgColor: theme.bgColor, borderColor: theme.bdColor })
  return (
    <TabPanel className="h-full flex flex-col">
      <div className="flex items-center justify-between border rounded-xl border-gray-50 px-4 py-2">
        <h2 className="text-lg font-inter font-semibold">{t('editor.themes')}</h2>
        <RandomTheme onThemeChange={getRandomTheme} />
      </div>

      <div className="h-full flex flex-wrap overflow-y-scroll">
        {
          themeOptions.map(theme => (
            <div
              className={`${theme.name === 'background' ? 'w-full' : 'w-1/2'} p-2`}
              key={theme.name}
              title={theme.name}
            >
              <img
                alt={theme.name}
                className={`${settings.theme === theme.name ? 'border-2 border-indigo-400 hover:border-indigo-500' : 'border border-gray-100 hover:border-gray-200'} cursor-pointer hover:scale-105 duration-300`}
                src={theme.src}
                onClick={() => updateSettings({ theme: theme.name })}
              />
            </div>
          ))
        }
      </div>
    </TabPanel>
  )
}

export default EditorTheme
