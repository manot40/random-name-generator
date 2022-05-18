/// <reference types="svelte" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_UMAMI_URL: string
  readonly VITE_UMAMI_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}