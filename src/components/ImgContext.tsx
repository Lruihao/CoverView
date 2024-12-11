import type { Dispatch, PropsWithChildren, SetStateAction } from 'react'
import { createContext, useMemo, useState } from 'react'

export interface UnsplashImage {
  url: string
  name: string
  avatar: string
  profile: string
  downloadLink: string
}

const ImgContext = createContext<{
  unsplashImage: UnsplashImage | null
  setUnsplashImage: Dispatch<SetStateAction<UnsplashImage | null>>
}>({
  unsplashImage: null,
  setUnsplashImage: () => {},
})

function ImgProvider({ children }: PropsWithChildren) {
  const [unsplashImage, setUnsplashImage] = useState<UnsplashImage | null>(null)
  const value = useMemo(
    () => ({ unsplashImage, setUnsplashImage }),
    [unsplashImage, setUnsplashImage],
  )

  return (
    <ImgContext.Provider value={value}>
      {children}
    </ImgContext.Provider>
  )
}

export { ImgContext, ImgProvider }
