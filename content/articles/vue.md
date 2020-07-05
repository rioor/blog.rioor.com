---
title: vue.js
date: 2019-09-09 18:29:07
description: "Vuejs 渐进式JavaScript框架"
image: "/images/20190909/vuejs.png"
slug: vuejs
---

## 1、路由参数

`this.$route.path: /collection`

`this.$route.params {}`

`this.$route.query { name: "Tom", sex:"man" }`

## 2、class 三元表达式

`:class="[item.url.toLowerCase()===query?'el-link--success':'el-link-default']"`

## 3、打包分包

```javascript
    {
      path: '/collection',
      name: 'collection',
      component: () => import('./views/collection/Index.vue')
      component: () =>
        import(
          /* webpackChunkName: "collection" */ './views/collection/Index.vue'
        )
    },

```

## 4、`$refs`属性赋值

`<div class="pell" id="pell" ref="pellEditor" />`

`this.$refs.pellEditor.content.innerHTML = this.defaultEditor`

## 5、`vuex input`更新表单

v-model 或者:value + @input

```vue
<el-input @input="onChange('name', $event)" v-model="item.name"></el-input>
```

```javascript
    onChange(name, e) {
      this.$set(this.form, name, e)
    }
```

## 6、`is`组件名或表格等特殊格式

```javascript
<!-- 组件会在 `currentTabComponent` 改变时改变 -->
<component v-bind:is="currentTabComponent"></component>
```

```javascript
<table>
  <tr is="blog-post-row"></tr>
</table>
```

## 7、scoped 页面内 style

```javascript
<style scoped>
.article >>> code {
  background-color: #e6f2fc;
}
</style>
```

## 8、\$nextTick()

```javascript
open() {
  this.isOpen = true
  this.$nextTick(() => {
    this.$refs.closeButton.focus()
  })
}
```

```javascript
updateMessage: function () {
  this.message = '已更新'
  console.log(this.$el.textContent) // => '未更新'
  this.$nextTick(function () {
    console.log(this.$el.textContent) // => '已更新'
  })
}
```

```javascript
updateMessage: async function () {
  this.message = '已更新'
  console.log(this.$el.textContent) // => '未更新'
  await this.$nextTick()
  console.log(this.$el.textContent) // => '已更新'
}
```

## 9、.native

`<base-input v-on:focus.native="onFocus"></base-input>`原生事件
