/// <reference types="vite/client" />

// The project uses `process.env.API_KEY` via a Vite `define` config in `vite.config.ts`.
// To make TypeScript aware of this in the client-side code, we must declare it.
// This corrects the previous typings which were for `import.meta.env`.
declare var process: {
  env: {
    API_KEY: string;
  }
};
