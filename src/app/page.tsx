import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { PostBody } from "@/app/_components/post-body";
import LeakageCard from "@/app/_components/leakage-card"; // Import the new card
import { getAllPosts } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";

export default async function Index() {
  const allPosts = getAllPosts();
  const post = allPosts.find((p) => p.slug === "advisory-services");
  if (!post) return null;

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <Container>
        <Intro />
        <div className="flex flex-col lg:flex-row gap-12 items-start mt-12">
          <div className="lg:w-1/2">
             <LeakageCard /> {/* This is your Framer-style card */}
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold mb-8" style={{ color: '#0F172A' }}>{post.title}</h1>
            <PostBody content={content} />
          </div>
        </div>
      </Container>
    </main>
  );
}
