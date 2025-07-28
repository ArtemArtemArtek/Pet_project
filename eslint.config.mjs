import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import i18next from 'eslint-plugin-i18next';
import pluginReact from "eslint-plugin-react";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  globalIgnores(["build"]),
  {rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off"
  }},
  i18next.configs['flat/recommended'],
  // pluginReact.configs.flat.recommended,
]);
