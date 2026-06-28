import MovieCard from "@/components/MovieCard";
import { movies } from "@/lib/movies";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FANZAランキング | 人気動画TOP20",
  description: "FANZAで人気の動画をランキング形式でご紹介。毎週更新中。",
};

export default function RankingPage() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 16px" }}>
      <h1 style={{ fontSize: 28, fontWeight: "bold", marginBottom: 8 }}>🏆 FANZAランキング</h1>
      <p style={{ color: "#aaa", marginBottom: 32 }}>FANZAで今週最も人気の作品TOP20</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
