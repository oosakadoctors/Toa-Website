import React from 'react';
import { Heart, Sparkles, Trophy, Flame, UserCheck, MessageCircle, ArrowRight, ArrowLeft, FileText, Compass, Brain, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

/* ============================================================================
   SEO SETTINGS
   - Meta Title: 結婚相談所、担当カウンセラーは1人で本当に十分?2人体制という選択|大阪梅田ドクターズ結婚相談所
   - Meta Description: 結婚相談所が合わない、デメリットが気になる方へ。現役女性医師とベテラン男性仲人、2名体制で婚活をサポートします。
   - Target Keywords: 結婚相談所 合わない / 結婚相談所 デメリット / 担当者 相性 / 婚活 何を相談すればいいか / 大阪 結婚相談所 女性医師
   - Internal Link Candidates:
       1. 「大阪梅田ドクターズ結婚相談所が選ばれる理由」ページ
       2. 「北新地駅徒歩1分の結婚相談所」記事(アクセス情報)
       3. 「メインカウンセラーのメッセージ」ページ
       4. 無料相談ページ(まとめ末尾から)

   EDITORIAL & REVISION NOTES:
   1. Removed negative comparisons to large/competitor agencies for YMYL compliance.
   2. E-E-A-T: Explicitly stated author credit (Dr. Kato) and published date (2026-09-08).
   3. Content duplication avoidance: Focused strictly on "user perspective & peace of mind" 
      without touching core methods described in the "Why Choose Us" page.
   ============================================================================ */

export const metadata: Metadata = {
  title: '結婚相談所、担当カウンセラーは1人で本当に十分?2人体制という選択|大阪梅田ドクターズ結婚相談所',
  description: '結婚相談所が合わない、デメリットが気になる方へ。現役女性医師とベテラン男性仲人、2名体制で婚活をサポートします。',
  openGraph: {
    title: '結婚相談所、担当カウンセラーは1人で本当に十分?2人体制という選択|大阪梅田ドクターズ結婚相談所',
    description: '結婚相談所が合わない、デメリットが気になる方へ。現役女性医師とベテラン男性仲人、2名体制で婚活をサポートします。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '結婚相談所、担当カウンセラーは1人で本当に十分?2人体制という選択|大阪梅田ドクターズ結婚相談所',
    description: '結婚相談所が合わない、デメリットが気になる方へ。現役女性医師とベテラン男性仲人、2名体制で婚活をサポートします。',
  },
};

export default function DualSupportPage() {
  // AEO / LLMO / Schema.org JSON-LD Structured Data
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "結婚相談所、担当カウンセラーは1人で本当に十分?——2人体制という選択",
        "author": {
          "@type": "Person",
          "name": "加藤",
          "jobTitle": "代表カウンセラー(内科認定医)"
        },
        "datePublished": "2026-09-08",
        "publisher": {
          "@type": "Organization",
          "name": "大阪梅田ドクターズ結婚相談所"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "何を相談すればいいか分からない状態でも大丈夫ですか?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "むしろそういう方にこそ向いている体制です。会員様からの相談を待つだけでなく、婚活の節目ごとに今考えるべきことをこちらからお伝えするようにしています。"
            }
          },
          {
            "@type": "Question",
            "name": "カウンセラーと合わないと感じたら、どうすればいいですか?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "二人体制だからこそ、合わないと感じた場合も、もう一方のカウンセラーに相談しやすい環境があります。"
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-sky-100/40 to-blue-50 text-slate-800 font-sans antialiased selection:bg-sky-200 w-full overflow-x-hidden">
      
      {/* Schema.org JSON-LD (Invisible to UI, parsed by search engines) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* ヒーローセクション */}
      <header className="relative bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white py-14 px-4 md:px-6 text-center overflow-hidden w-full border-b border-sky-300 shadow-lg">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_60%)]"></div>
        <div className="max-w-5xl mx-auto relative z-10 w-full space-y-4">
          <p className="bg-white/20 backdrop-blur-md text-sky-100 font-extrabold tracking-widest text-xs md:text-sm uppercase inline-block px-4 py-1 rounded-full shadow-sm">
            OBJECTIVE & LOGICAL MATCHMAKING COUNSELING
          </p>
          <h1 className="text-2xl md:text-4xl font-serif font-bold leading-tight tracking-wider text-white drop-shadow-sm">
            結婚相談所、担当カウンセラーは1人で本当に十分?——2人体制という選択
          </h1>
          
          <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-white inline-block text-left w-full mt-4 shadow-xl">
            <p className="text-slate-700 text-[20px] md:text-base leading-relaxed tracking-wide text-center w-full font-medium">
              <strong>執筆:大阪梅田ドクターズ結婚相談所 代表カウンセラー 加藤(内科認定医)</strong><br />
              <strong>公開日:2026年9月8日</strong>
            </p>
          </div>
        </div>
      </header>

      {/* 導入メッセージ */}
      <section className="py-8 w-full">
        <div className="max-w-5xl mx-auto w-full px-4 md:px-0">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-sky-200 space-y-5 w-full">
            <div className="bg-sky-50 border-2 border-sky-200 p-6 rounded-xl space-y-2">
              <h3 className="font-bold text-sky-900 text-xl md:text-lg tracking-wide">この記事の結論</h3>
              <p className="text-[20px] md:text-base text-slate-800 leading-relaxed tracking-wide">
                結婚相談所選びで後悔しないためには、担当カウンセラーが1人だけの体制よりも、複数の専門家が伴走する体制の方が、相談のしやすさという点で安心感があります。理由は、1人担当制には「相性が悪くても言い出しにくい」「視点が偏りやすい」「何を相談すればいいか分からなくなる」という構造的なリスクがあるためです。大阪梅田ドクターズ結婚相談所では、現役女性医師とベテラン男性仲人が2名1組のチームとなり、この課題を解決しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* セクション 1 */}
      <section className="py-12 bg-sky-100/60 text-slate-800 w-full border-y border-sky-200">
        <div className="max-w-5xl mx-auto w-full space-y-8 px-4 md:px-0">
          <div className="text-center w-full">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-sky-950 tracking-wider w-full">
              結婚相談所で「何を相談すればいいかわからない」のはなぜ?
            </h2>
            <div className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-white p-4 rounded-xl w-full text-center shadow-md mt-4">
              <p className="font-bold text-[20px] md:text-base tracking-wider w-full">
                結論:多くの人が婚活で最初につまずくのは、相談内容そのものが分からないことです。
              </p>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl border-2 border-sky-200 shadow-md space-y-4">
            <p className="text-[20px] md:text-base text-slate-700 leading-relaxed">
              「入会したものの、あとは自分でアプリのように相手を探すだけ。連絡が来るのは事務的な案内だけ」——そんな声を耳にすることがあります。けれど本当に厄介なのはその先です。仮に「いつでも相談してください」と言われても、多くの方は何を、いつ、誰に相談すればいいのか自体が分からない壁にぶつかります。<br /><br />
              これは、勉強でつまずいている人が「どこが分からないか分からない」状態に近いものです。問題の解き方が分からない人は、そもそもどこで質問すればいいのかさえ判断できません。婚活も同じで、
            </p>
            <ul className="list-disc list-inside text-[20px] md:text-base text-slate-700 space-y-2 pl-4">
              <li>プロフィールのどこを直せば良いのか分からない</li>
              <li>お見合いのあと、何が「うまくいったサイン」で何が「危険なサイン」なのか分からない</li>
              <li>今の状況が、婚活における「重要な分岐点」なのかどうかすら分からない</li>
            </ul>
            <p className="text-[20px] md:text-base text-slate-700 leading-relaxed">
              こうした「分からないことが分からない」状態のまま活動を続けると、動きようがなく、相談する言葉すら出てきません。「放置されている」と感じる背景には、実はこの構造的な壁が隠れていることが少なくありません。
            </p>
          </div>
        </div>
      </section>

      {/* セクション 2 */}
      <section className="py-12 bg-white w-full">
        <div className="max-w-5xl mx-auto w-full px-4 md:px-0 space-y-8">
          <div className="text-center w-full">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 tracking-wider w-full">
              担当者が1人だけの体制に潜む、見えにくいリスク
            </h2>
            <div className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-white p-4 rounded-xl w-full text-center shadow-md mt-4">
              <p className="font-bold text-[20px] md:text-base tracking-wider w-full">
                結論:1人のカウンセラーにすべてを頼る体制には、いくつかの見えにくいリスクがあります。
              </p>
            </div>
          </div>

          <div className="bg-sky-50/50 p-6 md:p-8 rounded-2xl border-2 border-sky-200 shadow-sm space-y-6">
            <p className="text-[20px] md:text-base text-slate-700 leading-relaxed">
              結婚相談所を選ぶ際、担当カウンセラーが1人につく体制は一般的です。効率よくサポートできる仕組みではありますが、会員側の視点で見ると、次のようなリスクが潜んでいます。「結婚相談所 デメリット」と検索すると必ずと言っていいほど出てくるのが、この担当者との相性の問題です。
            </p>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl border border-sky-100 shadow-xs space-y-2">
                <h3 className="font-bold text-sky-900 text-xl md:text-lg flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-sky-500 shrink-0" />
                  ① 視点が一方向に偏りやすい
                </h3>
                <p className="text-[20px] md:text-base text-slate-700 leading-relaxed">
                  担当が1人だけだと、その人の経験・価値観・恋愛観がそのままアドバイスに反映されます。良くも悪くも「その人の色」が強く出るため、自分に合わない価値観を無意識に押し付けられてしまうケースもあります。
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-sky-100 shadow-xs space-y-2">
                <h3 className="font-bold text-sky-900 text-xl md:text-lg flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-sky-500 shrink-0" />
                  ② 相性が悪くても言い出しにくい
                </h3>
                <p className="text-[20px] md:text-base text-slate-700 leading-relaxed">
                  担当カウンセラーとの相性が合わないと感じても、「担当を変えてほしい」とはなかなか言い出せないものです。結果として、モヤモヤを抱えたまま活動を続けてしまう会員様も少なくありません。「結婚相談所 合わない」と感じたまま活動を続けることは、時間もお金も無駄にしてしまう大きな要因です。
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-sky-100 shadow-xs space-y-2">
                <h3 className="font-bold text-sky-900 text-xl md:text-lg flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-sky-500 shrink-0" />
                  ③ 異性の本音が担当を通してしか聞こえてこない
                </h3>
                <p className="text-[20px] md:text-base text-slate-700 leading-relaxed">
                  女性会員が男性の本音を知りたくても、担当が女性カウンセラーであれば、男性の実感を伴った視点は得にくいのが実情です。逆もまた同じです。
                </p>
              </div>
            </div>

            <p className="text-[20px] md:text-base text-slate-700 leading-relaxed">
              こうした状況の中では、会員が「何を相談すればいいか分からない」まま取り残されてしまうのも、ある意味自然な結果と言えます。
            </p>
          </div>
        </div>
      </section>

      {/* 比較テーブル */}
      <section className="py-12 bg-sky-100/60 w-full border-y border-sky-200">
        <div className="max-w-5xl mx-auto w-full px-4 md:px-0 space-y-6">
          <div className="text-center w-full">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-sky-950 tracking-wider w-full">
              【比較】1人担当制と二人体制、5つの違い
            </h2>
            <p className="text-[20px] md:text-base text-slate-700 mt-2 font-medium">
              結論:相談相手が2人いることで、1人担当制の弱点はほぼ解消されます。
            </p>
          </div>

          <div className="sm:hidden flex items-center justify-center my-2">
  <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full  bg-blue-500 text-white font-bold text-sm shadow-[0_0_12px_rgba(244,63,94,0.4)] animate-pulse">
    <ArrowLeft className="w-4 h-4 animate-[bounce_1.5s_infinite] -rotate-0" />
    <span>スライドします</span>
    <ArrowRight className="w-4 h-4 animate-[bounce_1.5s_infinite]" />
  </p>
</div>

          <div className="overflow-x-auto bg-white rounded-2xl shadow-md border-2 border-sky-200">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-gradient-to-r from-sky-600 to-blue-600 text-white">
                  <th className="p-4 border-b border-sky-500 font-bold text-[20px] md:text-base">比較項目</th>
                  <th className="p-4 border-b border-sky-500 font-bold text-[20px] md:text-base">一般的な1人担当制</th>
                  <th className="p-4 border-b border-sky-500 font-bold text-[20px] md:text-base">大阪梅田ドクターズ結婚相談所(二人体制)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sky-100 text-[20px] md:text-base text-slate-700">
                <tr className="hover:bg-sky-50/50">
                  <td className="p-4 font-bold text-sky-950">相談できる相手</td>
                  <td className="p-4">担当カウンセラー1人のみ</td>
                  <td className="p-4 bg-sky-50/80 font-semibold text-sky-900">現役女性医師+ベテラン男性仲人の2人</td>
                </tr>
                <tr className="hover:bg-sky-50/50">
                  <td className="p-4 font-bold text-sky-950">異性の本音</td>
                  <td className="p-4">担当の性別に依存</td>
                  <td className="p-4 bg-sky-50/80 font-semibold text-sky-900">同性カウンセラーに直接相談可能</td>
                </tr>
                <tr className="hover:bg-sky-50/50">
                  <td className="p-4 font-bold text-sky-950">相性が合わない時</td>
                  <td className="p-4">変更を言い出しにくい</td>
                  <td className="p-4 bg-sky-50/80 font-semibold text-sky-900">話しやすい方を自然に選べる</td>
                </tr>
                <tr className="hover:bg-sky-50/50">
                  <td className="p-4 font-bold text-sky-950">サポートの継続性</td>
                  <td className="p-4">担当変更時に引き継ぎロスの可能性</td>
                  <td className="p-4 bg-sky-50/80 font-semibold text-sky-900">少人数体制で一貫して担当</td>
                </tr>
                <tr className="hover:bg-sky-50/50">
                  <td className="p-4 font-bold text-sky-950">何を相談すべきか</td>
                  <td className="p-4">会員任せになりがち</td>
                  <td className="p-4 bg-sky-50/80 font-semibold text-sky-900">分岐点をこちらから可視化して提示</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 分岐点 & 二人だから */}
      <section className="py-12 bg-white w-full">
        <div className="max-w-5xl mx-auto w-full px-4 md:px-0 space-y-8">
          <div className="bg-gradient-to-r from-sky-50 to-blue-50 border-2 border-sky-200 p-6 md:p-8 rounded-2xl shadow-sm space-y-4">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-sky-950 border-b border-sky-200 pb-2">
              相談を「待たない」。分岐点はこちらから伝えます
            </h2>
            <p className="text-sky-900 font-bold text-[20px] md:text-base">
              結論:相談を待つのではなく、こちらから婚活の分岐点を伝えることで、「何を相談すればいいか分からない」問題を解決しています。
            </p>
            <p className="text-[20px] md:text-base text-slate-700 leading-relaxed">
              大阪梅田ドクターズ結婚相談所では、会員様からの相談を待つだけでなく、婚活の節目ごとに、今どこにいて、次に何を考えるべきかをこちらから明確にお伝えすることを大切にしています。<br /><br />
              「今はプロフィールを見直すタイミングです」「このお見合い後の返信は、婚活における重要な分岐点です」というように、判断のポイントそのものを可視化してお伝えすることで、会員様は最初の壁でつまずかずに済みます。
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 md:p-8 rounded-2xl shadow-sm space-y-4">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-indigo-950 border-b border-blue-200 pb-2">
              二人だから、正解を押し付けない婚活ができる
            </h2>
            <p className="text-indigo-900 font-bold text-[20px] md:text-base">
              結論:二人体制は、一方的な指導ではなく、選択肢を提示する伴走型のサポートです。
            </p>
            <p className="text-[20px] md:text-base text-slate-700 leading-relaxed">
              大阪梅田ドクターズ結婚相談所では、内科認定医の資格を持つ現役女性医師と、経験豊富なベテラン男性仲人が、それぞれの立場から会員様をサポートしています。<br /><br />
              女性会員様は女性ならではの悩みを、男性会員様は男性ならではの悩みを、同性のカウンセラーに率直に相談できます。さらに、一方の視点だけでなく、性別も専門性も異なる二人の意見を聞けることで、「自分では気づかなかった思い込み」に気づけたという声をいただいています。<br /><br />
              「一人のカウンセラーの言うことがすべて」ではありません。二人のプロが並走しながら見せてくれる複数の視点を材料に、最後は自分自身で納得して選び取れる——それが、私たちが大切にしている考え方です。
            </p>
          </div>
        </div>
      </section>

      {/* サポートの流れ */}
      <section className="py-12 bg-sky-100/60 w-full border-y border-sky-200">
        <div className="max-w-5xl mx-auto w-full px-4 md:px-0 space-y-6">
          <div className="text-center w-full">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-sky-950 tracking-wider w-full">
              入会から成婚まで、実際のサポートの流れ
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 w-full">
            <div className="bg-white p-6 border-2 border-sky-200 rounded-2xl shadow-md flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-400 to-blue-500 flex items-center justify-center text-white text-lg font-extrabold shrink-0 shadow-md">1</div>
              <div>
                <h3 className="font-bold text-sky-900 text-lg mb-1">入会時のカウンセリング</h3>
                <p className="text-[20px] md:text-base text-slate-700">お一人おひとりの状況や希望を丁寧にヒアリング</p>
              </div>
            </div>

            <div className="bg-white p-6 border-2 border-sky-200 rounded-2xl shadow-md flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-400 to-blue-500 flex items-center justify-center text-white text-lg font-extrabold shrink-0 shadow-md">2</div>
              <div>
                <h3 className="font-bold text-sky-900 text-lg mb-1">プロフィール作成のサポート</h3>
                <p className="text-[20px] md:text-base text-slate-700">第三者の客観的な視点でのアドバイス</p>
              </div>
            </div>

            <div className="bg-white p-6 border-2 border-sky-200 rounded-2xl shadow-md flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-400 to-blue-500 flex items-center justify-center text-white text-lg font-extrabold shrink-0 shadow-md">3</div>
              <div>
                <h3 className="font-bold text-sky-900 text-lg mb-1">お見合いのセッティング</h3>
                <p className="text-[20px] md:text-base text-slate-700">仲人としての豊富な経験を活かしたマッチング</p>
              </div>
            </div>

            <div className="bg-white p-6 border-2 border-sky-200 rounded-2xl shadow-md flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-400 to-blue-500 flex items-center justify-center text-white text-lg font-extrabold shrink-0 shadow-md">4</div>
              <div>
                <h3 className="font-bold text-sky-900 text-lg mb-1">お見合い後・交際中のフォロー</h3>
                <p className="text-[20px] md:text-base text-slate-700">同性のカウンセラーに率直に相談できる体制</p>
              </div>
            </div>
          </div>

          <p className="text-[20px] md:text-base text-slate-700 text-center font-medium pt-2">
            それぞれの段階で、必要に応じて二人のカウンセラーが連携しながらサポートするため、「誰に相談すればいいかわからない」という状態にはなりません。
          </p>
        </div>
      </section>

      {/* リンク & FAQ & まとめ */}
      <section className="py-12 bg-white w-full">
        <div className="max-w-5xl mx-auto w-full px-4 md:px-0 space-y-10">
          
          {/* 選ばれる理由 */}
          <div className="bg-sky-50 border border-sky-200 p-6 rounded-2xl shadow-xs space-y-2">
            <h2 className="text-xl font-bold text-sky-950">「選ばれる理由」をもっと詳しく知りたい方へ</h2>
            <p className="text-[20px] md:text-base text-slate-700 leading-relaxed">
              当相談所がなぜこの体制にたどり着いたのか、入会面談でどのようなアプローチを行っているかなど、より詳しい内容は「大阪梅田ドクターズ結婚相談所が選ばれる理由」のページでご紹介しています。婚活の進め方をより深く知りたい方は、あわせてご覧ください。
            </p>
          </div>

          {/* よくあるご質問 */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 text-center">よくあるご質問</h2>
            <div className="space-y-4">
              <div className="bg-white border-2 border-sky-100 p-6 rounded-2xl shadow-xs space-y-2">
                <p className="font-bold text-sky-900 text-lg">Q. 何を相談すればいいか分からない状態でも大丈夫ですか?</p>
                <p className="text-[20px] md:text-base text-slate-700 leading-relaxed">A. むしろそういう方にこそ向いている体制です。会員様からの相談を待つだけでなく、婚活の節目ごとに「今考えるべきこと」をこちらからお伝えするようにしています。何を聞けばいいか分からない段階からでも安心してご利用いただけます。</p>
              </div>

              <div className="bg-white border-2 border-sky-100 p-6 rounded-2xl shadow-xs space-y-2">
                <p className="font-bold text-sky-900 text-lg">Q. カウンセラーと合わないと感じたら、どうすればいいですか?</p>
                <p className="text-[20px] md:text-base text-slate-700 leading-relaxed">A. 二人体制だからこそ、「合わない」と感じた場合も、もう一方のカウンセラーに相談しやすい環境があります。1人しか相談相手がいない場合に起きがちな「言い出せずに我慢する」という状況を防げます。</p>
              </div>

              <div className="bg-white border-2 border-sky-100 p-6 rounded-2xl shadow-xs space-y-2">
                <p className="font-bold text-sky-900 text-lg">Q. 男性ですが、女性医師のカウンセラーにも相談できますか?</p>
                <p className="text-[20px] md:text-base text-slate-700 leading-relaxed">A. はい、可能です。主にベテラン仲人が担当しつつ、必要に応じて女性医師カウンセラーの視点からもアドバイスをお伝えしています。</p>
              </div>

              <div className="bg-white border-2 border-sky-100 p-6 rounded-2xl shadow-xs space-y-2">
                <p className="font-bold text-sky-900 text-lg">Q. 二人体制だと、意見が食い違うことはありませんか?</p>
                <p className="text-[20px] md:text-base text-slate-700 leading-relaxed">A. 二人のカウンセラーは日頃から密に連携しており、大きな方針で食い違うことはありません。異なる視点からのアドバイスを受けられることが、むしろ会員様にとってのメリットになっています。</p>
              </div>
            </div>
          </div>

          {/* まとめ */}
          <div className="bg-white p-6 md:p-8 border-2 border-sky-200 md:rounded-2xl space-y-4 shadow-md">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-sky-950">まとめ:結婚相談所選びで後悔しないために</h2>
            <p className="text-[20px] md:text-base text-slate-700 leading-relaxed">
              婚活は、思っている以上に孤独を感じやすい活動です。誰にも本音を言えないまま、一人で結論を出し続けるのは、想像以上に消耗します。<br /><br />
              大阪梅田ドクターズ結婚相談所では、現役女性医師とベテラン男性仲人という二人体制で、会員様が一人で抱え込まずに婚活を進められる環境を整えています。<br /><br />
              当相談所は大阪駅前第2ビル内、北新地駅徒歩1分の立地にあります。アクセスの詳細は「北新地駅徒歩1分の結婚相談所」の記事もあわせてご覧ください。<br /><br />
              大阪で婚活・結婚相談所をお探しの方は、まずは無料相談から、二人体制のサポートを体感してみてください。
            </p>
          </div>

        </div>
      </section>

      {/* LINE CTA セクション */}
      <section className="py-16 bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-700 text-white text-center px-4 w-full shadow-lg">
        <div className="max-w-5xl mx-auto space-y-6 w-full">
          <span className="bg-amber-300 text-slate-900 font-extrabold text-xs px-4 py-1.5 rounded-full tracking-widest inline-block uppercase shadow-md">FREE CONSULTATION</span>
          <h2 className="text-xl md:text-3xl font-serif font-bold tracking-wider text-white w-full drop-shadow-sm">
            まずはご自身の「婚活未来図」を、私達と一緒に描いてみませんか？
          </h2>
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
  );
}