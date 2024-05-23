import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: [
      {
        find: /@art-gen\/(.*)/,
        replacement: fileURLToPath(new URL('packages/$1/src', import.meta.url))
      }
    ]
  }
});
