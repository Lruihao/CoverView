import type { ThemeConfig, ThemeFont } from '@/types'
import { defaultSettings } from '@/common'
import Header from '@/components/Header'
import { ImgProvider } from '@/components/ImgContext'
import { TabGroup, TabPanels } from '@headlessui/react'
import { useState } from 'react'
import ComponentToImg from './components/ComponentToImg'
import CoverImage from './components/CoverImage'
import EditorNav from './components/EditorNav'
import EditorSettings from './components/EditorSettings'
import EditorTheme from './components/EditorTheme'

function FontStyle({ font }: { font: ThemeFont }) {
  let fontStyle = ''
  switch (font) {
    // old-font https://excalidraw.nyc3.cdn.digitaloceanspaces.com/fonts/Virgil.woff2
    case 'font-Virgil':
      fontStyle
      = `
        @font-face {
          font-family: 'Virgil';
          font-display: swap;
          src: url(https://excalidraw.nyc3.cdn.digitaloceanspaces.com/fonts/Excalifont-Regular.woff2) format('woff2');
        }
      `
      break
    case 'font-MMT':
      fontStyle
      = `
        @font-face {
          font-family: 'MMT';
          font-display: swap;
          src: url(https://lruihao.cn/fonts/mmt_1.5.ttf) format('woff2');
        }
      `
      break
  }
  if (fontStyle) {
    fontStyle = fontStyle.replace(/\s+/g, ' ')
    return <style>{fontStyle}</style>
  }
}

function Editor() {
  const [settings, setSettings] = useState({ ...defaultSettings })

  const updateSettings = (updater: Partial<ThemeConfig>) => setSettings({ ...settings, ...updater })
  const handleReset = () => setSettings({ ...defaultSettings })

  return (
    <div className="flex flex-col h-full">
      <Header />

      <ImgProvider>
        <div className="flex flex-col lg:flex-row grow bg-gray-50">
          <div className="lg:w-1/3 bg-white flex flex-col">
            <TabGroup>
              <div className="h-full flex md:flex-row flex-col">
                <EditorNav />

                <TabPanels className="bg-white border-l w-full p-4">
                  <EditorSettings
                    settings={settings}
                    updateSettings={updateSettings}
                    handleReset={handleReset}
                  />

                  <EditorTheme settings={settings} updateSettings={updateSettings} />

                </TabPanels>
              </div>
            </TabGroup>
          </div>

          <ComponentToImg>
            <CoverImage {...settings} />
          </ComponentToImg>
        </div>
      </ImgProvider>

      {/* 额外引入的字体样式 */}
      <FontStyle font={settings.font} />
      {/* 自定义平台尺寸样式 */}
      {settings.platform === 'custom' && (
        <style>{`.custom { --cv-width: ${settings.customPlatformWidth}px; --cv-platform-x: ${settings.customPlatformX}; --cv-platform-y: ${settings.customPlatformY};}`}</style>
      )}
    </div>
  )
}

export default Editor
