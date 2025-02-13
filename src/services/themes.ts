import type { ColorTheme } from '@/types'

const colorThemes: ColorTheme[] = [
  {
    bgColor: '#d972ff',
    bdColor: '#581b98',
  },
  {
    bgColor: '#a7ff83',
    bdColor: '#17b978',
  },
  {
    bgColor: '#CB91FE',
    bdColor: '#5F01B2',
  },
  {
    bgColor: '#9D2EFE',
    bdColor: '#3D0C6A',
  },
  {
    bgColor: '#88EF69',
    bdColor: '#362E48',
  },
  {
    bgColor: '#ffa600',
    bdColor: '#44475a',
  },
  {
    bgColor: '#8078E7',
    bdColor: '#4B4681',
  },
  {
    bgColor: '#B1B3E4',
    bdColor: '#333794',
  },
  {
    bgColor: '#CA96DB',
    bdColor: '#7D3394',
  },
  {
    bgColor: '#F9A6A8',
    bdColor: '#55456F',
  },
  {
    bgColor: '#dcd6f7',
    bdColor: '#424874',
  },
  {
    bgColor: '#aba9e9',
    bdColor: '#64638f',
  },
  {
    bgColor: '#ffe9e3',
    bdColor: '#7c73e6',
  },
  {
    bgColor: '#efb1ff',
    bdColor: '#742dd2',
  },
  {
    bgColor: '#fee856',
    bdColor: '#1b0044',
  },
  {
    bgColor: '#fee856',
    bdColor: '#5c2a9d',
  },
  {
    bgColor: '#16db93',
    bdColor: '#2c699a',
  },
  {
    bgColor: '#ffc4d6',
    bdColor: '#ff5d8f',
  },
  {
    bgColor: '#80ed99',
    bdColor: '#22577a',
  },
  {
    bgColor: '#ffb2e6',
    bdColor: '#8447ff',
  },
  {
    bgColor: '',
    bdColor: '',
  },
]
const patterns = [
  'graph-paper',
  'gigsaw',
  '',
  'hideout',
  'dots',
  '',
  'falling-triangles',
  'circuit-board',
  '',
  'temple',
  'anchors',
  '',
  'brickwall',
  'wiggle',
  'overlapping-circles',
  '',
  'tic-tac-toe',
  'leaf',
  '',
  'bubbles',
  'squares',
  '',
]

export function getRandomTheme() {
  const indexOfColors = Math.floor(Math.random() * colorThemes.length)
  const theme = colorThemes[indexOfColors]

  const indexOfPattern = Math.floor(Math.random() * patterns.length)
  const pattern = patterns[indexOfPattern]

  return { theme, pattern }
}
