import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://fanza-best-movies.com";

export const metadata: Metadata = {
  title: "FANZAセール・クーポン情報【BL・女性向け】半額セール随時更新",
  description: "FANZAの最新セール・クーポン情報をまとめました。BL・女性向け同人誌の半額セール、初回70%オフ、期間限定ポイント還元など随時更新。",
  keywords: ["FANZA セール", "FANZA クーポン", "FANZA 半額", "BL 割引", "女性向け FANZA セール", "FANZA 初回70%オフ"],
  alternates: { canonical: `${siteUrl}/sale` },
  openGraph: {
    title: "FANZAセール・クーポン情報【BL・女性向け】| 私だけの書斎",
    description: "FANZAの最新セール・クーポン情報。BL・女性向け半額セール随時更新。",
    url: `${siteUrl}/sale`,
  },
};

const campaigns = [
  {
    label: "定番",
    badge: "REGULAR",
    title: "初回登録 最大70%オフ",
    desc: "FANZAに初めて登録する方は最大70%オフクーポンが配布されます。BL・女性向け作品にも使えるのでまず登録がおすすめ。",
    note: "※ 登録後マイページよりクーポン確認",
    color: "#b5838d",
  },
  {
    label: "定期",
    badge: "WEEKLY",
    title: "毎週火曜・金曜セール",
    desc: "FANZAでは毎週火曜と金曜に大規模セールが実施されます。BL同人誌や漫画が50〜70%オフになることも。",
    note: "※ 対象作品はその都度変わります",
    color: "#a0877a",
  },
  {
    label: "月例",
    badge: "MONTHLY",
    title: "月末ポイントアップキャンペーン",
    desc: "月末は特定ジャンルのポイント還元率がアップするキャンペーンが多く実施されます。女性向け・BLも対象になることが多いです。",
    note: "※ 付与されたポイントで次の購入に使えます",
    color: "#8a9e8c",
  },
  {
    label: "季節",
    badge: "SEASONAL",
    title: "夏・冬の大型セール",
    desc: "夏と冬には年最大規模のセールが開催。BL・女性向け全ジャンルが対象になることが多く、新作・話題作も含まれます。",
    note: "※ 開催時期は公式サイトで確認を",
    color: "#7d8fa3",
  },
];

const tips = [
  { title: "サンプルを必ず読む", desc: "FANZAはほぼ全作品に無料サンプルがあります。セール中でも必ずサンプルを読んでから購入しましょう。" },
  { title: "ウィッシュリストに追加", desc: "気になる作品をウィッシュリストに入れておくと、セール対象になった時にすぐ購入できます。" },
  { title: "ポイントと組み合わせ", desc: "FANZAポイントとセールを組み合わせると実質70〜80%オフになることも。ポイント購入で事前チャージがお得。" },
];

export default function SalePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "FANZAセール・クーポン情報【BL・女性向け】",
    description: "FANZAの最新セール・クーポン情報をまとめました",
    url: `${siteUrl}/sale`,
  };

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "48px 24px" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <p style={{ color: "#b5838d", fontSize: 11, letterSpacing: "0.2em", marginBottom: 8 }}>SALE & COUPON</p>
      <h1 style={{ fontSize: 24, fontWeight: "400", letterSpacing: "0.08em", marginBottom: 8, lineHeight: 1.6 }}>
        FANZAセール・クーポン情報
      </h1>
      <p style={{ color: "#999", fontSize: 13, marginBottom: 8, lineHeight: 1.9 }}>
        BL・女性向け作品をお得に買うためのセール・クーポン情報をまとめています。
      </p>
      <p style={{ color: "#bbb", fontSize: 11, marginBottom: 48 }}>最終更新: 2026年6月</p>

      {/* キャンペーン一覧 */}
      <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 56 }}>
        {campaigns.map((c, i) => (
          <div key={i} style={{ border: "1px solid #e8e8e8", borderRadius: 8, padding: 28, borderLeft: `4px solid ${c.color}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <span style={{ background: c.color, color: "white", fontSize: 9, letterSpacing: "0.15em", padding: "2px 8px", borderRadius: 2 }}>{c.badge}</span>
              <span style={{ color: "#aaa", fontSize: 11 }}>{c.label}キャンペーン</span>
            </div>
            <h2 style={{ fontSize: 17, fontWeight: "400", color: "#1c1c1c", marginBottom: 10, letterSpacing: "0.05em" }}>{c.title}</h2>
            <p style={{ fontSize: 13, color: "#666", lineHeight: 1.9, marginBottom: 8 }}>{c.desc}</p>
            <p style={{ fontSize: 11, color: "#aaa" }}>{c.note}</p>
          </div>
        ))}
      </div>

      {/* お得に使うコツ */}
      <h2 style={{ fontSize: 18, fontWeight: "400", letterSpacing: "0.08em", marginBottom: 24, paddingBottom: 8, borderBottom: "1px solid #ebebeb" }}>
        セールをお得に使うコツ
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16, marginBottom: 56 }}>
        {tips.map((t, i) => (
          <div key={i} style={{ background: "#f9f6f4", borderRadius: 8, padding: 20 }}>
            <p style={{ fontWeight: "500", fontSize: 13, color: "#1c1c1c", marginBottom: 8 }}>{t.title}</p>
            <p style={{ fontSize: 12, color: "#777", lineHeight: 1.8 }}>{t.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ textAlign: "center", padding: 32, background: "#f9f6f4", borderRadius: 8 }}>
        <p style={{ color: "#b5838d", fontSize: 11, letterSpacing: "0.15em", marginBottom: 8 }}>FANZA</p>
        <p style={{ fontSize: 16, fontWeight: "400", marginBottom: 20, color: "#1c1c1c" }}>FANZAのセール情報を確認する</p>
        <a href="https://www.dmm.co.jp/" target="_blank" rel="noopener noreferrer" className="link-hover"
          style={{ color: "#1c1c1c", fontSize: 12, letterSpacing: "0.15em", textDecoration: "none", borderBottom: "1px solid #1c1c1c", paddingBottom: 3 }}>
          FANZAセールページへ →
        </a>
      </div>

      <div style={{ marginTop: 32, display: "flex", gap: 24, justifyContent: "center" }}>
        <Link href="/guide" className="link-hover" style={{ color: "#b5838d", fontSize: 12, textDecoration: "none", letterSpacing: "0.1em" }}>
          → 登録ガイドはこちら
        </Link>
        <Link href="/ranking" className="link-hover" style={{ color: "#b5838d", fontSize: 12, textDecoration: "none", letterSpacing: "0.1em" }}>
          → ランキングを見る
        </Link>
      </div>
    </div>
  );
}
