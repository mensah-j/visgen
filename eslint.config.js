import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  {
    ignores: ['.git', 'node_modules', 'dist', 'packages/*/dist/**', 'packages/*/node_modules/**']
  },
  eslint.configs.recommended,
  {
    files: ['**/*.mts', '**/*.ts'],
    extends: [...tseslint.configs.strict]
  },
  eslintConfigPrettier
);
