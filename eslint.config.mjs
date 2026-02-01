// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format

import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import i18next from 'eslint-plugin-i18next';
import { defineConfig, globalIgnores } from "eslint/config";
import reactHooks from 'eslint-plugin-react-hooks';
import fsdPlugin from 'eslint-plugin-fsd-by-artem-rumbens';
import unusedImports from "eslint-plugin-unused-imports";


export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {
      js,
      'react-hooks': reactHooks,
      fsdPlugin,
      "unused-imports": unusedImports,
    },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser }
  },
  tseslint.configs.recommended,
  globalIgnores(["build", "src/**/**.test.tsx", "json-server/**", "cypress"]),
  {
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      // "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",
      "@typescript-eslint/ban-ts-comment": "off",
      "react-hooks/rules-of-hooks": "off",
      // "fsd-by-artem-rumbens": "error",
      "unused-imports/no-unused-imports": "error"
    }
  },
  i18next.configs['flat/recommended'],
  // pluginReact.configs.flat.recommended,
]);
