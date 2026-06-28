import Link from "next/link";
import MovieCard from "@/components/MovieCard";
import { movies } from "@/lib/movies";
import { posts } from "@/lib/posts";

export default function Home() {
  return (
    <div>

      {/* ヒーロー */}
      <section style={{ background: "#f5f0ee", padding: "96px 24px", textAlign: "center" }}>
        <p style={{ color: "#b5838d", fontSize: 11, letterSpacing: "0.2em", marginBottom: 20 }}>私だけの書斎</p>
        <h1 style={{ fontSize: 28, fontWeight: "400", lineHeight: 1.9, color: "#1c1c1c", letterSpacing: "0.1em", marginBottom: 24, fontFamily: "Georgia, serif" }}>
          BL・乙女・女性向け同人を<br />もっと、自分らしく。
        </h1>
        <p style={{ color: "#888", fontSize: 13, marginBottom: 40, lineHeight: 2, letterSpacing: "0.08em" }}>
          女性目線で選んだランキング・口コミ・お得情報をお届けします
        </p>
        <Link href="/ranking" style={{
          color: "#1c1c1c", fontSize: 12, letterSpacing: "0.2em",
          textDecoration: "none", borderBottom: "1px solid #1c1c1c", paddingBottom: 4
        }}>
          ranking を見る
        </Link>
      </section>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>

        {/* 注意書き */}
        <p style={{ color: "#bbb", fontSize: 11, textAlign: "center", padding: "24px 0", letterSpacing: "0.05em", borderBottom: "1px solid #ebebeb" }}>
          ※ 本サイトは18歳以上の方を対象としています
        </p>

        {/* ジャンル */}
        <section style={{ padding: "64px 0 48px" }}>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            {["BL動画", "乙女ゲーム", "女性向け同人", "TL漫画", "腐女子向け", "イケボ朗読"].map((g, i) => (
              <span key={i} style={{
                color: "#888", fontSize: 12, letterSpacing: "0.1em",
                padding: "8px 20px", border: "1px solid #ddd", borderRadius: 0, cursor: "pointer"
              }}>
                {g}
              </span>
            ))}
          </div>
        </section>

        {/* ランキング */}
        <section style={{ paddingBottom: 80 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: "#b5838d", fontSize: 11, letterSpacing: "0.2em", marginBottom: 8 }}>RANKING</p>
            <h2 style={{ fontSize: 20, fontWeight: "400", color: "#1c1c1c", letterSpacing: "0.1em" }}>今週の人気作品</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 40 }}>
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link href="/ranking" style={{
              color: "#1c1c1c", fontSize: 11, letterSpacing: "0.2em",
              textDecoration: "none", borderBottom: "1px solid #1c1c1c", paddingBottom: 4
            }}>
              view more
            </Link>
          </div>
        </section>

        {/* ジャーナル（ブログ） */}
        <section style={{ borderTop: "1px solid #ebebeb", paddingTop: 80, paddingBottom: 80 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: "#b5838d", fontSize: 11, letterSpacing: "0.2em", marginBottom: 8 }}>OUR JOURNAL</p>
            <h2 style={{ fontSize: 20, fontWeight: "400", color: "#1c1c1c", letterSpacing: "0.1em" }}>読みものと、おすすめ</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 40 }}>
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                <div style={{ background: "#f9f6f4", height: 180, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <span style={{ color: "#ccc", fontSize: 13 }}>image</span>
                </div>
                <p style={{ color: "#b5838d", fontSize: 11, letterSpacing: "0.1em", marginBottom: 6 }}>{post.category}</p>
                <h3 style={{ fontSize: 14, fontWeight: "400", color: "#1c1c1c", lineHeight: 1.7, letterSpacing: "0.05em" }}>{post.title}</h3>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link href="/blog" style={{
              color: "#1c1c1c", fontSize: 11, letterSpacing: "0.2em",
              textDecoration: "none", borderBottom: "1px solid #1c1c1c", paddingBottom: 4
            }}>
              view more
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
