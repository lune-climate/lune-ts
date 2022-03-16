module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard", "prettier", "eslint:recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "simple-import-sort"],
  rules: {
    "comma-dangle": ["error", "always-multiline"],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "no-useless-constructor": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-useless-constructor": ["error"],
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "simple-import-sort/imports": "error",
    complexity: ["error", { max: 14 }],
  },
  overrides: [
    {
      files: ["src/*.test.ts"],
    },
  ],
};
