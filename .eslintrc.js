"use strict";

module.exports = {
  env: {
    node: true,
  },
  ignorePatterns: ["node_modules/**", "build/**", "dist/**"],
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
  ],
};
