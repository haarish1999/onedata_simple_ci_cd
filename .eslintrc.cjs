module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs"
    },
    rules: {
      "no-unused-vars": ["error"],
      "no-console": ["warn"],
      "semi": ["error", "always"],
      "quotes": ["error", "double"]
    }
  }
];