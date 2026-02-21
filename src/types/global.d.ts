// Any global window oject usage will be defined here.

declare global {
  interface ImportMetaEnv {
    readonly VITE_GOOGLE_CLIENT_ID: string;
    readonly VITE_GOOGLE_CLIENT_SECRET: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

export {};
