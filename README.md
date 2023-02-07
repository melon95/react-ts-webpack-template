# 自主搭建 React 项目

该项目采用 React + TS + Webpack/Vite 技术栈

## 步骤

1. 安装依赖
2. 搭建开发/生产环境


### 安装依赖

1. 项目相关
- React
- React-Dom
- babel
- TypeScript
- Webpack
- Webpack-cli
- sass
- uncocss


2. 代码风格相关
- eslint
- prettier
- stylelint
- commitlint


## 流程

1. 通过 `npm init -y` 初始化项目
1. 通过 `git init` 初始化仓库
2. 通过 `npx eslint --init` 生成代码风格相关配置文件
3. 通过 `npx tsc --init` 生成 `TypeScript` 配置文件
4. 配置 `stylelint` 配置文件
5. 配置 `commitlint` 配置文件
6. 安装 `husky`、`lint-stage` 并配置
4. 创建项目基本目录结构 `src`、`config`、`test`
