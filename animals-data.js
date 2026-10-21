// =======================================
// どうぶつ情報データ（全動物ぶん、ここに追記していく）
// =======================================
//
// 動物を1匹追加したいときは、この配列に1つオブジェクトを追記するだけでOK。
// animal.html が name=○○ をURLから読み取って、この中から該当データを探して表示する。
// 新しい .html ファイルを作る必要はない。
//
// name        : マップのエリア定義(index.html内 areas)と必ず同じ表記にする
// area        : 生息地※まだ正式名称が無い場合は仮でOK
// image       : 写真のパス（用意できるまでは placeholder のままでOK）
// description : 解説文（まだ無ければ placeholder のままでOK）
//
// ※ area・description は浜松市動物園公式サイト（hamazoo.net）の飼育動物紹介ページを
//   参考に、こども向けにやさしい言葉で書き直しています。

const ANIMALS_DATA = [

// ===== 哺乳類：有袋目 =====
{
  name: "クロカンガルー",
  area: "オーストラリア<ruby>南部<rt>なんぶ</rt></ruby>の<ruby>森林<rt>しんりん</rt></ruby>",
  image: "picture/クロカンガルー.jpg",
  description: "10～12<ruby>頭<rt>とう</rt></ruby>くらいの<ruby>群<rt>む</rt></ruby>れで<ruby>暮<rt>く</rt></ruby>らすカンガルー。<ruby>夜<rt>よる</rt></ruby>に<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>をさがして、<ruby>暑<rt>あつ</rt></ruby>い<ruby>昼間<rt>ひるま</rt></ruby>は<ruby>休<rt>やす</rt></ruby>んでいる。<ruby>後<rt>うし</rt></ruby>ろ<ruby>足<rt>あし</rt></ruby>と<ruby>尾<rt>お</rt></ruby>がよく<ruby>発達<rt>はったつ</rt></ruby>していて、<ruby>一回<rt>いっかい</rt></ruby>のジャンプで7～8mも<ruby>跳<rt>と</rt></ruby>び、<ruby>走<rt>はし</rt></ruby>る<ruby>速<rt>はや</rt></ruby>さは<ruby>時速<rt>じそく</rt></ruby>40kmにもなるよ。"
},
{
  name: "オオカンガルー",
  area: "オーストラリア<ruby>南東部<rt>なんとうぶ</rt></ruby>・タスマニア<ruby>島<rt>とう</rt></ruby>の<ruby>草原<rt>そうげん</rt></ruby>や<ruby>森林<rt>しんりん</rt></ruby>",
  image: "picture/オオカンガルー.jpg",
  description: "<ruby>別名<rt>べつめい</rt></ruby>「ハイイロカンガルー」とも<ruby>呼<rt>よ</rt></ruby>ばれる<ruby>大型<rt>おおがた</rt></ruby>のカンガルー。<ruby>群<rt>む</rt></ruby>れをつくって<ruby>夜<rt>よる</rt></ruby>に<ruby>活動<rt>かつどう</rt></ruby>する。<ruby>赤<rt>あか</rt></ruby>ちゃんは<ruby>生<rt>う</rt></ruby>まれてから<ruby>半年<rt>はんとし</rt></ruby>ほど、お<ruby>母<rt>かあ</rt></ruby>さんのおなかの<ruby>袋<rt>ふくろ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で<ruby>育<rt>そだ</rt></ruby>つよ。"
},

// ===== 哺乳類：霊長目 =====
{
  name: "ワオキツネザル",
  area: "マダガスカル<ruby>南部<rt>なんぶ</rt></ruby>の<ruby>岩<rt>いわ</rt></ruby>がちな<ruby>乾燥地帯<rt>かんそうちたい</rt></ruby>",
  image: "picture/ワオキツネザル.jpg",
  description: "<ruby>歩<rt>ある</rt></ruby>くときに<ruby>長<rt>なが</rt></ruby>いしっぽを<ruby>立<rt>た</rt></ruby>てて、<ruby>先<rt>さき</rt></ruby>っぽをちょっと<ruby>後<rt>うし</rt></ruby>ろに<ruby>曲<rt>ま</rt></ruby>げているのが<ruby>特徴<rt>とくちょう</rt></ruby>。ジャンプ<ruby>力<rt>りょく</rt></ruby>があって、<ruby>地面<rt>じめん</rt></ruby>をぴょんぴょん<ruby>跳<rt>と</rt></ruby>びはねる。<ruby>水<rt>みず</rt></ruby>を<ruby>飲<rt>の</rt></ruby>むときは<ruby>犬<rt>いぬ</rt></ruby>みたいに<ruby>舌<rt>した</rt></ruby>でぺちゃぺちゃ<ruby>飲<rt>の</rt></ruby>むよ。"
},
{
  name: "クロキツネザル",
  area: "マダガスカル<ruby>北西部<rt>ほくせいぶ</rt></ruby>の<ruby>森林<rt>しんりん</rt></ruby>",
  image: "picture/クロキツネザル.jpg",
  description: "オスとメスで<ruby>毛<rt>け</rt></ruby>の<ruby>色<rt>いろ</rt></ruby>がちがうのがおもしろいところ。<ruby>全身<rt>ぜんしん</rt></ruby><ruby>真<rt>ま</rt></ruby>っ<ruby>黒<rt>くろ</rt></ruby>なのがオスで、メスは<ruby>栗色<rt>くりいろ</rt></ruby>やオレンジ<ruby>色<rt>いろ</rt></ruby>をしている。メスがリーダーになって5～15<ruby>頭<rt>とう</rt></ruby>くらいの<ruby>群<rt>む</rt></ruby>れで<ruby>木<rt>き</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>で<ruby>暮<rt>く</rt></ruby>らすよ。"
},
{
  name: "コモンリスザル",
  area: "<ruby>中央<rt>ちゅうおう</rt></ruby>アメリカ～<ruby>南<rt>みなみ</rt></ruby>アメリカの<ruby>湿<rt>しめ</rt></ruby>った<ruby>森林<rt>しんりん</rt></ruby>",
  image: "picture/コモンリスザル.jpg",
  description: "<ruby>見<rt>み</rt></ruby>た<ruby>目<rt>め</rt></ruby>がリスに<ruby>似<rt>に</rt></ruby>ていることから「リスザル」という<ruby>名前<rt>なまえ</rt></ruby>がついた。<ruby>体<rt>からだ</rt></ruby>は<ruby>小<rt>ちい</rt></ruby>さいけれど<ruby>脳<rt>のう</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きいことで<ruby>知<rt>し</rt></ruby>られていて、<ruby>虫<rt>むし</rt></ruby>を<ruby>食<rt>た</rt></ruby>べるのが<ruby>得意<rt>とくい</rt></ruby>。<ruby>多<rt>おお</rt></ruby>いときは100<ruby>頭以上<rt>とういじょう</rt></ruby>の<ruby>大<rt>おお</rt></ruby>きな<ruby>群<rt>む</rt></ruby>れになることもあるよ。"
},
{
  name: "フサオマキザル",
  area: "<ruby>南<rt>みなみ</rt></ruby>アメリカの<ruby>亜熱帯林<rt>あねったいりん</rt></ruby>・<ruby>熱帯林<rt>ねったいりん</rt></ruby>",
  image: "picture/フサオマキザル.jpg",
  description: "<ruby>群<rt>む</rt></ruby>れの<ruby>中<rt>なか</rt></ruby>の<ruby>上下関係<rt>じょうげかんけい</rt></ruby>をよく<ruby>意識<rt>いしき</rt></ruby>して<ruby>行動<rt>こうどう</rt></ruby>するおりこうなサル。<ruby>飼育下<rt>しいくか</rt></ruby>では<ruby>石<rt>いし</rt></ruby>などの<ruby>道具<rt>どうぐ</rt></ruby>を<ruby>上手<rt>じょうず</rt></ruby>に<ruby>使<rt>つか</rt></ruby>うことで<ruby>知<rt>し</rt></ruby>られていて、「<ruby>頭<rt>あたま</rt></ruby>のいいサル」と<ruby>言<rt>い</rt></ruby>われているよ。"
},
{
  name: "ジェフロイクモザル",
  area: "<ruby>中央<rt>ちゅうおう</rt></ruby>アメリカの<ruby>森林<rt>しんりん</rt></ruby>",
  image: "picture/ジェフロイクモザル.jpg",
  description: "<ruby>細長<rt>ほそなが</rt></ruby>い<ruby>手足<rt>てあし</rt></ruby>と<ruby>尾<rt>お</rt></ruby>を<ruby>使<rt>つか</rt></ruby>って<ruby>枝<rt>えだ</rt></ruby>にぶら<ruby>下<rt>さ</rt></ruby>がる<ruby>姿<rt>すがた</rt></ruby>がクモのように<ruby>見<rt>み</rt></ruby>えることから<ruby>名前<rt>なまえ</rt></ruby>がついた。<ruby>尾<rt>お</rt></ruby>の<ruby>先<rt>さき</rt></ruby>の<ruby>内側<rt>うちがわ</rt></ruby>には、<ruby>指紋<rt>しもん</rt></ruby>のような<ruby>模様<rt>もよう</rt></ruby>があって、<ruby>枝<rt>えだ</rt></ruby>をしっかりつかむのに<ruby>役立<rt>やくだ</rt></ruby>っているよ。"
},
{
  name: "ブラウンケナガクモザル",
  area: "コロンビア・ベネズエラの<ruby>熱帯雨林<rt>ねったいうりん</rt></ruby>",
  image: "picture/ブラウンケナガクモザル.jpg",
  description: "<ruby>長<rt>なが</rt></ruby>い<ruby>手足<rt>てあし</rt></ruby>と<ruby>尾<rt>お</rt></ruby>を<ruby>使<rt>つか</rt></ruby>って<ruby>木<rt>き</rt></ruby>から<ruby>木<rt>き</rt></ruby>へ<ruby>飛<rt>と</rt></ruby>び<ruby>移<rt>うつ</rt></ruby>るように<ruby>移動<rt>いどう</rt></ruby>し、<ruby>地面<rt>じめん</rt></ruby>に<ruby>下<rt>お</rt></ruby>りることはほとんどない。<ruby>頭<rt>あたま</rt></ruby>に<ruby>白<rt>しろ</rt></ruby>いもようがあり、<ruby>子<rt>こ</rt></ruby>どものころは<ruby>毛<rt>け</rt></ruby>がグレーっぽく、<ruby>大人<rt>おとな</rt></ruby>になると<ruby>茶色<rt>ちゃいろ</rt></ruby>に<ruby>変<rt>か</rt></ruby>わっていくよ。"
},
{
  name: "アカテタマリン",
  area: "ブラジル・ギアナのアマゾン<ruby>川北部<rt>がわほくぶ</rt></ruby>の<ruby>森林<rt>しんりん</rt></ruby>",
  image: "picture/アカテタマリン.jpg",
  description: "お<ruby>父<rt>とう</rt></ruby>さんが<ruby>赤<rt>あか</rt></ruby>ちゃんのお<ruby>世話<rt>せわ</rt></ruby>をする、めずらしい<ruby>家族<rt>かぞく</rt></ruby>のしかたを<ruby>持<rt>も</rt></ruby>つサル。<ruby>仲間<rt>なかま</rt></ruby>どうしで<ruby>協力<rt>きょうりょく</rt></ruby>して、<ruby>弟<rt>おとうと</rt></ruby>や<ruby>妹<rt>いもうと</rt></ruby>のお<ruby>世話<rt>せわ</rt></ruby>をする<ruby>子<rt>こ</rt></ruby>もいるよ。"
},
{
  name: "ワタボウシタマリン",
  area: "コロンビア<ruby>北西部<rt>ほくせいぶ</rt></ruby>",
  image: "picture/ワタボウシタマリン.jpg",
  description: "<ruby>頭<rt>あたま</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>にある<ruby>白<rt>しろ</rt></ruby>いふわふわの<ruby>毛<rt>け</rt></ruby>が、<ruby>綿<rt>わた</rt></ruby>の<ruby>帽子<rt>ぼうし</rt></ruby>をかぶっているように<ruby>見<rt>み</rt></ruby>えることから<ruby>名前<rt>なまえ</rt></ruby>がついた。<ruby>家族<rt>かぞく</rt></ruby>みんなで<ruby>赤<rt>あか</rt></ruby>ちゃんのお<ruby>世話<rt>せわ</rt></ruby>をする、なかよしの<ruby>群<rt>む</rt></ruby>れをつくるよ。"
},
{
  name: "ゴールデンライオンタマリン",
  area: "ブラジル・リオデジャネイロ<ruby>州<rt>しゅう</rt></ruby>の<ruby>沿岸地方<rt>えんがんちほう</rt></ruby>",
  image: "picture/ゴールデンライオンタマリン.jpg",
  description: "<ruby>全身<rt>ぜんしん</rt></ruby>が<ruby>金色<rt>きんいろ</rt></ruby>の<ruby>美<rt>うつく</rt></ruby>しい<ruby>毛<rt>け</rt></ruby>でおおわれ、<ruby>肩<rt>かた</rt></ruby>のまわりのふさふさした<ruby>毛<rt>け</rt></ruby>がライオンのたてがみのように<ruby>見<rt>み</rt></ruby>えることから<ruby>名前<rt>なまえ</rt></ruby>がついた。<ruby>日本<rt>にほん</rt></ruby>でこの<ruby>動物<rt>どうぶつ</rt></ruby>を<ruby>飼育<rt>しいく</rt></ruby>しているのは<ruby>浜松市動物園<rt>はままつしどうぶつえん</rt></ruby>だけ！"
},
{
  name: "コモンマーモセット",
  area: "<ruby>南米<rt>なんべい</rt></ruby>ブラジル<ruby>東海岸<rt>ひがしかいがん</rt></ruby>の<ruby>森林<rt>しんりん</rt></ruby>",
  image: "picture/コモンマーモセット.jpg",
  description: "<ruby>耳<rt>みみ</rt></ruby>のまわりにふさふさした<ruby>毛<rt>け</rt></ruby>があって、<ruby>耳<rt>みみ</rt></ruby>がすっぽりおおわれているのが<ruby>特徴<rt>とくちょう</rt></ruby>。2～13<ruby>頭<rt>とう</rt></ruby>くらいの<ruby>群<rt>む</rt></ruby>れで<ruby>木<rt>き</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>で<ruby>生活<rt>せいかつ</rt></ruby>しているよ。"
},
{
  name: "クロミミマーモセット",
  area: "<ruby>南米<rt>なんべい</rt></ruby>ブラジル<ruby>南東海岸<rt>なんとうかいがん</rt></ruby>",
  image: "picture/クロミミマーモセット.jpg",
  description: "コモンマーモセットの<ruby>耳<rt>みみ</rt></ruby>の<ruby>毛<rt>け</rt></ruby>が<ruby>黒<rt>くろ</rt></ruby>くなったような<ruby>見<rt>み</rt></ruby>た<ruby>目<rt>め</rt></ruby>で、<ruby>小鳥<rt>ことり</rt></ruby>のような<ruby>声<rt>こえ</rt></ruby>で<ruby>鳴<rt>な</rt></ruby>く。<ruby>小<rt>ちい</rt></ruby>さな<ruby>家族<rt>かぞく</rt></ruby>の<ruby>群<rt>む</rt></ruby>れで<ruby>木<rt>き</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>で<ruby>暮<rt>く</rt></ruby>らしているよ。"
},
{
  name: "ニホンザル",
  area: "<ruby>日本<rt>にほん</rt></ruby>の<ruby>森林<rt>しんりん</rt></ruby>（<ruby>世界<rt>せかい</rt></ruby>で<ruby>最<rt>もっと</rt></ruby>も<ruby>北<rt>きた</rt></ruby>に<ruby>分布<rt>ぶんぷ</rt></ruby>するサル）",
  image: "picture/ニホンザル.jpg",
  description: "20～80<ruby>頭<rt>とう</rt></ruby>くらいの<ruby>群<rt>む</rt></ruby>れをつくり、リーダーザルを<ruby>中心<rt>ちゅうしん</rt></ruby>に<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>を<ruby>探<rt>さが</rt></ruby>して<ruby>移動<rt>いどう</rt></ruby>する。<ruby>群<rt>む</rt></ruby>れの<ruby>中<rt>なか</rt></ruby>にはリーダー、<ruby>若<rt>わか</rt></ruby>いサル、お<ruby>母<rt>かあ</rt></ruby>さんと<ruby>赤<rt>あか</rt></ruby>ちゃんなど、しっかりとした<ruby>順番<rt>じゅんばん</rt></ruby>があるよ。"
},

{
  name: "クロザル",
  area: "インドネシア・スラウェシ<ruby>島北東部<rt>とうほくとうぶ</rt></ruby>",
  image: "picture/クロザル.jpg",
  description: "<ruby>約<rt>やく</rt></ruby>30<ruby>頭<rt>とう</rt></ruby>くらいの<ruby>群<rt>む</rt></ruby>れでくらし、オスが<ruby>群<rt>む</rt></ruby>れから<ruby>群<rt>む</rt></ruby>れへ<ruby>移動<rt>いどう</rt></ruby>することがある。<ruby>木<rt>き</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>でごはんを<ruby>食<rt>た</rt></ruby>べ、<ruby>地面<rt>じめん</rt></ruby>も<ruby>歩<rt>ある</rt></ruby>いて<ruby>移動<rt>いどう</rt></ruby>するよ。"
},
{
  name: "シシオザル",
  area: "インド<ruby>南部<rt>なんぶ</rt></ruby>の<ruby>湿<rt>しめ</rt></ruby>った<ruby>森林<rt>しんりん</rt></ruby>",
  image: "picture/シシオザル.jpg",
  description: "<ruby>顔<rt>かお</rt></ruby>のまわりに<ruby>生<rt>は</rt></ruby>えた<ruby>灰色<rt>はいいろ</rt></ruby>の<ruby>長<rt>なが</rt></ruby>い<ruby>毛<rt>け</rt></ruby>が、まるでライオンのたてがみのように<ruby>見<rt>み</rt></ruby>えることから<ruby>名前<rt>なまえ</rt></ruby>がついた。10～20<ruby>頭<rt>とう</rt></ruby>くらいの<ruby>群<rt>む</rt></ruby>れで<ruby>広<rt>ひろ</rt></ruby>い<ruby>範囲<rt>はんい</rt></ruby>を<ruby>移動<rt>いどう</rt></ruby>するよ。"
},
{
  name: "ドグエラヒヒ",
  area: "アフリカのサバンナ（シエラレオネ～エチオピアなど）",
  image: "picture/ドグエラヒヒ.jpg",
  description: "10～100<ruby>頭<rt>とう</rt></ruby>という<ruby>大<rt>おお</rt></ruby>きな<ruby>群<rt>む</rt></ruby>れでくらすサル。「アヌビスヒヒ」という<ruby>別<rt>べつ</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>もあるよ。オスの<ruby>間<rt>あいだ</rt></ruby>には<ruby>順番<rt>じゅんばん</rt></ruby>があるけれど、メスの<ruby>順番<rt>じゅんばん</rt></ruby>はまだよくわかっていないんだ。"
},
{
  name: "マンドリル",
  area: "カメルーン<ruby>南部<rt>なんぶ</rt></ruby>・ガボン・コンゴの<ruby>多雨林<rt>たうりん</rt></ruby>",
  image: "picture/マンドリル.jpg",
  description: "オスの<ruby>鼻<rt>はな</rt></ruby>にまっすぐな<ruby>赤<rt>あか</rt></ruby>い<ruby>線<rt>せん</rt></ruby>があり、その<ruby>両側<rt>りょうがわ</rt></ruby>が<ruby>青<rt>あお</rt></ruby>くなっているのが<ruby>特徴<rt>とくちょう</rt></ruby>。10<ruby>頭<rt>とう</rt></ruby>くらいの<ruby>小<rt>ちい</rt></ruby>さな<ruby>群<rt>む</rt></ruby>れで、<ruby>強<rt>つよ</rt></ruby>いオスが<ruby>群<rt>む</rt></ruby>れを<ruby>率<rt>ひき</rt></ruby>いているよ。"
},
{
  name: "アビシニアコロブス",
  area: "<ruby>東<rt>ひがし</rt></ruby>アフリカ～<ruby>中央<rt>ちゅうおう</rt></ruby>アフリカの<ruby>森林<rt>しんりん</rt></ruby>",
  image: "picture/アビシニアコロブス.jpg",
  description: "<ruby>手<rt>て</rt></ruby>の<ruby>親指<rt>おやゆび</rt></ruby>がないという、ちょっと<ruby>変<rt>か</rt></ruby>わった<ruby>体<rt>からだ</rt></ruby>の<ruby>特徴<rt>とくちょう</rt></ruby>を<ruby>持<rt>も</rt></ruby>つサル。<ruby>胃<rt>い</rt></ruby>が3つの<ruby>部分<rt>ぶぶん</rt></ruby>に<ruby>分<rt>わ</rt></ruby>かれていて、<ruby>主食<rt>しゅしょく</rt></ruby>である<ruby>葉<rt>は</rt></ruby>っぱをしっかり<ruby>消化<rt>しょうか</rt></ruby>できるようになっているよ。"
},
{
  name: "フランソワルトン",
  area: "ベトナム<ruby>北東部<rt>ほくとうぶ</rt></ruby>・<ruby>中国南部<rt>ちゅうごくなんぶ</rt></ruby>の<ruby>岩山地帯<rt>いわやまちたい</rt></ruby>",
  image: "picture/フランソワルトン.jpg",
  description: "<ruby>全身<rt>ぜんしん</rt></ruby><ruby>真<rt>ま</rt></ruby>っ<ruby>黒<rt>くろ</rt></ruby>で、ほおひげだけが<ruby>白<rt>しろ</rt></ruby>いのが<ruby>特徴<rt>とくちょう</rt></ruby>。<ruby>頭<rt>あたま</rt></ruby>のてっぺんの<ruby>毛<rt>け</rt></ruby>が<ruby>逆立<rt>さかだ</rt></ruby>っていて、<ruby>別名<rt>べつめい</rt></ruby>「クロハザル」とも<ruby>呼<rt>よ</rt></ruby>ばれるよ。<ruby>木<rt>き</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>で<ruby>群<rt>む</rt></ruby>れを<ruby>作<rt>つく</rt></ruby>って<ruby>暮<rt>く</rt></ruby>らし、めったに<ruby>地面<rt>じめん</rt></ruby>に<ruby>下<rt>お</rt></ruby>りないんだ。"
},
{
  name: "アジルテナガザル",
  area: "マレー<ruby>半島<rt>はんとう</rt></ruby>・スマトラ・ボルネオ<ruby>南西部<rt>なんせいぶ</rt></ruby>の<ruby>森林<rt>しんりん</rt></ruby>",
  image: "picture/アジルテナガザル.jpg",
  description: "<ruby>長<rt>なが</rt></ruby>い<ruby>腕<rt>うで</rt></ruby>を<ruby>使<rt>つか</rt></ruby>って<ruby>木<rt>き</rt></ruby>から<ruby>木<rt>き</rt></ruby>へ<ruby>移動<rt>いどう</rt></ruby>するのが<ruby>得意<rt>とくい</rt></ruby>で、<ruby>地面<rt>じめん</rt></ruby>に<ruby>下<rt>お</rt></ruby>りることはほとんどない。オスとメスのペアと<ruby>子<rt>こ</rt></ruby>どもからなる3～4<ruby>頭<rt>とう</rt></ruby>ほどの<ruby>群<rt>む</rt></ruby>れで<ruby>暮<rt>く</rt></ruby>らしているよ。"
},
{
  name: "スマトラオランウータン",
  area: "インドネシア・スマトラ<ruby>島北部<rt>とうほくぶ</rt></ruby>の<ruby>熱帯雨林<rt>ねったいうりん</rt></ruby>",
  image: "picture/スマトラオランウータン.jpg",
  description: "<ruby>現地<rt>げんち</rt></ruby>の<ruby>言葉<rt>ことば</rt></ruby>で「<ruby>森<rt>もり</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>」という<ruby>意味<rt>いみ</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>を<ruby>持<rt>も</rt></ruby>つ<ruby>動物<rt>どうぶつ</rt></ruby>。<ruby>長<rt>なが</rt></ruby>い<ruby>腕<rt>うで</rt></ruby>で<ruby>枝<rt>えだ</rt></ruby>から<ruby>枝<rt>えだ</rt></ruby>へゆっくりと<ruby>移動<rt>いどう</rt></ruby>し、<ruby>夜<rt>よる</rt></ruby>には<ruby>木<rt>き</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>に<ruby>寝床<rt>ねどこ</rt></ruby>を<ruby>作<rt>つく</rt></ruby>って<ruby>休<rt>やす</rt></ruby>むよ。"
},
{
  name: "チンパンジー",
  area: "<ruby>西<rt>にし</rt></ruby>アフリカ～<ruby>中央<rt>ちゅうおう</rt></ruby>アフリカの<ruby>森林<rt>しんりん</rt></ruby>",
  image: "picture/チンパンジー.jpg",
  description: "<ruby>知能<rt>ちのう</rt></ruby>が<ruby>高<rt>たか</rt></ruby>く、<ruby>動<rt>うご</rt></ruby>きも<ruby>活発<rt>かっぱつ</rt></ruby>で<ruby>物覚<rt>ものおぼ</rt></ruby>えがいい<ruby>動物<rt>どうぶつ</rt></ruby>。<ruby>数頭<rt>すうとう</rt></ruby>から20<ruby>頭<rt>とう</rt></ruby>くらいの<ruby>群<rt>む</rt></ruby>れで<ruby>暮<rt>く</rt></ruby>らし、<ruby>夜<rt>よる</rt></ruby>になると<ruby>木<rt>き</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>に<ruby>寝床<rt>ねどこ</rt></ruby>を<ruby>作<rt>つく</rt></ruby>るよ。"
},
{
  name: "ニシゴリラ",
  area: "<ruby>西<rt>にし</rt></ruby>アフリカの<ruby>常緑樹林<rt>じょうりょくじゅりん</rt></ruby>",
  image: "picture/ニシゴリラ.jpg",
  description: "<ruby>霊長類<rt>れいちょうるい</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で<ruby>最<rt>もっと</rt></ruby>も<ruby>大<rt>おお</rt></ruby>きな<ruby>体<rt>からだ</rt></ruby>を<ruby>持<rt>も</rt></ruby>つ<ruby>動物<rt>どうぶつ</rt></ruby>。「シルバーバック」と<ruby>呼<rt>よ</rt></ruby>ばれる<ruby>強<rt>つよ</rt></ruby>いオスが<ruby>群<rt>む</rt></ruby>れを<ruby>率<rt>ひき</rt></ruby>いていて、<ruby>群<rt>む</rt></ruby>れを<ruby>守<rt>まも</rt></ruby>るために<ruby>胸<rt>むね</rt></ruby>をたたく「ドラミング」というしぐさをすることがあるよ。"
},
{
  name: "ヒゲサキ",
  area: "ガイアナ～ベネズエラ<ruby>南部<rt>なんぶ</rt></ruby>・アマゾン<ruby>川流域<rt>がわりゅういき</rt></ruby>の<ruby>熱帯雨林<rt>ねったいうりん</rt></ruby>",
  image: "picture/ヒゲサキ.jpg",
  description: "30～40<ruby>頭<rt>とう</rt></ruby>くらいの<ruby>大<rt>おお</rt></ruby>きな<ruby>群<rt>む</rt></ruby>れをつくることがあるサル。<ruby>日本<rt>にほん</rt></ruby>では<ruby>数<rt>かぞ</rt></ruby>えるほどの<ruby>施設<rt>しせつ</rt></ruby>でしか<ruby>飼育<rt>しいく</rt></ruby>されていない、とてもめずらしいサルなんだ。"
},

// ===== 哺乳類：ウサギ目・齧歯目・ハリネズミ目 =====
{
  name: "カイウサギ",
  area: "（<ruby>家畜<rt>かちく</rt></ruby>）もとはヨーロッパアナウサギ",
  image: "picture/カイウサギ.jpg",
  description: "<ruby>野生<rt>やせい</rt></ruby>のヨーロッパアナウサギを<ruby>家畜<rt>かちく</rt></ruby>にしたウサギ。<ruby>今<rt>いま</rt></ruby>では150<ruby>種類<rt>しゅるい</rt></ruby>くらいの<ruby>品種<rt>ひんしゅ</rt></ruby>がいて、<ruby>毛皮用<rt>けがわよう</rt></ruby>、ペット<ruby>用<rt>よう</rt></ruby>などいろいろな<ruby>目的<rt>もくてき</rt></ruby>で<ruby>飼<rt>か</rt></ruby>われているよ。"
},
{
  name: "アメリカビーバー",
  area: "<ruby>北<rt>きた</rt></ruby>アメリカの<ruby>川<rt>かわ</rt></ruby>や<ruby>湖<rt>みずうみ</rt></ruby>",
  image: "picture/アメリカビーバー.jpg",
  description: "<ruby>丈夫<rt>じょうぶ</rt></ruby>な<ruby>歯<rt>は</rt></ruby>で<ruby>木<rt>き</rt></ruby>をかじり<ruby>倒<rt>たお</rt></ruby>して、<ruby>自分<rt>じぶん</rt></ruby>の<ruby>身<rt>み</rt></ruby>を<ruby>守<rt>まも</rt></ruby>るためのダムを<ruby>作<rt>つく</rt></ruby>る<ruby>動物<rt>どうぶつ</rt></ruby>。15<ruby>分以上<rt>ふんいじょう</rt></ruby>も<ruby>水<rt>みず</rt></ruby>の<ruby>中<rt>なか</rt></ruby>に<ruby>潜<rt>もぐ</rt></ruby>っていられるよ。"
},
{
  name: "アフリカタテガミヤマアラシ",
  area: "アフリカ<ruby>大陸<rt>たいりく</rt></ruby>のサバンナや<ruby>森林<rt>しんりん</rt></ruby>",
  image: "picture/アフリカタテガミヤマアラシ.jpg",
  description: "<ruby>体<rt>からだ</rt></ruby>じゅうの<ruby>硬<rt>かた</rt></ruby>い<ruby>針毛<rt>はりげ</rt></ruby>が<ruby>特徴<rt>とくちょう</rt></ruby>で、<ruby>危険<rt>きけん</rt></ruby>を<ruby>感<rt>かん</rt></ruby>じると<ruby>針<rt>はり</rt></ruby>を<ruby>広<rt>ひろ</rt></ruby>げて<ruby>立<rt>た</rt></ruby>ち<ruby>向<rt>む</rt></ruby>かう。<ruby>尾<rt>お</rt></ruby>をふって<ruby>音<rt>おと</rt></ruby>を<ruby>出<rt>だ</rt></ruby>し、<ruby>相手<rt>あいて</rt></ruby>をおどかすこともあるよ。"
},
{
  name: "カナダヤマアラシ",
  area: "<ruby>北<rt>きた</rt></ruby>アメリカ（<ruby>北部<rt>ほくぶ</rt></ruby>・<ruby>中部<rt>ちゅうぶ</rt></ruby>）",
  image: "picture/カナダヤマアラシ.jpg",
  description: "<ruby>全身<rt>ぜんしん</rt></ruby>に<ruby>約<rt>やく</rt></ruby>3<ruby>万本<rt>まんぼん</rt></ruby>もの<ruby>針毛<rt>はりげ</rt></ruby>が<ruby>生<rt>は</rt></ruby>えていて、<ruby>先<rt>さき</rt></ruby>には<ruby>釣<rt>つ</rt></ruby>り<ruby>針<rt>ばり</rt></ruby>のような<ruby>返<rt>かえ</rt></ruby>しがついている。<ruby>大型<rt>おおがた</rt></ruby>のねずみの<ruby>仲間<rt>なかま</rt></ruby>で、<ruby>夜<rt>よる</rt></ruby>にひとりで<ruby>行動<rt>こうどう</rt></ruby>することが<ruby>多<rt>おお</rt></ruby>いよ。"
},
{
  name: "カピバラ",
  area: "<ruby>南<rt>みなみ</rt></ruby>アメリカ（パナマ～アルゼンチン<ruby>北東部<rt>ほくとうぶ</rt></ruby>）の<ruby>水辺<rt>みずべ</rt></ruby>の<ruby>草原<rt>そうげん</rt></ruby>",
  image: "picture/カピバラ.jpg",
  description: "ねずみの<ruby>仲間<rt>なかま</rt></ruby>（<ruby>齧歯目<rt>げっしもく</rt></ruby>）では<ruby>世界最大<rt>せかいさいだい</rt></ruby>の<ruby>動物<rt>どうぶつ</rt></ruby>。10～20<ruby>頭<rt>とう</rt></ruby>くらいの<ruby>群<rt>む</rt></ruby>れで<ruby>朝<rt>あさ</rt></ruby>と<ruby>夕方<rt>ゆうがた</rt></ruby>に<ruby>活動<rt>かつどう</rt></ruby>し、<ruby>水<rt>みず</rt></ruby>かきのある<ruby>足<rt>あし</rt></ruby>で<ruby>上手<rt>じょうず</rt></ruby>に<ruby>泳<rt>およ</rt></ruby>ぐことができるよ。"
},
{
  name: "モルモット",
  area: "（<ruby>家畜化<rt>かちくか</rt></ruby>された<ruby>動物<rt>どうぶつ</rt></ruby>）もとは<ruby>南<rt>みなみ</rt></ruby>アンデス<ruby>地方<rt>ちほう</rt></ruby>",
  image: "picture/モルモット.jpg",
  description: "<ruby>鳴<rt>な</rt></ruby>き<ruby>声<rt>ごえ</rt></ruby>の<ruby>種類<rt>しゅるい</rt></ruby>がとても<ruby>多<rt>おお</rt></ruby>く、それを<ruby>使<rt>つか</rt></ruby>い<ruby>分<rt>わ</rt></ruby>けて<ruby>仲間<rt>なかま</rt></ruby>とおしゃべりするように<ruby>暮<rt>く</rt></ruby>らしている。1<ruby>頭<rt>とう</rt></ruby>1<ruby>頭<rt>とう</rt></ruby>、<ruby>毛<rt>け</rt></ruby>の<ruby>模様<rt>もよう</rt></ruby>がちがうのもおもしろいところだよ。"
},
{
  name: "チンチラ",
  area: "<ruby>南<rt>みなみ</rt></ruby>アメリカの<ruby>寒<rt>さむ</rt></ruby>く<ruby>乾<rt>かわ</rt></ruby>いた<ruby>地域<rt>ちいき</rt></ruby>",
  image: "picture/チンチラ.jpg",
  description: "<ruby>氷点下<rt>ひょうてんか</rt></ruby>になるような<ruby>寒<rt>さむ</rt></ruby>くて<ruby>乾<rt>かわ</rt></ruby>いた<ruby>場所<rt>ばしょ</rt></ruby>に<ruby>暮<rt>く</rt></ruby>らしていたため、ふわふわの<ruby>厚<rt>あつ</rt></ruby>い<ruby>毛皮<rt>けがわ</rt></ruby>を<ruby>持<rt>も</rt></ruby>っている。10～15<ruby>年<rt>ねん</rt></ruby>ほど<ruby>生<rt>い</rt></ruby>きる、<ruby>齧歯目<rt>げっしもく</rt></ruby>の<ruby>中<rt>なか</rt></ruby>でも<ruby>長生<rt>ながい</rt></ruby>きな<ruby>動物<rt>どうぶつ</rt></ruby>だよ。"
},
{
  name: "ヨツユビハリネズミ",
  area: "アフリカ（セネガル～スーダン・ザンビア）",
  image: "picture/ヨツユビハリネズミ.jpg",
  description: "<ruby>夜<rt>よる</rt></ruby>に<ruby>単独<rt>たんどく</rt></ruby>で<ruby>行動<rt>こうどう</rt></ruby>するハリネズミ。<ruby>乾<rt>かわ</rt></ruby>いた<ruby>土地<rt>とち</rt></ruby>や<ruby>低<rt>ひく</rt></ruby>い<ruby>木<rt>き</rt></ruby>の<ruby>茂<rt>しげ</rt></ruby>みに<ruby>暮<rt>く</rt></ruby>らし、エサが<ruby>多<rt>おお</rt></ruby>い<ruby>雨<rt>あめ</rt></ruby>の<ruby>季節<rt>きせつ</rt></ruby>に<ruby>赤<rt>あか</rt></ruby>ちゃんを<ruby>育<rt>そだ</rt></ruby>てるよ。"
},

// ===== 哺乳類：食肉目 =====
{
  name: "ホッキョクグマ",
  area: "<ruby>北極圏沿岸<rt>ほっきょくけんえんがん</rt></ruby>（ユーラシア<ruby>大陸<rt>たいりく</rt></ruby>の<ruby>流氷地帯<rt>りゅうひょうちたい</rt></ruby>・<ruby>北<rt>きた</rt></ruby>アメリカ<ruby>北部<rt>ほくぶ</rt></ruby>）",
  image: "picture/ホッキョクグマ.jpg",
  description: "<ruby>地上<rt>ちじょう</rt></ruby>で<ruby>一番<rt>いちばん</rt></ruby><ruby>大<rt>おお</rt></ruby>きな<ruby>肉食動物<rt>にくしょくどうぶつ</rt></ruby>で、<ruby>泳<rt>およ</rt></ruby>ぎがとても<ruby>得意<rt>とくい</rt></ruby>。<ruby>厳<rt>きび</rt></ruby>しい<ruby>寒<rt>さむ</rt></ruby>さに<ruby>耐<rt>た</rt></ruby>えられる<ruby>特別<rt>とくべつ</rt></ruby>な<ruby>毛<rt>け</rt></ruby>におおわれているよ。"
},
{
  name: "ツキノワグマ",
  area: "<ruby>日本<rt>にほん</rt></ruby>（<ruby>本州<rt>ほんしゅう</rt></ruby>・<ruby>四国<rt>しこく</rt></ruby>）などアジアの<ruby>森林<rt>しんりん</rt></ruby>",
  image: "picture/ツキノワグマ.jpg",
  description: "<ruby>胸<rt>むね</rt></ruby>に<ruby>白<rt>しろ</rt></ruby>い「<ruby>月<rt>つき</rt></ruby>の<ruby>輪<rt>わ</rt></ruby>」もようがあるのが<ruby>名前<rt>なまえ</rt></ruby>の<ruby>由来<rt>ゆらい</rt></ruby>。ひとりで<ruby>暮<rt>く</rt></ruby>らし、<ruby>冬<rt>ふゆ</rt></ruby>は11<ruby>月<rt>がつ</rt></ruby>ごろから<ruby>穴<rt>あな</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で<ruby>冬眠<rt>とうみん</rt></ruby>するよ。"
},
{
  name: "ヒグマ",
  area: "<ruby>北海道<rt>ほっかいどう</rt></ruby>・<ruby>北<rt>きた</rt></ruby>アメリカ<ruby>北部<rt>ほくぶ</rt></ruby>・ヨーロッパなど",
  image: "picture/ヒグマ.jpg",
  description: "<ruby>国内<rt>こくない</rt></ruby>で<ruby>一番<rt>いちばん</rt></ruby><ruby>大<rt>おお</rt></ruby>きな<ruby>陸<rt>りく</rt></ruby>の<ruby>動物<rt>どうぶつ</rt></ruby>。<ruby>何<rt>なん</rt></ruby>でも<ruby>食<rt>た</rt></ruby>べる<ruby>雑食性<rt>ざっしょくせい</rt></ruby>で、<ruby>野生<rt>やせい</rt></ruby>では<ruby>植物<rt>しょくぶつ</rt></ruby>の<ruby>葉<rt>は</rt></ruby>や<ruby>果実<rt>かじつ</rt></ruby>、<ruby>昆虫<rt>こんちゅう</rt></ruby>などを<ruby>食<rt>た</rt></ruby>べているよ。"
},
{
  name: "レッサーパンダ",
  area: "<ruby>中国南西部<rt>ちゅうごくなんせいぶ</rt></ruby>からヒマラヤにかけての<ruby>高地<rt>こうち</rt></ruby>の<ruby>森林<rt>しんりん</rt></ruby>・<ruby>竹林<rt>ちくりん</rt></ruby>",
  image: "picture/レッサーパンダ.jpg",
  description: "<ruby>主<rt>おも</rt></ruby>に<ruby>夕方<rt>ゆうがた</rt></ruby>から<ruby>夜<rt>よる</rt></ruby>、<ruby>明<rt>あ</rt></ruby>け<ruby>方<rt>がた</rt></ruby>に<ruby>活動<rt>かつどう</rt></ruby>する<ruby>動物<rt>どうぶつ</rt></ruby>。<ruby>前足<rt>まえあし</rt></ruby>には「<ruby>第<rt>だい</rt></ruby>6の<ruby>指<rt>ゆび</rt></ruby>」と<ruby>呼<rt>よ</rt></ruby>ばれる<ruby>特別<rt>とくべつ</rt></ruby>な<ruby>突起<rt>とっき</rt></ruby>があって、これを<ruby>使<rt>つか</rt></ruby>って<ruby>物<rt>もの</rt></ruby>をつかむことができるよ。"
},
{
  name: "コツメカワウソ",
  area: "インド～<ruby>中国南部<rt>ちゅうごくなんぶ</rt></ruby>・<ruby>東南<rt>とうなん</rt></ruby>アジアの<ruby>水辺<rt>みずべ</rt></ruby>",
  image: "picture/コツメカワウソ.jpg",
  description: "つめが<ruby>小<rt>ちい</rt></ruby>さいことから「コツメ」カワウソという<ruby>名前<rt>なまえ</rt></ruby>がついた。<ruby>水<rt>みず</rt></ruby>かきのある<ruby>足<rt>あし</rt></ruby>で<ruby>水中<rt>すいちゅう</rt></ruby>を<ruby>自由自在<rt>じゆうじざい</rt></ruby>に<ruby>泳<rt>およ</rt></ruby>ぎ、<ruby>夫婦<rt>ふうふ</rt></ruby>で<ruby>協力<rt>きょうりょく</rt></ruby>して<ruby>子育<rt>こそだ</rt></ruby>てをするよ。"
},
{
  name: "ミーアキャット",
  area: "<ruby>南<rt>みなみ</rt></ruby>アフリカ<ruby>共和国<rt>きょうわこく</rt></ruby>の<ruby>半砂漠地帯<rt>はんさばくちたい</rt></ruby>",
  image: "picture/ミーアキャット.jpg",
  description: "<ruby>家族<rt>かぞく</rt></ruby>のきずなが<ruby>強<rt>つよ</rt></ruby>く、<ruby>群<rt>む</rt></ruby>れみんなで<ruby>赤<rt>あか</rt></ruby>ちゃんをかわいがる<ruby>動物<rt>どうぶつ</rt></ruby>。<ruby>日光浴<rt>にっこうよく</rt></ruby>が<ruby>好<rt>す</rt></ruby>きで、<ruby>後<rt>うし</rt></ruby>ろ<ruby>足<rt>あし</rt></ruby>で<ruby>立<rt>た</rt></ruby>ち<ruby>上<rt>あ</rt></ruby>がる<ruby>姿<rt>すがた</rt></ruby>がとてもかわいいよ。"
},
{
  name: "アムールトラ",
  area: "ロシア～<ruby>中国<rt>ちゅうごく</rt></ruby>のアムール<ruby>川流域<rt>がわりゅういき</rt></ruby>",
  image: "picture/アムールトラ.jpg",
  description: "ネコの<ruby>仲間<rt>なかま</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で<ruby>一番<rt>いちばん</rt></ruby><ruby>大<rt>おお</rt></ruby>きい<ruby>動物<rt>どうぶつ</rt></ruby>。<ruby>広<rt>ひろ</rt></ruby>いなわばりを<ruby>持<rt>も</rt></ruby>ち、<ruby>基本的<rt>きほんてき</rt></ruby>にひとりで<ruby>暮<rt>く</rt></ruby>らしているよ。"
},
{
  name: "ヒョウ（クロヒョウ）",
  area: "アフリカ・<ruby>中央<rt>ちゅうおう</rt></ruby>アジア・インドなど<ruby>広<rt>ひろ</rt></ruby>い<ruby>地域<rt>ちいき</rt></ruby>",
  image: "picture/ヒョウ（クロヒョウ）.jpg",
  description: "ヒョウの<ruby>中<rt>なか</rt></ruby>でも<ruby>毛<rt>け</rt></ruby>が<ruby>黒<rt>くろ</rt></ruby>くなった「クロヒョウ」という<ruby>種類<rt>しゅるい</rt></ruby>。<ruby>獲物<rt>えもの</rt></ruby>をとると、<ruby>木<rt>き</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>に<ruby>引<rt>ひ</rt></ruby>き<ruby>上<rt>あ</rt></ruby>げて<ruby>隠<rt>かく</rt></ruby>す<ruby>習性<rt>しゅうせい</rt></ruby>があるよ。"
},
{
  name: "ライオン",
  area: "サハラ<ruby>砂漠<rt>さばく</rt></ruby>より<ruby>南<rt>みなみ</rt></ruby>のアフリカ・インド",
  image: "picture/ライオン.jpg",
  description: "ネコの<ruby>仲間<rt>なかま</rt></ruby>ではめずらしく、<ruby>群<rt>む</rt></ruby>れをつくって<ruby>暮<rt>く</rt></ruby>らす<ruby>動物<rt>どうぶつ</rt></ruby>。メスが<ruby>協力<rt>きょうりょく</rt></ruby>して<ruby>狩<rt>か</rt></ruby>りや<ruby>子育<rt>こそだ</rt></ruby>てをし、オスは<ruby>群<rt>む</rt></ruby>れを<ruby>守<rt>まも</rt></ruby>る<ruby>役目<rt>やくめ</rt></ruby>をしているよ。"
},
{
  name: "リカオン",
  area: "サハラ<ruby>砂漠以南<rt>さばくいなん</rt></ruby>のアフリカの<ruby>草原<rt>そうげん</rt></ruby>・サバンナ",
  image: "picture/リカオン.jpg",
  description: "10<ruby>頭前後<rt>とうぜんご</rt></ruby>の<ruby>群<rt>む</rt></ruby>れ「パック」で<ruby>協力<rt>きょうりょく</rt></ruby>して<ruby>狩<rt>か</rt></ruby>りをする<ruby>動物<rt>どうぶつ</rt></ruby>。<ruby>狩<rt>か</rt></ruby>りの<ruby>成功率<rt>せいこうりつ</rt></ruby>が<ruby>高<rt>たか</rt></ruby>く、<ruby>別名<rt>べつめい</rt></ruby>「アフリカの<ruby>狩猟犬<rt>しゅりょうけん</rt></ruby>」と<ruby>呼<rt>よ</rt></ruby>ばれているよ。"
},

// ===== 哺乳類：奇蹄目・偶蹄目 =====
{
  name: "ウマ（ポニー）",
  area: "（<ruby>家畜<rt>かちく</rt></ruby>）かつては<ruby>農耕<rt>のうこう</rt></ruby>や<ruby>鉱山<rt>こうざん</rt></ruby>の<ruby>仕事<rt>しごと</rt></ruby>で<ruby>活躍<rt>かつやく</rt></ruby>",
  image: "picture/ウマ（ポニー）.jpg",
  description: "<ruby>肩<rt>かた</rt></ruby>までの<ruby>高<rt>たか</rt></ruby>さが147cm<ruby>以下<rt>いか</rt></ruby>の<ruby>小<rt>ちい</rt></ruby>さい<ruby>馬<rt>うま</rt></ruby>の<ruby>総称<rt>そうしょう</rt></ruby>。<ruby>頭<rt>あたま</rt></ruby>がよくて<ruby>温厚<rt>おんこう</rt></ruby>な<ruby>性格<rt>せいかく</rt></ruby>で、<ruby>今<rt>いま</rt></ruby>ではペットや<ruby>乗馬<rt>じょうば</rt></ruby>として<ruby>人気<rt>にんき</rt></ruby>があるよ。"
},
{
  name: "ウマ（ミニチュアホース）",
  area: "（<ruby>家畜<rt>かちく</rt></ruby>）ポニーよりさらに<ruby>小<rt>ちい</rt></ruby>さい<ruby>品種<rt>ひんしゅ</rt></ruby>",
  image: "picture/ウマ（ミニチュアホース）.jpg",
  description: "<ruby>高<rt>たか</rt></ruby>さ80cm<ruby>以下<rt>いか</rt></ruby>のとても<ruby>小<rt>ちい</rt></ruby>さい<ruby>馬<rt>うま</rt></ruby>。<ruby>大型犬<rt>おおがたけん</rt></ruby>とほぼ<ruby>同<rt>おな</rt></ruby>じくらいの<ruby>大<rt>おお</rt></ruby>きさで、もともとは<ruby>鉱山<rt>こうざん</rt></ruby>での<ruby>仕事<rt>しごと</rt></ruby>のために<ruby>品種改良<rt>ひんしゅかいりょう</rt></ruby>されたよ。"
},
{
  name: "ロバ",
  area: "（<ruby>家畜<rt>かちく</rt></ruby>）アフリカ・アジアの<ruby>野生<rt>やせい</rt></ruby>ロバが<ruby>祖先<rt>そせん</rt></ruby>",
  image: "picture/ロバ.jpg",
  description: "<ruby>約<rt>やく</rt></ruby>6000<ruby>年前<rt>ねんまえ</rt></ruby>に<ruby>野生<rt>やせい</rt></ruby>のロバから<ruby>家畜<rt>かちく</rt></ruby>になった<ruby>動物<rt>どうぶつ</rt></ruby>。<ruby>体<rt>からだ</rt></ruby>は<ruby>小<rt>ちい</rt></ruby>さいけれどとても<ruby>丈夫<rt>じょうぶ</rt></ruby>で、<ruby>力<rt>ちから</rt></ruby>が<ruby>強<rt>つよ</rt></ruby>く、<ruby>粗末<rt>そまつ</rt></ruby>なエサでも<ruby>平気<rt>へいき</rt></ruby>だよ。"
},
{
  name: "シマウマ",
  area: "アフリカ（モザンビーク<ruby>北部<rt>ほくぶ</rt></ruby>～タンザニア・ケニア）の<ruby>草原<rt>そうげん</rt></ruby>",
  image: "picture/シマウマ.jpg",
  description: "<ruby>黒<rt>くろ</rt></ruby>と<ruby>白<rt>しろ</rt></ruby>のしまもようが<ruby>特徴<rt>とくちょう</rt></ruby>。とても<ruby>社会的<rt>しゃかいてき</rt></ruby>な<ruby>動物<rt>どうぶつ</rt></ruby>で、<ruby>草<rt>くさ</rt></ruby>や<ruby>水<rt>みず</rt></ruby>の<ruby>状況<rt>じょうきょう</rt></ruby>に<ruby>合<rt>あ</rt></ruby>わせて2<ruby>頭<rt>とう</rt></ruby>から<ruby>数百頭<rt>すうひゃくとう</rt></ruby>という<ruby>群<rt>む</rt></ruby>れをつくることもあるよ。"
},
{
  name: "ホンシュウジカ",
  area: "ベトナム～<ruby>中国東部<rt>ちゅうごくとうぶ</rt></ruby>・<ruby>台湾<rt>たいわん</rt></ruby>・<ruby>日本<rt>にほん</rt></ruby>の<ruby>温帯林<rt>おんたいりん</rt></ruby>",
  image: "picture/ホンシュウジカ.jpg",
  description: "<ruby>秋<rt>あき</rt></ruby>から<ruby>冬<rt>ふゆ</rt></ruby>にかけて<ruby>群<rt>む</rt></ruby>れをつくる<ruby>動物<rt>どうぶつ</rt></ruby>。オスの<ruby>角<rt>つの</rt></ruby>は4～5<ruby>月<rt>がつ</rt></ruby>ごろに<ruby>生<rt>は</rt></ruby>え<ruby>始<rt>はじ</rt></ruby>め、<ruby>年<rt>とし</rt></ruby>を<ruby>重<rt>かさ</rt></ruby>ねるごとに<ruby>枝<rt>えだ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>が<ruby>増<rt>ふ</rt></ruby>えていくよ。"
},
{
  name: "キリン",
  area: "サハラ<ruby>砂漠<rt>さばく</rt></ruby>より<ruby>南<rt>みなみ</rt></ruby>のアフリカの<ruby>草原<rt>そうげん</rt></ruby>",
  image: "picture/キリン.jpg",
  description: "<ruby>陸<rt>りく</rt></ruby>の<ruby>動物<rt>どうぶつ</rt></ruby>で<ruby>一番<rt>いちばん</rt></ruby><ruby>背<rt>せ</rt></ruby>が<ruby>高<rt>たか</rt></ruby>い<ruby>動物<rt>どうぶつ</rt></ruby>。オスは<ruby>高<rt>たか</rt></ruby>いところの<ruby>葉<rt>は</rt></ruby>、メスは<ruby>低<rt>ひく</rt></ruby>いところの<ruby>葉<rt>は</rt></ruby>を<ruby>食<rt>た</rt></ruby>べるので、<ruby>遠<rt>とお</rt></ruby>くからでも<ruby>見分<rt>みわ</rt></ruby>けることができるよ。"
},
{
  name: "アメリカバイソン",
  area: "<ruby>北<rt>きた</rt></ruby>アメリカの<ruby>草原地帯<rt>そうげんちたい</rt></ruby>",
  image: "picture/アメリカバイソン.jpg",
  description: "10～20<ruby>頭<rt>とう</rt></ruby>くらいの<ruby>群<rt>む</rt></ruby>れで<ruby>暮<rt>く</rt></ruby>らし、<ruby>早朝<rt>そうちょう</rt></ruby>と<ruby>夕方<rt>ゆうがた</rt></ruby>によく<ruby>活動<rt>かつどう</rt></ruby>する<ruby>動物<rt>どうぶつ</rt></ruby>。<ruby>体<rt>からだ</rt></ruby>についた<ruby>虫<rt>むし</rt></ruby>を<ruby>落<rt>お</rt></ruby>とすために、<ruby>泥<rt>どろ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>をごろごろ<ruby>転<rt>ころ</rt></ruby>がることがあるよ。"
},
{
  name: "ヤギ",
  area: "（<ruby>家畜<rt>かちく</rt></ruby>）<ruby>寒<rt>さむ</rt></ruby>さに<ruby>強<rt>つよ</rt></ruby>く<ruby>高<rt>たか</rt></ruby>い<ruby>所<rt>ところ</rt></ruby>が<ruby>好<rt>す</rt></ruby>き",
  image: "picture/ヤギ.jpg",
  description: "<ruby>紀元前<rt>きげんぜん</rt></ruby>7000<ruby>年<rt>ねん</rt></ruby>ごろから<ruby>家畜<rt>かちく</rt></ruby>として<ruby>飼<rt>か</rt></ruby>われてきた<ruby>動物<rt>どうぶつ</rt></ruby>。<ruby>寒<rt>さむ</rt></ruby>さに<ruby>強<rt>つよ</rt></ruby>くて<ruby>動<rt>うご</rt></ruby>きが<ruby>活発<rt>かっぱつ</rt></ruby>で、オスもメスもあごひげがあるよ。"
},
{
  name: "ヒツジ",
  area: "（<ruby>家畜<rt>かちく</rt></ruby>）<ruby>群<rt>む</rt></ruby>れで<ruby>暮<rt>く</rt></ruby>らす",
  image: "picture/ヒツジ.jpg",
  description: "<ruby>紀元前<rt>きげんぜん</rt></ruby>9000～7000<ruby>年<rt>ねん</rt></ruby>ごろから<ruby>家畜<rt>かちく</rt></ruby>として<ruby>飼<rt>か</rt></ruby>われてきた<ruby>動物<rt>どうぶつ</rt></ruby>。<ruby>臆病<rt>おくびょう</rt></ruby>な<ruby>性格<rt>せいかく</rt></ruby>で、いつも<ruby>群<rt>む</rt></ruby>れをつくって<ruby>過<rt>す</rt></ruby>ごすよ。<ruby>毛<rt>け</rt></ruby>は1<ruby>年<rt>ねん</rt></ruby>に1<ruby>回<rt>かい</rt></ruby><ruby>刈<rt>か</rt></ruby>られるんだ。"
},

// ===== 鳥類 =====
{
  name: "ダチョウ",
  area: "アフリカの<ruby>半砂漠<rt>はんさばく</rt></ruby>・サバンナ<ruby>地帯<rt>ちたい</rt></ruby>",
  image: "picture/ダチョウ.jpg",
  description: "<ruby>今<rt>いま</rt></ruby><ruby>生<rt>い</rt></ruby>きている<ruby>鳥<rt>とり</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で<ruby>最大<rt>さいだい</rt></ruby>の<ruby>鳥<rt>とり</rt></ruby>だけど、<ruby>飛<rt>と</rt></ruby>ぶことはできない「<ruby>走<rt>はし</rt></ruby>る<ruby>鳥<rt>とり</rt></ruby>」。<ruby>長<rt>なが</rt></ruby>くて<ruby>丈夫<rt>じょうぶ</rt></ruby>な<ruby>脚<rt>あし</rt></ruby>で<ruby>時速<rt>じそく</rt></ruby>50km<ruby>以上<rt>いじょう</rt></ruby>のスピードで<ruby>走<rt>はし</rt></ruby>ることができるよ。"
},
{
  name: "フンボルトペンギン",
  area: "ペルー・チリの<ruby>沿岸<rt>えんがん</rt></ruby>",
  image: "picture/フンボルトペンギン.jpg",
  description: "<ruby>冷<rt>つめ</rt></ruby>たいフンボルト<ruby>海流<rt>かいりゅう</rt></ruby>のあたりで<ruby>暮<rt>く</rt></ruby>らすペンギン。<ruby>日光<rt>にっこう</rt></ruby>を<ruby>浴<rt>あ</rt></ruby>びるのが<ruby>好<rt>す</rt></ruby>きで、<ruby>暑<rt>あつ</rt></ruby>さにも<ruby>比較的<rt>ひかくてき</rt></ruby><ruby>強<rt>つよ</rt></ruby>いといわれているよ。"
},
{
  name: "ショウジョウトキ",
  area: "カリブ<ruby>海沿岸<rt>かいえんがん</rt></ruby>の<ruby>南<rt>みなみ</rt></ruby>アメリカ",
  image: "picture/ショウジョウトキ.jpg",
  description: "<ruby>条件<rt>じょうけん</rt></ruby>がそろうとすぐに<ruby>繁殖<rt>はんしょく</rt></ruby>を<ruby>始<rt>はじ</rt></ruby>める、<ruby>環境<rt>かんきょう</rt></ruby>にうまく<ruby>合<rt>あ</rt></ruby>わせて<ruby>暮<rt>く</rt></ruby>らす<ruby>鳥<rt>とり</rt></ruby>。きれいな<ruby>羽<rt>はね</rt></ruby>の<ruby>色<rt>いろ</rt></ruby>が<ruby>特徴<rt>とくちょう</rt></ruby>だよ。"
},
{
  name: "シロトキ",
  area: "<ruby>北<rt>きた</rt></ruby>アメリカ<ruby>南部<rt>なんぶ</rt></ruby>～<ruby>南<rt>みなみ</rt></ruby>アメリカ<ruby>北部<rt>ほくぶ</rt></ruby>の<ruby>海岸<rt>かいがん</rt></ruby>やマングローブ<ruby>林<rt>りん</rt></ruby>",
  image: "picture/シロトキ.jpg",
  description: "<ruby>大<rt>おお</rt></ruby>きな<ruby>群<rt>む</rt></ruby>れで<ruby>暮<rt>く</rt></ruby>らす<ruby>鳥<rt>とり</rt></ruby>。オスが<ruby>巣<rt>す</rt></ruby>の<ruby>材料<rt>ざいりょう</rt></ruby>を<ruby>集<rt>あつ</rt></ruby>めて、メスが<ruby>水辺<rt>みずべ</rt></ruby>の<ruby>木<rt>き</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>に<ruby>巣<rt>す</rt></ruby>を<ruby>作<rt>つく</rt></ruby>るよ。"
},
{
  name: "アフリカクロトキ",
  area: "パキスタン・ネパール～インド・<ruby>中国北東部<rt>ちゅうごくほくとうぶ</rt></ruby>など",
  image: "picture/アフリカクロトキ.jpg",
  description: "コウノトリやサギの<ruby>仲間<rt>なかま</rt></ruby>と<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>群<rt>む</rt></ruby>れをつくり、<ruby>水辺<rt>みずべ</rt></ruby>の<ruby>高<rt>たか</rt></ruby>い<ruby>木<rt>き</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>に<ruby>巣<rt>す</rt></ruby>をつくる<ruby>鳥<rt>とり</rt></ruby>だよ。"
},
{
  name: "ベニイロフラミンゴ",
  area: "カリブ<ruby>海周辺<rt>かいしゅうへん</rt></ruby>・<ruby>南<rt>みなみ</rt></ruby>アメリカ<ruby>北部沿岸<rt>ほくぶえんがん</rt></ruby>など",
  image: "picture/ベニイロフラミンゴ.jpg",
  description: "フラミンゴの<ruby>中<rt>なか</rt></ruby>で<ruby>一番<rt>いちばん</rt></ruby><ruby>大<rt>おお</rt></ruby>きい<ruby>種類<rt>しゅるい</rt></ruby>。<ruby>仲間<rt>なかま</rt></ruby>どうしの<ruby>結<rt>むす</rt></ruby>びつきがとても<ruby>強<rt>つよ</rt></ruby>く、<ruby>何万羽<rt>なんまんば</rt></ruby>もの<ruby>大<rt>おお</rt></ruby>きな<ruby>群<rt>む</rt></ruby>れになることもあるよ。"
},
{
  name: "チリーフラミンゴ",
  area: "<ruby>南<rt>みなみ</rt></ruby>アメリカ（ペルー～チリ<ruby>南端<rt>なんたん</rt></ruby>、ブラジル～アルゼンチン）",
  image: "picture/チリーフラミンゴ.jpg",
  description: "ベニイロフラミンゴより<ruby>少<rt>すこ</rt></ruby>し<ruby>小<rt>ちい</rt></ruby>さく、<ruby>羽<rt>はね</rt></ruby>の<ruby>色<rt>いろ</rt></ruby>も<ruby>淡<rt>あわ</rt></ruby>いピンク<ruby>色<rt>いろ</rt></ruby>をしている。<ruby>脚<rt>あし</rt></ruby>の<ruby>真<rt>ま</rt></ruby>ん<ruby>中<rt>なか</rt></ruby>の<ruby>関節<rt>かんせつ</rt></ruby>や<ruby>水<rt>みず</rt></ruby>かきの<ruby>部分<rt>ぶぶん</rt></ruby>が<ruby>赤<rt>あか</rt></ruby>いのが<ruby>特徴<rt>とくちょう</rt></ruby>だよ。"
},
{
  name: "マガン",
  area: "ヨーロッパ・シベリア・<ruby>北<rt>きた</rt></ruby>アメリカ<ruby>極北部<rt>きょくほくぶ</rt></ruby>など",
  image: "picture/マガン.jpg",
  description: "<ruby>日本<rt>にほん</rt></ruby>には<ruby>冬<rt>ふゆ</rt></ruby>に<ruby>渡<rt>わた</rt></ruby>ってくる<ruby>渡<rt>わた</rt></ruby>り<ruby>鳥<rt>どり</rt></ruby>。<ruby>群<rt>む</rt></ruby>れで<ruby>飛<rt>と</rt></ruby>ぶときは、きれいに<ruby>並<rt>なら</rt></ruby>んだ<ruby>隊列<rt>たいれつ</rt></ruby>を<ruby>組<rt>く</rt></ruby>んで<ruby>飛<rt>と</rt></ruby>ぶよ。"
},
{
  name: "マガモ",
  area: "<ruby>北半球<rt>きたはんきゅう</rt></ruby>の<ruby>広<rt>ひろ</rt></ruby>い<ruby>地域<rt>ちいき</rt></ruby>",
  image: "picture/マガモ.jpg",
  description: "<ruby>湖<rt>みずうみ</rt></ruby>や<ruby>川<rt>かわ</rt></ruby>にすむカモ。<ruby>日本<rt>にほん</rt></ruby>には<ruby>主<rt>おも</rt></ruby>に<ruby>冬鳥<rt>ふゆどり</rt></ruby>としてやってくるよ。<ruby>実<rt>じつ</rt></ruby>はペットのアヒルは、このマガモを<ruby>元<rt>もと</rt></ruby>に<ruby>作<rt>つく</rt></ruby>られたんだ。"
},
{
  name: "カルガモ",
  area: "<ruby>中国<rt>ちゅうごく</rt></ruby>・<ruby>朝鮮<rt>ちょうせん</rt></ruby>・<ruby>日本<rt>にほん</rt></ruby>など",
  image: "picture/カルガモ.jpg",
  description: "<ruby>日本<rt>にほん</rt></ruby>でも<ruby>繁殖<rt>はんしょく</rt></ruby>する<ruby>身近<rt>みぢか</rt></ruby>なカモ。<ruby>水辺<rt>みずべ</rt></ruby>の<ruby>草<rt>くさ</rt></ruby>むらに<ruby>草<rt>くさ</rt></ruby>を<ruby>集<rt>あつ</rt></ruby>めて<ruby>巣<rt>す</rt></ruby>をつくるよ。"
},
{
  name: "ツクシガモ",
  area: "ユーラシアの<ruby>温帯部<rt>おんたいぶ</rt></ruby>",
  image: "picture/ツクシガモ.jpg",
  description: "<ruby>白<rt>しろ</rt></ruby>と<ruby>黒<rt>くろ</rt></ruby>、<ruby>茶色<rt>ちゃいろ</rt></ruby>の<ruby>体<rt>からだ</rt></ruby>に<ruby>赤<rt>あか</rt></ruby>いくちばしが<ruby>特徴<rt>とくちょう</rt></ruby>のカモ。<ruby>名前<rt>なまえ</rt></ruby>は<ruby>九州<rt>きゅうしゅう</rt></ruby>の<ruby>筑紫地方<rt>つくしちほう</rt></ruby>でよく<ruby>見<rt>み</rt></ruby>られたことに<ruby>由来<rt>ゆらい</rt></ruby>するよ。"
},
{
  name: "ヒドリガモ",
  area: "ユーラシア<ruby>大陸<rt>たいりく</rt></ruby>",
  image: "picture/ヒドリガモ.jpg",
  description: "<ruby>日本<rt>にほん</rt></ruby>には<ruby>冬鳥<rt>ふゆどり</rt></ruby>として<ruby>渡<rt>わた</rt></ruby>ってくるカモ。<ruby>湖<rt>みずうみ</rt></ruby>や<ruby>川<rt>かわ</rt></ruby>、<ruby>河口<rt>かこう</rt></ruby>などに<ruby>暮<rt>く</rt></ruby>らし、<ruby>春<rt>はる</rt></ruby>に<ruby>水辺<rt>みずべ</rt></ruby>の<ruby>藪<rt>やぶ</rt></ruby>に<ruby>巣<rt>す</rt></ruby>をつくるよ。"
},
{
  name: "ホシハジロ",
  area: "ユーラシア<ruby>大陸<rt>たいりく</rt></ruby>",
  image: "picture/ホシハジロ.jpg",
  description: "<ruby>日本<rt>にほん</rt></ruby>には<ruby>主<rt>おも</rt></ruby>に<ruby>冬鳥<rt>ふゆどり</rt></ruby>としてやってくるカモ。<ruby>水面<rt>すいめん</rt></ruby>に<ruby>浮<rt>う</rt></ruby>かぶ<ruby>水草<rt>みずくさ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>などに<ruby>巣<rt>す</rt></ruby>をつくり、4～5<ruby>月<rt>がつ</rt></ruby>ごろに<ruby>卵<rt>たまご</rt></ruby>を<ruby>産<rt>う</rt></ruby>むよ。"
},
{
  name: "ヒメコンドル",
  area: "カナダ<ruby>南部<rt>なんぶ</rt></ruby>～フォークランド<ruby>諸島<rt>しょとう</rt></ruby>",
  image: "picture/ヒメコンドル.jpg",
  description: "<ruby>低空<rt>ていくう</rt></ruby>を<ruby>飛<rt>と</rt></ruby>び<ruby>回<rt>まわ</rt></ruby>るのが<ruby>得意<rt>とくい</rt></ruby>で、においをたよりに<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>を<ruby>見<rt>み</rt></ruby>つけることができる<ruby>鳥<rt>とり</rt></ruby>だよ。"
},
{
  name: "アンデスコンドル",
  area: "<ruby>中央<rt>ちゅうおう</rt></ruby>～<ruby>南<rt>みなみ</rt></ruby>アメリカ<ruby>大陸<rt>たいりく</rt></ruby>",
  image: "picture/アンデスコンドル.jpg",
  description: "<ruby>繁殖<rt>はんしょく</rt></ruby>の<ruby>時期<rt>じき</rt></ruby><ruby>以外<rt>いがい</rt></ruby>は<ruby>単独<rt>たんどく</rt></ruby>か<ruby>小<rt>ちい</rt></ruby>さい<ruby>群<rt>む</rt></ruby>れで<ruby>生活<rt>せいかつ</rt></ruby>する<ruby>大<rt>おお</rt></ruby>きな<ruby>鳥<rt>とり</rt></ruby>。<ruby>視力<rt>しりょく</rt></ruby>をたよりにエサを<ruby>探<rt>さが</rt></ruby>すといわれているよ。"
},
{
  name: "オジロワシ",
  area: "ユーラシア<ruby>大陸中北部<rt>たいりくちゅうほくぶ</rt></ruby>・<ruby>北海道<rt>ほっかいどう</rt></ruby>など",
  image: "picture/オジロワシ.jpg",
  description: "<ruby>主<rt>おも</rt></ruby>に<ruby>海岸<rt>かいがん</rt></ruby>の<ruby>岸壁<rt>がんぺき</rt></ruby>に<ruby>暮<rt>く</rt></ruby>らし、<ruby>魚<rt>さかな</rt></ruby>を<ruby>主食<rt>しゅしょく</rt></ruby>としているワシ。<ruby>時<rt>とき</rt></ruby>には<ruby>大<rt>おお</rt></ruby>きな<ruby>鳥<rt>とり</rt></ruby>を<ruby>捕<rt>つか</rt></ruby>まえることもあるよ。"
},
{
  name: "ハクトウワシ",
  area: "カナダ・アメリカ<ruby>合衆国南部<rt>がっしゅうこくなんぶ</rt></ruby>・アラスカの<ruby>湖<rt>みずうみ</rt></ruby>や<ruby>川<rt>かわ</rt></ruby>、<ruby>海岸付近<rt>かいがんふきん</rt></ruby>",
  image: "picture/ハクトウワシ.jpg",
  description: "<ruby>鋭<rt>するど</rt></ruby>く<ruby>曲<rt>ま</rt></ruby>がったくちばしとつめを<ruby>持<rt>も</rt></ruby>つ、<ruby>力強<rt>ちからづよ</rt></ruby>いワシ。<ruby>地上<rt>ちじょう</rt></ruby>や<ruby>空中<rt>くうちゅう</rt></ruby>、<ruby>水中<rt>すいちゅう</rt></ruby>の<ruby>獲物<rt>えもの</rt></ruby>までしっかりとつかんで<ruby>食<rt>た</rt></ruby>べるよ。"
},
{
  name: "オオワシ",
  area: "カムチャツカ<ruby>半島<rt>はんとう</rt></ruby>・オホーツク<ruby>海沿岸<rt>かいえんがん</rt></ruby>など",
  image: "picture/オオワシ.jpg",
  description: "<ruby>冬<rt>ふゆ</rt></ruby>に<ruby>少<rt>すこ</rt></ruby>し<ruby>南<rt>みなみ</rt></ruby>へ<ruby>移動<rt>いどう</rt></ruby>してくる<ruby>大<rt>おお</rt></ruby>きなワシ。<ruby>夜<rt>よる</rt></ruby>は<ruby>海<rt>うみ</rt></ruby>に<ruby>近<rt>ちか</rt></ruby>い<ruby>木<rt>き</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>で<ruby>休<rt>やす</rt></ruby>むよ。"
},
{
  name: "パラワンコクジャク",
  area: "フィリピンのパラワン<ruby>島<rt>とう</rt></ruby>の<ruby>原生林<rt>げんせいりん</rt></ruby>",
  image: "picture/パラワンコクジャク.jpg",
  description: "クジャクの<ruby>仲間<rt>なかま</rt></ruby>の<ruby>中<rt>なか</rt></ruby>でも<ruby>特<rt>とく</rt></ruby>に<ruby>色<rt>いろ</rt></ruby>あいが<ruby>美<rt>うつく</rt></ruby>しい<ruby>種類<rt>しゅるい</rt></ruby>。オスは<ruby>頭<rt>あたま</rt></ruby>の<ruby>長<rt>なが</rt></ruby>くとがった<ruby>冠羽<rt>かんう</rt></ruby>を、ディスプレイのときに<ruby>立<rt>た</rt></ruby>てて<ruby>見<rt>み</rt></ruby>せるよ。"
},
{
  name: "マクジャク",
  area: "ジャワ・マレー<ruby>半島<rt>はんとう</rt></ruby>・インドシナなどの<ruby>森林<rt>しんりん</rt></ruby>",
  image: "picture/マクジャク.jpg",
  description: "<ruby>頭<rt>あたま</rt></ruby>に<ruby>束<rt>たば</rt></ruby>のような<ruby>冠羽<rt>かんう</rt></ruby>があり、<ruby>先<rt>さき</rt></ruby>の<ruby>方<rt>ほう</rt></ruby>が<ruby>緑色<rt>みどりいろ</rt></ruby>をしている。<ruby>顔<rt>かお</rt></ruby>のまわりは<ruby>淡<rt>あわ</rt></ruby>い<ruby>青色<rt>あおいろ</rt></ruby>をしているクジャクだよ。"
},
{
  name: "インドクジャク",
  area: "インド・パキスタン<ruby>東部<rt>とうぶ</rt></ruby>・スリランカなど",
  image: "picture/インドクジャク.jpg",
  description: "<ruby>古<rt>ふる</rt></ruby>くから<ruby>人<rt>ひと</rt></ruby>に<ruby>飼<rt>か</rt></ruby>われてきたクジャクで、<ruby>最初<rt>さいしょ</rt></ruby>に<ruby>家畜化<rt>かちくか</rt></ruby>された<ruby>鳥<rt>とり</rt></ruby>のひとつといわれているよ。"
},
{
  name: "マナヅル",
  area: "<ruby>中国南部<rt>ちゅうごくなんぶ</rt></ruby>・<ruby>朝鮮<rt>ちょうせん</rt></ruby>・<ruby>日本<rt>にほん</rt></ruby>（<ruby>冬鳥<rt>ふゆどり</rt></ruby>として<ruby>渡来<rt>とらい</rt></ruby>）",
  image: "picture/マナヅル.jpg",
  description: "<ruby>飛<rt>と</rt></ruby>ぶときはリーダーを<ruby>先頭<rt>せんとう</rt></ruby>に、きれいな<ruby>三角形<rt>さんかくけい</rt></ruby>の<ruby>編隊<rt>へんたい</rt></ruby>を<ruby>組<rt>く</rt></ruby>んで<ruby>飛<rt>と</rt></ruby>ぶことで<ruby>知<rt>し</rt></ruby>られるツル。<ruby>一度<rt>いちど</rt></ruby>は<ruby>数<rt>かず</rt></ruby>が<ruby>減<rt>へ</rt></ruby>ったけれど、<ruby>保護<rt>ほご</rt></ruby>のおかげで<ruby>増<rt>ふ</rt></ruby>えてきたよ。"
},
{
  name: "ジュズカケバト",
  area: "<ruby>小<rt>しょう</rt></ruby>アジア～インド（<ruby>人<rt>ひと</rt></ruby>に<ruby>飼<rt>か</rt></ruby>われて<ruby>世界中<rt>せかいじゅう</rt></ruby>に<ruby>広<rt>ひろ</rt></ruby>がった）",
  image: "picture/ジュズカケバト.jpg",
  description: "<ruby>性質<rt>せいしつ</rt></ruby>がおだやかで<ruby>体<rt>からだ</rt></ruby>が<ruby>丈夫<rt>じょうぶ</rt></ruby>なハト。<ruby>農耕地<rt>のうこうち</rt></ruby>や<ruby>森林<rt>しんりん</rt></ruby>に<ruby>暮<rt>く</rt></ruby>らしているよ。"
},
{
  name: "クジャクバト",
  area: "（<ruby>観賞用<rt>かんしょうよう</rt></ruby>）アフリカ<ruby>北部<rt>ほくぶ</rt></ruby>～<ruby>中国<rt>ちゅうごく</rt></ruby>に<ruby>生息<rt>せいそく</rt></ruby>するカワラバトが<ruby>祖先<rt>そせん</rt></ruby>",
  image: "picture/クジャクバト.jpg",
  description: "<ruby>尾羽<rt>おばね</rt></ruby>が<ruby>扇<rt>おうぎ</rt></ruby>のようにクジャクのように<ruby>広<rt>ひろ</rt></ruby>がる、<ruby>見<rt>み</rt></ruby>た<ruby>目<rt>め</rt></ruby>が<ruby>美<rt>うつく</rt></ruby>しいハト。ふつうのハトより<ruby>尾羽<rt>おばね</rt></ruby>の<ruby>数<rt>かず</rt></ruby>がとても<ruby>多<rt>おお</rt></ruby>いよ。"
},
{
  name: "メンフクロウ",
  area: "<ruby>世界中<rt>せかいじゅう</rt></ruby>の<ruby>広<rt>ひろ</rt></ruby>い<ruby>地域<rt>ちいき</rt></ruby>に<ruby>分布<rt>ぶんぷ</rt></ruby>",
  image: "picture/メンフクロウ.jpg",
  description: "<ruby>白<rt>しろ</rt></ruby>いハート<ruby>型<rt>がた</rt></ruby>の<ruby>顔<rt>かお</rt></ruby>が<ruby>特徴的<rt>とくちょうてき</rt></ruby>なフクロウ。<ruby>人家<rt>じんか</rt></ruby>の<ruby>近<rt>ちか</rt></ruby>くや<ruby>荒地<rt>あれち</rt></ruby>に<ruby>暮<rt>く</rt></ruby>らしていることが<ruby>多<rt>おお</rt></ruby>いよ。"
},
{
  name: "シロフクロウ",
  area: "<ruby>北極圏<rt>ほっきょくけん</rt></ruby>のツンドラ<ruby>地帯<rt>ちたい</rt></ruby>",
  image: "picture/シロフクロウ.jpg",
  description: "オスは<ruby>全身<rt>ぜんしん</rt></ruby>が<ruby>白<rt>しろ</rt></ruby>い<ruby>羽<rt>はね</rt></ruby>、メスは<ruby>黒<rt>くろ</rt></ruby>っぽいまだら<ruby>模様<rt>もよう</rt></ruby>という、<ruby>雄<rt>おす</rt></ruby>と<ruby>雌<rt>めす</rt></ruby>で<ruby>見<rt>み</rt></ruby>た<ruby>目<rt>め</rt></ruby>が<ruby>違<rt>ちが</rt></ruby>うフクロウ。<ruby>寒<rt>さむ</rt></ruby>さに<ruby>耐<rt>た</rt></ruby>えるため、<ruby>脚<rt>あし</rt></ruby>の<ruby>指先<rt>ゆびさき</rt></ruby>まで<ruby>毛<rt>け</rt></ruby>が<ruby>生<rt>は</rt></ruby>えているよ。"
},
{
  name: "ワシミミズク",
  area: "ヨーロッパ・アジア・<ruby>北<rt>きた</rt></ruby>アフリカの<ruby>森林<rt>しんりん</rt></ruby>・<ruby>山地<rt>さんち</rt></ruby>",
  image: "picture/ワシミミズク.jpg",
  description: "<ruby>耳<rt>みみ</rt></ruby>のように<ruby>見<rt>み</rt></ruby>える<ruby>長<rt>なが</rt></ruby>い<ruby>羽<rt>はね</rt></ruby>が<ruby>特徴<rt>とくちょう</rt></ruby>の<ruby>大<rt>おお</rt></ruby>きなフクロウ。<ruby>夜<rt>よる</rt></ruby>に<ruby>活動<rt>かつどう</rt></ruby>して、<ruby>太<rt>ふと</rt></ruby>い<ruby>声<rt>こえ</rt></ruby>で「ウーウー」と<ruby>鳴<rt>な</rt></ruby>くよ。"
},
{
  name: "ルリコンゴウインコ",
  area: "<ruby>中米南部<rt>ちゅうべいなんぶ</rt></ruby>～ボリビア・パラグアイ・アルゼンチン<ruby>北部<rt>ほくぶ</rt></ruby>",
  image: "picture/ルリコンゴウインコ.jpg",
  description: "<ruby>鮮<rt>あざ</rt></ruby>やかな<ruby>青色<rt>あおいろ</rt></ruby>の<ruby>体<rt>からだ</rt></ruby>と、オレンジがかった<ruby>翼<rt>つばさ</rt></ruby>の<ruby>内側<rt>うちがわ</rt></ruby>が<ruby>特徴<rt>とくちょう</rt></ruby>のインコ。くちばしがとても<ruby>強<rt>つよ</rt></ruby>く、<ruby>硬<rt>かた</rt></ruby>いナッツも<ruby>砕<rt>くだ</rt></ruby>いて<ruby>食<rt>た</rt></ruby>べられるよ。"
}
];

