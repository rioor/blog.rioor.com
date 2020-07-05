---
title: javascript array
date: 2019-10-23 23:13:07
description: "JavaScript Array 数组 Tips"
image: "/images/20191012/js.jpg"
slug: javascript-array
---

## 1、`join`

数组中 元素 放入 一个字符串，默认`,`

`arrayObject.join(separator)` separator 可选。指定要使用的分隔符。如果省略该参数，则使用逗号作为分隔符。

## 2、`map` 返回新值

```javascript
let result = arr.map(function(item, index, array) {
  // 返回新值而不是当前元素
});
```

```javascript
var kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 }
];

var reformattedArray = kvArray.map(function(obj) {
  var rObj = {};
  rObj[obj.key] = obj.value;
  return rObj;
});

// reformattedArray 数组为： [{1: 10}, {2: 20}, {3: 30}],

// kvArray 数组未被修改:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]
```

## 3、`reduce` `reduceRight`

### `reduce`

接收一个函数作为 累加器，数组中的每个值（从左到右）开始 缩减，最终计算为一个值

`reduce(func, initial)` — 通过为每个元素调用 `func` 计算数组上的单个值并在调用之间传递中间结果。

如果没有提供 initialValue，reduce 会从索引 1 的地方开始执行 callback 方法，跳过第一个索引。

如果提供 initialValue，从索引 0 开始。

`reduce` 缩小

```javascript
let value = arr.reduce(function(previousValue, item, index, arr) {
  // ...
}, initial);
```

`previousValue` — 是前一个函数调用的结果，第一次调用是初始化。

`item` — 当前的数组元素。

`index` — 当前索引。

`arr` — 数组本身。

```javascript
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
alert(result);
// 15
```

![reduce](/images/20191023/reduce.svg)

## 4、`every` `some`

```javascript
arr.every(callback[, thisArg])
// 数组 内的 所有元素 是否都能 通过 某个指定 函数 的测试。
// 它返回一个 布尔值。
```

```javascript
arr.some(callback(element[, index[, array]])[, thisArg])
// 数组中有至少一个元素通过回调函数的测试就会返回true；
// 所有元素都没有通过回调函数的测试返回值才会为false。
```

## 5. `Object` to `Array`

```javascript
const zoo = {
  lion: "🐯",
  panda: "🐼"
};
// ['line', 'panda']
Keys: Object.keys(zoo);

// ['🐯', '🐼']
Values: Object.values(zoo);

// [['lion', '🐯'], ['panda', '🐼']]
KeysAndValues: Object.entries(zoo);
```
