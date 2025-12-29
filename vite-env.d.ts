/// <reference types="vite/client" />

// The project uses `process.env.API_KEY` via a Vite `define` config in `vite.config.ts`.
// To make TypeScript aware of this in the client-side code, we augment the existing types for `process.env`.
// This corrects the previous `declare var process` which caused a "Cannot redeclare" error
// because 'vite/client' or one of its dependencies already provides a type for 'process'.

// FIX: Changed from `declare namespace NodeJS` to augment the global `ProcessEnv`
// interface. This is a more robust way to add types in a Vite client
// environment and should resolve the type definition error.
interface ProcessEnv {
  API_KEY: string;
}
