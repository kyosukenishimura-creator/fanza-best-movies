export type Movie = {
  id: string;
  title: string;
  actress: string;
  genre: string[];
  rating: number;
  reviewCount: number;
  description: string;
  affiliateUrl: string;
  thumbnailUrl: string;
  rank?: number;
};

export const movies: Movie[] = [
  {
    id: "1",
    title: "【サンプル】人気作品タイトル1",
    actress: "女優名A",
    genre: ["ジャンル1", "ジャンル2"],
    rating: 4.8,
    reviewCount: 1240,
    description: "FANZAで大人気の作品。圧倒的なクオリティで多くのファンを獲得。",
    affiliateUrl: "https://www.dmm.co.jp/",
    thumbnailUrl: "/placeholder.jpg",
    rank: 1,
  },
  {
    id: "2",
    title: "【サンプル】人気作品タイトル2",
    actress: "女優名B",
    genre: ["ジャンル1", "ジャンル3"],
    rating: 4.7,
    reviewCount: 980,
    description: "話題沸騰中の最新作。デビュー作ながら圧倒的な存在感を発揮。",
    affiliateUrl: "https://www.dmm.co.jp/",
    thumbnailUrl: "/placeholder.jpg",
    rank: 2,
  },
  {
    id: "3",
    title: "【サンプル】人気作品タイトル3",
    actress: "女優名C",
    genre: ["ジャンル2", "ジャンル4"],
    rating: 4.6,
    reviewCount: 856,
    description: "長年のファンも唸らせる完成度の高い作品。",
    affiliateUrl: "https://www.dmm.co.jp/",
    thumbnailUrl: "/placeholder.jpg",
    rank: 3,
  },
];
