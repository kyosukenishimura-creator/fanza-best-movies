import Link from "next/link";
import MovieCard from "@/components/MovieCard";
import ScrollReveal from "@/components/ScrollReveal";
import HorizontalRanking from "@/components/HorizontalRanking";
import { movies } from "@/lib/movies";
import { posts } from "@/lib/posts";
import { mangaRanking, novelRanking, blcdRanking } from "@/lib/ranking";

export default function Home() {
  return (
    <div>

      {/* ヒーロー */}
      <section style={{ background: "#f5f0ee", padding: "96px 24px", textAlign: "center" }}>
        <p className="fade-in-delay-1" style={{ color: "#b5838d", fontSize: 11, letterSpacing: "0.2em", marginBottom: 20 }}>私だけの書斎</p>
        <h1 className="fade-in-delay-2" style={{ fontSize: 28, fontWeight: "400", lineHeight: 1.9, color: "#1c1c1c", letterSpacing: "0.1em", marginBottom: 24, fontFamily: "Georgia, serif" }}>
          BL・乙女・女性向け同人を<br />もっと、自分らしく。
        </h1>
        <p className="fade-in-delay-3" style={{ color: "#888", fontSize: 13, marginBottom: 40, lineHeight: 2, letterSpacing: "0.08em" }}>
          女性目線で選んだランキング・口コミ・お得情報をお届けします
        </p>
        <div className="fade-in-delay-3">
          <Link href="/ranking" className="link-hover" style={{
            color: "#1c1c1c", fontSize: 12, letterSpacing: "0.2em",
            textDecoration: "none", borderBottom: "1px solid #1c1c1c", paddingBottom: 4
          }}>
            ranking を見る
          </Link>
        </div>
      </section>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>

        {/* 注意書き */}
        <p style={{ color: "#bbb", fontSize: 11, textAlign: "center", padding: "24px 0", letterSpacing: "0.05em", borderBottom: "1px solid #ebebeb" }}>
          ※ 本サイトは18歳以上の方を対象としています
        </p>

        {/* ジャンル */}
        <ScrollReveal>
          <section style={{ padding: "64px 0 48px" }}>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
              {["BL動画", "乙女ゲーム", "女性向け同人", "TL漫画", "腐女子向け", "イケボ朗読"].map((g, i) => (
                <span key={i} className="link-hover" style={{
                  color: "#888", fontSize: 12, letterSpacing: "0.1em",
                  padding: "8px 20px", border: "1px solid #ddd", cursor: "pointer"
                }}>
                  {g}
                </span>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* ランキング */}
        <section style={{ paddingBottom: 80 }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <p style={{ color: "#b5838d", fontSize: 11, letterSpacing: "0.2em", marginBottom: 8 }}>RANKING</p>
              <h2 style={{ fontSize: 20, fontWeight: "400", color: "#1c1c1c", letterSpacing: "0.1em" }}>今週の人気作品</h2>
            </div>
          </ScrollReveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 40 }}>
            {movies.map((movie, i) => (
              <ScrollReveal key={movie.id} delay={i * 150}>
                <MovieCard movie={movie} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginTop: 48 }}>
              <Link href="/ranking" className="link-hover" style={{
                color: "#1c1c1c", fontSize: 11, letterSpacing: "0.2em",
                textDecoration: "none", borderBottom: "1px solid #1c1c1c", paddingBottom: 4
              }}>
                view more
              </Link>
            </div>
          </ScrollReveal>
        </section>

        {/* タグランキング */}
        <section style={{ borderTop: "1px solid #ebebeb", paddingTop: 80, paddingBottom: 80 }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <p style={{ color: "#b5838d", fontSize: 11, letterSpacing: "0.2em", marginBottom: 8 }}>TAG RANKING</p>
              <h2 style={{ fontSize: 20, fontWeight: "400", color: "#1c1c1c", letterSpacing: "0.1em" }}>タグで探す</h2>
            </div>
          </ScrollReveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
            {[
              { emoji: "🐺", name: "オメガバース", slug: "omegaverse", desc: "運命の番。本能と恋愛が絡み合う人気ジャンル。" },
              { emoji: "🎓", name: "年の差", slug: "toshino-sa", desc: "大人×若者の禁断の恋。ドキドキが止まらない。" },
              { emoji: "🐾", name: "獣人", slug: "kemono", desc: "ケモ耳・しっぽ・本能的な愛情表現が人気。" },
            ].map((tag, i) => (
              <ScrollReveal key={tag.slug} delay={i * 100}>
                <Link href={`/tag/${tag.slug}`} className="card-hover link-hover" style={{ textDecoration: "none", display: "block", border: "1px solid #ebebeb", padding: 24, borderRadius: 8 }}>
                  <span style={{ fontSize: 28, display: "block", marginBottom: 10 }}>{tag.emoji}</span>
                  <h3 style={{ fontSize: 15, fontWeight: "400", color: "#1c1c1c", marginBottom: 6, letterSpacing: "0.08em" }}>{tag.name}</h3>
                  <p style={{ color: "#999", fontSize: 12, lineHeight: 1.8 }}>{tag.desc}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginTop: 32 }}>
              <Link href="/tag" className="link-hover" style={{ color: "#1c1c1c", fontSize: 11, letterSpacing: "0.2em", textDecoration: "none", borderBottom: "1px solid #1c1c1c", paddingBottom: 4 }}>
                view more
              </Link>
            </div>
          </ScrollReveal>
        </section>

        {/* 書影ランキング */}
        <section style={{ borderTop: "1px solid #ebebeb", paddingTop: 64, paddingBottom: 64 }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <p style={{ color: "#b5838d", fontSize: 11, letterSpacing: "0.2em", marginBottom: 8 }}>RANKING</p>
              <h2 style={{ fontSize: 20, fontWeight: "400", color: "#1c1c1c", letterSpacing: "0.1em" }}>評価ランキング（10日間）</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <HorizontalRanking title="漫画（コミック）" works={mangaRanking} />
          </ScrollReveal>
          <ScrollReveal>
            <HorizontalRanking title="小説" works={novelRanking} />
          </ScrollReveal>
          <ScrollReveal>
            <HorizontalRanking title="BLCD" works={blcdRanking} />
          </ScrollReveal>
        </section>

        {/* ジャーナル */}
        <section style={{ borderTop: "1px solid #ebebeb", paddingTop: 80, paddingBottom: 80 }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <p style={{ color: "#b5838d", fontSize: 11, letterSpacing: "0.2em", marginBottom: 8 }}>OUR JOURNAL</p>
              <h2 style={{ fontSize: 20, fontWeight: "400", color: "#1c1c1c", letterSpacing: "0.1em" }}>読みものと、おすすめ</h2>
            </div>
          </ScrollReveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 40 }}>
            {posts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 150}>
                <Link href={`/blog/${post.slug}`} className="card-hover link-hover" style={{ textDecoration: "none", display: "block" }}>
                  <div style={{ background: "#f9f6f4", height: 180, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                    <span style={{ color: "#ccc", fontSize: 13 }}>image</span>
                  </div>
                  <p style={{ color: "#b5838d", fontSize: 11, letterSpacing: "0.1em", marginBottom: 6 }}>{post.category}</p>
                  <h3 style={{ fontSize: 14, fontWeight: "400", color: "#1c1c1c", lineHeight: 1.7, letterSpacing: "0.05em" }}>{post.title}</h3>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginTop: 48 }}>
              <Link href="/blog" className="link-hover" style={{
                color: "#1c1c1c", fontSize: 11, letterSpacing: "0.2em",
                textDecoration: "none", borderBottom: "1px solid #1c1c1c", paddingBottom: 4
              }}>
                view more
              </Link>
            </div>
          </ScrollReveal>
        </section>

      </div>
    </div>
  );
}
