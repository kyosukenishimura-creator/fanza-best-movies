import Link from "next/link";
import { posts } from "@/lib/posts";
import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "journal | 女性向けBL・同人誌コラム",
  description: "FANZAのBL・オメガバース・同人誌・BLCDについてのコラムを発信。女性目線で選んだおすすめ情報をお届けします。",
};

const categoryColors: Record<string, string> = {
  "オメガバース": "#b5838d",
  "BL": "#9b7fa8",
  "使い方": "#7a9e9f",
  "同人誌": "#c49a6c",
  "初心者向け": "#6b8fba",
  "BLCD": "#a07060",
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";

  const filtered = query
    ? posts.filter(
        (p) =>
          p.title.includes(query) ||
          p.description.includes(query) ||
          p.category.includes(query) ||
          p.content.includes(query)
      )
    : posts;

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "32px 16px" }}>
      <Breadcrumb items={[{ label: "TOP", href: "/" }, { label: "journal" }]} />

      <p style={{ color: "#b5838d", fontSize: 11, letterSpacing: "0.2em", marginBottom: 8 }}>JOURNAL</p>
      <h1 style={{ fontSize: 22, fontWeight: "400", color: "#1c1c1c", letterSpacing: "0.08em", marginBottom: 32 }}>
        {query ? `「${query}」の検索結果` : "読みものと、おすすめ"}
      </h1>

      {/* 検索バー */}
      <form method="get" action="/blog" style={{ marginBottom: 40 }}>
        <div style={{ display: "flex", gap: 0, maxWidth: 480 }}>
          <input
            type="text"
            name="q"
            defaultValue={query}
            placeholder="記事を検索（例：オメガバース、BLCD）"
            style={{
              flex: 1,
              padding: "10px 16px",
              border: "1px solid #e0e0e0",
              borderRight: "none",
              borderRadius: "4px 0 0 4px",
              fontSize: 13,
              color: "#1c1c1c",
              outline: "none",
              background: "#faf8f7",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              background: "#b5838d",
              color: "#fff",
              border: "none",
              borderRadius: "0 4px 4px 0",
              fontSize: 12,
              cursor: "pointer",
              letterSpacing: "0.08em",
              flexShrink: 0,
            }}
          >
            検索
          </button>
        </div>
      </form>

      {/* カテゴリフィルター */}
      {!query && (
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 40 }}>
          {Object.keys(categoryColors).map((cat) => (
            <Link
              key={cat}
              href={`/blog?q=${encodeURIComponent(cat)}`}
              style={{
                fontSize: 11,
                color: categoryColors[cat] ?? "#b5838d",
                border: `1px solid ${categoryColors[cat] ?? "#b5838d"}`,
                borderRadius: 20,
                padding: "4px 14px",
                textDecoration: "none",
                letterSpacing: "0.06em",
              }}
            >
              {cat}
            </Link>
          ))}
        </div>
      )}

      {/* 検索結果件数 */}
      {query && (
        <p style={{ color: "#888", fontSize: 13, marginBottom: 24 }}>
          {filtered.length > 0
            ? `${filtered.length}件の記事が見つかりました`
            : "該当する記事が見つかりませんでした"}
        </p>
      )}

      {/* 記事一覧 */}
      {filtered.length > 0 ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {filtered.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
              <div style={{
                display: "flex",
                gap: 20,
                padding: "24px 0",
                borderBottom: "1px solid #f0f0f0",
                alignItems: "flex-start",
              }}>
                {/* カテゴリカラーバー */}
                <div style={{
                  width: 48,
                  height: 64,
                  background: categoryColors[post.category] ?? "#b5838d",
                  borderRadius: 4,
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 9, letterSpacing: "0.08em", writingMode: "vertical-rl", textOrientation: "mixed" }}>
                    {post.category}
                  </span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <span style={{
                      color: categoryColors[post.category] ?? "#b5838d",
                      fontSize: 10,
                      letterSpacing: "0.1em",
                    }}>
                      {post.category}
                    </span>
                    <span style={{ color: "#ccc", fontSize: 11 }}>|</span>
                    <span style={{ color: "#aaa", fontSize: 11 }}>{post.date}</span>
                  </div>
                  <h2 style={{ fontSize: 15, fontWeight: "400", color: "#1c1c1c", marginBottom: 8, lineHeight: 1.6, letterSpacing: "0.04em" }}>
                    {post.title}
                  </h2>
                  <p style={{ color: "#888", fontSize: 12, lineHeight: 1.8 }}>
                    {post.description.slice(0, 80)}…
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "80px 0", color: "#aaa" }}>
          <p style={{ fontSize: 14, marginBottom: 16 }}>「{query}」に一致する記事はありませんでした</p>
          <Link href="/blog" style={{ color: "#b5838d", fontSize: 12, textDecoration: "none", borderBottom: "1px solid #b5838d" }}>
            すべての記事を見る
          </Link>
        </div>
      )}
    </div>
  );
}
