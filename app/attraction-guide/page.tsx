import { Metadata } from "next";
import { 
  Heart, 
  Sparkles, 
  CheckCircle2, 
  UserCheck, 
  ShieldCheck, 
  Brain, 
  ArrowRight, 
  Check, 
  Feather, 
  Smile, 
  Award,
  Zap,
  TrendingUp,
  Flame,
  Star
} from "lucide-react";

export const metadata: Metadata = {
  title: "婚活でモテる人の特徴とは？外見・スペック・内面と雰囲気美人の作り方｜大阪梅田ドクターズ結婚相談所",
  description:
    "大阪梅田のドクターズ結婚相談所による婚活解説。外見・スペック・内面という3つの評価軸を、女性医師とベテランカウンセラーの視点から専門的に分析。大人だからこそ輝く「内面と知性を活かした魅力の引き出し方」を知り、自分らしい成婚を目指しましょう。",

  keywords: [
    "大阪梅田 結婚相談所",
    "婚活 モテる特徴",
    "雰囲気美人 作り方",
    "雰囲気イケメン",
    "婚活 外見 スペック 内面",
    "仮交際 成立",
    "医師監修 結婚相談所",
    "大人 婚活",
  ],

  authors: [
    {
      name: "現役女医（大阪梅田ドクターズ結婚相談所監修）",
    },
    {
      name: "ベテランカウンセラー",
    },
  ],

  alternates: {
    canonical: "/attraction-guide",
  },

  openGraph: {
    title: "婚活でモテる人の特徴とは？外見・スペック・内面と雰囲気美人の作り方",
    description:
      "外見・スペック・内面という3つの評価軸を女性医師とカウンセラーが解説。知性と内面を活かして人を惹きつける雰囲気の作り方を提案します。",
    type: "article",
    locale: "ja_JP",
    siteName: "大阪梅田ドクターズ結婚相談所",
    url: "/attraction-guide",
  },

  twitter: {
    card: "summary_large_image",
    title: "婚活でモテる人の特徴とは？外見・スペック・内面と雰囲気美人の作り方",
    description:
      "大人だからこそ輝く魅力を引き出す方法を、女性医師×ベテランカウンセラー視点から解説。",
  },
};

export default function AttractionGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    'headline': '婚活でモテる人の特徴とは？外見・スペック・内面と雰囲気美人の作り方',
    'description': '大阪梅田のドクターズ結婚相談所による婚活解説。外見・スペック・内面という3つの評価軸を、女性医師とベテランカウンセラーの視点から専門的に分析。大人だからこそ輝く「内面と知性を活かした魅力の引き出し方」を知り、自分らしい成婚を目指しましょう。',
    'datePublished': '2026-08-02T12:00:00+09:00',
    'author': [
      {
        '@type': 'Person',
        'name': '現役女医（大阪梅田ドクターズ結婚相談所監修）',
        'jobTitle': 'Medical Doctor'
      },
      {
        '@type': 'Person',
        'name': 'ベテランカウンセラー',
        'jobTitle': 'Senior Marriage Counselor'
      }
    ],
    'publisher': {
      '@type': 'Organization',
      'name': '大阪梅田ドクターズ結婚相談所',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://your-domain.com/logo.png'
      }
    }
  };
  return (
    <main className="bg-[#faf8f5] min-h-screen text-base leading-relaxed text-gray-800 py-4 px-2 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-10">

        {/* Header Ribbon / Banner */}
        <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-2 text-center text-white font-bold rounded-t-2xl shadow-sm text-base">
          <span className="inline-flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 shrink-0" />
            女性医師×ベテランカウンセラーが教える「惹きつける魅力」の磨き方
          </span>
        </div>

        {/* Hero / Header Section */}
        <section className="rounded-b-2xl bg-white border border-rose-200 p-6 sm:p-10 shadow-sm space-y-6 -mt-10 pt-10">
          <h1 
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-snug tracking-tight"
            style={{ wordBreak: 'break-all' }}
          >
            婚活でモテる人の特徴とは？<br className="hidden sm:inline" />
            モテる外見・スペック・内面と雰囲気美人の作り方
          </h1>

          <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-r-xl space-y-2">
            <h2 
              className="text-lg sm:text-xl font-bold text-rose-600 leading-snug"
              style={{ wordBreak: 'break-all' }}
            >
              大阪梅田で叶える大人の婚活｜女性医師×カウンセラーが教える「惹きつける魅力」の磨き方
            </h2>
            <p className="text-base text-gray-700 leading-relaxed" style={{ wordBreak: 'break-all' }}>
              外見、スペック、内面。婚活の3大要素を前に諦める必要はありません。大人になった今だからこそ、知性と少しの努力で「人を惹きつける雰囲気」は作れます。女性医師とベテランカウンセラーの視点から、大人の魅力を引き出す秘訣を専門的に紐解きます。
            </p>
          </div>

          {/* Checklist Box */}
          <div className="rounded-2xl bg-amber-50/60 border border-amber-200 p-5 space-y-3">
            <p className="font-bold text-amber-900 text-base" style={{ wordBreak: 'break-all' }}>
              上の✅にあてはまる人は必見です♡
            </p>
            <ul className="space-y-2 text-base text-gray-800 font-medium">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <span style={{ wordBreak: 'break-all' }}>モテたという経験は今まで少ない</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <span style={{ wordBreak: 'break-all' }}>結婚相談所でお見合いが成立しない！</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <span style={{ wordBreak: 'break-all' }}>結婚相談所でお見合いしたあと仮交際になれない！</span>
              </li>
            </ul>
          </div>

          <div className="text-base text-gray-700 leading-relaxed space-y-4 border-t border-rose-100 pt-6">
            <p style={{ wordBreak: 'break-all' }}>
              結婚相談所での活動をスタートするにあたり、まず私たちが知っておかなければならない現実があります。
              それは、婚活市場において、私たちは交際というスタート地点にたつ前に異性から「外見」「スペック（条件）」「内面」という3つの軸で評価されているという現実です。
            </p>
            <p style={{ wordBreak: 'break-all' }}>
              パートナーとして関係を深めていくためには最初に【仮交際＝友達以上恋人未満】という立場にならなければ、関係を深めるどころかお互いを知る機会さえなく終わってしまいます。そこで、第一関門を通過するために婚活でモテる人の特徴とは？を解説していきます。
            </p>
            <p style={{ wordBreak: 'break-all' }}>
              足が速い子、おもしろい子、ハンサムな子、可愛い子。小学生の頃、クラスで人気を集めていた人たちには共通する魅力がありました。実は、大人の婚活市場においても、異性を惹きつける本質的な要素の根底は、あの頃の教室のバランスと大きくは変わっていません。
            </p>
            <p style={{ wordBreak: 'break-all' }}>
              人は誰しも、直感的に「素敵な外見」に目を奪われ、頼りがいのある「スペック（強さ）」に安心感を覚え、一緒にいて楽しい「内面」に心が動かされるようにできているからです。婚活で評価される「外見・スペック・内面」という3つの軸は、まさに私たちが子どもの頃からなんとなく感じてきた「人の魅力」そのものです。
            </p>
            <p style={{ wordBreak: 'break-all' }}>
              だからといって生まれ持った容姿や、すぐには変えられない条件を前にして「自分には無理かも」と諦める必要はありません。
              「人を惹きつける雰囲気」は、大人になれば、知性と少しの努力があれば、今からでも十分に得ることができます。大人の魅力は内面による割合も大きくなっているからです。
              まず、一般的に評価される3つの要素を解説していきます。
            </p>
          </div>
        </section>

        {/* 3つの評価軸 (Grid Breakdown) */}
        <section className="grid gap-4 sm:grid-cols-3">

          <div className="rounded-2xl bg-white border border-rose-200 p-5 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-rose-500 font-bold">
              <span className="p-1.5 rounded-lg bg-rose-400 text-white">
                <Sparkles className="w-4 h-4 shrink-0" />
              </span>
              <span className="text-lg">【外見】</span>
            </div>
            <p className="text-xs font-bold text-rose-500">出会いの審査</p>
            <p className="text-base text-gray-700 leading-relaxed" style={{ wordBreak: 'break-all' }}>
              プロフィール写真やお見合いの初期の段階において、「異性としての魅力があるか」「パートナーになれる可能性があるか」をジャッジしあいます。ここを突破しなければ、あなたの内面を見てもらう機会が得られません。
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-rose-200 p-5 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-rose-500 font-bold">
              <span className="p-1.5 rounded-lg bg-rose-400 text-white">
                <ShieldCheck className="w-4 h-4 shrink-0" />
              </span>
              <span className="text-lg">【スペック】</span>
            </div>
            <p className="text-xs font-bold text-rose-500">未来の生活の審査</p>
            <p className="text-base text-gray-700 leading-relaxed" style={{ wordBreak: 'break-all' }}>
              年齢、職業、年収、居住地、家事育児への姿勢など、「この人と結婚して、自分の生活水準の維持、家族計画の希望が叶うか」を、現実的なデータとして見られています。
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-rose-200 p-5 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-rose-500 font-bold">
              <span className="p-1.5 rounded-lg bg-rose-400 text-white">
                <Brain className="w-4 h-4 shrink-0" />
              </span>
              <span className="text-lg">【内面】</span>
            </div>
            <p className="text-xs font-bold text-rose-500">交際の間の審査</p>
            <p className="text-base text-gray-700 leading-relaxed" style={{ wordBreak: 'break-all' }}>
              お互いにパートナーとして魅力的かどうか、居心地の良い関係を築けるか、「異性としての内面の魅力、さらに人間力（自己分化度）」も試されています。
            </p>
          </div>

        </section>

        {/* Reality & Practical Solutions */}
        <section className="rounded-2xl bg-white border border-rose-200 p-6 sm:p-8 shadow-sm space-y-4">
          <p className="text-base text-gray-700 leading-relaxed" style={{ wordBreak: 'break-all' }}>
            このように、婚活ではこれら3つの要素がバランス良く揃っている人ほど、圧倒的に異性から選ばれやすく、スムーズに仮交際へと至るのが一般的な現実です。
          </p>
          
          <div className="bg-rose-50/60 p-5 rounded-xl border border-rose-100 space-y-3">
            <h3 className="text-base font-bold text-gray-900" style={{ wordBreak: 'break-all' }}>
              変えられるもの と 変えられないもの
            </h3>
            <p className="text-base text-gray-700 leading-relaxed" style={{ wordBreak: 'break-all' }}>
              年齢や身長、過去の経歴、あるいは現在の職業や年収といった「スペック」の領域は、自分の努力だけですぐに変えられるものではありません。変えられない条件を前にして、「自分には無理かもしれない」と立ち止まってしまう方も少なくないのが実情です。
            </p>
            <p className="text-base text-gray-700 leading-relaxed" style={{ wordBreak: 'break-all' }}>
              ですが、諦める必要はまったくありません。<br />
              数々の成婚現場を創り出してきた私たちが目撃してきた真実は、<span className="font-bold text-rose-600">「美男美女や、ハイスペックの持ち主だけが選ばれているわけではない」</span>ということです。
            </p>
          </div>

          <div className="text-base text-gray-700 leading-relaxed space-y-4 pt-2">
            <p style={{ wordBreak: 'break-all' }}>
              婚活市場でスマート成婚をしていくのは、自分の持っている魅力をうまくお相手に伝えている人たちです。いわゆる「雰囲気美人」「雰囲気イケメン」がその一つです。
            </p>
            <p style={{ wordBreak: 'break-all' }}>
              スペックを変えることはできなくても、「異性の本能がどこに反応するか」という心の仕組み（知識）を正しく理解し、ほんの少しの「柔軟性」を持って、魅せ方を変えることで、あなたのチャンスは広がっていきます。
            </p>
            <p style={{ wordBreak: 'break-all' }}>
              当相談所の女医（医学・心理学的アプローチ）とベテランカウンセラー（現場の臨床データ）の視点から、あなたが今すぐ実践できて、異性の理性を溶かす「外見」と「内面」は何か？をもう少し具体的に考えていきます。
              ここではあくまでも第一関門を通過するための解説としてあります。またその具体的な演出法を、男女別に徹底解説します。
            </p>
          </div>

          <div className="bg-gradient-to-r from-rose-400 to-pink-500 text-white p-4 rounded-xl flex items-center justify-between shadow-sm">
            <span className="text-base font-bold" style={{ wordBreak: 'break-all' }}>
              🍀仮交際後、真剣交際、結婚生活に必要な内面についての解説はこちら
            </span>
            <ArrowRight className="w-5 h-5 shrink-0" />
          </div>
        </section>

        <hr className="border-rose-200 border-dashed my-8" />

        {/* Section Title */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900" style={{ wordBreak: 'break-all' }}>
            男女それぞれ一般的に人気のモテ要素は何か？
          </h2>
          <div className="flex justify-center gap-4 text-base font-bold text-rose-500 pt-2">
            <a href="#female-section" className="hover:underline flex items-center gap-1">
              女性の方はこちらへ <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#male-section" className="hover:underline flex items-center gap-1">
              男性の方はこちらへ <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* ==================== 女性編 ==================== */}
        <div id="female-section" className="space-y-8 pt-6">

          {/* 女性 外見 TOP10 */}
          <section className="rounded-2xl bg-white border border-pink-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-pink-200 pb-4">
              <span className="p-2 rounded-xl bg-pink-500 text-white shrink-0">
                <Heart className="w-6 h-6" />
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-gray-900" style={{ wordBreak: 'break-all' }}>
                【女性編】男性が好きな外見のモテ要素 Top 10
              </h3>
            </div>

            <ol className="grid gap-3 sm:grid-cols-2">
              {[
                "ぱっちりとした、潤いのある大きな瞳",
                "女性らしさを感じるスタイル",
                "無防備さや隙を感じさせる、女性らしい可愛い仕草",
                "本能を刺激する、甘い香水・シャンプーの香り",
                "思わず触れたくなるような、白くモチモチとしたマシュマロ肌",
                "「自分を受け入れてくれそう」と思わせる、明るい満面の笑顔",
                "首筋や手首など、華奢（きゃしゃ）なパーツの強調",
                "男の独占欲を煽る、他の男にもモテそうな「いい女」感",
                "ツヤのある、綺麗なロングヘア",
                "「俺を頼ってくれている」と思わせる、甘え上手な視線と可愛らしい声のトーン"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-pink-50/50 p-3 rounded-xl border border-pink-100">
                  <span className="bg-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-base text-gray-800 font-medium" style={{ wordBreak: 'break-all' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </section>

          {/* 女性 内面 TOP10 */}
          <section className="rounded-2xl bg-white border border-pink-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-pink-200 pb-4">
              <span className="p-2 rounded-xl bg-pink-500 text-white shrink-0">
                <Brain className="w-6 h-6" />
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-gray-900" style={{ wordBreak: 'break-all' }}>
                【女性編】男性が好きな女性の「内面」TOP10
              </h3>
            </div>

            <ol className="grid gap-3 sm:grid-cols-2">
              {[
                "自分の時間を楽しめる心の自立",
                "不測のトラブル場面で不機嫌にならずに乗り越える柔軟性",
                "お相手の話をちゃんと聞く傾聴力",
                "「それ面白そう！どうして始めたの？」とお相手の話を広げる会話力",
                "素直に「ごめんなさい」「ありがとう」が言える成熟度",
                "お相手との距離感にあった自己開示",
                "お相手の生き方をリスペクトし、「あなたといると世界が広がる」「あなたといると楽しい」と伝える肯定力",
                "喜怒哀楽とその土台となる感情の安定性",
                "「俺を頼ってくれている」とお相手に実感させる、上手な甘え方と感謝の伝え方",
                "お相手に依存せず、自分の生き方や価値観を大切にする精神的境界線"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-pink-50/50 p-3 rounded-xl border border-pink-100">
                  <span className="bg-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-base text-gray-800 font-medium" style={{ wordBreak: 'break-all' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ol>

            {/* 一言メッセージ */}
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 p-5 rounded-2xl space-y-2">
              <h4 className="font-bold text-pink-600 text-base flex items-center gap-1.5" style={{ wordBreak: 'break-all' }}>
                <Sparkles className="w-5 h-5" /> 一言メッセージ🩷
              </h4>
              <p className="text-base text-gray-700 leading-relaxed" style={{ wordBreak: 'break-all' }}>
                さて、いくつくらい当てはまりましたか？<br />
                たくさん当てはまる方はそのままでも充分に第一関門は通過できるはずです！<br />
                当てはまる数が少ないかたは下記を必見です♡<br />
                内面を高めるのは少し時間がかかります。そこで、比較的すぐに改善できそうなポイントを下記に解説します。
              </p>
            </div>
          </section>

          {/* 雰囲気美人の作り方 */}
          <section className="rounded-2xl bg-white border border-rose-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-rose-200 pb-4">
              <span className="p-2 rounded-xl bg-rose-500 text-white shrink-0">
                <Star className="w-6 h-6" />
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-gray-900" style={{ wordBreak: 'break-all' }}>
                【雰囲気美人】後から変えられる美人オーラを作る方法
              </h3>
            </div>

            <p className="text-base text-gray-700 leading-relaxed" style={{ wordBreak: 'break-all' }}>
              世間で「美人」「可愛い」と言われる女性には最初から顔立ちが整っている人が多いですが、「顔のパーツ自体は普通なのに、なぜかすごくモテるし、美人オーラが出ている女性」もたくさんいます。女性の間では、これを「雰囲気美人」と呼びます。女性が後から変えられる、美人オーラを作るための代表的な要素と具体的な方法は以下の3つです。
            </p>

            <div className="space-y-4">
              {/* Point 1 */}
              <div className="bg-rose-50/50 border border-rose-200 p-5 rounded-xl space-y-2">
                <h4 className="text-lg font-bold text-rose-600 flex items-center gap-2" style={{ wordBreak: 'break-all' }}>
                  <Heart className="w-5 h-5 shrink-0 fill-rose-500 text-rose-500" />
                  1. 「髪のツヤ」と「肌の質感」❤️
                </h4>
                <p className="text-base text-gray-700 leading-relaxed" style={{ wordBreak: 'break-all' }}>
                  男性が女性を見る時、実は顔の細かいパーツ（目の大きさなど）以上に、「髪」と「肌」がきれいに手入れされているかを無意識にチェックしています。ここが変わると一気に垢抜けます。
                </p>
                <ul className="space-y-2 text-base text-gray-700 pl-2 pt-1">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-rose-500 shrink-0 mt-1" />
                    <span style={{ wordBreak: 'break-all' }}>
                      <strong className="text-gray-900">もっと髪にツヤを出す：</strong>自分でのカラーをやめて、毎月の美容院でのカラーや、お風呂上がりのヘアミルク、丁寧に乾かしたりブラッシングで髪にツヤを出すだけで、女性らしさが倍増します。
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-rose-500 shrink-0 mt-1" />
                    <span style={{ wordBreak: 'break-all' }}>
                      <strong className="text-gray-900">美肌に整える：</strong>日々の保湿や日焼け対策、美容液、薄い素肌感のある化粧で「透明感」を作ります。「きれいな美人」の印象を与えられます。
                    </span>
                  </li>
                </ul>
              </div>

              {/* Point 2 */}
              <div className="bg-rose-50/50 border border-rose-200 p-5 rounded-xl space-y-2">
                <h4 className="text-lg font-bold text-rose-600 flex items-center gap-2" style={{ wordBreak: 'break-all' }}>
                  <Heart className="w-5 h-5 shrink-0 fill-rose-500 text-rose-500" />
                  2. 「笑顔」と「リアクション」❤️
                </h4>
                <p className="text-base text-gray-700 leading-relaxed" style={{ wordBreak: 'break-all' }}>
                  どんなに顔が整っていても、無表情で高飛車な人は男性人気は低いです。逆に、顔立ちが普通でも「よく笑う女性」は男性にとって圧倒的に魅力的に映ります。
                </p>
                <ul className="space-y-2 text-base text-gray-700 pl-2 pt-1">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-rose-500 shrink-0 mt-1" />
                    <span style={{ wordBreak: 'break-all' }}>
                      <strong className="text-gray-900">口角を上げる：</strong>人は無意識のとき口角が下がりがちです。普段からほんの少しだけ口角を上げる意識をするだけで、話しかけやすい「優しい雰囲気」になります。
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-rose-500 shrink-0 mt-1" />
                    <span style={{ wordBreak: 'break-all' }}>
                      <strong className="text-gray-900">笑顔を保つ：</strong>にっこりと優しい微笑みを保ったような表情をキープします。
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-rose-500 shrink-0 mt-1" />
                    <span style={{ wordBreak: 'break-all' }}>
                      <strong className="text-gray-900">嬉しそうにリアクションをする：</strong>男性が何かしてくれた時に「わあ、嬉しい！ありがとうございます！」と少し大きめに喜ぶ。これだけで、男性は「この子をまた喜ばせたい」と思い、特別な存在として意識し始めます。
                    </span>
                  </li>
                </ul>
              </div>

              {/* Point 3 */}
              <div className="bg-rose-50/50 border border-rose-200 p-5 rounded-xl space-y-2">
                <h4 className="text-lg font-bold text-rose-600 flex items-center gap-2" style={{ wordBreak: 'break-all' }}>
                  <Heart className="w-5 h-5 shrink-0 fill-rose-500 text-rose-500" />
                  3. 「上品なしぐさ」と「言葉遣い」❤️
                </h4>
                <p className="text-base text-gray-700 leading-relaxed" style={{ wordBreak: 'break-all' }}>
                  動きが綺麗な女性はそれだけで育ちが良く、魅力的に見えます。
                </p>
                <ul className="space-y-2 text-base text-gray-700 pl-2 pt-1">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-rose-500 shrink-0 mt-1" />
                    <span style={{ wordBreak: 'break-all' }}>
                      <strong className="text-gray-900">動作のスピードを「1.5倍」遅くする：</strong>バッグから物を取り出す、ドアを閉める、お辞儀をするなどの動作を少しゆっくり行うだけで、品のある大人の女性に見えます。
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-rose-500 shrink-0 mt-1" />
                    <span style={{ wordBreak: 'break-all' }}>
                      <strong className="text-gray-900">丁寧な言葉遣い：</strong>流行りの若者言葉を避け、「〜だよね」を「〜ですね」に変えるなど、丁寧な言葉を選ぶだけで、内面からにじみ出る上品さや美しさが生まれます。
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

        </div>

        <hr className="border-rose-200 border-dashed my-8" />

        {/* ==================== 男性編 ==================== */}
        <div id="male-section" className="space-y-8 pt-4">

          {/* 男性 外見 TOP10 */}
          <section className="rounded-2xl bg-white border border-sky-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-sky-200 pb-4">
              <span className="p-2 rounded-xl bg-sky-500 text-white shrink-0">
                <UserCheck className="w-6 h-6" />
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-gray-900" style={{ wordBreak: 'break-all' }}>
                【男性編】女性が好きな男性の外見、モテ要素 Top 10
              </h3>
            </div>

            <ol className="grid gap-3 sm:grid-cols-2">
              {[
                "スーツやジャケットが似合う、たくましい広い肩幅と胸板",
                "血管が浮き出た、男らしさを象徴する男前な前腕",
                "「守られている」と感じる、女性より高い身長（身長差）",
                "低く、耳の奥に響くようなセクシーな低音ボイス",
                "大人の色気を感じさせる、清潔な髭とタイトな髪型",
                "スマートにエスコートする時の男らしい所作",
                "理知的で、お相手を見つめる時の力強く優しい眼差し",
                "引き締まった腹筋や細マッチョな体型",
                "女性の脳を安心させる、清潔な香り",
                "綺麗に整えられた、少し大きくて男らしい手と指先"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-sky-50/50 p-3 rounded-xl border border-sky-100">
                  <span className="bg-sky-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-base text-gray-800 font-medium" style={{ wordBreak: 'break-all' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </section>

          {/* 男性 内面 TOP13 */}
          <section className="rounded-2xl bg-white border border-sky-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-sky-200 pb-4">
              <span className="p-2 rounded-xl bg-sky-500 text-white shrink-0">
                <Brain className="w-6 h-6" />
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-gray-900" style={{ wordBreak: 'break-all' }}>
                【男性編】女性が魅力に感じる男性の「内面」TOP13
              </h3>
            </div>

            <ol className="grid gap-3 sm:grid-cols-2">
              {[
                "トラブル時でも「動じない余裕」",
                "お相手を自分のペースに巻き込む、堂々としたリーダーシップ",
                "女性を「女性扱い」できる優しさ",
                "女性への適度な強引さ【優しさとのバランスが大切】",
                "一定のトーンを保つ感情管理",
                "予期せぬトラブルに対して、スマートに代替案を出す柔軟性",
                "お相手の話にアドバイスや説教をせず、感情に寄り添い傾聴する力",
                "非を認めるべき場面で、言い訳をせずに即座に「ごめんなさい」が言える素直さ",
                "お相手との距離感を見極め、段階的に心を開いていくスマートな自己開示",
                "女性の気持ちを理解する力【行間や雰囲気を読む】",
                "言うことと行動が一致している嘘がないという高い誠実さ",
                "楽しい時間を作る会話力"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-sky-50/50 p-3 rounded-xl border border-sky-100">
                  <span className="bg-sky-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-base text-gray-800 font-medium" style={{ wordBreak: 'break-all' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ol>

            {/* 一言メッセージ */}
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 p-5 rounded-2xl space-y-2">
              <h4 className="font-bold text-sky-600 text-base flex items-center gap-1.5" style={{ wordBreak: 'break-all' }}>
                <Zap className="w-5 h-5" /> 一言メッセージ💙
              </h4>
              <p className="text-base text-gray-700 leading-relaxed" style={{ wordBreak: 'break-all' }}>
                いくつくらい当てはまりましたか？<br />
                たくさん当てはまる方はそのままでも充分に第一関門は通過できるはずですよ。<br />
                当てはまる数が少ないかたは下記を参考にしてください。<br />
                真の内面を高めるのは少し時間がかかります。そこで、第一関門を通過できるために比較的すぐに改善できそうなポイントだけを下記に解説します。
              </p>
            </div>
          </section>

          {/* 雰囲気イケメンの作り方 */}
          <section className="rounded-2xl bg-white border border-sky-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-sky-200 pb-4">
              <span className="p-2 rounded-xl bg-sky-500 text-white shrink-0">
                <Award className="w-6 h-6" />
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-gray-900" style={{ wordBreak: 'break-all' }}>
                【雰囲気イケメン】変えられる要素を最大化して魅力を引き出す方法
              </h3>
            </div>

            <p className="text-base text-gray-700 leading-relaxed" style={{ wordBreak: 'break-all' }}>
              世間で「イケメン」と呼ばれる人の多くは、そもそも顔のパーツ（目、鼻、輪郭など）が最初から整っている人がほとんどです。そこを無視して「清潔感だけで誰でもイケメンになれる」と言うのは、現実的ではありません。
            </p>
            <p className="text-base text-gray-700 leading-relaxed" style={{ wordBreak: 'break-all' }}>
              ただ、ここで面白いのが、世の中には「顔のパーツ自体はそこまで整っていないのに、なぜかすごくモテるし、周囲からイケメン扱いされている男性」もまた確実に存在することです。
            </p>
            <p className="text-base text-gray-700 leading-relaxed" style={{ wordBreak: 'break-all' }}>
              生まれ持った顔を変えることはできませんが、彼らは「顔のパーツ以外の要素」を最大化して、魅力的なオーラを作っています。その秘密（変えられる要素）は以下の3つに集約されます。
            </p>

            <div className="space-y-4">
              {/* Point 1 */}
              <div className="bg-sky-50/50 border border-sky-200 p-5 rounded-xl space-y-2">
                <h4 className="text-lg font-bold text-sky-600 flex items-center gap-2" style={{ wordBreak: 'break-all' }}>
                  <TrendingUp className="w-5 h-5 shrink-0 text-sky-500" />
                  1. 「髪型」と「眉毛」で顔の錯覚を作る💙
                </h4>
                <p className="text-base text-gray-700 leading-relaxed" style={{ wordBreak: 'break-all' }}>
                  顔そのものは変えられなくても、「顔の額縁」である髪型と眉毛を変えるだけで、顔全体のバランスは劇的に変わります。
                </p>
                <ul className="space-y-2 text-base text-gray-700 pl-2 pt-1">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-sky-500 shrink-0 mt-1" />
                    <span style={{ wordBreak: 'break-all' }}>
                      <strong className="text-gray-900">髪型で輪郭を補正する：</strong>エラが張っている、面長、目が小さいなど、それぞれのコンプレックスをカバーする髪型（特に前髪の長さやボリュームの出し方）にすることで、顔全体のバランスを「整っている風」に見せることができます。
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-sky-500 shrink-0 mt-1" />
                    <span style={{ wordBreak: 'break-all' }}>
                      <strong className="text-gray-900">眉毛で目力を上げる：</strong>眉毛の太さや角度を整えるだけで、目元の印象がキリッと引き締まり、顔立ち全体の薄さがカバーされます。
                    </span>
                  </li>
                </ul>
              </div>

              {/* Point 2 */}
              <div className="bg-sky-50/50 border border-sky-200 p-5 rounded-xl space-y-2">
                <h4 className="text-lg font-bold text-sky-600 flex items-center gap-2" style={{ wordBreak: 'break-all' }}>
                  <TrendingUp className="w-5 h-5 shrink-0 text-sky-500" />
                  2. 「堂々とした姿勢」と「体つき」💙
                </h4>
                <p className="text-base text-gray-700 leading-relaxed" style={{ wordBreak: 'break-all' }}>
                  顔が普通でも、スタイルが良く見える人はそれだけで「イケメンの雰囲気」を醸し出します。
                </p>
                <ul className="space-y-2 text-base text-gray-700 pl-2 pt-1">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-sky-500 shrink-0 mt-1" />
                    <span style={{ wordBreak: 'break-all' }}>
                      <strong className="text-gray-900">猫背を直すだけで変わる：</strong>背筋が伸びて胸が張れている人は、それだけで「自信があってカッコいい人」という印象を周囲に与えます。キープし続けるには適度に背筋を鍛えるのが効果的です。
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-sky-500 shrink-0 mt-1" />
                    <span style={{ wordBreak: 'break-all' }}>
                      <strong className="text-gray-900">服が似合う体型にする：</strong>少し筋トレをして腕を太くしたり、お腹周りを引き締めることで、「スタイルが良いイケメン」のシルエットを作ることができます。まずは、筋肉がつきやすく服の上からでもわかりやすい腕から鍛えてみましょう。
                    </span>
                  </li>
                </ul>
              </div>

              {/* Point 3 */}
              <div className="bg-sky-50/50 border border-sky-200 p-5 rounded-xl space-y-2">
                <h4 className="text-lg font-bold text-sky-600 flex items-center gap-2" style={{ wordBreak: 'break-all' }}>
                  <TrendingUp className="w-5 h-5 shrink-0 text-sky-500" />
                  3. 「声のトーン」と「話し方の余裕」💙
                </h4>
                <p className="text-base text-gray-700 leading-relaxed" style={{ wordBreak: 'break-all' }}>
                  女性が男性を「カッコいい」と判断する基準は、実は聴覚（声や話し方）も大きなウェイトを占めています。
                </p>
                <ul className="space-y-2 text-base text-gray-700 pl-2 pt-1">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-sky-500 shrink-0 mt-1" />
                    <span style={{ wordBreak: 'break-all' }}>
                      <strong className="text-gray-900">低めの声でゆっくり話す：</strong>早口で高めの声よりも、少し低めのトーンで落ち着いて話す男性は、それだけで「大人の色気」や「包容力」を感じさせます。
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-sky-500 shrink-0 mt-1" />
                    <span style={{ wordBreak: 'break-all' }}>
                      <strong className="text-gray-900">聞き上手で余裕がある：</strong>自分の話ばかりせず、相手の話を「うん、なるほどね」「たくさん話す姿が可愛いね」と笑いながら、余裕を持って聞ける男性は、女性から「内面がイケメン」として非常に高く評価されます。
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-sky-50 p-5 rounded-xl border border-sky-100 font-medium text-gray-800" style={{ wordBreak: 'break-all' }}>
              生まれ持った顔のパーツを100点にすることはできなくても、髪型、体型、姿勢、話し方をそれぞれ5点、10点と底上げしていくことで、全体の印象を「カッコいい人」に持っていくことは十分に可能です。
            </div>
          </section>

        </div>

      </div>
    </main>
  );
}