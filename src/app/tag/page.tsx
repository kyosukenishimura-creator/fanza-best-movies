import Link from "next/link";
import { tags } from "@/lib/tags";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "タグ別ランキング | 私だけの書斎",
  description: "オメガバース・年の差・獣人など人気タグ別にBL・女性向け作品をランキング形式でご紹介。",
};

export default function TagPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
      <p style={{ color: "#b5838d", fontSize: 11, letterSpacing: "0.2em", marginBottom: 8 }}>TAG RANKING</p>
      <h1 style={{ fontSize: 24, fontWeight: "400", marginBottom: 8, letterSpacing: "0.1em" }}>タグ別ランキング</h1>
      <p style={{ color: "#999", fontSize: 13, marginBottom: 48 }}>人気タグで作品を探す</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {tags.map((tag) => (
          <Link key={tag.slug} href={`/tag/${tag.slug}`} style={{ textDecoration: "none" }}>
            <div className="card-hover" style={{ border: "1px solid #ebebeb", borderRadius: 8, padding: 28 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                <span style={{ fontSize: 24 }}>{tag.emoji}</span>
                <h2 style={{ fontSize: 18, fontWeight: "400", color: "#1c1c1c", letterSpacing: "0.08em" }}>{tag.name}</h2>
              </div>
              <p style={{ color: "#777", fontSize: 13, lineHeight: 1.8 }}>{tag.description}</p>
              <p style={{ color: "#b5838d", fontSize: 11, letterSpacing: "0.12em", marginTop: 12 }}>作品を見る →</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
