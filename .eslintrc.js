module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "standard",
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "react/prop-types": 0,
    "react/no-unescaped-entities": 0,
    "react/jsx-no-comment-textnodes": 0,
    "no-unused-vars": ["warn"],
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        trailingComma: "es5",
        semi: false,
        jsxSingleQuote: false,
        singleQuote: false,
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
  },
}
