/// <reference types="vite/client" />

// The project uses `process.env.API_KEY` via a Vite `define` config in `vite.config.ts`.
// To make TypeScript aware of this in the client-side code, we augment the existing types for `process.env`.
// This corrects the previous `declare var process` which caused a "Cannot redeclare" error
// because 'vite/client' or one of its dependencies already provides a type for 'process'.
declare namespace NodeJS {
  interface ProcessEnv {
    API_KEY: string;
  }
}
