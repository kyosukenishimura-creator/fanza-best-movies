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
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/blog?q=${encodeURIComponent(query.trim())}`);
    setQuery("");
    setMenuOpen(false);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <style>{`
        .header-nav { display: flex; }
        .header-search { display: flex; }
        .header-hamburger { display: none; }
        .header-mobile-menu { display: none; }

        @media (max-width: 768px) {
          .header-nav { display: none; }
          .header-search { display: none; }
          .header-hamburger { display: flex; }
          .header-mobile-menu { display: block; }
        }
      `}</style>

      <header style={{ background: "#fff", borderBottom: "1px solid #ebebeb", position: "sticky", top: 0, zIndex: 100 }}>
        {/* 18歳確認バー */}
        <div style={{ background: "#f5f0ee", textAlign: "center", padding: "5px 0", fontSize: 10, color: "#b5838d", letterSpacing: "0.12em" }}>
          本サイトは18歳以上の方を対象としています
        </div>

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60, gap: 24 }}>

          {/* ロゴ */}
          <Link href="/" onClick={closeMenu} style={{ textDecoration: "none", flexShrink: 0 }}>
            <span style={{ color: "#1c1c1c", fontWeight: "400", fontSize: 15, letterSpacing: "0.15em", fontFamily: "Georgia, serif" }}>私だけの書斎</span>
          </Link>

          {/* デスクトップ：ナビ */}
          <nav className="header-nav" style={{ gap: 24, alignItems: "center", flexShrink: 0 }}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} style={{ color: "#555", textDecoration: "none", fontSize: 11, letterSpacing: "0.12em" }}>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* デスクトップ：検索バー */}
          <form className="header-search" onSubmit={handleSearch} style={{ gap: 0, flexShrink: 0 }}>
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

          {/* モバイル：ハンバーガーボタン */}
          <button
            className="header-hamburger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              gap: 5,
              flexShrink: 0,
            }}
          >
            <span style={{
              display: "block", width: 22, height: 1.5,
              background: "#1c1c1c",
              transition: "transform 0.25s, opacity 0.25s",
              transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none",
            }} />
            <span style={{
              display: "block", width: 22, height: 1.5,
              background: "#1c1c1c",
              transition: "opacity 0.2s",
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: "block", width: 22, height: 1.5,
              background: "#1c1c1c",
              transition: "transform 0.25s, opacity 0.25s",
              transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
            }} />
          </button>
        </div>

        {/* モバイル：ドロワーメニュー */}
        <div
          className="header-mobile-menu"
          style={{
            background: "#fff",
            borderTop: "1px solid #ebebeb",
            overflow: "hidden",
            maxHeight: menuOpen ? 400 : 0,
            transition: "max-height 0.3s ease",
          }}
        >
          <div style={{ padding: "20px 24px 28px" }}>
            {/* モバイル検索 */}
            <form onSubmit={handleSearch} style={{ display: "flex", marginBottom: 24 }}>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="キーワードで検索"
                style={{
                  flex: 1,
                  padding: "10px 14px",
                  border: "1px solid #e0e0e0",
                  borderRight: "none",
                  borderRadius: "4px 0 0 4px",
                  fontSize: 13,
                  color: "#1c1c1c",
                  outline: "none",
                  background: "#faf8f7",
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "10px 16px",
                  background: "#b5838d",
                  color: "#fff",
                  border: "none",
                  borderRadius: "0 4px 4px 0",
                  fontSize: 12,
                  cursor: "pointer",
                }}
              >
                検索
              </button>
            </form>

            {/* モバイルナビ */}
            <nav style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  style={{
                    color: "#555",
                    textDecoration: "none",
                    fontSize: 13,
                    letterSpacing: "0.12em",
                    padding: "13px 0",
                    borderBottom: "1px solid #f5f5f5",
                    display: "block",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
