export default {
  extends: ["stylelint-config-standard-scss"],
  rules: {
    "custom-property-pattern": null,
    "selector-class-pattern": "^(wa-|is-|has-)",
    "scss/load-partial-extension": "never"
  }
};
