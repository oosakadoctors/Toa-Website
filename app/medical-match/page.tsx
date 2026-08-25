import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "【現役女性医師カウンセラー】✕【IBJ公式・AIマッチング＆お見合い練習】｜大阪梅田ドクターズ結婚相談所",
  description:
    "大阪梅田ドクターズ結婚相談所は、日本最大級のIBJ正規加盟店です。入会後に利用できる、連盟公式の「AIマッチング」や音声対話による「AIお見合い練習」をフル活用。【現役女性医師カウンセラー】の知性と泥臭いマンツーマン伴走で、成婚確率を最大化します。",

  keywords: [
    "IBJ AIマッチング",
    "AIお見合い練習",
    "現役女性医師 カウンセラー",
    "大阪梅田 ドクターズ結婚相談所",
    "ハイクラス婚活",
    "医師 婚活",
  ],

  alternates: {
    canonical: "/doctors-match",
  },

  openGraph: {
    title: "【現役女性医師カウンセラー】✕【IBJ公式・AIマッチング＆お見合い練習】｜大阪梅田ドクターズ結婚相談所",
    description:
      "大阪梅田ドクターズ結婚相談所は、日本最大級のIBJ正規加盟店です。入会後に利用できる、連盟公式の「AIマッチング」や音声対話による「AIお見合い練習」をフル活用。【現役女性医師カウンセラー】の知性と泥臭いマンツーマン伴走で、成婚確率を最大化します。",
    type: "article",
    locale: "ja_JP",
    siteName: "大阪梅田ドクターズ結婚相談所",
    url: "/doctors-match",
  },

  twitter: {
    card: "summary_large_image",
    title: "【現役女性医師カウンセラー】✕【IBJ公式・AIマッチング＆お見合い練習】｜大阪梅田ドクターズ結婚相談所",
    description:
      "大阪梅田ドクターズ結婚相談所は、日本最大級のIBJ正規加盟店です。入会後に利用できる、連盟公式の「AIマッチング」や音声対話による「AIお見合い練習」をフル活用。【現役女性医師カウンセラー】の知性と泥臭いマンツーマン伴走で、成婚確率を最大化します。",
  },
};

export default function DoctorsMatchPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'headline': '【現役女性医師カウンセラー】✕【IBJ公式・AIマッチング＆お見合い練習】',
    'description': '業界最大手の最新テクノロジーをあなたの最強の武器にする。最先端AIシステム✕現役女性医師の掛け算サポート。',
    'publisher': {
      '@type': 'Organization',
      'name': '大阪梅田ドクターズ結婚相談所',
    }
  };

  return (
    <main className="relative min-h-screen text-[20px] leading-relaxed text-gray-800 px-0 sm:px-6 lg:px-8 pb-8 pt-0 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* FULL-PAGE REPEATING BACKGROUND IMAGE & OVERLAY */}
      <div 
        className="fixed inset-0 z-0 bg-repeat bg-auto"
        style={{ backgroundImage: "url('/cyber.png')" }}
      >
        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]" />
      </div>

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 mx-auto max-w-4xl space-y-12">

        {/* HERO SECTION */}
        <section className="bg-gradient-to-br from-slate-900/90 via-sky-950/90 to-blue-900/90 text-white rounded-b-3xl p-8 sm:p-12 shadow-2xl space-y-8 border-b border-x border-sky-700/50 backdrop-blur-md overflow-hidden">
          <div className="inline-block bg-sky-500/20 text-sky-200 border border-sky-400/30 px-4 py-1.5 rounded-full text-lg font-bold tracking-wider text-[15px]">
            DOCTORS MATCH
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            【現役女性医師カウンセラー】<br />
            ✕<br />
            【IBJ公式・AIマッチング＆お見合い練習】
          </h1>

          {/* YELLOW TEXT */}
          <p className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-amber-300 leading-snug border-l-4 border-amber-400 pl-4 sm:pl-6 my-6">
            大阪梅田ドクターズ結婚相談所で、業界最大手の最新テクノロジーをあなたの最強の武器にする。
          </p>

          {/* WHITE BACKGROUND AREA */}
          <div className="-mx-8 -mb-8 sm:-mx-12 sm:-mb-12 p-8 sm:p-12 bg-white/95 text-gray-900 rounded-b-3xl mt-8">
            {/* INTRO TEXT */}
            <p className="text-gray-800 text-[20px] leading-relaxed">
              大阪梅田ドクターズ結婚相談所は、日本最大級の結婚相談所ネットワーク「IBJ」の正規加盟店です。<br /><br />
              大阪梅田ドクターズ結婚相談所に入会いただくことで、IBJ連盟が誇る特許取得の公式システム「AIマッチング」と、スマホで本番さながらの模擬対話ができる最新機能「AIお見合い練習（AIお見合いリハーサル）」のすべてを、あなたの実際の活動にフルに組み込んでご利用いただけます。<br />
              <span className="text-sm text-gray-500 block mt-2">
                （※各種AI機能は、会員様がIBJアプリ内で公式オプションに直接課金することで解放・ご利用が可能です）
              </span>
            </p>

            <div className="mt-6 p-6 rounded-2xl bg-sky-50/80 border border-sky-200 text-sky-950 font-bold text-[20px]">
              医療界のリアルを知り尽くした【現役女性医師カウンセラー】の知性と経験に、IBJが誇る最高峰のAIデータ分析を掛け合わせ、あなたの魅力を底上げして完全伴走します。
            </div>

            <div className="clear-both" />
          </div>
        </section>

        {/* SECTION 2: AI OMIAMAI REHEARSAL */}
        <section className="bg-white/95 rounded-3xl border-2 border-sky-300 p-8 sm:p-10 shadow-lg space-y-6 backdrop-blur-sm">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-sky-950 leading-snug border-b-2 border-sky-100 pb-4">
            🔵 自宅にいながら本番さながらのシミュレーションができる「AIお見合いリハーサル」
          </h2>

          <p className="text-[20px] leading-relaxed">
            「せっかく素敵な方とお見合いが決まったのに、緊張して上手く話せるか不安」<br />
            「ファーストインプレッションで知性と清潔感を持たれたい」
          </p>

          <p className="text-[20px] leading-relaxed">
            このようなお見合い前の一歩を強力に後押しするのが、業界初となる公式機能「AIお見合いリハーサル」です。<br />
            <span className="text-sm text-gray-500">
              （※本機能はIBJアプリ内での公式オプション課金にてご利用いただけます）
            </span>
          </p>

          <p className="text-[20px] leading-relaxed">
            スマートフォンのマイクを使用し、AIを相手に最大15分間のリアルな音声対話形式でお見合いのシミュレーションが行えます。
          </p>

          {/* TWO PILLARS GRID */}
          <div className="grid gap-6 sm:grid-cols-2 mt-6">
            <div className="bg-sky-50/70 p-6 rounded-2xl border border-sky-200 space-y-3">
              <h3 className="font-bold text-xl sm:text-2xl text-sky-950 flex items-center gap-2">
                <span>🗣️</span> 本番を想定した会話のキャッチボール
              </h3>
              <p className="text-[18px] sm:text-[20px] leading-relaxed">
                初対面の挨拶から始まり、お仕事、趣味、休日の過ごし方など、お見合いで頻出するテーマに沿って実践的な受け答えを自分の声で練習できます。
              </p>
            </div>

            <div className="bg-sky-50/70 p-6 rounded-2xl border border-sky-200 space-y-3">
              <h3 className="font-bold text-xl sm:text-2xl text-sky-950 flex items-center gap-2">
                <span>📊</span> 客観的なデータフィードバック
              </h3>
              <p className="text-[18px] sm:text-[20px] leading-relaxed">
                会話終了後には、AIがあなたの話し方や質問のバランスなどを多角的に分析。自分ひとりでは気付きにくい「会話の広げ方」や「お相手への配慮」の具体的な改善ポイントを振り返ることができます。
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: AI SYSTEM X FEMALE DOCTOR MULTIPLICATION */}
        <section className="bg-white/95 rounded-3xl border-2 border-amber-300 p-8 sm:p-10 shadow-lg space-y-6 backdrop-blur-sm">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-amber-950 leading-snug border-b-2 border-amber-100 pb-4">
            🔵 最先端AIシステム × 現役女性医師の掛け算で手厚くサポート
          </h2>

          <p className="text-[20px] leading-relaxed">
            IBJが提供するAIシステムは非常に画期的ですが、当相談所では「AI任せ・システム任せの婚活」は一切いたしません。<br />
            システムが導き出した高精度なマッチングデータや、AIお見合いリハーサルでのフィードバック結果を「どう実際の活動に活かすか」を、私たちプロの仲人があなたと一緒に徹底分析します。
          </p>

          <p className="text-[20px] leading-relaxed">
            特に医師をはじめとするエグゼクティブ層の婚活においては、お相手に求めるマナーや、医局・当直といった独特のライフスタイル、ご実家の環境への深い理解が不可欠です。
          </p>

          <div className="bg-amber-50/80 p-6 sm:p-8 rounded-2xl border border-amber-200 space-y-4">
            <p className="text-[20px] leading-relaxed font-bold text-amber-950">
              最先端のAIツールでお相手を賢く効率よく見つけ出し、AI練習でコミュニケーションの感覚を掴み、その客観データをベースに、【現役女性医師カウンセラー】ならではの冷徹なデータ分析と、ベテラン仲人の暖かい伴走で、あなた専用の具体的な戦術をたてます。
            </p>
          </div>
        </section>

        {/* SECTION 4: CALLOUT BRANDING BOX */}
        <section className="bg-rose-50/90 rounded-3xl border-2 border-rose-300 p-8 sm:p-10 shadow-lg space-y-6 backdrop-blur-sm text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-rose-950 tracking-tight leading-tight">
            【AIシステムとハンドメイドの融合】
          </h2>
          
          <div className="w-full max-w-3xl mx-auto rounded-2xl border border-rose-200/70 bg-white/90 backdrop-blur-md p-6 sm:p-12 shadow-sm text-center">
            <p className="text-xl sm:text-2xl font-black text-rose-900 leading-relaxed">
              この「AIシステムとハンドメイドの融合」に徹底してこだわることこそが、大阪梅田ドクターズ結婚相談所の強みです。
            </p>
          </div>
        </section>

        {/* SECTION 5: SUMMARY BANNER */}
        <section className="bg-gradient-to-br from-sky-950/90 via-slate-900/90 to-blue-950/90 text-white rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8 border border-sky-700/50 backdrop-blur-md">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-sky-200 tracking-tight leading-snug">
            🔵 まとめ
          </h2>

          <p className="font-extrabold text-xl sm:text-2xl lg:text-3xl text-center bg-white/10 p-6 rounded-2xl border border-white/20 text-amber-300 shadow-inner">
            【最先端AIデータ】 ✕ 【音声対話お見合い練習】 ✕ 【現役女性医師伴走】
          </p>

          <p className="leading-relaxed text-white text-[20px]">
            最先端のAIテクノロジーで無駄な時間を徹底的に削減し、現役女性医師カウンセラーによる論理的で温かみのある伴走で、あなたの成婚確率を最大化します。<br />
            まずは無料カウンセリングで、あなた専用の婚活戦術をご提案いたします。
          </p>
        </section>

      </div>
    </main>
  );
}