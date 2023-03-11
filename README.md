# React 模版

该模板可用于快速搭建项目，开箱即用，避免大量的配置工作。

目前已实现功能：

- 状态管理
- 主题切换
- 国际化支持
- 项目风格检查
- Git Commit 检查
- Docker 部署

模板践行组件化的概念，所有只属于当前模块的功能都位于模块中，比如：状态、hook、类型等。以国际化举例：

- locales
  - enUS | zhCN: 元数据
  - hooks: 存放所有跟国际化相关的 hook
    - store: 状态管理
    - text: 模块化使用元数据
  - interface: 类型文件

## 技术栈

- React
- TypeScript
- Webpack
- WindiCSS
- zustand

## 目录

- src
  - components: 公共组件
  - icons: Iconify 组件
  - layout: 布局组件
  - locales: 国际化
  - pages: 页面
  - routers: 组合路由
  - stores: 全局数据管理
  - themes: 主题
  - types: 通用类型
  - utils: 通过工具

## 部署

1. 通过 `pnpm build` 进行构建
2. 通过 `docker build -t react-ts-template:latest .` 构建镜像
3. 通过 `docker-compose up -d` 来启动容器

## 主题切换

UI 库默认使用 Antd，因此主题切换也使用了 Antd 提供的主题算法来实现暗黑模式。
在 Antd 组件外则可以通过一下方式来引用 Antd 主题的变量来实现主题的切换：

```javascript
import { useThemeToken } from '@src/themes/hooks'

const token = useThemeToken()
```

## 国际化

国际化是通过 I18Next 来实现的，元数据位于 `src/locales` 目录下，默认提供了中文和英文两种语言，如果还需要其他语言的实现，请参考 `enUS｜zhCN` 自行添加语言文件夹。
同时还提供了 hook 来模块化的使用：

```javascript
import { useHomeText } from '@src/locales/hooks'

useHomeText('home')
```

## Icon

Icon 使用了[Iconify](https://iconify.design/) 开源图标集

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
