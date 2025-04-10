import type { ThemeConfig, ThemeFont } from '@/types'
import { defaultSettings } from '@/common'
import Header from '@/components/Header'
import { ImgProvider } from '@/components/ImgContext'
import { useState } from 'react'
import ComponentToImg from './components/ComponentToImg'
import CoverImage from './components/CoverImage'
import EditorSettings from './components/EditorSettings'
import 'mmt-webfont/dist/result.css'

function Editor() {
  const [settings, setSettings] = useState({ ...defaultSettings })

  const updateSettings = (updater: Partial<ThemeConfig>) => setSettings({ ...settings, ...updater })
  const handleReset = () => setSettings({ ...defaultSettings })

  return (
    <>
      <Header />

      <ImgProvider>
        <div className="flex flex-col lg:flex-row grow border border-t-0 border-indigo-100">
          <EditorSettings
            settings={settings}
            updateSettings={updateSettings}
            handleReset={handleReset}
          />

          <ComponentToImg>
            <CoverImage {...settings} />
          </ComponentToImg>
        </div>
      </ImgProvider>

      {/* Global styles */}
      <EditorStyle />
      {/* Extra font styles */}
      <FontStyle font={settings.font} />
      {/* Custom platform size style */}
      {settings.platform === 'custom' && (
        <style>{`.custom { --cv-width: ${settings.customPlatformWidth}px; --cv-platform-x: ${settings.customPlatformX}; --cv-platform-y: ${settings.customPlatformY};}`}</style>
      )}
    </>
  )
}

function EditorStyle() {
  return (
    <style>
      {`
        html, body, #root {
          height: 100%;
        }
        #root {
          display: flex;
          flex-direction: column;
        }
      `.replace(/\s+/g, ' ')}
    </style>
  )
}

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
  }
  if (fontStyle) {
    fontStyle = fontStyle.replace(/\s+/g, ' ')
    return <style>{fontStyle}</style>
  }
}

export default Editor
