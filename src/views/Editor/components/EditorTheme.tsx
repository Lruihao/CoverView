import type { ThemeConfig } from '@/types'
import { useTranslation } from 'react-i18next'
import { themeOptions } from '@/common'

export interface RandomThemeProps {
  settings: ThemeConfig
  updateSettings: (updater: Partial<ThemeConfig>) => void
}

function EditorTheme({ settings, updateSettings }: RandomThemeProps) {
  const { t } = useTranslation()
  return (
    <div className="m-2 flex flex-col">
      <span className="font-medium pb-1 text-sm">{t('editor.themes')}</span>
      <div className="grid grid-cols-5 gap-2">
        <div className="col-span-2 row-span-2" title="background">
          <img
            alt="background"
            className={`${settings.theme === 'background' ? 'border-2 border-indigo-400 hover:border-indigo-500' : 'border border-gray-100 hover:border-gray-200'} cursor-pointer hover:scale-105 duration-300 rounded-sm`}
            src={themeOptions[0].src}
            onClick={() => updateSettings({ theme: 'background' })}
          />
        </div>
        {
          themeOptions.slice(1).map(theme => (
            <div
              className="col-span-1"
              key={theme.name}
              title={theme.name}
            >
              <img
                alt={theme.name}
                className={`${settings.theme === theme.name ? 'border-2 border-indigo-400 hover:border-indigo-500' : 'border border-gray-100 hover:border-gray-200'} cursor-pointer hover:scale-105 duration-300 rounded-sm`}
                src={theme.src}
                onClick={() => updateSettings({ theme: theme.name })}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default EditorTheme
