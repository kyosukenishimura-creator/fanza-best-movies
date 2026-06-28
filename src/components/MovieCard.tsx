import { Movie } from "@/lib/movies";

export default function MovieCard({ movie }: { movie: Movie }) {
  const stars = "★".repeat(Math.floor(movie.rating)) + "☆".repeat(5 - Math.floor(movie.rating));

  return (
    <div style={{
      background: "#fff",
      border: "1px solid #f0d0e8",
      borderRadius: 12,
      overflow: "hidden",
      boxShadow: "0 2px 12px rgba(214,51,132,0.07)",
    }}>
      <div style={{ background: "#fdf0f6", height: 180, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
        {movie.rank && (
          <div style={{
            position: "absolute", top: 8, left: 8,
            background: "#d63384", color: "white",
            fontWeight: "bold", fontSize: 13, padding: "2px 10px", borderRadius: 20
          }}>
            #{movie.rank}
          </div>
        )}
        <span style={{ color: "#e0a0c0", fontSize: 14 }}>サムネイル</span>
      </div>
      <div style={{ padding: 16 }}>
        <div style={{ display: "flex", gap: 6, marginBottom: 8, flexWrap: "wrap" }}>
          {movie.genre.map((g, i) => (
            <span key={i} style={{ background: "#fff0f6", color: "#d63384", fontSize: 11, padding: "2px 8px", borderRadius: 20, fontWeight: "bold" }}>{g}</span>
          ))}
        </div>
        <h3 style={{ fontSize: 15, fontWeight: "bold", marginBottom: 6, lineHeight: 1.4, color: "#2a2a2a" }}>{movie.title}</h3>
        <p style={{ color: "#aaa", fontSize: 12, marginBottom: 6 }}>{movie.author}</p>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <span style={{ color: "#f5a623", fontSize: 14 }}>{stars}</span>
          <span style={{ color: "#aaa", fontSize: 12 }}>{movie.rating} ({movie.reviewCount}件)</span>
        </div>
        <p style={{ color: "#666", fontSize: 13, marginBottom: 14, lineHeight: 1.7 }}>{movie.description}</p>
        <a
          href={movie.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block", background: "#d63384", color: "white",
            textAlign: "center", padding: "10px 0", borderRadius: 8,
            fontWeight: "bold", fontSize: 14, textDecoration: "none"
          }}
        >
          FANZAで見る →
        </a>
      </div>
    </div>
  );
}
