import { posts, getPost } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 16px" }}>
      <Link href="/blog" style={{ color: "#e50914", textDecoration: "none", fontSize: 14, display: "inline-block", marginBottom: 24 }}>
        ← ブログ一覧に戻る
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
        <span style={{ background: "#fff0f0", color: "#e50914", fontSize: 12, padding: "2px 10px", borderRadius: 20, fontWeight: "bold" }}>
          {post.category}
        </span>
        <span style={{ color: "#aaa", fontSize: 13 }}>{post.date}</span>
      </div>

      <h1 style={{ fontSize: 28, fontWeight: "bold", color: "#1a1a1a", marginBottom: 24, lineHeight: 1.5 }}>{post.title}</h1>

      <div style={{
        background: "#f9f9f9", border: "1px solid #e8e8e8", borderRadius: 8,
        padding: "16px 20px", marginBottom: 32, color: "#555", fontSize: 15, lineHeight: 1.8
      }}>
        {post.description}
      </div>

      <div style={{ lineHeight: 2, fontSize: 16, color: "#333" }}>
        {post.content.split("\n").map((line, i) => {
          if (line.startsWith("## ")) return <h2 key={i} style={{ fontSize: 22, fontWeight: "bold", marginTop: 32, marginBottom: 12, paddingBottom: 8, borderBottom: "2px solid #e50914", color: "#1a1a1a" }}>{line.replace("## ", "")}</h2>;
          if (line.startsWith("### ")) return <h3 key={i} style={{ fontSize: 18, fontWeight: "bold", marginTop: 24, marginBottom: 8, color: "#1a1a1a" }}>{line.replace("### ", "")}</h3>;
          if (line.startsWith("**") && line.endsWith("**")) return <p key={i} style={{ fontWeight: "bold", marginBottom: 8 }}>{line.replace(/\*\*/g, "")}</p>;
          if (line.startsWith("- ")) return <li key={i} style={{ marginLeft: 24, marginBottom: 4, color: "#444" }}>{line.replace("- ", "")}</li>;
          if (line.trim() === "") return <br key={i} />;
          return <p key={i} style={{ marginBottom: 12, color: "#444" }}>{line}</p>;
        })}
      </div>

      <div style={{ marginTop: 48, padding: 24, background: "#fff0f0", border: "1px solid #ffd0d0", borderRadius: 10 }}>
        <p style={{ fontWeight: "bold", marginBottom: 12, color: "#1a1a1a" }}>👉 FANZAで作品を探す</p>
        <a href="https://www.dmm.co.jp/" target="_blank" rel="noopener noreferrer" style={{
          display: "inline-block", background: "#e50914", color: "white",
          padding: "12px 32px", borderRadius: 6, fontWeight: "bold", textDecoration: "none"
        }}>
          FANZAを見てみる →
        </a>
      </div>
    </div>
  );
}
