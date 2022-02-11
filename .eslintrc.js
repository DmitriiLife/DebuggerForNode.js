module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    // хотим одинарные/двойные ковычки
    quotes: ["error", "double"],
    // хотим ставить точку с запятой
    semi: ["error", "always"],
    // используем 2 пробела для отступа нашего кода
    indent: ["error", 2],
    // хотим избежать лишних пробелов
    "no-multi-spaces": ["error"],
  },
};
