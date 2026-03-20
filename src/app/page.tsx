import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { PostBody } from "@/app/_components/post-body";
import { getAllPosts } from "@/lib/api";
import { notFound } from "next/navigation";
import markdownToHtml from "@/lib/markdownToHtml";

export default async function Index() {
  const allPosts = getAllPosts();
  
  // This finds your specific advisory post
  const post = allPosts.find((p) => p.slug === "advisory-services");

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <Container>
        <Intro />
        <article className="mb-32">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-12 text-center md:text-left">
            {post.title}
          </h1>
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}
