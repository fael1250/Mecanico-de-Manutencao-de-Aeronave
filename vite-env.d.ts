/// <reference types="vite/client" />

// FIX: Explicitly define the types for import.meta.env to provide type-safety
// for environment variables and resolve TypeScript errors throughout the project.
interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
