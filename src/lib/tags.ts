export type Tag = {
  slug: string;
  name: string;
  description: string;
  emoji: string;
  works: {
    title: string;
    author: string;
    rating: number;
    description: string;
    affiliateUrl: string;
  }[];
};

export const tags: Tag[] = [
  {
    slug: "omegaverse",
    name: "オメガバース",
    emoji: "🐺",
    description: "α（アルファ）とΩ（オメガ）の運命的な出会い。本能と恋愛が絡み合う、女性に大人気のジャンルです。",
    works: [
      { title: "【サンプル】α様のΩ 〜運命の番〜", author: "サークルA", rating: 4.9, description: "高飛車なαと平凡なΩの純愛。読み応え抜群の長編作品。", affiliateUrl: "https://www.dmm.co.jp/" },
      { title: "【サンプル】番になってください", author: "サークルB", rating: 4.8, description: "発情期に偶然出会ったふたりの運命。甘さと切なさが絶妙。", affiliateUrl: "https://www.dmm.co.jp/" },
      { title: "【サンプル】オメガの初恋", author: "サークルC", rating: 4.7, description: "初めてのΩが世界を変える。感動のラストに涙必至。", affiliateUrl: "https://www.dmm.co.jp/" },
    ],
  },
  {
    slug: "toshino-sa",
    name: "年の差",
    emoji: "🎓",
    description: "年上×年下、大人×少年の禁断の恋。経験値の差がドキドキを生む、人気急上昇ジャンル。",
    works: [
      { title: "【サンプル】先生と僕の秘密", author: "サークルD", rating: 4.8, description: "15歳差の禁断の恋。社会の目を気にしながら育む純愛。", affiliateUrl: "https://www.dmm.co.jp/" },
      { title: "【サンプル】部長の溺愛", author: "サークルE", rating: 4.7, description: "10歳上の部長に溺愛される新入社員の話。甘甘展開。", affiliateUrl: "https://www.dmm.co.jp/" },
      { title: "【サンプル】大人の恋の作り方", author: "サークルF", rating: 4.6, description: "年上男性の余裕がたまらない。大人の色気全開の作品。", affiliateUrl: "https://www.dmm.co.jp/" },
    ],
  },
  {
    slug: "kemono",
    name: "獣人",
    emoji: "🐾",
    description: "人間×獣人、または獣人同士の恋愛。ケモ耳・しっぽ・本能的な愛情表現が女性に大人気。",
    works: [
      { title: "【サンプル】狼族の花嫁", author: "サークルG", rating: 4.9, description: "オオカミ獣人に溺愛される話。保護欲MAX展開に悶絶。", affiliateUrl: "https://www.dmm.co.jp/" },
      { title: "【サンプル】ケモ耳騎士の愛し方", author: "サークルH", rating: 4.7, description: "ファンタジー×獣人BL。世界観が作り込まれた秀作。", affiliateUrl: "https://www.dmm.co.jp/" },
      { title: "【サンプル】猫又と人間の恋", author: "サークルI", rating: 4.6, description: "猫又の妖怪と人間の切ない恋物語。和風ファンタジー。", affiliateUrl: "https://www.dmm.co.jp/" },
    ],
  },
];

export function getTag(slug: string): Tag | undefined {
  return tags.find((t) => t.slug === slug);
}
