---
title: mongo数据库操作
date: 2019-11-18 13:46:34
description: 'mongoose数据库操作'
image: '/images/20190907/mongoose.png'
slug: mongo
author:
  name: liumuu
  bio: vuejs
  img: /blog/avatar.jpg
---

## 1、mongo 开启权限

在`/etc/mongod.conf`配置文件内

```bash
net:
  bindIp:0.0.0.0

security:
  authorization: enabled
```

## 2、设置管理员

`https://docs.mongodb.com/manual/tutorial/enable-authentication/`

```bash
use admin

db.createUser(
  {
    user: "myUserAdmin",
    pwd: passwordPrompt(), // or cleartext password
    roles: [ { role: "userAdminAnyDatabase", db: "admin" }, "readWriteAnyDatabase" ]
  }
)
// passwordPrompt() 会要求输入密码
```

## 3、本地登录

`mongostat --help`

```bash
use admin

db.auth("username","password")
```
