import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "IBJプレミアムパックと標準プランの違い｜大阪梅田ドクターズ結婚相談所",
  description:
    "30秒でわかる！IBJプレミアムパックと標準プランの違い。ハイクラス婚活を有利に進めるための3つのポイントと料金システム、最新AIマッチング機能を解説。",

  keywords: [
    "IBJ プレミアムパック",
    "IBJ 標準プラン 違い",
    "IBJS AIマッチング",
    "大阪梅田 ドクターズ結婚相談所",
    "ハイクラス婚活",
  ],

  alternates: {
    canonical: "/ibj-premium",
  },

  openGraph: {
    title: "IBJプレミアムパックと標準プランの違い｜大阪梅田ドクターズ結婚相談所",
    description:
      "30秒でわかる！IBJプレミアムパックと標準プランの違い。ハイクラス婚活を有利に進めるための3つのポイントと料金システム、最新AIマッチング機能を解説。",
    type: "article",
    locale: "ja_JP",
    siteName: "大阪梅田ドクターズ結婚相談所",
    url: "/ibj-premium",
  },

  twitter: {
    card: "summary_large_image",
    title: "IBJプレミアムパックと標準プランの違い｜大阪梅田ドクターズ結婚相談所",
    description:
      "30秒でわかる！IBJプレミアムパックと標準プランの違い。ハイクラス婚活を有利に進めるための3つのポイントと料金システム、最新AIマッチング機能を解説。",
  },
};

export default function IbjPremiumPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'headline': '30秒でわかる】IBJプレミアムパックと標準プランの違い',
    'description': 'ハイクラス婚活におすすめのIBJプレミアムパックの主な3つの違いと料金システムを解説',
    'publisher': {
      '@type': 'Organization',
      'name': '大阪梅田ドクターズ結婚相談所',
    }
  };

  return (
    <main className="relative min-h-screen text-[20px] leading-relaxed text-gray-800 px-1 sm:px-6 lg:px-8  overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* FULL-PAGE VIEWPORT BACKGROUND IMAGE & OVERLAY */}
      <div className="fixed  inset-0 z-0">
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
            IBJ PREMIUM PACK
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            【30秒でわかる】<br />
            IBJプレミアムパックと標準プランの違い
          </h1>

          {/* YELLOW TEXT */}
          <p className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-amber-300 leading-snug border-l-4 border-amber-400 pl-4 sm:pl-6 my-6">
            ハイクラス婚活におすすめのIBJプレミアムパック
          </p>

          {/* WHITE BACKGROUND AREA */}
          <div className="-mx-8 -mb-8 sm:-mx-12 sm:-mb-12 p-8 sm:p-12 bg-white/95 text-gray-900 rounded-b-3xl mt-8">
       

            {/* BLACK TEXT */}
            <p className="text-gray-800 text-[20px] leading-relaxed">
              大阪梅田ドクターズ結婚相談所はIBJの正規加盟店です。<br />
              IBJのシステム（IBJS）には、無料の「標準プラン」と、月額課金で利用できる「プレミアムパック」があります。<br />
              ハイクラス婚活を有利に進めるための、主な3つの違いを解説します。
            </p>

            <div className="clear-both" />
          </div>
        </section>

        {/* SECTION 2: Key Differences (3 Pillars) */}
        <section className="space-y-8">
          <div className="bg-white/95 rounded-3xl border-2 border-sky-300 p-8 sm:p-10 shadow-lg space-y-4 backdrop-blur-sm">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-black text-sky-950 leading-snug">
              1. 相手の「お気に入り数（人気度）」が見える
            </h2>
            <ul className="list-disc list-inside space-y-2 text-[20px]">
              <li><strong>標準プラン:</strong> 相手のスペックしかわかりません。</li>
              <li><strong>プレミアムパック:</strong> 相手が他の会員から何人お気に入り登録されているか（ライバルの多さ）がリアルタイムでわかります。ライバルの少ない「隠れ優良エリート」をピンポイントで狙えるようになります。</li>
            </ul>
          </div>

          <div className="bg-white/95 rounded-3xl border-2 border-sky-300 p-8 sm:p-10 shadow-lg space-y-4 backdrop-blur-sm">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-black text-sky-950 leading-snug">
              2. 「ログイン順」で並び替えができる
            </h2>
            <ul className="list-disc list-inside space-y-2 text-[20px]">
              <li><strong>標準プラン:</strong> AIのおすすめ順や、登録順などの検索がメインです。</li>
              <li><strong>プレミアムパック:</strong> 「今まさに、現在進行形でアプリを開いている人」の順番に並び替えることができます。数ヶ月ログインしていない「モチベ低下会員」を排除し、アクティブな会員にだけ絞ってアプローチできます。</li>
            </ul>
          </div>

          <div className="bg-white/95 rounded-3xl border-2 border-sky-300 p-8 sm:p-10 shadow-lg space-y-4 backdrop-blur-sm">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-black text-sky-950 leading-snug">
              3. 「共感キーワード・写真」から検索できる
            </h2>
            <ul className="list-disc list-inside space-y-2 text-[20px]">
              <li><strong>標準プラン:</strong> 年齢や年収、住まいなどの「条件」でしか検索できません。</li>
              <li><strong>プレミアムパック:</strong> 相手の趣味や価値観を表す「共感キーワード」や、インスタ風の「みんなのフォト」から相手を検索できます。スペックだけでなく、最初から「共通の趣味がある人」を効率よく探せます。</li>
            </ul>
          </div>
        </section>

        {/* SECTION 3: Summary Callout Box */}
        <section className="bg-rose-50/90 rounded-3xl border-2 border-rose-300 p-8 sm:p-10 shadow-lg space-y-6 backdrop-blur-sm">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-rose-950 tracking-tight leading-tight flex items-center gap-3">
            ❤️違いのまとめ
          </h2>
          <div className="space-y-4 text-gray-800 text-[20px]">
            <p className="bg-white/90 p-6 rounded-2xl border border-rose-200 shadow-sm">
              <strong>標準プラン：</strong>お金はかからないが、データが隠されているため手探りの婚活になる。
            </p>
            <p className="bg-white/90 p-6 rounded-2xl border border-rose-200 shadow-sm font-extrabold text-rose-900">
              <strong>プレミアムパック：</strong>「相手の本気度」や「ライバルの多さ」が丸見えになるため、無駄な申し込みやタイムロスを極限まで減らせる。
            </p>
          </div>
        </section>

        {/* SECTION 4: Pricing System */}
<section className="bg-white/95 rounded-3xl border-2 border-sky-300 p-4 sm:p-10 shadow-lg space-y-6 backdrop-blur-sm">
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-sky-950 leading-snug border-b-2 border-sky-100 pb-4">
    IBJSプレミアムパックの料金システム
  </h2>
  <p className="text-[16px] sm:text-[20px]">
    「IBJSプレミアムパック」の料金システムは、まとめて長期契約するほど1ヶ月あたりの価格が安くなる仕組みになっています。<br />
    アプリ上で自費で決済（App StoreやGoogle Playなどのアプリ内課金）をして利用します。
  </p>

  <div className="bg-sky-50/90 p-3 sm:p-8 rounded-2xl border border-sky-200 space-y-6">
    <h3 className="font-black text-xl sm:text-3xl text-sky-950 flex items-center gap-2">
      <span>💳</span> 料金プラン一覧（税込）
    </h3>

    {/* TABLE CONTAINER */}
    <div className="rounded-xl border border-sky-200 bg-white shadow-sm w-full overflow-hidden">
      <table className="w-full text-left border-collapse text-[14px] xs:text-[15px] sm:text-[20px] table-fixed">
        <thead>
          <tr className="bg-sky-100/70 border-b border-sky-200 text-sky-950">
            <th className="py-3 px-2 sm:px-6 font-bold w-[34%]">プラン期間</th>
            <th className="py-3 px-2 sm:px-6 font-bold text-right w-[33%]">合計金額</th>
            <th className="py-3 px-2 sm:px-6 font-bold text-right w-[33%]">1ヶ月あたり</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-sky-100 text-gray-800">
          <tr className="hover:bg-sky-50/40 transition-colors">
            <td className="py-3.5 px-2 sm:px-6 font-medium">1ヶ月プラン</td>
            <td className="py-3.5 px-2 sm:px-6 text-right">3,500円</td>
            <td className="py-3.5 px-2 sm:px-6 text-right font-bold text-sky-950">3,500円</td>
          </tr>
          <tr className="hover:bg-sky-50/40 transition-colors">
            <td className="py-3.5 px-2 sm:px-6 font-medium">3ヶ月プラン</td>
            <td className="py-3.5 px-2 sm:px-6 text-right">4,800円</td>
            <td className="py-3.5 px-2 sm:px-6 text-right font-bold text-sky-950">1,600円</td>
          </tr>
          <tr className="hover:bg-sky-50/40 transition-colors">
            <td className="py-3.5 px-2 sm:px-6 font-medium">6ヶ月プラン</td>
            <td className="py-3.5 px-2 sm:px-6 text-right">6,300円</td>
            <td className="py-3.5 px-2 sm:px-6 text-right font-bold text-sky-950">1,050円</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* FOOTNOTE DISCLAIMER */}
    <div className="text-xs sm:text-sm text-gray-600 bg-white/90 p-4 rounded-xl border border-sky-100 space-y-1.5 leading-relaxed">
      <p>※上記はWeb決済時の料金です。Apple ID決済やGoogle Play決済の場合、アプリストアの規定により料金が異なる場合がございます。</p>
      <p>※各相談所のプラン内容や時期によって変更になる場合がありますのでご留意下さい。</p>
    </div>
  </div>
</section>

        {/* SECTION 5: AI Matching Feature */}
        <section className="bg-amber-50/90 rounded-3xl border-2 p-6 sm:p-10 border-amber-200 shadow-lg space-y-6 backdrop-blur-sm">
          <div className="space-y-3 border-b-2 border-amber-200 pb-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-950 leading-tight">
              最新のAIマッチング機能で出会いの可能性を広げる
            </h2>
            <p className="text-[20px] font-medium text-amber-900">
              大阪梅田ドクターズ結婚相談所が加盟するIBJシステムでは、有料オプションで最先端の「AIマッチング（AI looks / AI history）」をご利用いただけます。
            </p>
          </div>

          <p className="text-[20px] text-gray-800">
            顔の好みの傾向や、過去の活動履歴（お見合い成立率が高い組み合わせ）をAIが分析し、あなたにぴったりの異性を自動でご紹介する機能です。
          </p>

          <div className="bg-white/90 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <h3 className="font-black text-amber-950 text-xl sm:text-2xl">
              【AIマッチングのご利用料金について】
            </h3>
            <p className="text-[20px]">
              AIマッチング機能は、会員専用アプリ内の有料オプション「IBJSプレミアムパック」に加入することでご利用いただけます。
            </p>
            <ul className="list-disc list-inside space-y-2 text-[20px]">
              <li><strong>1ヶ月プラン：</strong>3,500円 / 月（税込）</li>
              <li><strong>3ヶ月プラン：</strong>4,800円（一括 / 税込） ※月換算：約1,600円</li>
              <li><strong>6ヶ月プラン：</strong>6,300円（一括 / 税込） ※月換算：1,050円</li>
            </ul>
          </div>
        </section>

        {/* SECTION 6: Summary Banner */}
        <section className="bg-gradient-to-br from-sky-950/90 via-slate-900/90 to-blue-950/90 text-white rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8 border border-sky-700/50 backdrop-blur-md">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-sky-200 tracking-tight leading-snug">
            まとめ
          </h2>

          <p className="font-extrabold text-xl sm:text-2xl lg:text-3xl text-center bg-white/10 p-6 rounded-2xl border border-white/20 text-amber-300 shadow-inner">
            【ログイン順表示】 ✕ 【お気に入り数の可視化】 ✕ 【最先端AIマッチング】
          </p>

          <p className="leading-relaxed text-white text-[20px]">
            ハイクラス婚活においては、時間をいかに効率的に使うかが成婚への鍵を握ります。<br />
            IBJプレミアムパックを活用することで、「お相手の本気度」や「ライバルの多さ」をリアルタイムで把握し、無駄なタイムロスを徹底的に削減できます。<br />
            大阪梅田ドクターズ結婚相談所のサポート体制と組み合わせて、最短での理想の成婚を目指しましょう。
          </p>
        </section>

      </div>
    </main>
  );
}