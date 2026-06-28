import Link from "next/link";
import MovieCard from "@/components/MovieCard";
import { movies } from "@/lib/movies";

export default function Home() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px" }}>

      {/* ヒーロー */}
      <section style={{
        padding: "56px 0 40px", textAlign: "center",
        background: "linear-gradient(135deg, #fff0f6 0%, #f3e8ff 100%)",
        margin: "0 -16px", padding: "56px 16px 40px"
      }}>
        <p style={{ color: "#d63384", fontWeight: "bold", fontSize: 13, marginBottom: 8, letterSpacing: 2 }}>✨ 女性のための FANZAガイド</p>
        <h1 style={{ fontSize: 30, fontWeight: "bold", marginBottom: 12, lineHeight: 1.5, color: "#2a2a2a" }}>
          BL・乙女・女性向け同人を<br />もっと楽しもう
        </h1>
        <p style={{ color: "#888", fontSize: 15, marginBottom: 28 }}>
          口コミ・ランキング・お得情報を女性目線でお届け
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/ranking" style={{
            background: "#d63384", color: "white", padding: "13px 28px",
            borderRadius: 30, fontWeight: "bold", fontSize: 15, textDecoration: "none"
          }}>
            ランキングを見る
          </Link>
          <Link href="/blog" style={{
            background: "#fff", color: "#d63384", padding: "13px 28px",
            borderRadius: 30, fontWeight: "bold", fontSize: 15, textDecoration: "none",
            border: "2px solid #d63384"
          }}>
            ブログを読む
          </Link>
        </div>
      </section>

      <div style={{ padding: "32px 0" }}>

        {/* 注意書き */}
        <div style={{ background: "#fff8f0", border: "1px solid #ffd0a0", borderRadius: 8, padding: "10px 16px", marginBottom: 32, fontSize: 13, color: "#c06000" }}>
          ⚠️ 本サイトは18歳以上の方を対象としています。18歳未満の方はご利用をお控えください。
        </div>

        {/* ジャンルバッジ */}
        <section style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {["BL動画", "乙女ゲーム", "女性向け同人", "TL漫画", "腐女子向け", "イケボ朗読"].map((g, i) => (
              <span key={i} style={{
                background: i % 2 === 0 ? "#fff0f6" : "#f3e8ff",
                color: i % 2 === 0 ? "#d63384" : "#7c3aed",
                padding: "8px 18px", borderRadius: 30, fontSize: 14, fontWeight: "bold", cursor: "pointer"
              }}>
                {g}
              </span>
            ))}
          </div>
        </section>

        {/* 人気ランキング */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20, paddingBottom: 8, borderBottom: "2px solid #d63384", color: "#2a2a2a" }}>
            💕 今週の人気ランキング TOP3
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 24 }}>
            <Link href="/ranking" style={{
              border: "2px solid #d63384", color: "#d63384", padding: "10px 32px",
              borderRadius: 30, fontWeight: "bold", textDecoration: "none", fontSize: 15
            }}>
              もっと見る
            </Link>
          </div>
        </section>

        {/* 特徴 */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20, paddingBottom: 8, borderBottom: "2px solid #d63384", color: "#2a2a2a" }}>
            FANZAが女性に選ばれる理由
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
            {[
              { icon: "📚", title: "BL作品が充実", desc: "国内最大級のBL・女性向け同人コンテンツが揃っています。" },
              { icon: "🔒", title: "匿名・安心", desc: "購入履歴は完全非公開。安心してお楽しみいただけます。" },
              { icon: "📱", title: "スマホで読める", desc: "いつでもどこでも、スマホから快適に楽しめます。" },
              { icon: "💰", title: "セール・クーポン", desc: "定期的なセールやクーポンでお得に購入できます。" },
            ].map((item, i) => (
              <div key={i} style={{ background: i % 2 === 0 ? "#fff0f6" : "#f3e8ff", borderRadius: 12, padding: 20 }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{item.icon}</div>
                <h3 style={{ fontWeight: "bold", marginBottom: 6, color: "#2a2a2a" }}>{item.title}</h3>
                <p style={{ color: "#666", fontSize: 14, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
