---
title: vue-router
date: 2019-09-12 14:40:07
description: "vue-router路由"
image: "/images/20190909/vuejs.png"
slug: vuerouter
---

## 1、Vue 直接使用编程式导航

`this.$router.push`

## 2、路径匹配

`:class="[matchUrl(item.url) ? 'el-link--success' : 'el-link-default']"`

```javascript
computed: {
  matchUrl() {
    return function(url) {
      const queryUrl = this.query.split('/', 2).splice(1, 1)
      const itemUrl = url.substr(1)

      if (queryUrl.includes(itemUrl)) {
        return true
      }
    }
  }
},

props: ['query']
```

其中`this.query.split('/', 2)`利用`/`分离字符串生成`数组`，数组长度限制为 2

其中`.splice(1, 1)` `arr.splice(index[, deleteCount, elem1, ..., elemN])`从 index 开始：删除 deleteCount 元素并在当前位置插入 elem1, ..., elemN。最后返回已删除元素的数组

其中`url.substr(1)`从第 1 个字符串开始返回字符串，第二个数字=返回字符串个数

`str.substring(start [, end])`返回 start 和 end 之间的字符串部分
