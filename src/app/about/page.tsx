import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "運営者情報",
  description: "私だけの書斎の運営者情報・サイト概要です。",
};

export default function AboutPage() {
  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: "48px 24px" }}>
      <Breadcrumb items={[{ label: "TOP", href: "/" }, { label: "運営者情報" }]} />

      <p style={{ color: "#b5838d", fontSize: 11, letterSpacing: "0.2em", marginBottom: 8 }}>ABOUT</p>
      <h1 style={{ fontSize: 22, fontWeight: "400", letterSpacing: "0.08em", marginBottom: 40, lineHeight: 1.6 }}>運営者情報</h1>

      <div style={{ background: "#f9f6f4", borderRadius: 8, padding: 32, marginBottom: 48 }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          {[
            { label: "サイト名", value: "私だけの書斎" },
            { label: "URL", value: "https://fanza-best-movies.com" },
            { label: "開設", value: "2025年6月" },
            { label: "テーマ", value: "女性向けBL・乙女・同人誌のFANZAガイド" },
            { label: "対象読者", value: "18歳以上の女性" },
            { label: "お問い合わせ", value: "お問い合わせページよりご連絡ください" },
          ].map((row, i) => (
            <tr key={i} style={{ borderBottom: "1px solid #ede8e5" }}>
              <td style={{ padding: "14px 0", fontSize: 12, color: "#b5838d", letterSpacing: "0.08em", width: 140, verticalAlign: "top" }}>{row.label}</td>
              <td style={{ padding: "14px 0", fontSize: 13, color: "#444", lineHeight: 1.8 }}>{row.value}</td>
            </tr>
          ))}
        </table>
      </div>

      <h2 style={{ fontSize: 16, fontWeight: "400", letterSpacing: "0.08em", marginBottom: 16, color: "#1c1c1c" }}>このサイトについて</h2>
      <p style={{ fontSize: 13, color: "#666", lineHeight: 2, marginBottom: 24 }}>
        「私だけの書斎」は、女性のためのFANZAコンテンツガイドです。BL漫画・小説・BLCD・女性向け同人誌など、女性が楽しめる大人向けコンテンツのおすすめ・ランキング・使い方を紹介しています。
      </p>
      <p style={{ fontSize: 13, color: "#666", lineHeight: 2, marginBottom: 40 }}>
        「男性向けのイメージがあって使いにくい」「どんな作品があるか分からない」という女性の方に向けて、安心して楽しめるコンテンツを丁寧にご紹介します。
      </p>

      <div style={{ display: "flex", gap: 20 }}>
        <Link href="/privacy" style={{ color: "#b5838d", fontSize: 12, textDecoration: "none", letterSpacing: "0.1em" }}>
          プライバシーポリシー →
        </Link>
        <Link href="/contact" style={{ color: "#b5838d", fontSize: 12, textDecoration: "none", letterSpacing: "0.1em" }}>
          お問い合わせ →
        </Link>
      </div>
    </div>
  );
}
