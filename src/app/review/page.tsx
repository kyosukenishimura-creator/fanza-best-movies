import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FANZAレビュー | 人気作品の口コミまとめ",
  description: "FANZAの人気作品のレビュー・口コミをまとめてご紹介。",
};

export default function ReviewPage() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 16px" }}>
      <h1 style={{ fontSize: 28, fontWeight: "bold", marginBottom: 8 }}>📝 FANZAレビュー</h1>
      <p style={{ color: "#aaa", marginBottom: 32 }}>人気作品の口コミ・レビューをまとめてご紹介</p>
      <p style={{ color: "#555" }}>記事を準備中です。もうしばらくお待ちください。</p>
    </div>
  );
}
