import Link from "next/link";

export default function Header() {
  return (
    <header style={{ background: "#fff", borderBottom: "2px solid #e50914", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
        <Link href="/" style={{ color: "#e50914", fontWeight: "bold", fontSize: 22, textDecoration: "none", letterSpacing: 1 }}>
          FANZA動画ベスト
        </Link>
        <nav style={{ display: "flex", gap: 24 }}>
          <Link href="/ranking" style={{ color: "#333", textDecoration: "none", fontSize: 14, fontWeight: "500" }}>ランキング</Link>
          <Link href="/review" style={{ color: "#333", textDecoration: "none", fontSize: 14, fontWeight: "500" }}>レビュー</Link>
          <Link href="/genre" style={{ color: "#333", textDecoration: "none", fontSize: 14, fontWeight: "500" }}>ジャンル</Link>
        </nav>
      </div>
    </header>
  );
}
