import type { ThemeIcon } from '../types'

const API_URL = 'https://raw.githubusercontent.com/devicons/devicon/master/devicon.json'

interface DevIconItem {
  name: string
  altnames: string[]
  tags: string[]
  versions: {
    svg: string[]
    font: string[]
  }
  color: string[]
  aliases: {
    basic: string
    alias: string
  }[]
}

export async function getDevIcon(): Promise<ThemeIcon[]> {
  const data = await fetch(API_URL).then(r => r.json()) as DevIconItem[]
  return data.map(icon => ({
    label: icon.altnames[0] ?? icon.name,
    value: icon.name,
    // 后续如有需要可以放开所有风格的图标进行选择
    opts: icon.versions.svg,
  }))
}
