---
title: css
date: 2019-10-20 17:57:07
description: 'css、scss、less使用技巧'
image: '/images/20191021/w3c.png'
slug: css
---

## 1、transition

`transition: property duration timing-function delay`简写
transition-property 规定设置过渡效果的 CSS 属性的名称。
transition-duration 规定完成过渡效果需要多少秒或毫秒。
transition-timing-function 规定速度效果的速度曲线。
transition-delay 定义过渡效果何时开始。

## 2、transition-property: none|all|property

none 没有属性会获得过渡效果。
all 所有属性都将获得过渡效果。
property 定义应用过渡效果的 CSS 属性名称列表，列表以逗号分隔。

## 3、transition-duration transition-delay

`transition-duration:0.5s`过渡效果持续秒数
`transition-delay:0.1s`过渡效果开始前等待秒数

## 4、transition-timing-function

linear 规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）。
ease 规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）。
ease-in 规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）。
ease-out 规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）。
ease-in-out 规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）。
cubic-bezier(n,n,n,n) 在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值。

## 5、transform

`transform 2D 或 3D 转换，旋转、缩放、移动或倾斜`
`translateX(100%)`自身宽度的 100%
`scale 缩放`

## 6、flex: 1;

`c.width = a.width-(a 的 margin 和 padding[左右])-b.width--(b 的 margin 和 padding[左右])-(c 的 margin 和 padding[左右])`

## 7、outline

边框样式

## 8、选择子元素 >

`h1 > strong {color:red;}`选择作为 h1 元素子元素的所有 strong 元素

## 9、伪元素 ::before ::after

css3 为了更好的区分开伪类及伪元素，伪元素使用双冒号

```css
.element::before {
  content: 'Note: '; /* 字符串 */
}
```

## 10、相邻兄弟选择器 +

`h1 + p {margin-top:50px;}`

选择紧接在 h1 元素后出现的段落，h1 和 p 元素拥有共同的父元素

## 11、font

font-style
font-variant 小型大写字母
font-weight
font-size/line-height
font-family

## 12、css content 属性: FontAwesome

`.fa-check \f00c`

## 13、justify-content

`justify-content: flex-start|flex-end|center|space-between|space-around|initial|inherit;`
