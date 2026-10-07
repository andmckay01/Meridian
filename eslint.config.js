import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

/** @type {import("eslint").Linter.Config} */
const eslintConfig = [
  ...compat.extends('next/core-web-vitals'),
  { ignores: ['.next/**', 'out/**', 'dist/**', 'next-env.d.ts'] },
  {
    rules: {
      // The archive serves original images directly, without an image server.
      '@next/next/no-img-element': 'off',
    },
  },
];

export default eslintConfig;
