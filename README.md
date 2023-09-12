# pkg-template

包含一系列的代码模板

## 模板安装

以模板`simple-pkg-ts`、项目名为`demo`、下载到路径`./my-demo`为例, 如果有特别需求请查看 [`pull-ejs-tpl`](https://www.npmjs.com/package/pull-ejs-tpl)

`npx pull-ejs-tpl git https://github.com/z-juln/pkg-template.git -o=./my-demo -d simple-pkg-ts/template --params.name=demo`

## 模板规范

> 代码模板是基于 [`pull-ejs-tpl`](https://www.npmjs.com/package/pull-ejs-tpl) 编写的

目录结构:

```
/<template-name>
  template
    ...
    package.json (包含: "pull-ejs-tpl": { "registory": "https://github.com/z-juln/pkg-template/tree/v2/projects/react-ts-vite-admin/" }, 用于定位template-plugins, 可选)
  template-plugins(可选)
    ...
```

## 包含模板

- `tsx-rollup-jest`: tsx+rollup+jest 的项目模板
- `simple-node-pkg-ts`: 基于 ts 的简单的, 用于 node 的 npm 包的项目模板
- `simple-web-pkg-ts`: 基于 ts 的简单的, 用于 web 的 npm 包的项目模板
- `react-ts-vite-admin`: react+ts+vite 的后台项目模板
<!-- new block (该行是new脚本的占位符，不可删除) -->
