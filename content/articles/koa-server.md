---
title: koa2 server
date: 2019-09-07 10:03:07
description: 'Koa server搭建'
image: '/images/20190907/koa.png'
slug: koa-server
---

## 1、`package.json`

```json
  "dependencies": {
    "dotenv": "^8.1.0",
    "koa": "^2.8.1",
    "koa-bodyparser": "^4.2.1",
    "koa-cache-lite": "^3.8.8",
    "koa-favicon": "^2.0.1",
    "koa-jwt": "^3.6.0",
    "koa-logger": "^3.2.1",
    "koa-router": "^7.4.0",
    "koa-static": "^5.0.0",
    "mongoose": "^5.6.13"
  },
  "devDependencies": {
    "@babel/cli": "^7.5.5",
    "@babel/core": "^7.5.5",
    "@babel/node": "^7.5.5",
    "@babel/preset-env": "^7.5.5",
    "cross-env": "^5.2.1",
    "nodemon": "^1.19.2"
  }
```

## 2、`error`

`err.response.data.message`

eggjs onerror: `err.message.toString()`

fly: `error.response.data`
