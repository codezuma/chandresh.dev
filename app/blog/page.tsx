import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { AnimatedArrow } from "@/components/ui/link";
import { Blog, getBlogPosts } from "@/lib/blog";
import { calculateReadingTime, formatDate } from "@/lib/utils";
import { ArrowUpRight, ArrowUpRightSquare, Eye, Heart } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export const metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

type Post = {
  metadata: any;
  slug: string;
  content: string;
}
export default function BlogPage() {
  let allBlogs = getBlogPosts();

  const sortedBlogs = allBlogs
    .sort((a, b) => {
      if (
        new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
      ) {
        return -1;
      }
      return 1;
    });

  return (
    <Container className="mt-16 ">
      <h1 className="font-medium text-2xl mb-8 col-span-3 tracking-tighter">Blogs</h1>
      <main className="flex flex-col gap-4">

        {
          sortedBlogs.map((post: Post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
            >
              <BlogPostPreview post={post} />
            </Link>
          ))}
      </main>
    </Container>
  );
}

const BlogPostPreview = ({ post }: { post: Blog }) => {
  const formattedDate = formatDate(post.metadata.publishedAt);

  return (
    <article className="border p-4 group relative rounded-lg bg-zinc-200/50 dark:bg-zinc-800 transition-all hover:-translate-y-1 flex gap-2 border-gray-300 dark:border-gray-700">
      <header className="flex gap-2 flex-col ">
        <h2 className="text-[17px] font-semibold text-primary">{post.metadata.title}</h2>
        <p className="text-[15px]  text-secondary-foreground ">{post.metadata.summary}</p>
        <span className="">
        </span>
        <main className="flex items-center text-secondary-foreground">
          <Button size={'sm'} className="px-0" variant={'ghost'}>
            <Heart className="w-4 mr-2" /> 205
          </Button>
          <span className="mx-2 text-base">•</span>
          <Button size={'sm'} className="px-0" variant={'ghost'}>
            205 Reads
          </Button>
          <span className="mx-2 text-base">•</span>
          <span className=" uppercase text-xs  font-semibold">{formattedDate}</span>
        </main>
      </header>
      <div className="absolute  right-2 top-2 ">
        <AnimatedArrow/>
      </div>
    </article>
  );
};
