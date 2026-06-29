import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "口コミ・レビュー | 女性目線のFANZA作品評価",
  description: "FANZAのBL・オメガバース・同人誌・BLCDを実際に読んだ女性たちのリアルな口コミ・レビューをご紹介。作品選びの参考にどうぞ。",
};

const reviews = [
  {
    genre: "オメガバース",
    title: "切なすぎて眠れなかった……オメガバース沼民が選ぶ名作3選",
    date: "2026-06-29",
    body: `「深夜2時に読み終わって、しばらく天井を眺めていた」という経験はありませんか。

オメガバース作品の読後感って独特ですよね。「尊い」と「しんどい」が同時に来て、しばらく現実に戻れない感じ。

今回は実際に読んで「ここが好きだった」「ここで泣いた」というポイントを正直にレビューします。`,
    points: [
      { label: "感動度", score: 5 },
      { label: "切なさ", score: 5 },
      { label: "キャラの魅力", score: 4 },
    ],
    tag: "泣ける",
    recommend: "深夜に一人で読みたい方",
  },
  {
    genre: "BL",
    title: "攻めのギャップ萌えが最高すぎた｜溺愛BL レビュー",
    date: "2026-06-29",
    body: `「普段クールなのに私にだけ感情的になる攻め」——これに弱い腐女子は多いはず。

この作品、普段は職場でも感情を一切出さないキャラが、受けの前でだけ崩れる描写が神がかってました。「なんでそんな顔するの」ってなりながら一気読みしました。

特に中盤の「お前だけが好きだ」のセリフ、声に出して読んでしまった。`,
    points: [
      { label: "萌え度", score: 5 },
      { label: "ストーリー", score: 4 },
      { label: "キャラの魅力", score: 5 },
    ],
    tag: "ギャップ萌え",
    recommend: "攻めのギャップに弱い方",
  },
  {
    genre: "BLCD",
    title: "声で聴くBLは次元が違う｜おすすめBLCDを正直レビュー",
    date: "2026-06-29",
    body: `漫画でBLを読んでいた頃は「なんでみんなBLCDそんなに好きなの？」と思っていました。

でも一度聴いたら理解した。声が付くだけでこんなに違うのかって。

特に告白シーンの「声の震え」って、活字では伝わらないんです。ため息、息遣い、声質——全部で感情を表現されると、受け取る側もぐっとくる。

今回は実際に聴いて良かったBLCDを、声優タイプ別に正直レビューします。`,
    points: [
      { label: "声優の演技", score: 5 },
      { label: "ストーリー", score: 4 },
      { label: "繰り返し聴きたい度", score: 5 },
    ],
    tag: "声優沼",
    recommend: "BLCDデビューを考えている方",
  },
  {
    genre: "同人誌",
    title: "初めてFANZAで同人誌を買ってみた正直な感想",
    date: "2026-06-29",
    body: `「商業誌と何が違うの？」と思っていた時期が私にもありました。

実際に買ってみて分かったのは、「密度が違う」ということ。作家さんの「これを描きたい」という熱量が直接届いてくる感じ。

好きな設定に全振りした作品が読める——それが同人誌の最大の魅力だと思います。特にニッチなカップリングやシチュエーションは商業では読めないものも多い。

初めて同人誌を購入した時の体験をリアルにお伝えします。`,
    points: [
      { label: "作家の熱量", score: 5 },
      { label: "コスパ", score: 4 },
      { label: "また読みたい度", score: 5 },
    ],
    tag: "同人誌入門",
    recommend: "同人誌を初めて読む方",
  },
  {
    genre: "オメガバース",
    title: "「嫌いなのに離れられない」——αΩのすれ違いが最高すぎた",
    date: "2026-06-29",
    body: `「嫌いなはずなのに体が反応してしまう」という描写、これがオメガバース最大の武器だと思います。

今回レビューする作品は、まさにその葛藤を丁寧に丁寧に描いた一冊。

Ωが「番になりたくない」と言いながら、αのフェロモンに抗えない場面の心理描写が秀逸で、「分かる……分かるよΩちゃん……」ってなりながら読みました。

ラストは予想通りだったのに泣いた。`,
    points: [
      { label: "葛藤描写", score: 5 },
      { label: "切なさ", score: 5 },
      { label: "ラストの余韻", score: 4 },
    ],
    tag: "葛藤・すれ違い",
    recommend: "本能 vs 理性の葛藤が好きな方",
  },
  {
    genre: "BL",
    title: "幼なじみBLで「友情が終わった日」に泣いた話",
    date: "2026-06-29",
    body: `幼なじみものの何がいいって、「ずっと側にいた人を好きになってしまう」という取り返しのつかなさですよね。

「友達に戻れなくなるかもしれない」と知りながら告白するシーン——読んでて息が詰まった。

相手の戸惑い、「友達のまま」を選びそうになる瞬間、そして気持ちが溢れてしまうラスト。全部よかった。

幼なじみBLが好きな方は絶対読んでほしい一冊です。`,
    points: [
      { label: "感動度", score: 5 },
      { label: "青春感", score: 5 },
      { label: "ハッピーエンド度", score: 4 },
    ],
    tag: "幼なじみ",
    recommend: "幼なじみ・友情→恋愛が好きな方",
  },
];

const genreColors: Record<string, string> = {
  "オメガバース": "#b5838d",
  "BL": "#9b7fa8",
  "BLCD": "#a07060",
  "同人誌": "#c49a6c",
};

function StarScore({ score }: { score: number }) {
  return (
    <span>
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} style={{ color: n <= score ? "#b5838d" : "#e0e0e0", fontSize: 13 }}>★</span>
      ))}
    </span>
  );
}

export default function ReviewPage() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "32px 16px" }}>
      <Breadcrumb items={[{ label: "TOP", href: "/" }, { label: "口コミ・レビュー" }]} />

      <p style={{ color: "#b5838d", fontSize: 11, letterSpacing: "0.2em", marginBottom: 8 }}>REVIEW</p>
      <h1 style={{ fontSize: 22, fontWeight: "400", color: "#1c1c1c", letterSpacing: "0.08em", marginBottom: 12, lineHeight: 1.6 }}>
        口コミ・レビュー
      </h1>
      <p style={{ color: "#888", fontSize: 13, lineHeight: 1.9, marginBottom: 48 }}>
        実際に読んだ・聴いた女性目線のリアルな感想をお届けします。<br />
        「次に読む作品が決まらない」「失敗したくない」という方の参考になれば。
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
        {reviews.map((r, i) => (
          <article key={i} style={{ borderBottom: "1px solid #f0f0f0", paddingBottom: 48 }}>
            {/* ヘッダー */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <span style={{
                background: genreColors[r.genre] ?? "#b5838d",
                color: "#fff",
                fontSize: 10,
                padding: "3px 10px",
                borderRadius: 2,
                letterSpacing: "0.08em",
              }}>
                {r.genre}
              </span>
              <span style={{
                color: "#b5838d",
                border: "1px solid #e8d0d4",
                fontSize: 10,
                padding: "2px 10px",
                borderRadius: 2,
                letterSpacing: "0.06em",
              }}>
                #{r.tag}
              </span>
              <span style={{ color: "#aaa", fontSize: 11, marginLeft: "auto" }}>{r.date}</span>
            </div>

            <h2 style={{ fontSize: 18, fontWeight: "400", color: "#1c1c1c", marginBottom: 20, lineHeight: 1.7, letterSpacing: "0.04em" }}>
              {r.title}
            </h2>

            {/* 本文 */}
            <div style={{ marginBottom: 24 }}>
              {r.body.split("\n\n").map((para, j) => (
                <p key={j} style={{ color: "#555", fontSize: 14, lineHeight: 2, marginBottom: 14 }}>{para}</p>
              ))}
            </div>

            {/* 評価 */}
            <div style={{ background: "#f9f6f4", padding: "16px 20px", borderRadius: 6, marginBottom: 20 }}>
              <p style={{ fontSize: 10, color: "#b5838d", letterSpacing: "0.15em", marginBottom: 12 }}>REVIEW SCORE</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {r.points.map((pt) => (
                  <div key={pt.label} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <span style={{ fontSize: 12, color: "#666", width: 120, flexShrink: 0 }}>{pt.label}</span>
                    <StarScore score={pt.score} />
                  </div>
                ))}
              </div>
            </div>

            {/* こんな方に */}
            <p style={{ fontSize: 12, color: "#888", letterSpacing: "0.04em" }}>
              <span style={{ color: "#b5838d", marginRight: 8 }}>こんな方に：</span>
              {r.recommend}
            </p>
          </article>
        ))}
      </div>

      {/* 末尾CTA */}
      <div style={{ marginTop: 64, padding: "28px 24px", background: "#f9f6f4", border: "1px solid #e8d8d8", borderRadius: 8, textAlign: "center" }}>
        <p style={{ fontSize: 10, color: "#b5838d", letterSpacing: "0.2em", marginBottom: 8 }}>FANZA</p>
        <p style={{ fontSize: 15, color: "#1c1c1c", marginBottom: 8 }}>気になった作品を無料サンプルで試してみる</p>
        <p style={{ fontSize: 12, color: "#999", marginBottom: 20 }}>ほぼ全作品に無料サンプルあり。登録無料。</p>
        <a
          href="https://www.dmm.co.jp/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-block", background: "#b5838d", color: "#fff", padding: "12px 32px", borderRadius: 4, fontSize: 12, letterSpacing: "0.12em", textDecoration: "none" }}
        >
          FANZAで探す →
        </a>
      </div>
    </div>
  );
}
