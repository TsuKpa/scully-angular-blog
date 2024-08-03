---
title: >
    Mình đã thi chứng chỉ AWS Solution Architect Associate (SAA-C03) như thế nào
description: >
    Bài viết này sẽ cung cấp một số mẹo và chiến lược hữu ích để chuẩn bị và thi chứng chỉ AWS Solution Architect Associate (SAA-C03)
authors:
  - Nam Nguyen (TsuKpa)
createdDate: 30 Mar, 2024
lastmod: 2024-03-30T15:05:08.421Z
photo: https://tsukpa-docs.s3.ap-southeast-1.amazonaws.com/blog/images/saa.png
tags:
  - VietNamese
  - AWS
  - SAA-C03
topics:
  - blog
tweet:
format: blog
canonical_url:
seo:
  metatitle: >
    Mình đã thi chứng chỉ AWS Solution Architect Associate (SAA-C03) như thế nào
  metadescription: >
    Bài viết này sẽ cung cấp một số mẹo và chiến lược hữu ích để chuẩn bị và thi chứng chỉ AWS Solution Architect Associate (SAA-C03)
publish: true
---

# Mình đã thi chứng chỉ AWS Solution Architect Associate (SAA-C03) như thế nào

![https://tsukpa-docs.s3.ap-southeast-1.amazonaws.com/blog/images/saa.png](https://tsukpa-docs.s3.ap-southeast-1.amazonaws.com/blog/images/saa.png)

Xin chào mọi người, hôm nay mình sẽ chia sẽ với mọi người về quá trình chuẩn bị và thi chứng chỉ **AWS Solution Architect Associate (SAA-C03)**, giúp mọi người tự tin hơn trong con đường chinh phục chứng chỉ này.

## 1. Chứng chỉ AWS là gì?

### 1.1. AWS là gì?

**AWS** là viết tắt của **"Amazon Web Services"**, là một dịch vụ điện toán đám mây được cung cấp bởi [Amazon](https://www.amazon.com/).

**AWS** cung cấp các dịch vụ đám mây đa dạng bao gồm máy chủ ảo *(EC2)*, lưu trữ *(S3, EFS,...)*, cơ sở dữ liệu *(RDS, DynamoDB,...)*, tích hợp và các dịch vụ khác, cho phép các cá nhân và doanh nghiệp triển khai các ứng dụng và dịch vụ trên môi trường cloud một cách linh hoạt và tiết kiệm chi phí.

### 1.2. Chứng chỉ AWS là gì?

![https://tsukpa-docs.s3.ap-southeast-1.amazonaws.com/blog/images/aws-certificates.png](https://tsukpa-docs.s3.ap-southeast-1.amazonaws.com/blog/images/aws-certificates.png)

AWS cung cấp một loạt các **chứng chỉ** chuyên sâu để kiểm chứng và chứng minh kỹ năng của các **chuyên gia công nghệ thông tin** trong việc sử dụng dịch vụ AWS. Các **chứng chỉ AWS** có thể được chia thành ba cấp độ chính:

1. **Cấp độ Cơ bản (Foundational Level)**: Bao gồm chứng chỉ **AWS Certified Cloud Practitioner**, giúp bạn có một cái nhìn tổng quan về các dịch vụ trên AWS.

2. **Cấp độ Cộng tác (Associate Level)**: Bao gồm các chứng chỉ như **AWS Certified Solutions Architect – Associate**, **AWS Certified Developer – Associate**, và **AWS Certified SysOps Administrator – Associate**, chứng minh kỹ năng trong việc triển khai, phát triển và quản trị các ứng dụng trên AWS.

3. **Cấp độ Chuyên gia (Professional Level)**: Bao gồm các chứng chỉ như **AWS Certified Solutions Architect – Professional** và **AWS Certified DevOps Engineer – Professional**, dành cho những **chuyên gia** có kinh nghiệm trong việc thiết kế và quản trị cơ sở hạ tầng trên AWS.

Ngoài ra, **AWS** cũng cung cấp các chứng chỉ đặc biệt khác như **AWS Certified Security – Specialty** và **AWS Certified Machine Learning – Specialty**, tập trung vào các lĩnh vực chuyên sâu cụ thể riêng.

## 2. Quá trình ôn luyện

- Khi quay trở lại làm việc sau khoảng thời gian [phượt 2 năm](/blog/share-about-military-service), bản thân mình nhận thấy rằng việc dùng thời gian để nâng cao chất lượng code cũng như kinh nghiệm làm việc là rất khó cho bản thân mình để đuổi kịp bạn bè cùng trang lứa, nên mình sẽ đi một hướng khác đó là học thêm về cloud.

- Bắt đầu từ con số 0, mình tự nghiên cứu về AWS qua [Udemy](https://www.udemy.com/), lúc đầu thì cũng có hơi ngộp về số lượng dịch vụ trên AWS (2024 - hơn 200 services). Nhưng sử dụng nhiều thì cũng cỡ hơn 10 services một xíu ^^

- Chiến thuật của mình với cả 2 chứng chỉ (Practitioner và SAA) đó là sẽ học lý thuyết (Đồng thời hands-on luôn để nhớ lâu hơn) và sau đó mua hoặc kiếm đề để giải

## 3. Một số mẹo

### 3.1. Những thứ cần chú ý

- **Networking**: VPC, Vpc Endpoint, NAT, Security Group, NACL, Route Table,... Những thứ này khá quan trọng nếu như bạn muốn thiết kế hệ thống cũng như security. Đa phần dịch vụ không hoạt động theo mong muốn đều do cấu hình network chưa đúng.

  - Để cho phép kết nối internet từ private subnet ra internet thì chúng ta sử dụng NAT gateway/instance ở public subnet

  - Resource ở private subnet chỉ muốn dùng dịch vụ AWS và không cần kết nối internet thì sẽ sử dụng VPC Endpoint (Gateway Endpoint(S3, DynamoDB) và Interface Endpoint)

  - Phân biệt Security Group và NACL

- **S3**: Bạn cần biết tất cả các [Storage Class](https://aws.amazon.com/s3/storage-classes/) để giải quyết vấn đề tiết kiệm chi phí lưu trữ, bucket policy để cấu hình,...

  Ví dụ về 2 URL hợp lệ
  
  - s3-website dash (-) Region ‐ http://bucket-name.s3-website.Region.amazonaws.com
  
  - s3-website dot (.) Region ‐ http://bucket-name.s3-website-Region.amazonaws.com

- **IAM**: Những vấn đề liên quan tới phân quyền truy cập trên AWS đều liên quan tới dịch vụ này.

  - Để cho phép một dịch vụ truy cập đến dịch vụ khác thì chúng ta sẽ sử dụng `IAM Role`. Ví dụ một **executionRole** trong ECS cần download object trong **S3** thì chúng ta có thể thêm **policy** như sau:

  ```json
    {
      "Version": "2012-10-17",
      "Statement": [
          {
              "Effect": "Allow",
              "Action": [
                  "s3:GetObject"
              ],
              "Resource": "arn:aws:s3:::tên_bucket/*",
              "Principal": {
                  "Service": "ecs-tasks.amazonaws.com"
              }
          }
      ]
    }
  ```
  
  - Chỉ root account mới có thể đóng tài khoản, kích hoạt MFA S3 bucket delete,...

- **Load Balancing**: Có bao nhiêu loại LB và ý nghĩa của chúng.

- **Storage**: Các dịch vụ lưu trữ có đặc điểm như thế nào:

  - Dịch vụ nào hỗ trợ High Availability và Replica

  - Dịch vụ cho relational database (RDS, Aurora); NoSQL database (DocumentDB, DynamoDB); Data Warehouse (Redshift); Object Storage (S3), File System Storage (EFS), EC2 attachs block storage (EBS),...

- **EC2**: Đặc điểm của các loại EC2 (On-demand, RI, Spot, cluster,...), AMI, EBS, ASG...

- **Lambda**: Function serverless, chỉ chạy tối đa 15p

- **Cloudwatch**: Dùng để xem logs, tất cả logs trên AWS sẽ được gom về đây.

Ngoài ra thì còn khá nhiều thứ mà mình chưa liệt kê ra hết, mình nghĩ những nội dung phía trên là quan trọng, giúp cho việc hands-on được dễ dàng hơn.

### 3.2. Những dịch vụ ít dùng (Nên biết chức năng)

![https://tsukpa-docs.s3.ap-southeast-1.amazonaws.com/blog/images/AWS+Machine+Learning+-+Summary.png](https://tsukpa-docs.s3.ap-southeast-1.amazonaws.com/blog/images/AWS+Machine+Learning+-+Summary.png)

### 3.3. Những từ khoá hay gặp

- **Serverless**: Lambda, Fargate, API Gateway
- **Container Service, Microservice**: ECS, EKS
- **Real-time data**: Kinesis Data Streams
- **Decoupling Architect**: SQS, ECS
- **Notification**: SNS
- **Reduce latency**: Cloudfront
- **UDP, non-http**: Global Accelerator
- **Upload large file**: S3 Multipart upload
- **Fast transfer from other region**: S3TA
- **Connect multiple VPC, on-premises**: Transit Gateway
- **Establish fast connection from on-premises to AWS**: Direct Connect (Giá cao hơn, nhanh hơn nhưng không mã hoá, SitetoSite VPN rẻ hơn, chậm hơn nhưng có mã hoá)
- **Domain Management, routing, health check**: Route53
- **Connect 2 VPC together**: VPC peering
- **Query S3**: Athena
- **SQL injection, XSS, Restrict IP,...**: WAF
- **D-DOS**: AWS Shield, Shield Advanced
- **Migration data**: DMS
- **Redis, memcache**: Elastic Cache
- **Temporary storage**: Instance Store
- Sử dụng Secret Manager để lưu credentials của database hoặc API Key
- Sử dụng SSM Parameter Store để lưu biến môi trường
- Throughput Optimized HDD và Cold HDD volumes không thể sử dụng làm boot volumn EC2

## 4. Quá trình đi thi

### 4.1. Đăng ký thi trên PersonVue

- Đăng ký thi theo đường dẫn: [https://www.aws.training/certification](https://www.aws.training/certification) sau đó đăng nhập, bạn sẽ được điều hướng tới domain `certmetrics.com`. Ở mục này thì bạn chọn `Exam Registration` -> `Schedule an Exam` -> Các bạn chọn chứng chỉ cần thi.

- Tiếp theo là chọn cách thi, thời gian, địa điểm, lệ phí và đọc quy chế thi của `PearsonVue`. Sau khi hoàn tất thì sẽ có mail thông báo thông tin.

  - Về cách thi thì mình chọn thi tại **test center**
  
  - Về thời gian thì mình thi buổi chiều cho thoải mái. Đề thi thường sẽ có 120p và thêm 30p nếu ngôn ngữ chính không phải là tiếng Anh.
  
  - Về lệ phí thi thì tổng cộng 2 chứng chỉ mình tốn 175$ (Do lần đầu mình thi **Practitioner** giá 100$ nên **SAA** chỉ tốn 75$). Sau mỗi lần thi bạn sẽ có nhiều benefit trong đó có coupon giảm 50% phí thi chứng chỉ tiếp theo và thời hạn bằng với thời gian của chứng chỉ.

### 4.2. Ra trận

- Mình đăng ký vào khoảng thời gian chiều từ 13h45, sau khi gửi xe rồi vào chờ thì sẽ có một chị xinh gái ra hướng dẫn mình vào phòng làm "thủ tục" :D.

- Thủ tục thì cả 2 lần đều giống nhau:

  - Bạn cần có 2 loại giấy tờ có tên của mình. Ở đây mình sử dụng CCCD và thẻ ngân hàng.

  - Điền mã thi, ký tên trên giấy và bút điện tử, chụp hình bằng camera.

  - Gửi hết đồ bỏ vào tủ, kiểm tra có "hàng nóng" ở túi quần hay ống quần không :D

- Khi thi thì bạn sẽ được ngồi trên một máy tính chạy phần mềm để thi riêng (load lâu vch), một miếng bìa cứng với bút lông để vẽ bậy gì đó, ngoài ra muốn gì thì dơ tay lên để chị xinh gái hỗ trợ.

- Khi thi xong thì ra về ký tên lần nữa. Với **Practitioner** thì bạn sẽ biết kết quả ngay trên máy tính còn **SAA** thì phải đợi mail thông báo sau.

## 5. Tổng kết

Để nâng cao trình độ của bản thân thì mình phải trang bị cho mình nhiều kỹ năng. Chứng chỉ cũng chỉ giúp mình bước đầu có cơ hội để làm việc, còn kinh nghiệm thực chiến mới là thứ quan trọng.

![https://tsukpa-docs.s3.ap-southeast-1.amazonaws.com/blog/images/certificate-saa.png](https://tsukpa-docs.s3.ap-southeast-1.amazonaws.com/blog/images/certificate-saa.png)

Hy vọng bài viết này giúp bạn có cái nhìn tổng quan hơn về AWS Certificates. Nếu có thắc mắc vui lòng comment bên dưới cho mình biết với nhé 🙆‍♂️

### Tài liệu liên quan

- Stéphane Maarek SAA Course: [link](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03)

- Giải đề theo sư phụ Ấn Độ: [link](https://www.youtube.com/watch?v=Wee_F8_k8s4&list=PLviC8AFqAj5CDH_e9k3idoBOBhVXC-WNm&index=11&ab_channel=PeaceOfCode)

Ngoài ra thì các bạn có thể lên các group để xin đề để làm, chúc các bạn may mắn.

***•⩊• 🌟 Good luck! 🌟 •⩊•***
