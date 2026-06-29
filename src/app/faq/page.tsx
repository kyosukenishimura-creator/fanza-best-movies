import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const siteUrl = "https://fanza-best-movies.com";

export const metadata: Metadata = {
  title: "FANZAよくある質問【女性向けBL・同人】",
  description: "FANZAについて女性からよく寄せられる質問をまとめました。登録方法・支払い・プライバシー・BL作品の探し方など。",
  keywords: ["FANZA よくある質問", "FANZA 女性 使い方", "FANZA 安全", "FANZA 支払い方法", "BL FANZA 探し方"],
  alternates: { canonical: `${siteUrl}/faq` },
  openGraph: {
    title: "FANZAよくある質問【女性向け】| 私だけの書斎",
    description: "FANZAについて女性からよく寄せられる質問まとめ。",
    url: `${siteUrl}/faq`,
  },
};

const popular = [
  {
    q: "クレジットカードの明細に何と表示されますか？",
    a: "「DMM」とだけ表示されます。作品名・ジャンル・購入金額の内訳は一切出ません。家族や恋人に見られても「DMMで何か買ったんだ」で終わります。",
    icon: "🔒",
  },
  {
    q: "無料で試せる作品はありますか？",
    a: "ほぼ全作品に無料サンプルがあります。漫画なら最初の数十ページ、動画なら数分間、BLCDなら試聴を無料で楽しめます。「買ってみたら違った」を防げるのが嬉しいポイント。",
    icon: "🎁",
  },
  {
    q: "FANZAは女性が使っても大丈夫ですか？",
    a: "もちろんです！BL・TL・乙女ゲーム・BLCD・女性向け同人誌など、女性向けコンテンツが数万点以上あります。女性ユーザーもたくさんいます。",
    icon: "✨",
  },
];

const faqs = [
  {
    id: "register",
    category: "登録・基本",
    emoji: "📝",
    items: [
      {
        q: "FANZAは無料で登録できますか？",
        a: "はい、会員登録は完全無料です。メールアドレスとパスワードを入力するだけで5分以内に完了します。作品の購入時に初めて料金が発生します。月額費用もかかりません。",
      },
      {
        q: "年齢確認は必ず必要ですか？",
        a: "成人向けコンテンツを閲覧・購入する場合は年齢確認が必要です。クレジットカード認証または携帯電話認証で18歳以上であることを確認します。どちらも持っていない場合はコンビニ払いで購入する方法もあります。",
      },
      {
        q: "スマホだけで使えますか？PCは必要？",
        a: "スマホだけで完全に使えます。iOS・Androidのアプリもあります。PCがなくても登録から購入・閲覧まで全部スマホで完結できます。",
      },
      {
        q: "同じアカウントでスマホとPCの両方から使えますか？",
        a: "使えます。同じアカウントにログインすれば、購入済みの作品はどのデバイスからでも読めます。電車ではスマホ、家ではPCという使い方もOKです。",
      },
    ],
  },
  {
    id: "privacy",
    category: "プライバシー・安全",
    emoji: "🔒",
    items: [
      {
        q: "クレジットカードの明細に何と表示されますか？",
        a: "「DMM」とだけ表示されます。作品名・ジャンル・購入内容の詳細は一切表示されません。家族や恋人に明細を見られても「DMMで何か買ったんだ」だけで終わります。",
      },
      {
        q: "購入履歴は他の人に見えますか？",
        a: "いいえ、完全に非公開です。あなたのFANZAアカウントにログインしない限り、誰にも見えません。共用PCを使う場合はシークレットモードかスマホアプリを使えば安心です。",
      },
      {
        q: "退会したらデータはどうなりますか？",
        a: "退会するとアカウントのデータは削除されます。ただし、退会後は購入済みのコンテンツにアクセスできなくなります。退会前にダウンロード可能な作品は必ずダウンロードしておきましょう。",
      },
      {
        q: "変なメールやDMが来ませんか？",
        a: "登録したメールアドレスへはFANZAからのお知らせ（セール情報など）のみ届きます。設定でメールマガジンをオフにすることもできます。勧誘電話・DMなどは来ません。",
      },
    ],
  },
  {
    id: "content",
    category: "BL・女性向けコンテンツ",
    emoji: "📖",
    items: [
      {
        q: "FANZAにBL作品はたくさんありますか？",
        a: "はい、数万点以上のBL作品が揃っています。漫画・小説・BLCD・乙女ゲーム・女性向け同人誌まで幅広いジャンルをカバー。オメガバース・年の差・獣人・幼なじみなどのジャンルも充実しています。",
      },
      {
        q: "オメガバース作品は多いですか？",
        a: "非常に多いです。FANZAはオメガバース作品の取扱い数が業界トップクラスです。「オメガバース」で検索すると漫画・小説・同人誌など多数ヒットします。甘々系からシリアス系まで幅広く揃っています。",
      },
      {
        q: "BL作品の探し方を教えてください",
        a: "検索窓で「BL」「オメガバース」「年の差BL」など好きなキーワードで検索するのが一番早いです。ランキングから人気作を選ぶのも失敗しにくい方法です。このサイトのjournalページでもジャンル別おすすめを紹介しています。",
      },
      {
        q: "同人誌も買えますか？",
        a: "はい、女性向け同人誌も数万点以上揃っています。「同人誌」→「女性向け」カテゴリから絞り込めます。BL同人・TL同人・乙女向けなどジャンルも豊富です。試し読みがあるので買う前に確認できます。",
      },
    ],
  },
  {
    id: "payment",
    category: "支払い・料金",
    emoji: "💳",
    items: [
      {
        q: "支払い方法はどんなものがありますか？",
        a: "クレジットカード・コンビニ払い・FANZAポイント・携帯キャリア決済（ドコモ・au・ソフトバンク）に対応しています。「カードを使いたくない」という方はコンビニ払いが安心です。",
      },
      {
        q: "コンビニで支払えますか？",
        a: "払えます。FANZAポイントをコンビニで購入して、そのポイントで作品を買う流れになります。現金派の方・カードを使いたくない方にも安心な方法です。",
      },
      {
        q: "FANZAポイントとは何ですか？",
        a: "FANZAで使える独自の電子マネーです。事前にチャージしておくと購入時にサッと使えて便利です。まとめ買いするとボーナスポイントがつく場合もあります。沼民の正しい課金術は「ポイント事前チャージ＋セール時に使う」です。",
      },
      {
        q: "セールはどのくらいの頻度でありますか？",
        a: "毎週火曜・金曜にセールが開催されます。月末のポイントアップキャンペーンや、夏・冬の大型セールもあります。気になった作品はウィッシュリストに入れておいて、セール時に購入するのがお得です。",
      },
    ],
  },
  {
    id: "howto",
    category: "読み方・ダウンロード",
    emoji: "📱",
    items: [
      {
        q: "ダウンロードとストリーミングの違いは何ですか？",
        a: "ダウンロード版はファイルを端末に保存するので、オフラインでも読めます。ストリーミング版はオンラインで読む方式で価格がやや安めです。初めての場合はストリーミングで試して、「手元に置きたい」と思ったらダウンロード版を選ぶ方が多いです。",
      },
      {
        q: "オフライン（機内モード）でも読めますか？",
        a: "ダウンロード版を購入してアプリに保存すれば、オフラインでも読めます。ストリーミング版はインターネット接続が必要です。通勤中に読む方はダウンロード版がおすすめです。",
      },
      {
        q: "購入した作品はいつでも読めますか？",
        a: "購入した作品はアカウントに紐づいているので、ログインすればいつでも読めます。ただし退会するとアクセスできなくなります。長期保存したい作品はダウンロードしておくと安心です。",
      },
    ],
  },
  {
    id: "blcd",
    category: "BLCD・音声作品",
    emoji: "🎧",
    items: [
      {
        q: "BLCDとは何ですか？",
        a: "ボーイズラブCDの略で、声優さんがBLのストーリーを演じた音声作品です。漫画や小説とは違い、声・息遣い・感情表現を「音」で楽しめます。一度聴くと「声がつくだけでこんなに違うの」と衝撃を受ける方が多いです。",
      },
      {
        q: "BLCDはイヤホンが必要ですか？",
        a: "必須ではありませんが、イヤホン（特にノイズキャンセリング）での視聴を強くおすすめします。声優の演技・息遣い・耳元の囁きなど、イヤホンで聴くと没入感が段違いです。電車で聴く場合は表情に気をつけて。",
      },
      {
        q: "試聴はできますか？",
        a: "ほぼ全作品に無料試聴があります。30秒〜2分程度のサンプルを聴いて、声質やテイストを確認してから購入できます。「声が合わない」は致命的なので、試聴は必ず活用してください。",
      },
    ],
  },
];

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      ...popular.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
      ...faqs.flatMap((cat) =>
        cat.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        }))
      ),
    ],
  };

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 16px 80px" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumb items={[{ label: "TOP", href: "/" }, { label: "よくある質問" }]} />

      <p style={{ color: "#b5838d", fontSize: 11, letterSpacing: "0.2em", marginBottom: 8 }}>FAQ</p>
      <h1 style={{ fontSize: 22, fontWeight: "400", letterSpacing: "0.08em", marginBottom: 12, lineHeight: 1.6 }}>
        よくある質問
      </h1>
      <p style={{ color: "#999", fontSize: 13, marginBottom: 40, lineHeight: 1.9 }}>
        FANZAを使いはじめる前に「これが気になる」という質問をまとめました。
      </p>

      {/* カテゴリジャンプ */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 48, padding: "16px 20px", background: "#faf8f7", borderRadius: 8 }}>
        <span style={{ fontSize: 11, color: "#aaa", letterSpacing: "0.08em", width: "100%", marginBottom: 4 }}>カテゴリから探す</span>
        {faqs.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            style={{
              fontSize: 11,
              color: "#b5838d",
              textDecoration: "none",
              border: "1px solid #e8d0d4",
              borderRadius: 20,
              padding: "4px 12px",
              letterSpacing: "0.06em",
            }}
          >
            {cat.emoji} {cat.category}
          </a>
        ))}
      </div>

      {/* よく見られている質問 */}
      <div style={{ marginBottom: 56 }}>
        <p style={{ fontSize: 11, color: "#b5838d", letterSpacing: "0.15em", marginBottom: 16 }}>POPULAR</p>
        <h2 style={{ fontSize: 16, fontWeight: "400", color: "#1c1c1c", marginBottom: 24, letterSpacing: "0.06em" }}>
          よく見られている質問
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {popular.map((item, i) => (
            <div key={i} style={{ background: "#fdf6f7", border: "1px solid #f0e0e4", borderRadius: 8, padding: "20px 20px" }}>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 12 }}>
                <span style={{ fontSize: 20 }}>{item.icon}</span>
                <p style={{ fontSize: 14, fontWeight: "500", color: "#1c1c1c", lineHeight: 1.6 }}>Q. {item.q}</p>
              </div>
              <p style={{ fontSize: 13, color: "#666", lineHeight: 1.9, paddingLeft: 32 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* カテゴリ別FAQ */}
      {faqs.map((cat) => (
        <div key={cat.id} id={cat.id} style={{ marginBottom: 52, scrollMarginTop: 80 }}>
          <h2 style={{
            fontSize: 13,
            fontWeight: "500",
            letterSpacing: "0.12em",
            marginBottom: 20,
            color: "#b5838d",
            paddingBottom: 10,
            borderBottom: "1px solid #f0e8e8",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}>
            <span>{cat.emoji}</span>
            {cat.category}
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {cat.items.map((item, i) => (
              <details key={i} style={{ borderBottom: "1px solid #f5f5f5" }}>
                <summary style={{
                  cursor: "pointer",
                  fontSize: 14,
                  fontWeight: "400",
                  color: "#1c1c1c",
                  lineHeight: 1.7,
                  letterSpacing: "0.03em",
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: 12,
                  padding: "18px 4px",
                  WebkitAppearance: "none",
                }}>
                  <span style={{ display: "flex", gap: 10, alignItems: "baseline" }}>
                    <span style={{ color: "#b5838d", fontSize: 11, fontWeight: "500", flexShrink: 0, letterSpacing: "0.05em" }}>Q</span>
                    <span>{item.q}</span>
                  </span>
                  <span style={{ color: "#ccc", fontSize: 18, minWidth: 16, flexShrink: 0, marginTop: 2 }}>＋</span>
                </summary>
                <div style={{ padding: "4px 0 20px 20px" }}>
                  <div style={{ borderLeft: "2px solid #f0e8e8", paddingLeft: 16 }}>
                    <span style={{ color: "#b5838d", fontSize: 11, fontWeight: "500", display: "block", marginBottom: 6, letterSpacing: "0.05em" }}>A</span>
                    <p style={{ fontSize: 13, color: "#666", lineHeight: 2 }}>{item.a}</p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      ))}

      {/* 関連リンク */}
      <div style={{ marginTop: 56, padding: "28px 24px", background: "#f9f6f4", borderRadius: 8 }}>
        <p style={{ fontSize: 11, color: "#b5838d", letterSpacing: "0.15em", marginBottom: 16 }}>RELATED</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Link href="/guide" style={{ color: "#1c1c1c", fontSize: 13, textDecoration: "none", letterSpacing: "0.04em" }}>
            → 登録ガイドを見る（5ステップで完了）
          </Link>
          <Link href="/blog/fanza-hajimete-josei" style={{ color: "#1c1c1c", fontSize: 13, textDecoration: "none", letterSpacing: "0.04em" }}>
            → FANZAを初めて使う女性へ：安心ガイド
          </Link>
          <Link href="/sale" style={{ color: "#1c1c1c", fontSize: 13, textDecoration: "none", letterSpacing: "0.04em" }}>
            → セール・お得情報を見る
          </Link>
          <Link href="/contact" style={{ color: "#1c1c1c", fontSize: 13, textDecoration: "none", letterSpacing: "0.04em" }}>
            → ここに載っていない質問はお問い合わせへ
          </Link>
        </div>
      </div>
    </div>
  );
}
