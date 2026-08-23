

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { MessageCircle, ShieldCheck, ArrowRight, Sparkles, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: "初心者むけ素朴な疑問を解決！外見と内面のリアル | 大阪梅田ドクターズ結婚相談所",
  description: "素朴な疑問を解決し、婚活で仮交際や真剣交側に進むために外見と内面さらに笑顔の魅力、その伝え方について専門的に解説します。",
  keywords: ["大阪梅田 結婚相談所", "婚活 初心者", "仮交際 基準", "外見と内面", "笑顔の魅力", "プロフィール作成", "大人の婚活", "医師監修 結婚相談所"],
  authors: [
    { name: "現役女医（大阪梅田ドクターズ結婚相談所監修）" },
    { name: "ベテランカウンセラー" }
  ],
  alternates: {
    canonical: "/beginner-faq",
  },
  openGraph: {
    title: "初心者むけ素朴な疑問を解決！外見と内面のリアル | 大阪梅田ドクターズ結婚相談所",
    description: "素朴な疑問を解決し、婚活で仮交際や真剣交側に進むために外見と内面さらに笑顔の魅力、その伝え方について専門的に解説します。",
  },
  twitter: {
    title: "初心者むけ素朴な疑問を解決！外見と内面のリアル | 大阪梅田ドクターズ結婚相談所",
    description: "婚活で仮交際や真剣交側に進むために外見と内面さらに笑顔の魅力、その伝え方について専門的に解説します。",
  },
};

export default function BeginnerFaqLandingPage() {
  return (
    <div className="relative min-h-screen text-slate-800 font-sans antialiased selection:bg-sky-200 w-full overflow-x-hidden">
      
      {/* 画面全体の固定背景レイヤー */}
      <div 
        className="fixed inset-0 pointer-events-none -z-10 bg-cover bg-center bg-no-repeat bg-fixed opacity-60"
        style={{ backgroundImage: "url('/skyRepeat.jpg')" }}
      />
      
      {/* ベース背景カラー */}
      <div className="fixed inset-0 pointer-events-none -z-20 bg-sky-50/30" />

      {/* Header Section */}
      <header className="relative bg-gradient-to-br from-sky-200/70 via-indigo-100/60 to-blue-200/70 text-slate-900 py-12 px-4 md:px-6 text-center overflow-hidden w-full border-b border-sky-300/80 shadow-xs backdrop-blur-sm">
        <div className="max-w-3xl mx-auto relative z-10 w-full">
          <span className="inline-block bg-sky-700 text-sky-50 font-extrabold tracking-widest text-sm md:text-xs uppercase px-4 py-1.5 rounded-full mb-4 shadow-xs">
            ✨ Beginner's Guide
          </span>
          <h1 className="text-2xl md:text-4xl font-serif font-extrabold leading-tight tracking-wider mb-6 text-slate-900 drop-shadow-xs">
            初心者むけ素朴な疑問を解決！<br />
            外見と内面のリアル
          </h1>
          <div className="bg-white/85 p-5 md:p-6 rounded-3xl border border-sky-300/80 shadow-sm inline-block text-left w-full backdrop-blur-md">
            <p className="text-slate-700 text-[20px] md:text-base leading-relaxed tracking-wide text-center w-full font-bold text-sky-950 mb-2">
              外見は「きっかけ」、中身は「決定打」
            </p>
            <p className="text-slate-700 text-[20px] md:text-base leading-relaxed tracking-wide text-center w-full">
              素朴な疑問を解決し、婚活で仮交際や真剣交側に進むために外見と内面、さらに笑顔の魅力とその伝え方を専門的に解説します。<br />
              一言でまとめるなら、男性にとって「外見」は、その女性の「中身」に興味を持つ前の【きっかけ】です。
            </p>
          </div>
        </div>
      </header>

      {/* Section 1: 外見と中身の関係 */}
      <section className="py-8 w-full px-4">
        <div className="max-w-3xl mx-auto w-full">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-5 md:p-7 shadow-sm border border-sky-200/80 space-y-6 w-full">
            <div className="text-center px-2 w-full">
              <h2 className="text-[22px] md:text-2xl font-serif font-bold text-slate-900 tracking-wider">
                外見はきっかけ、中身は決定打
              </h2>
            </div>

            <div className="space-y-4 text-[20px] md:text-base text-slate-700 leading-relaxed w-full">
              <p>
                男性は本能的に視覚から恋をする傾向があります。女性が相手の雰囲気や優しさなど「総合点」で判断するのに対し、男性はまず「目から入る情報」でアリかナシかを瞬時に決定します。
              </p>
              <p>
                生物学的な観点から、男性は健康や若さ、つまり自分の遺伝子を残せる可能性の高い女性を選ぶ傾向にあるためです。「じゃあ、外見良くないと結局うまくいかないんでは！」と、思われたかもしれません。もちろん魅力的な外見は強みですが、外見はあくまできっかけに過ぎません。
              </p>

              <div className="my-6 text-center">
                <img 
                  src="/marriage-counseling-future-planning-woman.jpg" 
                  alt="結婚相談所の将来や外見について悩む女性"
                  className="rounded-2xl border border-sky-200 shadow-sm mx-auto max-w-full h-auto object-cover"
                />
              </div>

              <p>
                男性が最初は好みでないと思っても、次に会うチャンス【仮交際】さえギリギリでもゲットできれば中身を見てもらえます。
              </p>
              
              <div className="bg-sky-50/80 p-4 rounded-2xl border border-sky-200/80 space-y-2">
                <p className="text-sky-900 font-medium">
                  「あれ、好みじゃないと思ってたけど、意外としっかりしてるかも♡」
                </p>
                <p className="text-sky-900 font-medium">
                  「あれ、いい子だな♡ 居心地よくて落ち着くな♡ 俺のこと理解してくれる！」
                </p>
              </div>

              <p>
                ――このように、関係は確実に変わっていきます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: ギリギリ仮交際になれる人となれない人の違い */}
      <section className="py-8 bg-sky-100/30 backdrop-blur-xs w-full border-y border-sky-200/60 px-4">
        <div className="max-w-3xl mx-auto w-full space-y-5">
          <div className="bg-white/80 backdrop-blur-md p-5 md:p-6 border border-sky-200/80 w-full space-y-5 rounded-3xl shadow-xs">
            <h2 className="text-[22px] md:text-xl font-bold text-sky-950 tracking-wider w-full">
              ギリギリ仮交際になれる人となれない人の違いは？
            </h2>
            
            <div className="space-y-4 text-[20px] md:text-base text-slate-700 leading-relaxed w-full">
              <p>
                まず、男性が好みの女性じゃなくても、『もう一度お会いしたい』とギリギリOKを出す基準は、『この女性は、僕に好意がありそうだな』と感じられて、さらに『楽しかった！彼女を喜ばせることができたし、男として手応えがあったぞ！』と感じた時です。男性は、基本的に『自分が相手を楽しませられたか』という満足感に喜びを覚える性質の方が多いです。
              </p>
              <p>
                一方で、女性がギリギリOKを出す基準は少し異なり、『私を不快にさせない（安心）』、手して『男として頼れそう（尊敬）』と思えたかどうかなのです。つまり、『自分が一人の人間として大切に扱われ、居心地よく楽しめたか』が何よりも大切なポイントになります。
              </p>
              <p>
                またお見合いにおいては、魅力の加点ではなく『減点がないこと』が大切です。男性は多少マイナスに感じる点があっても『可愛くて楽しければOK』と加点方式で見てくださることが多いのですが、女性の心理はまず厳しい『減点方式』から始まります。どんなに容姿が整っている男性であっても、お相手への態度が少し悪かったり、ケチな部分が見えたりして、一つでも大きな『減点』があれば即お断りになってしまうのです。
              </p>
            </div>

            <div className="bg-gradient-to-br from-sky-100/80 via-indigo-50/70 to-blue-100/50 p-5 md:p-6 border border-sky-200/80 w-full rounded-2xl space-y-3.5 shadow-xs">
              <div className="flex items-center gap-3 w-full">
                <img 
                  src="/femaleAdvisor2.jpg" 
                  alt="女性医師アドバイザー" 
                  className="w-16 h-16 rounded-full object-cover border-2 border-sky-400 shadow-xs shrink-0"
                />
                <h3 className="font-bold text-sky-950 text-[22px] md:text-lg tracking-wide w-full">
                  女性医師の見解：
                </h3>
              </div>
              <p className="text-[20px] md:text-base text-slate-700 leading-relaxed w-full">
                男性は「手応えがあったか」、女性は「大切に扱われ、減点がなかったか」がポイントになります。お見合いで次に進める方は、決して特別な魔法を使える方ではなく、とにかく『減点されない人』なのです。
              </p>
            </div>

            <div className="bg-sky-50/80 p-5 rounded-2xl border border-sky-200/80 space-y-3">
              <h3 className="font-bold text-sky-950 text-[22px] md:text-lg">
                💙 最後に：男性の心を掴むリアクション
              </h3>
              <p className="text-[20px] md:text-base text-slate-700 leading-relaxed">
                男性に「俺の話で楽しんでくれた！」と確信させるリアクションは、「目を見つめて、満面の笑みで大きくうなずく」です。
              </p>
              <p className="text-[20px] md:text-base text-slate-700 leading-relaxed font-medium">
                男性が話した直後に「えっ、本当ですか！？（目を輝かせる）…すごーい！（満面の笑み＋大きくうなずく）」
              </p>
              <p className="text-[20px] md:text-base text-sky-900 leading-relaxed">
                男性はあざといなーとわかっていても、自分の気をひこうとしてる女性の方が可愛く感じる🩷のです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: 笑顔の魅力とは？ */}
      <section className="py-8 w-full px-4">
        <div className="max-w-3xl mx-auto w-full">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-5 md:p-7 shadow-sm border border-sky-200/80 space-y-6 w-full">
            <div className="text-center px-2 w-full">
              <h2 className="text-[22px] md:text-2xl font-serif font-bold text-slate-900 tracking-wider">
                笑顔の魅力とは？
              </h2>
            </div>

            <div className="space-y-4 text-[20px] md:text-base text-slate-700 leading-relaxed w-full">
              <p>
                昔、病院でひまわりのようにいつも笑顔の若い看護師の女性がいました。外見だけでいうと際立つ美女ではありませんでしたが、誰にでも華やかに笑っていました。医師達も看護師さんも、患者さんもみんなが彼女をいい子だねと言っていました。ずっと笑顔でいることは難しいことかもしれませんが、できる範囲で頑張ってみてもいいかもしれません。
              </p>
              <p className="font-bold text-sky-950 bg-sky-50 p-4 rounded-2xl border border-sky-200">
                笑顔とは、相手に居心地の良さを提供し、自分の魅力を最大に高める「コスパ最強のコミュニケーションスキル」です。
              </p>

              <div className="space-y-3 pt-2">
                <div className="bg-sky-50/70 p-4 border border-sky-200/80 rounded-2xl">
                  <p className="text-[20px] md:text-base text-slate-800 font-bold">
                    ✨ 笑顔キラキラポイント1: 目を細めて三日月🌙にして「イェーい！」と言いながら口角あげる。
                  </p>
                </div>
                <div className="bg-sky-50/70 p-4 border border-sky-200/80 rounded-2xl">
                  <p className="text-[20px] md:text-base text-slate-800 font-bold">
                    ✨ 笑顔キラキラポイント2: 挨拶も笑顔もお礼も…「自分から先に言う！」を心がけてみましょう。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: プロフィール作成の魅力 */}
      <section className="py-8 bg-sky-100/30 backdrop-blur-xs w-full border-y border-sky-200/60 px-4">
        <div className="max-w-3xl mx-auto w-full space-y-5">
          <div className="bg-white/80 backdrop-blur-md p-5 md:p-6 border border-sky-200/80 w-full space-y-5 rounded-3xl shadow-xs">
            <h2 className="text-[22px] md:text-xl font-bold text-sky-950 tracking-wider w-full">
              大阪梅田ドクターズ結婚相談所のプロフィール作成の魅力💙
            </h2>
            <p className="text-[20px] md:text-base leading-relaxed text-slate-700 w-full">
              プロフィール文章はあなたの未来のパートナーに向けた、世界に一つだけの「大切な招待状」です。「自分が書きたいこと」ではなく、「お相手が知りたいこと」で心を掴み、読んだ異性が「この人と一緒にいたら、自分の人生が楽しくなりそう！」と想像できる、お相手目線のプロフィールを作成します。
            </p>

            {/* 仕事の書き方の違い */}
            <div className="space-y-3 bg-sky-50/70 p-5 border border-sky-200/80 rounded-2xl">
              <h3 className="font-bold text-sky-950 text-[20px] md:text-base">
                💡 【仕事の書き方の違い】
              </h3>
              <div className="space-y-2 text-[20px] md:text-base">
                <div className="bg-white p-3.5 rounded-xl border border-red-200 text-slate-700">
                  <span className="font-bold text-red-600 block mb-1">❌ 自分目線：</span>
                  「医師として病院に勤務しています。毎日オペや当直で多忙ですが、非常にやりがいを感じて日々職務を全うしています。お相手の方と暖かい家庭を築いていきたいです。」
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-emerald-300 text-slate-700">
                  <span className="font-bold text-emerald-600 block mb-1">⭕️ お相手目線（ここが違う！）：</span>
                  「医療の現場で責任のある仕事を任せていただいており、平日は集中して仕事に向き合っています。だからこそ、お休みの日は家庭での時間を何より大切にしたいと考えています。お互いに『今日もお疲れ様』と言い合える、温かい家庭を築きたいです。」
                </div>
              </div>
            </div>

            {/* 趣味の書き方の違い */}
            <div className="space-y-3 bg-sky-50/70 p-5 border border-sky-200/80 rounded-2xl">
              <h3 className="font-bold text-sky-950 text-[20px] md:text-base">
                💡 【趣味の書き方の違い：単なる自己満足ではなく「2人で楽しむ未来」】
              </h3>
              <div className="space-y-2 text-[20px] md:text-base">
                <div className="bg-white p-3.5 rounded-xl border border-red-200 text-slate-700">
                  <span className="font-bold text-red-600 block mb-1">❌ 自分目線：</span>
                  「趣味は料理で、お料理教室に通っています。栄養バランスを考えた和食や、お菓子作り、パンを焼くことが得意です。」
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-emerald-300 text-slate-700">
                  <span className="font-bold text-emerald-600 block mb-1">⭕️ お相手目線（ここが違う！）：</span>
                  「普段から自炊をしており、冷蔵庫にあるものでパパッとお酒がすすむおつまみや、身体に優しい家庭料理を作ることが得意です。お仕事帰りの彼に『今日もお疲れ様！』と美味しいご飯を出して、一緒にテレビを見ながら笑って過ごす日常に憧れています。」
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: 大手のマニュアル婚活に疲れたあなたへ */}
      <section className="py-8 w-full px-4">
        <div className="max-w-3xl mx-auto w-full">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-5 md:p-7 shadow-sm border border-sky-200/80 space-y-6 w-full">
            <div className="text-center px-2 w-full">
              <h2 className="text-[22px] md:text-2xl font-serif font-bold text-slate-900 tracking-wider">
                大手のマニュアル婚活に疲れたあなたへ
              </h2>
              <p className="text-sky-900 font-bold text-[20px] md:text-lg mt-1">
                大手相談所とここが違います
              </p>
            </div>

<div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl border border-sky-200 shadow-sm my-4">
  <Image
    src="/beginners-support-flow.jpg"
    alt="初心者のサポートフローと相談所の体制図"
    fill
    sizes="(max-width: 768px) 100vw, 800px"
    priority={false}
    className="object-cover"
    placeholder="blur"
    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAAEAAQBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA="

  />
</div>

            <div className="space-y-4 text-[20px] md:text-base text-slate-700 leading-relaxed w-full">
              <p>
                大手の機械的な条件検索や作業のようなお見合いに疲れていませんか？当相談所は、会員数や効率を最優先にする大手とは一線を画します。データやスペックだけで判断するマニュアル婚活は行いません。あなたという「ひとりの人間」の価値観や人柄に深く寄り添います。
              </p>
              <p>
                孤独な作業になりがちな婚活を、温もりのある本物の出会いへ。
              </p>
              <p className="font-bold text-sky-950">
                あなたの魅力を最大限に引き出す完全オーダーメイドでサポートします。心から信頼できるパートナーを、私たちと一緒に見つけませんか？
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Footer */}
      <section id="contact" className="py-10 bg-gradient-to-br from-emerald-100/80 via-emerald-50/70 to-teal-100/80 text-slate-900 text-center px-4 w-full border-t border-emerald-300/80 backdrop-blur-md">
        <div className="max-w-3xl mx-auto space-y-3.5 w-full">
          <h2 className="text-[22px] md:text-xl font-serif font-bold tracking-wider text-emerald-950 w-full">
            まずはお気軽に、カウンセヒングから始めてみませんか？
          </h2>
          <p className="text-slate-700 text-[20px] md:text-sm font-medium leading-relaxed tracking-wide w-full">
            プロフィール作成のコツや、あなたに合った婚活の進め方を丁寧にお伝えします。<br />
            勧誘は一切ありません。公式LINEまたは対面でお待ちしております。
          </p>
 <div className="mt-10">

            <a 
              href="https://lin.ee/ZXB0UNs" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 text-lg font-black text-white shadow-lg transition hover:scale-105 hover:shadow-xl">
              👉 公式LINEで無料相談する
            </a>

            <p className="mt-4 text-sm text-gray-500">
              ※24時間受付・匿名相談OK・プライバシーは完全に保護されます
            </p>

          </div>

        </div>
      </section>

    </div>
  );
}