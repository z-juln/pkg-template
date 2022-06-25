# pkg-template
包含一系列的代码模板

## 模板规范

> 代码模板是基于 [`super-ejs`](https://github.com/z-juln/super-ejs) 编写的

目录结构:

```
/<template-name>
  template
    ...
  package.json
  README.md
```
template目录下为模板代码

## 包含模板
- `@pkg-tpl/tsx-rollup-jest`: tsx+rollup+jest的项目模板
<!-- new block (该行是new脚本的占位符，不可删除) -->

## 未来展望
把构建流程继承到单独的cli中: `@pkg-tpl/cli`

支持以下命令:
- init: --single --multi 默认为`multi`模式，即构建多template的项目
- new: 支持构建初始化代码，需填写`template-name`和`description`, 且自动在readme中的占位符`<!-- new block -->`前添加新的描述
- publish: 指定某个模板自动升级版本号（默认升级minor版本），并`npm publish`
