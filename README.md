# React v18.2.0 源码调试环境

本仓库基于 create-react-app 创建。

React v18.2.0 源代码存放于 `src/react` 目录，作为 git submodules 的方式组织。

### 安装方法：

```sh
git clone --recurse-submodules git@github.com:camsong/react-source-debug.git
cd react-source-debug
yarn install
yarn start
```

### 开始调试
打开 http://localhost:3000/ 即可开始调试。
建议先完成以下任务，增加对 React 了解：
1. 火焰图查看代码的调用堆栈，并跳转到感兴趣的代码
1. 查看 workloop 的代码 `src/react/packages/react-reconciler/src/ReactFiberWorkLoop.old.js`
1. 查看 render(beginWork, completeWork)、commit 阶段
1. 查看 Fiber 的数据结构 `src/react/packages/react-reconciler/src/ReactInternalTypes.js`
1. 查看 Hooks 的数据结构 `src/react/packages/react-reconciler/src/ReactFiberHooks.old.js`
