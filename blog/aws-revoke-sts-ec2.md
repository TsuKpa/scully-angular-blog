---
title: >
    How to Revoke STS Credentials for Leaked EC2 Instances
description: >
    This section will delve into the critical steps to take when an EC2 instance is compromised and its STS credentials are at risk. How to Revoke STS Credentials for Leaked EC2 Instances.
authors:
  - Nam Nguyen (TsuKpa)
createdDate: 03 Aug, 2024
lastmod: 2024-08-03T15:05:08.421Z
photo: https://tsukpa-docs.s3.ap-southeast-1.amazonaws.com/blog/images/saa.png
tags:
  - AWS
  - STS
  - EC2
topics:
  - blog
tweet:
format: blog
canonical_url:
seo:
  metatitle: >
    How to Revoke STS Credentials for Leaked EC2 Instances
  metadescription: >
    We'll cover methods to identify compromised instances, extract potential STS credentials, and most importantly, revoke those credentials to mitigate further damage.
publish: true
---

# How to Revoke STS Credentials for Leaked EC2 Instances

![https://tsukpa-docs.s3.ap-southeast-1.amazonaws.com/blog/images/aws_sts_ec2.png](https://tsukpa-docs.s3.ap-southeast-1.amazonaws.com/blog/images/aws_sts_ec2.png)

This section will delve into the critical steps to take when an EC2 instance is compromised and its STS credentials are at risk. I'll cover methods to identify compromised instances, extract potential STS credentials, and most importantly, revoke those credentials to mitigate further damage.

## Part 1: Understanding STS

### What is STS?

![https://www.bitslovers.com/wp-content/uploads/sites/5/2022/10/20221026_054349_0000.png](https://www.bitslovers.com/wp-content/uploads/sites/5/2022/10/20221026_054349_0000.png)

**Security Token Service (STS)** is a component of AWS that provides **temporary** security credentials. These credentials can be used to access AWS resources without exposing **long-term** credentials. STS is crucial for enhancing security and flexibility in managing access to your AWS environment.

Unlike IAM, which manages long-term credentials and permissions, STS focuses on generating **short-lived** credentials for specific use cases.

### Use Cases for STS

STS offers a wide range of applications within the AWS ecosystem:

* Similar to access keys
* Generates temporary credentials **(sts:AssumeRole)**
* Limited access
* Used to access AWS resources
* Requested by an identity *(AWS or External)*

## Part 2: What happens if an EC2 instance is taken control by someone else?

The best practice for running AWS Resource is using [IAM Roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html). This function attaches an IAM Role for a resource and provides them permission to access other AWS resources instead of using [IAM Credentials](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html)

In this blog, I will show you how to get credentials from an EC2 instance and use them with the [cli](https://aws.amazon.com/vi/cli/).

### How to get credentials from EC2 instance

In this example, for simple i created a EC2 instance in a public subnet and allow anything in the security group.

![https://tsukpa-docs.s3.ap-southeast-1.amazonaws.com/blog/images/aws-sts-ec2-sg.png](https://tsukpa-docs.s3.ap-southeast-1.amazonaws.com/blog/images/aws-sts-ec2-sg.png)

`Please specified needed policy with limited permissions in real world.`

And from the session console i use [curl](https://curl.se/) to get information about [EC2 metadata](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instancedata-data-retrieval.html). After created an EC2, i access to EC2 by that local IP address `169.254.169.254`

```bash
# Get role name from metadata
curl http://169.254.169.254/latest/meta-data/iam/security-credentials

# Get the credentials with role name
curl http://169.254.169.254/latest/meta-data/iam/security-credentials/REPLACE_ME
```

The credentials is something like this

```json
{
  "Code" : "Success",
  "LastUpdated" : "2024-08-03T06:06:45Z",
  "Type" : "AWS-HMAC",
  "AccessKeyId" : "ASIAWDEGI6ESSSXVEBFW",
  "SecretAccessKey" : "KwN5anzRvzoxtqzW6k6poMSc0T8zVIk1lnAmr",
  "Token" : "IQoJb3JpZ2luX2VjELf//////////Wgh/dD4mbF4wRNTeW/qWkOWil0FuI6t5pcnBy/kUO7eOCQ==",
  "Expiration" : "2024-08-03T12:40:56Z"
}
```

After get credentials, you can passing it into the local credentials of the AWS CLI using command `aws configure`. Then you can use [Terraform](https://www.terraform.io/) to create a maximum instance type for mining bitcoin 👿.

### Solutions

`Remember, you can not manually invalidate temporary credentials`. They only expire when they expire. But because changing the permissions policy affects everyone, you can add a condition element to it denying anyone access to AWS who assumed the role before a certain date and time.

And then you can go to the IAM Role then choose the last tab `Revoke sessions` and revoke them.

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Deny",
            "Action": [
                "*"
            ],
            "Resource": [
                "*"
            ],
            "Condition": {
                "DateLessThan": {
                    "aws:TokenIssueTime": "[policy creation time]"
                }
            }
        }
    ]
}
```

![https://tsukpa-docs.s3.ap-southeast-1.amazonaws.com/blog/images/aws-sts-ec2-revoke.png](https://tsukpa-docs.s3.ap-southeast-1.amazonaws.com/blog/images/aws-sts-ec2-revoke.png)

After that, all temporary credentials will be invalid, you can go back to EC2, and now you can not access to the EC2 instance. For resolve this, we can stop and start ec2 instance again to get the new temporary credentials.

