---
title: >
    Vim và lập trình viên phần II
description: >
    Một editor nổi tiếng cực nhẹ và đặc biệt là không cần sử dụng chuột. 
authors:
  - Nam Nguyen (TsuKpa)
createdDate: 08 July, 2023
tags:
  - VietNamese
  - Vim
  - VSCode
lastmod: 2023-07-08T05:34:51.411Z
topics:
  - blog
tweet:
format: blog
canonical_url:
seo:
  metatitle: >
    Vim và lập trình viên phần II
  metadescription: >
    Một editor nổi tiếng cực nhẹ và đặc biệt là không cần sử dụng chuột. 
publish: true
---

# Vim và lập trình viên phần II (Vscode extension)

Chào các bạn, khi đã là một lập trình viên lâu năm (:v) thì chắc ai cũng sẽ biết đến **Vim** Một editor nổi tiếng cực nhẹ và đặc biệt là không cần sử dụng chuột. Vim hỗ trợ hầu hết các plugin hỗ trợ lập trình như các **IDE** khác. **Vậy tại sao chúng ta không dùng Vim?**

![intro](https://img-9gag-fun.9cache.com/photo/axoW2BL_460s.jpg)

### Vì nó khó sử dụng :smile:
Thực sự mà nói thì việc config plugin cũng mất kha khá thời gian vì phải google rồi copy từng dòng vào file .vimrc sau đó test xem nó chạy không,... Nhưng một khi đã có file config của riêng mình rồi thì việc cài đặt khá là nhanh, nhất là khi remote lên server và chỉnh sửa gì đó.

Ngoài ra **Vim** còn bonus cho chúng ta khả năng code tốc độ bàn thờ bởi chỉ sử dụng bàn phím (có thể youtube xem các lão làng coder múa phím)

Ở bài này mình xin giới thiệu với các bạn một số tính năng tiện lợi của plugin **Vim** được minh họa bằng hình ảnh của mình trên **VSCode**. Lý do là vì VSCode khá dễ sử dụng chúng ta chỉ cần gõ từ `vim` trong phần Extensions và cài đặt nó mà thôi. Khi chán thì có thể disable nó để sử dụng kiểu soạn thảo thông thường 👍

Okay chúng ta cùng xem một vài tính năng thú vị nào:

### 1. Vim – Surround
Chế độ này cho phép chúng ta chỉnh sửa các dấu ngoặc đơn, dấu ngoặc kép, dấu ngoặc vuông, hay thậm chí là tag.

#### 1.1. Delete surround

Cú pháp như sau:

```ds <kí tự cần xóa> ```: Xóa kí tự xung quanh

 Ví dụ:

     #input: “hello”

     Thao tác: ds”

     #output: hello

![ds](https://1.bp.blogspot.com/-Sfdg1nXkqXo/XhtIrpfdznI/AAAAAAAACC8/Xyfi6ERNawgF5NhM3XD0naAygSaQfx7UgCEwYBhgL/s640/ds.gif)

#### 1.2 Change surround

Cú pháp như sau:

```cs <kí tự hiện tại> <kí tự mong muốn>```: Thay đổi kí tự xung quanh

 Ví dụ:

     #input: “hello”

     Thao tác: cs”’

     #output: ‘hello’

![cs](https://1.bp.blogspot.com/-4A9jr6jnSU0/XhtIrkdDfPI/AAAAAAAACC4/lpBkGcKFGesHOrLiIxsjnNan0ZS9CIuqQCEwYBhgL/s640/cs.gif)

#### 1.3. Add surround

Cú pháp như sau:

```S <kí tự mong muốn>```: Surround vùng đã chọn trong chế độ Visual mode.

 Ví dụ:

     #input: chọn 1 từ với lệnh viw. hello

     Thao tác: S”

     #output: “hello”

![S](https://1.bp.blogspot.com/-Xyy900CgthE/XhtIsblhxXI/AAAAAAAACDA/kPh5DBsq9D4We79_u78ceu3VMAVHjc5WwCEwYBhgL/s640/surround.gif)

### 2. Vim – Commentary

Comment code với Vim bằng dòng lệnh thay vì bôi đen rồi sử dụng các lệnh ```"ctrl" + "/"``` ở các IDE khác.

#### 2.1. ```gcc``` toggle comment ở dòng hiện tại. Và ```gc2j``` để toggle dòng hiện tại và 2 dòng kế tiếp.

![gcc](https://1.bp.blogspot.com/-4LNx-HgZlRk/XhtIrbQQMmI/AAAAAAAACDI/vq-AuPrEAmMg_L_RJ1woRGQ8rBioIvYFwCEwYBhgL/s640/gc.gif)

#### 2.2. ```gC``` để toggle block comment. Ví dụ ```gCi{``` để comment mọi thứ bên trong {}

![gC](https://1.bp.blogspot.com/-CmPZTVPlePs/XhtIsSgU3II/AAAAAAAACDI/wTT4dEbFIzYnV2Aq9aXoLj2_iY88Tc85ACEwYBhgL/s640/gci.gif)

### 3. Multi - Cursor Mode

Chế độ này giúp chúng ta có thể chỉnh sửa từ ở nhiều nơi khác nhau.

Để kích hoạt chế độ này:

Trên OS - X : ```cmd - d```. Trên Windows: ```ctrl - d```

```gb```, một shortcut mới được VScode thêm vào tương tự như 2 lệnh phía trên. Sẽ thêm một con trỏ vào từ khớp với từ đang trỏ hiện tại. Để thoát sử dụng phím **Escape** 2 lần.

### 4. VSCodeVim tricks!

Một số trick trong VSCodeVim mà mình thấy dễ sử dụng:

#### 4.1. ```gd```: Nhảy tới nơi khai báo

![gd](https://1.bp.blogspot.com/-Kx6fK-UmjRo/XhtMNcdkJ0I/AAAAAAAACDQ/cakgH1552kAwV0AnwQiQgOBhWv3ZNEFKgCLcBGAsYHQ/s640/gd.gif)

#### 4.2. ```gb```: Được nói đến ở phần MultiCursor

![gb](https://1.bp.blogspot.com/-trtgHotm1dE/XhtItKUwvGI/AAAAAAAACDI/BbC4y-6wF6MjkdhS_37PN9d419ALcjzfgCEwYBhgL/s640/gb.gif)

#### 4.3. ```gh```: Hover nơi con trỏ đang đứng thay vì sử dụng chuột. Dùng để xem mô tả hàm, biến, lỗi,…

![gh](https://1.bp.blogspot.com/-eP_vkc6U_Ww/XhtItMm1vFI/AAAAAAAACDE/uKL2IzXXt8UeE6spSIwQ1hi87Q_4sExrgCEwYBhgL/s640/gh.gif)

Ngoài ra còn nhiều tính năng đang chờ bạn khám phá đó. Link extension [tại đây](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim) nhé.

Đọc lại phần I tại đây nhé

[https://tsukpa.netlify.app/blog/vim-for-developer-part-1](https://tsukpa.netlify.app/blog/vim-for-developer-part-1)