import { Metadata } from "next";
import Image from "next/image";
import { 
  Users, 
  UserCheck, 
  Stethoscope, 
  Brain, 
  Sparkles, 
  HeartHandshake, 
  Clock, 
  Compass, 
  Smile, 
  Award 
} from "lucide-react";

export const metadata: Metadata = {
  title: "大阪梅田ドクターズ結婚相談所の会員と婚活環境について｜日本最大級の会員数と少人数制",
  description:
    "日本最大級の会員数から選べる安心と、少人数制ならではのきめ細やかなサポート。現役女性医師とベテランカウンセラーの2名体制で、科学的根拠（エビデンス）重視の婚活環境を提供します。",
  alternates: {
    canonical: "/elite-circle",
  },
};

export default function EnvironmentPage() {
  return (
    <main className="bg-[#faf8f5] min-h-screen text-[18px] leading-relaxed text-gray-800 py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-8">

        {/* Header Ribbon / Banner */}
        <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-2.5 text-center text-white font-bold rounded-t-2xl shadow-sm text-lg sm:text-xl">
          <span className="inline-flex items-center gap-1.5">
            <Sparkles className="w-5 h-5 shrink-0" />
            日本最大級の会員数と少人数制
          </span>
        </div>

        {/* Hero / Header Section */}
        <section className="rounded-b-2xl bg-white border border-rose-200 p-6 sm:p-10 shadow-sm space-y-4 -mt-8 pt-8">

          <h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-snug tracking-tight"
            style={{ wordBreak: 'break-all' }}
          >
            大阪梅田ドクターズ結婚相談所の会員と婚活環境について
          </h1>

          <p 
            className="text-xl sm:text-2xl font-bold text-rose-500 pt-1"
            style={{ wordBreak: 'break-all' }}
          >
            日本最大級の会員数から選べる安心と、少人数制ならではのきめ細やかなサポート
          </p>

          <p 
            className="text-[18px] text-gray-700 leading-relaxed pt-3 border-t border-rose-200"
            style={{ wordBreak: 'break-all' }}
          >
            大阪梅田ドクターズ結婚相談所は、会員様お一人おひとりの人生と徹底的に向き合い、質の高いサポートを提供します。
          </p>
        </section>

        {/* 3つの柱 (Feature Cards Grid) */}
        <section className="grid gap-4 sm:grid-cols-3">
          
          {/* Feature 1 */}
          <div className="rounded-2xl bg-white border border-rose-200 p-5 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-rose-500 font-bold">
              <span className="p-2 rounded-lg bg-rose-400 text-white">
                <UserCheck className="w-5 h-5 shrink-0" />
              </span>
              <span className="text-lg">毎月5名様限定</span>
            </div>
            <p className="text-[18px] text-gray-700 leading-relaxed" style={{ wordBreak: 'break-all' }}>
              毎月5名様限定の「完全少人数制」サポート品質を最高水準に保つため、新規入会は月5名様まで。少人数制だからこそ、あなたの様々なご要望にきめ細やかに対応できます。
            </p>
          </div>

          {/* Feature 2 */}
          <div className="rounded-2xl bg-white border border-rose-200 p-5 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-rose-500 font-bold">
              <span className="p-2 rounded-lg bg-rose-400 text-white">
                <Stethoscope className="w-5 h-5 shrink-0" />
              </span>
              <span className="text-lg">専任2名体制</span>
            </div>
            <p className="text-[18px] text-gray-700 leading-relaxed" style={{ wordBreak: 'break-all' }}>
              医師 ＆ ベテランが2名体制でつく「専任サポート」あなた1人に対して、現役女性医師とベテランカウンセラーの2名が同時に専任でつきます。医師の論理性と、婚活のプロの経験で、あなただけの特別な婚活戦略を作成します。
            </p>
          </div>

          {/* Feature 3 */}
          <div className="rounded-2xl bg-white border border-rose-200 p-5 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-rose-500 font-bold">
              <span className="p-2 rounded-lg bg-rose-400 text-white">
                <Users className="w-5 h-5 shrink-0" />
              </span>
              <span className="text-lg">数万人規模のネットワーク</span>
            </div>
            <p className="text-[18px] text-gray-700 leading-relaxed" style={{ wordBreak: 'break-all' }}>
              数万人規模の提携ネットワーク ＆ 厳選された自社会員日本最大級の連盟に加盟しており、全国の豊富な提携会員様からスマホでいつでもお相手を検索可能。
            </p>
          </div>

        </section>

        {/* Closing Banner Card */}
        <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-4 sm:p-5 text-center text-white rounded-2xl shadow-sm">
          <p className="text-lg sm:text-xl font-bold" style={{ wordBreak: 'break-all' }}>
            心から幸せだと思える最高の結婚へと、私たちと一緒に歩んでまいりましょう。
          </p>
        </div>

        <section className="w-full">
          <div className="w-full max-w-4xl mx-auto my-1">
            <div className="relative w-full aspect-[1/1] overflow-hidden rounded-2xl border-4 border-white ring-2 ring-white/80 shadow-2xl">
              <Image
                src="/infographic-explaining-the-number-of-members-at-the-Osaka-Umeda-Doctors’-Marriage-Agency.jpg"
                alt="大阪梅田ドクターズ結婚相談所の会員数や特徴をわかりやく解説した図"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                priority={false}
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAAEAAQBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA="
              />
            </div>
          </div>
        </section>

        {/* Section 1: エビデンス重視の婚活設計 */}
        <section className="rounded-2xl bg-white border border-rose-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-start gap-3 border-b border-rose-200 pb-4">
            <div className="p-2.5 rounded-xl bg-rose-400 text-white shrink-0 mt-1">
              <Brain className="w-7 h-7" />
            </div>
            <h2 
              className="text-xl sm:text-2xl font-black text-gray-900 leading-snug"
              style={{ wordBreak: 'break-all' }}
            >
              現役女性医師の医学的知見と心理的アプローチに基づく、エビデンス重視の婚活設計
            </h2>
          </div>

          <div className="text-[18px] text-gray-700 leading-relaxed space-y-4 pt-2">
            <p style={{ wordBreak: 'break-all' }}>
              結婚相談所選びで最も重要視されるべきは、「カウンセリングの質と、運営者の確かな専門性」です。当相談所では、日々多様な患者様の健康状態やお気持ち、人生の価値観に向き合ってきた現役女性医師（加藤）の「深い傾聴力・人間性を見抜く客観的な分析力」と、数多くのご成婚実績を持つベテランカウンセラーの「実践的な成婚メソッド」を融合させた、独自のカウンセリング体制を構築しています。
            </p>
            <p style={{ wordBreak: 'break-all' }}>
              仕事と家庭の両立におけるメンタルケアをはじめ、当直や不規則なシフト勤務といった専門職ならではのタイトなスケジュール調整、また多忙な中でのモチベーション維持など、ライフスタイルに合わせたオーダーメイドの活動計画をご提案します。日本最大級のネットワークを活かした全国数万人規模の身元保証会員データから、AIマッチングだけに依存しない、高精度なパートナーシップ分析を行います。
            </p>
            <p style={{ wordBreak: 'break-all' }}>
              大阪・梅田エリアを中心に、医師、弁護士、公認会計士、税理士、大学教授などの専門職・キャリア層や、知的な出会いを求めるハイクラスな会員様から多くの支持をいただいております。
            </p>
            <p style={{ wordBreak: 'break-all' }}>
              結婚相談所の活動で多くの人が直面する「年齢の壁」や「交際3ヶ月ルールの進め方」といった特有のストレス・不安に対しても、認知行動療法的なアプローチや心理カウンセリングの技術を取り入れ、メンタル面の不調を未然に防ぎます。入会審査時における独身証明書や年収証明書の提出による100%身元保証と、徹底したプライバシー保護をお約束し、あなたが心から笑顔になれる「理想を超えた最高の結婚」まで、家族のような誠意と愛情を持って2名体制で伴走いたします
            </p>
          </div>
        </section>

        <section className="w-full my-6">
          {/* Section Heading */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-orange-100/80 border border-orange-200/80 text-orange-950 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-3 shadow-xs">
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-950 leading-tight">
              大阪梅田ドクターズ結婚相談所の<br className="sm:hidden" />男性会員背景、職業ランキング表
            </h2>
            <div className="flex items-center justify-center gap-2 pt-2">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            </div>
          </div>

          {/* 9:16 Aspect Ratio Image Container */}
          <div className="w-full max-w-md mx-auto">
            <div className="relative w-full aspect-[9/16] overflow-hidden rounded-2xl shadow-md border border-orange-200/60">
              <Image
                src="/osaka-male-members-occupational-rankings.jpg"
                alt="大阪梅田ドクターズ結婚相談所の男性会員背景、職業ランキング表"
                className="w-full h-full object-cover"
                loading="lazy"
                fill
                sizes="(max-width: 768px) 100vw, 440px"
                priority={false}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAAEAAQBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA="
              />
            </div>
          </div>
        </section>

        <section className="w-full my-6">
          {/* Section Heading */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-orange-100/80 border border-orange-200/80 text-orange-950 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-3 shadow-xs">
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-950 leading-tight">
              大阪梅田ドクターズ結婚相談所の<br className="sm:hidden" />会員背景の特徴
            </h2>
            <div className="flex items-center justify-center gap-2 pt-2">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            </div>
          </div>

          {/* 9:16 Aspect Ratio Image Container */}
          <div className="w-full max-w-md mx-auto">
            <div className="relative w-full aspect-[9/16] overflow-hidden rounded-2xl shadow-md border border-orange-200/60">
              <Image
                src="/osaka-female-members-occupational-rankings.jpg"
                alt="大阪梅田ドクターズ結婚相談所の女性会員背景、職業ランキング表"
                className="w-full h-full object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 440px"
                priority={false}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAAEAAQBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA="
              />
            </div>
          </div>
        </section>

        {/* Section 2: 会員背景の特徴 */}
        <section className="rounded-2xl bg-white border border-rose-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-start gap-3 border-b border-rose-200 pb-4">
            <div className="p-2.5 rounded-xl bg-rose-400 text-white shrink-0 mt-1">
              <Award className="w-7 h-7" />
            </div>
            <h2 
              className="text-xl sm:text-2xl font-black text-gray-900 leading-snug"
              style={{ wordBreak: 'break-all' }}
            >
              大阪梅田ドクターズ結婚相談所の会員背景の特徴
            </h2>
          </div>

          <div className="text-[18px] text-gray-700 leading-relaxed space-y-4 pt-2">
            <p style={{ wordBreak: 'break-all' }}>
              当相談所には、20代後半から30代・40代の「自立した専門職・キャリア層」の男女の方々が多数在籍しています。特に医師をはじめ、弁護士、公認会計士、薬剤師、公務員、大手企業に勤務するビジネスパーソン、大学教授など、年収1,000万円を超える優秀なハイクラス層、知性とキャリアを兼ね備えた方々に多く選ばれています。
            </p>
            <p style={{ wordBreak: 'break-all' }}>
              現役女性医師が運営する相談所だからこそ、社会の第一線で働く様々な勤務への深い理解があり、女性が直面する「ライフステージの変化（キャリア継続と妊活・出産・子育ての両立）」という課題に共感できる環境が整っています。自分の仕事や生き方を尊重し、生涯にわたり互いを高め合える「精神的に自立したパートナー」を求めている、真剣度の高い男女が集まっていることが当社の大きな背景（特徴）です。
            </p>
          </div>
        </section>

        {/* Section 3: 真摯に未来を見据える会員層へ提供する環境 */}
        <section className="rounded-2xl bg-white border border-rose-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-start gap-3 border-b border-rose-200 pb-4">
            <div className="p-2.5 rounded-xl bg-rose-400 text-white shrink-0 mt-1">
              <Clock className="w-7 h-7" />
            </div>
            <h2 
              className="text-xl sm:text-2xl font-black text-gray-900 leading-snug text-rose-500"
              style={{ wordBreak: 'break-all' }}
            >
              真摯に未来を見据える会員層へ提供する効率よい活動環境
            </h2>
          </div>

          <div className="text-[18px] text-gray-700 leading-relaxed space-y-4 pt-2">
            <p style={{ wordBreak: 'break-all' }}>
              「知的な対話力」や「価値観の一致」を大切にされる会員様が集まるからこそ、大阪梅田ドクターズ結婚相談所では、科学的根拠（エビデンス）重視の婚活環境を構築しています。高い実績を持つベテランカウンセラーの成婚メソッドに加え、現役女性医師（加藤）の知見に基づく行動心理学や認知科学のアプローチを融合させた独自のカウンセリング環境をご提供します。
            </p>
            <p style={{ wordBreak: 'break-all' }}>
              仕事や社会的責任において第一線で活躍するキャリア層にとって、結婚は人生の可能性をさらに拡大するための契機でなければなりません。時間の使い方が極めてタイトな会員様の日常を深く理解しているからこそ、完全少人数制（月5名限定）の利点を最大限に活かし、
              お見合いや仮交際、真剣交際、各フェーズを最もスマートに、タイムパフォーマンス高く効率的に進められる環境を整えています。
              会話の端々で見せる本音や深い相性を客観的に分析し、会員様が「お相手との対話や関係性の構築」にだけ集中できるスマートな活動環境を徹底しています。
            </p>
          </div>
        </section>

        {/* Section 4: 理想の成婚をサポートする婚活環境 */}
        <section className="rounded-2xl bg-white border border-rose-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-start gap-3 border-b border-rose-200 pb-4">
            <div className="p-2.5 rounded-xl bg-rose-400 text-white shrink-0 mt-1">
              <Compass className="w-7 h-7" />
            </div>
            <h2 
              className="text-xl sm:text-2xl font-black text-gray-900 leading-snug"
              style={{ wordBreak: 'break-all' }}
            >
               「お互いの知性と人生の可能性を高め合う理想の成婚をサポートする婚活環境」
            </h2>
          </div>

          <div className="text-[18px] text-gray-700 leading-relaxed space-y-4 pt-2">
            <p style={{ wordBreak: 'break-all' }}>
              日本最大級の結婚相談所連盟のネットワークと、独自の自社ネットワークを活かし、多彩な出会いの可能性をご提供いたします。会員様それぞれの人生の価値観、ゆずれない希望、そしてライフプランに合致する理想のお相手を一緒に検討し、スマートな成婚へと導きます。
            </p>
            <p style={{ wordBreak: 'break-all' }}>
              ハイクラス層とのご縁を結ぶために不可欠なのが、「コミュニケーション力と知的な対話力」の向上です。当相談所では、現役女性医師の視点から会員様が持つ洗練された魅力を客観的に引き出し、お互いの価値観が共鳴し、リスペクトし合える関係が続く結婚に向けて、専門的なオーダーメイド戦略を練り上げます。
            </p>
            <p style={{ wordBreak: 'break-all' }}>
              お見合いから「仮交際」、論理的なステップを踏んで「真剣交際」へと確実に関係を進めるため、行動心理学やEQ（非認知能力）の知見に基づいた実践的なアドバイスを実施。感情論ではなく、お相手の本音をロジカルに分析することで、何十年先も深く共鳴し合える最高のパートナーシップの構築を可能にします。
            </p>
          </div>
        </section>

        {/* Section 5: 婚活疲れやストレスを軽減するサポート */}
        <section className="rounded-2xl bg-white border border-rose-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-start gap-3 border-b border-rose-200 pb-4">
            <div className="p-2.5 rounded-xl bg-rose-400 text-white shrink-0 mt-1">
              <HeartHandshake className="w-7 h-7" />
            </div>
            <h2 
              className="text-xl sm:text-2xl font-black text-gray-900 leading-snug"
              style={{ wordBreak: 'break-all' }}
            >
               「婚活疲れやストレス」を軽減するサポートのある婚活環境
            </h2>
          </div>

          <div className="text-[18px] text-gray-700 leading-relaxed space-y-4 pt-2">
            <p style={{ wordBreak: 'break-all' }}>
              大阪梅田ドクターズ結婚相談所では、ハイクラス婚活に伴う「婚活疲れやストレス」を極限まで軽減する科学的アプローチを徹底しています。
            </p>
            <p style={{ wordBreak: 'break-all' }}>
              現役医師の医学的知見と、成婚実績豊富なベテランカウンセラーが培ってきた実践的な経験に基づき、お見合いの不成立や突然の交際終了といったストレスに対し、単なる精神論ではなく、的確な原因分析と具体的な対策をロジカルに提示。同時に、一時的な落ち込みや不安に陥ってしまったお気持ちに寄り添って方向性を再検討し、モチベーションの低下を防ぎながら、次の一歩へ笑顔で前を向けるよう、回復する力（レジリエンス）を個別カウンセリングで柔軟にサポートします。
            </p>
            <p style={{ wordBreak: 'break-all' }}>
              また、システム主導の機械的なマッチングや放置型のサポート体制に限界を感じ、うまくいかず婚活疲れを感じる状況を打開すべく、当相談所では他の結婚相談所からの「乗り換え（移籍）」にも柔軟に対応しています。これまでの活動データやプロフィールの自己PRを客観的に再分析し、30代・40代のキャリア層の皆様が最短期間で理想のパートナーシップを築けるよう、2名体制のオーダーメイド戦略でスマートに伴走いたします。
            </p>
          </div>
        </section>

        {/* Section 6: 多様化するライフスタイルに寄り添う新時代の婚活環境 */}
        <section className="rounded-2xl bg-white border border-rose-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-start gap-3 border-b border-rose-200 pb-4">
            <div className="p-2.5 rounded-xl bg-rose-400 text-white shrink-0 mt-1">
              <Smile className="w-7 h-7" />
            </div>
            <h2 
              className="text-xl sm:text-2xl font-black text-gray-900 leading-snug"
              style={{ wordBreak: 'break-all' }}
            >
               多様化するライフスタイルに寄り添う、新時代の婚活環境
            </h2>
          </div>

          <div className="text-[18px] text-gray-700 leading-relaxed space-y-4 pt-2">
            <p style={{ wordBreak: 'break-all' }}>
              「結婚して子供を持ち、定時に帰る」といった、かつての“当たり前”だったライフプランは過去のものです。現代は、リモートワークやシフト制など働き方が多様化し、趣味やキャリアの優先度も人それぞれ。生き方や幸せの形、そして世の中の「正解」は決して一つではありません。生活リズムや価値観が個々に異なる今、従来の自然な出会いだけに頼る婚活は、限界を迎えているのが現実です。
            </p>
            <p style={{ wordBreak: 'break-all' }}>
              だからこそ大阪梅田ドクターズ結婚相談所では、一人ひとりの異なる日常に徹底的に寄り添う、柔軟な新時代の婚活環境をご用意しています。当相談所の強みは、医療の最前線で多様な人生観や多忙な現実に触れてきた「女性医師」の視点と、数多くの成婚を導いてきた「ベテランカウンセラー」の深い知見が融合している点です。
            </p>
            <p style={{ wordBreak: 'break-all' }}>
              例えば、夜勤が多く不規則なスケジュールで働く方、キャリアアップと結婚を同時に叶えたい方、あるいは自分らしい距離感でのパートナーシップを望む方。私たちは、凝り固まったマニュアル通りのアドバイスは一切いたしません。「あなたにとっての最適な幸せとは何か」を面談から導き出し、お見合いの調整から交際管理まで、それぞれの生活リズムに合わせた柔軟なサポートを提供します。
            </p>
            <p style={{ wordBreak: 'break-all' }}>
              価値観が多様化した時代だからこそ、条件のミスマッチを事前に防ぎ、最初からお互いのライフスタイルを尊重し合えるお相手と効率的に出会える環境が必要です。世間の常識にとらわれる必要はありません。女性医師とベテランカウンセラーの確かな知見を味方に、あなただけの柔軟で特別な未来への第一歩を、ここから一緒に踏み出してみませんか。
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}