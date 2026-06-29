import Link from "next/link";

const navLinks = [
  { label: "ランキング", href: "/ranking" },
  { label: "ジャーナル", href: "/blog" },
  { label: "セール情報", href: "/sale" },
  { label: "登録ガイド", href: "/guide" },
  { label: "タグ一覧", href: "/tag" },
  { label: "よくある質問", href: "/faq" },
];

const legalLinks = [
  { label: "プライバシーポリシー", href: "/privacy" },
  { label: "お問い合わせ", href: "/contact" },
  { label: "運営者情報", href: "/about" },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #ebebeb", background: "#faf8f7", marginTop: 80 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 24px 32px" }}>

        {/* 上段：ロゴ＋説明＋SNS */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 40, marginBottom: 48 }}>

          {/* ロゴ・説明 */}
          <div>
            <p style={{ fontFamily: "Georgia, serif", fontSize: 16, letterSpacing: "0.15em", color: "#1c1c1c", marginBottom: 12 }}>私だけの書斎</p>
            <p style={{ color: "#999", fontSize: 12, lineHeight: 2, letterSpacing: "0.03em" }}>
              女性のためのFANZAガイド。<br />
              BL・乙女・女性向け同人の<br />
              おすすめをお届けします。
            </p>
            {/* SNS */}
            <div style={{ display: "flex", gap: 16, marginTop: 20 }}>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"
                style={{ color: "#888", fontSize: 11, letterSpacing: "0.1em", textDecoration: "none", borderBottom: "1px solid #ddd", paddingBottom: 2 }}>
                X (Twitter)
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"
                style={{ color: "#888", fontSize: 11, letterSpacing: "0.1em", textDecoration: "none", borderBottom: "1px solid #ddd", paddingBottom: 2 }}>
                Instagram
              </a>
            </div>
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

          {/* タグ一覧・サポート */}
          <div>
            <p style={{ color: "#b5838d", fontSize: 10, letterSpacing: "0.2em", marginBottom: 16 }}>SUPPORT</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ color: "#666", fontSize: 12, textDecoration: "none", letterSpacing: "0.05em" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <p style={{ color: "#b5838d", fontSize: 10, letterSpacing: "0.2em", marginBottom: 12, marginTop: 28 }}>TAG</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["オメガバース", "年の差", "獣人", "純愛", "溺愛", "異世界", "スポーツ"].map((tag) => (
                <Link key={tag} href="/tag" style={{ color: "#999", fontSize: 11, textDecoration: "none", background: "#f0ebe9", padding: "3px 8px", borderRadius: 2 }}>
                  {tag}
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
            <p style={{ color: "#ccc", fontSize: 11 }}>© 2025 私だけの書斎</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
