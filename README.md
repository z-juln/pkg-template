# pkg-template
包含一系列的代码模板

## 模板安装

以模板`simple-pkg-ts`、项目名为`demo`、下载到路径`./my-demo`为例, 如果有特别需求请查看 [`pull-ejs-tpl`](https://www.npmjs.com/package/pull-ejs-tpl)

`npx pull-ejs-tpl git https://github.com/z-juln/pkg-template.git -o=./my-demo -d simple-pkg-ts/template --params.name=demo`

没有vpn的话, 建议用gitee上的模板仓库(但可能不会及时更新到最新版): `npx pull-ejs-tpl git https://gitee.com/juln/pkg-template.git -o=./my-demo -d simple-pkg-ts/template --params.name=demo`

## 模板规范

> 代码模板是基于 [`pull-ejs-tpl`](https://www.npmjs.com/package/pull-ejs-tpl) 编写的

目录结构:

```
/<template-name>
  template
    ...
  package.json
  README.md
```

## 包含模板
- `@pkg-tpl/tsx-rollup-jest`: tsx+rollup+jest的项目模板
- `@pkg-tpl/simple-pkg-ts`: 基于ts的简单的npm包的项目模板
- `@pkg-tpl/react-ts-vite-admin`: react+ts+vite的后台项目模板
<!-- new block (该行是new脚本的占位符，不可删除) -->

## 未来展望
把构建流程继承到单独的cli中: `@pkg-tpl/cli`

支持以下命令:
- init: --single --multi 默认为`multi`模式，即构建多template的项目
- new: 支持构建初始化代码，需填写`template-name`和`description`, 且自动在readme中的占位符`<!-- new block -->`前添加新的描述
- publish: 指定某个模板自动升级版本号（默认升级minor版本），并`npm publish`
