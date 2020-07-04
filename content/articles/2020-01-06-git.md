---
title: git
date: 2020-01-06 09:24:34
description: 'git github'
image: '/images/20190907/mongoose.png'
# slug: git
author:
  name: liumuu
  bio: vuejs
  img: /blog/avatar.jpg
---

## 1、tag

查看 tag 列表

```bash
git tag
```

新增 tag

git tag 名字 –m "注释"

```bash
git tag -a v1.0.0 -m "first version"
```

上传 tag

```bash
git push origin v1.0.0
```

```bash
git push origin --tags
```

## 2、github desktop 设置代理

.gitconfig 文件 v2ray 设置允许本地

```bash
[https]
proxy = http://127.0.0.1:10810/pac/?t=134753
```
