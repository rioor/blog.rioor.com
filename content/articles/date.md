---
title: date
date: 2020-07-05 09:34:00
description: 'JavaScript date'
image: '/images/20191012/js.jpg'
slug: date
---

## formate

### toLocaleDateString()

```js
formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('en', options)
}
```
