import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const siteUrl = "https://fanza-best-movies.com";

export const metadata: Metadata = {
  title: "このサイトについて・管理人プロフィール | 私だけの書斎",
  description: "「私だけの書斎」管理人・みつきのプロフィールとサイト立ち上げの経緯。腐女子歴15年、BL・オメガバース・BLCDを愛する女性が運営するFANZAガイドサイトです。",
  keywords: ["私だけの書斎 運営者", "FANZA 女性向け サイト", "腐女子 ブログ", "BL おすすめ 女性"],
  alternates: { canonical: `${siteUrl}/about` },
  openGraph: {
    title: "このサイトについて・管理人プロフィール | 私だけの書斎",
    description: "腐女子歴15年の管理人・みつきが運営するFANZA女性向けガイドサイト。",
    url: `${siteUrl}/about`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "このサイトについて | 私だけの書斎",
  url: `${siteUrl}/about`,
  description: "「私だけの書斎」の運営者情報・サイト概要・管理人プロフィール",
  mainEntity: {
    "@type": "Person",
    name: "みつき",
    description: "腐女子歴15年。BL漫画・BLCD・オメガバース同人誌を愛するアラサー女性。",
    knowsAbout: ["BL漫画", "BLCD", "オメガバース", "女性向け同人誌", "FANZA", "乙女ゲーム"],
  },
};

export default function AboutPage() {
  return (
    <div style={{ maxWidth: 760, margin: "0 auto", padding: "40px 16px 80px" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumb items={[{ label: "TOP", href: "/" }, { label: "このサイトについて" }]} />

      <p style={{ color: "#b5838d", fontSize: 11, letterSpacing: "0.2em", marginBottom: 8 }}>ABOUT</p>
      <h1 style={{ fontSize: 22, fontWeight: "400", letterSpacing: "0.08em", marginBottom: 12, lineHeight: 1.6 }}>
        このサイトについて
      </h1>
      <p style={{ color: "#999", fontSize: 13, marginBottom: 48, lineHeight: 1.9 }}>
        運営者情報・サイト立ち上げの経緯・管理人プロフィール
      </p>

      {/* 管理人プロフィール */}
      <section style={{ marginBottom: 56 }}>
        <p style={{ fontSize: 11, color: "#b5838d", letterSpacing: "0.15em", marginBottom: 16 }}>PROFILE</p>
        <h2 style={{ fontSize: 16, fontWeight: "400", color: "#1c1c1c", marginBottom: 24, letterSpacing: "0.06em" }}>
          管理人プロフィール
        </h2>

        <div style={{ background: "#faf8f7", border: "1px solid #ede8e5", borderRadius: 8, padding: "28px 24px", marginBottom: 32, display: "flex", gap: 24, alignItems: "flex-start", flexWrap: "wrap" }}>
          {/* アイコン */}
          <div style={{
            width: 80, height: 80, borderRadius: "50%",
            background: "linear-gradient(135deg, #e8d5d8, #ddd0e4)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 32, flexShrink: 0,
          }}>
            📚
          </div>
          <div style={{ flex: 1, minWidth: 200 }}>
            <p style={{ fontSize: 18, fontWeight: "400", color: "#1c1c1c", letterSpacing: "0.06em", marginBottom: 4 }}>みつき</p>
            <p style={{ fontSize: 11, color: "#b5838d", letterSpacing: "0.1em", marginBottom: 12 }}>MITSUKI — サイト管理人</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["腐女子歴15年", "アラサー", "BL沼住人", "BLCD収集癖あり", "オメガバース専科"].map((tag) => (
                <span key={tag} style={{ fontSize: 10, color: "#888", border: "1px solid #e0e0e0", borderRadius: 20, padding: "3px 10px", letterSpacing: "0.04em" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ lineHeight: 2, fontSize: 14, color: "#555" }}>
          <p style={{ marginBottom: 20 }}>
            はじめまして、みつきと申します。アラサー女性・腐女子歴15年のBL沼住人です。
          </p>
          <p style={{ marginBottom: 20 }}>
            学生時代に友人から「これ読んでみて」と手渡された一冊のBL漫画がきっかけで、以来ずっとBLの世界にいます。
            最初は「男の子同士の恋愛……？」と戸惑いましたが、3ページ目あたりで完全に落ちました。あの感覚、忘れられません。
          </p>
          <p style={{ marginBottom: 20 }}>
            今はオメガバースをメインに、年の差・幼なじみ・執着系など守備範囲は広め。BLCDも好きで、特に低音ボイスの囁き系には弱いです。
            FANZAは5年以上使っていて、漫画・BLCD・同人誌を購入してきました。
          </p>
          <p>
            「男性向けのイメージがあって使いにくい」と思っている女性の方に、このサイトが少しでもお役に立てたら嬉しいです。
          </p>
        </div>
      </section>

      {/* 得意ジャンル */}
      <section style={{ marginBottom: 56 }}>
        <p style={{ fontSize: 11, color: "#b5838d", letterSpacing: "0.15em", marginBottom: 16 }}>EXPERTISE</p>
        <h2 style={{ fontSize: 16, fontWeight: "400", color: "#1c1c1c", marginBottom: 24, letterSpacing: "0.06em" }}>
          得意ジャンル・専門領域
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16 }}>
          {[
            { emoji: "🐺", title: "オメガバース", desc: "番制度・フェロモン・発情期など、設定を語らせたら止まりません。甘々〜シリアスまで幅広く読んできました。" },
            { emoji: "🎧", title: "BLCD", desc: "50作品以上を聴いてきた収集癖持ち。声優別・シチュエーション別のおすすめを語れます。" },
            { emoji: "📖", title: "BL漫画・小説", desc: "年の差・執着・幼なじみが特に好き。商業誌から同人誌まで読み続けています。" },
            { emoji: "📁", title: "女性向け同人誌", desc: "商業では読めないニッチな設定を求めて同人誌沼に。FANZAの同人誌セクションは巡回済み。" },
          ].map((item) => (
            <div key={item.title} style={{ background: "#fdf6f7", border: "1px solid #f0e0e4", borderRadius: 8, padding: "20px 16px" }}>
              <span style={{ fontSize: 24, display: "block", marginBottom: 8 }}>{item.emoji}</span>
              <p style={{ fontSize: 13, fontWeight: "500", color: "#1c1c1c", marginBottom: 8, letterSpacing: "0.04em" }}>{item.title}</p>
              <p style={{ fontSize: 12, color: "#888", lineHeight: 1.8 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* サイト立ち上げの経緯 */}
      <section style={{ marginBottom: 56 }}>
        <p style={{ fontSize: 11, color: "#b5838d", letterSpacing: "0.15em", marginBottom: 16 }}>WHY THIS SITE</p>
        <h2 style={{ fontSize: 16, fontWeight: "400", color: "#1c1c1c", marginBottom: 24, letterSpacing: "0.06em" }}>
          このサイトを作った理由
        </h2>
        <div style={{ lineHeight: 2, fontSize: 14, color: "#555" }}>
          <p style={{ marginBottom: 20 }}>
            FANZAを使い始めた当初、困ったことがありました。
            「女性向けコンテンツがどこにあるか分からない」「検索するとすぐ男性向け作品が出てくる」という問題です。
          </p>
          <p style={{ marginBottom: 20 }}>
            FANZAは確かに男性向けコンテンツのイメージが強いですが、実は女性向けのBL・TL・BLCD・乙女ゲーム・同人誌が
            <strong style={{ color: "#1c1c1c", fontWeight: "500" }}>数万点以上</strong>あります。
            知っているかどうかで、楽しめるコンテンツ量が全然違う。
          </p>
          <p style={{ marginBottom: 20 }}>
            「女性目線でFANZAの使い方・おすすめ作品を案内するサイトがあったらいいのに」——そう思って、自分で作ることにしました。
          </p>
          <p>
            腐女子として15年間積み上げてきた知識と、FANZAを5年以上使ってきた経験をもとに、
            実際に読んで・聴いて良かったものだけを正直にご紹介しています。
          </p>
        </div>
      </section>

      {/* 掲載方針 */}
      <section style={{ marginBottom: 56 }}>
        <p style={{ fontSize: 11, color: "#b5838d", letterSpacing: "0.15em", marginBottom: 16 }}>POLICY</p>
        <h2 style={{ fontSize: 16, fontWeight: "400", color: "#1c1c1c", marginBottom: 24, letterSpacing: "0.06em" }}>
          掲載・レビューの方針
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { num: "01", title: "実際に読んだ・聴いた作品のみ紹介", desc: "未確認の作品をおすすめすることはしません。自分が実際に購入して体験したものだけを掲載しています。" },
            { num: "02", title: "アフィリエイトリンクについて", desc: "本サイトはFANZA（DMM）のアフィリエイトプログラムに参加しています。リンクから購入いただいた場合、サイト運営のための報酬が発生することがあります。掲載内容への影響はありません。" },
            { num: "03", title: "ネガティブな感想も正直に", desc: "「良かった」だけでなく「ここが惜しかった」という点も正直に書きます。購入して後悔してほしくないので。" },
            { num: "04", title: "成人向けコンテンツについて", desc: "本サイトは18歳以上の方を対象としています。成人向けコンテンツを取り扱っていますが、不必要に過激な表現は使いません。" },
          ].map((item) => (
            <div key={item.num} style={{ display: "flex", gap: 16, paddingBottom: 16, borderBottom: "1px solid #f5f5f5" }}>
              <span style={{ fontSize: 11, color: "#b5838d", fontWeight: "500", letterSpacing: "0.1em", flexShrink: 0, marginTop: 2, minWidth: 24 }}>{item.num}</span>
              <div>
                <p style={{ fontSize: 13, fontWeight: "500", color: "#1c1c1c", marginBottom: 6, letterSpacing: "0.04em" }}>{item.title}</p>
                <p style={{ fontSize: 12, color: "#888", lineHeight: 1.9 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* サイト基本情報 */}
      <section style={{ marginBottom: 48 }}>
        <p style={{ fontSize: 11, color: "#b5838d", letterSpacing: "0.15em", marginBottom: 16 }}>SITE INFO</p>
        <h2 style={{ fontSize: 16, fontWeight: "400", color: "#1c1c1c", marginBottom: 24, letterSpacing: "0.06em" }}>
          サイト基本情報
        </h2>
        <div style={{ background: "#f9f6f4", borderRadius: 8, padding: "24px 20px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            {[
              { label: "サイト名", value: "私だけの書斎" },
              { label: "URL", value: "https://fanza-best-movies.com" },
              { label: "開設", value: "2025年6月" },
              { label: "運営者", value: "みつき" },
              { label: "テーマ", value: "女性向けBL・乙女・同人誌のFANZAガイド" },
              { label: "対象読者", value: "18歳以上の女性" },
              { label: "提携サービス", value: "FANZA（DMM）アフィリエイトプログラム" },
            ].map((row, i) => (
              <tr key={i} style={{ borderBottom: "1px solid #ede8e5" }}>
                <td style={{ padding: "12px 0", fontSize: 11, color: "#b5838d", letterSpacing: "0.08em", width: 140, verticalAlign: "top" }}>{row.label}</td>
                <td style={{ padding: "12px 0", fontSize: 13, color: "#444", lineHeight: 1.8 }}>{row.value}</td>
              </tr>
            ))}
          </table>
        </div>
      </section>

      {/* リンク */}
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        <Link href="/contact" style={{ color: "#b5838d", fontSize: 12, textDecoration: "none", letterSpacing: "0.1em", borderBottom: "1px solid #e8d0d4", paddingBottom: 2 }}>
          お問い合わせ →
        </Link>
        <Link href="/privacy" style={{ color: "#999", fontSize: 12, textDecoration: "none", letterSpacing: "0.1em", borderBottom: "1px solid #e0e0e0", paddingBottom: 2 }}>
          プライバシーポリシー →
        </Link>
        <Link href="/faq" style={{ color: "#999", fontSize: 12, textDecoration: "none", letterSpacing: "0.1em", borderBottom: "1px solid #e0e0e0", paddingBottom: 2 }}>
          よくある質問 →
        </Link>
      </div>
    </div>
  );
}
