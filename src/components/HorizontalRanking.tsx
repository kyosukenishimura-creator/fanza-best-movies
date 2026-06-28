"use client";
import Image from "next/image";
import Link from "next/link";
import { RankingWork } from "@/lib/ranking";

const rankColors = ["#c9a227", "#a0a0a0", "#b87333"];

export default function HorizontalRanking({ title, works }: { title: string; works: RankingWork[] }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16, paddingBottom: 10, borderBottom: "2px solid #b5838d" }}>
        <h3 style={{ fontSize: 15, fontWeight: "500", letterSpacing: "0.08em", color: "#1c1c1c" }}>{title}</h3>
        <Link href="/ranking" style={{ fontSize: 11, color: "#b5838d", textDecoration: "none", letterSpacing: "0.1em", border: "1px solid #b5838d", padding: "4px 12px", borderRadius: 2 }}>
          もっと見る
        </Link>
      </div>
      <div style={{ display: "flex", gap: 16, overflowX: "auto", paddingBottom: 8 }}>
        {works.map((work) => (
          <a key={work.rank} href={work.linkUrl} target="_blank" rel="noopener noreferrer"
            style={{ textDecoration: "none", flexShrink: 0, width: 110 }}>
            <div style={{ position: "relative", marginBottom: 8 }}>
              <Image
                src={work.imageUrl}
                alt={work.title}
                width={110}
                height={155}
                style={{ objectFit: "cover", display: "block", borderRadius: 2 }}
                unoptimized
              />
              <div style={{
                position: "absolute", top: 0, left: 0,
                background: work.rank <= 3 ? rankColors[work.rank - 1] : "#555",
                color: "white", fontFamily: "Georgia, serif",
                fontSize: 12, fontWeight: "bold",
                width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                {work.rank}
              </div>
            </div>
            <p style={{ fontSize: 11, color: "#333", lineHeight: 1.5, letterSpacing: "0.02em",
              overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" as const }}>
              {work.title}
            </p>
            <p style={{ fontSize: 10, color: "#aaa", marginTop: 2 }}>{work.author}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
