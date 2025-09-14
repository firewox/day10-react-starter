# Todo List 应用

一个基于 React 的简单待办事项应用，支持添加、标记完成和删除待办事项。

## 项目特性

- ✅ 添加新的待办事项
- ✅ 标记待办事项为已完成/未完成
- ✅ 删除待办事项
- ✅ 使用 React Context API 和 useReducer 进行状态管理
- ✅ 简洁的用户界面设计

## 技术栈

- **React**：19.1.1
- **React DOM**：19.1.1
- **React Scripts**：5.0.1
- **CSS**：用于样式设计

## 安装指南

### 前提条件

确保您的系统已安装以下软件：
- [Node.js](https://nodejs.org/) (推荐 v16 或更高版本)
- [npm](https://www.npmjs.com/) (通常随 Node.js 一起安装)

### 安装步骤

1. 克隆此仓库：

```bash
git clone https://github.com/firewox/day10-react-starter.git
cd day10-react-starter
git checkout todolist
```

2. 安装依赖：

```bash
npm install
```

## 运行应用

### 开发模式

```bash
npm start
```

应用将在开发模式下运行。打开 [http://localhost:3000](http://localhost:3000) 即可在浏览器中查看。

### 构建生产版本

```bash
npm run build
```

这将在 `build` 文件夹中生成优化后的生产版本。

## 项目结构

```
day10-react-starter/
├── src/
│   ├── components/         # React 组件
│   │   ├── TodoAdd.jsx     # 添加待办事项组件
│   │   ├── TodoGroup.jsx   # 待办事项列表组件
│   │   └── TodoItem.jsx    # 单个待办事项组件
│   ├── contexts/           # Context API 相关文件
│   │   └── TodoContext.js  # Todo 上下文定义
│   ├── reducers/           # Reducer 状态管理
│   │   └── TodoReducer.js  # Todo 状态管理逻辑
│   ├── App.css             # 主样式文件
│   ├── App.js              # 应用主组件
│   ├── index.css           # 全局样式
│   └── index.js            # 应用入口文件
├── package.json            # 项目配置和依赖
└── README.md               # 项目说明文档
```

## 使用说明

1. **添加待办事项**：在输入框中输入待办事项内容，然后点击"add"按钮或按回车键。
2. **标记完成状态**：点击待办事项文本，即可切换其完成状态（已完成/未完成）。
3. **删除待办事项**：点击待办事项右侧的"X"按钮，即可删除该待办事项。

## 状态管理

本项目使用 React 的 Context API 和 useReducer 钩子进行状态管理：

- **TodoContext.js**：定义了全局上下文，提供状态和分发函数。
- **TodoReducer.js**：包含处理状态更新的逻辑，支持添加、切换和删除待办事项的操作。

## 许可证

本项目使用 [GNU General Public License (GPL)](https://www.gnu.org/licenses/gpl-3.0.html) 许可证。

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目。

## 致谢

感谢所有为本项目做出贡献的开发者。