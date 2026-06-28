import { Movie } from "@/lib/movies";

export default function MovieCard({ movie }: { movie: Movie }) {
  const rating = movie.rating.toFixed(1);

  return (
    <div className="card-hover" style={{ background: "#fff" }}>
      <div style={{ background: "#f5f0ee", height: 220, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", marginBottom: 16, overflow: "hidden" }}>
        {movie.rank && (
          <div style={{ position: "absolute", top: 12, left: 12, color: "#b5838d", fontFamily: "Georgia, serif", fontSize: 12, letterSpacing: "0.1em" }}>
            0{movie.rank}
          </div>
        )}
        <span style={{ color: "#ccc", fontSize: 13 }}>image</span>
      </div>
      <div style={{ display: "flex", gap: 6, marginBottom: 8, flexWrap: "wrap" }}>
        {movie.genre.map((g, i) => (
          <span key={i} style={{ color: "#b5838d", fontSize: 11, letterSpacing: "0.08em" }}>{g}</span>
        ))}
      </div>
      <h3 style={{ fontSize: 14, fontWeight: "400", marginBottom: 6, lineHeight: 1.6, color: "#1c1c1c", letterSpacing: "0.05em" }}>{movie.title}</h3>
      <p style={{ color: "#aaa", fontSize: 12, marginBottom: 8, letterSpacing: "0.05em" }}>{movie.author}</p>
      <p style={{ color: "#777", fontSize: 12, marginBottom: 16, lineHeight: 1.8 }}>{movie.description}</p>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ color: "#b5838d", fontSize: 12 }}>★ {rating}</span>
        <a href={movie.affiliateUrl} target="_blank" rel="noopener noreferrer" className="link-hover"
          style={{ color: "#1c1c1c", fontSize: 11, letterSpacing: "0.12em", textDecoration: "none", borderBottom: "1px solid #1c1c1c", paddingBottom: 2 }}>
          view more →
        </a>
      </div>
    </div>
  );
}
