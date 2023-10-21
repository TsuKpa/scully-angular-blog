---
title: >
    Getting Started with Strapi: A Headless CMS Revolution
description: >
    When you want create a simple RESTful API server, this is the good choice for that solution.
authors:
  - Nam Nguyen (TsuKpa)
photo: https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Capture_d_ecran_2020_10_07_a_13_27_46_3bf18c57bf.png
createdDate: 21 October, 2023
tags:
  - Strapi
  - Server
  - CMS
lastmod: 2023-10-21T05:34:51.411Z
topics:
  - blog
tweet:
format: blog
canonical_url:
seo:
  metatitle: >
    Getting Started with Strapi: A Headless CMS Revolution
  metadescription: >
    When you want create a simple RESTful API server, this is the good choice for that solution.
publish: true
---

# Getting Started with Strapi: A Headless CMS Revolution

![https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Capture_d_ecran_2020_10_07_a_13_27_46_3bf18c57bf.png](https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Capture_d_ecran_2020_10_07_a_13_27_46_3bf18c57bf.png)

**Strapi** is a powerful open-source headless **Content Management System (CMS)** that enables developers to build dynamic, content-driven websites and applications. With its user-friendly interface and extensive customization options, **Strapi** has gained popularity among developers looking for a flexible and scalable **CMS** solution. In this guide, we'll walk you through the basics of **Strapi** and how to get started with it.

## 1. What is Strapi?

**Strapi** is a ***headless CMS***, meaning it separates the front-end from the back-end, allowing for greater flexibility and customization. It provides a robust API for managing content, which can be used with any front-end framework or platform. **Strapi** supports various content types, including *articles, images, videos, and more*, making it suitable for a wide range of projects.

## 2. Benefits of Using Strapi

- **Flexibility**: **Strapi** allows you to define your own content structure, making it adaptable to a wide range of projects.
- **Customization**: Easily extend **Strapi's** functionality with plugins or create your own custom **API** endpoints.
- **User-Friendly Interface**: The admin panel provides an intuitive interface for managing content, making it accessible for content editors and developers alike.
- **Security**: **Strapi** comes with *built-in authentication* and **role-based access control (RBAC)** to secure your content and APIs.
- **Scalability**: With its modular architecture, Strapi can handle projects of various sizes, from small blogs to enterprise-level applications.

## 3. Main features

- **Content Types Builder**: Build the most flexible publishing experience for your content managers, by giving them the freedom to create any page on the go with fields, components and Dynamic Zones.
- **Media Library**: Upload your *images*, *videos*, *audio* or *documents* to the media library. Easily find the right asset, edit and reuse it.
- **Internationalization**: **The Internationalization (i18n)** plugin allows **Strapi** users to create, manage and distribute localized content in different languages, called "locales
- **Role Based Access Control**: Create an unlimited number of custom roles and permissions for admin and end users.
- **GraphQL** or **REST**: Consume the API using **REST** or **GraphQL**
- **Database integrated**: You can use many database like **Sqlite**, **MySQL**, **PostgreSQL** and **MongoDB**.

You can unlock additional features such as **SSO**, **Audit Logs**, Review Workflows in ***Strapi Cloud*** or ***Strapi Enterprise.***

## 4. Getting Started with Strapi

### 4.1. Installation

Install Strapi with this *Quickstart* command to create a **Strapi** project instantly:

(Use yarn to install the Strapi project (recommended). Install yarn with these docs.)

```bash
yarn create strapi-app my-project --quickstart
```

or (Use **npm/npx** to install the Strapi project.)

```bash
npx create-strapi-app my-project --quickstart
```

This command generates a brand new project with the default features (*authentication, permissions, content management, content type builder & file upload*). The *Quickstart* command installs **Strapi** using a **SQLite** database which is used for prototyping in development.

### 4.2. Design Content-Type and Content Data

After this you open administrator panel at [http://localhost:1337/admin](http://localhost:1337/admin). Then fill the form register new account and login with that account. You will create the content in the **Content Manager** and design the content type in the **Content-Type Builder**

![https://paper-attachments.dropbox.com/s_1D52D011EBFD4E890CAAF74FC362E0CF2B5C3A427A05A0874DA463C09FEEDB3D_1652044366743_image.png](https://paper-attachments.dropbox.com/s_1D52D011EBFD4E890CAAF74FC362E0CF2B5C3A427A05A0874DA463C09FEEDB3D_1652044366743_image.png)

### 4.3. Integrating with Front-End

With your content types defined, you can now fetch data from **Strapi** using its API. You can use popular front-end frameworks like **React**, **Vue.js**, or **Angular** to build your user interface and consume the *Strapi API*. You want a low-code tool for your front-end? I suggest ***Tooljet*** is a good choice.

```js
// Example fetch request in React
fetch('http://localhost:1337/products')
  .then(response => response.json())
  .then(data => console.log(data));
```

## 5. Conclusion

**Strapi** empowers developers to create dynamic, content-driven applications with ease. Its flexibility, customization options, and user-friendly interface make it a valuable tool in the developer's toolkit. Whether you're building a personal blog or a complex enterprise application, **Strapi** provides the foundation you need for success.

Ready to get started with **Strapi**? Install it today and embark on your journey to building powerful, content-driven applications.

### Official Documents

[https://docs.strapi.io/dev-docs/api/rest](https://docs.strapi.io/dev-docs/api/rest)

***•⩊• Happy coding! •⩊•***
