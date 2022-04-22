const path = require('path');
const Inspect = require('vite-plugin-inspect');
const Unocss = require('unocss/vite');
const VueJsx = require("@vitejs/plugin-vue-jsx")
const VueTypeImports = require('vite-plugin-vue-type-imports')

module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials"],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-vite"
  },

  async viteFinal(config, {
    configType
  }) {
    config.resolve.alias['~'] = `${path.resolve(__dirname, 'src')}/`;
    config.plugins.push(Unocss.default());
    config.plugins.push(Inspect());
    config.resolve.dedupe = ["@storybook/client-api"]
    config.plugins.push(VueJsx(), VueTypeImports['default']())
    return config;
  }

};