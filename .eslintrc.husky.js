module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    // "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "next/core-web-vitals",
  ],
  plugins: [
    "@typescript-eslint",
    "@next/eslint-plugin-next",
    "react",
    "react-hooks",
    "unused-imports",
    "newline-destructuring",
  ],
  rules: {
    // base rule must be off
    // https://typescript-eslint.io/rules/no-unused-vars/#how-to-use
    "no-unused-vars": "off",
    "import/no-nodejs-modules": ["error"],
    "@typescript-eslint/no-unused-vars": "warn",
    eqeqeq: "error",
    "no-console": [ "error", { allow: ["error"] }],
    "no-undef": "off",
    "no-prototype-builtins": "off",
    "import-length": 0,
    "max-len": [
      "error",
      {
        code: 140,
        tabWidth: 2,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignorePattern: "^import .*",
      },
    ],
    "@typescript-eslint/no-non-null-assertion": "off",
    // "typescript-estlint/boolean-type": "off",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/indent": [ "error", 2 ],
    "react/display-name": "off",
    "react/no-children-prop": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-wrap-multilines": [
      "error",
      {
        "declaration": "parens-new-line",
        "assignment": "parens-new-line",
        "return": "parens-new-line",
        "arrow": "parens-new-line",
        "condition": "parens-new-line",
        "logical": "parens-new-line",
        "prop": "parens-new-line",
      },
    ],
    "react/jsx-indent-props": [ "error", 2 ],
    "react/jsx-no-duplicate-props": [ "error", { "ignoreCase": false }],
    "react/jsx-max-props-per-line": [
      "error",
      {
        "maximum": 1,
        "when": "always",
      },
    ],
    "react/jsx-first-prop-new-line": [ "error", "multiline-multiprop" ],
    "react/jsx-curly-spacing": [
      "error",
      "never",
      { "spacing": { "objectLiterals": "never" } },
    ],
    "react/jsx-indent": [
      "error",
      2,
      { "indentLogicalExpressions": true },
    ],
    "react/jsx-closing-tag-location": [
      "error",
      {
        "nonEmpty": "tag-aligned",
        "selfClosing": "tag-aligned",
      },
    ],
    "react/jsx-closing-bracket-location": [ "error", "tag-aligned" ],
    "react/jsx-tag-spacing": [
      "error",
      {
        "closingSlash": "never",
        "beforeSelfClosing": "always",
        "afterOpening": "never",
        "beforeClosing": "never",
      },
    ],
    "arrow-parens": [ "error", "always" ],
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "never",
        exports: "never",
        functions: "never",
      },
    ],
    "comma-spacing": [
      "error",
      {
        before: false,
        after: true,
      },
    ],
    "comma-style": [ "error", "last" ],
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          "@mui/*/*/*",
          "!@mui/material/test-utils/*",
          "!@mui/x-data-grid/**/*",
          "!@mui/x-data-grid-pro/**/*",
        ],
      },
    ],
    "semi": [
      "error",
      "always",
      { "omitLastInOneLineBlock": false },
    ],
    "semi-style": [ "error", "last" ],
    "no-extra-semi": ["error"],
    "semi-spacing": [
      "error",
      {
        "before": false,
        "after": true,
      },
    ],
    "no-multi-spaces": [ "error", { "ignoreEOLComments": true }],
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1,
        "maxEOF": 1,
        "maxBOF": 0,
      },
    ],
    "no-trailing-spaces": [ "error", { "skipBlankLines": true }],
    "quotes": [
      "error",
      "double",
      { "allowTemplateLiterals": false },
    ],
    "indent": "off",
    "jsx-quotes": [ "error", "prefer-double" ],
    "object-curly-spacing": [ "error", "always" ],
    "object-curly-newline": [
      "error",
      {
        "ObjectExpression": {
          "multiline": true,
          "minProperties": 2,
        },
        "ObjectPattern": { "multiline": true },
        "ImportDeclaration": {
          "multiline": true,
          "minProperties": 3,
        },
        "ExportDeclaration": {
          "multiline": true,
          "minProperties": 3,
        },
      },
    ],
    "object-property-newline": ["error"],
    "array-element-newline": [
      "error",
      {
        "multiline": true,
        "minItems": 3,
      },
    ],
    "array-bracket-newline": [
      "error",
      {
        "multiline": true,
        "minItems": 3,
      },
    ],
    "array-bracket-spacing": [
      "error",
      "always",
      {
        "singleValue": false,
        "objectsInArrays": false,
        "arraysInArrays": false,
      },
    ],
    "template-curly-spacing": [ "error", "never" ],
    "newline-destructuring/newline": "error",
    "eol-last": "error",
    "no-useless-concat": "error",
    "prefer-template": "warn",
    "no-useless-escape": "warn",
    "function-call-argument-newline": [ "warn", "always" ],
    "function-paren-newline": [ "warn", "multiline" ],
    "func-call-spacing": [ "error", "never" ],
    "key-spacing": [ "error", { "beforeColon": false }],
    "switch-colon-spacing": [
      "error",
      {
        "after": true,
        "before": false,
      },
    ],
    "no-unneeded-ternary": "error",
    "multiline-ternary": [ "error", "always" ],
    "no-whitespace-before-property": "error",
    "no-spaced-func": "error",
    "operator-linebreak": [
      "error",
      "after",
      {
        "overrides": {
          "?": "before",
          ":": "before",
        },
      },
    ],
    "arrow-spacing": [
      "error",
      {
        "before": true,
        "after": true,
      },
    ],
    "arrow-body-style": [ "error", "as-needed" ],
    "no-empty-function": "error",
    "brace-style": [ "error", "1tbs" ],
    "block-spacing": [ "error", "always" ],
    "space-before-blocks": [ "error", "always" ],
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always",
      },
    ],
    "keyword-spacing": [
      "error",
      {
        "before": true,
        "after": true,
      },
    ],
  },
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: "latest", // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: { jsx: true },
    // project: "./tsconfig.json",
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: false,
  },
  overrides: [
    {
      files: [
        "src/actions/**/*",
        "src/client/**",
        "src/pages/api/**/*",
        "src/server/**/*",
        "src/utils/api/**/*",
      ],
      rules: { "import/no-nodejs-modules": "off" },
    },
  ],
};
