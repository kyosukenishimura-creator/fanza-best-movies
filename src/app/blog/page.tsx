import Link from "next/link";
import { posts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FANZAブログ | 使い方・比較・おすすめ情報",
  description: "FANZAの使い方・比較・おすすめ情報をブログ形式でお届けします。",
};

export default function BlogPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 16px" }}>
      <h1 style={{ fontSize: 28, fontWeight: "bold", marginBottom: 8, color: "#1a1a1a" }}>📝 ブログ</h1>
      <p style={{ color: "#777", marginBottom: 32 }}>FANZAの使い方・おすすめ情報を発信中</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
            <div style={{
              background: "#fff", border: "1px solid #e8e8e8", borderRadius: 10,
              padding: 24, boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              transition: "box-shadow 0.2s",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <span style={{ background: "#fff0f0", color: "#e50914", fontSize: 12, padding: "2px 10px", borderRadius: 20, fontWeight: "bold" }}>
                  {post.category}
                </span>
                <span style={{ color: "#aaa", fontSize: 13 }}>{post.date}</span>
              </div>
              <h2 style={{ fontSize: 18, fontWeight: "bold", color: "#1a1a1a", marginBottom: 8 }}>{post.title}</h2>
              <p style={{ color: "#666", fontSize: 14, lineHeight: 1.7 }}>{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
