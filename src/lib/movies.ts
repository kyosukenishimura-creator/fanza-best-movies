export type Movie = {
  id: string;
  title: string;
  author: string;
  genre: string[];
  rating: number;
  reviewCount: number;
  description: string;
  affiliateUrl: string;
  rank?: number;
};

export const movies: Movie[] = [
  {
    id: "1",
    title: "【サンプル】人気BL作品タイトル1",
    author: "サークル名A",
    genre: ["BL", "ラブコメ"],
    rating: 4.9,
    reviewCount: 2100,
    description: "胸キュン必至の王道BL。純愛ストーリーに感動の声続出。女性ファン絶賛の大人気作品。",
    affiliateUrl: "https://www.dmm.co.jp/",
    rank: 1,
  },
  {
    id: "2",
    title: "【サンプル】人気BL作品タイトル2",
    author: "サークル名B",
    genre: ["BL", "シリアス"],
    rating: 4.7,
    reviewCount: 1560,
    description: "切なさと甘さが絶妙なバランス。何度も読み返したくなる名作。",
    affiliateUrl: "https://www.dmm.co.jp/",
    rank: 2,
  },
  {
    id: "3",
    title: "【サンプル】人気乙女ゲーム作品1",
    author: "サークル名C",
    genre: ["乙女", "ファンタジー"],
    rating: 4.6,
    reviewCount: 980,
    description: "異世界×恋愛の乙女系作品。ヒロインへの感情移入がすごいと話題。",
    affiliateUrl: "https://www.dmm.co.jp/",
    rank: 3,
  },
];
