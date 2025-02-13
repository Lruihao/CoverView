import type { ThemeConfig, ThemeFont, ThemePattern, ThemeType } from '@/types'
import type { ColorId, Orientation } from 'unsplash-js'
import theme1 from '@/assets/images/theme1.webp'
import theme2 from '@/assets/images/theme2.webp'
import theme3 from '@/assets/images/theme3.webp'
import theme4 from '@/assets/images/theme4.webp'
import theme5 from '@/assets/images/theme5.webp'
import theme6 from '@/assets/images/theme6.webp'
import theme7 from '@/assets/images/theme7.webp'

export const defaultSettings: ThemeConfig = {
  title: 'A begineers guide to frontend development',
  bgColor: '#949ee5',
  pattern: '',
  author: import.meta.env.REACT_APP_AUTHOR || 'Lruihao',
  icon: { label: 'reactjs', value: 'react', opts: ['original', 'original-wordmark'] },
  iconStyle: 'original',
  iconStyleOptions: ['original', 'original-wordmark'],
  font: 'font-Virgil',
  theme: 'background',
  customIcon: '',
  platform: 'hashnode',
  customPlatformWidth: 1024,
  customPlatformX: 0,
  customPlatformY: 0,
}

export const fontOptions: ThemeFont[] = [
  'font-Virgil',
  'font-MMT',
  'font-Anek',
  'font-Inter',
  'font-Poppins',
  'font-mono',
  'font-sans',
  'font-serif',
]

export const patternOptions: ThemePattern[] = [
  'none',
  'graph-paper',
  'jigsaw',
  'hideout',
  'dots',
  'falling-triangles',
  'circuit-board',
  'temple',
  'anchors',
  'brickwall',
  'overlapping-circles',
  'wiggle',
  'tic-tac-toe',
  'leaf',
  'bubbles',
  'squares',
  'explorer',
  'jupiter',
  'sun',
]

export const platformOptions: { label: string, value: string }[] = [
  { label: 'Hashnode', value: 'hashnode' },
  { label: 'Dev.to', value: 'dev' },
  { label: 'Hugo FixIt', value: 'hugo-fixit' },
  { label: '稀土掘金', value: 'juejin' },
  { label: '16:9', value: 'size-16:9' },
  { label: '5:4', value: 'size-5:4' },
  { label: '7:5', value: 'size-7:5' },
  { label: '4:3', value: 'size-4:3' },
  { label: '5:3', value: 'size-5:3' },
  { label: '3:2', value: 'size-3:2' },
  { label: '2:1', value: 'size-2:1' },
  { label: '1:1', value: 'size-1:1' },
]

export const themeOptions: { name: ThemeType, src: string }[] = [
  { name: 'background', src: theme7 },
  { name: 'basic', src: theme1 },
  { name: 'modern', src: theme2 },
  { name: 'stylish', src: theme3 },
  { name: 'outline', src: theme5 },
  { name: 'preview', src: theme4 },
  { name: 'mobile', src: theme6 },
]

export const orientationOptions: (Orientation | 'all')[] = [
  'all',
  'landscape',
  'portrait',
  'squarish',
]
export const resultColorOptions: (ColorId | 'all')[] = [
  'all',
  'black_and_white',
  'black',
  'white',
  'yellow',
  'orange',
  'red',
  'purple',
  'magenta',
  'green',
  'teal',
  'blue',
]
