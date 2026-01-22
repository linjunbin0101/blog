// Mock data for blog posts
export const posts = [
    {
        id: 1,
        title: '如何开始学习前端开发',
        date: '2026年1月22日',
        excerpt:
            '前端开发是一个充满活力和机遇的领域。本文将分享我学习前端开发的经验和建议，包括学习路径、资源推荐和实践方法。',
        content: `# 如何开始学习前端开发

前端开发是一个充满活力和机遇的领域。随着互联网的快速发展，前端开发的重要性日益凸显。本文将分享我学习前端开发的经验和建议，帮助你开始前端开发之旅。

## 1. 学习基础HTML

HTML是网页的骨架，是前端开发的基础。你需要学习HTML的基本标签、属性和结构。

### 推荐资源
- [MDN HTML教程](https://developer.mozilla.org/zh-CN/docs/Learn/HTML)
- [W3Schools HTML教程](https://www.w3schools.com/html/)

## 2. 掌握CSS

CSS负责网页的样式和布局。学习CSS可以让你的网页更加美观和专业。

### 推荐资源
- [MDN CSS教程](https://developer.mozilla.org/zh-CN/docs/Learn/CSS)
- [CSS-Tricks](https://css-tricks.com/)

## 3. 学习JavaScript

JavaScript是前端开发的核心编程语言，负责网页的交互和动态效果。

### 推荐资源
- [MDN JavaScript教程](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript)
- [JavaScript.info](https://javascript.info/)

## 4. 学习现代前端框架

掌握基础后，你可以学习现代前端框架，如React、Vue或Angular，提高开发效率。

### 推荐资源
- [Vue官方文档](https://vuejs.org/guide/introduction.html)
- [React官方文档](https://react.dev/learn)

## 5. 实践项目

通过实践项目来巩固所学知识，积累实战经验。

### 推荐项目
- 个人博客
- 待办事项应用
- 天气应用
- 电商网站首页

## 6. 持续学习

前端技术发展迅速，你需要持续学习新的技术和框架。

### 学习资源
- [前端周刊](https://weekly.fedev.cn/)
- [Dev.to](https://dev.to/)
- [Medium](https://medium.com/)

希望这些建议对你有所帮助，祝你在前端开发的道路上越走越远！`,
        tags: ['前端开发', '学习方法', 'JavaScript'],
    },
    {
        id: 2,
        title: 'CSS Grid 布局完全指南',
        date: '2026年1月18日',
        excerpt:
            'CSS Grid 是现代前端开发中最强大的布局工具之一。本文将详细介绍 CSS Grid 的核心概念、属性和使用技巧。',
        content: `# CSS Grid 布局完全指南

CSS Grid 是现代前端开发中最强大的布局工具之一。它允许你创建复杂的二维布局，轻松实现各种设计需求。

## 1. 什么是CSS Grid

CSS Grid是一种二维布局系统，允许你同时在行和列两个方向上排列元素。

## 2. 基本概念

### 网格容器和网格项
- 网格容器：应用了\`display: grid\`的元素
- 网格项：网格容器的直接子元素

### 网格线
- 水平线称为行线
- 垂直线称为列线

### 网格轨道
- 网格线之间的空间称为网格轨道
- 包括行轨道和列轨道

## 3. 基本语法

\`\`\`css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 200px;
  gap: 10px;
}
\`\`\`

## 4. 常用属性

### 容器属性
- \`grid-template-columns\`：定义列轨道
- \`grid-template-rows\`：定义行轨道
- \`gap\`：定义网格项之间的间距
- \`grid-template-areas\`：使用命名区域定义布局

### 项目属性
- \`grid-column\`：指定项目跨越的列范围
- \`grid-row\`：指定项目跨越的行范围
- \`grid-area\`：指定项目的命名区域

## 5. 响应式布局

使用媒体查询结合CSS Grid可以轻松实现响应式布局：

\`\`\`css
.container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

@media (min-width: 768px) {
  .container {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .container {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
\`\`\`

## 6. 高级技巧

- 隐式网格
- 自动填充和自动适配
- 网格对齐
- 嵌套网格

## 7. 浏览器支持

CSS Grid在所有现代浏览器中都得到了很好的支持，包括Chrome、Firefox、Safari和Edge。

希望本指南能帮助你掌握CSS Grid布局，创建出更加复杂和美观的网页设计！`,
        tags: ['CSS', 'Grid布局', '前端开发'],
    },
    {
        id: 3,
        title: 'JavaScript 异步编程进化史',
        date: '2026年1月15日',
        excerpt:
            '从回调函数到 Promise，再到 async/await，JavaScript 的异步编程经历了漫长的进化过程。',
        content: `# JavaScript 异步编程进化史

JavaScript 是一门单线程语言，异步编程是其核心特性之一。从最早的回调函数到现代的 async/await，JavaScript 的异步编程经历了漫长的进化过程。

## 1. 回调函数

回调函数是 JavaScript 最早的异步编程方式，通过将函数作为参数传递给其他函数来实现异步操作。

\`\`\`javascript
setTimeout(function() {
  console.log('Hello, World!');
}, 1000);
\`\`\`

### 问题
- 回调地狱：嵌套的回调函数导致代码难以阅读和维护
- 错误处理困难：需要在每个回调中处理错误

## 2. Promise

Promise 是 ES6 引入的异步编程解决方案，解决了回调地狱的问题。

### 基本用法
\`\`\`javascript
const promise = new Promise((resolve, reject) => {
  // 异步操作
  setTimeout(() => {
    resolve('Success!');
    // 或者 reject(new Error('Failed!'));
  }, 1000);
});

promise.then(result => {
  console.log(result);
}).catch(error => {
  console.error(error);
});
\`\`\`

### 链式调用
\`\`\`javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
\`\`\`

## 3. async/await

async/await 是 ES2017 引入的语法糖，基于 Promise，使异步代码看起来像同步代码。

### 基本用法
\`\`\`javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
\`\`\`

### 优点
- 代码结构清晰，易于阅读和维护
- 错误处理方便，使用 try/catch
- 支持并行执行多个异步操作

## 4. 异步编程最佳实践

- 优先使用 async/await，代码更简洁易读
- 合理使用 Promise.all 处理并行异步操作
- 避免过度嵌套
- 做好错误处理

## 5. 未来展望

随着 JavaScript 语言的不断发展，异步编程也在不断进化。未来可能会有更多的语法糖和 API 来简化异步编程。

希望本文能帮助你了解 JavaScript 异步编程的进化历程，选择合适的异步编程方式来编写高效、可维护的代码！`,
        tags: ['JavaScript', '异步编程', '前端开发'],
    },
    {
        id: 4,
        title: '构建现代化的响应式网站',
        date: '2026年1月10日',
        excerpt:
            '随着移动设备的普及，响应式设计已经成为现代网站的标配。本文将分享构建现代化响应式网站的最佳实践。',
        content: `# 构建现代化的响应式网站

随着移动设备的普及，响应式设计已经成为现代网站的标配。一个好的响应式网站应该能够在不同尺寸的设备上提供良好的用户体验。

## 1. 响应式设计原则

### 移动优先
从移动设备开始设计，然后逐步扩展到桌面设备。这有助于确保在所有设备上都有良好的性能和用户体验。

### 流体布局
使用相对单位（如百分比、em、rem、vw/vh）代替固定单位（如像素），使布局能够根据屏幕尺寸自动调整。

### 弹性图片
确保图片能够根据容器大小自动调整，避免图片溢出或变形。

### 媒体查询
使用媒体查询根据不同的屏幕尺寸应用不同的样式。

## 2. 响应式设计技术

### CSS Grid
CSS Grid 是一种强大的二维布局系统，非常适合创建响应式布局。

### Flexbox
Flexbox 是一维布局系统，适合排列行或列中的元素。

### 媒体查询
\`\`\`css
/* 移动端 */
@media (max-width: 767px) {
  /* 样式 */
}

/* 平板 */
@media (min-width: 768px) and (max-width: 1023px) {
  /* 样式 */
}

/* 桌面 */
@media (min-width: 1024px) {
  /* 样式 */
}
\`\`\`

## 3. 响应式设计最佳实践

### 简化导航
在移动设备上，导航菜单通常会折叠成汉堡菜单，点击后展开。

### 优化内容
根据屏幕尺寸调整内容的显示方式，移除不必要的元素，确保核心内容清晰可见。

### 优化图片
使用适当尺寸的图片，考虑使用 WebP 格式，减少图片加载时间。

### 优化字体
确保字体在不同设备上都能清晰可读，调整字体大小和行高。

### 测试
在不同的设备和浏览器上测试网站，确保良好的兼容性和用户体验。

## 4. 响应式设计工具

### 设计工具
- Figma
- Sketch
- Adobe XD

### 开发工具
- Chrome DevTools
- Firefox Developer Tools
- Responsive Web Design Checker

## 5. 性能优化

### 减少 HTTP 请求
合并 CSS 和 JavaScript 文件，使用 CSS Sprites 等技术。

### 压缩资源
压缩 HTML、CSS 和 JavaScript 文件，减少文件大小。

### 使用缓存
合理设置缓存策略，减少重复请求。

### 使用 CDN
使用 CDN 加速资源加载，提高网站性能。

## 6. 未来趋势

### 自适应设计
根据设备特性自动调整网站的设计和功能。

### 渐进式 Web 应用 (PWA)
结合 Web 和移动应用的优点，提供类似原生应用的用户体验。

### 人工智能辅助设计
使用 AI 工具帮助设计和优化响应式网站。

希望本文能帮助你构建出更加现代化、高性能的响应式网站！`,
        tags: ['响应式设计', '前端开发', 'Web设计'],
    },
    {
        id: 5,
        title: '前端性能优化实战',
        date: '2026年1月5日',
        excerpt:
            '性能是影响用户体验的关键因素之一。本文将介绍前端性能优化的各种技术和工具。',
        content: `# 前端性能优化实战

性能是影响用户体验的关键因素之一。一个快速加载的网站能够提供更好的用户体验，提高用户满意度和转化率。

## 1. 性能指标

### 核心 Web 指标
- Largest Contentful Paint (LCP)：页面最大内容元素的加载时间
- First Input Delay (FID)：用户首次交互的延迟时间
- Cumulative Layout Shift (CLS)：页面布局的稳定性

### 其他重要指标
- Time to First Byte (TTFB)：服务器响应时间
- First Contentful Paint (FCP)：页面首次渲染时间
- Total Blocking Time (TBT)：页面主线程被阻塞的总时间

## 2. 性能优化技术

### 资源加载优化

#### 压缩资源
- 压缩 HTML、CSS 和 JavaScript 文件
- 使用 Gzip 或 Brotli 压缩

#### 代码分割
- 按需加载 JavaScript 模块
- 使用动态导入

#### 优化图片
- 使用适当尺寸的图片
- 使用 WebP 或 AVIF 格式
- 实现懒加载
- 使用图片 CDN

#### 优化字体
- 限制字体数量和变体
- 使用字体子集
- 实现字体预加载

### 渲染优化

#### 关键渲染路径优化
- 减少关键资源数量
- 优化关键资源大小
- 缩短关键资源的加载时间

#### CSS 优化
- 避免使用 @import
- 关键 CSS 内联
- 简化选择器

#### JavaScript 优化
- 减少 DOM 操作
- 使用事件委托
- 避免同步 XHR
- 优化动画性能

### 缓存优化

#### HTTP 缓存
- 合理设置 Cache-Control 头
- 使用 ETag 和 Last-Modified

#### Service Worker 缓存
- 实现离线缓存
- 提高重复访问的性能

## 3. 性能优化工具

### 性能分析工具
- Chrome DevTools Performance
- Lighthouse
- WebPageTest
- GTmetrix

### 监控工具
- Google Analytics
- New Relic
- Datadog

## 4. 性能优化流程

### 1. 测量
使用性能分析工具测量网站的当前性能，找出瓶颈。

### 2. 分析
分析性能数据，确定需要优化的方面。

### 3. 优化
根据分析结果实施优化措施。

### 4. 验证
再次测量性能，验证优化效果。

### 5. 监控
持续监控网站性能，及时发现和解决问题。

## 5. 性能优化最佳实践

- 优先优化核心 Web 指标
- 从最严重的性能问题开始优化
- 持续监控和优化
- 考虑用户体验和性能之间的平衡

## 6. 未来趋势

- 边缘计算
- WebAssembly
- 人工智能辅助优化
- 更智能的浏览器缓存

希望本文能帮助你优化前端性能，构建出更快、更好的网站！`,
        tags: ['性能优化', '前端开发', 'Web性能'],
    },
];

// Mock data for categories
export const categories = [
    { name: '前端开发', count: 12 },
    { name: 'JavaScript', count: 8 },
    { name: 'CSS', count: 6 },
    { name: 'HTML', count: 4 },
    { name: '学习方法', count: 5 },
];

// Mock data for tags
export const allTags = [
    '前端开发',
    'JavaScript',
    'CSS',
    'HTML',
    'React',
    'Vue',
    '性能优化',
    '响应式设计',
    '学习方法',
    'Web设计',
];

// Mock functions for data fetching
export const fetchPosts = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(posts), 300);
    });
};

export const fetchPostById = (id) => {
    return new Promise((resolve) => {
        setTimeout(
            () => resolve(posts.find((post) => post.id === parseInt(id))),
            300
        );
    });
};

export const fetchCategories = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(categories), 200);
    });
};

export const fetchPostsByTag = (tagName) => {
    return new Promise((resolve) => {
        setTimeout(
            () => resolve(posts.filter((post) => post.tags.includes(tagName))),
            300
        );
    });
};

export const fetchRecentPosts = () => {
    return new Promise((resolve) => {
        setTimeout(
            () =>
                resolve(
                    [...posts]
                        .sort((a, b) => new Date(b.date) - new Date(a.date))
                        .slice(0, 4)
                ),
            200
        );
    });
};
