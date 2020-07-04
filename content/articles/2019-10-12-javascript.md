---
title: javascript
date: 2019-10-12 10:40:07
description: "JavaScript技巧"
image: "/images/20191012/js.jpg"
slug: javascript
---

## 1、`call()、apply()、bind()`

`call()` `fun.call(thisArg[, arg1[, arg2[, …]]]) 使value=this`，仍然执行原方法

## 2、`WeakMap`

`new WeakMap([iterable])`
iterable:可迭代的
WeakMap 的 key 只能是 Object 类型。

## 3、includes 代替 indexOf

ES6 使用`array.includes(item)`代替`array.indexOf(item)!==-1`

## 4、undefined 和 null

5 个 JS 不良编码习惯：`https://juejin.im/post/5da50be0f265da5b7f1ca22a`

避免使用隐式类型转换，undefined 和 null

### undefined:“未赋值”的“变量”

```javascript
const object = { prop: value };
if (object.nonExistingProp === undefined) {
  // bad
}
if ("nonExistingProp" in object) {
  // good
}
```

### null:“缺失对象”指示符

可替代方法是 try /catch 机制，默认对象的使用

当使用数学式或其他比较方法 < > <= >= 时，`null 转为 0，undefined 转为 NaN`

## 5、Map 是一个键值对集合

`new Map()`
`map.set(key, value)`,key 键可以为 Object 对象

### Object 转化为 Map

```javascript
var obj = { foo: "bar", baz: 42 };
console.log(Object.entries(obj));
// [ ['foo', 'bar'], ['baz', 42] ]
var map = new Map(Object.entries(obj));
console.log(map);
// Map { foo: "bar", baz: 42 }
```

## 6、Set 是一个包含不重复值的集合

```javascript
set.forEach((value, valueAgain, set) => {
  alert(value);
});
```

## 7、WeakMap WeakSet 变体

**变体，仅允许对象作为键，并且当对象由于其他原因不可引用的时候将其删除**

不会阻止将它的元素从内存中移除

WeakMap 键必须是对象

key=null，对应内容会自动删除

```javascript
let john = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john, "...");

john = null; // 覆盖引用

// john 从内存中移除了！
```

## 8、`Object.assign(target, ...sources)`

`Object.assign()` 值从一个或多个源对象复制到目标对象，它将返回目标对象

```javascript
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }
```
