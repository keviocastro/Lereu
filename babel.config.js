module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["module-resolver", {
        "root": ["./"],
        "alias": {
          "@assets": "./assets",
          "@components": "./components",
          "@storage": "./storage",
          "@services": './services',
          "@screens": "./screens",
          "@utils": "./utils",
        }
      }]
    ]
  };
};
