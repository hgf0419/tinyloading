# TinyLoading

[![npm version](https://img.shields.io/npm/v/@golf-h/tinyloading.svg)](https://www.npmjs.com/package/@golf-h/tinyloading)
[![test coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)]()
[![bundle size](https://img.shields.io/badge/size-3.2KB-blue)]()

轻量级加载动画库，支持自定义配置和多种动画效果

## 主要特性：
- 支持两种动画类型：旋转(spin)和脉冲(pulse)
- 三种尺寸可选：small/medium/large
- 支持全屏模式或行内模式
- 可自定义颜色、提示信息
- 自动注入必要样式
- 轻量级（约3KB）

## 安装
```bash
npm install @golf-h/tinyloading
```

## 快速开始
```javascript
import TinyLoading from 'tinyloading';

const loading = new TinyLoading({
  color: '#3498db',
  size: 'medium',
  type: 'spin'
});

loading.show();

// 隐藏加载动画
loading.hide();
```

## 配置选项
| 参数       | 类型       | 默认值     | 说明                      |
|------------|------------|------------|---------------------------|
| color      | string     | '#3498db'  | 加载器颜色                |
| size       | string     | 'medium'   | 尺寸：small/medium/large  |
| type       | string     | 'spin'     | 动画类型：spin/pulse      |
| fullScreen | boolean    | true       | 是否全屏显示              |
| zIndex     | number     | 9999       | 层级                      |
| message    | string     | ''         | 提示文字                  |

## 方法
- `show(container?: HTMLElement)`: 显示加载动画
- `hide()`: 隐藏加载动画
- `setConfig(config: Object)`: 动态更新配置

## 示例
```javascript
// 行内模式
const inlineLoader = new TinyLoading({
  fullScreen: false,
  size: 'small'
});
inlineLoader.show(document.getElementById('container'));

// 动态更新
loading.setConfig({
  type: 'pulse',
  message: 'Processing...'
});
```

## 开发
```bash
# 安装依赖
npm install

# 编译代码
npm run build

# 运行测试
npm test
```

## 许可证
MIT