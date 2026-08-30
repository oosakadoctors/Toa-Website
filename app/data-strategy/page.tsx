import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "【forGoogleデータで導き心で繋ぐ「生成AI×仲人の経験知」の成婚戦略｜大阪梅田ドクターズ結婚相談所",
  description:
    "【個人情報非入力の安全運用】当相談所では、最先端の生成AIを独自のプロンプト戦略でアドバイスの作成に利用。婚活診断を元にAIが提示した選択肢から、あなた自身が納得のいく理想像を選び取ります。現役女性医師とベテラン仲人が軍師として伴走する、新時代のデータ婚活。",

  keywords: [
    "最先端AI",
    "仲人の成婚戦略",
    "データで導き心で繋ぐ",
    "生成AI 婚活",
    "大阪梅田 ドクターズ結婚相談所",
  ],

  alternates: {
    canonical: "/ai-strategy",
  },

  openGraph: {
    title:
      "【forGoogleデータで導き心で繋ぐ「生成AI×仲人の経験知」の成婚戦略｜大阪梅田ドクターズ結婚相談所",
    description:
      "【個人情報非入力の安全運用】当相談所では、最先端の生成AIを独自のプロンプト戦略でアドバイスの作成に利用。婚活診断を元にAIが提示した選択肢から、あなた自身が納得のいく理想像を選び取ります。現役女性医師とベテラン仲人が軍師として伴走する、新時代のデータ婚活。",
    type: "article",
    locale: "ja_JP",
    siteName: "大阪梅田ドクターズ結婚相談所",
    url: "/ai-strategy",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "【forGoogleデータで導き心で繋ぐ「生成AI×仲人の経験知」の成婚戦略｜大阪梅田ドクターズ結婚相談所",
    description:
      "【個人情報非入力の安全運用】当相談所では、最先端の生成AIを独自のプロンプト戦略でアドバイスの作成に利用。婚活診断を元にAIが提示した選択肢から、あなた自身が納得のいく理想像を選び取ります。現役女性医師とベテラン仲人が軍師として伴走する、新時代のデータ婚活。",
  },
};

export default function AiStrategyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'headline': '【forGoogleデータで導き心で繋ぐ「生成AI×仲人の経験知」の成婚戦略｜大阪梅田ドクターズ結婚相談所',
    'description': '【個人情報非入力の安全運用】当相談所では、最先端の生成AIを独自のプロンプト戦略でアドバイスの作成に利用。婚活診断を元にAIが提示した選択肢から、あなた自身が納得のいく理想像を選び取ります。現役女性医師とベテラン仲人が軍師として伴走する、新時代のデータ婚活。',
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
            最先端AI×仲人の成婚戦略
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            仲人の経験知とAIを掛け合わせる、多角的・客観的な成婚アドバイス
          </h1>

          {/* YELLOW TEXT */}
          <p className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-amber-300 leading-snug border-l-4 border-amber-400 pl-4 sm:pl-6 my-6">
            当相談所では、仲人のこれまでの経験則だけに頼るのではなく、セキュリティ設定を適用しながら、生成AIシステムを、あなたを勝たせるアドバイスや提案に利用しています。
          </p>

          {/* WHITE BACKGROUND AREA */}
          <div className="-mx-8 -mb-8 sm:-mx-12 sm:-mb-12 p-8 sm:p-12 bg-white/95 text-gray-900 rounded-b-3xl mt-8">

            {/* BLACK TEXT */}
            <p className="text-gray-800 text-[20px] leading-relaxed">
              会員様の個人特定情報（氏名や連絡先など）はシステムへ一切入力せず、完全に匿名化された属性データのみを投入。仲人歴20年の経験知に基づいた独自のプロンプト（指示ノウハウ）を組み立てることで、一人の人間のバイアス（偏見）に囚われない、多角的かつ客観的な視点からの成婚戦略を個別具体的に作成します。
            </p>

            <div className="clear-both" />
          </div>
        </section>

        {/* SECTION 2: AI Usage Scenarios */}
        <section className="space-y-8">
          <div className="bg-white/95 rounded-3xl border-2 border-sky-300 p-8 sm:p-10 shadow-lg space-y-4 backdrop-blur-sm">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-black text-sky-950 leading-snug">
              具体的にAIをどのような場面で「作成に利用」するのか？
            </h2>
            <p className="text-[20px] font-bold text-sky-900">
              AIが選択肢を列挙・提示し、カウンセラーと相談しながら選ぶのはあなたです。
            </p>
          </div>

          <div className="bg-white/95 rounded-3xl border-2 border-sky-300 p-8 sm:p-10 shadow-lg space-y-4 backdrop-blur-sm">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-black text-sky-950 leading-snug">
              🔳理想像の整理（AIが選択肢を提示しあなたが選ぶ）：
            </h2>
            <p className="text-[20px]">
              当所オリジナルの婚活診断や個別ヒアリングシートを利用しながら、あなたが本当に求めている「理想の結婚生活」を客観的に整理。AIによる多角的な理想的なお相手像の選択肢を提示し、それをもとに、あなた自身が納得のいく理想像を自ら選び取っていきます。
            </p>
          </div>

          <div className="bg-white/95 rounded-3xl border-2 border-sky-300 p-8 sm:p-10 shadow-lg space-y-4 backdrop-blur-sm">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-black text-sky-950 leading-snug">
              🔳破綻のないスケジュール・交際管理:
            </h2>
            <p className="text-[20px]">
              あなたの仕事や生活の余裕（キャパシティ）から逆算し、「何人に申し込み、何人の受け入れでお見合いを組み、何人を上限として並行仮交際すべきか」という客観的な最適数値をロジカルに算出・提示します。
            </p>
          </div>

          <div className="bg-white/95 rounded-3xl border-2 border-sky-300 p-8 sm:p-10 shadow-lg space-y-4 backdrop-blur-sm">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-black text-sky-950 leading-snug">
              🔳住居・金銭感覚・親族関係の確認リスト:
            </h2>
            <p className="text-[20px]">
              理想の結婚像を現実化するために、お相手に確認すべきシビアな内容（具体的な金銭支払い、生活時間のとり方、親族との距離感など）のチェックリストを、作成します。
            </p>
          </div>

          <div className="bg-white/95 rounded-3xl border-2 border-sky-300 p-8 sm:p-10 shadow-lg space-y-4 backdrop-blur-sm">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-black text-sky-950 leading-snug">
              🔳関係性を深める会話・質問候補の作成:
            </h2>
            <p className="text-[20px]">
              客観的・一般的に好まれる会話選択肢や質問候補を提示します。<br />
              あくまでも客観的な視点のみのため、あなたの性格やお相手との関係を考慮するのは、カウンセラーとの相談となります。
            </p>
          </div>

          <div className="bg-white/95 rounded-3xl border-2 border-sky-300 p-8 sm:p-10 shadow-lg space-y-4 backdrop-blur-sm">
            <p className="text-[20px]">
              データ学習を伴わない安全な運用（※注1）のもと、客観的な提案（AI）と手厚い人間力（カウンセラー）を融合させた、ロジカルな婚活サポートをご提供いたします。
            </p>
          </div>
        </section>

        {/* SECTION 3: Conclusion & Key Takeaways */}
        <section className="bg-amber-50/90 rounded-3xl border-2 p-6 sm:p-10 border-amber-200 shadow-lg space-y-6 backdrop-blur-sm">
          <div className="space-y-3 border-b-2 border-amber-200 pb-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-950 leading-tight">
              【結び】結論：AIを「最高の武器」とし、あなたが「主役」となる婚活
            </h2>
            <p className="text-[20px] font-medium text-amber-900">
              最先端の生成AIシステムが婚活にもたらすものは、あなたの成婚確率を高めるための客観的な「データと提案」に過ぎません。アドバイスはどこまでいっても選択肢の一つであり、すべての答えを決め、自らの未来を開くのはあなた自身です。
            </p>
          </div>

          <p className="text-[20px] text-gray-800">
            大阪梅田ドクターズ結婚相談所では、AIによる選択肢の提示と、人間にしかできないエモーショナルな伴走を完全に融合させています。
          </p>

          <div className="bg-white/90 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <ul className="list-disc list-inside space-y-2 text-[20px]">
              <li><strong>AIができること：</strong> データの論理的整理、多角的な選択肢の網羅的な列挙、安全な環境による文章や質問候補の作成</li>
              <li><strong>人間にしかできないこと：</strong> 本質的な結婚価値観（ゼロから1）の言語化、お相手の心理カラーに踏み込んだ交際戦略の決定、愛着関係の育成。</li>
            </ul>
          </div>

          <p className="text-[20px] text-gray-800 leading-relaxed">
            医療界のリアルを知り尽くした【現役女性医師カウンセラー】と、百戦錬磨の【ベテラン男性仲人】が、AIという強力な武器を使いコピペや丸投げではなく使いこなしながら、あなたという「主役」の横で最高の軍師として最後まで温かく寄り添い続けます。
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

          <div className="bg-white/10 p-6 rounded-2xl border border-white/10 text-slate-300 text-xs sm:text-sm leading-relaxed">
            ※（注1）サポートの作成に利用する生成AIプラットフォーム（大規模言語モデル）の運用にあたっては、公式の商用セキュリティ規約に準拠し、入力データがAIの機械学習やサービス改善に二次利用されない情報保護措置（学習オフ設定等）を講じた上で完全な匿名運用を行っております。会員様の個人識別符号（実名・顔写真・連絡先など）をAIシステムへ入力することは構造上ございません。
          </div>
        </section>

      </div>
    </main>
  );
}