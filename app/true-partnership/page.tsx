import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import femaleAdvisor from "@/public/femaleAdvisor2.jpg";
import maleAdvisor from "@/public/maleAdvisor2.jpg";

export const metadata: Metadata = {
  title: "なぜ私たちは「ハイスペック」との成婚を強く望むのか？",
  description:
    "ハイスペック婚を望む根底にある承認欲求や自己防衛本能。条件に振り回されず、自己のアイデンティティと望む未来を明確にすることで、あなたにとって本当に相性の良いパートナーと結ばれるための「迷いのない婚活の選択ルート」を明らかにします。",
  keywords: [
    "大阪梅田 結婚相談所",
    "婚活",
    "成婚",
    "ハイスペック婚",
    "自己防衛本能",
    "お見合い",
    "婚活女性",
    "医師監修 結婚相談所",
  ],
  authors: [
    { name: "現役女医（大阪梅田ドクターズ結婚相談所監修）" },
    { name: "ベテランカウンセラー" },
  ],
  alternates: {
    canonical: "/high-spec-trap",
  },
  openGraph: {
    title: "なぜ私たちは「ハイスペック」との成婚を強く望むのか？",
    description:
      "ハイスペック婚を望む根底にある承認欲求や自己防衛本能を分析。条件に振り回されず、本当のパートナーと結ばれるための選択ルートを解説します。",
    type: "article",
    locale: "ja_JP",
    siteName: "大阪梅田ドクターズ結婚相談所",
    url: "/high-spec-trap",
  },
  twitter: {
    card: "summary_large_image",
    title: "なぜ私たちは「ハイスペック」との成婚を強く望むのか？",
    description: "ハイスペック婚を望む心理と、本当に相性の良いパートナーに出会うための婚活戦略。",
  },
};

export default function HighSpecTrapAnalysis() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    'headline': 'なぜ私たちは「ハイスペック」との成婚を強く望むのか？',
    'description': 'ハイスペック婚を望む根底にある承認欲求や自己防衛本能。条件に振り回されず、自己のアイデンティティと望む未来を明確にすることで、あなたにとって本当に相性の良いパートナーと結ばれるための「迷いのない婚活の選択ルート」をあきらかにします。',
    'datePublished': '2026-07-18T12:00:00+09:00',
    'author': [
      {
        '@type': 'Person',
        'name': '現役女医（大阪梅田ドクターズ結婚相談所監修）',
        'jobTitle': 'Medical Doctor'
      },
      {
        '@type': 'Person',
        'name': 'ベテランカウンセラー',
        'jobTitle': 'Senior Marriage Counselor'
      }
    ],
    'publisher': {
      '@type': 'Organization',
      'name': '大阪梅田ドクターズ結婚相談所',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://your-domain.com/logo.png'
      }
    }
  };

  return (
    <div className="relative min-h-screen w-full py-10 sm:py-16 px-4 overflow-hidden">
      {/* --- Full Page Background Image --- */}
      <img 
        src="/lemons2.jpg" 
        alt="Lemon background" 
        className="fixed inset-0 w-full h-full object-cover object-center -z-10"
      />
      
      {/* Light Overlay for Contrast */}
      <div className="fixed inset-0 bg-amber-50/20 backdrop-blur-[2px] -z-10" />

      {/* --- JSON-LD --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* --- Main Stacked Cards Container --- */}
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* --- ヘッダーセクション CARD --- */}
        <div className="relative bg-white/95 backdrop-blur-md shadow-2xl border border-amber-100 rounded-3xl overflow-hidden">
          <div className="relative p-6 sm:p-10 text-center border-b border-amber-100/60 overflow-hidden">
            
            {/* Frosted Glass Container */}
            <div className="relative z-10 bg-white/85 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/70 shadow-xs max-w-2xl mx-auto">
              <span className="text-xs sm:text-sm font-black text-amber-800 uppercase tracking-widest block mb-2">
                Essential Question #04
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug tracking-tight mb-6">
                なぜ私たちは「ハイスペック」との成婚を強く望むのか？<br />
                大阪梅田ドクターズ結婚相談所
              </h1>
              <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full" />
            </div>

          </div>
        </div>

        {/* --- 本文セクション CARD --- */}
        <div className="bg-white/95 backdrop-blur-md shadow-2xl border border-amber-100 rounded-3xl p-6 sm:p-10 space-y-10 text-[18px] text-slate-700 leading-relaxed">
          
          {/* 導入リード文 */}
          <div className="space-y-4">
            <p className="font-bold text-slate-900 text-lg">
              「年収一千万円以上のエリート」「誰もが羨む社会的地位のあるハイスペックな男性」
            </p>
            <p>
              大阪梅田の激戦区で婚活に励む女性において、こうした高条件・高スペックな異性との成婚を強く望むのは、決して珍しいことではありません。
            </p>
            <p>
              「今より贅沢な生活がしたい」という願いや「友達や周囲に自慢して、羨ましがられたい（承認欲求を満たしたい）」という気持ちもあるでしょう。また「未来への不安を消すために、相手の確かなスペックで心穏やかな安全（ライフライン）を確保したい」という、脳の防衛本能（自己防衛心理）もあるでしょう。それらの気持ちは表裏一体となってグラデーションのように存在しています。
            </p>
            <p>
              より豊かで安定した人生の選択肢として高条件を求めること自体を否定する訳ではありません。
            </p>
          </div>

          <hr className="border-amber-100" />

          {/* --- セクション1：注意すべき盲点 --- */}
          <section className="space-y-6">
            <h2 className="text-lg sm:text-xl font-black text-slate-900 border-l-4 border-amber-400 pl-3 mb-6 leading-relaxed">
              1. 【注意すべき盲点】承認欲求や贅沢な生活は長く満たし続けられない
            </h2>
            <p className="font-bold text-slate-900">
              しかし、ここに結婚相談所の入会前、あるいはお見合いの段階で、絶対に知っておくべき最大の「注意すべき盲点」が隠されています。
            </p>
            <p>
              それは、<strong>「贅沢な生活への満足感」や「他人に自慢したい」という承認欲求は、長く満たし続けるのは難しい</strong>という点です。
            </p>
            <p>
              高級な暮らしや周囲からの羨望は、手に入れた瞬間は最高の快感かもしれません。しかし、どれほど贅沢な環境も、さほど遠くない未来に「当たり前の日常」へと変わります。憧れのレストランも高級品も真の幸せはもたらしてはくれません。
            </p>
            <p>
              最初は羨ましがられたハイスペック婚の話も、日々が過ぎれば、誰も聞いてくれなくなります。上には上がいますので、承認欲求は満たしにくくなり、最後に毎日の食卓に残るのは、贅沢な環境への満足ではなく、<strong>「目の前にいる相手との空気感」</strong>だけです。
            </p>
          </section>

          <hr className="border-amber-100" />

          {/* --- セクション2：心の残酷な仕組みと正解 --- */}
          <section className="space-y-6">
            <h2 className="text-lg sm:text-xl font-black text-slate-900 border-l-4 border-amber-400 pl-3 mb-6 leading-relaxed">
              2. 【心の仕組み】「失う恐怖」の罠から抜け出す、本当のパートナーシップ
            </h2>
            <p>
              さらに、今度は手に入れた恵まれた環境を<strong>「失う恐怖（損失回避バイアス）」</strong>に怯えやすくなるという、人間の心の残酷な仕組みもあります。
            </p>
            <p>
              「この生活水準から転落したくない」「離婚されたらすべてが終わる」という強い維持心理（執着）が働き、結婚生活が「相手の顔色を見て、失うことを心配する毎日」「対等ではない夫婦のパワーバランス」に変わりかねません。ハイスペック婚の本当の落し穴は、その豊かさや相手への依存が自分を弱く不安にさせるということです。
            </p>
            <p className="font-bold text-slate-900 text-lg bg-amber-50/70 p-5 rounded-2xl border border-amber-200/60 shadow-2xs">
              では、条件が良い人との結婚生活を心から享受し、かつ何十年経っても不安のないおだやかな日々を送るための正解は何でしょうか。
            </p>
            <p>
              それは、相手のスペックに「ぶら下がる」のではなく、それを<strong>「2人の人生の選択肢を広げ、面白くするための共通のブースター（加速装置）」</strong>として捉える知的なマインドセットです。
            </p>
            <p>
              「この豊かな環境には心から感謝し、楽しむ。けれど、自分は自分であり続け、もし最悪、何が起きても私は自分の足で立っていられる」という、小さくとも確かな精神的・経済的な自立心を心の片隅に持っておくこと。この健やかな自立心こそが、相手への過度な執着や依存による不安を消し去ります。
            </p>
            <p>
              自分の人生を能動的に生き、未来を自分で描くからこそ、あなたが魅力的な存在であり続けることができます。また、あなたが自然体でいるからこそ、お互いに依存せず、対等な「人生の相棒（バディ）」として尊重し合える、一生モノの溺愛関係が完成するのです。
            </p>

            {/* 能動的に生きることの魅力への誘導リンク */}
            <div className="py-4 text-center w-full">
              <a 
                href="#active-living"
                className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 font-bold text-base sm:text-lg transition-colors duration-200 border-b border-dashed border-amber-400 pb-1"
              >
                <span>🔘🔘 能動的に生きることの魅力について詳しく見る</span>
              </a>
            </div>
          </section>

          <hr className="border-amber-100" />

          {/* --- カウンセラーからのメッセージ --- */}
          <section className="bg-white/90 p-6 sm:p-8 rounded-2xl border border-amber-200/70 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <Image 
                src={maleAdvisor} 
                alt="カウンセラー" 
                width={64}
                height={64}
                className="rounded-full object-cover border-2 border-amber-200 shadow-xs shrink-0"
              />
              <div className="flex items-center gap-1.5">
                <span className="text-lg">🩷</span>
                <span className="font-black text-slate-900 text-xl">カウンセラーからのメッセージ</span>
              </div>
            </div>

            <div className="text-slate-700 space-y-3 leading-relaxed pt-2">
              <p>
                あなたのアイデンティティや尊厳を大切にしながら、理想のパートナーと関わり共に生きていけるようサポートしていきます。
              </p>
              <p>
                たくさんの条件をスタンプラリーのように求めるだけではなく、<strong>「どんな理由でどんな未来を描くのか」「自分がどんな人間であり続けたいのか」</strong>ということを考えることで、選ぶべき道も見えてくるでしょう。
              </p>
            </div>
          </section>

          {/* --- 大阪梅田ドクターズ結婚相談所からのメッセージ --- */}
          <section className="space-y-4">
            <h3 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
              💍 大阪梅田ドクターズ結婚相談所からのメッセージ
            </h3>
            <p>
              大阪梅田ドクターズ結婚相談所がプロデュースするのは、数字の条件だけで無理にパズルを合わせるようなマッチングではありません。
            </p>
            <p>
              データ上の条件検索にとどまらず、数十年先もあなたが本当の安心感の中で豊かさを育める「対等なバディ」の選び方と心の整え方をお伝えします。
            </p>
            <p className="font-bold text-amber-700 text-lg bg-amber-50/50 p-4 rounded-xl border border-amber-100">
              スペックの呪いから解放され、あなたの人生の質を本当の意味で高めるための合理的な一歩を、まずは大阪梅田ドクターズ結婚相談所の無料カウンセリングから始めてみませんか？
            </p>
          </section>

        </div>

        {/* --- クロージングメッセージ / CTA CARD --- */}
        <div className="bg-gradient-to-br from-amber-100/90 via-amber-50/95 to-yellow-100/90 backdrop-blur-md p-6 sm:p-10 border border-amber-200/80 rounded-3xl text-center shadow-2xl">
          <div className="pt-2">
            <button className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-[18px] font-bold py-4 px-8 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200 cursor-pointer">
              スペックを超えた理想のバディと出会う、無料カウンセリングはこちら
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}