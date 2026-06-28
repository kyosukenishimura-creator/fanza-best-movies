import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FANZA女性向けナビ | BL・乙女・同人おすすめランキング",
  description: "FANZAの女性向けコンテンツをジャンル別にご紹介。BL・乙女ゲーム・女性向け同人の口コミ・ランキングを掲載。",
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
