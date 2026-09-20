// =======================================
// 深刻な危機（CR）どうぶつ情報データ
// =======================================
//
// CR.html がこの配列を読み取ってカード一覧を自動でつくる。
// 詳細ページ(endanger_animals_info.html)も name=○○ でこの中から探して表示する。
// 動物を増やすときは、この配列に { ... } を1つ足すだけでOK。
//
// name        : CR.html・詳細ページのURL(name=○○)と一致させる
// image       : 写真のパス
// description : 解説文（せいたい）
// area        : すみか（せいそくち）
// diet        : すきなたべもの
// reason      : ぜつめつのりゆう（なぜ数がへっているか）

const CR_ANIMALS_DATA = [
  {
    name: "スマトラオランウータン",
    image: "picture/スマトラオランウータン.jpg",
    description: "<ruby>木<rt>き</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>でくらすことが<ruby>多<rt>おお</rt></ruby>く、<ruby>長<rt>なが</rt></ruby>い<ruby>腕<rt>うで</rt></ruby>をつかって<ruby>木<rt>き</rt></ruby>から<ruby>木<rt>き</rt></ruby>へ<ruby>移動<rt>いどう</rt></ruby>するよ。<ruby>大人<rt>おとな</rt></ruby>のオスには、ほおの<ruby>両側<rt>りょうがわ</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きくふくらんだものもいて、<ruby>遠<rt>とお</rt></ruby>くまで<ruby>聞<rt>き</rt></ruby>こえる<ruby>大<rt>おお</rt></ruby>きな<ruby>声<rt>こえ</rt></ruby>を<ruby>出<rt>だ</rt></ruby>すことがあるよ。",
    area: "インドネシアのスマトラ<ruby>島北部<rt>とうほくぶ</rt></ruby>にある<ruby>熱帯雨林<rt>ねったいうりん</rt></ruby>",
    diet: "<ruby>果物<rt>くだもの</rt></ruby>、<ruby>葉<rt>は</rt></ruby>、<ruby>木<rt>き</rt></ruby>の<ruby>皮<rt>かわ</rt></ruby>、<ruby>木<rt>き</rt></ruby>の<ruby>芽<rt>め</rt></ruby>、<ruby>昆虫<rt>こんちゅう</rt></ruby>など",
    reason: "<ruby>森林<rt>しんりん</rt></ruby>の<ruby>伐採<rt>ばっさい</rt></ruby>や、アブラヤシ<ruby>農園<rt>のうえん</rt></ruby>などを<ruby>作<rt>つく</rt></ruby>るために、すみかがへっていることが<ruby>大<rt>おお</rt></ruby>きな<ruby>原因<rt>げんいん</rt></ruby>。<ruby>道路<rt>どうろ</rt></ruby>などによって<ruby>森林<rt>しんりん</rt></ruby>が<ruby>分<rt>わ</rt></ruby>かれてしまうことや、<ruby>密猟<rt>みつりょう</rt></ruby>も<ruby>問題<rt>もんだい</rt></ruby>になっているよ。",
  },

  {
    name: "ニシゴリラ",
    image: "picture/ニシゴリラ.jpg",
    description: "<ruby>霊長類<rt>れいちょうるい</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で<ruby>最<rt>もっと</rt></ruby>も<ruby>大<rt>おお</rt></ruby>きな<ruby>体<rt>からだ</rt></ruby>を<ruby>持<rt>も</rt></ruby>つ<ruby>動物<rt>どうぶつ</rt></ruby>。「シルバーバック」と<ruby>呼<rt>よ</rt></ruby>ばれる<ruby>強<rt>つよ</rt></ruby>いオスが<ruby>群<rt>む</rt></ruby>れを<ruby>率<rt>ひき</rt></ruby>いていて、<ruby>群<rt>む</rt></ruby>れを<ruby>守<rt>まも</rt></ruby>るために<ruby>胸<rt>むね</rt></ruby>をたたく「ドラミング」というしぐさをすることがあるよ。",
    area: "<ruby>西<rt>にし</rt></ruby>アフリカの<ruby>常緑樹林<rt>じょうりょくじゅりん</rt></ruby>",
    diet: "<ruby>果物<rt>くだもの</rt></ruby>、<ruby>葉<rt>は</rt></ruby>、<ruby>木<rt>き</rt></ruby>の<ruby>芽<rt>め</rt></ruby>、<ruby>茎<rt>くき</rt></ruby>など",
    reason: "<ruby>森林<rt>しんりん</rt></ruby>の<ruby>伐採<rt>ばっさい</rt></ruby>ですみかがへっていることや、<ruby>食用<rt>しょくよう</rt></ruby>にするための<ruby>密猟<rt>みつりょう</rt></ruby>が<ruby>原因<rt>げんいん</rt></ruby>。エボラ<ruby>出血熱<rt>しゅっけつねつ</rt></ruby>という<ruby>病気<rt>びょうき</rt></ruby>が<ruby>広<rt>ひろ</rt></ruby>がって、たくさんの<ruby>数<rt>かず</rt></ruby>がへってしまったこともあるよ。",
  },

  {
    name: "クロザル",
    image: "picture/クロザル.jpg",
    description: "<ruby>全身<rt>ぜんしん</rt></ruby>が<ruby>黒<rt>くろ</rt></ruby>い<ruby>毛<rt>け</rt></ruby>でおおわれ、<ruby>頭<rt>あたま</rt></ruby>にはモヒカンのように<ruby>立<rt>た</rt></ruby>った<ruby>毛<rt>け</rt></ruby>があるよ。<ruby>仲間<rt>なかま</rt></ruby>と<ruby>声<rt>こえ</rt></ruby>や<ruby>表情<rt>ひょうじょう</rt></ruby>をつかってコミュニケーションをとりながら、<ruby>群<rt>む</rt></ruby>れでくらしているよ。",
    area: "インドネシア・スラウェシ<ruby>島北部<rt>とうほくぶ</rt></ruby>の<ruby>熱帯林<rt>ねったいりん</rt></ruby>",
    diet: "<ruby>果物<rt>くだもの</rt></ruby>、<ruby>葉<rt>は</rt></ruby>、<ruby>木<rt>き</rt></ruby>の<ruby>芽<rt>め</rt></ruby>、<ruby>種<rt>たね</rt></ruby>、<ruby>昆虫<rt>こんちゅう</rt></ruby>など",
    reason: "<ruby>森林<rt>しんりん</rt></ruby>の<ruby>伐採<rt>ばっさい</rt></ruby>や<ruby>農地<rt>のうち</rt></ruby>の<ruby>開発<rt>かいはつ</rt></ruby>によって、すみかがへっていることが<ruby>原因<rt>げんいん</rt></ruby>。また、<ruby>食用<rt>しょくよう</rt></ruby>にするために<ruby>狩<rt>か</rt></ruby>られることも、<ruby>数<rt>かず</rt></ruby>がへっている<ruby>大<rt>おお</rt></ruby>きな<ruby>理由<rt>りゆう</rt></ruby>だよ。",
  },

  {
    name: "ワタボウシタマリン",
    image: "picture/ワタボウシタマリン.jpg",
    description: "<ruby>頭<rt>あたま</rt></ruby>から<ruby>肩<rt>かた</rt></ruby>にかけて<ruby>白<rt>しろ</rt></ruby>く<ruby>長<rt>なが</rt></ruby>い<ruby>毛<rt>け</rt></ruby>が<ruby>生<rt>は</rt></ruby>えていて、わたぼうしをかぶっているように<ruby>見<rt>み</rt></ruby>える<ruby>小<rt>ちい</rt></ruby>さなサルだよ。<ruby>家族<rt>かぞく</rt></ruby>で<ruby>群<rt>む</rt></ruby>れをつくり、お<ruby>父<rt>とう</rt></ruby>さんやきょうだいも<ruby>赤<rt>あか</rt></ruby>ちゃんを<ruby>背負<rt>せお</rt></ruby>って、みんなで<ruby>協力<rt>きょうりょく</rt></ruby>して<ruby>子育<rt>こそだ</rt></ruby>てをするよ。",
    area: "コロンビア<ruby>北西部<rt>ほくせいぶ</rt></ruby>の<ruby>熱帯<rt>ねったい</rt></ruby>の<ruby>森林<rt>しんりん</rt></ruby>",
    diet: "<ruby>昆虫<rt>こんちゅう</rt></ruby>、<ruby>果物<rt>くだもの</rt></ruby>、<ruby>樹液<rt>じゅえき</rt></ruby>、<ruby>花<rt>はな</rt></ruby>のみつなど",
    reason: "<ruby>森林<rt>しんりん</rt></ruby>が<ruby>切<rt>き</rt></ruby>り<ruby>開<rt>ひら</rt></ruby>かれ、<ruby>農地<rt>のうち</rt></ruby>や<ruby>牧場<rt>ぼくじょう</rt></ruby>、<ruby>町<rt>まち</rt></ruby>などに<ruby>変<rt>か</rt></ruby>わったことで、すみかがへり、<ruby>森<rt>もり</rt></ruby>がばらばらになっていることが<ruby>大<rt>おお</rt></ruby>きな<ruby>原因<rt>げんいん</rt></ruby>。ペットとして<ruby>売<rt>う</rt></ruby>るためにつかまえられることもあるよ。",
  },
];