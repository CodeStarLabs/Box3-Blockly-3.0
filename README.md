# Box3 Blockly

BOX3 Blockly是一款开源、基于google blockly的[Box3](https://dao3.fun)（编程猫旗下的3D编程平台）图形化编辑器，降低学习编程的门槛，帮助新手学习API与JS，体验到编程的乐趣。<br/>
在线编辑器：https://box3.codestarlabs.top/blockly3

## 关于3.0版本
当前版本3.0为最新版本，目前处于beta阶段，采用全新界面，由Vue3构建，以更好增强用户体验，同时，为了适应Box3的更新（Arena编辑器），生成的代码模式已更改为最新的API版本（如Box3Vector3更名为GameVector3，没什么大变动）。<br/>
如需使用旧版，请访问：https://box3.codestarlabs.top/blockly

<b>注意：</b>Box3 Blockly自[码星Labs](https://www.codestarlabs.top/)成立后，已归属码星Labs维护。

## 安装IDE

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## 本地部署
以下均为终端命令，请在终端中使用。请确保有安装[Node.js](https://nodejs.org) (version >= 18.19.1)。

```sh
npm install
```

### 预览调试

```sh
npm run dev
```

### 构建
构建后将会在项目文件夹下生成<kbd>./dist</kbd>文件夹。

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
