import React from 'react';
import { Heart, Sparkles, Trophy, Flame, UserCheck, MessageCircle, ArrowRight, FileText, Compass, Brain, ShieldCheck, MapPin, CheckCircle, Search, Calendar, Users, Briefcase } from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: '大阪梅田で30代初心者が結婚相談所を利用した無料カウンセリングの流れと成婚戦略',
  description: '大阪梅田ドクターズ結婚相談所の無料カウンセリングの流れを詳細に解説。32歳・会社員女性の事例をもとに、IBJシステムの会員属性、身長・年収などの希望条件マッチング、テニスや猫といった趣味・喫煙のこだわり検索機能の活用術から、お見合い成立確率（8%）、服装、料金プランまで、現役女性医師とベテラン仲人が提示するリアルな婚活戦略を可視化。',
  openGraph: {
    title: '大阪梅田で30代初心者が結婚相談所を利用した無料カウンセリングの流れと成婚戦略',
    description: '大阪梅田ドクターズ結婚相談所の無料カウンセリングの流れを詳細に解説。32歳・会社員女性の事例をもとに、IBJシステムの会員属性、身長・年収などの希望条件マッチング、テニスや猫といった趣味・喫煙のこだわり検索機能の活用術から、お見合い成立確率（8%）、服装、料金プランまで、現役女性医師とベテラン仲人が提示するリアルな婚活戦略を可視化。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '大阪梅田で30代初心者が結婚相談所を利用した無料カウンセリングの流れと成婚戦略',
    description: '大阪梅田ドクターズ結婚相談所の無料カウンセリングの流れを詳細に解説。32歳・会社員女性の事例をもとに、IBJシステムの会員属性、身長・年収などの希望条件マッチング、テニスや猫といった趣味・喫煙のこだわり検索機能の活用術から、お見合い成立確率（8%）、服装、料金プランまで、現役女性医師とベテラン仲人が提示するリアルな婚活戦略を可視化。',
  },
};

export default function SimulationPage() {
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
              無料相談の疑似体験
            </p>
            <h1 className="text-2xl md:text-4xl font-serif font-bold leading-tight tracking-wider text-white drop-shadow-sm">
              大阪梅田で30代・婚活初心者が体験する<br className="hidden md:inline" />
              <span className="text-amber-200">
                無料カウンセリングの流れとIBJ成婚戦略
              </span>
            </h1>
            
            <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-white inline-block text-left w-full mt-4 shadow-xl">
              <p className="text-sky-900 font-extrabold text-xl md:text-2xl mb-3 text-center tracking-wide">
                大阪梅田で30代・婚活初心者が結婚相談所で理想のパートナーに出会うための無料カウンセリング再現
              </p>
              <p className="text-slate-700 text-[20px] md:text-base leading-relaxed tracking-wide text-center w-full font-medium">
                大阪梅田ドクターズ結婚相談所の無料カウンセリングの流れと、IBJシステムを活用した独自の成婚戦略を会話形式で解説します。本ページでは、32歳・会社員女性（A子さん／年収400万円／初婚／157cm・50kg）の実例をもとに、希望条件（身長170cm以上・年収600万円以上の初婚男性）とのマッチングの現実や、お見合い成立確率（目安8%）などのリアルなデータを公開。さらに、現役女性医師である代表カウンセラーが、趣味（テニス）やペット（猫）、非喫煙者（禁煙）といったライフスタイルのこだわりをIBJの検索機能で可視化し、仕事やスケジュールに合わせて最短での成婚へ導くロジカルな対話サポート（インフォームド・コンセント）のプロセスをすべて網羅しています。
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
                🌸 無料カウンセリングのリアル再現ストーリー
              </h2>
              <div className="bg-sky-50 p-4 md:p-6 rounded-xl border border-sky-200 space-y-2">
                <h3 className="font-bold text-sky-900 text-lg">【32歳・婚活初心者 A子さんの場合】</h3>
                <ul className="list-disc list-inside text-[20px] md:text-base text-slate-700 space-y-1 font-medium">
                  <li><span className="font-bold text-slate-900">ご相談者様（A子さん）：</span> 32歳／一般会社員（年収400万円）／初婚／157cm・50kg／婚活は今回が初めて</li>
                  <li><span className="font-bold text-slate-900">お相手へのご希望：</span> 170cm以上、年収600万円以上の初婚男性</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-white p-4 rounded-xl w-full text-center shadow-md">
                <p className="font-bold text-[20px] md:text-base tracking-wider w-full">
                  ✨ 実際に当相談所で交わされる、リアルでロジカルなカウンセリングの流れをご覧ください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* メインイメージ */}
        <section className="w-full px-4 md:px-0">
          <div className="w-full max-w-4xl mx-auto my-1">
            <div className="relative w-full aspect-[960/1706] overflow-hidden rounded-2xl shadow-lg border-2 border-white">
              <Image
                src="/marriage-girl.jpg"
                alt="大阪梅田ドクターズ結婚相談所のカウンセリングで使用する婚活未来図【理想を叶えるためのヒアリングシート】の実物写真"
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
                ご来店いただきましたら、まずはオリジナルの「マッチングシート」に、ご自身のプロフィールや基本情報を簡単に記入していただきます。<br />
                その後、これまでの活動内容や「いつまでに結婚したいか」、理想のイメージなどをお聞きしていきます。
              </p>
              
              <div className="bg-sky-50 border-l-4 border-sky-500 p-4 rounded-r-xl space-y-2 mt-4">
                <span className="font-bold text-sky-900 block text-lg">カウンセラー：</span>
                <p className="italic text-slate-800">
                  「A子さんは『170cm以上、年収600万円以上』というご希望の条件はしっかりありますが、恋愛経験も少なく、具体的な『理想の男性像』のイメージはまだ少しぼんやりされていますよね。でも、最初から明確なイメージを持てている人なんていませんから、まったく問題ありません！ これから活動を進めながら、私たちと一緒に最高のパートナー像をしっかりと固めていきましょうね。」
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

            {/* Q1 & Q2 */}
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 border-2 border-sky-200 p-6 md:p-8 rounded-2xl shadow-sm space-y-6">
              <div className="border-b border-sky-200 pb-3">
                <span className="text-xs bg-sky-600 text-white font-bold px-3 py-1 rounded-lg uppercase tracking-wider">Topic 1 & 2</span>
                <h3 className="font-bold text-sky-950 text-xl md:text-2xl mt-2">
                  1. 結婚相談所（IBJ正規加盟店）の会員属性<br />
                  2. 30代女性の希望条件（170cm以上・年収600万円以上）の現実
                </h3>
              </div>

              <div className="space-y-4 text-[20px] md:text-base leading-relaxed">
                <div className="bg-white p-4 rounded-xl border border-sky-200 shadow-xs">
                  <span className="font-bold text-sky-700 block mb-1">A子さん：</span>
                  <p>「私の希望に見合う男性は、どれくらいいますか？ 結婚相談所って、今まで全く縁がなくて……。条件に合う男性が、本当に私なんかとお見合いしてくれるのか不安です。」</p>
                </div>

                <div className="bg-sky-100/70 p-4 rounded-xl border border-sky-300 shadow-xs space-y-3">
                  <span className="font-bold text-sky-950 block">カウンセラー：</span>
                  <p>「結論から言うと、その条件に合う男性はたくさん在籍しています！ただし、IBJの検索システムには知っておくべき『リアルな特徴』があるんです。」</p>
                  <p>「実は、新しくシステムに登録した直後は『新規入会バブル』と言って、全国の男性からかなりの申し込みが届きます。ですが、3ヶ月ほど経つと、その申し込みの波は自然と落ち着いて（減って）しまいます。」</p>
                  <p className="font-bold text-sky-900 bg-white/80 p-3 rounded-lg border border-sky-200">
                    「そのため、なんとなく登録して流されるのではなく、『登録する前に、どんな男性に、どれくらいのペースで自分から申し込むか』をあらかじめ決めておくことが、スタートダッシュを決める最大のコツなんです。」
                  </p>
                </div>
              </div>
            </div>

            {/* Q3 */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 md:p-8 rounded-2xl shadow-sm space-y-6">
              <div className="border-b border-blue-200 pb-3">
                <span className="text-xs bg-indigo-600 text-white font-bold px-3 py-1 rounded-lg uppercase tracking-wider">Topic 3</span>
                <h3 className="font-bold text-indigo-950 text-xl md:text-2xl mt-2">
                  3. スケジュール管理と「新規入会バブル」の活用戦略
                </h3>
              </div>

              <div className="space-y-4 text-[20px] md:text-base leading-relaxed">
                <div className="bg-white p-4 rounded-xl border border-indigo-200 shadow-xs">
                  <span className="font-bold text-indigo-700 block mb-1">A子さん：</span>
                  <p>「初心者だけど、スケジュールや進め方は大丈夫？ 登録初期にたくさん申し込みが来たら、パニックになってしまいそうです……。仕事も忙しいので、自分の生活スケジュールに合わせて婚活ができるか心配です。」</p>
                </div>

                <div className="bg-indigo-100/60 p-4 rounded-xl border border-indigo-300 shadow-xs space-y-3">
                  <span className="font-bold text-indigo-950 block">カウンセラー：</span>
                  <p>「だからこそ、事前のシミュレーションが大切です！私たちはカウンセリングの段階から、『ご自身の仕事や生活スケジュールに合わせて、婚活にどれくらい時間を割けるか』を一緒に確認します。」</p>
                  <p>「例えば、活動が始まって『毎週の土日すべてがお見合いで埋まっても体力的に大丈夫か？』など、無理のない活動量をしっかりすり合わせます。」</p>
                  <p>「さらに、A子さんは同世代（30代前半）の男性を希望されていますが、システムに登録すると、例えば15歳年上の男性など、自分の希望とは全く違う層からもたくさん申し込みが届くようになります。受け身のままだと、希望と違うお見合いだけでスケジュールが埋まってしまい、『婚活疲れ』の原因になります。」</p>
                  <p className="font-bold text-indigo-900 bg-white/80 p-3 rounded-lg border border-indigo-200">
                    「理想の出会いを追求するなら、女性だからと恥ずかしがらず、自分からターゲット層の男性へ積極的にたくさん申し込むこと！<br />
                    人にもよりますが、女性から申し込んでお見合いが成立する確率は『約8%』がリアルな目安です。つまり、100人に申し込んで、毎週2人とお見合いが組めるイメージですね。自分から仕掛けてお見合いを組んでいく方が、結果的に一番効率よく、理想の男性に出会うことができるんですよ。」
                  </p>
                </div>
              </div>
            </div>

            {/* Q4 */}
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 border-2 border-sky-200 p-6 md:p-8 rounded-2xl shadow-sm space-y-6">
              <div className="border-b border-sky-200 pb-3">
                <span className="text-xs bg-sky-600 text-white font-bold px-3 py-1 rounded-lg uppercase tracking-wider">Topic 4</span>
                <h3 className="font-bold text-sky-950 text-xl md:text-2xl mt-2">
                  4. 第一印象を高めるお見合いの服装と、ホテルラウンジ予約代行
                </h3>
              </div>

              <div className="space-y-4 text-[20px] md:text-base leading-relaxed">
                <div className="bg-white p-4 rounded-xl border border-sky-200 shadow-xs">
                  <span className="font-bold text-sky-700 block mb-1">A子さん：</span>
                  <p>「服装や、お見合いの場所はどうすればいいの？ 今日は普段通りのネイビーのシャツにパンツスタイルで来てしまったのですが、お見合いの時もこういう服装で大丈夫でしょうか？場所選びなども、どうすればいいか分からなくて……。」</p>
                </div>

                <div className="bg-sky-100/70 p-4 rounded-xl border border-sky-300 shadow-xs space-y-3">
                  <span className="font-bold text-sky-950 block">カウンセラー：</span>
                  <p>「今日のA子さんの服装もとても知的で素敵ですが、婚活の場（特にお見合い）においては、男性ウケや第一印象を考慮して、『ワンピース』や『パステルカラーなどの明るい色』の服装が圧倒的に好まれます！プロフィールの写真撮影やお見合い本番に向けて、具体的なコーディネートもアドバイスしますね。」</p>
                  <p>「お見合いの場所は主にホテルのラウンジで行い、場所選びや日時の調整、席の予約などはすべて当相談所が代行します。」</p>
                  <p className="italic text-slate-700 bg-white/80 p-3 rounded-lg border border-sky-200">
                    「（実際にプロフィール見本をお見せしながら）こちらが当相談所で作成しているプロフィールの見本です。男性の目を引く写真の工夫や、自己紹介文の工夫ポイントを、これから一つひとつ解説していきますね！」
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* STEP 5 - こだわり検索機能 & 深い本音 */}
        <section className="py-12 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white w-full shadow-inner">
          <div className="max-w-5xl mx-auto w-full px-4 md:px-0">
            <div className="bg-white/95 backdrop-blur-md text-slate-800 p-6 md:p-10 rounded-2xl shadow-2xl space-y-6">
              <div className="text-center space-y-2">
                <span className="bg-amber-400 text-slate-900 font-extrabold text-xs px-3 py-1 rounded-full tracking-widest inline-block uppercase shadow-xs">Topic 5</span>
                <h2 className="text-xl md:text-3xl font-serif font-bold text-sky-950 tracking-wider">
                  ☕ 【カウンセリングの終盤】打ち解けて見えてきた、A子さんの「本当のこだわり」
                </h2>
                <p className="text-slate-600 font-medium text-sm md:text-base">
                  （具体的なデータや進め方の説明が終わり、お互いに笑顔が増えてすっかり緊張がほぐれた頃……）
                </p>
              </div>

              <div className="space-y-4 text-[20px] md:text-base leading-relaxed">
                <div className="bg-sky-50 p-4 rounded-xl border border-sky-200">
                  <span className="font-bold text-sky-800 block mb-1">A子さん：</span>
                  <p>「なるほど、システムや進め方がすごくよく分かりました！…あの、実はさっき『理想のイメージがぼんやりしている』と言ったんですけど、いろいろお話を聞いていくうちに、自分の中で絶対に譲れない深いこだわりがいくつか湧いてきたんです。」</p>
                </div>

                <div className="bg-sky-100 p-4 rounded-xl border border-sky-300">
                  <span className="font-bold text-sky-900 block mb-1">カウンセラー：</span>
                  <p>「おっ、素晴らしいですね！ぜひその本音を教えてください。」</p>
                </div>

                <div className="bg-sky-50 p-4 rounded-xl border border-sky-200">
                  <span className="font-bold text-sky-800 block mb-1">A子さん：</span>
                  <p>「私、学生時代からずっとテニスが趣味で、今も週末にスクールに通っているんです。だから、結婚してからもできれば趣味を一緒に楽しめるようなアクティブな人がいいなって。それと、今家で猫を飼っているので、動物が好きな人じゃないと絶対に一緒に暮らせないなと思って……。」</p>
                  <p className="mt-2">「あと、タバコの煙や匂いが本当に苦手なので、お相手は『絶対にタバコを吸わない非喫煙者の人』がいいです。年収や身長も大切ですけど、こういう生活のこだわりって、やっぱりワガママになっちゃいますか？」</p>
                </div>

                <div className="bg-gradient-to-br from-sky-100 to-blue-100 p-6 rounded-xl border-2 border-sky-300 space-y-3">
                  <span className="font-bold text-sky-950 text-xl block">カウンセラー：</span>
                  <p>「ワガママなんてとんでもない！今お話ししてくださったことこそ、結婚生活を長く幸せに続けるために、年収や身長以上にめちゃくちゃ重要な『最高のヒント』ですよ！」</p>
                  <p>「実は、私たちが導入しているIBJのシステムには、非常に細かな『こだわり検索機能』があるんです。」</p>
                  <p>「お酒・タバコの項目で【吸わない】を選択して検索すれば、喫煙者の男性をはじめから除外して、ストレスのないお相手探しが可能です。さらに、趣味のキーワード検索で『テニス』と入力したり、『ペット』の項目で【猫が好き・飼っている】という男性をピンポイントで絞り込むこともできるんですよ。試しに、今ここで一緒に検索してみましょうか？」</p>
                  
                  <div className="bg-white p-4 rounded-lg border border-sky-200 font-medium text-sky-900 my-2">
                    （実際に画面を操作して見せながら）<br />
                    「ほら、ご覧ください！『30代、170cm以上、年収600万以上、初婚』に加えて、『禁煙・テニス・動物好き』で絞り込んでも、大阪梅田周辺だけでこれだけ多くの素敵な男性がヒットします。」
                  </div>

                  <p>「お互いの趣味やライフスタイルが最初から一致していると、お見合いの席でも『テニスはどこでされているんですか？』『うちの猫の写真、見ますか？』と会話が自然に弾み、交際にも発展しやすいんです。」</p>
                  <p>「プロフィール作成のときも、自己紹介文に『テニス』『猫』といったキラーワードをどう魅力的に散りばめるか、女性医師の視点と20年のベテラン仲人のノウハウで戦略的にプロデュースしますね。」</p>
                  <p className="font-bold text-sky-950 text-lg">
                    「最初はイメージがぼんやりしていても、こうやってお話ししながら、A子さんにとって一番心地いいお相手像を一つずつ『可視化』していきましょう！」
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
        <Footer/>

      </div>
    </>
  );
}