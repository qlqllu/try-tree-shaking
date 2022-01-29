const path = require('path')

class MyPlugin {
  usedModules = []

  apply(compiler){
    compiler.hooks.compilation.tap('my-plugin', compilation => {
      compilation.hooks.afterOptimizeDependencies.tap('my-plugin', modules => {
        this.usedModules = this.usedModules.concat(modules.map(m => m.rawRequest))
      })
    })
    compiler.hooks.done.tap('my-plugin', stats => {
      console.log(111, this.usedModules)
    })
  }
}

module.exports = {
  entry: {
    index: './index.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    libraryTarget: "system"
  },
  devtool: 'source-map',
  plugins: [new MyPlugin()]
}

