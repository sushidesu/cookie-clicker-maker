module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "eslint:recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }]
  },
}
