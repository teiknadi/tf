module.exports = {
  "extends": "eslint-config-airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
  ],
  "env": {
    "browser": true
  },
  "rules": {
    "class-methods-use-this": "off",
    "comma-dangle": "off",
    "import/first": [ "warn", "DISABLE-absolute-first" ],
    "import/no-extraneous-dependencies": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "max-len": "off",
    "no-mixed-operators": "off",
    "no-plusplus": "off",
    "no-use-before-define": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-no-bind": "off",
    "react/no-array-index-key": "off",
    "react/no-string-refs": "off",
    "react/prefer-stateless-function": "off",
    "react/forbid-prop-types": "off"
  }
};
