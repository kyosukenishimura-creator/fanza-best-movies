import MovieCard from "@/components/MovieCard";
import HorizontalRanking from "@/components/HorizontalRanking";
import Breadcrumb from "@/components/Breadcrumb";
import { movies } from "@/lib/movies";
import { mangaRanking, novelRanking, blcdRanking } from "@/lib/ranking";
import type { Metadata } from "next";

const siteUrl = "https://fanza-best-movies.com";

export const metadata: Metadata = {
  title: "BL・女性向けランキング【漫画・小説・BLCD】",
  description: "FANZAで人気の女性向けBL漫画・小説・BLCDをランキング形式でご紹介。オメガバース・年の差・獣人など人気ジャンル別に毎週更新。",
  keywords: ["BL ランキング", "女性向け FANZA", "BL漫画 おすすめ", "BL小説 おすすめ", "BLCD おすすめ"],
  alternates: { canonical: `${siteUrl}/ranking` },
  openGraph: {
    title: "BL・女性向けランキング【漫画・小説・BLCD】| 私だけの書斎",
    description: "FANZAで人気の女性向けBL漫画・小説・BLCDをランキング形式でご紹介。",
    url: `${siteUrl}/ranking`,
  },
};

export default function RankingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "BL・女性向け人気ランキング",
    description: "FANZAで人気の女性向けBL作品ランキング",
    url: `${siteUrl}/ranking`,
  };

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumb items={[{ label: "TOP", href: "/" }, { label: "ランキング" }]} />

      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <p style={{ color: "#b5838d", fontSize: 11, letterSpacing: "0.2em", marginBottom: 8 }}>RANKING</p>
        <h1 style={{ fontSize: 24, fontWeight: "400", letterSpacing: "0.1em", marginBottom: 8 }}>BL・女性向けランキング</h1>
        <p style={{ color: "#999", fontSize: 13 }}>漫画・小説・BLCDの人気作品を毎週更新</p>
      </div>

      <HorizontalRanking title="漫画（コミック）" works={mangaRanking} />
      <HorizontalRanking title="小説" works={novelRanking} />
      <HorizontalRanking title="BLCD" works={blcdRanking} />

      <div style={{ marginTop: 56 }}>
        <h2 style={{ fontSize: 18, fontWeight: "400", letterSpacing: "0.08em", marginBottom: 24, paddingBottom: 8, borderBottom: "1px solid #ebebeb" }}>注目作品</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
