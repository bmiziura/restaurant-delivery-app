module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@/components": "./app/components",
            "@/screens": "./app/screens",
            "@/router": "./app/router",
            "@/theme": "./app/theme",
            "@/firebase": "./app/firebase/index",
          },
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      ],
    ],
  }
}
