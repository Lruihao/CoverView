/// <reference types="vite/client" />

declare interface ImportMetaEnv {
  readonly REACT_APP_UNSPLASH_ACCESS_KEY: string
  readonly REACT_APP_AUTHOR: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
