import Link from "next/link";

export default function Header() {
  return (
    <header style={{ background: "#fff", borderBottom: "1px solid #ebebeb" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{ color: "#1c1c1c", fontWeight: "400", fontSize: 16, letterSpacing: "0.15em", fontFamily: "Georgia, serif" }}>私だけの書斎</span>
        </Link>
        <nav style={{ display: "flex", gap: 32 }}>
          {[
            { label: "ranking", href: "/ranking" },
            { label: "journal", href: "/blog" },
            { label: "sale", href: "/sale" },
            { label: "guide", href: "/guide" },
            { label: "tag", href: "/tag" },
          ].map((item) => (
            <Link key={item.href} href={item.href} style={{ color: "#555", textDecoration: "none", fontSize: 12, letterSpacing: "0.12em" }}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
