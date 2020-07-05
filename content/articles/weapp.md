---
title: 微信小程序weapp
date: 2019-09-07 10:37:22
description: 'weapp微信小程序'
image: '/images/20190907/weapp.png'
slug: weapp
---

## 1、生命周期

[Page(Object object)](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html)

```javascript
//index.js
Page({
  data: {
    text: 'This is page data.'
  },
  onLoad: function(options) {
    // Do some initialize when page load.
  },
  onReady: function() {
    // Do something when page ready.
  },
  onShow: function() {
    // Do something when page show.
  },
  onHide: function() {
    // Do something when page hide.
  },
  onUnload: function() {
    // Do something when page close.
  },
  onPullDownRefresh: function() {
    // Do something when pull down.
  },
  onReachBottom: function() {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function() {
    // return custom share data when user share.
  },
  onPageScroll: function() {
    // Do something when page scroll
  },
  onResize: function() {
    // Do something when page resize
  },
  onTabItemTap(item) {
    console.log(item.index);
    console.log(item.pagePath);
    console.log(item.text);
  },
  // Event handler.
  viewTap: function() {
    this.setData(
      {
        text: 'Set some data for updating view.'
      },
      function() {
        // this is setData callback
      }
    );
  },
  customData: {
    hi: 'MINA'
  }
});
```

## 2、注册小程序

```javascript
App({
  onLaunch(options) {
    // Do something initial when launch.
  },
  onShow(options) {
    // Do something when show.
  },
  onHide() {
    // Do something when hide.
  },
  onError(msg) {
    console.log(msg);
  },
  globalData: 'I am global data'
});
```

## 3、setData

```javascript
this.setData({
  data: true
});
```

## 4、返回上一界面

```javascript
wx.navigateBack({
  delta: -1
});
```

## 5、分享

```javascript
onShareAppMessage(res) {
  return {
    title: '《剑网3·指尖江湖》' + this.data.item.title + ' - 查询',
    path: '/pages/category/item/index?item_name=' + this.data.item.name
  }
}
```
