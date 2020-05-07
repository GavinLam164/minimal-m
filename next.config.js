const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");
const path = require("path");

module.exports = withCss(
  withSass({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]",
      getLocalIdent: (context, localIdentName, localName, options) => {
        const hz = context.resourcePath.replace(context.rootContext, '');
        if (/node_modules/.test(hz)) {
          return localName;
        }
        return localName
      }
    },
    webpack(config, options) {
      config.resolve.alias["@components"] = path.join(__dirname, "components");
      config.resolve.alias["@api"] = path.join(__dirname, "api");
      return config;
    },
  })
);
