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
  {
    slug: "junai",
    name: "純愛・甘々",
    emoji: "🌸",
    description: "ひたすら甘くてキュンキュンする純愛BL。胸が温かくなる、ハッピーエンド保証の作品たち。",
    works: [
      { title: "【サンプル】きみのとなりで", author: "サークルJ", rating: 4.9, description: "幼なじみとの甘い恋。ゆっくり育まれる純愛が最高。", affiliateUrl: "https://www.dmm.co.jp/" },
      { title: "【サンプル】初恋の季節", author: "サークルK", rating: 4.8, description: "高校生BLの金字塔。青春の甘酸っぱさが詰まった一冊。", affiliateUrl: "https://www.dmm.co.jp/" },
      { title: "【サンプル】ずっとそばにいて", author: "サークルL", rating: 4.7, description: "長年片想いが実る瞬間の描写が神がかり的な完成度。", affiliateUrl: "https://www.dmm.co.jp/" },
    ],
  },
  {
    slug: "sekaiichino-koi",
    name: "溺愛・執着",
    emoji: "🔥",
    description: "「お前だけが好きだ」系。重めの愛情・執着・独占欲が魅力のジャンル。ハマると抜け出せない。",
    works: [
      { title: "【サンプル】俺だけを見ていろ", author: "サークルM", rating: 4.9, description: "独占欲MAX。「誰にも渡さない」系の溺愛展開が続出。", affiliateUrl: "https://www.dmm.co.jp/" },
      { title: "【サンプル】執愛の檻", author: "サークルN", rating: 4.8, description: "重くて深い愛。ダークな世界観が好きな方に刺さる一冊。", affiliateUrl: "https://www.dmm.co.jp/" },
      { title: "【サンプル】手放さない", author: "サークルO", rating: 4.7, description: "再会→溺愛展開の王道。読み終えた後の余韻が最高。", affiliateUrl: "https://www.dmm.co.jp/" },
    ],
  },
  {
    slug: "shachou-salary",
    name: "社長×サラリーマン",
    emoji: "💼",
    description: "権力差・立場差のドキドキ。オフィスラブBLの中でも人気の高い社長攻めジャンル。",
    works: [
      { title: "【サンプル】社長の秘密の恋人", author: "サークルP", rating: 4.8, description: "冷徹社長が部下だけには甘い。溺愛展開に息が止まる。", affiliateUrl: "https://www.dmm.co.jp/" },
      { title: "【サンプル】契約上の関係のはずが", author: "サークルQ", rating: 4.7, description: "ビジネスから始まる恋。ギャップ萌えが炸裂する作品。", affiliateUrl: "https://www.dmm.co.jp/" },
      { title: "【サンプル】専務の溺愛計画", author: "サークルR", rating: 4.6, description: "職場ラブのお手本。甘さとドキドキのバランスが絶妙。", affiliateUrl: "https://www.dmm.co.jp/" },
    ],
  },
  {
    slug: "fantasy",
    name: "異世界・ファンタジー",
    emoji: "🏰",
    description: "剣と魔法の世界のBL。異世界転生・騎士・王族など、非日常の世界観で繰り広げられる恋愛。",
    works: [
      { title: "【サンプル】魔王と勇者の秘密", author: "サークルS", rating: 4.9, description: "敵同士が恋に落ちるファンタジーBLの傑作。世界観が秀逸。", affiliateUrl: "https://www.dmm.co.jp/" },
      { title: "【サンプル】騎士団長の溺愛", author: "サークルT", rating: 4.7, description: "騎士×見習いの身分差恋愛。王道ファンタジーの魅力満載。", affiliateUrl: "https://www.dmm.co.jp/" },
      { title: "【サンプル】異世界で番になりました", author: "サークルU", rating: 4.6, description: "オメガバース×異世界の組み合わせ。両方好きな人に最高。", affiliateUrl: "https://www.dmm.co.jp/" },
    ],
  },
  {
    slug: "rekishi-jidai",
    name: "歴史・時代もの",
    emoji: "⛩️",
    description: "和風・洋風の歴史設定BL。武士・侍・大正ロマンなど、時代の雰囲気が色香を増す作品たち。",
    works: [
      { title: "【サンプル】武士の情け", author: "サークルV", rating: 4.8, description: "剣豪×藩士の禁断の愛。和風BLの名作中の名作。", affiliateUrl: "https://www.dmm.co.jp/" },
      { title: "【サンプル】大正浪漫BL", author: "サークルW", rating: 4.7, description: "大正時代の退廃的な美しさとBLが融合した傑作。", affiliateUrl: "https://www.dmm.co.jp/" },
      { title: "【サンプル】お江戸BL事件帖", author: "サークルX", rating: 4.6, description: "江戸時代を舞台にした推理×BL。ユニークな設定が秀逸。", affiliateUrl: "https://www.dmm.co.jp/" },
    ],
  },
  {
    slug: "idol-geinojin",
    name: "アイドル・芸能",
    emoji: "🎤",
    description: "芸能界・アイドルを舞台にしたBL。スポットライトの裏に隠された恋愛が女性に大人気。",
    works: [
      { title: "【サンプル】センターは俺のもの", author: "サークルY", rating: 4.9, description: "ライバルアイドル同士の恋。競争×甘さのバランスが神。", affiliateUrl: "https://www.dmm.co.jp/" },
      { title: "【サンプル】舞台裏の恋人", author: "サークルZ", rating: 4.7, description: "俳優×監督のオフィスラブ。芸能界リアル描写が面白い。", affiliateUrl: "https://www.dmm.co.jp/" },
      { title: "【サンプル】推しが私の番になった", author: "サークルAA", rating: 4.6, description: "推しのアイドルが実はΩだった！オメガバース×芸能の大ヒット作。", affiliateUrl: "https://www.dmm.co.jp/" },
    ],
  },
  {
    slug: "sports",
    name: "スポーツ",
    emoji: "⚽",
    description: "汗と友情が交差するスポーツBL。サッカー・野球・水泳など様々な競技を舞台にした熱い恋愛。",
    works: [
      { title: "【サンプル】エースを狙え（BL版）", author: "サークルBB", rating: 4.8, description: "テニス部のエース×マネージャーのBL。王道展開が最高。", affiliateUrl: "https://www.dmm.co.jp/" },
      { title: "【サンプル】ゴールの向こうへ", author: "サークルCC", rating: 4.7, description: "サッカー部のライバル同士の恋。スポーツBLの金字塔。", affiliateUrl: "https://www.dmm.co.jp/" },
      { title: "【サンプル】水面の恋", author: "サークルDD", rating: 4.6, description: "水泳部×マネージャーの青春BL。爽やかさと甘さが絶妙。", affiliateUrl: "https://www.dmm.co.jp/" },
    ],
  },
];

export function getTag(slug: string): Tag | undefined {
  return tags.find((t) => t.slug === slug);
}
