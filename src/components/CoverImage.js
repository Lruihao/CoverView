import React from 'react'
import './CoverImage.css'
import '../assets/css/patterns.css'
import ModernTheme from './Themes/ModernTheme'
import BasicTheme from './Themes/BasicTheme'
import OutlineTheme from './Themes/OutlineTheme'
import PreviewTheme from './Themes/PreviewTheme'
import StylishTheme from './Themes/StylishTheme'
import MobileMockupTheme from './Themes/MobileMockupTheme'
import BackgroundTheme from './Themes/BackgroundTheme'

function CoverImage(props) {
  const { theme, platform } = props
  const noPaddingThemes = [
    'stylish',
    'background',
  ]

  const selectTheme = (theme) => {
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
  return <div className={`coverview-preview-container bg-white rounded mx-auto ${platform} ${noPaddingThemes.includes(theme) ? 'p-0' : 'p-4'}`}>{selectTheme(theme)}</div>
}

export default CoverImage
