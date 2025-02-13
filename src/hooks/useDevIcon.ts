import type { ThemeIcon } from '@/types'
import { getDevIcon } from '@/services/devIcon'
import { useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocalStorage } from './useLocalStorage'

export function useDevIcon() {
  const { t, i18n } = useTranslation()

  const defaults: ThemeIcon[] = useMemo(() => [
    { label: t('editor.custom'), value: 'custom', opts: [] },
    { label: 'Hugo FxIt', value: 'hugo-fixit', opts: [] },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ], [i18n.language])

  const [icons, updateIcons] = useLocalStorage<ThemeIcon[]>('devIconOptions', defaults)

  useEffect(() => {
    let ignore = false
    getDevIcon().then((data) => {
      if (!ignore)
        updateIcons([...defaults, ...data])
    })
    return () => {
      ignore = true
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaults])

  return icons
}
