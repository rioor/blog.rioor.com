---
title: node
date: 2019-10-23 13:31:07
description: 'node技巧'
image: '/images/20191023/node.svg'
slug: node
---

## 1、require.context() 批量组件

```javascript
const path = require('path');
const files = require.context('@/components/', false, /\.vue$/);
const modules = {};
files.keys().forEach(key => {
  console.log('key:', key);
  const name = path.basename(key, '.vue');
  modules[name] = files(key).default || files(key);
});

components: modules;
```

## 2、路径

`__dirname`： 所在目录
`__filename`： 绝对路径的文件名

`path.resolve(__dirname, '../public/uploads/demo.xls');`转换为`D:\GitHub\Rioor.ERP\api\app\public\uploads\demo.xls`

`fs.readFileSync(`\${\_\_dirname}/demo.xls`)`
