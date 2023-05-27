---
title: >
    Deploy Laravel project to Amazon EC2
description: >
    Hello guys, today i'll show you how to deploy Laravel project to Amazon EC2
authors:
  - Nam Nguyen (TsuKpa)
createdDate: 27 May, 2023
tags:
  - Laravel
  - EC2
  - AWS
lastmod: 2023-05-21T05:34:51.411Z
topics:
  - tutorials
tweet:
format: blog
canonical_url:
photo: https://gbengaoni.com/images/1__cHw6zbAivDFI__aZkeN1mjg.png
seo:
  metatitle: >
    Deploy Laravel project to Amazon EC2
  metadescription: >
    Hello guys, today i'll show you how to deploy Laravel project to Amazon EC2
publish: true
---




![DEPLOY LARAVEL PROJECT TO AMAZON EC2](https://gbengaoni.com/images/1__cHw6zbAivDFI__aZkeN1mjg.png "DEPLOY LARAVEL PROJECT TO AMAZON EC2")

# Deploy Laravel project to Amazon EC2

Hello guys, today i'll show you how to deploy Laravel project to Amazon EC2

## 1. Prerequisite

- EC2 instance (installed Ubuntu, Nginx)
- VPC setup for EC2 instance can access ssh
- RDS for mysql (check to the option "Connect to exist EC2 instance")

________________

## 2. Install environment for Laravel

### 2.1. Connect to EC2 instance via __ssh__

```bash
ssh -i "<examplekey.pem>" <username>@<EC2 Address>
```

### 2.2. Copy source code to EC2 instance
  
- Clone from github repository

  ``` bash
  git clone <link github repository>
  ```
  
- (Optional) Copy source from local using __scp__

  - Install __zip, unzip__ from local machine

    ``` bash
    sudo apt install zip
    ```

  - Compress source files using zip command:

    ``` bash
    zip -r <zipfilename.zip> <folderpath>
    ```

  - Copy source from local to EC2 instance using __scp__ command:

    ``` bash
    scp -i "<examplekey.pem>" <zipfilename.zip> <username>@<EC2 Address>:<pathtosave>
    ```

  - Extract source files using __unzip__ command:

    ``` bash
    unzip <zipfilename.zip>
    ```
  
### 2.3. Install PHP dependencies based on your project. For example

``` bash
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update
sudo apt-get install -y php7.3
```

### 2.4. Install _mysql_ client to connect RDS instance

```bash
sudo apt install mysql-client-core-8.0
```

- Connect to RDS instance from EC2 via __mysql__ client by following command and type your password

  ```bash
  mysql -h <RDS Address Instance> -P <port | 3306> -u <masteruser> -p
  ```

  - Create your database name based on the project

  ```sql
  CREATE DATABASE <databasename>;
  EXIT;
  ```

### 2.5. Config your environment file to match your RDS server

```docker
...
APP_URL=<URL of your EC2 instance>
APP_DEBUG=false

DB_CONNECTION=mysql
DB_HOST=<RDS Address link>
DB_PORT=3306
DB_DATABASE=<databasename>
DB_USERNAME=<master username>
DB_PASSWORD=<password>
...
```

### 2.6. Install __Composer__

``` bash
sudo apt-get install -y composer
```

### 2.7. Go to project directory and install dependencies

``` bash
composer update 
composer install
```

### 2.8. Generate application key

``` bash
php artisan key:generate
```

### 2.9. Copy directory to _/var/www/_

``` bash
cp <foldername> /var/www/
```

### 2.10. Update permissions

``` bash
sudo chown -R www-data:www-data /var/www/<foldername>
sudo chmod -R 755 <foldername>
```

________________

## 3. Setting up Nginx

### 3.1. Configure Nginx to serve the content

``` bash
sudo vi /etc/nginx/sites-available/<foldername>
```

- Then you can enter the following setting:

```nginx
server {
    listen 80;
    server_name <server_domain_or_IP>;
    root /var/www/<foldername>/public;

    // Focus this log if you see error
    access_log /var/log/nginx/laravel-access.log;
    error_log /var/log/nginx/laravel-error.log;


    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options "nosniff";

    index index.html index.htm index.php;

    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    error_page 404 /index.php;

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}
```

### 3.2. To activate the new virtual host configuration file, create a symbolic link to _foldername_ in sites-enabled

``` bash
sudo ln -s /etc/nginx/sites-available/<foldername> /etc/nginx/sites-enabled/
```

### 3.3. To confirm that the configuration doesn’t contain any syntax errors, you can use

``` bash
sudo nginx -t
```

### 3.4. To apply the changes, reload Nginx with

``` bash
sudo systemctl reload nginx
```

________________

## 4. (Optional) Fix some error when configuring

### 4.1. By default, EC2 ubuntu not enabled php-fpm, run following command to enable

``` bash
sudo a2enmod proxy_fcgi setenvif
sudo service nginx restart
```

Check that package PHP-FPM is exist

``` bash
sudo vi /etc/php/<version>/fpm/pool.d/www.conf
```

Then you find this line and check that path is correct (file .sock must exists in the folder _/var/run/php/_)

``` bash
listen = /var/run/php/php<version>-fpm.sock
```

Restart the service

``` bash
sudo service php<version>-fpm restart
```

________________

# Setting EC2, RDS

## 1. Create EC2

- AMI: Ubuntu
- Instance type: t2.micro (free tier)

![Create EC2](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5RX0HpPeakkLf3MplYv8FAq42xYueQIhYeIrk8pLL_ViJyLf-4Pq6__7ew6dzRBvaDhn-8aq-Y9in7aoBaXpZQSbjxve75bhchSHaHQzeoepWEmhYqQigRqKuG_dtafoJV-HOeaf4XcUuQ-ZPt8b-aTmgDgOpi4Pq6XCSvxWnIzQH22BcE4ZyURSz_g/s16000/ec21.PNG "Create EC2")

- Select existing security group or you can change later

![Create EC2](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjo4ORXXG8UsLvbrMNTVv9IYoXnlTY116Wj40G36ew_iQ9oQX3Vo-cEYffkzOBXO8_5E9jPmszgx-fdlwCcO6i9IYVy8QHdv0lONWwdNMCvtuNUfUu9-FrmEQ_zv4I3x6SMO0E7V8zUDohdcGIwKaVuxB7vHmIwPhWYIuFRAis9rkWH1AgE4pOQiVV6PQ/s16000/ec22.PNG "Create EC2")

## 2. Create Security Group

We allow SSH, ICMP and TCP from anywhere and in Outbound we allow anything
  
![Create Security Group](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzbsPELATr7bUKB6xhsy47k4DzYo7IbPprNVgtYzJX-lN-WsFGaC6aNNzoARMoAMrgtcd5HODQ5LUccO6DdI_BTbRfvNNuGU3DcPdblhDIP0N5BOTw7u-ewpDcqXRdJo_jd3raioSGDHdY-iWaNnzke70HiCFcqm6ShinnisHTz-fTmadxJXAh6xc4BA/s16000/sg.PNG "Create Security Group")

## 3. Create Route table

Route the traffic to the internet gateway (igw)

![Create Route table](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDUqWnSekDwV1PwS_kY4vTF0j3Yyo9dAJBA3Y7mYSSjESrkBheN3bP4KRKFRX5LmNSk4f1WjRaOx0n1r6ZoSTN1zAUkZm9RtlhYSYaHqdK5pd9llEMyDz92j8wpcbDcEaCGnt73pUOrVRpMlnQEu-DIO5q22bE0tZctj6pOKwZq0n50ZorLBiQZnxjGg/s16000/route-table.PNG "Create Route table")

## 4. Create RDS

Create database for our application

![Route table](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi0pljkRSLZ-LP4ZsSs5moMItjqkFOHNJ-A4DpUm2jKGgMm1Pu2v9qwH0qTf7yTzgMplaa1oTyVAHA9mgceAsMIxHqyOdhZiUlVAqUu10Xgf3nY6atKCvLAaA4jaS_6zH1SZ1HKpFlF8hdOAexB4wUdF0TxIe7APbMqwj4aO1ddcT1ppySNeOgzJLkrcQ/s16000/rds1.PNG "Route table")

Choose your DB instance type

![Select RDS engine type](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg_JTowmYm8ukJJbIbPthUrervncRaK-IW3-GShvzI9fWEKoFa__DIYPMSzd_GrtIkCfNVWE6_6clQ9Kg6sdhc9xhoHvi1KBi-6Q-_xoPInGSRT3u4fGgAifFGhbpU020pXx7p3dxkTAuNJq-HcbH4M-acnxcw-d2wRjnSLMB-kW7NlJy8Yb9_Blud4xA/s16000/rds2.PNG "Select RDS engine type")

Check the option connection to the EC2 instance

![Check connection](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisOHbZ2KQvKJgrdixV6wXr4lBJfj7z7Co22RBKtKEMoY66edloBMNVG_bzCbwbGIqYi6PSGrpbc8YjFTc0JRMAHr5YjE1DBGzS3vf6afmh_WXPr9ZATNWTcGuNlqAPrl-ZUiQ2d94fLz-niyfErHRrYESWgmrXa31JSSVX6_B0EWJvS3FWG0QQzzpDDQ/s16000/rds3.PNG "Check connection")

#### After all you can access your application by enter your public IP EC2 address in the browser. Enjoy it 😉