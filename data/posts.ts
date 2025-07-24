export interface Post {
  slug: string;
  title: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: "hello-world",
    title: "Hello World",
    content: "This is my first blog post in Next.js with TypeScript!",
  },
  {
    slug: "nextjs-dynamic-routes",
    title: "Dynamic Routes in Next.js",
    content: "Learn how to use App Router for dynamic routes.",
  },
  {
    slug: "typescript-love",
    title: "Why I Love TypeScript",
    content: "Type safety saves your future self every single time!",
  },
];
