module.exports = {
  env: {
    browser: true,
    "react-native/react-native": true,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  extends: "@react-native-community",
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
};
