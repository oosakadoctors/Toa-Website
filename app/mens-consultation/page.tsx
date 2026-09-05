import React from 'react';
import { Heart, Sparkles, Trophy, Flame, UserCheck, MessageCircle, ArrowRight, FileText, Compass, Brain, ShieldCheck, MapPin, CheckCircle, Search, Calendar, Users, Briefcase } from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '大阪梅田で35歳男性が体験する結婚相談所の無料カウンセリングとIBJ成婚戦略',
  description: '大阪梅田ドクターズ結婚相談所の男性向け無料カウンセリングを完全再現。35歳・会社員（年収550万円）のB男さんの事例から、マッチングアプリとの違い、20代女性（初婚・公務員等）への申し込み上限や成婚期間の現実、仕事と両立する日曜日のお見合い複数回スケジュール、服装・デート場所の予約代行サポートから、医学・心理学に基づくEQ向上と現代の共働き婚活に必須な家事分担のスタンスまで、現役女性医師とベテラン仲人が提示するロジカルな男の婚活戦略を可視化。',
  openGraph: {
    title: '大阪梅田で35歳男性が体験する結婚相談所の無料カウンセリングとIBJ成婚戦略',
    description: '大阪梅田ドクターズ結婚相談所の男性向け無料カウンセリングを完全再現。35歳・会社員（年収550万円）のB男さんの事例から、マッチングアプリとの違い、20代女性（初婚・公務員等）への申し込み上限や成婚期間の現実、仕事と両立する日曜日のお見合い複数回スケジュール、服装・デート場所の予約代行サポートから、医学・心理学に基づくEQ向上と現代の共働き婚活に必須な家事分担のスタンスまで、現役女性医師とベテラン仲人が提示するロジカルな男の婚活戦略を可視化。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '大阪梅田で35歳男性が体験する結婚相談所の無料カウンセリングとIBJ成婚戦略',
    description: '大阪梅田ドクターズ結婚相談所の男性向け無料カウンセリングを完全再現。35歳・会社員（年収550万円）のB男さんの事例から、マッチングアプリとの違い、20代女性（初婚・公務員等）への申し込み上限や成婚期間の現実、仕事と両立する日曜日のお見合い複数回スケジュール、服装・デート場所の予約代行サポートから、医学・心理学に基づくEQ向上と現代の共働き婚活に必須な家事分担のスタンスまで、現役女性医師とベテラン仲人が提示するロジカルな男の婚活戦略を可視化。',
  },
};

export default function SimulationMalePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "無料相談は本当に1回で終わりますか?しつこい勧誘はありませんか?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "無料相談はあくまで現状のヒアリングと当社サービスのご説明の場です。その場でのご入会を強要することはありません。",
        },
      },
      {
        "@type": "Question",
        name: "交際経験がなくても本当に大丈夫ですか?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "はい、問題ありません。交際経験がないことを理由に入会をお断りすることはなく、経験の有無に応じたサポート体制を整えています。",
        },
      },
      {
        "@type": "Question",
        name: "医師以外の職業でも、同じように無料相談を受けられますか?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "はい。職業を問わずどなたでも無料相談を受けていただけます。",
        },
      },
      {
        "@type": "Question",
        name: "相談内容が周囲に知られる心配はありませんか?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "完全個室でのカウンセリングのため、周囲の目を気にせずご相談いただけます。",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-sky-50 via-sky-100/40 to-blue-50 text-slate-800 font-sans antialiased selection:bg-sky-200 w-full overflow-x-hidden">
        
        {/* ヒーローセクション - 明るく上品なスカイブルーグラデーション */}
        <header className="relative bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white py-14 px-4 md:px-6 text-center overflow-hidden w-full border-b border-sky-300 shadow-lg">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_60%)]"></div>
          <div className="max-w-5xl mx-auto relative z-10 w-full space-y-4">
            <p className="bg-white/20 backdrop-blur-md text-sky-100 font-extrabold tracking-widest text-xs md:text-sm uppercase inline-block px-4 py-1 rounded-full shadow-sm">
              無料相談の疑似体験［男性編］
            </p>
            <h1 className="text-2xl md:text-4xl font-serif font-bold leading-tight tracking-wider text-white drop-shadow-sm">
              大阪梅田で35歳男性が体験する<br className="hidden md:inline" />
              <span className="text-amber-200">
                結婚相談所の無料カウンセリングとIBJ成婚戦略
              </span>
            </h1>
            
            <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-white inline-block text-left w-full mt-4 shadow-xl">
              <p className="text-sky-900 font-extrabold text-xl md:text-2xl mb-3 text-center tracking-wide">
                大阪梅田で35歳男性が結婚相談所で理想のパートナーに出会うための無料カウンセリング再現
              </p>
              <p className="text-slate-700 text-[20px] md:text-base leading-relaxed tracking-wide text-center w-full font-medium">
                大阪梅田ドクターズ結婚相談所の男性向け無料カウンセリングの流れと、仕事と両立しながら理想を叶える成婚戦略を会話形式で解説します。本ページでは、35歳・会社員男性（B男さん／大卒／年収550万円／168cm・60kg）の実例をもとに、マッチングアプリのメッセージ往復や年齢層ミスマッチによる挫折、希望条件（29歳前後の初婚女性・子供・公務員などの安定職・料理・外見）に対するお見合い成立確率の現実をデータで公開。さらに、土曜出勤がある多忙なスケジュールに合わせて「日曜日に複数回お見合いを集中させる」効率的な日程設計や、大阪梅田のホテルラウンジ（完全禁煙）の席予約代行、ベテラン仲人による会話やエスコート術の活用、そして現代の共働き婚活に不可欠な「男性側の主体的家事分担スタンス」の重要性まで、現役女性医師のアドバイスを交えたロジカルな男の婚活プロデュースの全容を網羅しています。
              </p>
            </div>
          </div>
        </header>

        {/* 導入メッセージ - 明るいカード構成 */}
        <section className="py-8 w-full">
          <div className="max-w-5xl mx-auto w-full px-4 md:px-0">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-sky-200 space-y-5 w-full">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-sky-950 flex items-center gap-2 border-b border-sky-100 pb-2">
                <Sparkles className="w-6 h-6 text-sky-500 shrink-0" />
                🌸 無料カウンセリングのリアル再現ストーリー［男性編］
              </h2>
              <div className="bg-sky-50 p-4 md:p-6 rounded-xl border border-sky-200 space-y-2">
                <h3 className="font-bold text-sky-900 text-lg">【35歳・会社員 B男さんの場合】</h3>
                <ul className="list-disc list-inside text-[20px] md:text-base text-slate-700 space-y-1 font-medium">
                  <li><span className="font-bold text-slate-900">ご相談者様（B男さん）：</span> 35歳／一般企業会社員（大卒・年収550万円）／初婚／168cm・60kg</li>
                  <li><span className="font-bold text-slate-900">お相手へのご希望：</span> 29歳くらいの明るくて笑顔が可愛い女性、子供が産める人、共働き希望（公務員などの安定職・料理上手）</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-white p-4 rounded-xl w-full text-center shadow-md">
                <p className="font-bold text-[20px] md:text-base tracking-wider w-full">
                  ✨ 実際に当相談所で交わされる、リアルでロジカルな男性向けカウンセリングの流れをご覧ください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 当日の流れ */}
        <section className="py-12 bg-sky-100/60 text-slate-800 w-full border-y border-sky-200">
          <div className="max-w-5xl mx-auto w-full space-y-8 px-4 md:px-0">
            <div className="text-center w-full">
              <span className="bg-sky-500 text-white font-extrabold text-sm px-4 py-1 rounded-full tracking-widest inline-block mb-2 shadow-xs">LOCATION & FLOW</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-sky-950 tracking-wider w-full">
                🏢 【当日の流れ】まずはリラックスしてスタート
              </h2>
            </div>

            <div className="bg-white p-6 md:p-8 border-2 border-sky-200 rounded-2xl shadow-md space-y-4 text-[20px] md:text-base text-slate-700 leading-relaxed font-medium">
              <p>
                無料カウンセリングは、大阪梅田の駅近（大阪駅前第2ビル）にある落ち着いた会議室で行います。バーチャルオフィスの時間貸しレンタルスペースを利用したプライベートな空間ですので、周りの目を気にせず安心してお話しいただけます。
              </p>
              <p>
                ご来店いただきましたら、まずはオリジナルの「マッチングシート」に、ご自身のプロフィール（35歳／大卒／168cm・60kg／一般企業・年収550万円）を簡単に記入していただきます。<br />
                その後、これまでの活動内容や「いつまでに結婚したいか」、お相手の理想のイメージ（29歳くらいの明るくて笑顔が可愛い女性、子供が産める人、共働き希望）などをゆっくりお聞きしていきます。
              </p>
              
              <div className="bg-sky-50 border-l-4 border-sky-500 p-4 rounded-r-xl space-y-2 mt-4">
                <span className="font-bold text-sky-900 block text-lg">B男さん：</span>
                <p className="italic text-slate-800">
                  「これまでマッチングアプリをやってました。でも、会うまでのメッセージのやり取りがとにかく面倒で……。それに、自分から『いいね』を送っても全然返ってこないのに、なぜか年上の女性からばかり『いいね』が来るようになって、嫌になってやめてしまいました。結婚相談所なら、僕の希望に合う女性と本当に会えるんでしょうか？」
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full px-4 md:px-0">
          <div className="w-full max-w-4xl mx-auto my-1">
            <div className="relative w-full aspect-[1/1] overflow-hidden rounded-2xl shadow-lg border-2 border-white">
              <Image
                src="/meeting-room.jpg"
                alt="大阪梅田ドクターズ結婚相談所の完全個室会議室、第二ビルの無料相談カウンセリングルーム"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                loading="eager"
                fetchPriority="high"
                priority={false}
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAAEAAQBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA="
              />
            </div>
          </div>
        </section>

        {/* STEP 2 - 会話形式＆リアルな戦略会議 */}
        <section className="py-12 bg-white w-full">
          <div className="max-w-5xl mx-auto w-full px-4 md:px-0 space-y-10">
            <div className="text-center px-4 w-full">
              <span className="bg-blue-600 text-white font-extrabold text-sm px-4 py-1 rounded-full tracking-widest inline-block mb-2 shadow-xs">STRATEGY MEETING</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 tracking-wider w-full">
                💬 【よくある質問＆リアルな戦略会議】
              </h2>
            </div>

            {/* Q1 */}
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 border-2 border-sky-200 p-6 md:p-8 rounded-2xl shadow-sm space-y-6">
              <div className="border-b border-sky-200 pb-3">
                <span className="text-xs bg-sky-600 text-white font-bold px-3 py-1 rounded-lg uppercase tracking-wider">Topic 1</span>
                <h3 className="font-bold text-sky-950 text-xl md:text-2xl mt-2">
                  1. マッチングアプリと結婚相談所（IBJ）の違い｜何人まで申し込み可能で、いつ成婚できる？
                </h3>
              </div>

              <div className="space-y-4 text-[20px] md:text-base leading-relaxed">
                <div className="bg-sky-100/70 p-4 rounded-xl border border-sky-300 shadow-xs space-y-3">
                  <span className="font-bold text-sky-950 block">カウンセラー：</span>
                  <p>「アプリでメッセージのやり取りだけで力尽きてしまう男性は非常に多いので、B男さんが特別ではありませんよ。結婚相談所（IBJシステム）はアプリと違い、最初から『お互いに結婚したい意思』が固まっている状態でお見合いが組めます。お見合いが成立すれば、やり取りは無くお見合いで会うことができます。」</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-sky-200 shadow-xs">
                  <span className="font-bold text-sky-700 block mb-1">B男さん：</span>
                  <p>「そうなんですね。ちなみに、システムに登録したら『毎月何人まで申し込みができる』んですか？あと、どれくらいの期間で成婚する人が多いのでしょうか？」</p>
                </div>

                <div className="bg-sky-100/70 p-4 rounded-xl border border-sky-300 shadow-xs space-y-3">
                  <span className="font-bold text-sky-950 block">カウンセラー：</span>
                  <p>「大阪梅田ドクターズ結婚相談所は分かりやすさを追求した一律プランです。毎月の申し込み数には200名まで可能です。初期にしっかりとスタートダッシュを切ることができますよ。」</p>
                  <p>「人にもよりますが、IBJの最新データ（成婚白書）によると、30代男性の平均的なお見合い成立確率（快諾率）のリアルな目安は約5.8%〜7.2%です。つまり『100人に申し込んで、5〜7人とお見合いが組める』のが婚活市場のリアルな確率。だからこそ、100人〜150人に戦略的にアプローチし、毎週 1-2人とお見合いを組んでいく形を目指すのが効率的なんですよ。」</p>
                  <p className="font-bold text-sky-900 bg-white/80 p-3 rounded-lg border border-sky-200">
                    「また、在籍期間については、IBJの成婚者データでも在籍期間の中央値は約9ヶ月、お相手との交際期間はわずか4ヶ月程度となっています。結婚相談所には『仮交際・真剣交際を合わせて最長6ヶ月以内に成婚の決断をする』という厳格な期限ルールがあるため、ダラダラと付き合うアプリとは違い、この短期間での確実な成婚退会が可能になるんです。ただ、そのためには男性特有の『ある罠』に気をつける必要があります。」
                  </p>
                </div>
              </div>
            </div>

            {/* Q2 */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 md:p-8 rounded-2xl shadow-sm space-y-6">
              <div className="border-b border-blue-200 pb-3">
                <span className="text-xs bg-indigo-600 text-white font-bold px-3 py-1 rounded-lg uppercase tracking-wider">Topic 2</span>
                <h3 className="font-bold text-indigo-950 text-xl md:text-2xl mt-2">
                  2. 男性の婚活あるある｜年齢と外見だけで選ぶと「お見合いが成立しない」データ的理由
                </h3>
              </div>

              <div className="space-y-4 text-[20px] md:text-base leading-relaxed">
                <div className="bg-white p-4 rounded-xl border border-indigo-200 shadow-xs">
                  <span className="font-bold text-indigo-700 block mb-1">B男さん：</span>
                  <p>「男性の罠、ですか……？」</p>
                </div>

                <div className="bg-indigo-100/60 p-4 rounded-xl border border-indigo-300 shadow-xs space-y-3">
                  <span className="font-bold text-indigo-950 block">カウンセラー：</span>
                  <p>「はい。実は、婚活市場における『男性の行動パターン』は、驚くほどみんな似ています。大半の男性が、プロフィールの『年齢（20代後半）』と『外見（写真）』だけを見て、人気の女性に一斉に申し込みを集中させてしまうんです。」</p>
                  <p>「もちろん、男性が外見や年齢に希望を持つのは当然ですし、プロフィールにはあまり希望年齢や外見の条件を書きすぎない方が、女性側からの印象が良くなるというテクニックもあります。」</p>
                  <p>「しかし、みんなと同じように『人気のある外見の人』ばかりに申し込んでいると、ライバルが多すぎて、いくら申し込み制限なしでもお見合いがなかなか成立しなくなってしまいます。」</p>
                  <p>「一方で、女性側の心理は男性と違います。女性はお相手を選ぶ際、もちろん外見を見る人もいますが、それ以上に『清潔感、仕事への真面目さ、経済力、価値観』など、求めるものが人によってバラバラです。そのため、『男性の外見はそこまで気にしない』という女性も一定数確実に存在します。」</p>
                  <p>「だからこそB男さんには、写真だけでなく、趣味や自己紹介文などのプロフィールをしっかり読み込んで、価値観の合いそうな女性を見つけることを強くおすすめします。」</p>
                  <p className="font-bold text-indigo-900 bg-white/80 p-3 rounded-lg border border-indigo-200">
                    「ちなみに、B男さんは『29歳くらい』を希望されていますが、29歳だと6歳下になります。最近は昔より歳の差婚が減っています。例えば同世代（32〜34歳）や、少し年上の女性まで視野を広げることは可能ですか？数歳だけでも幅を広げるだけで、驚くほどマッチングの確率は跳ね上がりますよ。」
                  </p>
                </div>
              </div>
            </div>

            {/* Q3 */}
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 border-2 border-sky-200 p-6 md:p-8 rounded-2xl shadow-sm space-y-6">
              <div className="border-b border-sky-200 pb-3">
                <span className="text-xs bg-sky-600 text-white font-bold px-3 py-1 rounded-lg uppercase tracking-wider">Topic 3</span>
                <h3 className="font-bold text-sky-950 text-xl md:text-2xl mt-2">
                  3. 仕事と両立する「日曜日のお見合い複数回スケジュール」と、デート場所の予約代行サポート
                </h3>
              </div>

              <div className="space-y-4 text-[20px] md:text-base leading-relaxed">
                <div className="bg-white p-4 rounded-xl border border-sky-200 shadow-xs">
                  <span className="font-bold text-sky-700 block mb-1">B男さん：</span>
                  <p>「なるほど、写真だけで選ぶのは危険なんですね。価値観の部分で言うと、お話していくうちに気づいたんですけど、僕は『料理ができる人』がよくて、できれば『公務員などの安定職』の女性だと、お互い共働きとして安心だなと思います。」</p>
                  <p className="mt-2">「ただ、僕の仕事は土曜日も出勤があるんです。そんな忙しいスケジュールでも、定期的にお見合いやデートはできるでしょうか？デート場所の選定などもサポートはあるんですか？」</p>
                </div>

                <div className="bg-sky-100/70 p-4 rounded-xl border border-sky-300 shadow-xs space-y-3">
                  <span className="font-bold text-sky-950 block">カウンセラー：</span>
                  <p>「土曜出勤があるんですね、スケジュールに関してはまったく問題ありません。土曜日が仕事であれば、『毎週日曜日に、まとめて1日2〜3回のお見合いスケジュールを組む』という効率的な戦略も可能です。お見合い自体は1回1時間程度ですので、日曜日に集中させることで、仕事に支障をきたさず活動できます。」</p>
                  <p>「また、お見合いが決まった際の場所選びや日時の調整、大阪梅田周辺のホテルラウンジの席予約などは、すべて大阪梅田ドクターズ結婚相談所が代行します。」</p>
                  <p className="font-bold text-sky-900 bg-white/80 p-3 rounded-lg border border-sky-200">
                    「さらに、その後の交際中のデート場所の選定や、初デートの服装、会話の話題、LINEの頻度なども、女性医師としての視点と、ベテラン仲人のノウハウを詰め込み、リアルタイムに完全サポートしますので、恋愛や女性のエスコートに自信がなくても大丈夫です。」
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* STEP 4 - 深い本音 & EQ向上カウンセリング */}
        <section className="py-12 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white w-full shadow-inner">
          <div className="max-w-5xl mx-auto w-full px-4 md:px-0">
            <div className="bg-white/95 backdrop-blur-md text-slate-800 p-6 md:p-10 rounded-2xl shadow-2xl space-y-6">
              <div className="text-center space-y-2">
                <span className="bg-amber-400 text-slate-900 font-extrabold text-xs px-3 py-1 rounded-full tracking-widest inline-block uppercase shadow-xs">Topic 4</span>
                <h2 className="text-xl md:text-3xl font-serif font-bold text-sky-950 tracking-wider">
                  🤝 【カウンセリングの終盤】結婚相談所特有のルールと、共働き婚活を成功させるEQ向上戦略
                </h2>
              </div>

              <div className="space-y-4 text-[20px] md:text-base leading-relaxed">
                <div className="bg-sky-50 p-4 rounded-xl border border-sky-200">
                  <span className="font-bold text-sky-800 block mb-1">B男さん：</span>
                  <p>「それはめちゃくちゃ心強いです！最後に一つ気になっているのが、相談所ってどこまで関係が進んだら『成婚（結婚）』になるんですか？あと、希望している共働きについて、何かアドバイスはありますか？」</p>
                </div>

                <div className="bg-sky-100 p-4 rounded-xl border border-sky-300">
                  <span className="font-bold text-sky-900 block mb-1">カウンセラー：</span>
                  <p>「良い質問ですね。結婚相談所には、お互いの安全と真剣度を守るための厳格なルールがあります。活動中（交際中）は、宿泊を伴う旅行、婚前交渉など『深い関係（肉体関係）』になることは禁止されています。もしそのような深い関係になれば、その時点でルール上『成婚（ご結婚の意思が固まった）』とみなされ、成婚退会の手続きとなります。この仕組みがあるからこそ、アプリのようなヤリモクや不誠実な人が一切おらず、お互い安心して真剣な交際ができるんです。」</p>
                  <p className="mt-3">「……そして、B男さんがお相手に『公務員などの安定職の女性』を希望されるなら、重要な成婚の現実があります。」</p>
                  <p>「B男さんは『共働きで安心だから公務員の女性がいい』という『職業の条件』で選ばれていますが、実は公務員の女性側からすると、結婚相手を選ぶときの視点は職業や年収だけではないです。彼女たちは自分自身が国や自治体に雇用されていて、収入も身分も完全に安定しています。つまり、男性に『経済的依存』だけを求めてはいません。」</p>
                </div>

                <div className="bg-sky-50 p-4 rounded-xl border border-sky-200">
                  <span className="font-bold text-sky-800 block mb-1">B男さん：</span>
                  <p>「確かにそうですね。じゃあ、彼女たちは僕たち男性のどこを見て選んでいるんですか？」</p>
                </div>

                <div className="bg-gradient-to-br from-sky-100 to-blue-100 p-6 rounded-xl border-2 border-sky-300 space-y-3">
                  <span className="font-bold text-sky-950 text-xl block">カウンセラー：</span>
                  <p>「ここが婚活市場の現実なのですが、経済的に自立している女性であっても、基本的には自分と同等か、それ以上の『格上（尊敬できるステータスや人間性）』の男性を狙う（上方婚志向）んです。依存したいからではなく、自分と同じレベルの知性や生活水準を持った対等なパートナーと暮らしたいからですね。」</p>
                  <p>「Wait、そして、先ほど言った『家事を協力するスタンス』も、現代の共働き婚活では『できて当たり前の最低条件（ベースライン）』でしかありません。」</p>
                  
                  <div className="bg-white p-4 rounded-lg border border-sky-200 font-medium text-sky-900 my-2">
                    <span className="font-bold text-slate-800 block mb-1">B男さん：</span>
                    「ということは、年収550万円の会社員の僕は、公務員の女性たちから見たら、最初から『格上』としては見てもらえない、ということですか……？」
                  </div>

                  <p>「諦める必要はありません！だからこそ、【内面や他の魅力（情緒的価値）】を戦略的にアピールして、彼女たちに『この人は私以上に精神的に大人で、人間的に素敵だ』と思わせることが最大の勝負どころになります。」</p>
                  <p>「自立している公務員の女性が結婚相手に本当に求めている『魅力』とは、年収の数字だけではありません。『自分の仕事の責任や忙しさを深く理解してくれる器の大きさ』『感情的にならず、辛いときに話を深く聴いてくれる高い対話力（EQ）』『一緒にいて精神的に圧倒的な包容力を提供してくれる居心地の良さ』といった、人間的な器の大きさです。」</p>
                  <p>「大阪梅田ドクターズ結婚相談所では、『返信は早く』『聞き上手に』といった目先のモテテクニックだけを教えるようなサポートはしません。代わりに当相談所が提供するのが、【医学・心理学の観点に基づいたEQ（心の知能指数）を高める本格的な対話サポート】です。」</p>
                  
                  <div className="bg-white p-4 rounded-lg border border-sky-200 font-medium text-sky-900 my-2">
                    <span className="font-bold text-slate-800 block mb-1">B男さん：</span>
                    「医学と心理学の観点からのEQですか？」
                  </div>

                  <p>「はい。私自身の現役女性医師としての臨床経験や心理学的アプローチを応用し、感情をコントロールする力（自己管理）やお相手の感情の機微を正しく察知する力（共感力）を、活動を通じて引き上げるようサポートをしていきます。」</p>
                  <p>「テクニックで表面だけを繕うのではなく、お相手との対話の質そのものを根本から変えることで、交際中の女性に対して『この人と話していると、自分のどんな感情を受け止めてもらえる』という、深い関係性と圧倒的な『安心感（心理的安全性）』を与えることができるようになります。」</p>
                  <p className="font-bold text-sky-950 text-lg">
                    「彼女たちがB男さんが醸し出す『人間的な安心感』に本能的に惹かれるようになり、29歳の優秀な女性から『この人と一緒なら、お互いを尊敬し合って高め合える』と選ばれる大人の男として、確実な成婚を狙っていきましょう。」
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 私たちの哲学 / プライバシー重視 */}
        <section className="py-12 bg-sky-50/70 w-full">
          <div className="max-w-5xl mx-auto w-full px-4 md:px-0">
            <div className="bg-white p-6 md:p-10 border-2 border-sky-200 w-full rounded-2xl space-y-6 shadow-md">
              <div className="flex items-center gap-4 border-b border-sky-100 pb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-400 to-blue-500 text-white flex items-center justify-center shrink-0 shadow-md">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-sky-600 font-extrabold tracking-widest block uppercase">PRIVACY & ENVIRONMENT</span>
                  <h2 className="font-bold text-sky-950 text-lg md:text-xl tracking-wide">
                    【プライバシー重視の完全個室】
                  </h2>
                </div>
              </div>

              <div className="text-[20px] md:text-base text-slate-700 space-y-4 leading-relaxed font-medium">
                <p>
                  当相談所のカウンセリングは、大阪梅田（大阪駅前第2ビル）のアクセス便利な会議室にて、完全個室・完全予約制で行います。
                </p>
                <p>
                  一般的な結婚相談所の路面店やサロンのように、入る瞬間を誰かに見られたり、隣の席の話し声が聞こえたりする心配は一切ありません。
                </p>
                <p className="bg-sky-100/70 border-l-4 border-sky-500 p-4 rounded-r-xl text-slate-900 font-semibold shadow-xs">
                  現役医師の守秘義務と同様に、あなたの大切な個人情報とプライバシーを徹底的に守りながら、1対1でじっくりとお話を伺います。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 結び & LINE CTA セクション */}
        <section className="py-16 bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-700 text-white text-center px-4 w-full shadow-lg">
          <div className="max-w-5xl mx-auto space-y-6 w-full">
            <span className="bg-amber-300 text-slate-900 font-extrabold text-xs px-4 py-1.5 rounded-full tracking-widest inline-block uppercase shadow-md">FREE CONSULTATION</span>
            <h2 className="text-xl md:text-3xl font-serif font-bold tracking-wider text-white w-full drop-shadow-sm">
              まずはご自身の「婚活未来図」を、私達と一緒に描いてみませんか？
            </h2>
            <p className="text-sky-100 text-[20px] md:text-base leading-relaxed tracking-wide w-full max-w-2xl mx-auto font-medium">
              私たちは、30代の皆様がこれまでのキャリアや人生経験を活かし、最も輝く形で未来のパートナーと出会える環境を整えています。<br /><br />
              「まずはツールの詳細について聞いてみたい」「女医カウンセラーのロジカルなカウンセリングを体験してみたい」など、どのような動機でも歓迎です。当社のプレミアムな無料相談でお待ちしております。
            </p>
            <div className="pt-4 flex justify-center w-full">
              <a 
                href="https://lin.ee/ZXB0UNs" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-extrabold px-8 py-5 rounded-2xl shadow-xl hover:shadow-2xl transition duration-200 tracking-wider text-[20px] md:text-base w-full sm:w-auto border-2 border-white/30 transform hover:-translate-y-0.5">
                <MessageCircle className="w-6 h-6 shrink-0" />
                勧誘ゼロ。まずはLINEで無料相談してみる
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}