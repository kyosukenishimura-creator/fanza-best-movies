"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const navItems = [
  { label: "ranking", href: "/ranking" },
  { label: "journal", href: "/blog" },
  { label: "sale", href: "/sale" },
  { label: "guide", href: "/guide" },
  { label: "tag", href: "/tag" },
  { label: "faq", href: "/faq" },
];

export default function Header() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/blog?q=${encodeURIComponent(query.trim())}`);
    setQuery("");
  };

  return (
    <header style={{ background: "#fff", borderBottom: "1px solid #ebebeb", position: "sticky", top: 0, zIndex: 100 }}>
      {/* 18歳確認バー */}
      <div style={{ background: "#f5f0ee", textAlign: "center", padding: "5px 0", fontSize: 10, color: "#b5838d", letterSpacing: "0.12em" }}>
        本サイトは18歳以上の方を対象としています
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64, gap: 32 }}>

        {/* ロゴ */}
        <Link href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
          <span style={{ color: "#1c1c1c", fontWeight: "400", fontSize: 15, letterSpacing: "0.15em", fontFamily: "Georgia, serif" }}>私だけの書斎</span>
        </Link>

        {/* ナビ */}
        <nav style={{ display: "flex", gap: 24, alignItems: "center", flexShrink: 0 }}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} style={{ color: "#555", textDecoration: "none", fontSize: 11, letterSpacing: "0.12em" }}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* 常時表示の検索バー（右端） */}
        <form onSubmit={handleSearch} style={{ display: "flex", gap: 0, flexShrink: 0 }}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="キーワードで検索"
            style={{
              width: 180,
              padding: "8px 12px",
              border: "1px solid #e0e0e0",
              borderRight: "none",
              borderRadius: "4px 0 0 4px",
              fontSize: 12,
              color: "#1c1c1c",
              outline: "none",
              background: "#faf8f7",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "8px 12px",
              background: "#b5838d",
              color: "#fff",
              border: "none",
              borderRadius: "0 4px 4px 0",
              fontSize: 11,
              cursor: "pointer",
              letterSpacing: "0.05em",
            }}
          >
            検索
          </button>
        </form>
      </div>
    </header>
  );
}
