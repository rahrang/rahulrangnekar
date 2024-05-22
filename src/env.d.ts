/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly FATHOM_SITE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
