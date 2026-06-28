import { tags, getTag } from "@/lib/tags";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export function generateStaticParams() {
  return tags.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tag = getTag(slug);
  if (!tag) return {};
  return { title: `${tag.name}のおすすめBL作品 | 私だけの書斎`, description: tag.description };
}

export default async function TagDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tag = getTag(slug);
  if (!tag) notFound();

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
      <Link href="/tag" style={{ color: "#b5838d", textDecoration: "none", fontSize: 12, letterSpacing: "0.1em", display: "inline-block", marginBottom: 32 }}>
        ← タグ一覧
      </Link>

      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <span style={{ fontSize: 40 }}>{tag.emoji}</span>
        <p style={{ color: "#b5838d", fontSize: 11, letterSpacing: "0.2em", marginTop: 12, marginBottom: 8 }}>TAG RANKING</p>
        <h1 style={{ fontSize: 26, fontWeight: "400", letterSpacing: "0.1em", marginBottom: 12 }}>{tag.name}</h1>
        <p style={{ color: "#888", fontSize: 13, lineHeight: 1.9, maxWidth: 500, margin: "0 auto" }}>{tag.description}</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {tag.works.map((work, i) => (
          <div key={i} className="card-hover" style={{ border: "1px solid #ebebeb", borderRadius: 8, padding: 24, display: "flex", gap: 24 }}>
            <div style={{ background: "#f5f0ee", width: 100, minWidth: 100, height: 130, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 4, position: "relative" }}>
              <span style={{ color: "#b5838d", fontFamily: "Georgia, serif", fontSize: 18, fontWeight: "400" }}>0{i + 1}</span>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ color: "#aaa", fontSize: 11, marginBottom: 6 }}>{work.author}</p>
              <h3 style={{ fontSize: 15, fontWeight: "400", color: "#1c1c1c", marginBottom: 8, lineHeight: 1.6 }}>{work.title}</h3>
              <p style={{ color: "#777", fontSize: 13, lineHeight: 1.8, marginBottom: 14 }}>{work.description}</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ color: "#b5838d", fontSize: 12 }}>★ {work.rating}</span>
                <a href={work.affiliateUrl} target="_blank" rel="noopener noreferrer" className="link-hover"
                  style={{ color: "#1c1c1c", fontSize: 11, letterSpacing: "0.12em", textDecoration: "none", borderBottom: "1px solid #1c1c1c", paddingBottom: 2 }}>
                  FANZAで見る →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
