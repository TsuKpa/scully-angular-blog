export type WorkShop = {
    id: string;
    title: string;
    description: string;
    url: string;
    img: string;
    techStacks: string[];
    isHaveTerraform: boolean;
}

export type Certificate = {
    badge: string;
    url: string;
}

export const workshops: WorkShop[] = [
    {
        id: "001",
        title: "Deploy Static Site NextJS App to S3 using Github Action",
        description: "In this workshop, you’ll learn the basics and practice of Amazon S3, Cloudfront, using IAM OIDC STS with Github Action. Perform creating NextJs App with low latency.        ",
        url: "https://001.tsukpa.blog",
        img: "https://d9akteslg4v3w.cloudfront.net/blog/images/001-deploy-static-site-to-s3.png",
        techStacks: ["S3", "IAM", "Cloudfront", "Github Actions"],
        isHaveTerraform: true
    },
    {
        id: "002",
        title: "Leveraging Amazon Bedrock to enhance Customer Support service with AI-Powered automated email responses",
        description: "This workshop will explore how to utilize Amazon Bedrock to build intelligent agent for reply email about order status, policy,...",
        url: "https://002.tsukpa.blog",
        img: "https://d9akteslg4v3w.cloudfront.net/blog/images/002-ai-powered-email-auto-replies.png",
        techStacks: ["SES", "Amazon Bedrock", "SQS", "Lambda", "S3"],
        isHaveTerraform: true
    },
    {
        id: "003",
        title: "Deploy Laravel Application to EC2 with High Availability",
        description: "Deploy Laravel project to EC2 with Auto Scaling, Load balancing, send notification, ensure best practice in security when working with VPC and IAM",
        url: "https://003.tsukpa.blog",
        img: "https://d9akteslg4v3w.cloudfront.net/blog/images/003-deploy-ec2-laravel-auto-scaling.png",
        techStacks: ["EC2", "ALB", "Secret Manager", "Cloudwatch", "AutoScaling"],
        isHaveTerraform: true
    },
];

export const listCertificates: Certificate[] = [
    {
        badge: "https://www.credly.com/badges/638aaf4c-4e81-4321-b7ba-c7bf05d3cc46",
        url: "https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png"
    },
    {
        badge: "https://www.credly.com/badges/d9242435-6fc9-42b1-9847-1b972f95a481",
        url: "https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png"
    }
];