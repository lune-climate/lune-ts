module.exports = {
  extends: ["@lune-climate"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",

    // These are needed for some of the typescript-eslint type-based linting rules like
    // no-unnecessary-condition.
    "tsconfigRootDir": __dirname,
    "project": ["./tsconfig-esm.json"],
  },
  rules: {
    // @lune-climate demands function statements but this repository has some function
    // expressions, including auto-generated code, so let's disable this for now.
    "func-style": ["off"],

    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always",
      },
    ],
  },
  overrides: [
    {
      files: ["src/*.test.ts"],
    },
  ],
};
