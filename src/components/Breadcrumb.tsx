import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  const siteUrl = "https://fanza-best-movies.com";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${siteUrl}${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "#aaa", marginBottom: 32, flexWrap: "wrap" }}>
        {items.map((item, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {i > 0 && <span style={{ color: "#ddd" }}>›</span>}
            {item.href ? (
              <Link href={item.href} style={{ color: "#b5838d", textDecoration: "none", letterSpacing: "0.05em" }}>
                {item.label}
              </Link>
            ) : (
              <span style={{ color: "#888", letterSpacing: "0.05em" }}>{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
