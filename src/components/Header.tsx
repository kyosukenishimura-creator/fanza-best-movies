import Link from "next/link";

export default function Header() {
  return (
    <header style={{ background: "#fff", borderBottom: "2px solid #d63384", boxShadow: "0 2px 8px rgba(214,51,132,0.08)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{ color: "#d63384", fontWeight: "bold", fontSize: 20, letterSpacing: 1 }}>✨ FANZA女性向けナビ</span>
        </Link>
        <nav style={{ display: "flex", gap: 24 }}>
          <Link href="/ranking" style={{ color: "#444", textDecoration: "none", fontSize: 14, fontWeight: "500" }}>ランキング</Link>
          <Link href="/blog" style={{ color: "#444", textDecoration: "none", fontSize: 14, fontWeight: "500" }}>ブログ</Link>
          <Link href="/review" style={{ color: "#444", textDecoration: "none", fontSize: 14, fontWeight: "500" }}>レビュー</Link>
          <Link href="/genre" style={{ color: "#444", textDecoration: "none", fontSize: 14, fontWeight: "500" }}>ジャンル</Link>
        </nav>
      </div>
    </header>
  );
}
