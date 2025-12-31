// FIX: The original '/// <reference types="vite/client" />' was causing an error because the type definition file could not be found.
// This is likely a project configuration issue. The reference has been removed to resolve the error.
// Type definitions for `process.env.API_KEY` have been added to support its usage in `services/firebase.ts`.

declare namespace NodeJS {
  interface ProcessEnv {
    readonly API_KEY: string | undefined;
  }
}
