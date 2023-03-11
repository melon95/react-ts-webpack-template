# 自主搭建 React 项目

该项目采用 React + TS + Webpack/Vite 技术栈

## 步骤

1. 安装依赖
2. 搭建开发/生产环境

### 安装依赖

1. 项目相关

- React
- React-Dom
- Babel
- TypeScript
- Webpack
- Webpack-cli
- Sass
- Windicss

2. 代码风格相关

- eslint
- prettier
- stylelint
- commitlint

## 流程

1. 通过 `npm init -y` 初始化项目
2. 通过 `git init` 初始化仓库
3. 通过 `npx eslint --init` 生成代码风格相关配置文件
4. 通过 `npx tsc --init` 生成 `TypeScript` 配置文件
5. 创建 `babel` 配置文件
6. 配置 `stylelint` 配置文件
7. 配置 `commitlint` 配置文件
8. 配置 `prettier` 配置文件
9. 配置 VSCode 和 编辑器通用配置
10. 安装 `husky`、`lint-stage` 并配置
11. 创建项目基本目录结构 `src`、`config`、`test`

12. 配置 Webpack
13. 配置 loader
14. 配置 plugin
15. 开发环境配置
16. devServer
17. HMR
18. 生产环境配置

## 部署

1. 通过 `pnpm build` 进行构建
2. 通过 `docker build -t react-ts-template:latest .` 构建镜像
3. 通过 `docker-compose up -d` 来启动容器

## TODO

- [x] 设置目标浏览器版本
- [x] 环境变量的配置
- [x] docker 构建和部署
- [x] 主题切换
- [x] 国际化支持
- [x] 路由
- [x] 状态管理
- [x] Icons
- [ ] 支持多构建工具
- [ ] mock
