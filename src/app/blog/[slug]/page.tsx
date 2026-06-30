import { posts, getPost, type Recommendation } from "@/lib/posts";
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

// h3の直後に挿入するインラインCTA
function InlineCta({ label, url }: { label: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#fdf6f7",
        border: "1px solid #e8d0d4",
        borderRadius: 6,
        padding: "12px 16px",
        textDecoration: "none",
        marginBottom: 20,
        marginTop: 4,
      }}
    >
      <span style={{ fontSize: 12, color: "#666", letterSpacing: "0.03em" }}>
        📖 <strong style={{ color: "#1c1c1c" }}>「{label}」</strong> をFANZAで読む
      </span>
      <span style={{ fontSize: 11, color: "#b5838d", letterSpacing: "0.1em", flexShrink: 0, marginLeft: 12 }}>
        無料サンプルあり →
      </span>
    </a>
  );
}

// 記事途中に挿入するバナーCTA
function MidCta({ url }: { url: string }) {
  return (
    <div style={{ margin: "40px 0", padding: "24px 20px", background: "linear-gradient(135deg, #f9f0f2 0%, #f5f0ee 100%)", borderRadius: 8, border: "1px solid #e8d0d4" }}>
      <p style={{ fontSize: 10, color: "#b5838d", letterSpacing: "0.2em", marginBottom: 8 }}>FANZA</p>
      <p style={{ fontSize: 15, color: "#1c1c1c", fontWeight: "400", marginBottom: 4, lineHeight: 1.7 }}>
        気になった作品、まず無料サンプルで試してみませんか？
      </p>
      <p style={{ fontSize: 12, color: "#888", marginBottom: 16, lineHeight: 1.8 }}>
        FANZAはほぼ全作品に無料サンプルあり。登録も無料です。
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          background: "#b5838d",
          color: "#fff",
          padding: "10px 24px",
          borderRadius: 4,
          fontSize: 12,
          letterSpacing: "0.12em",
          textDecoration: "none",
        }}
      >
        FANZAで無料サンプルを読む →
      </a>
    </div>
  );
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

  // コンテンツをパースしてCTAを挿入
  const lines = post.content.split("\n");
  const totalLines = lines.length;
  const midPoint = Math.floor(totalLines / 2);
  let midCtaInserted = false;
  let h3Count = 0;

  const renderedContent = lines.map((line, i) => {
    // h2
    if (line.startsWith("## ")) {
      return (
        <h2 key={i} style={{ fontSize: 20, fontWeight: "400", marginTop: 40, marginBottom: 16, paddingBottom: 8, borderBottom: "1px solid #e8e8e8", color: "#1c1c1c", letterSpacing: "0.08em" }}>
          {line.replace("## ", "")}
        </h2>
      );
    }

    // h3 → 作品タイトルの場合はインラインCTAを挿入
    if (line.startsWith("### ")) {
      const title = line.replace("### ", "");
      const isProduct = /^[1-9]位：/.test(title);
      h3Count++;

      // h3が3つ目のとき（記事の真ん中あたり）にMidCtaを挿入
      const showMidCta = !midCtaInserted && (i >= midPoint || h3Count === 3);
      if (showMidCta) midCtaInserted = true;

      return (
        <div key={i}>
          {showMidCta && <MidCta url={post.ctaUrl} />}
          <h3 style={{ fontSize: 16, fontWeight: "500", marginTop: 32, marginBottom: 10, color: "#1c1c1c", letterSpacing: "0.05em" }}>
            {title}
          </h3>
          {isProduct && <InlineCta label={title.replace(/^[1-9]位：/, "")} url={post.ctaUrl} />}
        </div>
      );
    }

    if (line.startsWith("**") && line.endsWith("**")) return <p key={i} style={{ fontWeight: "600", marginBottom: 8, color: "#333" }}>{line.replace(/\*\*/g, "")}</p>;
    if (line.startsWith("- ")) return <li key={i} style={{ marginLeft: 20, marginBottom: 6, color: "#555" }}>{line.replace("- ", "")}</li>;
    if (line.trim() === "") return <br key={i} />;
    return <p key={i} style={{ marginBottom: 14, color: "#555", lineHeight: 2 }}>{line}</p>;
  });

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 16px", position: "relative" }}>
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

      {/* 記事冒頭CTA */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", background: "#f9f6f4", borderRadius: 6, marginBottom: 32, flexWrap: "wrap" }}>
        <span style={{ fontSize: 12, color: "#888" }}>この記事の作品はFANZAで読めます</span>
        <a href={post.ctaUrl} target="_blank" rel="noopener noreferrer"
          style={{ fontSize: 11, color: "#b5838d", textDecoration: "none", borderBottom: "1px solid #b5838d", paddingBottom: 1, letterSpacing: "0.1em", flexShrink: 0 }}>
          無料サンプルを読む →
        </a>
      </div>

      {/* 本文（CTA挿入済み） */}
      <div style={{ lineHeight: 2.2, fontSize: 15, color: "#444" }}>
        {renderedContent}
      </div>

      {/* おすすめ作品リスト */}
      {post.recommendations && post.recommendations.length > 0 && (
        <div style={{ marginTop: 48, marginBottom: 16 }}>
          <p style={{ color: "#b5838d", fontSize: 10, letterSpacing: "0.2em", marginBottom: 16 }}>この記事でおすすめした作品</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {post.recommendations.map((r: Recommendation, i: number) => (
              <a
                key={i}
                href={r.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "#fdf6f7",
                  border: "1px solid #e8d0d4",
                  borderRadius: 6,
                  padding: "14px 18px",
                  textDecoration: "none",
                }}
              >
                <div>
                  <p style={{ fontSize: 13, color: "#1c1c1c", fontWeight: "500", marginBottom: 2 }}>📖 {r.title}</p>
                  <p style={{ fontSize: 11, color: "#999" }}>{r.author}</p>
                </div>
                <span style={{ fontSize: 11, color: "#b5838d", letterSpacing: "0.1em", flexShrink: 0, marginLeft: 12 }}>
                  FANZAで読む →
                </span>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* 記事末尾CTA */}
      <div style={{ marginTop: 56, padding: 28, background: "#f9f6f4", border: "1px solid #e8d8d8", borderRadius: 8 }}>
        <p style={{ fontWeight: "400", marginBottom: 4, color: "#b5838d", fontSize: 11, letterSpacing: "0.15em" }}>FANZA</p>
        <p style={{ fontWeight: "500", marginBottom: 8, color: "#1c1c1c", fontSize: 15 }}>紹介した作品をFANZAで探してみる</p>
        <p style={{ fontSize: 12, color: "#999", marginBottom: 16, lineHeight: 1.8 }}>登録無料・無料サンプルあり・プライバシー完全保護</p>
        <a href={post.ctaUrl} target="_blank" rel="noopener noreferrer"
          style={{ display: "inline-block", background: "#1c1c1c", color: "#fff", padding: "12px 28px", borderRadius: 4, fontSize: 12, letterSpacing: "0.15em", textDecoration: "none" }}>
          FANZAで作品を探す →
        </a>
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

      {/* フローティングCTAボタン（固定） */}
      <a
        href={post.ctaUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: 28,
          right: 24,
          background: "#b5838d",
          color: "#fff",
          padding: "12px 20px",
          borderRadius: 40,
          fontSize: 12,
          letterSpacing: "0.1em",
          textDecoration: "none",
          boxShadow: "0 4px 16px rgba(181,131,141,0.4)",
          zIndex: 200,
        }}
      >
        📖 FANZAで読む
      </a>
    </div>
  );
}
