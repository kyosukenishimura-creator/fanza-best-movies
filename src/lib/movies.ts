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
    title: "40までにしたい10のこと 3",
    author: "マミタ",
    genre: ["BL", "あまあま", "年下攻め"],
    rating: 4.9,
    reviewCount: 2100,
    description: "年下×年上の甘くてせつない恋愛。田中慶司と十条雀の関係が深まる大人気シリーズ最新刊。",
    affiliateUrl: "https://book.dmm.co.jp/search/?searchText=40%E3%81%BE%E3%81%A7%E3%81%AB%E3%81%97%E3%81%9F%E3%81%9410%E3%81%AE%E3%81%93%E3%81%A8",
    rank: 1,
  },
  {
    id: "2",
    title: "体感予報 2",
    author: "鯛野ニッケ",
    genre: ["BL", "執着攻め", "せつない"],
    rating: 4.8,
    reviewCount: 1560,
    description: "執着攻め×あまあまの最強タッグ。瀬ヶ崎と棚田の関係がついに動く注目の第2巻。",
    affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E4%BD%93%E6%84%9F%E4%BA%88%E5%A0%B1",
    rank: 2,
  },
  {
    id: "3",
    title: "恋心開発実況",
    author: "野白ぐり",
    genre: ["BL", "健気受け", "あまあま"],
    rating: 4.7,
    reviewCount: 980,
    description: "恋愛に不器用な受けが少しずつ心を開いていく過程が繊細に描かれた話題作。健気受けが刺さる。",
    affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E6%81%8B%E5%BF%83%E9%96%8B%E7%99%BA%E5%AE%9F%E6%B3%81",
    rank: 3,
  },
];
