require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: [
    "./base.js",
    "next/core-web-vitals",
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};
