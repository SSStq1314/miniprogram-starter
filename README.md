# bttn-salesman-wxapplet

#### 介绍
小能泰博微信小程序

#### 软件架构
本项目基于微信小程序官方框架，使用 Tdesign-miniprogram UI 组件库，采用模块化和组件化设计，使用 npm 管理依赖，集成 ESLint 和 Prettier 进行代码质量和风格检查。ls-lint文件命名规则配置，采用 Commitlint 针对 git 代码提交进行规范校验。


#### 安装教程

1.  cd 本项目根目录
2.  npm install
3.  微信开发者工具 => 工具 => 构建 npm


#### 使用说明

1.  微信开发者工具 => 详情 => 启用自定义处理命令


#### 目录说明

```
.
├── miniprogram
│   ├── components                  # 自定义组件
│   ├── config                      # 环境变量配置
│   │   ├── env
│   │   │   ├── dev.json            # 开发环境配置项
│   │   │   ├── tsl.json            # tsl 环境配置项
│   │   │   └── prod.json           # 正式环境配置项
│   │   └── index.js                # 配置主文件
│   ├── library                     # 工具库
│   │   ├── behaviors               # 代码共享
│   │   ├── extend.js               # 扩展方法
│   │   ├── manager.js              # 管理器
│   │   ├── optimizer.js            # 优化工具
│   │   └── services.js             # 接口服务
│   ├── miniprogram_npm             # npm 工具包
│   │   ├── dayjs                   # 日期工具
│   │   ├── mini-stores             # 状态管理工具
│   │   ├── tdesign-miniprogram     # UI 组件
│   │   └── timer-miniprogram       # 定时器管理工具
│   ├── pages                       # 主包页面
│   │   └── home                    # 首页
│   ├── resource                    # 资源包
│   │   ├── scss                    # 通用样式
│   │   ├── preloadAssets           # 网络资源配置
│   │   └── image                   # 本地图片资源
│   ├── store                       # 状态管理
│   │   └── tabbarStore.js          # tabbar控制
│   ├── app.js                      # 小程序主文件
│   ├── app.json                    # 全局配置
│   ├── app.scss                    # 全局样式
│   └── script.env.js               # 工程化配置环境变量
├── .eslintrc.js                    # 检查代码质量和风格
├── .prettierrc.js                  # 自动化格式化代码
├── commitlint.config.js            # git commit规范规则
├── package.json                    # npm 配置
├── project.config.json             # 项目配置文件
├── README.md                       # 项目说明文档

created by Tench.


```

## 小程序开发文档地址

- 微信小程序开发文档，[https://developers.weixin.qq.com/miniprogram/dev/framework/](https://developers.weixin.qq.com/miniprogram/dev/framework/)；



## UI 组件库文档地址

- TDesign WeChat MiniProgram，[https://tdesign.tencent.com/miniprogram/overview](https://tdesign.tencent.com/miniprogram/overview)；


## 小程序发工具下载

- 微信开发工具，[https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)；


## 版本管理工具

- git，[https://git-scm.com/](https://git-scm.com/)；
- git 项目地址，[https://gitee.com/zlkj_3/tianneng-advertising-applet.git](https://gitee.com/zlkj_3/tianneng-advertising-applet.git)；
- 仓库登录地址[https://e.gitee.com/zlkj_3/code/repos](https://e.gitee.com/zlkj_3/code/repos)；


## 代码编写规范

- Prettier & ESLint
- 项目中的代码都符合统一的格式，推荐在开发者工具中安装 Prettier & ESLint 插件。它可以帮助您在每次保存时自动化格式化代码，检测代码规范。
- 在搭建好的项目中，已经内置了符合开发规范的 .prettierrc.js & .eslintrc.js 文件。本项目已集成 Prettier & ESLint 插件，npm install 后即可使用代码自动格式化的功能。


## 分支规范

- 主干分支 -- release
- 功能分支 -- feature
- 修复分支 -- hotfix
- 分支命名规则：feature/20231203_功能名称。

## Git提交规范

严格按照格式进行 commitlint 校验，正确的提交信息应该是这样的：


```
git commit -m "fix: 修复页面的样式问题"
```

其中 fix 可更换为下方任意一个提交类型（ps：类型后必须要有": "）

```
type must be one of [bug, feat, fix, docs, style, refactor, test, chore, revert, merge] [type-enum]

'bug', // 此项特别针对bug号，用于向测试反馈bug列表的bug修改情况
'feat', // 新功能（feature）
'fix', // 修补bug
'docs', // 文档（documentation）
'style', // 格式（不影响代码运行的变动）
'refactor', // 重构（即不是新增功能，也不是修改bug的代码变动）
'test', // 增加测试
'chore', // 构建过程或辅助工具的变动
'revert', // feat(pencil): add ‘graphiteWidth’ option (撤销之前的commit)
'merge', // 合并分支， 例如： merge（前端页面）： feature-xxxx修改线程地址
```


## 文件的命名规范

- 文件的命名规范按照不同情况进行命名
- 1.如果该文件是单文件组件/类，采用 pascalCase 形式命名，方便导入和使用。
- 2.如果该文件是目录下的主文件，采用 index 名称命名，方便导入。
- 3.如果该文件是资源/样式文件，采用 kebab-case 形式命名。