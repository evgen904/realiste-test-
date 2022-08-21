const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  chainWebpack: (config) => {
    config.resolve.alias.set(
      "modules",
      path.resolve(__dirname, "node_modules/")
    );
    config.resolve.alias.set("public", path.resolve(__dirname, "public/"));
    config.resolve.alias.set("@", path.resolve(__dirname, "src/"));
    config.resolve.alias.set("assets", path.resolve(__dirname, "src/assets"));
  },
  pluginOptions: {
    i18n: {
      locale: "ru",
      fallbackLocale: "ru",
      localeDir: "locales",
      enableInSFC: true,
    },
  },
  pwa: {
    // configure the workbox plugin
    manifestPath: "manifest.json",
    themeColor: "#1ba8ea",
    // workboxPluginMode: "InjectManifest",
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      // swSrc: "dev/sw.js",
      // ...other Workbox options...

      clientsClaim: true,
      skipWaiting: true
    },
  },
});
