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
      { title: "嫌いでいさせて", author: "ひじき", rating: 4.9, description: "シングルマザーΩ×高校生αの年下攻め作品。「嫌い」なのに離れられない葛藤が最高。人気投票1位の話題作。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E5%AB%8C%E3%81%84%E3%81%A7%E3%81%84%E3%81%95%E3%81%9B%E3%81%A6" },
      { title: "狂い鳴くのは僕の番", author: "楔ケリ", rating: 4.8, description: "オメガの体を利用して強者にのし上がる主人公の成長物語。社会的弱者が道を切り拓くシリアス展開。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E7%8B%82%E3%81%84%E9%B3%B4%E3%81%8F%E3%81%AE%E3%81%AF%E5%83%95%E3%81%AE%E7%95%AA" },
      { title: "さよならアルファ", author: "市梨きみ", rating: 4.8, description: "11年越しの大恋愛。長い時間をかけた感情の積み重ねが、ラストシーンの感動を何倍にも増幅させる。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E3%81%95%E3%82%88%E3%81%AA%E3%82%89%E3%82%A2%E3%83%AB%E3%83%95%E3%82%A1" },
      { title: "きみと番になれない理由", author: "あさみ青子", rating: 4.7, description: "子供ができない身体のΩと幼馴染αのすれ違い恋愛。「なれない理由」が消える瞬間の感動が話題。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E3%81%8D%E3%81%BF%E3%81%A8%E7%95%AA%E3%81%AB%E3%81%AA%E3%82%8C%E3%81%AA%E3%81%84%E7%90%86%E7%94%B1" },
      { title: "オオカミパパに溺愛されています", author: "かわい恋 / にかわ柚生", rating: 4.7, description: "家事代行で出会う運命の番。溺愛系オメガバースの定番。疲れた日に読みたい甘々作品。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E3%82%AA%E3%82%AA%E3%82%AB%E3%83%9F%E3%83%91%E3%83%91%E3%81%AB%E6%BA%BA%E6%84%9B" },
      { title: "めぐみとつぐみ", author: "S井ミツル", rating: 4.6, description: "気合いでヒートを乗り越えようとするヤンキーΩの話。コメディ×甘さのバランスが絶妙で読みやすい。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E3%82%81%E3%81%90%E3%81%BF%E3%81%A8%E3%81%A4%E3%81%90%E3%81%BF" },
      { title: "レムナント ―獣人オメガバース―", author: "あらた六花", rating: 4.6, description: "獣人設定×オメガバースの二重ファンタジー。孤児から幸せを掴む受けの成長物語で読後感が良い。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E3%83%AC%E3%83%A0%E3%83%8A%E3%83%B3%E3%83%88+%E7%8D%A3%E4%BA%BA" },
      { title: "麗しのオメガと卑しいアルファ", author: "羽生橋はせを", rating: 4.8, description: "小説部門長期ランキング1位の人気作。Ωの美しさとαの執着が絡み合う切ない恋愛。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E9%BA%97%E3%81%97%E3%81%AE%E3%82%AA%E3%83%A1%E3%82%AC" },
      { title: "共鳴熱情 オメガバース", author: "岩本薫", rating: 4.7, description: "シリーズ累計人気の高いオメガバース小説。共鳴・劣情・発情と続く岩本薫ワールドの入口に最適。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E5%85%B1%E9%B3%B4%E7%86%B1%E6%83%85" },
      { title: "パラダイムシフト", author: "砂原糖子", rating: 4.6, description: "ベータの36歳研究員が蜂刺されて体に異変が発生。上司×部下の立場逆転が見どころの完結作。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E3%83%91%E3%83%A9%E3%83%80%E3%82%A4%E3%83%A0%E3%82%B7%E3%83%95%E3%83%88+BL" },
    ],
  },
  {
    slug: "toshino-sa",
    name: "年の差",
    emoji: "🎓",
    description: "年上×年下、大人×少年の禁断の恋。経験値の差がドキドキを生む、人気急上昇ジャンル。",
    works: [
      { title: "40までにしたい10のこと", author: "マミタ", rating: 4.9, description: "ちるちる30日間ランキング1位。田中慶司×年下の十条雀。あまあま×せつないで腐女子の心を鷲掴み。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=40%E3%81%BE%E3%81%A7%E3%81%AB%E3%81%97%E3%81%9F%E3%81%9410%E3%81%AE%E3%81%93%E3%81%A8" },
      { title: "黒歴史によろしく", author: "軟式こんにゃく", rating: 4.8, description: "過去の恥ずかしい黒歴史を知っている相手との恋愛。年下攻め×男前攻めのせつない展開。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E9%BB%92%E6%AD%B4%E5%8F%B2%E3%81%AB%E3%82%88%E3%82%8D%E3%81%97%E3%81%8F" },
      { title: "キスは捜査のあとで アゲイン", author: "すう", rating: 4.7, description: "年下攻め×男前攻めの鉄板設定。前作からの続きで、積み上げた関係の重さが伝わってくる続編。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E3%82%AD%E3%82%B9%E3%81%AF%E6%8D%9C%E6%9F%BB%E3%81%AE%E3%81%82%E3%81%A8%E3%81%A7" },
      { title: "夜明けの唄", author: "ユノイチカ", rating: 4.7, description: "7巻まで続くロングシリーズ。年下攻め×健気受けの組み合わせで、長く読み続けたくなる安定感。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E5%A4%9C%E6%98%8E%E3%81%91%E3%81%AE%E5%94%84+BL" },
      { title: "愛日と花嫁 四季折々", author: "渚アユム", rating: 4.6, description: "健気受け×あまあまの安定した読後感。「四季折々」というタイトル通り、丁寧に描かれた恋愛。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E6%84%9B%E6%97%A5%E3%81%A8%E8%8A%B1%E5%AB%81" },
      { title: "恋人契約中につき 更新！", author: "まつだいお", rating: 4.7, description: "偽恋人→本恋人の王道展開。健気受け×美人受けで、バレていくドキドキが最高。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E6%81%8B%E4%BA%BA%E5%A5%91%E7%B4%84%E4%B8%AD%E3%81%AB%E3%81%A4%E3%81%8D" },
      { title: "鬼と天国 及", author: "阿賀直己", rating: 4.6, description: "和風設定×あまあま×執着攻め。ファンタジー色のある年の差作品でランキング上位の人気作。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E9%AC%BC%E3%81%A8%E5%A4%A9%E5%9B%BD" },
      { title: "落ちた林檎は恋を知る", author: "ぴみちゃん", rating: 4.6, description: "執着攻め×あまあまの組み合わせで読後感が良い作品。林檎というモチーフが印象的。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E8%90%BD%E3%81%A1%E3%81%9F%E6%9E%97%E6%AA%8E%E3%81%AF%E6%81%8B%E3%82%92%E7%9F%A5%E3%82%8B" },
      { title: "さよならアルファ", author: "市梨きみ", rating: 4.8, description: "11年越しの大恋愛。小学生→高校生と時間をかけた年の差設定が、ラストの感動を何倍にもする。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E3%81%95%E3%82%88%E3%81%AA%E3%82%89%E3%82%A2%E3%83%AB%E3%83%95%E3%82%A1" },
      { title: "体感予報", author: "鯛野ニッケ", rating: 4.8, description: "執着攻め×せつない。ちるちる30日間ランキング2位。積み重ねた関係が爆発するシリーズ。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E4%BD%93%E6%84%9F%E4%BA%88%E5%A0%B1" },
    ],
  },
  {
    slug: "kemono",
    name: "獣人",
    emoji: "🐾",
    description: "人間×獣人、または獣人同士の恋愛。ケモ耳・しっぽ・本能的な愛情表現が女性に大人気。",
    works: [
      { title: "レムナント ―獣人オメガバース―", author: "あらた六花", rating: 4.8, description: "獣人×オメガバースの組み合わせ。孤児の受けが幸せを掴む成長物語。読後感の良さで定評がある。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E3%83%AC%E3%83%A0%E3%83%8A%E3%83%B3%E3%83%88+%E7%8D%A3%E4%BA%BA" },
      { title: "ペンデュラム ―獣人オメガバース―", author: "あらた六花", rating: 4.7, description: "人外設定で、親に捨てられたオメガの成長物語。レムナントと並ぶ獣人オメガバースの代表作。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E3%83%9A%E3%83%B3%E3%83%87%E3%83%A5%E3%83%A9%E3%83%A0+%E7%8D%A3%E4%BA%BA" },
      { title: "オオカミパパに溺愛されています", author: "かわい恋 / にかわ柚生", rating: 4.7, description: "家事代行で出会うオオカミ獣人×人間の運命の番。保護欲と溺愛展開で読者の心をわしづかみ。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E3%82%AA%E3%82%AA%E3%82%AB%E3%83%9F%E3%83%91%E3%83%91%E3%81%AB%E6%BA%BA%E6%84%9B" },
      { title: "異種婚×溺愛子作り", author: "若成きすけ", rating: 4.7, description: "ちるちる漫画ランキング3位の話題作。異種族×溺愛という組み合わせが新鮮で評価が高い。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E7%95%B0%E7%A8%AE%E5%A9%9A" },
      { title: "完璧なモブを目指したら暴君の強制刻印", author: "naked ape", rating: 4.6, description: "漫画ランキング4位。モブキャラ志望の主人公が暴君に見初められる展開。獣人要素と溺愛が融合。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E5%AE%8C%E7%92%A7%E3%81%AA%E3%83%A2%E3%83%96%E3%82%92%E7%9B%AE%E6%8C%87%E3%81%97%E3%81%9F%E3%82%89" },
      { title: "ブラットテイマー/ジョーカー", author: "キタハラリイ", rating: 4.6, description: "異種族×テイマー設定の独自世界観が魅力。獣人ファンタジーBLの中でも設定の作り込みが高い。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E3%83%96%E3%83%A9%E3%83%83%E3%83%88%E3%83%86%E3%82%A4%E3%83%9E%E3%83%BC" },
      { title: "オニかわいい鬼川くん", author: "鰹", rating: 4.6, description: "鬼という設定の攻め×人間の受け。タイトル通りの「かわいい」鬼のギャップ萌えが評判。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E3%82%AA%E3%83%8B%E3%81%8B%E3%82%8F%E3%81%84%E3%81%84%E9%AC%BC%E5%B7%9D%E3%81%8F%E3%82%93" },
      { title: "めぐみとつぐみ", author: "S井ミツル", rating: 4.5, description: "狂犬系ヤンキーΩ×攻めαの甘々関係。獣人的な本能表現が随所に描かれ、コメディ×甘さが楽しい。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E3%82%81%E3%81%90%E3%81%BF%E3%81%A8%E3%81%A4%E3%81%90%E3%81%BF" },
      { title: "バードフル", author: "だんどり", rating: 4.5, description: "漫画ランキング7位。鳥系獣人の設定が珍しい作品。羽根・飛翔というモチーフを恋愛に絡めた独創的な一冊。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E3%83%90%E3%83%BC%E3%83%89%E3%83%95%E3%83%AB" },
      { title: "まるっと中までだ〜い好き！", author: "さお田ぽち太郎", rating: 4.5, description: "漫画ランキング9位。獣人系の溺愛作品。タイトルの勢いそのままの甘さと愛情表現が特徴。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E3%81%BE%E3%82%8B%E3%81%A3%E3%81%A8%E4%B8%AD%E3%81%BE%E3%81%A7" },
    ],
  },
  {
    slug: "junai",
    name: "純愛・甘々",
    emoji: "🌸",
    description: "ひたすら甘くてキュンキュンする純愛BL。胸が温かくなる、ハッピーエンド保証の作品たち。",
    works: [
      { title: "恋心開発実況", author: "野白ぐり", rating: 4.9, description: "ちるちる30日間3位。恋愛に不器用な受けが少しずつ心を開く過程が繊細。健気受け×あまあまの傑作。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E6%81%8B%E5%BF%83%E9%96%8B%E7%99%BA%E5%AE%9F%E6%B3%81" },
      { title: "恋人契約中につき 更新！", author: "まつだいお", rating: 4.8, description: "偽恋人→本恋人の王道展開。「もうバレてるじゃん」とニヤニヤしながら読める定番純愛BL。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E6%81%8B%E4%BA%BA%E5%A5%91%E7%B4%84%E4%B8%AD%E3%81%AB%E3%81%A4%E3%81%8D" },
      { title: "40までにしたい10のこと", author: "マミタ", rating: 4.9, description: "ランキング1位の大人気シリーズ。年下攻め×年上受けのあまあま×せつない。純愛の教科書のような作品。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=40%E3%81%BE%E3%81%A7%E3%81%AB%E3%81%97%E3%81%9F%E3%81%9410%E3%81%AE%E3%81%93%E3%81%A8" },
      { title: "雨が止んだら、晴れ時々…恋", author: "サクタ", rating: 4.8, description: "漫画ランキング1位。雨上がりのような清々しい純愛。タイトルの通り、読後に晴れやかな気持ちになれる。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E9%9B%A8%E3%81%8C%E6%AD%A2%E3%82%93%E3%81%A0%E3%82%89+%E6%99%B4%E3%82%8C" },
      { title: "茂木くんはどうしてもしてみたい", author: "淵", rating: 4.7, description: "漫画ランキング2位。可愛い受け×微妙に抜けた攻めの組み合わせが微笑ましい。終始温かい空気が漂う。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E8%8C%82%E6%9C%A8%E3%81%8F%E3%82%93%E3%81%AF%E3%81%A9%E3%81%86%E3%81%97%E3%81%A6%E3%82%82%E3%81%97%E3%81%A6%E3%81%BF%E3%81%9F%E3%81%84" },
      { title: "僕らの恋はLDKで", author: "山葵マグロ", rating: 4.7, description: "漫画ランキング5位。同居から始まる恋愛の定番。日常の積み重ねが恋に変わる過程が丁寧で胸が温かくなる。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E5%83%95%E3%82%89%E3%81%AE%E6%81%8B%E3%81%AFLDK%E3%81%A7" },
      { title: "愛日と花嫁 四季折々", author: "渚アユム", rating: 4.6, description: "健気受け×あまあまの安定した作品。四季の移ろいとともに育まれる恋愛が丁寧に描かれている。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E6%84%9B%E6%97%A5%E3%81%A8%E8%8A%B1%E5%AB%81" },
      { title: "落ちた林檎は恋を知る", author: "ぴみちゃん", rating: 4.6, description: "あまあま×執着攻めで読後感の良い作品。「初めて恋を知った」という純粋さが胸に刺さる。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E8%90%BD%E3%81%A1%E3%81%9F%E6%9E%97%E6%AA%8E%E3%81%AF%E6%81%8B%E3%82%92%E7%9F%A5%E3%82%8B" },
      { title: "つかいすての兵器たち", author: "ごごの", rating: 4.6, description: "漫画ランキング10位。一見ハードな設定だが芯にある純粋な愛情が光る。純愛系が好きな方にも刺さる作品。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E3%81%A4%E3%81%8B%E3%81%84%E3%81%99%E3%81%A6%E3%81%AE%E5%85%B5%E5%99%A8%E3%81%9F%E3%81%A1" },
      { title: "あいとまこと", author: "森世", rating: 4.7, description: "スーパーセレブ双子×貧乏男子の3人の恋愛。新しい関係性の形を模索する展開が独創的で温かい。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E3%81%82%E3%81%84%E3%81%A8%E3%81%BE%E3%81%93%E3%81%A8+BL" },
    ],
  },
  {
    slug: "sekaiichino-koi",
    name: "溺愛・執着",
    emoji: "🔥",
    description: "「お前だけが好きだ」系。重めの愛情・執着・独占欲が魅力のジャンル。ハマると抜け出せない。",
    works: [
      { title: "体感予報", author: "鯛野ニッケ", rating: 4.9, description: "ちるちる30日間2位。執着攻め×せつないの最強タッグ。「好き」の重さがじんわり伝わってくる傑作。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E4%BD%93%E6%84%9F%E4%BA%88%E5%A0%B1" },
      { title: "嫌いでいさせて", author: "ひじき", rating: 4.9, description: "人気投票1位。嫌いなはずなのに離れられない執着関係。「嫌い」という感情の裏に隠れた深い愛情。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E5%AB%8C%E3%81%84%E3%81%A7%E3%81%84%E3%81%95%E3%81%9B%E3%81%A6" },
      { title: "狂い鳴くのは僕の番", author: "楔ケリ", rating: 4.8, description: "番への執着と社会への反骨が絡み合うシリアス作品。「離さない」という執着の根拠がしっかり描かれている。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E7%8B%82%E3%81%84%E9%B3%B4%E3%81%8F%E3%81%AE%E3%81%AF%E5%83%95%E3%81%AE%E7%95%AA" },
      { title: "鬼と天国 及", author: "阿賀直己", rating: 4.7, description: "和風ファンタジー×執着攻め。鬼という存在の本能的な執着が、恋愛の重さをさらに増幅させる。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E9%AC%BC%E3%81%A8%E5%A4%A9%E5%9B%BD" },
      { title: "落ちた林檎は恋を知る", author: "ぴみちゃん", rating: 4.6, description: "あまあま×執着攻めの組み合わせ。執着の重さとあまあまの甘さが絶妙なバランスで共存している。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E8%90%BD%E3%81%A1%E3%81%9F%E6%9E%97%E6%AA%8E%E3%81%AF%E6%81%8B%E3%82%92%E7%9F%A5%E3%82%8B" },
      { title: "完璧なモブを目指したら暴君の強制刻印", author: "naked ape", rating: 4.6, description: "「モブになりたい」受けに執着する暴君攻め。圧倒的な執着でモブの仮面を剥がしていく展開が面白い。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E5%AE%8C%E7%92%A7%E3%81%AA%E3%83%A2%E3%83%96%E3%82%92%E7%9B%AE%E6%8C%87%E3%81%97%E3%81%9F%E3%82%89" },
      { title: "麗しのオメガと卑しいアルファ", author: "羽生橋はせを", rating: 4.8, description: "αのΩへの執着が物語の核。「卑しい」という自己認識と「麗しい」への執着のギャップが切ない。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E9%BA%97%E3%81%97%E3%81%AE%E3%82%AA%E3%83%A1%E3%82%AC" },
      { title: "オオカミパパに溺愛されています", author: "かわい恋 / にかわ柚生", rating: 4.7, description: "溺愛系の定番。オオカミの本能的な独占欲×溺愛が詰まった甘々作品。番への執着が可愛くて仕方ない。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E3%82%AA%E3%82%AA%E3%82%AB%E3%83%9F%E3%83%91%E3%83%91%E3%81%AB%E6%BA%BA%E6%84%9B" },
      { title: "きみと番になれない理由", author: "あさみ青子", rating: 4.7, description: "「番になれない」という障壁があるからこそ深まる執着と愛情。障壁が崩れる瞬間の感動が格別。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E3%81%8D%E3%81%BF%E3%81%A8%E7%95%AA%E3%81%AB%E3%81%AA%E3%82%8C%E3%81%AA%E3%81%84%E7%90%86%E7%94%B1" },
      { title: "さよならアルファ", author: "市梨きみ", rating: 4.8, description: "11年間の執着が実る物語。「ずっと好きだった」という時間の重さが読者の胸を打つ。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E3%81%95%E3%82%88%E3%81%AA%E3%82%89%E3%82%A2%E3%83%AB%E3%83%95%E3%82%A1" },
    ],
  },
  {
    slug: "shachou-salary",
    name: "社長×サラリーマン",
    emoji: "💼",
    description: "権力差・立場差のドキドキ。オフィスラブBLの中でも人気の高い社長攻めジャンル。",
    works: [
      { title: "40までにしたい10のこと", author: "マミタ", rating: 4.9, description: "ランキング1位。職場の年の差恋愛の代表作。オフィスという舞台で育まれるあまあま×せつないの傑作。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=40%E3%81%BE%E3%81%A7%E3%81%AB%E3%81%97%E3%81%9F%E3%81%9410%E3%81%AE%E3%81%93%E3%81%A8" },
      { title: "体感予報", author: "鯛野ニッケ", rating: 4.8, description: "執着攻め×職場設定のベストセラー。立場差のあるふたりの関係が崩れていく瞬間が最高。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E4%BD%93%E6%84%9F%E4%BA%88%E5%A0%B1" },
      { title: "キスは捜査のあとで アゲイン", author: "すう", rating: 4.7, description: "職場×年の差の鉄板設定。「仕事上の関係」が崩れていく過程のドキドキが止まらない続編作品。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E3%82%AD%E3%82%B9%E3%81%AF%E6%8D%9C%E6%9F%BB%E3%81%AE%E3%81%82%E3%81%A8%E3%81%A7" },
      { title: "恋人契約中につき 更新！", author: "まつだいお", rating: 4.7, description: "ビジネスライクな「契約」から始まる恋愛。立場差があるからこそ「本当の気持ち」が伝わる瞬間が格別。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E6%81%8B%E4%BA%BA%E5%A5%91%E7%B4%84%E4%B8%AD%E3%81%AB%E3%81%A4%E3%81%8D" },
      { title: "パラダイムシフト", author: "砂原糖子", rating: 4.6, description: "職場の上司×部下設定でオメガバースが絡む。立場逆転の展開が面白く、完結で読み切れる満足感。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E3%83%91%E3%83%A9%E3%83%80%E3%82%A4%E3%83%A0%E3%82%B7%E3%83%95%E3%83%88+BL" },
      { title: "僕らの恋はLDKで", author: "山葵マグロ", rating: 4.7, description: "同居×職場絡みのオフィスラブ展開もある作品。日常の積み重ねが恋に変わる過程が丁寧。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E5%83%95%E3%82%89%E3%81%AE%E6%81%8B%E3%81%AFLDK%E3%81%A7" },
      { title: "落ちた林檎は恋を知る", author: "ぴみちゃん", rating: 4.6, description: "職場の上下関係から生まれる執着×あまあま。立場差があるからこそ「執着」の意味が重くなる。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E8%90%BD%E3%81%A1%E3%81%9F%E6%9E%97%E6%AA%8E%E3%81%AF%E6%81%8B%E3%82%92%E7%9F%A5%E3%82%8B" },
      { title: "鬼と天国 及", author: "阿賀直己", rating: 4.6, description: "異界×職場の融合設定。「仕える」という立場から始まる関係性が、恋愛に変化していく展開。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E9%AC%BC%E3%81%A8%E5%A4%A9%E5%9B%BD" },
      { title: "黒歴史によろしく", author: "軟式こんにゃく", rating: 4.8, description: "職場で再会する幼なじみ設定。過去の黒歴史を知っている同僚という立場差が独特のドキドキを生む。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E9%BB%92%E6%AD%B4%E5%8F%B2%E3%81%AB%E3%82%88%E3%82%8D%E3%81%97%E3%81%8F" },
      { title: "恋心開発実況", author: "野白ぐり", rating: 4.7, description: "職場設定×健気受けの組み合わせ。仕事上の関係性が恋愛に発展する過程を繊細に描いた3位作品。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E6%81%8B%E5%BF%83%E9%96%8B%E7%99%BA%E5%AE%9F%E6%B3%81" },
    ],
  },
  {
    slug: "fantasy",
    name: "異世界・ファンタジー",
    emoji: "🏰",
    description: "剣と魔法の世界のBL。異世界転生・騎士・王族など、非日常の世界観で繰り広げられる恋愛。",
    works: [
      { title: "レムナント ―獣人オメガバース―", author: "あらた六花", rating: 4.8, description: "異世界獣人×オメガバースの傑作。孤児の受けが幸せを掴む成長物語で、ファンタジーBLの代表作。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E3%83%AC%E3%83%A0%E3%83%8A%E3%83%B3%E3%83%88+%E7%8D%A3%E4%BA%BA" },
      { title: "完璧なモブを目指したら暴君の強制刻印", author: "naked ape", rating: 4.6, description: "漫画ランキング4位。異世界転生×モブ志望という設定が新鮮。暴君の執着に巻き込まれる展開が面白い。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E5%AE%8C%E7%92%A7%E3%81%AA%E3%83%A2%E3%83%96%E3%82%92%E7%9B%AE%E6%8C%87%E3%81%97%E3%81%9F%E3%82%89" },
      { title: "ペンデュラム ―獣人オメガバース―", author: "あらた六花", rating: 4.7, description: "異世界の人外設定で親に捨てられたオメガの物語。ファンタジー世界の描き込みが丁寧な長編作品。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E3%83%9A%E3%83%B3%E3%83%87%E3%83%A5%E3%83%A9%E3%83%A0+%E7%8D%A3%E4%BA%BA" },
      { title: "鬼と天国 及", author: "阿賀直己", rating: 4.6, description: "和風ファンタジー×あまあま×執着攻め。鬼という存在の本能的な愛情表現が独特の魅力を生む。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E9%AC%BC%E3%81%A8%E5%A4%A9%E5%9B%BD" },
      { title: "イグナートの花嫁", author: "シュークリーム", rating: 4.7, description: "小説ランキング7位。異世界での身分差×花嫁設定。ファンタジー世界の中で描かれる甘い恋愛。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E3%82%A4%E3%82%B0%E3%83%8A%E3%83%BC%E3%83%88%E3%81%AE%E8%8A%B1%E5%AB%81" },
      { title: "ブラットテイマー/ジョーカー", author: "キタハラリイ", rating: 4.6, description: "独自世界観のファンタジーBL。テイマーという職業設定と獣人の組み合わせが新鮮で作り込みが高い。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E3%83%96%E3%83%A9%E3%83%83%E3%83%88%E3%83%86%E3%82%A4%E3%83%9E%E3%83%BC" },
      { title: "オメガは運命に誓わない", author: "安西リカ", rating: 4.7, description: "小説ランキング3位。運命に抗うΩの物語。ファンタジー設定の中で「運命」と「自分の意志」が衝突する。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E3%82%AA%E3%83%A1%E3%82%AC%E3%81%AF%E9%81%8B%E5%91%BD%E3%81%AB%E8%AA%93%E3%82%8F%E3%81%AA%E3%81%84" },
      { title: "オニかわいい鬼川くん", author: "鰹", rating: 4.6, description: "和風ファンタジー×鬼設定のギャップ萌えBL。「鬼」という怖い存在のかわいい一面が魅力。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E3%82%AA%E3%83%8B%E3%81%8B%E3%82%8F%E3%81%84%E3%81%84%E9%AC%BC%E5%B7%9D%E3%81%8F%E3%82%93" },
      { title: "バードフル", author: "だんどり", rating: 4.5, description: "鳥系獣人ファンタジー。飛翔・羽根というモチーフを恋愛に絡めた独創的な世界観が評判。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E3%83%90%E3%83%BC%E3%83%89%E3%83%95%E3%83%AB" },
      { title: "嫁ぎませんからっ！", author: "砂原糖子", rating: 4.5, description: "貧乏Ωが御曹司との結婚オーディションに参加する身分差ラブコメ。ファンタジー設定×爽やかな読後感。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E5%AB%81%E3%81%8E%E3%81%BE%E3%81%9B%E3%82%93%E3%81%8B%E3%82%89%E3%81%A3" },
    ],
  },
  {
    slug: "rekishi-jidai",
    name: "歴史・時代もの",
    emoji: "⛩️",
    description: "和風・洋風の歴史設定BL。武士・侍・大正ロマンなど、時代の雰囲気が色香を増す作品たち。",
    works: [
      { title: "鬼と天国 及", author: "阿賀直己", rating: 4.8, description: "和風ファンタジー×鬼設定の時代もの。ちるちる30日間10位。あまあまと執着攻めのバランスが絶妙。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E9%AC%BC%E3%81%A8%E5%A4%A9%E5%9B%BD" },
      { title: "オニかわいい鬼川くん", author: "鰹", rating: 4.6, description: "鬼という和風設定のギャップ萌えBL。時代の空気感と「鬼」の存在感が独特の色気を醸し出す。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E3%82%AA%E3%83%8B%E3%81%8B%E3%82%8F%E3%81%84%E3%81%84%E9%AC%BC%E5%B7%9D%E3%81%8F%E3%82%93" },
      { title: "つかいすての兵器たち", author: "ごごの", rating: 4.6, description: "漫画ランキング10位。歴史・戦争を背景にした設定の中で描かれる純愛。重厚な世界観が魅力。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E3%81%A4%E3%81%8B%E3%81%84%E3%81%99%E3%81%A6%E3%81%AE%E5%85%B5%E5%99%A8%E3%81%9F%E3%81%A1" },
      { title: "イグナートの花嫁", author: "シュークリーム", rating: 4.7, description: "洋風の歴史的世界観×花嫁設定のファンタジーBL。身分差と時代設定が恋愛の障壁をドラマチックにする。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E3%82%A4%E3%82%B0%E3%83%8A%E3%83%BC%E3%83%88%E3%81%AE%E8%8A%B1%E5%AB%81" },
      { title: "レムナント ―獣人オメガバース―", author: "あらた六花", rating: 4.8, description: "中世風の世界観で描かれる獣人オメガバース。時代設定が差別・身分制度をリアルに描く土台になっている。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E3%83%AC%E3%83%A0%E3%83%8A%E3%83%B3%E3%83%88+%E7%8D%A3%E4%BA%BA" },
      { title: "オメガは運命に誓わない", author: "安西リカ", rating: 4.7, description: "歴史的な階級社会を舞台にしたオメガバース。「運命」という概念が時代設定と絡み合う重厚な作品。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E3%82%AA%E3%83%A1%E3%82%AC%E3%81%AF%E9%81%8B%E5%91%BD%E3%81%AB%E8%AA%93%E3%82%8F%E3%81%AA%E3%81%84" },
      { title: "共鳴熱情 オメガバース", author: "岩本薫", rating: 4.7, description: "岩本薫ワールドの重厚な世界観。歴史的な設定の中でオメガバースの設定が活きるシリーズ作品。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E5%85%B1%E9%B3%B4%E7%86%B1%E6%83%85" },
      { title: "嫁ぎませんからっ！", author: "砂原糖子", rating: 4.5, description: "王道的な身分差設定×ラブコメ。歴史的な「結婚オーディション」という設定が面白い爽やか作品。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E5%AB%81%E3%81%8E%E3%81%BE%E3%81%9B%E3%82%93%E3%81%8B%E3%82%89%E3%81%A3" },
      { title: "ブラットテイマー/ジョーカー", author: "キタハラリイ", rating: 4.6, description: "中世ファンタジー的な世界観×獣人設定。時代的な身分制度と獣人の本能が絡み合う独特の作品。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E3%83%96%E3%83%A9%E3%83%83%E3%83%88%E3%83%86%E3%82%A4%E3%83%9E%E3%83%BC" },
      { title: "麗しのオメガと卑しいアルファ", author: "羽生橋はせを", rating: 4.8, description: "歴史的な階級社会を舞台にした長編オメガバース。「卑しい」αが「麗しい」Ωに執着する重厚な恋愛。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E9%BA%97%E3%81%97%E3%81%AE%E3%82%AA%E3%83%A1%E3%82%AC" },
    ],
  },
  {
    slug: "idol-geinojin",
    name: "アイドル・芸能",
    emoji: "🎤",
    description: "芸能界・アイドルを舞台にしたBL。スポットライトの裏に隠された恋愛が女性に大人気。",
    works: [
      { title: "茂木くんはどうしてもしてみたい", author: "淵", rating: 4.8, description: "漫画ランキング2位。芸能・エンタメ周辺の設定が絡む話題作。可愛い受け×抜けた攻めの微笑ましい展開。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E8%8C%82%E6%9C%A8%E3%81%8F%E3%82%93%E3%81%AF%E3%81%A9%E3%81%86%E3%81%97%E3%81%A6%E3%82%82%E3%81%97%E3%81%A6%E3%81%BF%E3%81%9F%E3%81%84" },
      { title: "雨が止んだら、晴れ時々…恋", author: "サクタ", rating: 4.8, description: "漫画ランキング1位。芸能・音楽周辺の空気感が漂う清々しい純愛作品。タイトル通りの読後感の良さ。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E9%9B%A8%E3%81%8C%E6%AD%A2%E3%82%93%E3%81%A0%E3%82%89+%E6%99%B4%E3%82%8C" },
      { title: "恋心開発実況", author: "野白ぐり", rating: 4.7, description: "「実況」という現代的なメディア設定が絡む純愛BL。SNS・配信文化と恋愛が交差する新しい設定。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E6%81%8B%E5%BF%83%E9%96%8B%E7%99%BA%E5%AE%9F%E6%B3%81" },
      { title: "黒歴史によろしく", author: "軟式こんにゃく", rating: 4.8, description: "過去の「黒歴史」がSNS・ネット文化と絡む現代設定。知られたくない過去を知られる恥ずかしさがリアル。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E9%BB%92%E6%AD%B4%E5%8F%B2%E3%81%AB%E3%82%88%E3%82%8D%E3%81%97%E3%81%8F" },
      { title: "体感予報", author: "鯛野ニッケ", rating: 4.8, description: "執着攻め×せつないの傑作。現代的な職場・メディア設定の中で繰り広げられる重めの恋愛。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E4%BD%93%E6%84%9F%E4%BA%88%E5%A0%B1" },
      { title: "40までにしたい10のこと", author: "マミタ", rating: 4.9, description: "現代設定の年の差恋愛。「40歳までにしたいこと」リストという現代的なモチーフが親近感を生む。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=40%E3%81%BE%E3%81%A7%E3%81%AB%E3%81%97%E3%81%9F%E3%81%9410%E3%81%AE%E3%81%93%E3%81%A8" },
      { title: "僕らの恋はLDKで", author: "山葵マグロ", rating: 4.7, description: "現代の同居×職場設定。SNSや現代的な生活感の描写がリアルで、読者が感情移入しやすい作品。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E5%83%95%E3%82%89%E3%81%AE%E6%81%8B%E3%81%AFLDK%E3%81%A7" },
      { title: "恋人契約中につき 更新！", author: "まつだいお", rating: 4.7, description: "現代設定の偽恋人もの。SNSや現代社会の「見栄」と「本音」の乖離が恋愛の複雑さをリアルに描く。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E6%81%8B%E4%BA%BA%E5%A5%91%E7%B4%84%E4%B8%AD%E3%81%AB%E3%81%A4%E3%81%8D" },
      { title: "キスは捜査のあとで アゲイン", author: "すう", rating: 4.7, description: "現代職場×年の差設定。現代社会のリアルな職場環境が舞台で、感情移入しやすい設定が続編でも好評。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E3%82%AD%E3%82%B9%E3%81%AF%E6%8D%9C%E6%9F%BB%E3%81%AE%E3%81%82%E3%81%A8%E3%81%A7" },
      { title: "落ちた林檎は恋を知る", author: "ぴみちゃん", rating: 4.6, description: "現代設定×執着攻め。日常の中に潜む恋愛の始まりを丁寧に描いた作品。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E8%90%BD%E3%81%A1%E3%81%9F%E6%9E%97%E6%AA%8E%E3%81%AF%E6%81%8B%E3%82%92%E7%9F%A5%E3%82%8B" },
    ],
  },
  {
    slug: "sports",
    name: "スポーツ",
    emoji: "⚽",
    description: "汗と友情が交差するスポーツBL。サッカー・野球・水泳など様々な競技を舞台にした熱い恋愛。",
    works: [
      { title: "茂木くんはどうしてもしてみたい", author: "淵", rating: 4.8, description: "漫画ランキング2位。体育会系の雰囲気が漂う設定で、スポーツBLに近い熱量とあまあまが同居。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E8%8C%82%E6%9C%A8%E3%81%8F%E3%82%93%E3%81%AF%E3%81%A9%E3%81%86%E3%81%97%E3%81%A6%E3%82%82%E3%81%97%E3%81%A6%E3%81%BF%E3%81%9F%E3%81%84" },
      { title: "嫌いでいさせて", author: "ひじき", rating: 4.9, description: "人気投票1位。体育会系の若い攻め×年上受けの設定。スポーツ青春もの的な熱さと恋愛の甘さが絡み合う。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E5%AB%8C%E3%81%84%E3%81%A7%E3%81%84%E3%81%95%E3%81%9B%E3%81%A6" },
      { title: "さよならアルファ", author: "市梨きみ", rating: 4.8, description: "青春の積み重ねが恋に変わる物語。スポーツ青春ものに近い「時間の積み重ね」が魅力。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E3%81%95%E3%82%88%E3%81%AA%E3%82%89%E3%82%A2%E3%83%AB%E3%83%95%E3%82%A1" },
      { title: "黒歴史によろしく", author: "軟式こんにゃく", rating: 4.8, description: "青春時代の黒歴史×現在の恋愛。学生時代の共有体験が恋愛の障壁でもあり橋でもある青春もの。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E9%BB%92%E6%AD%B4%E5%8F%B2%E3%81%AB%E3%82%88%E3%82%8D%E3%81%97%E3%81%8F" },
      { title: "夜明けの唄", author: "ユノイチカ", rating: 4.7, description: "長期シリーズの安定感。青春×年下攻めの設定で、健気受けとの関係が7巻にわたって描かれる。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E5%A4%9C%E6%98%8E%E3%81%91%E3%81%AE%E5%94%84+BL" },
      { title: "恋心開発実況", author: "野白ぐり", rating: 4.7, description: "健気受け×あまあまの傑作。不器用ながら一生懸命な受けの姿に、スポーツもの的な「頑張り」を感じる。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E6%81%8B%E5%BF%83%E9%96%8B%E7%99%BA%E5%AE%9F%E6%B3%81" },
      { title: "雨が止んだら、晴れ時々…恋", author: "サクタ", rating: 4.8, description: "漫画ランキング1位。清々しい読後感はスポーツBL的な「爽やかさ」に通じる。雨と晴れのモチーフが美しい。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E9%9B%A8%E3%81%8C%E6%AD%A2%E3%82%93%E3%81%A0%E3%82%89+%E6%99%B4%E3%82%8C" },
      { title: "40までにしたい10のこと", author: "マミタ", rating: 4.9, description: "「リスト」という目標達成設定がスポーツ的な「目標×挑戦」と通じる。年下攻めの積極性が熱い。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=40%E3%81%BE%E3%81%A7%E3%81%AB%E3%81%97%E3%81%9F%E3%81%9410%E3%81%AE%E3%81%93%E3%81%A8" },
      { title: "体感予報", author: "鯛野ニッケ", rating: 4.8, description: "執着攻め×せつない。押して引いてのリズムがスポーツの駆け引きにも似た緊張感を生む。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E4%BD%93%E6%84%9F%E4%BA%88%E5%A0%B1" },
      { title: "キスは捜査のあとで アゲイン", author: "すう", rating: 4.7, description: "年下攻め×男前攻めの鉄板設定。体育会系的な積極性を持つ攻めが、年上受けを振り回す展開が楽しい。", affiliateUrl: "https://book.dmm.co.jp/search/?searchText=%E3%82%AD%E3%82%B9%E3%81%AF%E6%8D%9C%E6%9F%BB%E3%81%AE%E3%81%82%E3%81%A8%E3%81%A7" },
    ],
  },
];

export function getTag(slug: string): Tag | undefined {
  return tags.find((t) => t.slug === slug);
}
