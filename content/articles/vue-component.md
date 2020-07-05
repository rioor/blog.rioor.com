---
title: vue component
date: 2019-10-21 12:40:07
description: "Vuejs 渐进式JavaScript框架 组件系统"
image: "/images/20190909/vuejs.png"
slug: vue-component
---

## 1、props

`props:[]`不推荐

```javascript
<demo-props :inpVal="123"></demo-props>

props: {
  inpVal: {
    type: Number,
    required: true,
    default: 200,
    // 自定义验证。这个值必须匹配下列字符串中的一个
    validator: function(value) {
      // return [123, "warning", "danger"].indexOf(value) !== -1;
      return [123, 456, 789].includes(value);
    }
  }
}
```

## 2、`$emit`

`vm.$emit( eventName, […args] )`

```javascript
// 父组件
<demo-emit v-on:give-advice="showAdvice"></demo-emit>

showAdvice: function(advice) {
  this.advice = advice;
  console.log("showAdvice:", advice);
}

// 子组件
<button v-on:click="giveAdvice">giveAdvice</button>

giveAdvice: function() {
  // this.$emit("give-advice", [{ advice: "value", number: 1 }]);
  this.$emit("give-advice", { advice: "value", number: 1 });
}
```

## 3、vuex

### state

`this.$store.state` `mapState`

### getter

`this.$store.getter` `mapGetters`

### mutation

`mapMutations`

### action

`mutation` `this.$dispatch` `mapActions`

### modules

## 4、`$attrs`属性 `$listeners`高层次的组件，`inheritAttrs`

`$attrs` 里存放的是 父组件 中绑定的 非 Props 属性

`$listeners` 里存放的是 父组件 中绑定的非原生 事件

### `$attrs`

通过`v-bind="$attrs"`传入内部组件

```javascript
// 父组件
<demo-attrs title="title" width="80" height="80" imgUrl="imgUrl"></demo-attrs>
// 子组件，剔除props
<div>title:{{this.$attrs.title}}</div>

props: ["width"],
mounted() {
  // {title: "这是标题", imgUrl: "imgUrl"}
  // 剔除width
  console.log(this.$attrs);
}
```

### `$listeners`

不含 `.native` 修饰器

通过 `v-on="$listeners"` 传入内部组

```javascript
// 父组件
<home @change="change"/>

// 子组件
mounted() {
  // 即可拿到 change 事件
  console.log(this.$listeners)
}

```

### `inheritAttrs`

`inheritAttrs: false`禁用特性继承 和 `$attrs`配合使用

`inheritAttrs` 默认值为 true，true 的意思是将父组件中除了 props 外的属性添加到子组件的根节点上

(说明，即使设置为 true，子组件仍然可以通过`$attr` 获取到 props 意外的属性)

将 `inheritAttrs:false` 后,属性就不会显示在根节点上了

### 中间组件

```javascript
<div>
  <demo-attrs-plus-plus
    v-bind="$attrs"
    v-on="$listeners"
  ></demo-attrs-plus-plus>
</div>
```

## 5、`provide、inject`

```javascript
// 父组件:
// provide 是一个对象,提供一个属性或方法
provide: {
  foo: '这是 foo',
  fooMethod:()=>{
    console.log('父组件 fooMethod 被调用')
  }
},

// 子或者孙子组件
// 数组或者对象,注入到子组件
inject: ['foo','fooMethod'],
mounted() {
  this.fooMethod()
  console.log(this.foo)
}
// 在父组件下面所有的子组件都可以利用inject
```

## 6、`parent` `children`

一级父组件和只组件

```javascript
//父组件
mounted(){
  console.log(this.$children)
  // 可以拿到 一级子组件的属性和方法
  // 所以就可以直接改变 data,或者调用 methods 方法
}

//子组件
mounted(){
  console.log(this.$parent)
  // 可以拿到 parent 的属性和方法
}

```

## 7、`$refs`

```javascript
// 父组件
<home ref="home"/>

mounted(){
  // 即可拿到子组件的实例,就可以直接操作 data 和 methods
  console.log(this.$refs.home)
}
```

## 8、`$root` `$children[0]`

```javascript
// 父组件
mounted(){
  // 获取根实例,最后所有组件都是挂载到根实例上
  console.log(this.$root)
  // 获取根实例的一级子组件
  console.log(this.$root.$children[0])
  // 获取根实例的二级子组件
  console.log(this.$root.$children[0].$children[0])
}
```

## 9、`.sync`

```javascript
// 父组件
<home :title.sync="title" />
// 编译时会被扩展为
<home :title="title"  @update:title="val => title = val"/>

// 子组件
// 所以子组件可以通过$emit 触发 update 方法改变
mounted(){
  this.$emit("update:title", '这是新的title')
}
```

## 10、2.6.0 `v-slot` 缩写 `#`

2.6.0 废弃`slot` `slot-scope` `scope`

```javascript
// 父组件
<demo-v-slot>
  <!-- default -->
  <template v-slot:default>
    v-slot:default
    <p>匿名默认值</p>
  </template>

  <!-- v-slot:todo -->
  <template v-slot:todo>
    v-slot:todo
    <p>匿名插槽</p>
  </template>

  <!-- v-slot:todos="slotProps" -->
  <template v-slot:todos="slotProps">
    <div>slotProps.user.firstName:{{slotProps.user.firstName}}</div>
    <div>slotProps.user.lastName:{{slotProps.user.lastName}}</div>
    <div>slotProps.test:{{slotProps.test}}</div>
  </template>
</demo-v-slot>
```

```javascript
<slot></slot>
<slot name="todo"></slot>
<slot name="todos" :user="user" :test="test"></slot>

data() {
  return {
    user: {
      firstName: "Hello",
      lastName: "World"
    },
    test: [1, 2, 3, 4]
  };
}
```

## 11、EventBus

## 12、`broadcast、dispatch`

## 13、路由传参

## 14、Vue.observable
