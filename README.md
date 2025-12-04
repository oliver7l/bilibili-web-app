# B站数据统计Web应用

这是一个精简版的B站数据统计Web应用，基于React构建，移除了所有React Native相关依赖。

## 项目特点

- **精简体积**: 从原项目的453MB减少到约50MB
- **纯Web技术栈**: 仅使用React、Webpack等标准Web技术
- **响应式设计**: 支持桌面和移动设备
- **快速启动**: 启动速度更快，部署更简单

## 功能特性

- **数据统计**: 查看UP主视频数据统计
- **视频浏览**: 浏览和播放B站视频内容
- **设置页面**: 查看应用信息和数据来源

## 技术栈

- **前端框架**: React 18.3.1
- **构建工具**: Webpack 5.103.0
- **开发服务器**: Webpack Dev Server
- **样式**: CSS3 + 响应式设计

## 快速开始

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
# 或
npm start
```

### 生产构建
```bash
npm run build
```

### 静态文件服务
```bash
npm run serve
```

## 项目结构

```
0015-web-pure/
├── public/
│   └── index.html          # HTML模板
├── src/
│   ├── components/         # React组件
│   │   ├── HomeScreen.js
│   │   ├── DashboardScreen.js
│   │   ├── VideoScreen.js
│   │   └── SettingsScreen.js
│   ├── styles/            # 样式文件
│   │   ├── global.css
│   │   └── App.css
│   ├── App.js             # 主应用组件
│   └── index.js           # 入口文件
├── package.json           # 项目配置
├── webpack.config.js      # Webpack配置
└── README.md             # 项目说明
```

## 精简对比

| 项目版本 | 依赖数量 | 项目体积 | 启动速度 |
|---------|---------|---------|---------|
| 原React Native项目 | 25+个依赖 | 453MB | 较慢 |
| **纯Web版本** | **10个依赖** | **~50MB** | **快速** |

## 数据来源

应用使用真实爬取的B站数据：
- 数据来源: crawled_results文件夹
- 包含UP主: 115个
- 总视频数: 11,491个
- 数据文件: 115个JSON文件

## 浏览器支持

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 许可证

MIT License