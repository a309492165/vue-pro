# pro-br

> A Vue.js project

## Build Setup

``` bash
# Writing norms
组件在components文件夹下，命名英文语义化，大写开头（驼峰命名）
避免单文件过长，拆分为html，scss，vue模式，统一文件夹归纳（test为举例文件）

# media
媒体文件在assets文件夹下，理由图片，小型video
注意：图片需语义化，文件夹归类

# scss
公用字体颜色，背景颜色，以变量存在App.vue的style中共全局使用

# router module
router文件夹下的index.js为主配置路由器文件，其余文件为模块文件（便于项目庞大时路由区分、维护）

# request module
request文件夹下的http-server.js为主配置axios请求文件，导出二次封装的请求，挂载到main.js的Vue原型上
其余文件为模块文件（便于接口复用时，减少代码量）

# store module
store文件夹下的index.js为主配置Vuex
其余文件为模块文件（便于大型项目数据堆管理）

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
