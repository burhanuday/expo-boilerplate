module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@assets": "./assets",
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@modules": "./src/modules",
            "@lib": "./src/lib",
            "@types": "./src/types",
            "@constants": "./src/constants",
            "@navigation": "./src/navigation",
            "@hooks": "./src/hooks",
            "@actions": "./src/store/actions",
          },
        },
      ],
    ],
  };
};
