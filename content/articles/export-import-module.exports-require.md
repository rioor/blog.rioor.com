---
title: export,import and module.exports,require
date: 2019-10-20 17:57:07
description: 'ES6:export,import. CommandJS:module.exports,require'
image: '/images/20191021/w3c.png'
slug: export-import-module-exports-require
---

## ES6

```js
// =
export var m = 1
export { m }

export { a, b, c }

export const a = { name: '', age: 0 }

export function add(a, b) {
  return a + b
}

// error exprot function
export { function }

export default Config
```

```js
import Config, { a, b } from ''
```

## CommandJS (nodejs)

```js
modele.exports = { x, add }
```

```js
var request = require('')
```
