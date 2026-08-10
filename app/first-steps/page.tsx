import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { MessageCircle, Heart, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "初心者むけ素朴な疑問を解決！外見と内面のリアル | 大阪梅田ドクターズ結婚相談所",
  description:
    "素朴な疑問を解決し、婚活で仮交際や真剣交際に進むために外見と内面さらに笑顔の魅力、その伝え方について専門的に解説します。",

  keywords: [
    "大阪梅田 結婚相談所",
    "婚活 初心者",
    "仮交際 基準",
    "外見と内面",
    "笑顔の魅力",
    "プロフィール作成",
    "大人の婚活",
    "医師監修 結婚相談所",
  ],

  authors: [
    {
      name: "現役女医（大阪梅田ドクターズ結婚相談所監修）",
    },
    {
      name: "ベテランカウンセラー",
    },
  ],

  alternates: {
    canonical: "/beginner-faq",
  },

  openGraph: {
    title: "初心者むけ素朴な疑問を解決！外見と内面のリアル | 大阪梅田ドクターズ結婚相談所",
    description:
      "素朴な疑問を解決し、婚活で仮交際や真剣交際に進むために外見と内面さらに笑顔の魅力、その伝え方について専門的に解説します。",
    type: "article",
    locale: "ja_JP",
    siteName: "大阪梅田ドクターズ結婚相談所",
    url: "/beginner-faq",
  },

  twitter: {
    card: "summary_large_image",
    title: "初心者むけ素朴な疑問を解決！外見と内面のリアル | 大阪梅田ドクターズ結婚相談所",
    description:
      "婚活で仮交際や真剣交際に進むために外見と内面さらに笑顔の魅力、その伝え方について専門的に解説します。",
  },
};

interface BeginnerFaqPageProps {
  sectionRef?: React.RefObject<HTMLDivElement>;
}

export default function BeginnerFaqPage({ sectionRef }: BeginnerFaqPageProps) {
  
  // 構造化データ (JSON-LD) の定義
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    'headline': '初心者むけ素朴な疑問を解決！外見と内面のリアル',
    'description': '素朴な疑問を解決し、婚活で仮交際や真剣交際に進むために外見と内面さらに笑顔の魅力、その伝え方について専門的に解説します。',
    'datePublished': '2026-07-20T12:00:00+09:00',
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
    <div ref={sectionRef} className="min-h-screen bg-emerald-50/60 text-slate-800 font-sans antialiased selection:bg-emerald-200 w-full overflow-x-hidden">
      {/* 構造化データをHEADまたはBody内に安全に注入 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* ヒーローセクション */}
      <header className="relative bg-gradient-to-br from-emerald-200 via-teal-100 to-emerald-300 text-slate-900 py-14 px-4 md:px-6 text-center overflow-hidden w-full border-b border-emerald-300/80 shadow-xs">
        <div className="max-w-5xl mx-auto relative z-10 w-[98%] sm:w-[98%] mx-auto flex flex-col items-center">
          <span className="inline-block bg-emerald-700 text-emerald-50 font-extrabold tracking-widest text-xs uppercase px-4 py-1.5 rounded-full mb-4 shadow-xs">
            ✨ Beginner's Guide
          </span>
          
          <div className="bg-gradient-to-r from-emerald-700 to-teal-700 text-white py-6 px-4 sm:px-8 rounded-2xl shadow-md w-full mb-6">
            <h1 className="text-[26px] sm:text-[38px] lg:text-[42px] font-bold tracking-wide leading-tight m-0 text-white font-serif w-full drop-shadow-sm">
              初心者むけ素朴な疑問を解決！<br className="sm:hidden" />
              外見と内面のリアル
            </h1>
          </div>

          <div className="bg-white/95 p-6 rounded-2xl border border-emerald-300 shadow-sm inline-block text-left w-full backdrop-blur-sm">
            <p className="text-emerald-900 font-bold text-lg md:text-xl mb-2 text-center">外見は「きっかけ」、中身は「決定打」</p>
            <p className="text-[18px] text-slate-700 leading-relaxed tracking-wide text-center w-full">
              素朴な疑問を解決し、婚活で仮交際や真剣交際に進むために外見と内面、さらに笑顔の魅力とその伝え方を専門的に解説します。<br />
              一言でまとめるなら、男性にとって「外見」は、その女性の「中身」に興味を持つ前の【きっかけ】です。
            </p>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="py-10 w-full">
        <div className="max-w-4xl w-[98%] sm:w-[98%] mx-auto space-y-10">

          {/* セクション1：外見と中身の関係 */}
          <section className="bg-white p-6 md:p-8 rounded-2xl border border-emerald-200 shadow-sm space-y-6">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-slate-900 tracking-wider border-b border-emerald-100 pb-3">
              外見はきっかけ、中身は決定打
            </h2>
            
            <p className="text-[18px] text-slate-700 leading-relaxed">
              男性は本能的に視覚から恋をする傾向があります。女性が相手の雰囲気や優しさなど「総合点」で判断するのに対し、男性はまず「目から入る情報」でアリかナシかを瞬時に決定します。
            </p>
            
            <p className="text-[18px] text-slate-700 leading-relaxed">
              生物学的な観点から、男性は健康や若さ、つまり自分の遺伝子を残せる可能性の高い女性を選ぶ傾向にあるためです。「じゃあ、外見良くないと結局うまくいかないんでは！」と、思われたかもしれません。もちろん魅力的な外見は強みですが、外見はあくまできっかけに過ぎません。
            </p>

            <div className="my-6 rounded-2xl overflow-hidden shadow-md border border-emerald-200/80">
              <Image
                src="/marriage-counseling-future-planning-woman.jpg"
                alt="結婚相談所の将来や外見について悩む女性"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>

            <p className="text-[18px] text-slate-700 leading-relaxed">
              男性が最初は好みでないと思っても、次に会うチャンス【仮交際】さえギリギリでもゲットできれば中身を見てもらえます。
            </p>

            <div className="bg-emerald-50/70 p-5 rounded-xl border border-emerald-200 space-y-2 text-emerald-950 font-medium">
              <p className="text-[18px]">「あれ、好みじゃないと思ってたけど、意外としっかりしてるかも♡」</p>
              <p className="text-[18px]">「あれ、いい子だな♡ 居心地よくて落ち着くな♡ 俺のこと理解してくれる！」</p>
              <p className="text-[16px] text-emerald-800 pt-1">――このように、関係は確実に変わっていきます。</p>
            </div>
          </section>

          {/* セクション2：ギリギリ仮交際になれる人となれない人の違い */}
          <section className="bg-white p-6 md:p-8 rounded-2xl border border-emerald-200 shadow-sm space-y-6">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-slate-900 tracking-wider border-b border-emerald-100 pb-3">
              ギリギリ仮交際になれる人となれない人の違いは？
            </h2>

            <div className="space-y-4 text-[18px] text-slate-700 leading-relaxed">
              <p>
                まず、男性が好みの女性じゃなくても、『もう一度お会いしたい』とギリギリOKを出す基準は、<strong>『この女性は、僕に好意がありそうだな』</strong>と感じられて、さらに<strong>『楽しかった！彼女を喜ばせることができたし、男として手応えがあったぞ！』</strong>と感じた時です。男性は、基本的に『自分が相手を楽しませられたか』という満足感に喜びを覚える性質の方が多いです。
              </p>
              <p>
                一方で、女性がギリギリOKを出す基準は少し異なり、<strong>『私を不快にさせない（安心）』</strong>、そして<strong>『男として頼れそう（尊敬）』</strong>と思えたかどうかなのです。つまり、『自分が一人の人間として大切に扱われ、居心地よく楽しめたか』が何よりも大切なポイントになります。
              </p>
              <p>
                またお見合いにおいては、魅力の加点ではなく<strong>『減点がないこと』</strong>が大切です。男性は多少マイナスに感じる点があっても『可愛くて楽しければOK』と加点方式で見てくださることが多いのですが、女性の心理はまず厳しい『減点方式』から始まります。どんなに容姿が整っている男性であっても、お相手への態度が少し悪かったり、ケチな部分が見えたりして、一つでも大きな『減点』があれば即お断りになってしまうのです。
              </p>
            </div>

            {/* 女性医師のアドバイス風引用ボックス */}
            <div className="bg-sky-50/80 border border-sky-200/80 rounded-2xl p-5 text-slate-700 leading-relaxed shadow-2xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-sky-200 shadow-2xs">
                  <Image
                    src="/femaleAdvisor2.jpg"
                    alt="女性医師アドバイザー"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-bold text-sky-800 text-[18px]">女性医師の見解：</p>
              </div>
              <p className="text-[18px] text-slate-700 leading-relaxed">
                男性は「手応えがあったか」、女性は「大切に扱われ、減点がなかったか」がポイントになります。お見合いで次に進める方は、決して特別な魔法を使える方ではなく、とにかく『減点されない人』なのです。
              </p>
            </div>

            <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-200 space-y-3">
              <h4 className="font-bold text-emerald-950 text-lg">💙 最後に：男性の心を掴むリアクション</h4>
              <p className="text-[18px] text-slate-700 leading-relaxed">
                男性に「俺の話で楽しんでくれた！」と確信させるリアクションは、<strong>「目を見つめて、満面の笑みで大きくうなずく」</strong>です。
              </p>
              <p className="text-[16px] text-slate-700 italic">
                男性が話した直後に「えっ、本当ですか！？（目を輝かせる）…すごーい！（満面の笑み＋大きくうなずく）」<br />
                男性はあざといなーとわかっていても、自分の気をひこうとしてる女性の方が可愛く感じる🩷のです。
              </p>
            </div>
          </section>

          {/* セクション3：笑顔の魅力とは？ */}
          <section className="bg-white p-6 md:p-8 rounded-2xl border border-emerald-200 shadow-sm space-y-6">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-slate-900 tracking-wider border-b border-emerald-100 pb-3">
              笑顔の魅力とは？
            </h2>
            <p className="text-[18px] text-slate-700 leading-relaxed">
              昔、病院でひまわりのようにいつも笑顔の若い看護師の女性がいました。外見だけでいうと際立つ美女ではありませんでしたが、誰にでも華やかに笑っていました。医師達も看護師さんも、患者さんもみんなが彼女をいい子だねと言っていました。ずっと笑顔でいることは難しいことかもしれませんが、できる範囲で頑張ってみてもいいかもしれません。
            </p>
            <p className="text-[18px] text-slate-700 font-bold text-emerald-900">
              笑顔とは、相手に居心地の良さを提供し、自分の魅力を最大に高める「コスパ最強のコミュニケーションスキル」です。
            </p>

            <div className="grid gap-3 md:grid-cols-2">
              <div className="bg-emerald-50/80 p-4 border border-emerald-200 rounded-xl">
                <p className="font-bold text-emerald-800 text-[18px] mb-1">✨ 笑顔キラキラポイント1</p>
                <p className="text-[16px] text-slate-700">目を細めて三日月🌙にして「イェーい！」と言いながら口角あげる。</p>
              </div>
              <div className="bg-emerald-50/80 p-4 border border-emerald-200 rounded-xl">
                <p className="font-bold text-emerald-800 text-[18px] mb-1">✨ 笑顔キラキラポイント2</p>
                <p className="text-[16px] text-slate-700">挨拶も笑顔もお礼も…「自分から先に言う！」を心がけてみましょう。</p>
              </div>
            </div>
          </section>

          {/* セクション4：プロフィール作成の魅力 */}
          <section className="bg-white p-6 md:p-8 rounded-2xl border border-emerald-200 shadow-sm space-y-6">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-slate-900 tracking-wider border-b border-emerald-100 pb-3">
              大阪梅田ドクターズ結婚相談所のプロフィール作成の魅力💙
            </h2>
            <p className="text-[18px] text-slate-700 leading-relaxed">
              プロフィール文章はあなたの未来のパートナーに向けた、世界に一つだけの「大切な招待状」です。「自分が書きたいこと」ではなく、「お相手が知りたいこと」で心を掴み、読んだ異性が「この人と一緒にいたら、自分の人生が楽しくなりそう！」と想像できる、お相手目線のプロフィールを作成します。
            </p>

            {/* 例文比較 */}
            <div className="space-y-4 pt-2">
              <h3 className="font-bold text-slate-900 text-lg">💡 【仕事の書き方の違い】</h3>
              <div className="bg-red-50/70 p-4 rounded-xl border border-red-200 text-slate-700">
                <span className="font-bold text-red-700 block mb-1">❌ 自分目線：</span>
                <p className="text-[16px]">「医師として病院に勤務しています。毎日オペや当直で多忙ですが、非常にやりがいを感じて日々職務を全うしています。お相手の方と暖かい家庭を築いていきたいです。」</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 text-slate-700">
                <span className="font-bold text-emerald-800 block mb-1">⭕️ お相手目線（ここが違う！）：</span>
                <p className="text-[16px]">「医療の現場で責任のある仕事を任せていただいており、平日は集中して仕事に向き合っています。だからこそ、お休みの日は家庭での時間を何より大切にしたいと考えています。お互いに『今日もお疲れ様』と言い合える、温かい家庭を築きたいです。」</p>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <h3 className="font-bold text-slate-900 text-lg">💡 【趣味の書き方の違い：単なる自己満足ではなく「2人で楽しむ未来」】</h3>
              <div className="bg-red-50/70 p-4 rounded-xl border border-red-200 text-slate-700">
                <span className="font-bold text-red-700 block mb-1">❌ 自分目線：</span>
                <p className="text-[16px]">「趣味は料理で、お料理教室に通っています。栄養バランスを考えた和食や、お菓子作り、パンを焼くことが得意です。」</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 text-slate-700">
                <span className="font-bold text-emerald-800 block mb-1">⭕️ お相手目線（ここが違う！）：</span>
                <p className="text-[16px]">「普段から自炊をしており、冷蔵庫にあるものでパパッとお酒がすすむおつまみや、身体に優しい家庭料理を作ることが得意です。お仕事帰りの彼に『今日もお疲れ様！』と美味しいご飯を出して、一緒にテレビを見ながら笑って過ごす日常に憧れています。」</p>
              </div>
            </div>
          </section>

          {/* セクション5：大手のマニュアル婚活に疲れたあなたへ */}
          <section className="bg-gradient-to-br from-emerald-100/70 via-teal-50 to-emerald-100/40 p-6 md:p-8 rounded-2xl border border-emerald-200 shadow-sm space-y-6">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-slate-900 tracking-wider text-center">
              大手のマニュアル婚活に疲れたあなたへ<br />
              <span className="text-emerald-800 text-lg">大手相談所とここが違います</span>
            </h2>

            <div className="my-6 rounded-2xl overflow-hidden shadow-md border border-emerald-200/80">
              <Image
                src="/beginners-support-flow.jpg"
                alt="初心者のサポートフローと相談所の体制図"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>

            <p className="text-[18px] text-slate-700 leading-relaxed text-center">
              大手の機械的な条件検索や作業のようなお見合いに疲れていませんか？当相談所は、会員数や効率を最優先にする大手とは一線を画します。データやスペックだけで判断するマニュアル婚活は行いません。あなたという「ひとりの人間」の価値観や人柄に深く寄り添います。
            </p>

            <div className="bg-white p-5 rounded-xl border border-emerald-200 text-center space-y-3">
              <p className="font-bold text-emerald-950 text-[18px]">
                孤独な作業になりがちな婚活を、温もりのある本物の出会いへ。
              </p>
              <p className="text-[16px] text-slate-700">
                あなたの魅力を最大限に引き出す完全オーダーメイドでサポートします。心から信頼できるパートナーを、私たちと一緒に見つけませんか？
              </p>
            </div>
          </section>

        </div>
      </main>

      {/* LINE CTA セクション */}
      <section id="line-add" className="py-12 bg-gradient-to-br from-emerald-200 via-teal-100 to-emerald-300 text-slate-900 text-center px-4 w-full border-t border-emerald-300">
        <div className="max-w-5xl w-[98%] sm:w-[98%] mx-auto space-y-4 flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-serif font-bold tracking-wider text-slate-900 w-full">
            まずはお気軽に、カウンセリングから始めてみませんか？
          </h2>
          <p className="text-[16px] text-slate-700 font-medium leading-relaxed tracking-wide max-w-2xl">
            プロフィール作成のコツや、あなたに合った婚活の進め方を丁寧にお伝えします。<br />
            勧誘は一切ありません。公式LINEまたは対面でお待ちしております。
          </p>
          <div className="pt-4 flex justify-center w-full">
            <Link 
              href="#contact" 
              className="inline-flex items-center justify-center gap-2 bg-[#06C755] hover:bg-[#05b34c] text-white font-extrabold px-8 py-4 rounded-full shadow-md hover:shadow-lg transition duration-200 tracking-wider text-[16px] w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 shrink-0" />
              【無料相談】まずは無料カウンセリングから（LINE無料相談・対面対応）
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}