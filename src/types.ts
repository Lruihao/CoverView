export type DownloadFormat = 'png' | 'jpeg' | 'svg' | 'blob'

export interface ColorTheme {
  bgColor: string
  bdColor: string
}

export type ThemeFont =
  | 'font-Virgil' | 'font-MMT' | 'font-Anek' | 'font-Inter' | 'font-Poppins'
  | 'font-mono' | 'font-sans' | 'font-serif'

export type ThemeType = 'basic' | 'modern' | 'outline' | 'preview' | 'stylish' | 'mobile' | 'background'

export type ThemePattern =
  | 'none' | 'graph-paper' | 'jigsaw' | 'hideout' | 'dots' | 'falling-triangles'
  | 'circuit-board' | 'temple' | 'anchors' | 'brickwall' | 'overlapping-circles'
  | 'wiggle' | 'tic-tac-toe' | 'leaf' | 'bubbles' | 'squares' | 'explorer' | 'jupiter' | 'sun'

export interface ThemeIcon {
  label: string
  value: string
  opts: string[]
}

export interface ThemeConfig {
  title: string
  bgColor: string
  borderColor?: string
  pattern: string
  author: string
  icon: ThemeIcon
  iconStyle: string
  iconStyleOptions: string[]
  font: ThemeFont
  theme: ThemeType
  customIcon: string
  platform: string
  customPlatformWidth: number
  customPlatformX: number
  customPlatformY: number
}
