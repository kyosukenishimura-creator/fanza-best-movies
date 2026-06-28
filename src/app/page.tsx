import Link from "next/link";
import MovieCard from "@/components/MovieCard";
import { movies } from "@/lib/movies";

export default function Home() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px" }}>

      {/* ヒーロー */}
      <section style={{ padding: "48px 0 32px", textAlign: "center" }}>
        <h1 style={{ fontSize: 32, fontWeight: "bold", marginBottom: 12, lineHeight: 1.4, color: "#1a1a1a" }}>
          FANZAの人気動画を<br />ランキング形式でご紹介
        </h1>
        <p style={{ color: "#777", fontSize: 16, marginBottom: 24 }}>
          口コミ・レビュー・無料サンプル情報を毎日更新中
        </p>
        <Link href="/ranking" style={{
          background: "#e50914", color: "white", padding: "14px 32px",
          borderRadius: 6, fontWeight: "bold", fontSize: 16, textDecoration: "none"
        }}>
          ランキングを見る
        </Link>
      </section>

      {/* 注意書き */}
      <div style={{ background: "#fff8f8", border: "1px solid #ffd0d0", borderRadius: 6, padding: "12px 16px", marginBottom: 32, fontSize: 13, color: "#c00" }}>
        ⚠️ 本サイトは18歳以上の方を対象としています。18歳未満の方はご利用をお控えください。
      </div>

      {/* 人気ランキング TOP3 */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, fontWeight: "bold", marginBottom: 24, paddingBottom: 8, borderBottom: "2px solid #e50914", color: "#1a1a1a" }}>
          🏆 今週の人気ランキング TOP3
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 24 }}>
          <Link href="/ranking" style={{
            border: "1px solid #e50914", color: "#e50914", padding: "10px 32px",
            borderRadius: 6, fontWeight: "bold", textDecoration: "none", fontSize: 15
          }}>
            もっと見る
          </Link>
        </div>
      </section>

      {/* FANZAの特徴 */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, fontWeight: "bold", marginBottom: 24, paddingBottom: 8, borderBottom: "2px solid #e50914", color: "#1a1a1a" }}>
          FANZAとは？
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
          {[
            { icon: "🎬", title: "600万本以上", desc: "国内最大級の動画数。あらゆるジャンルが揃っています。" },
            { icon: "📱", title: "スマホ・PC対応", desc: "どのデバイスからでも快適に視聴できます。" },
            { icon: "💰", title: "お得なセール", desc: "毎週セール開催。人気作品が最大80%オフに。" },
            { icon: "🆓", title: "無料サンプルあり", desc: "購入前に無料サンプルで内容を確認できます。" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#f9f9f9", border: "1px solid #e8e8e8", borderRadius: 8, padding: 20 }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{item.icon}</div>
              <h3 style={{ fontWeight: "bold", marginBottom: 6, color: "#1a1a1a" }}>{item.title}</h3>
              <p style={{ color: "#666", fontSize: 14, lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
