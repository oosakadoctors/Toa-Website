import React from 'react';
import Link from 'next/link';
import { 
  Heart, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react';
import type { Metadata } from 'next';

// ==========================================
// 1. ページ全体のSEO用メタデータ設定 (Server Side)
// ==========================================
export const metadata: Metadata = {
  title: "いい人どまり卒業のヒント",
  description:
    "結婚相談所でいい人どまりを卒業！お見合いで断られる理由と、魅力的な異性になる3つの内面アプローチを解説。万人受けの婚活をやめ、特別感・母性父性・支える覚悟のバイタリティで最愛の1人に選ばれる心の仕組みを大阪梅田のドクターズ結婚相談所が伝授。",
  
  keywords: [
    "いい人どまり 卒業",
    "結婚相談所 選ばれる",
    "異性的魅力",
    "婚活 心理学",
    "包容力 夫婦",
    "大阪梅田 結婚相談所",
    "ドクターズ結婚相談所"
  ],

  authors: [
    {
      name: "現役女医（大阪梅田ドクターズ結婚相談所監修）",
    },
    {
      name: "キャリアカウンセラー / ライフコーチ",
    },
  ],

  alternates: {
    canonical: "/essential-question-6", 
  },

  openGraph: {
    title: "いい人どまりを卒業！結婚相談所でたった一人に選ばれる3つの異性的魅力",
    description: "結婚とは100人にモテるゲームではなく、最愛のたった一人との間に需要と供給を成立させる営み。無難な婚活を卒業するためのアプローチを解説。",
    type: "article",
    locale: "ja_JP",
    siteName: "大阪梅田ドクターズ結婚相談所",
    url: "/essential-question-6",
  },

  twitter: {
    card: "summary_large_image",
    title: "いい人どまりを卒業！結婚相談所でたった一人に選ばれる3つの異性的魅力",
    description: "あなたの内側にある優しさを「特別感」「母性・父性」「支える覚悟」に変える、心理学に基づいた成婚戦略。",
  },
};

// ==========================================
// 2. メインコンポーネント
// ==========================================
export default function EssentialInquirySix() {

  // 構造化データ (JSON-LD) の定義
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    'headline': 'いい人どまりを卒業！結婚相談所でたった一人に選ばれる「3つの異性的魅力」',
    'description': 'いつも「良い人だけど……」とお断りされてしまう悩みを抱える婚活者へ。万人受けの無難なマナーを捨て、最愛のたった一人に向けて「特別感」「母性・父性」「支える覚悟」を届ける心理学的アプローチを解説。',
    'datePublished': '2026-07-20T12:00:00+09:00',
    'author': [
      {
        '@type': 'Person',
        'name': '現役女医（大阪梅田ドクターズ結婚相談所監修）',
        'jobTitle': 'Medical Doctor'
      },
      {
        '@type': 'Person',
        'name': 'キャリアカウンセラー / ライフコーチ',
        'jobTitle': 'Life Coach / Career Counselor'
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
    <div className="relative min-h-screen w-full py-10 sm:py-16 px-4 overflow-hidden font-medium">
      {/* 構造化データを注入 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* --- Full Page Background Image --- */}
      <img
        src="/lemons2.jpg"
        alt="Lemon background"
        className="fixed inset-0 w-full h-full object-cover object-center -z-10"
      />
     
      {/* Light Overlay for Contrast */}
      <div className="fixed inset-0 bg-amber-50/20 backdrop-blur-[2px] -z-10" />

      {/* --- Main Stacked Cards Container (gaps reveal the background) --- */}
      <div className="max-w-4xl mx-auto space-y-8">
            
        {/* --- ヘッダーセクション CARD --- */}
        <div className="relative bg-white/95 backdrop-blur-md shadow-2xl border border-amber-100 rounded-3xl overflow-hidden">
          <div className="relative p-6 sm:p-10 text-center border-b border-amber-100/60 overflow-hidden">
           
            {/* Frosted Glass Container */}
            <div className="relative z-10 bg-white/85 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/70 shadow-xs max-w-2xl mx-auto">
              <span className="text-xs sm:text-sm font-black text-amber-800 uppercase tracking-widest block mb-2">
                Essential Inquiry #06
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-snug tracking-tight mb-6">
                いい人どまりを卒業！<br />
                結婚相談所でたった一人に選ばれる<br />
                <span className="text-amber-600">「3つの異性的魅力」</span>
              </h1>
              <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full" />
            </div>

          </div>
        </div>

        {/* --- 導入 & 本文セクション CARD --- */}
        <div className="bg-white/95 backdrop-blur-md shadow-2xl border border-amber-100 rounded-3xl p-6 sm:p-10">
          <h2 className="text-lg sm:text-xl font-black text-slate-900 border-l-4 border-amber-400 pl-3 mb-6 leading-relaxed">
            なぜ「いい人」のままでは<br className="sm:hidden" />最愛の人の特別になれないのか？
          </h2>
         
          <div className="bg-amber-50/70 p-5 sm:p-6 rounded-2xl border border-amber-200/60 text-[18px] text-slate-700 leading-relaxed mb-8 shadow-2xs space-y-4">
            <p>
              いつも「良い人だけど……」とお断りされてしまう。そう悩むあなたは、万人受けを狙って「無難な婚活」をしていませんか？
            </p>
            <p>
              結婚とは100人にモテるゲームではなく、最愛のたった一人との間に「Need（需要）とSeed（供給）」を成立させる営みです。誰に対しても80点の気遣いをする「いい人」のままでは、異性としての強烈な魅力は生まれません。
            </p>
            <p>
              退屈な「良い人どまり」を卒業し、魅力的な異性へとレベルアップする鍵は、小手先のモテテクニックではありません。あなたの内側にある優しさを、最愛のたった一人に向けて<strong className="text-amber-800">【特別感】【母性・父性】【支える覚悟】</strong>という3つの能動的なバイタリティ（生命力）として集中アプローチすることです。
            </p>
            <p>
今回は、大阪梅田のドクターズ結婚相談所が、自分の人生を主役として生き、一生のパートナーから魅力的な異性として選ばれるための「婚活のアプローチ方法」を心理学の視点から解説します。            </p>
          </div>

          {/* --- 本文セクション --- */}
          <div className="space-y-10 text-[18px] text-slate-700 leading-relaxed">
           
            {/* セクション 1 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-white font-black text-sm shrink-0 shadow-xs">1</span>
                <h3 className="text-[18px] sm:text-lg font-bold text-slate-900">
                  【あなただけが大好き🩷】の熱烈アピール：全エネルギーの集中
                </h3>
              </div>
              <div className="pl-0 sm:pl-11 space-y-4">
                <p>
                  いい人は「嫌われたくない」ので、誰に対しても80点のマナーで接します。しかし、選ばれる人は、目の前の一人の相手に対して「私は他の誰でもない、あなたに強烈に惹かれている」というエネルギー（熱意）を、強く放ちます。
                </p>
                <p>
                  万人受けを狙う気持ちを捨てて、「あなたと居るのが楽しい」「あなたとこれからも過ごしたい」と、好意をストレートに伝えることです。この「あなただけ」という特別感が、<strong>【こんなに好きって熱烈に言ってくれる人はいない。この人となら…】</strong>とお相手の気持ちを動かします。
                </p>
                <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-200/70 my-4 shadow-2xs">
                  <span className="font-bold text-amber-800 block mb-1">💙 一言メッセージ</span>
                  <p className="text-slate-700">
                    人間関係では先にアプローチする方がエネルギーが要ります。そのエネルギーをあえて先に払いましょう！男女ともに待ってるだけでは道は開きません。
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-amber-100" />

            {/* セクション 2 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-white font-black text-sm shrink-0 shadow-xs">2</span>
                <h3 className="text-[18px] sm:text-lg font-bold text-slate-900">
                  【母性・父性】をアピール：全てを受け入れる包容力
                </h3>
              </div>
              <div className="pl-0 sm:pl-11 space-y-4">
                <p>
                  いい人の優しさは、表面的な気遣い（料理をとり分ける、話を聞くなど）だけになりがちです。しかし、本当に異性として人を惹きつけるのは、相手の不完全さや格好悪さを全て、<strong>「包み込むような母性・父性（圧倒的な包容力）」</strong>です。
                </p>
                <p>
                  母性・父性を放てる人は、相手が落ち込んだり、失敗したとき、「あ、この人頼りないな」と減点せずに、「そんなところも人間らしくて愛おしい。大丈夫、私がいるよ」と丸ごとホールドします。この「相手の不完全さを、自分のバイタリティで包み込む強さ」に、異性は生涯を共にするパートナーとしての深い安心と絆を感じます。
                </p>

                <div className="bg-amber-50/80 p-5 rounded-xl border border-amber-200/80 my-4 shadow-xs space-y-3">
                  <span className="font-bold text-amber-800 block">💙 一言メッセージ</span>
                  <p className="text-slate-700">
                    母性や父性とはお相手に対して【「どれだけ相手のダメなところや違いを笑って許せるか」という『許容範囲の広さ（器の大きさ）』】そのものです。【少しお相手に優しくしよう】と意識すれば、許せる事が増えるかもしれませんね。
                  </p>
                  
                  <div className="pt-2 border-t border-amber-200/60 flex flex-wrap items-center justify-between gap-2">
                    <span className="text-sm font-bold text-slate-600">
                      【正解は一つではないの考え】も参考にしてくださいね
                    </span>

                    <Link
                      href="/emotional-maturity#consider"
                      className="inline-flex items-center gap-1 bg-white hover:bg-amber-50 text-amber-700 text-sm font-bold px-3 py-1.5 rounded-lg border border-amber-200 transition-colors shadow-2xs"
                    >
                      <span>【ポスト形式的思考】を詳しくみる</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-amber-100" />

            {/* セクション 3 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-white font-black text-sm shrink-0 shadow-xs">3</span>
                <h3 className="text-[18px] sm:text-lg font-bold text-slate-900">
                  【あなたを支える意思】をアピール：人生の同志となる覚悟
                </h3>
              </div>
              <div className="pl-0 sm:pl-11 space-y-4">
                <p>
                  「選ばれる」という受け身を捨て、「あなたの人生の重荷を、私も一緒に背負う覚悟がある」という気持ちをアピールすることです。「私を幸せにして」という依存でも、「あなたの色に染まります」という同調でもありません。
                </p>
                <p>
                  「あなたの仕事にかける想いや、あなたが大切にしている人生を、私は全力で支えたいし、一緒に頑張りたい」という明確な意思表示です。
                </p>
                <p>
                  特に多忙なキャリア層や、孤独を抱える現代の男女にとって、この「支えるアピール」は、単なる良い人を超えた<strong>「人生を賭けるに値する存在」</strong>へと格上げされる決定的な理由になります。
                </p>
              </div>
            </section>

          </div>
        </div>

        {/* --- クロージングメッセージ CARD --- */}
        <div className="bg-gradient-to-br from-amber-100/90 via-amber-50/95 to-yellow-100/90 backdrop-blur-md p-6 sm:p-10 border border-amber-200/80 rounded-3xl text-center shadow-2xl space-y-6">
          <Heart className="w-8 h-8 text-amber-600 mx-auto" />
          
          <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-relaxed">
            結婚に必要なのは、100人に好かれる器用さではなく、<br className="hidden sm:inline" />
            たった一人に覚悟を決めて放つ意思表示です。
          </h3>

          <p className="text-[18px] text-slate-800 leading-relaxed max-w-3xl mx-auto font-medium">
            【私はあなたを支える】【あなたと一緒に居たい】と放つ、気持ちの強さ。当相談所では、あなたの優しい内面を、最愛の一人に深く刺さる『強烈な引力』へと変えるサポートをします。
          </p>

          <div className="bg-white/80 border border-amber-200/70 rounded-2xl p-4 max-w-xl mx-auto text-slate-700 text-sm sm:text-[16px] shadow-2xs">
            <span className="font-bold text-amber-800 block mb-1">🩷 一言メッセージ</span>
            誰と一緒にいたいか？どんな人と未来を築きたいか？が決まっていない場合は、まずそこから考えてみましょう！
          </div>

          <div className="pt-2">
            <button className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-[18px] font-bold py-4 px-8 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200 cursor-pointer">
              あなたの魅力を引き出す無料相談へ
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}