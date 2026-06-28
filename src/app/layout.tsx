import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://fanza-best-movies.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "私だけの書斎 | 女性向けBL・同人おすすめランキング【FANZA】",
    template: "%s | 私だけの書斎",
  },
  description: "女性のためのFANZAガイド。BL・乙女・女性向け同人のおすすめランキング・口コミ・レビューを掲載。オメガバース・年の差・獣人など人気ジャンル別に紹介。",
  keywords: ["BL", "女性向け", "FANZA", "同人誌", "おすすめ", "ランキング", "オメガバース", "乙女ゲーム", "BLCD", "腐女子", "TL漫画"],
  authors: [{ name: "私だけの書斎" }],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "私だけの書斎",
    title: "私だけの書斎 | 女性向けBL・同人おすすめランキング【FANZA】",
    description: "女性のためのFANZAガイド。BL・乙女・女性向け同人のおすすめランキング・口コミ・レビューを掲載。",
  },
  twitter: {
    card: "summary_large_image",
    title: "私だけの書斎 | 女性向けBL・同人おすすめランキング",
    description: "女性のためのFANZAガイド。BL・乙女・女性向け同人のおすすめランキングを掲載。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
