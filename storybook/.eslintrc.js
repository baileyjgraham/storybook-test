{
  "env": {
    "browser": true,
    "node": true
  },
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "extends": [
    "airbnb-typescript",
    "plugin:react-hooks/recommended"
  ],
  "rules": {
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/semi": ["error", "always"],
    "react/jsx-props-no-spreading": "off",
    "arrow-parens": ["error", "as-needed"],
    "no-param-reassign": "off",
    "react/require-default-props": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "@typescript-eslint/no-unused-vars": 1,
    "import/no-cycle": 1
  }
}