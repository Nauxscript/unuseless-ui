const { loadConfigFromFile, mergeConfig } = require("vite");
const path = require('path');
const Inspect = require('vite-plugin-inspect');
const Unocss = require('unocss/vite');
// const VueJsx = require("@vitejs/plugin-vue-jsx")
const VueTypeImports = require('vite-plugin-vue-type-imports')

module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials"],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-vite"
  },

  async viteFinal(config) {
    // const { config } = await loadConfigFromFile(
    //   path.resolve(__dirname, "../vite.config.ts")
    // );
    // // console.log(previousConfig)
    // // console.log(config)
    // return mergeConfig(previousConfig, {
    //   ...config,
    //   resolve: {
    //     alias: [{
    //       find: '~',
    //       replacement: path.resolve(__dirname, "./src"),
    //     }],
    //     dedupe: ["@storybook/client-api"],
    //     plugins: [
    //       Unocss.default(),
    //       Inspect(),
    //       VueJsx(), VueTypeImports['default']()
    //     ]
    //   }

    // })
    config.resolve.alias['~'] = `${path.resolve(__dirname, 'src')}/`;
    config.plugins.push(Unocss.default());
    config.plugins.push(Inspect());
    // config.plugins.push(VueJsx(), VueTypeImports['default']())
    config.plugins.push(VueTypeImports['default']())
    config.resolve.dedupe = ["@storybook/client-api"]
    return config;
  }

};