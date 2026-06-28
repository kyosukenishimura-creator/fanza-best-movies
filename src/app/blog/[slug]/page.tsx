import { posts, getPost } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

const siteUrl = "https://fanza-best-movies.com";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: ["BL", "女性向け", "FANZA", post.category, "おすすめ", "ランキング"],
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteUrl}/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
    },
    alternates: { canonical: `${siteUrl}/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3).length
    ? posts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3)
    : posts.filter((p) => p.slug !== slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "私だけの書斎" },
    publisher: { "@type": "Organization", name: "私だけの書斎", url: siteUrl },
    url: `${siteUrl}/blog/${slug}`,
  };

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 16px" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumb items={[{ label: "TOP", href: "/" }, { label: "journal", href: "/blog" }, { label: post.title }]} />

      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
        <span style={{ color: "#b5838d", fontSize: 11, letterSpacing: "0.1em" }}>{post.category}</span>
        <span style={{ color: "#ccc", fontSize: 12 }}>|</span>
        <span style={{ color: "#aaa", fontSize: 12 }}>{post.date}</span>
      </div>

      <h1 style={{ fontSize: 26, fontWeight: "400", color: "#1c1c1c", marginBottom: 24, lineHeight: 1.7, letterSpacing: "0.05em" }}>{post.title}</h1>

      <div style={{ background: "#f9f6f4", borderLeft: "3px solid #b5838d", padding: "16px 20px", marginBottom: 40, color: "#666", fontSize: 14, lineHeight: 1.9 }}>
        {post.description}
      </div>

      <div style={{ lineHeight: 2.2, fontSize: 15, color: "#444" }}>
        {post.content.split("\n").map((line, i) => {
          if (line.startsWith("## ")) return <h2 key={i} style={{ fontSize: 20, fontWeight: "400", marginTop: 40, marginBottom: 16, paddingBottom: 8, borderBottom: "1px solid #e8e8e8", color: "#1c1c1c", letterSpacing: "0.08em" }}>{line.replace("## ", "")}</h2>;
          if (line.startsWith("### ")) return <h3 key={i} style={{ fontSize: 16, fontWeight: "500", marginTop: 28, marginBottom: 10, color: "#1c1c1c", letterSpacing: "0.05em" }}>{line.replace("### ", "")}</h3>;
          if (line.startsWith("**") && line.endsWith("**")) return <p key={i} style={{ fontWeight: "600", marginBottom: 8, color: "#333" }}>{line.replace(/\*\*/g, "")}</p>;
          if (line.startsWith("- ")) return <li key={i} style={{ marginLeft: 20, marginBottom: 6, color: "#555" }}>{line.replace("- ", "")}</li>;
          if (line.trim() === "") return <br key={i} />;
          return <p key={i} style={{ marginBottom: 14, color: "#555", lineHeight: 2 }}>{line}</p>;
        })}
      </div>

      {/* 関連記事 */}
      {related.length > 0 && (
        <div style={{ marginTop: 56 }}>
          <p style={{ color: "#b5838d", fontSize: 11, letterSpacing: "0.15em", marginBottom: 16 }}>RELATED ARTICLES</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {related.map((r) => (
              <Link key={r.slug} href={`/blog/${r.slug}`} style={{ textDecoration: "none", display: "flex", gap: 16, alignItems: "flex-start", padding: "14px 0", borderBottom: "1px solid #f0f0f0" }}>
                <span style={{ color: "#b5838d", fontSize: 10, letterSpacing: "0.1em", minWidth: 60, marginTop: 2 }}>{r.category}</span>
                <span style={{ color: "#1c1c1c", fontSize: 14, lineHeight: 1.6, letterSpacing: "0.03em" }} className="link-hover">{r.title}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div style={{ marginTop: 56, padding: 28, background: "#f9f6f4", border: "1px solid #e8d8d8", borderRadius: 8 }}>
        <p style={{ fontWeight: "400", marginBottom: 4, color: "#b5838d", fontSize: 11, letterSpacing: "0.15em" }}>FANZA</p>
        <p style={{ fontWeight: "500", marginBottom: 16, color: "#1c1c1c", fontSize: 15 }}>FANZAで作品を探してみる</p>
        <a href="https://www.dmm.co.jp/" target="_blank" rel="noopener noreferrer" className="link-hover" style={{
          display: "inline-block", color: "#1c1c1c", fontSize: 12,
          letterSpacing: "0.15em", textDecoration: "none", borderBottom: "1px solid #1c1c1c", paddingBottom: 3
        }}>
          FANZAへ →
        </a>
      </div>
    </div>
  );
}
