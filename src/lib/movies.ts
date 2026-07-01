export type Movie = {
  id: string;
  title: string;
  author: string;
  genre: string[];
  rating: number;
  reviewCount: number;
  description: string;
  affiliateUrl: string;
  imageUrl?: string;
  rank?: number;
};

export const movies: Movie[] = [
  {
    id: "1",
    title: "失恋して兄貴に慰められた話",
    author: "",
    genre: ["BL", "あまあま", "女性向け"],
    rating: 5.0,
    reviewCount: 3,
    description: "失恋した直後、兄貴に慰められて——。ラブラブ・あまあまな近親BL同人誌。",
    affiliateUrl: "https://al.fanza.co.jp/?lurl=https%3A%2F%2Flovecul.dmm.co.jp%2Fbl%2F-%2Fdetail%2F%3D%2Fcid%3Dd_743574%2F&af_id=fanzame-001&ch=search_link&ch_id=package",
    imageUrl: "https://doujin-assets.dmm.co.jp/digital/comic/d_743574/d_743574pl.jpg",
    rank: 1,
  },
  {
    id: "2",
    title: "高慢王子を無様に理解らせ愛玩堕とし【合本版】",
    author: "",
    genre: ["BL", "わからせ", "異世界転生"],
    rating: 4.5,
    reviewCount: 4,
    description: "高慢な王子がわからせられ堕ちていく異世界BL。拘束・羞恥・連続絶頂の濃厚展開。",
    affiliateUrl: "https://al.fanza.co.jp/?lurl=https%3A%2F%2Flovecul.dmm.co.jp%2Fbl%2F-%2Fdetail%2F%3D%2Fcid%3Dd_755406%2F&af_id=fanzame-001&ch=search_link&ch_id=package",
    imageUrl: "https://doujin-assets.dmm.co.jp/digital/comic/d_755406/d_755406pl.jpg",
    rank: 2,
  },
  {
    id: "3",
    title: "三兄弟でなかよしえっち次男受け",
    author: "",
    genre: ["BL", "あまあま", "女性向け"],
    rating: 5.0,
    reviewCount: 3,
    description: "三兄弟の仲良しえっちを描いたラブラブ同人BL。次男受けの甘くてHな話。",
    affiliateUrl: "https://al.fanza.co.jp/?lurl=https%3A%2F%2Flovecul.dmm.co.jp%2Fbl%2F-%2Fdetail%2F%3D%2Fcid%3Dd_556317%2F&af_id=fanzame-001&ch=search_link&ch_id=package",
    imageUrl: "https://doujin-assets.dmm.co.jp/digital/comic/d_556317/d_556317pl.jpg",
    rank: 3,
  },
];
