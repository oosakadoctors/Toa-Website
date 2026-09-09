import { Metadata } from "next";
import Link from "next/link";
import { 
  Sparkles, 
  MapPin, 
  Coins, 
  HeartHandshake, 
  Compass, 
  Crown, 
  HelpCircle, 
  Check, 
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "結婚相談所の選び方|大阪・梅田で失敗しない5つの比較ポイント|大阪梅田ドクターズ結婚相談所",
  description:
    "大阪・梅田で結婚相談所選びに迷っていませんか。地域密着度・料金・サポート・価値観・会員層の5つの軸で比較する選び方を、IBJ加盟の現役女性医師が解説します。",

  keywords: [
    "結婚相談所 選び方",
    "大阪 結婚相談所 比較",
    "梅田 結婚相談所",
    "結婚相談所 失敗しない",
    "仲人型 データマッチング型 違い",
    "IBJ加盟店 大阪",
    "医師監修 結婚相談所",
  ],

  authors: [
    {
      name: "加藤（代表カウンセラー・内科認定医・現役女性医師）",
    },
  ],

  alternates: {
    canonical: "/how-to-choose",
  },

  openGraph: {
    title: "結婚相談所の選び方|大阪・梅田で失敗しない5つの比較ポイント|大阪梅田ドクターズ結婚相談所",
    description:
      "大阪・梅田で結婚相談所選びに迷っていませんか。地域密着度・料金・サポート・価値観・会員層の5つの軸で比較する選び方を解説。",
    type: "article",
    locale: "ja_JP",
    siteName: "大阪梅田ドクターズ結婚相談所",
    url: "/how-to-choose",
  },

  twitter: {
    card: "summary_large_image",
    title: "結婚相談所の選び方|大阪・梅田で失敗しない5つの比較ポイント|大阪梅田ドクターズ結婚相談所",
    description:
      "地域密着度・料金・サポート・価値観・会員層の5つの軸で比較する失敗しない選び方を現役女性医師が解説。",
  },
};

export default function HowToChoosePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "結婚相談所を選ぶとき、何を基準にすればいいですか?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "地域密着度、コストパフォーマンス、サポートの手厚さ、価値観の一致、自分のステイタスとの相性の5つの軸から、自分が今何を求めているかを考えることが基準になります。"
        }
      },
      {
        "@type": "Question",
        "name": "どのタイプの結婚相談所が一番いいですか?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "一番良いタイプというものはありません。婚活に何を求めているかによって、合う結婚相談所のタイプは変わります。"
        }
      },
      {
        "@type": "Question",
        "name": "結婚相談所にはどんな種類がありますか?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "主に、専任カウンセラーが伴走する仲人型、AIやシステムで相性診断するデータマッチング型、来店不要のオンライン特化型、審査制の少人数・専門特化型の4つに分けられます。"
        }
      },
      {
        "@type": "Question",
        "name": "大阪梅田ドクターズ結婚相談所はどんな人に向いていますか?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "条件だけでなく価値観に寄り添ったサポートを求める方、少人数制で一人ひとりに向き合ってほしい方、男女それぞれの視点からアドバイスを受けたい方に向いています。"
        }
      },
      {
        "@type": "Question",
        "name": "会員の身元は確認されていますか?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "独身証明書・住民票・学歴証明書・収入証明書(男性必須)の提出を義務付けており、身元が確実で本気で結婚したい方だけが活動しています。"
        }
      },
      {
        "@type": "Question",
        "name": "結婚相談所にサクラはいませんか?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "サクラは一切在籍していません。身元が確実で、本気で結婚したい方だけが活動しているため、安心してパートナー探しに集中していただけます。"
        }
      },
      {
        "@type": "Question",
        "name": "マッチングアプリと結婚相談所は何が違いますか?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "最も大きな違いは、お相手の結婚に対する本気度とプロのサポートの有無です。結婚相談所では全員が結婚を前提に活動しているため、出会いから成婚までのスピードが早いのが特徴です。"
        }
      },
      {
        "@type": "Question",
        "name": "結婚相談所を選ぶとき、IBJ加盟は確認すべきですか?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、確認をおすすめします。IBJ(日本結婚相談所連盟)などの業界団体への加盟は、身元確認や運営の信頼性の目安になります。"
        }
      }
    ]
  };

  const itemListAxis = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "結婚相談所を選ぶ5つの軸",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "地域密着型の結婚相談所", "description": "地元の会員層やイベント、通いやすさに強みを持つタイプ" },
      { "@type": "ListItem", "position": 2, "name": "コストパフォーマンスを重視した結婚相談所", "description": "登録料・月会費・成婚料などの費用体系が明確でシンプルなタイプ" },
      { "@type": "ListItem", "position": 3, "name": "サポートの手厚い結婚相談所", "description": "専任カウンセラーがプロフィール作成からお見合い後まで伴走するタイプ" },
      { "@type": "ListItem", "position": 4, "name": "価値観の一致を大切にする結婚相談所", "description": "条件だけでなく結婚生活への価値観を重視するタイプ" },
      { "@type": "ListItem", "position": 5, "name": "ハイクラス・ハイスペックな会員層の結婚相談所", "description": "年代・職業・ライフスタイルが自分に近い会員層のタイプ" }
    ]
  };

  const itemListTypes = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "結婚相談所の運営方式による4つのタイプ",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "大手仲人型の結婚相談所", "description": "専任カウンセラーが紹介からフォローまで担当するタイプ" },
      { "@type": "ListItem", "position": 2, "name": "データマッチング型の結婚相談所", "description": "AIやシステムによる相性診断で候補を提示するタイプ" },
      { "@type": "ListItem", "position": 3, "name": "オンライン特化型の結婚相談所", "description": "来店不要で費用を抑えて効率的に活動できるタイプ" },
      { "@type": "ListItem", "position": 4, "name": "少人数制・専門特化型の結婚相談所", "description": "入会に審査や人数制限を設け特定の会員層に特化するタイプ" }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "結婚相談所の選び方|大阪・梅田で失敗しない5つの比較ポイント",
    "mainEntityOfPage": "https://大阪梅田ドクターズ結婚相談所.jp/how-to-choose",
    "author": {
      "@type": "Person",
      "name": "加藤",
      "jobTitle": "代表カウンセラー(内科認定医・現役女性医師)"
    },
    "datePublished": "2026-09-09",
    "publisher": {
      "@type": "Organization",
      "name": "大阪梅田ドクターズ結婚相談所"
    }
  };

  return (
    <main className="bg-[#faf8f5] min-h-screen text-[20px] leading-relaxed text-gray-800 py-4 px-2 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListAxis) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListTypes) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="mx-auto max-w-4xl space-y-10">

        {/* Header Ribbon / Banner */}
        <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-2.5 text-center text-white font-bold rounded-t-2xl shadow-sm text-[20px]">
          <span className="inline-flex items-center gap-2">
            <Sparkles className="w-5 h-5 shrink-0" />
            IBJ加盟 現役女性医師が解説する大人の婚活比較ガイド
          </span>
        </div>

        {/* Hero / Header Section */}
        <section className="rounded-b-2xl bg-white border border-rose-200 p-6 sm:p-10 shadow-sm space-y-6 -mt-10 pt-10">
          <h1 
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-snug tracking-tight"
            style={{ wordBreak: 'break-all' }}
          >
            結婚相談所の選び方｜<br className="hidden sm:inline" />
            大阪・梅田で失敗しない5つの比較ポイント
          </h1>

          <div className="text-base sm:text-lg text-gray-600 font-medium flex flex-wrap gap-x-4 gap-y-1">
            <span>執筆: 代表カウンセラー 加藤（内科認定医・現役女性医師）</span>
            <span>公開日: 2026年9月9日</span>
          </div>

          <div className="bg-rose-50 border-l-4 border-rose-500 p-4 sm:p-5 rounded-r-xl space-y-2">
            <h2 
              className="text-xl sm:text-2xl font-bold text-rose-600 leading-snug"
              style={{ wordBreak: 'break-all' }}
            >
              この記事の要点（1分でわかる要約）
            </h2>
            <p className="text-[20px] text-gray-700 leading-relaxed" style={{ wordBreak: 'break-all' }}>
              結婚相談所の選び方の軸は、地域密着度・コストパフォーマンス・サポートの手厚さ・価値観の一致・自分のステイタスとの相性の5つに整理できます。結婚相談所を比較するとき、どれが正解ではなく、あなたが大切にしたいものと相談所が大切にしているものが重なる、いわば「相思相愛」の相手を見つけることが、結婚相談所選びの本質です。
            </p>
          </div>

          {/* Intro Paragraphs */}
          <div className="space-y-4 pt-2">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900" style={{ wordBreak: 'break-all' }}>
              結婚相談所選びで失敗しないために、まず知っておきたいこと
            </h2>
            <p className="text-[20px] text-gray-700 leading-relaxed" style={{ wordBreak: 'break-all' }}>
              大阪・梅田エリアには数多くの結婚相談所やハイクラス婚活サービスがあり、結婚相談所選びで迷う方は少なくありません。結婚相談所は、どこも同じではありません。
            </p>
            <ul className="space-y-2.5 text-[20px] text-gray-700 font-medium pl-2">
              <li className="flex items-start gap-2.5">
                <Check className="w-6 h-6 text-rose-500 shrink-0 mt-1" />
                <span style={{ wordBreak: 'break-all' }}>地元での出会いを大切にする地域密着型の結婚相談所</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-6 h-6 text-rose-500 shrink-0 mt-1" />
                <span style={{ wordBreak: 'break-all' }}>費用の分かりやすさを大切にするコストパフォーマンス重視の結婚相談所</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-6 h-6 text-rose-500 shrink-0 mt-1" />
                <span style={{ wordBreak: 'break-all' }}>手厚いサポートを大切にする仲人型の結婚相談所</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-6 h-6 text-rose-500 shrink-0 mt-1" />
                <span style={{ wordBreak: 'break-all' }}>価値観の一致を大切にする結婚相談所</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-6 h-6 text-rose-500 shrink-0 mt-1" />
                <span style={{ wordBreak: 'break-all' }}>会員層の相性を大切にするハイクラス・ハイスペック向けの結婚相談所</span>
              </li>
            </ul>
            <p className="text-[20px] text-gray-700 leading-relaxed" style={{ wordBreak: 'break-all' }}>
              それぞれに、考え方があります。私たち大阪梅田ドクターズ結婚相談所にも、大切にしている考え方があります。まずは、あなたが結婚相談所選びで何を求めているかから見ていきましょう。
            </p>
          </div>
        </section>

        {/* 5 Points Section */}
        <section className="rounded-2xl bg-white border border-rose-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="space-y-3 border-b border-rose-100 pb-4">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900" style={{ wordBreak: 'break-all' }}>
              結婚相談所を比較する5つのポイント
            </h2>
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-[20px] font-bold text-amber-900">
              結論: 結婚相談所選びの軸は、地域密着度・コストパフォーマンス・サポートの手厚さ・価値観の一致・自分のステイタスとの相性の5つに整理できます。
            </div>
            <p className="text-[20px] text-gray-700 pt-2" style={{ wordBreak: 'break-all' }}>
              自分が何を求めているかが分かると、結婚相談所の比較・選び方の軸が見えてきます。5つの視点で整理してみました。
            </p>
          </div>

          <div className="space-y-6">
            {/* Point 1 */}
            <div className="bg-rose-50/50 border border-rose-200 p-5 sm:p-6 rounded-xl space-y-3">
              <h3 className="text-xl font-bold text-rose-600 flex items-center gap-2" style={{ wordBreak: 'break-all' }}>
                <MapPin className="w-6 h-6 shrink-0 text-rose-500" />
                ① 地域に根ざした相談所を選びたい ↔ 地域密着型の結婚相談所
              </h3>
              <p className="text-[20px] text-gray-700 leading-relaxed" style={{ wordBreak: 'break-all' }}>
                その土地の会員層やイベント、地元での知名度に強みを持つタイプ。大阪や梅田など、地元での出会いや通いやすさを重視したい方に向いています。
              </p>
              <div className="bg-white p-4 rounded-lg border border-rose-100 text-[20px] text-gray-600">
                <strong className="text-rose-500">よくある失敗例:</strong> 通いやすさを軽視して遠方の相談所を選び、お見合いのたびに移動が負担になって活動が続かなくなるケースがあります。
              </div>
            </div>

            {/* Point 2 */}
            <div className="bg-rose-50/50 border border-rose-200 p-5 sm:p-6 rounded-xl space-y-3">
              <h3 className="text-xl font-bold text-rose-600 flex items-center gap-2" style={{ wordBreak: 'break-all' }}>
                <Coins className="w-6 h-6 shrink-0 text-rose-500" />
                ② 費用を抑えつつ、納得のいく内容で活動したい ↔ コストパフォーマンスを重視した結婚相談所
              </h3>
              <p className="text-[20px] text-gray-700 leading-relaxed" style={{ wordBreak: 'break-all' }}>
                登録料・月会費・成婚料など、結婚相談所の料金体系が明確でシンプルなタイプ。総額と受けられるサポートのバランスを見極めたい方に向いています。
              </p>
              <div className="bg-white p-4 rounded-lg border border-rose-100 text-[20px] text-gray-600">
                <strong className="text-rose-500">よくある失敗例:</strong> 初期費用の安さだけで選び、後からオプション費用が積み重なって想定より総額が高くなってしまうケースがあります。契約前に総額と内訳を確認しておくことが大切です。
              </div>
            </div>

            {/* Point 3 */}
            <div className="bg-rose-50/50 border border-rose-200 p-5 sm:p-6 rounded-xl space-y-3">
              <h3 className="text-xl font-bold text-rose-600 flex items-center gap-2" style={{ wordBreak: 'break-all' }}>
                <HeartHandshake className="w-6 h-6 shrink-0 text-rose-500" />
                ③ 一人で活動するのは不安 ↔ サポートの手厚い仲人型の結婚相談所
              </h3>
              <p className="text-[20px] text-gray-700 leading-relaxed" style={{ wordBreak: 'break-all' }}>
                プロフィール作成からお見合い後のフォローまで、専任カウンセラーが随所で伴走してくれるタイプ。婚活初心者や、不安が大きい方に向いています。
              </p>
              <div className="bg-white p-4 rounded-lg border border-rose-100 text-[20px] text-gray-600">
                <strong className="text-rose-500">よくある失敗例:</strong> サポート体制を確認せず入会し、担当者と連絡が取りづらい、相談してもレスポンスが遅いといった不満を感じるケースがあります。
              </div>
            </div>

            {/* Point 4 */}
            <div className="bg-rose-50/50 border border-rose-200 p-5 sm:p-6 rounded-xl space-y-3">
              <h3 className="text-xl font-bold text-rose-600 flex items-center gap-2" style={{ wordBreak: 'break-all' }}>
                <Compass className="w-6 h-6 shrink-0 text-rose-500" />
                ④ 誰かに深く理解された上で進めたい ↔ 価値観の一致を大切にする結婚相談所
              </h3>
              <p className="text-[20px] text-gray-700 leading-relaxed" style={{ wordBreak: 'break-all' }}>
                条件だけでなく、どんな結婚生活を望んでいるかを一緒に考えてくれるタイプ。表面的な条件よりも、根底の価値観を重視したい方に向いています。
              </p>
              <div className="bg-white p-4 rounded-lg border border-rose-100 text-[20px] text-gray-600">
                <strong className="text-rose-500">よくある失敗例:</strong> 年収や学歴などの条件だけでお相手を絞り込み、実際に交際すると価値観が合わずに早期に破談となってしまうケースがあります。
              </div>
            </div>

            {/* Point 5 */}
            <div className="bg-rose-50/50 border border-rose-200 p-5 sm:p-6 rounded-xl space-y-3">
              <h3 className="text-xl font-bold text-rose-600 flex items-center gap-2" style={{ wordBreak: 'break-all' }}>
                <Crown className="w-6 h-6 shrink-0 text-rose-500" />
                ⑤ 自分と近い会員層の中で活動したい ↔ ハイクラス・ハイスペックな会員層の結婚相談所
              </h3>
              <p className="text-[20px] text-gray-700 leading-relaxed" style={{ wordBreak: 'break-all' }}>
                年代、職業、ライフスタイルなど、自分に近い層の会員が多いタイプ。医師・経営者などの専門職やハイスペックな方、多忙な社会人でも活動しやすい結婚相談所を求める方に向いています。
              </p>
              <div className="bg-white p-4 rounded-lg border border-rose-100 text-[20px] text-gray-600">
                <strong className="text-rose-500">よくある失敗例:</strong> 会員層を確認せずに入会し、希望する年代・職業の相手がほとんどいない相談所だったと後から気づくケースがあります。
              </div>
            </div>
          </div>

          <p className="text-[20px] text-gray-700 leading-relaxed" style={{ wordBreak: 'break-all' }}>
            どれが正解ということはありません。あなたが今、婚活に何を求めているかによって、合う結婚相談所は変わります。
          </p>

          <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl text-[20px] text-gray-700">
            <strong>あわせて確認しておきたいこと:</strong> 上記5つの軸に加えて、IBJ(日本結婚相談所連盟)などの業界団体に加盟しているか、口コミ・評判はどうか、成婚率を公表しているかどうかも、結婚相談所選びで比較検討する際の重要なチェックポイントです。
          </div>
        </section>

        {/* Types Section */}
        <section className="rounded-2xl bg-white border border-rose-200 p-6 sm:p-8 shadow-sm space-y-6">
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 border-b border-rose-100 pb-4" style={{ wordBreak: 'break-all' }}>
            結婚相談所の主なタイプと、選ぶ際の注意点
          </h2>
          <p className="text-[20px] text-gray-700 leading-relaxed" style={{ wordBreak: 'break-all' }}>
            結婚相談所は、運営方式によっていくつかのタイプに分かれます。それぞれの特徴を知っておくと、比較検討がしやすくなります。
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="bg-rose-50/50 p-5 rounded-xl border border-rose-100 space-y-2">
              <h3 className="font-bold text-gray-900 text-xl">大手仲人型の結婚相談所</h3>
              <p className="text-[20px] text-gray-700">専任のカウンセラーが紹介からフォローまで担当するタイプです。会員数が多く、紹介候補の幅が広い一方、担当者1人あたりの会員数が多くなりやすく、きめ細やかさにばらつきが出ることがあります。</p>
            </div>
            <div className="bg-rose-50/50 p-5 rounded-xl border border-rose-100 space-y-2">
              <h3 className="font-bold text-gray-900 text-xl">データマッチング型の結婚相談所</h3>
              <p className="text-[20px] text-gray-700">AIやシステムによる相性診断で候補を提示するタイプです。自分のペースで活動しやすい反面、やり取りは基本的に自分で行うため、サポート力は低めになりがちです。</p>
            </div>
            <div className="bg-rose-50/50 p-5 rounded-xl border border-rose-100 space-y-2">
              <h3 className="font-bold text-gray-900 text-xl">オンライン特化型の結婚相談所</h3>
              <p className="text-[20px] text-gray-700">来店不要で、費用を抑えて効率的に活動できるタイプです。忙しい方には向いていますが、対面でのきめ細やかなアドバイスは受けにくい傾向があります。</p>
            </div>
            <div className="bg-rose-50/50 p-5 rounded-xl border border-rose-100 space-y-2">
              <h3 className="font-bold text-gray-900 text-xl">少人数制・専門特化型の結婚相談所</h3>
              <p className="text-[20px] text-gray-700">入会に審査や人数制限を設け、特定の会員層(医師・専門職など)に特化するタイプです。会員層の質は担保されやすい一方、選べる候補の母数は大手より少なくなります。</p>
            </div>
          </div>

          <p className="text-[20px] text-gray-700 leading-relaxed" style={{ wordBreak: 'break-all' }}>
            どのタイプにも一長一短があり、どれが優れているというものではありません。自分が5つの軸のうちどれを重視するかによって、合うタイプは変わります。
          </p>
        </section>

        {/* Comparison Table */}
        <section className="rounded-2xl bg-white border border-rose-200 p-6 sm:p-8 shadow-sm space-y-6">
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 border-b border-rose-100 pb-4" style={{ wordBreak: 'break-all' }}>
            結婚相談所比較・早見表
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="bg-rose-50 border-b border-rose-200 text-rose-900 font-bold text-[20px]">
                  <th className="p-3.5">求める軸</th>
                  <th className="p-3.5">こんな結婚相談所タイプ</th>
                  <th className="p-3.5">大阪梅田ドクターズ結婚相談所の場合</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-rose-100 text-[20px] text-gray-700">
                <tr>
                  <td className="p-3.5 font-semibold text-gray-900">①地域密着</td>
                  <td className="p-3.5">地元の会員層・イベントに強い</td>
                  <td className="p-3.5">北新地駅徒歩1分、大阪駅前第2ビル</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-gray-900">②コストパフォーマンス</td>
                  <td className="p-3.5">費用体系が明確でシンプル</td>
                  <td className="p-3.5">入会金・月会費・成婚料をすべて事前開示、お見合い料は月4回無料</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-gray-900">③サポートの手厚さ</td>
                  <td className="p-3.5">専任カウンセラーが伴走する仲人型</td>
                  <td className="p-3.5">現役女性医師×ベテラン仲人の2名体制、4フェーズで伴走</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-gray-900">④価値観の一致</td>
                  <td className="p-3.5">条件より人生観を重視</td>
                  <td className="p-3.5">心理学・脳科学・行動経済学のアプローチで理想像を解剖</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-gray-900">⑤ステイタスとの相性</td>
                  <td className="p-3.5">ハイクラス・ハイスペックな会員層</td>
                  <td className="p-3.5">毎月先着5名の少人数制、証明書提出必須の身元確認</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="rounded-2xl bg-white border border-rose-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="space-y-3 border-b border-rose-100 pb-4">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900" style={{ wordBreak: 'break-all' }}>
              大阪梅田ドクターズ結婚相談所が選ばれる理由｜5つの軸への回答
            </h2>
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-[20px] font-bold text-amber-900">
              結論: 私たちは、あなたが結婚相談所選びで求める5つの軸すべてに、それぞれの形でお応えできます。
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl text-gray-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                ① 地域密着 → 北新地駅徒歩1分、大阪駅前の好立地
              </h3>
              <p className="text-[20px] text-gray-700 pl-5 pt-1.5 leading-relaxed">
                大阪駅前第2ビル内、北新地駅直結徒歩1分という立地で、大阪市内はもちろん北摂・兵庫エリアからも通いやすい環境を整えています。お見合いの場所選びも、梅田・難波・心斎橋・天王寺など、関西の土地勘を活かしてご提案しています。当相談所はIBJ(日本結婚相談所連盟)正式加盟店でもあり、業界最大級のネットワークを活かした婚活サポートを行っています。詳しくは<Link href="/umeda-marriage" className="text-rose-600 underline font-semibold">大阪梅田の結婚相談所ってどんなところ?</Link>をご覧ください。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl text-gray-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                ② コストパフォーマンス → 結婚相談所の料金体系を明確に開示
              </h3>
              <p className="text-[20px] text-gray-700 pl-5 pt-1.5 leading-relaxed">
                入会金・初期プロデュース料・月会費・成婚料まで、費用をすべて事前に開示しています。お見合い料は月4回まで無料。お仕事の繁忙期には、月会費を抑えられる休会制度もご用意し、無理のない範囲で続けられる料金設計にしています。詳細は<Link href="/plan" className="text-rose-600 underline font-semibold">料金プランと少人数制について</Link>のページで確認いただけます。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl text-gray-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                ③ サポートの手厚さ → 4つのフェーズで伴走する仲人型2名体制
              </h3>
              <p className="text-[20px] text-gray-700 pl-5 pt-1.5 leading-relaxed">
                入会時の「理想像の徹底解剖」からプロフィール作成、お見合いの会話レッスン、仮交際・真剣交際中のリアルタイム相談、プロポーズのプロデュースまで、成婚までの全フェーズを現役女性医師とベテラン仲人の2名体制で伴走します。この体制については<Link href="/dual-support" className="text-rose-600 underline font-semibold">結婚相談所、担当カウンセラーは1人で本当に十分?</Link>の記事でも詳しく解説しています。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl text-gray-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                ④ 価値観の一致 → 医師監修のカウンセリングで「本当の理想像」を解剖
              </h3>
              <p className="text-[20px] text-gray-700 pl-5 pt-1.5 leading-relaxed">
                心理学・脳科学・行動経済学のアプローチを用いて、「絶対に譲れない条件」と「実は妥協しても幸せになれるポイント」を整理し、条件だけでは見えないミスマッチを防ぎます。カウンセリングの詳細は<Link href="/dialogue-architecture" className="text-rose-600 underline font-semibold">婚活カウンセリングとは|現役女医が実践する対話設計</Link>でご紹介しています。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl text-gray-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                ⑤ ステイタスとの相性 → 毎月先着5名の少人数制ハイクラス婚活
              </h3>
              <p className="text-[20px] text-gray-700 pl-5 pt-1.5 leading-relaxed">
                月間の新規入会を先着5名に限定し、独身証明書・収入証明書などの提出を必須とすることで、身元の確かなハイステイタスな会員様同士のご縁をサポートしています。医療業界の人脈を活かした「女医ルート」でのご紹介など、医師・専門職・多忙な社会人層に向けたネットワークも持っています。詳しくは<Link href="/why-us" className="text-rose-600 underline font-semibold">大阪梅田ドクターズ結婚相談所が選ばれる理由</Link>をご覧ください。
              </p>
            </div>
          </div>
        </section>

        {/* Mutual Match Philosophy */}
        <section className="rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 text-white p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-black" style={{ wordBreak: 'break-all' }}>
            結婚相談所と会員様は、ある意味では相思相愛
          </h2>
          <p className="text-[20px] leading-relaxed opacity-95" style={{ wordBreak: 'break-all' }}>
            私たちの考え方に「これが私の求めていたサポートかもしれない」と感じてくださる方に、来ていただきたい。だからこそ、当相談所は少人数制です。あなたの時間も、私たちの時間も有限です。
          </p>
          <p className="text-[20px] leading-relaxed opacity-95" style={{ wordBreak: 'break-all' }}>
            私たちのサポートに魅力を感じていただけること。<br />
            それは、結婚相談所と会員様も、ある意味では相思相愛だということだと思っています。
          </p>
          <p className="text-[20px] leading-relaxed opacity-95 font-semibold" style={{ wordBreak: 'break-all' }}>
            あなたが大切にしたいものと、私たちが大切にしているもの。<br />
            その重なりから、婚活は始まるのだと思っています。
          </p>
        </section>

        {/* FAQ Section */}
        <section className="rounded-2xl bg-white border border-rose-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-rose-200 pb-4">
            <span className="p-2 rounded-xl bg-rose-500 text-white shrink-0">
              <HelpCircle className="w-6 h-6" />
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900" style={{ wordBreak: 'break-all' }}>
              結婚相談所の選び方に関するよくあるご質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, idx) => (
              <div key={idx} className="bg-rose-50/40 border border-rose-100 p-4 sm:p-5 rounded-xl space-y-2">
                <h3 className="font-bold text-gray-900 text-[20px] flex items-start gap-2">
                  <span className="text-rose-500 font-bold">Q.</span>
                  <span>{faq.name.replace("?", "")}？</span>
                </h3>
                <p className="text-[20px] text-gray-700 leading-relaxed pl-6">
                  <strong className="text-rose-500">A.</strong> {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion & CTA */}
        <section className="rounded-2xl bg-white border border-rose-200 p-6 sm:p-8 shadow-sm space-y-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900" style={{ wordBreak: 'break-all' }}>
            まとめ: 大阪で結婚相談所をお探しなら、まずは無料相談を
          </h2>
          <p className="text-[20px] text-gray-700 leading-relaxed max-w-2xl mx-auto" style={{ wordBreak: 'break-all' }}>
            大阪梅田ドクターズ結婚相談所にぜひいらしてください。<br />
            たくさんのホームページの中で、私たちのサイトを見ていただいたこと。それ自体が、あなたと私たちのご縁だと思っています。<br />
            私たちの持てる経験のすべてを、あなたにお伝えしたいです。
          </p>

          <p className="text-[20px] text-gray-700 font-medium" style={{ wordBreak: 'break-all' }}>
            大阪・梅田で結婚相談所をお探しの方は、まずは無料相談から、私たちの考え方が、あなたの求めるものと重なるか、確かめにいらしてください。
          </p>

          <div className="pt-2">
            <Link
              href="/contact"
              className="relative bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white px-8 py-4.5 rounded-xl inline-flex items-center justify-center gap-3 shadow-[0_6px_14px_-3px_rgba(244,63,94,0.4)] border-b-[3px] border-rose-700/80 transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_8px_18px_-3px_rgba(244,63,94,0.5)] active:translate-y-0.5 active:border-b-0 no-underline cursor-pointer font-bold text-xl"
            >
              <span>無料相談の予約はこちら</span>
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}