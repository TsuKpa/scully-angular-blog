---
title: >
    How to center a div 😄
description: >
    When you want to center a div, this is the solution
authors:
  - Nam Nguyen (TsuKpa)
createdDate: 14 August, 2023
tags:
  - CSS
lastmod: 2023-8-14T05:34:51.411Z
topics:
  - css
tweet:
format: blog
canonical_url:
seo:
  metatitle: >
    How to center a div 😄
  metadescription: >
    When you want to center a div, this is the solution
publish: true
---

# How to center a div 😄

![background](https://images.headlines.pw/topnews-2017/imgs/71/49/7149225247bfd8cb6d0b555bb9d160ab188cf605_640_397.jpg)

#### There are many way to center a div

## 1. Using flexbox

```css
 .parent {
    display: flex;
    justify-content: center;
    align-items: center;
 }
 ```

## 2. Using grid

```css
.parent {
    display: grid;
    place-content: center;
}
```

## 3. Using Position

```css
.parent {
    position: relative;
}

.child {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

## 4. Using Flex & Margin

```css
.parent {
    display: flex;

}

.child {
    margin: auto;
}
```

## 5. Using Grid & Margin

```css
.parent {
    display: grid;
}

.child {
    margin: auto;
}
```

I think the best way to center a div is __#1__ and the easiest is __#2__, hope you like that 😄.
