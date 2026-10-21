// =======================================
// 危急種（VU）どうぶつ情報データ
// =======================================
//
// VU.html がこの配列を読み取ってカード一覧を自動でつくる。
// 詳細ページ(endanger_animals_info.html)も name=○○ でこの中から探して表示する。
// 動物を増やすときは、この配列に { ... } を1つ足すだけでOK。
//
// name        : VU.html・詳細ページのURL(name=○○)と一致させる
// image       : 写真のパス
// description : 解説文（せいたい）
// area        : すみか（せいそくち）
// diet        : すきなたべもの
// reason      : ぜつめつのりゆう（なぜ数がへっているか）

const VU_ANIMALS_DATA = [
  {
  name: "ホッキョクグマ",
  image: "picture/ホッキョクグマ.jpg",
  description: "<ruby>現生<rt>げんせい</rt></ruby>する<ruby>陸上<rt>りくじょう</rt></ruby>の<ruby>肉食動物<rt>にくしょくどうぶつ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で、<ruby>最<rt>もっと</rt></ruby>も<ruby>大<rt>おお</rt></ruby>きな<ruby>体<rt>からだ</rt></ruby>を<ruby>持<rt>も</rt></ruby>つ<ruby>動物<rt>どうぶつ</rt></ruby>。<ruby>大<rt>おお</rt></ruby>きなオスは<ruby>体重<rt>たいじゅう</rt></ruby>が800キログラムほどになることもあるよ。<ruby>白<rt>しろ</rt></ruby>く<ruby>見<rt>み</rt></ruby>える<ruby>毛<rt>け</rt></ruby>は、<ruby>実<rt>じつ</rt></ruby>はほぼ<ruby>透明<rt>とうめい</rt></ruby>で、<ruby>光<rt>ひかり</rt></ruby>を<ruby>反射<rt>はんしゃ</rt></ruby>して<ruby>白<rt>しろ</rt></ruby>く<ruby>見<rt>み</rt></ruby>えるよ。",
  area: "<ruby>北極圏<rt>ほっきょくけん</rt></ruby>の<ruby>海氷<rt>かいひょう</rt></ruby>や<ruby>沿岸部<rt>えんがんぶ</rt></ruby>",
  diet: "アザラシを<ruby>中心<rt>ちゅうしん</rt></ruby>に、<ruby>魚<rt>さかな</rt></ruby>や<ruby>鳥<rt>とり</rt></ruby>など",
  reason: "<ruby>地球温暖化<rt>ちきゅうおんだんか</rt></ruby>によって<ruby>海<rt>うみ</rt></ruby>の<ruby>氷<rt>こおり</rt></ruby>がへり、アザラシを<ruby>狩<rt>か</rt></ruby>る<ruby>場所<rt>ばしょ</rt></ruby>や<ruby>移動<rt>いどう</rt></ruby>する<ruby>場所<rt>ばしょ</rt></ruby>が<ruby>少<rt>すく</rt></ruby>なくなっていることが<ruby>大<rt>おお</rt></ruby>きな<ruby>原因<rt>げんいん</rt></ruby>。<ruby>環境汚染<rt>かんきょうおせん</rt></ruby>や<ruby>人間<rt>にんげん</rt></ruby>との<ruby>衝突<rt>しょうとつ</rt></ruby>も<ruby>影響<rt>えいきょう</rt></ruby>しているよ。",
},

  {
  name: "ツキノワグマ",
  image: "picture/ツキノワグマ.jpg",
  description: "<ruby>胸<rt>むね</rt></ruby>にある<ruby>白<rt>しろ</rt></ruby>い<ruby>三日月形<rt>みかづきがた</rt></ruby>の<ruby>模様<rt>もよう</rt></ruby>が<ruby>特徴<rt>とくちょう</rt></ruby>。<ruby>優<rt>すぐ</rt></ruby>れた<ruby>嗅覚<rt>きゅうかく</rt></ruby>を<ruby>持<rt>も</rt></ruby>ち、<ruby>木登<rt>きのぼ</rt></ruby>りも<ruby>得意<rt>とくい</rt></ruby>だよ。<ruby>冬<rt>ふゆ</rt></ruby>になると、<ruby>木<rt>き</rt></ruby>の<ruby>穴<rt>あな</rt></ruby>や<ruby>岩穴<rt>いわあな</rt></ruby>などで<ruby>冬眠<rt>とうみん</rt></ruby>するよ。",
  area: "<ruby>日本<rt>にほん</rt></ruby>をふくむ<ruby>東<rt>ひがし</rt></ruby>アジアや<ruby>南<rt>みなみ</rt></ruby>アジアの<ruby>森林<rt>しんりん</rt></ruby>",
  diet: "ドングリなどの<ruby>木<rt>き</rt></ruby>の<ruby>実<rt>み</rt></ruby>、<ruby>果物<rt>くだもの</rt></ruby>、<ruby>草<rt>くさ</rt></ruby>、<ruby>昆虫<rt>こんちゅう</rt></ruby>など",
  reason: "<ruby>森林<rt>しんりん</rt></ruby>の<ruby>伐採<rt>ばっさい</rt></ruby>や<ruby>開発<rt>かいはつ</rt></ruby>によって、すみかがへっていることが<ruby>原因<rt>げんいん</rt></ruby>。<ruby>体<rt>からだ</rt></ruby>の<ruby>一部<rt>いちぶ</rt></ruby>を<ruby>目当<rt>めあ</rt></ruby>てに<ruby>密猟<rt>みつりょう</rt></ruby>されたり、<ruby>人里<rt>ひとざと</rt></ruby>に<ruby>現<rt>あらわ</rt></ruby>れて<ruby>駆除<rt>くじょ</rt></ruby>されたりすることもあるよ。",
},


  {
  name: "ヒョウ",
  image: "picture/ヒョウ.jpg",
  description: "<ruby>森林<rt>しんりん</rt></ruby>やサバンナ、<ruby>山地<rt>さんち</rt></ruby>など、さまざまな<ruby>環境<rt>かんきょう</rt></ruby>でくらすことができるよ。<ruby>木登<rt>きのぼ</rt></ruby>りが<ruby>得意<rt>とくい</rt></ruby>で、つかまえた<ruby>獲物<rt>えもの</rt></ruby>を<ruby>木<rt>き</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>へ<ruby>運<rt>はこ</rt></ruby>ぶこともあるよ。<ruby>主<rt>おも</rt></ruby>に<ruby>夜<rt>よる</rt></ruby>、<ruby>一頭<rt>いっとう</rt></ruby>で<ruby>行動<rt>こうどう</rt></ruby>するよ。",
  area: "アフリカからアジアにかけての<ruby>森林<rt>しんりん</rt></ruby>、<ruby>草原<rt>そうげん</rt></ruby>、<ruby>山地<rt>さんち</rt></ruby>など",
  diet: "インパラ、サル、ウサギ、イノシシなど",
  reason: "<ruby>農地<rt>のうち</rt></ruby>や<ruby>町<rt>まち</rt></ruby>が<ruby>広<rt>ひろ</rt></ruby>がって、すみかがへっていることが<ruby>原因<rt>げんいん</rt></ruby>。<ruby>家畜<rt>かちく</rt></ruby>をおそったとしてころされたり、<ruby>毛皮<rt>けがわ</rt></ruby>や<ruby>体<rt>からだ</rt></ruby>の<ruby>一部<rt>いちぶ</rt></ruby>を<ruby>目当<rt>めあ</rt></ruby>てに<ruby>密猟<rt>みつりょう</rt></ruby>されたりすることもあるよ。",
},

  {
  name: "ライオン",
  image: "picture/ライオン.jpg",
  description: "「<ruby>百獣<rt>ひゃくじゅう</rt></ruby>の<ruby>王<rt>おう</rt></ruby>」とも<ruby>呼<rt>よ</rt></ruby>ばれる<ruby>大型<rt>おおがた</rt></ruby>のネコ<ruby>科動物<rt>かどうぶつ</rt></ruby>。オスにはたてがみがあり、<ruby>複数<rt>ふくすう</rt></ruby>のメスや<ruby>子<rt>こ</rt></ruby>どもたちと「プライド」という<ruby>群<rt>む</rt></ruby>れをつくってくらすよ。",
  area: "サハラ<ruby>砂漠以南<rt>さばくいなん</rt></ruby>のアフリカや、インド<ruby>北西部<rt>ほくせいぶ</rt></ruby>の<ruby>一部<rt>いちぶ</rt></ruby>",
  diet: "シマウマ、ヌー、レイヨウなどの<ruby>草食動物<rt>そうしょくどうぶつ</rt></ruby>",
  reason: "<ruby>農地<rt>のうち</rt></ruby>や<ruby>牧場<rt>ぼくじょう</rt></ruby>が<ruby>広<rt>ひろ</rt></ruby>がり、すみかやエサになる<ruby>動物<rt>どうぶつ</rt></ruby>がへっていることが<ruby>原因<rt>げんいん</rt></ruby>。<ruby>家畜<rt>かちく</rt></ruby>をおそったとしてころされたり、<ruby>違法<rt>いほう</rt></ruby>に<ruby>狩<rt>か</rt></ruby>られたりすることもあるよ。",
},

  {
  name: "キリン",
  image: "picture/キリン.jpg",
  description: "<ruby>世界<rt>せかい</rt></ruby>で<ruby>最<rt>もっと</rt></ruby>も<ruby>背<rt>せ</rt></ruby>の<ruby>高<rt>たか</rt></ruby>い<ruby>陸上動物<rt>りくじょうどうぶつ</rt></ruby>。<ruby>長<rt>なが</rt></ruby>い<ruby>首<rt>くび</rt></ruby>と<ruby>舌<rt>した</rt></ruby>を<ruby>使<rt>つか</rt></ruby>い、<ruby>高<rt>たか</rt></ruby>い<ruby>木<rt>き</rt></ruby>にある<ruby>葉<rt>は</rt></ruby>を<ruby>食<rt>た</rt></ruby>べるよ。<ruby>体<rt>からだ</rt></ruby>のしま<ruby>模様<rt>もよう</rt></ruby>は、キリンによってそれぞれちがうよ。",
  area: "サハラ<ruby>砂漠以南<rt>さばくいなん</rt></ruby>のアフリカの<ruby>草原<rt>そうげん</rt></ruby>やサバンナ",
  diet: "アカシアなどの<ruby>木<rt>き</rt></ruby>の<ruby>葉<rt>は</rt></ruby>、<ruby>芽<rt>め</rt></ruby>、<ruby>花<rt>はな</rt></ruby>など",
  reason: "<ruby>農地<rt>のうち</rt></ruby>や<ruby>町<rt>まち</rt></ruby>が<ruby>広<rt>ひろ</rt></ruby>がり、すみかがへっていることが<ruby>原因<rt>げんいん</rt></ruby>。<ruby>肉<rt>にく</rt></ruby>や<ruby>皮<rt>かわ</rt></ruby>、<ruby>骨<rt>ほね</rt></ruby>などを<ruby>目当<rt>めあ</rt></ruby>てに<ruby>狩<rt>か</rt></ruby>られることも、<ruby>数<rt>かず</rt></ruby>の<ruby>減少<rt>げんしょう</rt></ruby>につながっているよ。",
},

  {
    name: "コツメカワウソ",
    image: "picture/コツメカワウソ.jpg",
    description: "とても<ruby>仲間意識<rt>なかまいしき</rt></ruby>が<ruby>強<rt>つよ</rt></ruby>く、<ruby>家族<rt>かぞく</rt></ruby>で<ruby>協力<rt>きょうりょく</rt></ruby>しながらくらすよ。<ruby>前足<rt>まえあし</rt></ruby>を<ruby>器用<rt>きよう</rt></ruby>に<ruby>使<rt>つか</rt></ruby>って、エサを<ruby>探<rt>さが</rt></ruby>す<ruby>姿<rt>すがた</rt></ruby>が<ruby>特徴<rt>とくちょう</rt></ruby>だよ。",
    area: "<ruby>南<rt>みなみ</rt></ruby>アジアや<ruby>東南<rt>とうなん</rt></ruby>アジアの<ruby>熱帯林<rt>ねったいりん</rt></ruby>や<ruby>水辺<rt>みずべ</rt></ruby>",
    diet: "カニ、エビ、<ruby>魚<rt>さかな</rt></ruby>など",
    reason: "すみかである<ruby>水辺<rt>みずべ</rt></ruby>や<ruby>森<rt>もり</rt></ruby>がへっていることや、ペットとして<ruby>売<rt>う</rt></ruby>るために<ruby>密猟<rt>みつりょう</rt></ruby>や<ruby>密輸<rt>みつゆ</rt></ruby>が<ruby>行<rt>おこな</rt></ruby>われていることが<ruby>原因<rt>げんいん</rt></ruby>だよ。",
  },
  {
    name: "マンドリル",
    image: "picture/マンドリル.jpg",
    description: "<ruby>世界最大級<rt>せかいさいだいきゅう</rt></ruby>のサルの<ruby>仲間<rt>なかま</rt></ruby>で、オスは<ruby>顔<rt>かお</rt></ruby>やおしりが<ruby>赤<rt>あか</rt></ruby>や<ruby>青<rt>あお</rt></ruby>などの<ruby>鮮<rt>あざ</rt></ruby>やかな<ruby>色<rt>いろ</rt></ruby>をしているよ。この<ruby>色<rt>いろ</rt></ruby>は、<ruby>仲間<rt>なかま</rt></ruby>へのアピールや<ruby>健康状態<rt>けんこうじょうたい</rt></ruby>を<ruby>示<rt>しめ</rt></ruby>す<ruby>役割<rt>やくわり</rt></ruby>があると<ruby>考<rt>かんが</rt></ruby>えられているよ。",
    area: "カメルーン<ruby>南部<rt>なんぶ</rt></ruby>、<ruby>赤道<rt>せきどう</rt></ruby>ギニア、ガボン、コンゴ<ruby>共和国<rt>きょうわこく</rt></ruby>の<ruby>熱帯雨林<rt>ねったいうりん</rt></ruby>",
    diet: "<ruby>果物<rt>くだもの</rt></ruby>、<ruby>虫<rt>むし</rt></ruby>、<ruby>小<rt>ちい</rt></ruby>さな<ruby>動物<rt>どうぶつ</rt></ruby>など",
    reason: "<ruby>森林伐採<rt>しんりんばっさい</rt></ruby>によってすみかがへっていることや、<ruby>食用<rt>しょくよう</rt></ruby>にするために<ruby>狩<rt>か</rt></ruby>られていることが<ruby>原因<rt>げんいん</rt></ruby>で、<ruby>個体数<rt>こたいすう</rt></ruby>が<ruby>減少<rt>げんしょう</rt></ruby>しているよ。",
  },

  {
  name: "クロキツネザル",
  image: "picture/クロキツネザル.jpg",
  description: "マダガスカル<ruby>島<rt>とう</rt></ruby>にすむキツネザルの<ruby>仲間<rt>なかま</rt></ruby>。オスは<ruby>黒<rt>くろ</rt></ruby>い<ruby>毛<rt>け</rt></ruby>、メスは<ruby>茶色<rt>ちゃいろ</rt></ruby>い<ruby>毛<rt>け</rt></ruby>をしているのが<ruby>特徴<rt>とくちょう</rt></ruby>だよ。<ruby>木<rt>き</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>でくらし、ジャンプしながら<ruby>枝<rt>えだ</rt></ruby>から<ruby>枝<rt>えだ</rt></ruby>へ<ruby>移動<rt>いどう</rt></ruby>するよ。",
  area: "マダガスカル<ruby>島<rt>とう</rt></ruby><ruby>北西部<rt>ほくせいぶ</rt></ruby>の<ruby>森林<rt>しんりん</rt></ruby>",
  diet: "<ruby>果物<rt>くだもの</rt></ruby>、<ruby>葉<rt>は</rt></ruby>、<ruby>花<rt>はな</rt></ruby>、<ruby>花<rt>はな</rt></ruby>のみつなど",
  reason: "<ruby>森林<rt>しんりん</rt></ruby>の<ruby>伐採<rt>ばっさい</rt></ruby>や<ruby>農地開発<rt>のうちかいはつ</rt></ruby>によって、すみかがへっていることが<ruby>原因<rt>げんいん</rt></ruby>。<ruby>食用<rt>しょくよう</rt></ruby>やペットにするためにつかまえられることもあるよ。",
},

  {
    name: "ブラウンケナガクモザル",
    image: "picture/ブラウンケナガクモザル.jpg",
    description: "<ruby>長<rt>なが</rt></ruby>い<ruby>手足<rt>てあし</rt></ruby>としっぽを<ruby>使<rt>つか</rt></ruby>い、<ruby>木<rt>き</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>をすばやく<ruby>移動<rt>いどう</rt></ruby>するサルだよ。しっぽの<ruby>先<rt>さき</rt></ruby>で<ruby>枝<rt>えだ</rt></ruby>をしっかりつかむことができ、<ruby>果物<rt>くだもの</rt></ruby>を<ruby>探<rt>さが</rt></ruby>しながら<ruby>群<rt>む</rt></ruby>れでくらしているよ。",
    area: "コロンビア<ruby>北部<rt>ほくぶ</rt></ruby>やベネズエラ<ruby>北西部<rt>ほくせいぶ</rt></ruby>の<ruby>森林<rt>しんりん</rt></ruby>",
    diet: "<ruby>果物<rt>くだもの</rt></ruby>、<ruby>葉<rt>は</rt></ruby>、<ruby>種<rt>たね</rt></ruby>など",
    reason: "<ruby>森林伐採<rt>しんりんばっさい</rt></ruby>や<ruby>農地開発<rt>のうちかいはつ</rt></ruby>によってすみかがへっていることや、<ruby>食用<rt>しょくよう</rt></ruby>にするために<ruby>狩<rt>か</rt></ruby>られていることが<ruby>原因<rt>げんいん</rt></ruby>だよ。",
  },
  {
    name: "チンチラ",
    image: "picture/チンチラ.jpg",
    description: "<ruby>南<rt>みなみ</rt></ruby>アメリカのアンデス<ruby>山脈<rt>さんみゃく</rt></ruby>にすむ<ruby>小<rt>ちい</rt></ruby>さなげっ<ruby>歯類<rt>しるい</rt></ruby>。ふわふわとした、とても<ruby>密度<rt>みつど</rt></ruby>の<ruby>高<rt>たか</rt></ruby>い<ruby>毛<rt>け</rt></ruby>を<ruby>持<rt>も</rt></ruby>ち、<ruby>高<rt>たか</rt></ruby>い<ruby>岩場<rt>いわば</rt></ruby>をジャンプして<ruby>移動<rt>いどう</rt></ruby>するのが<ruby>得意<rt>とくい</rt></ruby>だよ。<ruby>夜行性<rt>やこうせい</rt></ruby>で、<ruby>昼間<rt>ひるま</rt></ruby>は<ruby>岩<rt>いわ</rt></ruby>のすき<ruby>間<rt>ま</rt></ruby>などで<ruby>休<rt>やす</rt></ruby>んでいるよ。",
    area: "<ruby>南<rt>みなみ</rt></ruby>アメリカ・アンデス<ruby>山脈<rt>さんみゃく</rt></ruby>の<ruby>岩場<rt>いわば</rt></ruby>や<ruby>乾燥<rt>かんそう</rt></ruby>した<ruby>高地<rt>こうち</rt></ruby>",
    diet: "<ruby>草<rt>くさ</rt></ruby>、<ruby>葉<rt>は</rt></ruby>、<ruby>種子<rt>しゅし</rt></ruby>、<ruby>木<rt>き</rt></ruby>の<ruby>皮<rt>かわ</rt></ruby>など",
    reason: "<ruby>美<rt>うつく</rt></ruby>しい<ruby>毛皮<rt>けがわ</rt></ruby>を<ruby>目的<rt>もくてき</rt></ruby>にたくさん<ruby>捕<rt>つか</rt></ruby>まえられたことや、<ruby>開発<rt>かいはつ</rt></ruby>によってすみかがへったことが<ruby>原因<rt>げんいん</rt></ruby>。<ruby>現在<rt>げんざい</rt></ruby>は<ruby>保護活動<rt>ほごかつどう</rt></ruby>が<ruby>行<rt>おこな</rt></ruby>われているよ。",
  },
  {
    name: "フンボルトペンギン",
    image: "picture/フンボルトペンギン.jpg",
    description: "<ruby>南<rt>みなみ</rt></ruby>アメリカの<ruby>海岸<rt>かいがん</rt></ruby>にすむペンギン。<ruby>翼<rt>つばさ</rt></ruby>を<ruby>使<rt>つか</rt></ruby>って<ruby>海<rt>うみ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>をすばやく<ruby>泳<rt>およ</rt></ruby>ぎ、<ruby>魚<rt>さかな</rt></ruby>をつかまえるよ。<ruby>胸<rt>むね</rt></ruby>にある<ruby>黒<rt>くろ</rt></ruby>い<ruby>帯模様<rt>おびもよう</rt></ruby>が<ruby>特徴<rt>とくちょう</rt></ruby>だよ。",
    area: "ペルー・チリ<ruby>沿岸<rt>えんがん</rt></ruby>の<ruby>岩場<rt>いわば</rt></ruby>や<ruby>海岸<rt>かいがん</rt></ruby>",
    diet: "イワシ、アジ、イカなどの<ruby>魚介類<rt>ぎょかいるい</rt></ruby>",
    reason: "エルニーニョ<ruby>現象<rt>げんしょう</rt></ruby>などによる<ruby>海水温<rt>かいすいおん</rt></ruby>の<ruby>変化<rt>へんか</rt></ruby>でエサがへることや、<ruby>漁業<rt>ぎょぎょう</rt></ruby>の<ruby>網<rt>あみ</rt></ruby>にかかってしまうこと、<ruby>海洋汚染<rt>かいようおせん</rt></ruby>などが<ruby>原因<rt>げんいん</rt></ruby>だよ。",
  },
  {
    name: "アンデスコンドル",
    image: "picture/アンデスコンドル.jpg",
    description: "<ruby>世界最大級<rt>せかいさいだいきゅう</rt></ruby>の<ruby>空<rt>そら</rt></ruby>を<ruby>飛<rt>と</rt></ruby>ぶ<ruby>鳥<rt>とり</rt></ruby>で、<ruby>翼<rt>つばさ</rt></ruby>を<ruby>広<rt>ひろ</rt></ruby>げると3メートルをこえることがあるよ。アンデス<ruby>山脈<rt>さんみゃく</rt></ruby>の<ruby>上空<rt>じょうくう</rt></ruby>を<ruby>飛<rt>と</rt></ruby>び、<ruby>動物<rt>どうぶつ</rt></ruby>の<ruby>死<rt>し</rt></ruby>がいを<ruby>食<rt>た</rt></ruby>べて、<ruby>自然<rt>しぜん</rt></ruby>をきれいにする<ruby>大切<rt>たいせつ</rt></ruby>な<ruby>役割<rt>やくわり</rt></ruby>を<ruby>持<rt>も</rt></ruby>っているよ。",
    area: "<ruby>南<rt>みなみ</rt></ruby>アメリカのアンデス<ruby>山脈<rt>さんみゃく</rt></ruby>や<ruby>周辺<rt>しゅうへん</rt></ruby>の<ruby>草原<rt>そうげん</rt></ruby>・<ruby>断崖<rt>だんがい</rt></ruby>",
    diet: "シカやグアナコなどの<ruby>動物<rt>どうぶつ</rt></ruby>の<ruby>死<rt>し</rt></ruby>がい",
    reason: "<ruby>毒<rt>どく</rt></ruby>の<ruby>入<rt>はい</rt></ruby>ったエサによる<ruby>被害<rt>ひがい</rt></ruby>や<ruby>密猟<rt>みつりょう</rt></ruby>、すみかの<ruby>減少<rt>げんしょう</rt></ruby>などが<ruby>原因<rt>げんいん</rt></ruby>。<ruby>子<rt>こ</rt></ruby>どもをうむペースがゆっくりなので、<ruby>一度<rt>いちど</rt></ruby>へると<ruby>数<rt>かず</rt></ruby>がもどりにくいよ。",
  },

  {
  name: "オオワシ",
  image: "picture/オオワシ.jpg",
  description: "<ruby>黄色<rt>きいろ</rt></ruby>く<ruby>大<rt>おお</rt></ruby>きなくちばしと、<ruby>黒<rt>くろ</rt></ruby>い<ruby>体<rt>からだ</rt></ruby>、<ruby>白<rt>しろ</rt></ruby>い<ruby>肩<rt>かた</rt></ruby>やしっぽが<ruby>特徴<rt>とくちょう</rt></ruby>。<ruby>冬<rt>ふゆ</rt></ruby>になるとロシアなどから<ruby>日本<rt>にほん</rt></ruby>へ<ruby>渡<rt>わた</rt></ruby>ってきて、<ruby>川<rt>かわ</rt></ruby>や<ruby>海<rt>うみ</rt></ruby>で<ruby>魚<rt>さかな</rt></ruby>をつかまえるよ。",
  area: "ロシア<ruby>極東部<rt>きょくとうぶ</rt></ruby>など。<ruby>冬<rt>ふゆ</rt></ruby>は<ruby>北海道<rt>ほっかいどう</rt></ruby>などへ<ruby>飛来<rt>ひらい</rt></ruby>する",
  diet: "<ruby>魚<rt>さかな</rt></ruby>、<ruby>水鳥<rt>みずどり</rt></ruby>、<ruby>動物<rt>どうぶつ</rt></ruby>の<ruby>死<rt>し</rt></ruby>がいなど",
  reason: "<ruby>川<rt>かわ</rt></ruby>や<ruby>海<rt>うみ</rt></ruby>の<ruby>環境<rt>かんきょう</rt></ruby>が<ruby>変化<rt>へんか</rt></ruby>して、エサになる<ruby>魚<rt>さかな</rt></ruby>がへることが<ruby>原因<rt>げんいん</rt></ruby>。<ruby>狩猟<rt>しゅりょう</rt></ruby>に<ruby>使<rt>つか</rt></ruby>われた<ruby>鉛<rt>なまり</rt></ruby>の<ruby>弾<rt>たま</rt></ruby>を、エサといっしょに<ruby>飲<rt>の</rt></ruby>みこんで<ruby>中毒<rt>ちゅうどく</rt></ruby>になることもあるよ。",
},

  {
    name: "パラワンコクジャク",
    image: "picture/パラワンコクジャク.jpg",
    description: "<ruby>短<rt>みじか</rt></ruby>い<ruby>距離<rt>きょり</rt></ruby>なら<ruby>飛<rt>と</rt></ruby>ぶことができるよ。オスは<ruby>青<rt>あお</rt></ruby>や<ruby>緑<rt>みどり</rt></ruby>にかがやく<ruby>美<rt>うつく</rt></ruby>しい<ruby>羽<rt>はね</rt></ruby>を<ruby>持<rt>も</rt></ruby>ち、<ruby>羽<rt>はね</rt></ruby>を<ruby>広<rt>ひろ</rt></ruby>げてメスにアピールするよ。",
    area: "フィリピンのパラワン<ruby>島<rt>とう</rt></ruby>の<ruby>森林<rt>しんりん</rt></ruby>",
    diet: "<ruby>木<rt>き</rt></ruby>の<ruby>実<rt>み</rt></ruby>、<ruby>果物<rt>くだもの</rt></ruby>、<ruby>種<rt>たね</rt></ruby>、<ruby>昆虫<rt>こんちゅう</rt></ruby>など",
    reason: "<ruby>森林伐採<rt>しんりんばっさい</rt></ruby>によってすむ<ruby>場所<rt>ばしょ</rt></ruby>がへったことや、<ruby>食用<rt>しょくよう</rt></ruby>などのために<ruby>狩<rt>か</rt></ruby>られていることが<ruby>原因<rt>げんいん</rt></ruby>だよ。",
  },

{
  name: "マナヅル",
  image: "picture/マナヅル.jpg",
  description: "<ruby>中国<rt>ちゅうごく</rt></ruby>やモンゴル、ロシアなどで<ruby>子育<rt>こそだ</rt></ruby>てをし、<ruby>冬<rt>ふゆ</rt></ruby>になると<ruby>日本<rt>にほん</rt></ruby>や<ruby>韓国<rt>かんこく</rt></ruby>にやってくるよ。<ruby>翼<rt>つばさ</rt></ruby>を<ruby>広<rt>ひろ</rt></ruby>げると、<ruby>約<rt>やく</rt></ruby>2メートルにもなるよ。",
  area: "ロシア、<ruby>中国<rt>ちゅうごく</rt></ruby>、モンゴルなどの<ruby>湿地<rt>しっち</rt></ruby>。<ruby>冬<rt>ふゆ</rt></ruby>は<ruby>日本<rt>にほん</rt></ruby>や<ruby>韓国<rt>かんこく</rt></ruby>などで<ruby>過<rt>す</rt></ruby>ごす",
  diet: "<ruby>植物<rt>しょくぶつ</rt></ruby>の<ruby>根<rt>ね</rt></ruby>や<ruby>種<rt>たね</rt></ruby>、<ruby>昆虫<rt>こんちゅう</rt></ruby>、<ruby>小<rt>ちい</rt></ruby>さな<ruby>魚<rt>さかな</rt></ruby>、カエルなど",
  reason: "<ruby>湿地<rt>しっち</rt></ruby>や<ruby>草原<rt>そうげん</rt></ruby>がへり、<ruby>子育<rt>こそだ</rt></ruby>てをする<ruby>場所<rt>ばしょ</rt></ruby>や、<ruby>渡<rt>わた</rt></ruby>りの<ruby>途中<rt>とちゅう</rt></ruby>で<ruby>休<rt>やす</rt></ruby>む<ruby>場所<rt>ばしょ</rt></ruby>が<ruby>少<rt>すく</rt></ruby>なくなったことが<ruby>原因<rt>げんいん</rt></ruby>だよ。",
},

  {
    name: "シロフクロウ",
    image: "picture/シロフクロウ.jpg",
    description: "<ruby>体長<rt>たいちょう</rt></ruby>は<ruby>約<rt>やく</rt></ruby>63センチメートル。<ruby>大人<rt>おとな</rt></ruby>のオスは<ruby>白<rt>しろ</rt></ruby>い<ruby>羽<rt>はね</rt></ruby>が<ruby>多<rt>おお</rt></ruby>いけれど、メスや<ruby>若<rt>わか</rt></ruby>い<ruby>鳥<rt>とり</rt></ruby>には<ruby>黒色<rt>くろいろ</rt></ruby>や<ruby>灰色<rt>はいいろ</rt></ruby>のしま<ruby>模様<rt>もよう</rt></ruby>があるよ。",
    area: "<ruby>北極圏<rt>ほっきょくけん</rt></ruby>のツンドラ<ruby>地帯<rt>ちたい</rt></ruby>",
    diet: "レミングなどの<ruby>小型哺乳類<rt>こがたほにゅうるい</rt></ruby>、<ruby>鳥<rt>とり</rt></ruby>など",
    reason: "<ruby>気候変動<rt>きこうへんどう</rt></ruby>による<ruby>環境<rt>かんきょう</rt></ruby>の<ruby>変化<rt>へんか</rt></ruby>や、<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>となるレミングなどの<ruby>数<rt>かず</rt></ruby>の<ruby>変化<rt>へんか</rt></ruby>が<ruby>影響<rt>えいきょう</rt></ruby>していると<ruby>考<rt>かんが</rt></ruby>えられているよ。",
  },
];