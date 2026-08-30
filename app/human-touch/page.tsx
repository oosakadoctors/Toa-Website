import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Google検索用）AIが選択肢を提示し、あなたが未来を選ぶハイブリッド婚活｜大阪梅田ドクターズ結婚相談所",
  description:
    "AIに丸投げしない、人間主導の最新データ婚活。スケジュール管理の最適化から、お相手に確認すべき金銭感覚・親族関係の質問候補の作成まで。ベテランの経験知で高度な生成AIを安全に活用し、多角的・客観的な提案を行います。最終決定権は100%あなたにあります",

  keywords: [
    "AI 婚活",
    "ハイブリッド婚活",
    "成婚アドバイス",
    "プロのカウンセラー",
    "大阪梅田 ドクターズ結婚相談所",
  ],

  alternates: {
    canonical: "/ai-counselor-value",
  },

  openGraph: {
    title:
      "(Google検索用）AIが選択肢を提示し、あなたが未来を選ぶハイブリッド婚活｜大阪梅田ドクターズ結婚相談所",
    description:
      "AIに丸投げしない、人間主導の最新データ婚活。スケジュール管理の最適化から、お相手に確認すべき金銭感覚・親族関係の質問候補の作成まで。ベテランの経験知で高度な生成AIを安全に活用し、多角的・客観的な提案を行います。最終決定権は100%あなたにあります",
    type: "article",
    locale: "ja_JP",
    siteName: "大阪梅田ドクターズ結婚相談所",
    url: "/ai-counselor-value",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Google検索用）AIが選択肢を提示し、あなたが未来を選ぶハイブリッド婚活｜大阪梅田ドクターズ結婚相談所",
    description:
      "AIに丸投げしない、人間主導の最新データ婚活。スケジュール管理の最適化から、お相手に確認すべき金銭感覚・親族関係の質問候補の作成まで。ベテランの経験知で高度な生成AIを安全に活用し、多角的・客観的な提案を行います。最終決定権は100%あなたにあります",
  },
};

export default function AiCounselorValuePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'headline': 'AI（人工知能）には絶対にできない、プロのカウンセラーだからこそ創り出せる「成婚」の真実',
    'description': 'AIに丸投げしない、人間主導の最新データ婚活。スケジュール管理の最適化から、お相手に確認すべき金銭感覚・親族関係の質問候補の作成まで。ベテランの経験知で高度な生成AIを安全に活用し、多角的・客観的な提案を行います。最終決定権は100%あなたにあります',
    'publisher': {
      '@type': 'Organization',
      'name': '大阪梅田ドクターズ結婚相談所',
    }
  };

  return (
    <main className="relative min-h-screen text-[20px] leading-relaxed text-gray-800 px-1 sm:px-6 lg:px-8 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* FULL-PAGE VIEWPORT BACKGROUND IMAGE & OVERLAY */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/cyber.png" // Update to your preferred background image path
          alt="Background Image"
          fill
          className="bg-repeat"
          priority
        />
        {/* Subtle dark backdrop overlay for high contrast and readability */}
        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]" />
      </div>

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 mx-auto max-w-4xl space-y-12">

        {/* HERO SECTION */}
        <section className="bg-gradient-to-br from-slate-900/90 via-sky-950/90 to-blue-900/90 text-white rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8 border border-sky-700/50 backdrop-blur-md overflow-hidden">
          {/* MENU / BREADCRUMB NAME LABEL */}
          <div className="inline-block bg-sky-500/20 text-sky-200 border border-sky-400/30 px-4 py-1.5 rounded-full text-lg font-bold tracking-wider text-[15px]">
            婚活における生成AI活用の特徴
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            AI（人工知能）には絶対にできない、プロのカウンセラーだからこそ創り出せる「成婚」の真実
          </h1>

          {/* YELLOW TEXT */}
          <p className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-amber-300 leading-snug border-l-4 border-amber-400 pl-4 sm:pl-6 my-6">
            大阪梅田ドクターズ結婚相談所では、最先端の生成AIを客観的な思考の整理に活用しています。しかし、AIはあくまで効率を高めるための「優秀な道具」に過ぎません。
          </p>

          {/* WHITE BACKGROUND AREA */}
          <div className="-mx-8 -mb-8 sm:-mx-12 sm:-mb-12 p-8 sm:p-12 bg-white/95 text-gray-900 rounded-b-3xl mt-8 space-y-6">

            {/* BLACK TEXT */}
            <p className="text-gray-800 text-[20px] leading-relaxed">
              どれだけテクノロジーが進化しても、「結婚」という人生最大の決断において、AIには絶対に立ち入れない、私たち人間にしかできない領域があります。
            </p>
            <p className="text-gray-800 text-[20px] leading-relaxed font-bold">
              私たちが何よりも大切にしている、プロのカウンセラーにしかできない3つの本当の価値をお伝えします。
            </p>

            <div className="clear-both" />
          </div>
        </section>

        {/* SECTION 2: 4 Core Value Sections */}
        <section className="space-y-8">
          <div className="bg-white/95 rounded-3xl border-2 border-sky-300 p-8 sm:p-10 shadow-lg space-y-4 backdrop-blur-sm">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-black text-sky-950 leading-snug">
              1. 「ゼロから1」を生み出すこと ── あなただけの結婚価値観の言語化
            </h2>
            <p className="text-[20px]">
              AIは、過去のデータを並べ替えたり、きれいに整理したりすることは得意です。しかし、あなたの心の中にある「どんな家庭を築きたいか」「何に本当の幸せを感じるか」という本質的な人生の価値観（ゼロから1）を、AIが勝手に生み出すことは不可能です。<br />
              あなたの価値観は、これまでの人生の経験や、時に傷ついた記憶、未来へのささやかな願いの中からしか生まれません。<br />
              私たちは、じっくりとお話を伺う個別カウンセリングを通じて、あなた自身も気づいていなかった「真の理想像」を対話によって一緒に掘り起こし、温もりのある言葉へと紡ぎ出します。
            </p>
          </div>

          <div className="bg-white/95 rounded-3xl border-2 border-sky-300 p-8 sm:p-10 shadow-lg space-y-4 backdrop-blur-sm">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-black text-sky-950 leading-snug">
              2. 「どのターゲットに、どう届けるか」 ── 人間心理の裏をかく成婚戦略
            </h2>
            <p className="text-[20px]">
              AIは「誰にでもウケる平均的にきれいな文章」を作れますが、「あなたが本当に選ばれたい特定のお相手（ハイクラス層など）」の心を動かすマーケティング戦略は持ち合わせていません。<br />
              なぜなら、人間の感情は理屈通りには動かないからです。仲人歴20年のベテランの経験知と、ドクターズ相談所ならではの視点から、「今、あなたが狙うべきお相手層の心理には、どの言葉が最も深く刺さるか」をあなたと一緒に相談します。AIの計算を超えた「選ばれるための戦略」をハンドメイドで構築します。
            </p>
          </div>

          <div className="bg-white/95 rounded-3xl border-2 border-sky-300 p-8 sm:p-10 shadow-lg space-y-4 backdrop-blur-sm">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-black text-sky-950 leading-snug">
              3. 「お相手の“性格” の解読」と「現実」のリアルタイムナビ
            </h2>
            <p className="text-[20px]">
              仮交際が進む中で、住居、金銭感覚のバランス、具体的な支払いの分担、お互いの親族との距離感など、段階的にシビアな現実を確認していく必要があります。<br />
              しかし、結婚は等価交換のビジネスではありません。お相手にもプライドや固有の性格（カラー）があります。<br />
              AIは一般的な質問リストを作れても、「今のお相手の絶妙な心理状態に対して、関係性を壊さずに本音を引き出すには、いつ、どのトーンで切り出すべきか」という繊細なタイミングの微調整はできません。私たちは、あなたからデート報告を受けるたびに、お相手の細かな反応から心情を読み解き、「今回のデートのこのタイミングで、こう切り出してみましょう」と、リアルタイムで生きたアドバイスを提示します。
            </p>
          </div>

          <div className="bg-white/95 rounded-3xl border-2 border-sky-300 p-8 sm:p-10 shadow-lg space-y-4 backdrop-blur-sm">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-black text-sky-950 leading-snug">
              4. 孤独な婚活に寄り添う「メンタルケア」と、最後の「決断」
            </h2>
            <p className="text-[20px]">
              婚活は、時に迷い、傷つき、孤独を感じることもある旅路です。そんな時、画面の向こうのAIがどれだけ正しい正論を並べても、あなたの傷ついた心に寄り添うことはできません。<br />
              あなたの不安や焦りに共感し、時には一緒に悩み、二人三脚で伴走するのは、私たち血の通ったカウンセラーです。そして何より、「この人と一生を共にする」という最後の決断を下す瞬間、あなたの背中をそっと押すのは、冷たいデータではなく、あなた自身が感じる確信と、私たち仲人への信頼です。
            </p>
          </div>
        </section>

        {/* SECTION 3: Conclusion & Key Takeaways */}
        <section className="bg-amber-50/90 rounded-3xl border-2 p-6 sm:p-10 border-amber-200 shadow-lg space-y-6 backdrop-blur-sm">
          <div className="space-y-3 border-b-2 border-amber-200 pb-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-950 leading-tight">
              結論：AIを「最高の武器」とし、あなたが「主役」となる婚活
            </h2>
            <p className="text-[20px] font-medium text-amber-900">
              最先端の生成AIシステムが婚活にもたらすものは、あなたの成婚確率を高めるための客観的な「データと提案」に過ぎません。アドバイスはどこまでいっても選択肢の一つであり、すべての答えを決め、自らの未来を開くのはあなた自身です。
            </p>
          </div>

          <p className="text-[20px] text-gray-800">
            当相談所（大阪梅田ドクターズ結婚相談所）では、AIによる効率的なデータ分析と、人間にしかできないエモーショナルな伴走を完全に融合させています。
          </p>

          <div className="bg-white/90 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <ul className="list-disc list-inside space-y-2 text-[20px]">
              <li><strong>AIができること：</strong> データの論理的整理、選択肢の網羅的な列挙、安全なアノニマス環境による文章の添削・修正。</li>
              <li><strong>人間にしかできないこと：</strong> 本質的な結婚価値観（ゼロから1）の言語化、お相手の心理カラーに踏み込んだ交際戦略の構築、愛着関係の育成。</li>
            </ul>
          </div>

          <p className="text-[20px] text-gray-800 leading-relaxed">
            医療界のリアルを知り尽くした【現役女性医師カウンセラー】と、百戦錬磨の【ベテラン男性仲人】が、AIという強力な武器を使いこなしながら、あなたという「主役」の横で最高の軍師として最後まで温かく寄り添い続けます。
          </p>
        </section>

        {/* SECTION 4: Summary Box */}
        <section className="bg-rose-50/90 rounded-3xl border-2 border-rose-300 p-8 sm:p-10 shadow-lg space-y-6 backdrop-blur-sm">
          <p className="text-gray-800 text-[20px] leading-relaxed">
            データによる客観的な提案（AI）と、プロフェッショナルによる主観的な伴走（人間）。この2つのアプローチをわがままに掛け合わせることで、あなたは理想のパートナーシップ（類友）を、自分自身の意志によって最速で手繰り寄せることができます。
          </p>
        </section>

        {/* SECTION 5: Final Callout */}
        <section className="bg-gradient-to-br from-sky-950/90 via-slate-900/90 to-blue-950/90 text-white rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8 border border-sky-700/50 backdrop-blur-md">
          <p className="font-extrabold text-xl sm:text-2xl lg:text-3xl text-center bg-white/10 p-6 rounded-2xl border border-white/20 text-amber-300 shadow-inner">
            すべての「答え」を決め、自分の人生の扉を開けるのは、どこまでも【あなた自身】しかいません。
          </p>
        </section>

      </div>
    </main>
  );
}