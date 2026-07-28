import { defineConfig } from "oxfmt";

export default defineConfig({
  plugins: ["typescript", "unicorn", "oxc", "vue"],
  env: {
    browser: true,
  },
  tabWidth: 2,
  useTabs: false,
  endOfLine: "lf",
  insertFinalNewline: true,
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  printWidth: 100,
});
