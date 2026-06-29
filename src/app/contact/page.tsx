import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "私だけの書斎へのお問い合わせページです。",
  robots: { index: false, follow: false },
};

export default function ContactPage() {
  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: "48px 24px" }}>
      <Breadcrumb items={[{ label: "TOP", href: "/" }, { label: "お問い合わせ" }]} />

      <p style={{ color: "#b5838d", fontSize: 11, letterSpacing: "0.2em", marginBottom: 8 }}>CONTACT</p>
      <h1 style={{ fontSize: 22, fontWeight: "400", letterSpacing: "0.08em", marginBottom: 12, lineHeight: 1.6 }}>お問い合わせ</h1>
      <p style={{ color: "#999", fontSize: 13, lineHeight: 1.9, marginBottom: 40 }}>
        サイトに関するご意見・ご要望・掲載内容の誤りなどはこちらからご連絡ください。<br />
        通常3営業日以内にご返信いたします。
      </p>

      <form
        action="https://formspree.io/f/placeholder"
        method="POST"
        style={{ display: "flex", flexDirection: "column", gap: 24 }}
      >
        <div>
          <label style={{ display: "block", fontSize: 12, color: "#666", letterSpacing: "0.1em", marginBottom: 8 }}>
            お名前 <span style={{ color: "#b5838d" }}>*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            style={{ width: "100%", padding: "12px 14px", border: "1px solid #e0e0e0", borderRadius: 4, fontSize: 13, color: "#1c1c1c", background: "#fff", outline: "none", boxSizing: "border-box" }}
            placeholder="山田 花子"
          />
        </div>

        <div>
          <label style={{ display: "block", fontSize: 12, color: "#666", letterSpacing: "0.1em", marginBottom: 8 }}>
            メールアドレス <span style={{ color: "#b5838d" }}>*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            style={{ width: "100%", padding: "12px 14px", border: "1px solid #e0e0e0", borderRadius: 4, fontSize: 13, color: "#1c1c1c", background: "#fff", outline: "none", boxSizing: "border-box" }}
            placeholder="example@email.com"
          />
        </div>

        <div>
          <label style={{ display: "block", fontSize: 12, color: "#666", letterSpacing: "0.1em", marginBottom: 8 }}>
            お問い合わせ種別
          </label>
          <select
            name="category"
            style={{ width: "100%", padding: "12px 14px", border: "1px solid #e0e0e0", borderRadius: 4, fontSize: 13, color: "#1c1c1c", background: "#fff", outline: "none", boxSizing: "border-box" }}
          >
            <option value="general">一般的なお問い合わせ</option>
            <option value="content">掲載内容について</option>
            <option value="error">誤情報・修正依頼</option>
            <option value="other">その他</option>
          </select>
        </div>

        <div>
          <label style={{ display: "block", fontSize: 12, color: "#666", letterSpacing: "0.1em", marginBottom: 8 }}>
            お問い合わせ内容 <span style={{ color: "#b5838d" }}>*</span>
          </label>
          <textarea
            name="message"
            required
            rows={6}
            style={{ width: "100%", padding: "12px 14px", border: "1px solid #e0e0e0", borderRadius: 4, fontSize: 13, color: "#1c1c1c", background: "#fff", outline: "none", resize: "vertical", boxSizing: "border-box", lineHeight: 1.8 }}
            placeholder="お問い合わせ内容をご記入ください"
          />
        </div>

        <button
          type="submit"
          style={{ padding: "14px 32px", background: "#1c1c1c", color: "#fff", border: "none", borderRadius: 4, fontSize: 12, letterSpacing: "0.15em", cursor: "pointer" }}
        >
          送信する
        </button>
      </form>
    </div>
  );
}
