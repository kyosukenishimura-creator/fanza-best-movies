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

const faqs = [
  {
    category: "登録・基本",
    items: [
      { q: "FANZAは無料で登録できますか？", a: "はい、会員登録は無料です。メールアドレスとパスワードを設定するだけで5分以内に完了します。作品の購入時に初めて料金が発生します。" },
      { q: "年齢確認は必須ですか？", a: "成人向けコンテンツを購入する場合は年齢確認が必要です。クレジットカードまたは携帯電話認証で18歳以上であることを確認します。" },
      { q: "スマホからでも使えますか？", a: "はい、スマホアプリ（iOS/Android）から快適に利用できます。電子書籍・動画ともにアプリで楽しめます。" },
    ],
  },
  {
    category: "プライバシー・安全",
    items: [
      { q: "クレジットカードの明細に何と表示されますか？", a: "「DMM」と表示されます。具体的な購入内容（作品名やジャンル）は一切表示されません。家族や職場の人に知られることはありません。" },
      { q: "購入履歴は他の人に見えますか？", a: "いいえ、購入履歴は完全非公開です。あなたのアカウントにログインしない限り、誰にも見えません。" },
      { q: "退会したらデータは消えますか？", a: "退会すると購入したコンテンツにアクセスできなくなります。退会前にダウンロード可能な作品はダウンロードしておくことをおすすめします。" },
    ],
  },
  {
    category: "BL・女性向けコンテンツ",
    items: [
      { q: "FANZAにBL作品はたくさんありますか？", a: "はい、数万点以上のBL作品が揃っています。漫画・小説・BLCD・乙女ゲームなど幅広いジャンルをカバーしています。" },
      { q: "無料で試せる作品はありますか？", a: "ほぼすべての作品に無料サンプルがあります。漫画なら最初の数ページ、動画なら数分間を無料で確認できます。" },
      { q: "BL作品の探し方を教えてください。", a: "検索窓で「BL」「オメガバース」「女性向け」などのキーワードで検索するのが最も簡単です。タグやカテゴリーでの絞り込みも便利です。" },
    ],
  },
  {
    category: "支払い・料金",
    items: [
      { q: "支払い方法はどんなものがありますか？", a: "クレジットカード、コンビニ払い、FANZAポイント、携帯キャリア決済（ドコモ・au・ソフトバンク）など多数の支払い方法に対応しています。" },
      { q: "ポイントはどのように使いますか？", a: "FANZAポイントを事前にチャージして購入に使えます。セール時にポイントを使うと実質80〜90%オフになることもあります。" },
    ],
  },
];

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.flatMap((cat) =>
      cat.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      }))
    ),
  };

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "48px 24px" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumb items={[{ label: "TOP", href: "/" }, { label: "よくある質問" }]} />

      <p style={{ color: "#b5838d", fontSize: 11, letterSpacing: "0.2em", marginBottom: 8 }}>FAQ</p>
      <h1 style={{ fontSize: 24, fontWeight: "400", letterSpacing: "0.08em", marginBottom: 8, lineHeight: 1.6 }}>
        よくある質問
      </h1>
      <p style={{ color: "#999", fontSize: 13, marginBottom: 48, lineHeight: 1.9 }}>
        FANZAについて女性からよく寄せられる質問をまとめました。
      </p>

      {faqs.map((cat, ci) => (
        <div key={ci} style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 14, fontWeight: "500", letterSpacing: "0.12em", marginBottom: 20, color: "#b5838d", paddingBottom: 8, borderBottom: "1px solid #f0e8e8" }}>
            {cat.category}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {cat.items.map((item, i) => (
              <details key={i} style={{ borderBottom: "1px solid #f0f0f0", padding: "18px 0" }}>
                <summary style={{ cursor: "pointer", fontSize: 14, fontWeight: "400", color: "#1c1c1c", lineHeight: 1.7, letterSpacing: "0.03em", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                  <span>Q. {item.q}</span>
                  <span style={{ color: "#b5838d", fontSize: 16, minWidth: 16, marginTop: 1 }}>＋</span>
                </summary>
                <p style={{ marginTop: 14, fontSize: 13, color: "#666", lineHeight: 2, paddingLeft: 16, borderLeft: "2px solid #f0e8e8" }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      ))}

      <div style={{ marginTop: 40, display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
        <Link href="/guide" className="link-hover" style={{ color: "#b5838d", fontSize: 12, textDecoration: "none", letterSpacing: "0.1em" }}>
          → 登録ガイドを見る
        </Link>
        <Link href="/ranking" className="link-hover" style={{ color: "#b5838d", fontSize: 12, textDecoration: "none", letterSpacing: "0.1em" }}>
          → ランキングを見る
        </Link>
      </div>
    </div>
  );
}
