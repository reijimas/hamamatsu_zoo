// =======================================
// 絶滅危惧種（EN）どうぶつ情報データ
// =======================================
//
// EN.html がこの配列を読み取ってカード一覧を自動でつくる。
// 詳細ページ(endanger_animals_info.html)も name=○○ でこの中から探して表示する。
// 動物を増やすときは、この配列に { ... } を1つ足すだけでOK。
//
// name        : EN.html・詳細ページのURL(name=○○)と一致させる
// image       : 写真のパス
// description : 解説文（せいたい）
// area        : すみか（せいそくち）
// diet        : すきなたべもの
// reason      : ぜつめつのりゆう（なぜ数がへっているか）

const ANIMALS_DATA = [
  {
    name: "アムールトラ",
    image: "picture/アムールトラ.jpg",
    description: "アムールトラは、ロシアの<ruby>極東地域<rt>きょくとうちいき</rt></ruby>に<ruby>生息<rt>せいそく</rt></ruby>する<ruby>大型<rt>おおがた</rt></ruby>のネコ<ruby>科動物<rt>かどうぶつ</rt></ruby>で、<ruby>絶滅危惧種<rt>ぜつめつきぐしゅ</rt></ruby>に<ruby>指定<rt>してい</rt></ruby>されています。<ruby>体長<rt>たいちょう</rt></ruby>は<ruby>約<rt>やく</rt></ruby>2.7メートル、<ruby>体重<rt>たいじゅう</rt></ruby>は<ruby>約<rt>やく</rt></ruby>220キログラムに<ruby>達<rt>たっ</rt></ruby>することがあります。<ruby>美<rt>うつく</rt></ruby>しいオレンジ<ruby>色<rt>いろ</rt></ruby>の<ruby>毛皮<rt>けがわ</rt></ruby>と<ruby>黒<rt>くろ</rt></ruby>いしま<ruby>模様<rt>もよう</rt></ruby>が<ruby>特徴<rt>とくちょう</rt></ruby>で、<ruby>非常<rt>ひじょう</rt></ruby>に<ruby>力強<rt>ちからづよ</rt></ruby>く、<ruby>狩<rt>か</rt></ruby>りの<ruby>能力<rt>のうりょく</rt></ruby>も<ruby>高<rt>たか</rt></ruby>いです。<ruby>主<rt>おも</rt></ruby>にシカやイノシシなどの<ruby>大型哺乳類<rt>おおがたほにゅうるい</rt></ruby>を<ruby>捕食<rt>ほしょく</rt></ruby>しますが、<ruby>生息地<rt>せいそくち</rt></ruby>の<ruby>破壊<rt>はかい</rt></ruby>や<ruby>密猟<rt>みつりょう</rt></ruby>によって<ruby>個体数<rt>こたいすう</rt></ruby>が<ruby>減少<rt>げんしょう</rt></ruby>しています。<ruby>保護活動<rt>ほごかつどう</rt></ruby>が<ruby>進<rt>すす</rt></ruby>められており、<ruby>野生<rt>やせい</rt></ruby>での<ruby>生息数<rt>せいそくすう</rt></ruby>を<ruby>増<rt>ふ</rt></ruby>やすための<ruby>努力<rt>どりょく</rt></ruby>が<ruby>続<rt>つづ</rt></ruby>けられています。",
    area: "ロシア<ruby>極東地域<rt>きょくとうちいき</rt></ruby>の<ruby>森林地帯<rt>しんりんちたい</rt></ruby>",
    diet: "シカ、イノシシなどの<ruby>大型哺乳類<rt>おおがたほにゅうるい</rt></ruby>",
    reason: "<ruby>美<rt>うつく</rt></ruby>しい<ruby>毛皮<rt>けがわ</rt></ruby>や<ruby>体<rt>からだ</rt></ruby>の<ruby>一部<rt>いちぶ</rt></ruby>を<ruby>目当<rt>めあ</rt></ruby>てにした<ruby>密猟<rt>みつりょう</rt></ruby>に<ruby>加<rt>くわ</rt></ruby>え、<ruby>森林<rt>しんりん</rt></ruby>の<ruby>伐採<rt>ばっさい</rt></ruby>で<ruby>生息地<rt>せいそくち</rt></ruby>がへってしまったことが<ruby>原因<rt>げんいん</rt></ruby>。エサになるシカやイノシシがへったことも、<ruby>数<rt>かず</rt></ruby>の<ruby>減少<rt>げんしょう</rt></ruby>につながっているよ。",
  },
  {
    name: "レッサーパンダ",
    image: "picture/レッサーパンダ.jpg",
    description: "<ruby>主<rt>おも</rt></ruby>に<ruby>夕方<rt>ゆうがた</rt></ruby>から<ruby>夜<rt>よる</rt></ruby>、<ruby>明<rt>あ</rt></ruby>け<ruby>方<rt>がた</rt></ruby>に<ruby>活動<rt>かつどう</rt></ruby>する<ruby>動物<rt>どうぶつ</rt></ruby>。<ruby>前足<rt>まえあし</rt></ruby>には「<ruby>第<rt>だい</rt></ruby>6の<ruby>指<rt>ゆび</rt></ruby>」と<ruby>呼<rt>よ</rt></ruby>ばれる<ruby>特別<rt>とくべつ</rt></ruby>な<ruby>突起<rt>とっき</rt></ruby>があって、これを<ruby>使<rt>つか</rt></ruby>って<ruby>物<rt>もの</rt></ruby>をつかむことができるよ。",
    area: "<ruby>中国南西部<rt>ちゅうごくなんせいぶ</rt></ruby>からヒマラヤにかけての<ruby>高地<rt>こうち</rt></ruby>の<ruby>森林<rt>しんりん</rt></ruby>・<ruby>竹林<rt>ちくりん</rt></ruby>",
    diet: "<ruby>竹<rt>たけ</rt></ruby>の<ruby>葉<rt>は</rt></ruby>、<ruby>木<rt>き</rt></ruby>の<ruby>実<rt>み</rt></ruby>、<ruby>果物<rt>くだもの</rt></ruby>など",
    reason: "<ruby>森林<rt>しんりん</rt></ruby>の<ruby>伐採<rt>ばっさい</rt></ruby>や<ruby>畑<rt>はたけ</rt></ruby>を<ruby>作<rt>つく</rt></ruby>るための<ruby>開発<rt>かいはつ</rt></ruby>で、すみかである<ruby>竹林<rt>ちくりん</rt></ruby>がへっていることが<ruby>大<rt>おお</rt></ruby>きな<ruby>原因<rt>げんいん</rt></ruby>。<ruby>毛皮<rt>けがわ</rt></ruby>を<ruby>目当<rt>めあ</rt></ruby>てにした<ruby>密猟<rt>みつりょう</rt></ruby>も、<ruby>数<rt>かず</rt></ruby>の<ruby>減少<rt>げんしょう</rt></ruby>に<ruby>影響<rt>えいきょう</rt></ruby>しているよ。",
  },
  {
    name: "リカオン",
    image: "picture/リカオン.jpg",
    description: "10<ruby>頭前後<rt>とうぜんご</rt></ruby>の<ruby>群<rt>む</rt></ruby>れ「パック」で<ruby>協力<rt>きょうりょく</rt></ruby>して<ruby>狩<rt>か</rt></ruby>りをする<ruby>動物<rt>どうぶつ</rt></ruby>。<ruby>狩<rt>か</rt></ruby>りの<ruby>成功率<rt>せいこうりつ</rt></ruby>は9<ruby>割<rt>わり</rt></ruby>ほどで、ライオンやハイエナよりも<ruby>狩<rt>か</rt></ruby>りの<ruby>成功率<rt>せいこうりつ</rt></ruby>が<ruby>高<rt>たか</rt></ruby>いよ。",
    area: "サハラ<ruby>砂漠以南<rt>さばくいなん</rt></ruby>のアフリカの<ruby>草原<rt>そうげん</rt></ruby>・サバンナ",
    diet: "ヌーやインパラなどの<ruby>草食動物<rt>そうしょくどうぶつ</rt></ruby>",
    reason: "<ruby>人<rt>ひと</rt></ruby>が<ruby>住<rt>す</rt></ruby>む<ruby>土地<rt>とち</rt></ruby>が<ruby>広<rt>ひろ</rt></ruby>がって<ruby>生息地<rt>せいそくち</rt></ruby>がせまくなったことや、<ruby>家畜<rt>かちく</rt></ruby>をおそうとして<ruby>人<rt>ひと</rt></ruby>にころされてしまうことが<ruby>原因<rt>げんいん</rt></ruby>。ペットの<ruby>犬<rt>いぬ</rt></ruby>からうつる<ruby>病気<rt>びょうき</rt></ruby>で<ruby>数<rt>かず</rt></ruby>がへることもあるよ。",
  },
  {
    name: "チンパンジー",
    image: "picture/チンパンジー.jpg",
    description: "<ruby>知能<rt>ちのう</rt></ruby>が<ruby>高<rt>たか</rt></ruby>く、<ruby>動<rt>うご</rt></ruby>きも<ruby>活発<rt>かっぱつ</rt></ruby>で<ruby>物覚<rt>ものおぼ</rt></ruby>えがいい<ruby>動物<rt>どうぶつ</rt></ruby>。<ruby>数頭<rt>すうとう</rt></ruby>から20<ruby>頭<rt>とう</rt></ruby>くらいの<ruby>群<rt>む</rt></ruby>れで<ruby>暮<rt>く</rt></ruby>らし、<ruby>夜<rt>よる</rt></ruby>になると<ruby>木<rt>き</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>に<ruby>寝床<rt>ねどこ</rt></ruby>を<ruby>作<rt>つく</rt></ruby>るよ。",
    area: "<ruby>西<rt>にし</rt></ruby>アフリカから<ruby>中央<rt>ちゅうおう</rt></ruby>アフリカの<ruby>森林<rt>しんりん</rt></ruby>",
    diet: "<ruby>果物<rt>くだもの</rt></ruby>、<ruby>葉<rt>は</rt></ruby>、<ruby>虫<rt>むし</rt></ruby>、<ruby>小<rt>ちい</rt></ruby>さな<ruby>動物<rt>どうぶつ</rt></ruby>など",
    reason: "<ruby>森林<rt>しんりん</rt></ruby>の<ruby>伐採<rt>ばっさい</rt></ruby>ですみかがへっていることや、<ruby>食用<rt>しょくよう</rt></ruby>やペットにするための<ruby>密猟<rt>みつりょう</rt></ruby>が<ruby>原因<rt>げんいん</rt></ruby>。<ruby>人<rt>ひと</rt></ruby>とにた<ruby>体<rt>からだ</rt></ruby>のつくりのため、<ruby>人<rt>ひと</rt></ruby>の<ruby>病気<rt>びょうき</rt></ruby>がうつって<ruby>数<rt>かず</rt></ruby>がへることもあるよ。",
  },
  {
    name: "ワオキツネザル",
    image: "picture/ワオキツネザル.jpg",
    description: "<ruby>歩<rt>ある</rt></ruby>くときに<ruby>長<rt>なが</rt></ruby>いしっぽを<ruby>立<rt>た</rt></ruby>てて、<ruby>先<rt>さき</rt></ruby>っぽをちょっと<ruby>後<rt>うし</rt></ruby>ろに<ruby>曲<rt>ま</rt></ruby>げているのが<ruby>特徴<rt>とくちょう</rt></ruby>。ジャンプ<ruby>力<rt>りょく</rt></ruby>があって、<ruby>地面<rt>じめん</rt></ruby>をぴょんぴょん<ruby>跳<rt>と</rt></ruby>びはねる。<ruby>水<rt>みず</rt></ruby>を<ruby>飲<rt>の</rt></ruby>むときは<ruby>犬<rt>いぬ</rt></ruby>みたいに<ruby>舌<rt>した</rt></ruby>でぺちゃぺちゃ<ruby>飲<rt>の</rt></ruby>むよ。",
    area: "マダガスカル<ruby>南部<rt>なんぶ</rt></ruby>の<ruby>岩<rt>いわ</rt></ruby>がちな<ruby>乾燥地帯<rt>かんそうちたい</rt></ruby>",
    diet: "<ruby>果物<rt>くだもの</rt></ruby>、<ruby>葉<rt>は</rt></ruby>、<ruby>花<rt>はな</rt></ruby>など",
    reason: "<ruby>畑<rt>はたけ</rt></ruby>や<ruby>牧場<rt>ぼくじょう</rt></ruby>を<ruby>作<rt>つく</rt></ruby>るための<ruby>森林<rt>しんりん</rt></ruby>の<ruby>伐採<rt>ばっさい</rt></ruby>で、すみかが<ruby>急速<rt>きゅうそく</rt></ruby>にへっていることが<ruby>原因<rt>げんいん</rt></ruby>。<ruby>食用<rt>しょくよう</rt></ruby>にされたり、ペットとしてつかまえられたりすることも<ruby>数<rt>かず</rt></ruby>の<ruby>減少<rt>げんしょう</rt></ruby>につながっているよ。",
  },
  {
    name: "ジェフロイクモザル",
    image: "picture/ジェフロイクモザル.jpg",
    description: "<ruby>細長<rt>ほそなが</rt></ruby>い<ruby>手足<rt>てあし</rt></ruby>と<ruby>尾<rt>お</rt></ruby>を<ruby>使<rt>つか</rt></ruby>って<ruby>枝<rt>えだ</rt></ruby>にぶら<ruby>下<rt>さ</rt></ruby>がる<ruby>姿<rt>すがた</rt></ruby>がクモのように<ruby>見<rt>み</rt></ruby>えることから<ruby>名前<rt>なまえ</rt></ruby>がついた。<ruby>尾<rt>お</rt></ruby>の<ruby>先<rt>さき</rt></ruby>の<ruby>内側<rt>うちがわ</rt></ruby>には、<ruby>指紋<rt>しもん</rt></ruby>のような<ruby>模様<rt>もよう</rt></ruby>があって、<ruby>枝<rt>えだ</rt></ruby>をしっかりつかむのに<ruby>役立<rt>やくだ</rt></ruby>っているよ。",
    area: "<ruby>中央<rt>ちゅうおう</rt></ruby>アメリカの<ruby>森林<rt>しんりん</rt></ruby>",
    diet: "<ruby>果物<rt>くだもの</rt></ruby>、<ruby>葉<rt>は</rt></ruby>、<ruby>種<rt>たね</rt></ruby>など",
    reason: "<ruby>森林<rt>しんりん</rt></ruby>の<ruby>伐採<rt>ばっさい</rt></ruby>ですみかがバラバラにへってしまうことや、<ruby>食用<rt>しょくよう</rt></ruby>やペットにするための<ruby>密猟<rt>みつりょう</rt></ruby>が<ruby>原因<rt>げんいん</rt></ruby>。<ruby>子<rt>こ</rt></ruby>どもをうむペースがゆっくりなので、<ruby>一度<rt>いちど</rt></ruby>へると<ruby>数<rt>かず</rt></ruby>がもどりにくいよ。",
  },
  {
    name: "ゴールデンライオンタマリン",
    image: "picture/ゴールデンライオンタマリン.jpg",
    description: "<ruby>全身<rt>ぜんしん</rt></ruby>が<ruby>金色<rt>きんいろ</rt></ruby>の<ruby>美<rt>うつく</rt></ruby>しい<ruby>毛<rt>け</rt></ruby>でおおわれ、<ruby>肩<rt>かた</rt></ruby>のまわりのふさふさした<ruby>毛<rt>け</rt></ruby>がライオンのたてがみのように<ruby>見<rt>み</rt></ruby>えることから<ruby>名前<rt>なまえ</rt></ruby>がついた。<ruby>日本<rt>にほん</rt></ruby>でこの<ruby>動物<rt>どうぶつ</rt></ruby>を<ruby>飼育<rt>しいく</rt></ruby>しているのは<ruby>浜松市動物園<rt>はままつしどうぶつえん</rt></ruby>だけ！",
    area: "ブラジル・リオデジャネイロ<ruby>州<rt>しゅう</rt></ruby>の<ruby>沿岸地方<rt>えんがんちほう</rt></ruby>",
    diet: "<ruby>果物<rt>くだもの</rt></ruby>、<ruby>虫<rt>むし</rt></ruby>、<ruby>小<rt>ちい</rt></ruby>さな<ruby>動物<rt>どうぶつ</rt></ruby>など",
    reason: "<ruby>町<rt>まち</rt></ruby>づくりや<ruby>農地<rt>のうち</rt></ruby>の<ruby>開発<rt>かいはつ</rt></ruby>で、すみかの<ruby>森林<rt>しんりん</rt></ruby>がほとんどなくなってしまったことが<ruby>原因<rt>げんいん</rt></ruby>。せまい<ruby>範囲<rt>はんい</rt></ruby>にしかすんでいないため、いちど<ruby>数<rt>かず</rt></ruby>がへると<ruby>絶滅<rt>ぜつめつ</rt></ruby>しやすいよ。<ruby>今<rt>いま</rt></ruby>は<ruby>保護活動<rt>ほごかつどう</rt></ruby>で<ruby>少<rt>すこ</rt></ruby>しずつ<ruby>数<rt>かず</rt></ruby>がふえているんだ。",
  },
  {
    name: "アジルテナガザル",
    image: "picture/アジルテナガザル.jpg",
    description: "<ruby>長<rt>なが</rt></ruby>い<ruby>腕<rt>うで</rt></ruby>を<ruby>使<rt>つか</rt></ruby>って<ruby>木<rt>き</rt></ruby>から<ruby>木<rt>き</rt></ruby>へ<ruby>移動<rt>いどう</rt></ruby>するのが<ruby>得意<rt>とくい</rt></ruby>で、<ruby>地面<rt>じめん</rt></ruby>に<ruby>下<rt>お</rt></ruby>りることはほとんどない。オスとメスのペアと<ruby>子<rt>こ</rt></ruby>どもからなる3～4<ruby>頭<rt>とう</rt></ruby>ほどの<ruby>群<rt>む</rt></ruby>れで<ruby>暮<rt>く</rt></ruby>らしているよ。",
    area: "マレー<ruby>半島<rt>はんとう</rt></ruby>・スマトラ・ボルネオ<ruby>南西部<rt>なんせいぶ</rt></ruby>の<ruby>森林<rt>しんりん</rt></ruby>",
    diet: "<ruby>果物<rt>くだもの</rt></ruby>、<ruby>葉<rt>は</rt></ruby>、<ruby>虫<rt>むし</rt></ruby>など",
    reason: "アブラヤシ<ruby>農園<rt>のうえん</rt></ruby>などをつくるための<ruby>森林<rt>しんりん</rt></ruby>の<ruby>伐採<rt>ばっさい</rt></ruby>で、すみかがへっていることが<ruby>大<rt>おお</rt></ruby>きな<ruby>原因<rt>げんいん</rt></ruby>。ペットにするための<ruby>密猟<rt>みつりょう</rt></ruby>も、<ruby>数<rt>かず</rt></ruby>の<ruby>減少<rt>げんしょう</rt></ruby>につながっているよ。",
  },
  {
    name: "シシオザル",
    image: "picture/シシオザル.jpg",
    description: "ライオンのような<ruby>立派<rt>りっぱ</rt></ruby>なグレーのたてがみと、<ruby>先<rt>さき</rt></ruby>がフワフワとしたしっぽが<ruby>特徴<rt>とくちょう</rt></ruby>だよ。",
    area: "インド<ruby>南西部<rt>なんせいぶ</rt></ruby>の<ruby>熱帯雨林<rt>ねったいうりん</rt></ruby>",
    diet: "<ruby>果物<rt>くだもの</rt></ruby>、<ruby>葉<rt>は</rt></ruby>など",
    reason: "<ruby>熱帯雨林<rt>ねったいうりん</rt></ruby>がなくなって、すみかがなくなってしまったことが<ruby>原因<rt>げんいん</rt></ruby>。せまい<ruby>範囲<rt>はんい</rt></ruby>にしかすんでいないため、<ruby>環境破壊<rt>かんきょうはかい</rt></ruby>の<ruby>影響<rt>えいきょう</rt></ruby>を<ruby>受<rt>う</rt></ruby>けやすく、<ruby>今<rt>いま</rt></ruby>は<ruby>世界中<rt>せかいじゅう</rt></ruby>の<ruby>動物園<rt>どうぶつえん</rt></ruby>で<ruby>保護<rt>ほご</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>っているよ。",
  },
  {
    name: "フランソワルトン",
    image: "picture/フランソワルトン.jpg",
    description: "ほほから<ruby>耳<rt>みみ</rt></ruby>にかけて<ruby>白<rt>しろ</rt></ruby>い<ruby>毛<rt>け</rt></ruby>が<ruby>生<rt>は</rt></ruby>えて、とがった<ruby>頭<rt>あたま</rt></ruby>の<ruby>毛<rt>け</rt></ruby>が<ruby>特徴<rt>とくちょう</rt></ruby>だよ。<ruby>赤<rt>あか</rt></ruby>ちゃんのころは、オレンジや<ruby>金色<rt>きんいろ</rt></ruby>で<ruby>鮮<rt>あざ</rt></ruby>やかな<ruby>姿<rt>すがた</rt></ruby>だよ。",
    area: "ベトナム<ruby>北部<rt>ほくぶ</rt></ruby>から<ruby>中国南部<rt>ちゅうごくなんぶ</rt></ruby>にかけての<ruby>森<rt>もり</rt></ruby>や<ruby>洞窟<rt>どうくつ</rt></ruby>",
    diet: "<ruby>果物<rt>くだもの</rt></ruby>、<ruby>葉<rt>は</rt></ruby>、<ruby>種子<rt>しゅし</rt></ruby>など",
    reason: "<ruby>密猟<rt>みつりょう</rt></ruby>や<ruby>森林<rt>しんりん</rt></ruby>の<ruby>伐採<rt>ばっさい</rt></ruby>で、すみかがなくなってしまったことが<ruby>原因<rt>げんいん</rt></ruby>。<ruby>今<rt>いま</rt></ruby>は<ruby>保護活動<rt>ほごかつどう</rt></ruby>が<ruby>進<rt>すす</rt></ruby>められているよ。",
  },
];