import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "私だけの書斎へのお問い合わせページです。",
  robots: { index: false, follow: false },
};

const FORM_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe0-BKshRWD7ZU3dzziBQ9LFXgx5y9eBF4MmXVUIskvuf3D_A/viewform?embedded=true";

export default function ContactPage() {
  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: "48px 24px" }}>
      <Breadcrumb items={[{ label: "TOP", href: "/" }, { label: "お問い合わせ" }]} />

      <p style={{ color: "#b5838d", fontSize: 11, letterSpacing: "0.2em", marginBottom: 8 }}>CONTACT</p>
      <h1 style={{ fontSize: 22, fontWeight: "400", letterSpacing: "0.08em", marginBottom: 12, lineHeight: 1.6 }}>お問い合わせ</h1>
      <p style={{ color: "#999", fontSize: 13, lineHeight: 1.9, marginBottom: 32 }}>
        サイトに関するご意見・ご要望・掲載内容の誤りなどはこちらからご連絡ください。<br />
        通常3営業日以内にご返信いたします。
      </p>

      <iframe
        src={FORM_EMBED_URL}
        width="100%"
        height="900"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        style={{ border: "none", borderRadius: 8 }}
        title="お問い合わせフォーム"
      >
        読み込んでいます…
      </iframe>
    </div>
  );
}
