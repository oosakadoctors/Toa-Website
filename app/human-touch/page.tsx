import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "AIにはできないカウンセラーの介在価値と強み｜大阪梅田ドクターズ結婚相談所",
  description:
    "結婚相談所の婚活においてAIには絶対にできない「人間の介在価値」を徹底解説。あなたの価値観（ゼロから1）の言語化、ターゲット層を狙い撃つ成婚戦略、お相手のカラーに合わせた交際ナビ、そして最後の決断への伴走など、大阪梅田ドクターズ結婚相談所の仲人の本当の強みを公開します。",

  keywords: [
    "AI 婚活 限界",
    "カウンセラー 介在価値",
    "結婚相談所 仲人の強み",
    "大阪梅田 ドクターズ結婚相談所",
    "ハイクラス婚活 伴走",
  ],

  alternates: {
    canonical: "/ai-and-counselor",
  },

  openGraph: {
    title: "AIにはできないカウンセラーの介在価値と強み｜大阪梅田ドクターズ結婚相談所",
    description:
      "結婚相談所の婚活においてAIには絶対にできない「人間の介在価値」を徹底解説。あなたの価値観（ゼロから1）の言語化、ターゲット層を狙い撃つ成婚戦略、お相手のカラーに合わせた交際ナビ、そして最後の決断への伴走など、大阪梅田ドクターズ結婚相談所の仲人の本当の強みを公開します。",
    type: "article",
    locale: "ja_JP",
    siteName: "大阪梅田ドクターズ結婚相談所",
    url: "/ai-and-counselor",
  },

  twitter: {
    card: "summary_large_image",
    title: "AIにはできないカウンセラーの介在価値と強み｜大阪梅田ドクターズ結婚相談所",
    description:
      "結婚相談所の婚活においてAIには絶対にできない「人間の介在価値」を徹底解説。あなたの価値観（ゼロから1）の言語化、ターゲット層を狙い撃つ成婚戦略、お相手のカラーに合わせた交際ナビ、そして最後の決断への伴走など、大阪梅田ドクターズ結婚相談所の仲人の本当の強みを公開します。",
  },
};

export default function AiAndCounselorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'headline': 'AIにはできないカウンセラーの介在価値と強み',
    'description': '結婚相談所の婚活においてAIには絶対にできない「人間の介在価値」と Osaka Umeda Doctors Marriage Agency の強みを解説',
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
        {/* Subtle dark backdrop overlay to guarantee high contrast and text readability */}
        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]" />
      </div>

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 mx-auto max-w-4xl space-y-12">

        {/* HERO SECTION */}
        <section className="bg-gradient-to-br from-slate-900/90 via-sky-950/90 to-blue-900/90 text-white rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8 border border-sky-700/50 backdrop-blur-md overflow-hidden">
          <div className="inline-block bg-sky-500/20 text-sky-200 border border-sky-400/30 px-4 py-1.5 rounded-full text-lg font-bold tracking-wider text-[15px]">
            AI & COUNSELOR
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            AIを「最高の武器」とし、<br />
            あなたが「主役」となる婚活
          </h1>

          {/* YELLOW TEXT */}
          <p className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-amber-300 leading-snug border-l-4 border-amber-400 pl-4 sm:pl-6 my-6">
            結論：AIにはできないカウンセラーの介在価値と強み
          </p>

          {/* WHITE BACKGROUND AREA */}
          <div className="-mx-8 -mb-8 sm:-mx-12 sm:-mb-12 p-8 sm:p-12 bg-white/95 text-gray-900 rounded-b-3xl mt-8">

            {/* BLACK TEXT */}
            <p className="text-gray-800 text-[20px] leading-relaxed">
              最先端の生成AIシステムが婚活にもたらすものは、あなたの成婚確率を高めるための客観的な「データと提案」に過ぎません。<br />
              アドバイスはどこまでいっても選択肢の一つであり、すべての答えを決め、自らの未来を開くのはあなた自身です。<br />
              当相談所（大阪梅田ドクターズ結婚相談所）では、AIによる効率的なデータ分析と、人間にしかできないエモーショナルな伴走を完全に融合させています。
            </p>

            <div className="clear-both" />
          </div>
        </section>

        {/* SECTION 2: AI vs Human (Role Comparison) */}
        <section className="space-y-8">
          <div className="bg-white/95 rounded-3xl border-2 border-sky-300 p-8 sm:p-10 shadow-lg space-y-4 backdrop-blur-sm">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-black text-sky-950 leading-snug">
              AIができること
            </h2>
            <ul className="list-disc list-inside space-y-2 text-[20px]">
              <li><strong>データの論理的整理:</strong> 膨大な情報から傾向やパターンを客観的に抽出します。</li>
              <li><strong>選択肢の網羅的な列挙:</strong> 効率的かつ漏れなく条件に合ったアプローチ候補を提示します。</li>
              <li><strong>文章の添削・修正:</strong> 安全なアノニマス環境下で、プロフィールやメッセージの精度を向上させます。</li>
            </ul>
          </div>

          <div className="bg-white/95 rounded-3xl border-2 border-sky-300 p-8 sm:p-10 shadow-lg space-y-4 backdrop-blur-sm">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-black text-sky-950 leading-snug">
              人間にしかできないこと
            </h2>
            <ul className="list-disc list-inside space-y-2 text-[20px]">
              <li><strong>価値観の言語化（ゼロから1）:</strong> 自分でも気づいていない本質的な結婚観や優先順位をすくい上げます。</li>
              <li><strong>交際戦略の構築:</strong> お相手の心理カラーに深く踏み込み、ターゲット層を狙い撃つ成婚戦略を練ります。</li>
              <li><strong>愛着関係の育成と決断の伴走:</strong> 人間関係の機微に寄り添い、最後の決断まで温かくサポートします。</li>
            </ul>
          </div>
        </section>

        {/* SECTION 3: Unique Value Proposition (Counselor Strengths) */}
        <section className="bg-amber-50/90 rounded-3xl border-2 p-6 sm:p-10 border-amber-200 shadow-lg space-y-6 backdrop-blur-sm">
          <div className="space-y-3 border-b-2 border-amber-200 pb-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-950 leading-tight">
              強力な武器を使いこなす、最高の軍師陣
            </h2>
            <p className="text-[20px] font-medium text-amber-900">
              大阪梅田ドクターズ結婚相談所ならではの、プロフェッショナルなサポート体制
            </p>
          </div>

          <div className="bg-white/90 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <h3 className="font-black text-amber-950 text-xl sm:text-2xl flex items-center gap-2">
               現役女性医師カウンセラー
            </h3>
            <p className="text-[20px]">
              医療界のリアルを知り尽くし、多忙なハイクラス層のライフスタイルや特有のお悩みにも深い理解をもってアドバイスします。
            </p>
          </div>

          <div className="bg-white/90 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <h3 className="font-black text-amber-950 text-xl sm:text-2xl flex items-center gap-2">
              百戦錬磨のベテラン男性仲人
            </h3>
            <p className="text-[20px]">
              豊富な経験に基づいた的確な男性目線・市場目線のフィードバックで、成婚に向けた最短ルートを導き出します。
            </p>
          </div>

          <p className="text-[20px] text-gray-800 leading-relaxed pt-2">
            AIという強力な武器を使いこなしながら、あなたという「主役」の横で最高の軍師として最後まで温かく寄り添い続けます。
          </p>
        </section>

        {/* SECTION 4: Summary Callout Box */}
        <section className="bg-rose-50/90 rounded-3xl border-2 border-rose-300 p-8 sm:p-10 shadow-lg space-y-6 backdrop-blur-sm">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-rose-950 tracking-tight leading-tight flex items-center gap-3">
            ハイブリッド婚活の強み
          </h2>
          <div className="space-y-4 text-gray-800 text-[20px]">
            <p className="bg-white/90 p-6 rounded-2xl border border-rose-200 shadow-sm">
              <strong>データによる客観的な提案（AI）：</strong>効率的な分析と漏れのない選択肢で、出会いの幅を広げます。
            </p>
            <p className="bg-white/90 p-6 rounded-2xl border border-rose-200 shadow-sm font-extrabold text-rose-900">
              <strong>プロフェッショナルによる主観的な伴走（人間）：</strong>心に踏み込んだアプローチで、理想のパートナーシップ（類友）を確実なものにします。
            </p>
          </div>
        </section>

        {/* SECTION 5: Summary Banner */}
        <section className="bg-gradient-to-br from-sky-950/90 via-slate-900/90 to-blue-950/90 text-white rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8 border border-sky-700/50 backdrop-blur-md">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-sky-200 tracking-tight leading-snug">
            まとめ
          </h2>

          <p className="font-extrabold text-xl sm:text-2xl lg:text-3xl text-center bg-white/10 p-6 rounded-2xl border border-white/20 text-amber-300 shadow-inner">
            【客観的データ分析】 ✕ 【プロによる感情の伴走】 ✕ 【あなたの意志】
          </p>

          <p className="leading-relaxed text-white text-[20px]">
            2つのアプローチをわがままに掛け合わせることで、あなたは理想のパートナーシップ（類友）を、自分自身の意志によって最速で手繰り寄せることができます。<br />
            すべての「答え」を決め、自分の人生の扉を開けるのは、どこまでも【あなた自身】しかいません。
          </p>
        </section>

      </div>
    </main>
  );
}