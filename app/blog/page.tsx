import Link from "next/link";
import { posts } from "../lib/posts";

export const metadata = {
  title: "Blog Bói Tình Yêu 2026 | Kiến Thức & Bí Mật Tình Cảm",
  description:
    "Blog chia sẻ kiến thức bói tình yêu, xem độ hợp nhau theo tên và xu hướng tình cảm 2026.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-pink-50 via-rose-100 to-purple-100  p-6 md:p-12">
      {" "}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-pink-600 mb-6 drop-shadow-md">
          💘 Blog Bói Tình Yêu 2026
        </h1>

        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Khám phá kiến thức tình yêu, bói theo tên và xu hướng tình cảm mới
          nhất.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-white border border-pink-100 shadow-md rounded-2xl p-6 hover:shadow-xl hover:bg-pink-50 transition-all duration-300"
            >
              <h2 className="text-xl font-bold text-pink-600 mb-3">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm">{post.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
