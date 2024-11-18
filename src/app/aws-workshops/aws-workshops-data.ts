export type WorkShop = {
    id: number;
    title: string;
    description: string;
    url: string;
    techStacks: string[];
    isHaveTerraform: boolean;
}

export const workshops: WorkShop[] = [
    {
        id: 1,
        title: "Deploy Static Site NextJS App to S3 using Github Action",
        description: "In this workshop, you’ll learn the basics and practice of Amazon S3, Cloudfront, using IAM OIDC STS with Github Action. Perform creating NextJs App with low latency.        ",
        url: "https://ws.tsukpa.blog/001-deploy-static-site-to-s3/",
        techStacks: ["S3", "IAM", "Cloudfront", "Github Actions"],
        isHaveTerraform: true
    },
    {
        id: 2,
        title: "Leveraging Amazon Bedrock to enhance Customer Support service with AI-Powered automated email responses",
        description: "This workshop will explore how to utilize Amazon Bedrock to build intelligent agent for reply email about order status, policy,...",
        url: "https://ws.tsukpa.blog/002-ai-powered-email-auto-replies/",
        techStacks: ["SES", "Amazon Bedrock", "SQS", "Lambda", "S3"],
        isHaveTerraform: true
    }
];