import Link from "next/link";

const navLinks = [
  { label: "ランキング", href: "/ranking" },
  { label: "ジャーナル", href: "/blog" },
  { label: "口コミ・レビュー", href: "/review" },
  { label: "セール情報", href: "/sale" },
  { label: "登録ガイド", href: "/guide" },
  { label: "タグ一覧", href: "/tag" },
  { label: "よくある質問", href: "/faq" },
];

const legalLinks = [
  { label: "このサイトについて", href: "/about" },
  { label: "プライバシーポリシー", href: "/privacy" },
  { label: "お問い合わせ", href: "/contact" },
];

const tagLinks = [
  { label: "オメガバース", href: "/tag/omegaverse" },
  { label: "年の差", href: "/tag/toshino-sa" },
  { label: "獣人", href: "/tag/kemono" },
  { label: "純愛", href: "/tag/junai" },
  { label: "溺愛", href: "/tag/dekiai" },
  { label: "異世界", href: "/tag/isekai" },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #ebebeb", background: "#faf8f7", marginTop: 80 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 24px 32px" }}>

        {/* 上段：ロゴ＋説明＋ナビ */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 40, marginBottom: 48 }}>

          {/* ロゴ・説明 */}
          <div>
            <Link href="/" style={{ textDecoration: "none" }}>
              <p style={{ fontFamily: "Georgia, serif", fontSize: 16, letterSpacing: "0.15em", color: "#1c1c1c", marginBottom: 12 }}>私だけの書斎</p>
            </Link>
            <p style={{ color: "#999", fontSize: 12, lineHeight: 2, letterSpacing: "0.03em", marginBottom: 16 }}>
              女性のためのFANZAガイド。<br />
              BL・乙女・女性向け同人の<br />
              おすすめをお届けします。
            </p>
            <p style={{ color: "#bbb", fontSize: 11, lineHeight: 1.9, letterSpacing: "0.02em" }}>
              腐女子歴15年の管理人・みつきが<br />
              実際に読んで良かった作品だけを紹介。
            </p>
          </div>

          {/* コンテンツナビ */}
          <div>
            <p style={{ color: "#b5838d", fontSize: 10, letterSpacing: "0.2em", marginBottom: 16 }}>CONTENTS</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ color: "#666", fontSize: 12, textDecoration: "none", letterSpacing: "0.05em" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* サポート＋タグ */}
          <div>
            <p style={{ color: "#b5838d", fontSize: 10, letterSpacing: "0.2em", marginBottom: 16 }}>SUPPORT</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ color: "#666", fontSize: 12, textDecoration: "none", letterSpacing: "0.05em" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <p style={{ color: "#b5838d", fontSize: 10, letterSpacing: "0.2em", marginBottom: 12 }}>TAG</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {tagLinks.map((tag) => (
                <Link key={tag.href} href={tag.href} style={{ color: "#999", fontSize: 11, textDecoration: "none", background: "#f0ebe9", padding: "3px 8px", borderRadius: 2 }}>
                  {tag.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* 区切り */}
        <div style={{ borderTop: "1px solid #e8e8e8", paddingTop: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              <p style={{ color: "#ccc", fontSize: 11, letterSpacing: "0.03em" }}>
                当サイトはFANZAアフィリエイトプログラムに参加しています。
              </p>
              <p style={{ color: "#ccc", fontSize: 11 }}>18歳以上の方を対象としています。</p>
            </div>
            <p style={{ color: "#ccc", fontSize: 11 }}>© 2025-2026 私だけの書斎</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
