---
title: >
    Vim và lập trình viên phần I
description: >
    Khi bạn code quá nhanh và muốn tăng thêm tốc độ gõ phím của mình? Đây là một sự lựa chọn hợp lý để làm điều đó
authors:
  - Nam Nguyen (TsuKpa)
createdDate: 24 June, 2023
tags:
  - VietNamese
  - Vim
  - IDE
lastmod: 2023-06-23T05:34:51.411Z
topics:
  - blog
tweet:
format: blog
canonical_url:
seo:
  metatitle: >
    Vim và lập trình viên phần I
  metadescription: >
    Khi bạn code quá nhanh và muốn tăng thêm tốc độ gõ phím của mình? Đây là một sự lựa chọn hợp lý để làm điều đó
publish: true
---

# Vim và lập trình viên phần I

![background](https://img.devrant.com/devrant/rant/r_2080368_znDCZ.jpg)

## Tại sao lại là Vim?

Khi bạn code quá nhanh và muốn tăng thêm tốc độ gõ phím của mình? Đây là một sự lựa chọn hợp lý để làm điều đó. Hãy cùng hiểu Vim như một ngôn ngữ nhé. Thật ra nó là một editor khá nổi tiếng.

## Lịch sử Vim

Viết tắt của __Vi Improved__ là một bản sao, với một số tính năng bổ sung của trình soạn thảo vi của Bill Joy cho Unix. Nó được viết bởi Bram Moolenaar dựa trên mã nguồn của Stevie editor lên Amiga và phát hành lần đầu vào năm 1991.

## Ngôn ngữ Vim

### Động từ

- __d__: Delete
- __c__: Change
- __y__: Yank (copy)
- __v__: Visual Select

### Công cụ sửa đổi

- __i__: Inside
- __a__: Around
- __t__: Tìm kiếm thứ gì đó và dừng trước nó
- __f__: Tìm kiếm thứ gì đó và đứng trên nó
- __/__: Tìm kiếm một chuỗi hoặc regex

### Danh từ

- __w__: Word
- __s__: Sentence
- __p__: Paragraph
- __t__: Tag (HTML/XML)
- __b__: Block

### Một số câu lệnh minh họa để thực hiện khi sử dụng

- Xóa 2 từ (Delete 2 words): __d2w__
- Copy đoạn văn bản đang trỏ (Yank inside Paragraph): __yip__
- Chọn 2 dòng (Visual 2 jump): __v2j__

Khá là logic đúng không, giờ chúng ta tìm hiểu về cách lưu file thông dụng nhé (có lần mình mới xài Vim chỉnh sửa xong không biết cách để thoát :v đành phải tắt cả cửa sổ terminal)

![save](https://1.bp.blogspot.com/-dqGEc-c9_ms/XkgNmFn_AgI/AAAAAAAACD8/JsWwKH4bNhg-vRVkuhb3w_O451OClRVfgCLcBGAsYHQ/s1600/saveFile.png)

### Tìm kiếm

![find](https://1.bp.blogspot.com/-1TrIgjv0XNs/XkgNknqLmoI/AAAAAAAACDw/NmujYxv7h9UOI3DR18cnDOzWZ0uFulS7ACLcBGAsYHQ/s1600/find.png)

### Di chuyển xung quanh

![moving more](https://1.bp.blogspot.com/-zq1NumlIByQ/XkgNkq3-WxI/AAAAAAAACDs/Mj_XXuVFT3M4AfJHQeZJzcxrgPiCwPBiACLcBGAsYHQ/s1600/moving.png)

### Di chuyển bất kì

![moving](https://1.bp.blogspot.com/-Fs0HOtfn5zU/XkgNl1kAEAI/AAAAAAAACD4/o9QrGMEuNjEMXN7us2oEAwIbeDFW9-lzwCLcBGAsYHQ/s1600/movingMore.png)

### Di chuyển nội dòng

![move inline](https://1.bp.blogspot.com/-aARqNkWSzDU/XkgNlSawxgI/AAAAAAAACD0/zuG7TgOdeysTVZuIA3kYNTj4vIx5FKCJwCLcBGAsYHQ/s1600/movingInline.png)

### Di chuyển qua từ

![move](https://1.bp.blogspot.com/-ZwBxRSAjkTU/XkgNkn95V9I/AAAAAAAACDo/nqrdYOHTY3USXK5t5wdW9-B2w0Z5BM0AACLcBGAsYHQ/s1600/moveWord.png)

### Undo và Redo

![undo](https://1.bp.blogspot.com/-Ysovb1pbbuM/XkgNmXslupI/AAAAAAAACEA/GdoBw4UGHekYmITGudwGYbCStETfB4QlACLcBGAsYHQ/s1600/undoRedo.png)

### Copy và Paste

![yank](https://1.bp.blogspot.com/-kkDk3hCp0Hs/XkgNm6nv7SI/AAAAAAAACEE/03HQti8QRkMgB1r9UWw83FZ_kMfHllLkACLcBGAsYHQ/s1600/yank.png)

### Chế độ Visual

![visual](https://1.bp.blogspot.com/-NwPUG9gw7_Y/XkgNm0szYrI/AAAAAAAACEI/xE4hnjn31ScKbQq9HS5Tl_KPg2cPvxUdACLcBGAsYHQ/s1600/visual.png)

Khá là thú vị phải không? Ngoài ra còn nhiều tính năng khác đang chờ bạn khám phá đó. Theo dõi mình để biết thêm về vim nhé, hẹn gặp lại ở phần 2. See ya!