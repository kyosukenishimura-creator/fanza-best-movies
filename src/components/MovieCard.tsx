import { Movie } from "@/lib/movies";

export default function MovieCard({ movie }: { movie: Movie }) {
  const stars = "★".repeat(Math.floor(movie.rating)) + "☆".repeat(5 - Math.floor(movie.rating));

  return (
    <div style={{
      background: "#1a1a1a",
      border: "1px solid #2a2a2a",
      borderRadius: 8,
      overflow: "hidden",
      transition: "transform 0.2s",
    }}>
      <div style={{ background: "#2a2a2a", height: 180, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
        {movie.rank && (
          <div style={{
            position: "absolute", top: 8, left: 8,
            background: "#e50914", color: "white",
            fontWeight: "bold", fontSize: 13, padding: "2px 10px", borderRadius: 4
          }}>
            #{movie.rank}
          </div>
        )}
        <span style={{ color: "#555", fontSize: 14 }}>サムネイル</span>
      </div>
      <div style={{ padding: 16 }}>
        <p style={{ color: "#aaa", fontSize: 12, marginBottom: 4 }}>{movie.actress}</p>
        <h3 style={{ fontSize: 15, fontWeight: "bold", marginBottom: 8, lineHeight: 1.4 }}>{movie.title}</h3>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <span style={{ color: "#f5a623", fontSize: 14 }}>{stars}</span>
          <span style={{ color: "#aaa", fontSize: 13 }}>{movie.rating} ({movie.reviewCount}件)</span>
        </div>
        <p style={{ color: "#bbb", fontSize: 13, marginBottom: 12, lineHeight: 1.6 }}>{movie.description}</p>
        <a
          href={movie.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block", background: "#e50914", color: "white",
            textAlign: "center", padding: "10px 0", borderRadius: 6,
            fontWeight: "bold", fontSize: 14, textDecoration: "none"
          }}
        >
          FANZAで見る →
        </a>
      </div>
    </div>
  );
}
