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
        url: "https://d9akteslg4v3w.cloudfront.net/001-deploy-static-site-to-s3/",
        techStacks: ["S3", "IAM", "Cloudfront", "Github Actions"],
        isHaveTerraform: true
    }
];