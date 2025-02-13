import type { ThemeConfig, ThemeType } from '@/types'
import BackgroundTheme from './Themes/BackgroundTheme'
import BasicTheme from './Themes/BasicTheme'
import MobileMockupTheme from './Themes/MobileMockupTheme'
import ModernTheme from './Themes/ModernTheme'
import OutlineTheme from './Themes/OutlineTheme'
import PreviewTheme from './Themes/PreviewTheme'
import StylishTheme from './Themes/StylishTheme'

const noPaddingThemes: ThemeType[] = [
  'stylish',
  'background',
]

function selectTheme(theme: ThemeType, props: ThemeConfig) {
  switch (theme) {
    case 'basic':
      return <BasicTheme config={props} />
    case 'modern':
      return <ModernTheme config={props} />
    case 'outline':
      return <OutlineTheme config={props} />
    case 'preview':
      return <PreviewTheme config={props} />
    case 'stylish':
      return <StylishTheme config={props} />
    case 'mobile':
      return <MobileMockupTheme config={props} />
    case 'background':
      return <BackgroundTheme config={props} />
    default:
      return <BasicTheme config={props} />
  }
}

function CoverImage(props: ThemeConfig) {
  const { theme, platform } = props
  return <div className={`coverview-preview-container bg-white rounded mx-auto ${platform} ${noPaddingThemes.includes(theme) ? 'p-0' : 'p-4'}`}>{selectTheme(theme, props)}</div>
}

export default CoverImage
