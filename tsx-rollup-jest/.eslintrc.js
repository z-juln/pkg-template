module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],

  rules: {
    // your rules
    "@typescript-eslint/no-empty-interface": 0,
    "max-len": ["error", { code: 100 }],
  },

  ignorePatterns: ["**/setupTests.ts"],
};
