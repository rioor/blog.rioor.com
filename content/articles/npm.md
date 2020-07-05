---
title: npm
date: 2019-10-20 18:16:07
description: 'npm包管理'
image: '/images/20191021/npmjs.png'
slug: npm
---

## 1、清理缓存

`npm cache clean --force`

## 3、rebuild

`npm rebuild`

## 建议不要用 cnpm 安装 会有各种诡异的 bug 可以通过如下操作解决 npm 下载速度慢的问题

npm install --registry=https://registry.npm.taobao.org

## 安装 node-sass

新建.npmrc 文件

```bash
sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
registry=https://registry.npm.taobao.org
```
