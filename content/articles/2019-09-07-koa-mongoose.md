---
title: mongoose数据库操作
date: 2019-09-07 10:02:34
description: 'Koa中mongoose数据库操作'
image: '/images/20190907/mongoose.png'
slug: koa-mongoose
---

## 1、`$lookup`查找包括子内容

from:'item'小写，数据库库名

localField:本字段

foreignField:外字段

as:生成数组字段

```javascript
const test = await Category.aggregate([
  { $match: { deleted: false } },
  {
    $lookup: {
      from: 'item',
      localField: 'name',
      foreignField: 'category_name',
      as: 'items'
    }
  }
])
```

```javascript
const res = await this.ctx.model.Client.aggregate().lookup({
  from: 'products',
  localField: '_id',
  foreignField: 'client_id',
  as: 'products'
})
```

## 2、`virtual populate`虚拟 populate

```javascript
const itemSchema = new Schema(
  {
    category_name: { type: String, required: true }
  },
  { toJSON: { virtuals: true } },
  { timestamps: true }
)

itemSchema.virtual('category', {
  ref: 'Category',
  localField: 'category_name',
  foreignField: 'name',
  justOne: true
  // options: { sort: { name: -1 }, limit: 5 }
})

export default mongoose.model('Item', itemSchema, 'item')
```

```javascript
const item = await Item.findOneAndUpdate(
  { name: item_name, deleted: false },
  { $inc: { click: 1 } }
).populate({ path: 'category', select: '-content' })
```

## 3、更新后返回新数据

options new:true

````javascript
const item = await Item.findOneAndUpdate(
  { _id: id, deleted: false },
  { ...form },
  { new: true }
)
    ```
````

## 4、连接带密码

`mongodb://user:password@localhost:27017/${config.db.name}?authSource=admin`
