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
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/blog?q=${encodeURIComponent(query.trim())}`);
    setSearchOpen(false);
    setQuery("");
  };

  return (
    <header style={{ background: "#fff", borderBottom: "1px solid #ebebeb", position: "sticky", top: 0, zIndex: 100 }}>
      {/* 上部：18歳確認バー */}
      <div style={{ background: "#f5f0ee", textAlign: "center", padding: "5px 0", fontSize: 10, color: "#b5838d", letterSpacing: "0.12em" }}>
        本サイトは18歳以上の方を対象としています
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>

        {/* ロゴ */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{ color: "#1c1c1c", fontWeight: "400", fontSize: 15, letterSpacing: "0.15em", fontFamily: "Georgia, serif" }}>私だけの書斎</span>
        </Link>

        {/* ナビ */}
        <nav style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} style={{ color: "#555", textDecoration: "none", fontSize: 11, letterSpacing: "0.12em" }}>
              {item.label}
            </Link>
          ))}

          {/* 検索ボタン */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", color: searchOpen ? "#b5838d" : "#555", fontSize: 11, letterSpacing: "0.12em", padding: 0, fontFamily: "inherit" }}
            aria-label="検索"
          >
            {searchOpen ? "close" : "search"}
          </button>
        </nav>
      </div>

      {/* 検索バー（展開時） */}
      {searchOpen && (
        <div style={{ borderTop: "1px solid #f0f0f0", background: "#faf8f7", padding: "16px 24px" }}>
          <form onSubmit={handleSearch} style={{ maxWidth: 600, margin: "0 auto", display: "flex", gap: 10 }}>
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="BL、オメガバース、声優名などで検索…"
              style={{ flex: 1, padding: "10px 14px", border: "1px solid #e0e0e0", borderRadius: 4, fontSize: 13, color: "#1c1c1c", outline: "none", background: "#fff" }}
            />
            <button
              type="submit"
              style={{ padding: "10px 20px", background: "#1c1c1c", color: "#fff", border: "none", borderRadius: 4, fontSize: 11, letterSpacing: "0.1em", cursor: "pointer" }}
            >
              検索
            </button>
          </form>
        </div>
      )}
    </header>
  );
}
