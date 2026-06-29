import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "私だけの書斎のプライバシーポリシーです。",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "48px 24px" }}>
      <Breadcrumb items={[{ label: "TOP", href: "/" }, { label: "プライバシーポリシー" }]} />

      <p style={{ color: "#b5838d", fontSize: 11, letterSpacing: "0.2em", marginBottom: 8 }}>PRIVACY POLICY</p>
      <h1 style={{ fontSize: 22, fontWeight: "400", letterSpacing: "0.08em", marginBottom: 40, lineHeight: 1.6 }}>プライバシーポリシー</h1>

      {[
        {
          title: "個人情報の収集について",
          body: "当サイト「私だけの書斎」（以下、当サイト）では、お問い合わせフォームのご利用時にお名前・メールアドレス等の個人情報をご入力いただく場合があります。収集した個人情報は、お問い合わせへの回答目的のみに使用し、第三者への提供は行いません。",
        },
        {
          title: "アクセス解析ツールについて",
          body: "当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用する場合があります。このGoogleアナリティクスはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。",
        },
        {
          title: "アフィリエイトプログラムについて",
          body: "当サイトはFANZA（DMMアフィリエイト）のアフィリエイトプログラムに参加しています。当サイトを経由してご購入いただいた場合、当サイトに紹介料が支払われることがあります。読者の皆様の購入価格に影響はありません。",
        },
        {
          title: "Cookieについて",
          body: "当サイトでは、一部のコンテンツにおいてCookieを使用する場合があります。Cookieはお使いのブラウザの設定から無効にすることが可能です。",
        },
        {
          title: "免責事項",
          body: "当サイトのコンテンツ・情報については、できる限り正確な情報を提供するよう努めておりますが、正確性や安全性を保証するものではありません。当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。",
        },
        {
          title: "著作権について",
          body: "当サイトで掲載している文章・画像等のコンテンツの著作権は、当サイト運営者に帰属します。無断転載・複製は固くお断りいたします。",
        },
        {
          title: "プライバシーポリシーの変更",
          body: "当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直し改善に努めます。修正された最新のプライバシーポリシーは常に本ページにて開示されます。",
        },
      ].map((section, i) => (
        <div key={i} style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 15, fontWeight: "500", color: "#1c1c1c", marginBottom: 10, letterSpacing: "0.05em" }}>{section.title}</h2>
          <p style={{ fontSize: 13, color: "#666", lineHeight: 2 }}>{section.body}</p>
        </div>
      ))}

      <p style={{ color: "#aaa", fontSize: 12, marginTop: 48 }}>制定日：2025年6月1日</p>
    </div>
  );
}
