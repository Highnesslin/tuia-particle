# .npmrc

```
registry=https://registry.npm.taobao.org/
```

# postcss

autoprefixer 插件 需要配置 browserlist

cssno 压缩

# MiniCssExtractPlugin

分离 css 为单独文件

# loader

本质上是一个 function 定义的函数，因为要通过 this 访问 webpack 提供的 loader.runner
