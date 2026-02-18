import { posts, type Post } from "../../lib/posts";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogDetail({ params }: PageProps) {
  const { slug } = await params; // 👈 QUAN TRỌNG

  const post = posts.find((p: Post) => p.slug === slug);

  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-linear-to-br from-pink-50 via-rose-100 to-purple-100 pt-24 px-6 pb-16">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-3xl p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
          {post.title}
        </h1>

        <p className="text-gray-600 mb-8">{post.description}</p>

        {/* 🔥 PHẦN QUAN TRỌNG */}
        <div
          className="prose prose-pink max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </main>
  );
}
