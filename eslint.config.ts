// eslint.config.js
import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import ts from "typescript-eslint";
import prettier from "eslint-plugin-prettier/recommended";

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  prettier,
  {
    files: ["**/*.{ts,vue}"],
    languageOptions: { parserOptions: { parser: ts.parser } },
  },
];
