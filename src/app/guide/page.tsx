import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://fanza-best-movies.com";

export const metadata: Metadata = {
  title: "FANZAの始め方【女性向け完全ガイド】登録方法・使い方",
  description: "FANZAを初めて使う女性向けに登録方法・使い方・BL作品の探し方をわかりやすく解説。スマホでの使い方・支払い方法・プライバシー対策も紹介。",
  keywords: ["FANZA 登録方法 女性", "FANZA 使い方", "FANZA BL 女性", "FANZA 始め方", "FANZAとは"],
  alternates: { canonical: `${siteUrl}/guide` },
  openGraph: {
    title: "FANZAの始め方【女性向け完全ガイド】| 私だけの書斎",
    description: "FANZAを初めて使う女性向けに登録方法・使い方を解説。",
    url: `${siteUrl}/guide`,
  },
};

const steps = [
  { step: "01", title: "FANZAにアクセス", desc: "FANZAの公式サイトにアクセスします。スマホからでも簡単に登録できます。" },
  { step: "02", title: "会員登録（無料）", desc: "メールアドレスとパスワードを設定するだけ。5分以内で完了します。" },
  { step: "03", title: "年齢確認", desc: "18歳以上であることを確認します。クレジットカードまたは携帯認証で行います。" },
  { step: "04", title: "女性向けカテゴリを探す", desc: "「BL」「女性向け」で検索するか、同人誌カテゴリから女性向けを選びます。" },
  { step: "05", title: "無料サンプルで試す", desc: "ほぼ全作品に無料サンプルがあります。購入前に必ずチェックしましょう。" },
];

export default function GuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "FANZAの始め方【女性向け完全ガイド】",
    description: "FANZAを初めて使う女性向けに登録方法・使い方を解説",
    step: steps.map((s) => ({
      "@type": "HowToStep",
      name: s.title,
      text: s.desc,
    })),
  };

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "48px 24px" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <p style={{ color: "#b5838d", fontSize: 11, letterSpacing: "0.2em", marginBottom: 8 }}>GUIDE</p>
      <h1 style={{ fontSize: 24, fontWeight: "400", letterSpacing: "0.08em", marginBottom: 8, lineHeight: 1.6 }}>
        FANZAの始め方<br />
        <span style={{ fontSize: 16, color: "#888" }}>女性向け完全ガイド</span>
      </h1>
      <p style={{ color: "#999", fontSize: 13, marginBottom: 48, lineHeight: 1.9 }}>
        「男性向けのイメージがある」「プライバシーが心配」そんな女性のために、FANZAの使い方を丁寧に解説します。
      </p>

      {/* 安心ポイント */}
      <div style={{ background: "#f9f6f4", borderRadius: 8, padding: 28, marginBottom: 48 }}>
        <p style={{ color: "#b5838d", fontSize: 11, letterSpacing: "0.15em", marginBottom: 16 }}>PRIVACY & SAFETY</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16 }}>
          {[
            { icon: "🔒", title: "購入履歴は非公開", desc: "他の人には絶対に見えません" },
            { icon: "💳", title: "明細は「DMM」表示", desc: "具体的な内容は表示されません" },
            { icon: "📱", title: "スマホ完結", desc: "アプリで快適に楽しめます" },
            { icon: "🆓", title: "無料サンプルあり", desc: "購入前に内容を確認できます" },
          ].map((item, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 24, marginBottom: 6 }}>{item.icon}</div>
              <p style={{ fontWeight: "500", fontSize: 13, marginBottom: 4, color: "#1c1c1c" }}>{item.title}</p>
              <p style={{ fontSize: 12, color: "#999" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 手順 */}
      <h2 style={{ fontSize: 18, fontWeight: "400", letterSpacing: "0.08em", marginBottom: 28, paddingBottom: 8, borderBottom: "1px solid #ebebeb" }}>
        登録手順
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {steps.map((s, i) => (
          <div key={i} style={{ display: "flex", gap: 20, paddingBottom: 32, borderLeft: "1px solid #e8e8e8", marginLeft: 20, paddingLeft: 28, position: "relative" }}>
            <div style={{ position: "absolute", left: -14, top: 0, background: "#b5838d", color: "white", width: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontFamily: "Georgia, serif" }}>
              {s.step}
            </div>
            <div>
              <h3 style={{ fontSize: 15, fontWeight: "500", marginBottom: 6, color: "#1c1c1c" }}>{s.title}</h3>
              <p style={{ fontSize: 13, color: "#666", lineHeight: 1.9 }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ textAlign: "center", marginTop: 48, padding: 32, background: "#f9f6f4", borderRadius: 8 }}>
        <p style={{ color: "#b5838d", fontSize: 11, letterSpacing: "0.15em", marginBottom: 8 }}>FANZA</p>
        <p style={{ fontSize: 16, fontWeight: "400", marginBottom: 20, color: "#1c1c1c" }}>まずは無料サンプルから試してみる</p>
        <a href="https://www.dmm.co.jp/" target="_blank" rel="noopener noreferrer" className="link-hover"
          style={{ color: "#1c1c1c", fontSize: 12, letterSpacing: "0.15em", textDecoration: "none", borderBottom: "1px solid #1c1c1c", paddingBottom: 3 }}>
          FANZAへ →
        </a>
      </div>

      <div style={{ marginTop: 32, textAlign: "center" }}>
        <Link href="/blog" className="link-hover" style={{ color: "#b5838d", fontSize: 12, textDecoration: "none", letterSpacing: "0.1em" }}>
          ← ブログ記事一覧へ
        </Link>
      </div>
    </div>
  );
}
