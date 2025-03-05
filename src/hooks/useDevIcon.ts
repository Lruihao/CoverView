import type { ThemeIcon } from '@/types'
import { fetcher } from '@/common/utils'
import { useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import useSWR from 'swr'
import { useLocalStorage } from './useLocalStorage'

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

export function useDevIcon() {
  const { t, i18n } = useTranslation()

  const defaults: ThemeIcon[] = useMemo(() => [
    { label: t('editor.custom'), value: 'custom', opts: [] },
    { label: 'Hugo FxIt', value: 'hugo-fixit', opts: [] },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ], [i18n.language])

  const [icons, updateIcons] = useLocalStorage<ThemeIcon[]>('devIconOptions', defaults)
  const { data } = useSWR<DevIconItem[]>(API_URL, fetcher)

  useEffect(() => {
    if (data) {
      const newIcons = data.map(icon => ({
        label: icon.altnames[0] ?? icon.name,
        value: icon.name,
        // 后续如有需要可以放开所有风格的图标进行选择
        opts: icon.versions.svg,
      }))
      updateIcons([...defaults, ...newIcons])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return icons
}
