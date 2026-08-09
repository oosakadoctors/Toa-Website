import { Metadata } from 'next';
import Image from 'next/image';
import femaleAdvisor from "@/public/femaleAdvisor2.jpg";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "価値観の一致で探す人が結婚できない理由と選ぶべき相手",
  description:
    "価値観が一致する人と出会いたいのに結婚できない理由とは？結婚相談所のプロが「価値観の違いやズレへの適応力」という本質を解説。お互いの違いを認め、持続可能な結婚生活を得る、本当に選ぶべきパートナーの選び方・見極め方を解説。",
  alternates: {
    canonical: "/alignment-myth",
  },
  authors: [
    { name: "現役の女性内科医師" }, 
    { name: "男性ベテラン仲人" },
  ],
  creator: "大阪梅田ドクターズ結婚相談所",
  publisher: "大阪梅田ドクターズ結婚相談所",
};

export default function EssentialQuestionPage2() {
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

      {/* --- Main Stacked Cards Container (gaps reveal the background) --- */}
      <div className="max-w-4xl mx-auto space-y-8">
            
        {/* --- ヘッダーセクション CARD --- */}
        <div className="relative bg-white/95 backdrop-blur-md shadow-2xl border border-amber-100 rounded-3xl overflow-hidden">
          <div className="relative p-6 sm:p-10 text-center border-b border-amber-100/60 overflow-hidden">
            
            {/* Frosted Glass Container */}
            <div className="relative z-10 bg-white/85 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/70 shadow-xs max-w-2xl mx-auto">
              <span className="text-xs sm:text-sm font-black text-amber-800 uppercase tracking-widest block mb-2">
                Essential Question #02
              </span>
              <h1 className="text-3xl sm:text-24xl md:text-3xl font-black text-slate-900 leading-snug tracking-tight mb-6">
                「価値観の一致」を探している人が、<br />
                いつまでも結婚できない理由
              </h1>
              <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full" />
            </div>

          </div>
        </div>

        {/* --- 導入 & 本文セクション CARD --- */}
        <div className="bg-white/95 backdrop-blur-md shadow-2xl border border-amber-100 rounded-3xl p-6 sm:p-10 space-y-8 text-[18px] text-slate-700 leading-relaxed">
          
          <div>
            <p className="mb-4">
              「金銭感覚や仕事への価値観が合う人と結婚したい」<br />
              「家事への意識や食の好み、時間や金銭への感覚（価値観）が合う人と結婚したい」など、仕事に頑張り真面目な人ほど失敗を避けようとする気持ちから、価値観の一致を求める傾向があります。
            </p>
            <p className="font-bold text-slate-900 text-lg">
              しかし、ここに最大の盲点があります。心理学や家族関係の研究が示す通り、結婚生活で本当に大切なのは「価値観が合っていること」ではありません。
            </p>
          </div>

          <p>
            そもそも、食の好みや時間の感覚、人生の価値観がピタッと一致する人間など、地球上に存在しません。<br />
            さらに30年、40年と続く日常の中では、転職、出産、子育て、親の介護、老後など、環境の変化によってお互いの価値観は必ず変わっていきます。最初の一致にこだわって相手を選んでも、それは数年で意味を持たなくなります。
          </p>

          <p className="font-bold text-slate-900 text-lg bg-amber-50/70 p-5 rounded-2xl border border-amber-200/60 shadow-2xs">
            では、これらの不一致を抱えながら、なぜ幸せに何十年も続いている夫婦がいるのでしょうか。<br className="hidden sm:inline" />
            家族心理学や行動科学の臨床データが示す、本当の正解を解き明かします。
          </p>

          {/* --- 本質への転換（H2） --- */}
          <section className="space-y-6 pt-4">
            <h2 className="text-lg sm:text-xl font-black text-slate-900 border-l-4 border-amber-400 pl-3 mb-6 leading-relaxed">
              【本質への転換】重要なのは「ズレがないこと」ではなく、ズレを前にした時の『適応力』
            </h2>

            <p>
              本当に長続きする夫婦は、<strong>「お互いに違う考えや習慣を持っていることを、ストレスなくお互いが受け入れて処理できる力」</strong>を持っています。
            </p>
            
            <p>
              日々のズレで生活が破綻してしまう夫婦は、相手に「自分と同じやり方」を強制（期待）しています。「なぜ私と同じように家事をやらないの？」「なぜ私と同じ趣味を楽しまないの？」という、同質化の要求がストレスを生むのです。
            </p>

            <p>
              一方で、激変する時代を生き抜く最強のバディ（相棒）になれる夫婦は、日々の不一致を以下のように<strong>「軽やかに切り離して適応」</strong>しています。
            </p>

            {/* リストスタイル */}
            <div className="bg-amber-50/70 p-5 sm:p-6 rounded-2xl border border-amber-200/60 shadow-2xs space-y-5">
              <div>
                <span className="font-bold text-slate-900 block text-base sm:text-lg mb-1">🧹 家事のズレ</span>
                <p className="pl-4 border-l-2 border-amber-400 text-slate-700">やり方の違いにイライラするくらいなら、最初から自分でしたり、足りない部分は完璧を求めず、楽観的にとらえ、お互いを責めない仕組みに変える。</p>
              </div>

              <div>
                <span className="font-bold text-slate-900 block text-base sm:text-lg mb-1">🍳 食のズレ</span>
                <p className="pl-4 border-l-2 border-amber-400 text-slate-700">無理に同じものを食べず、「平日の夜はそれぞれ好きなものを食べる、週末の1食だけ美味しいものを一緒に楽しむ」と、食卓をイベント化する。</p>
              </div>

              <div>
                <span className="font-bold text-slate-900 block text-base sm:text-lg mb-1">⏳ 共有時間のズレ</span>
                <p className="pl-4 border-l-2 border-amber-400 text-slate-700">相手が1人でいたい時は「今はチャージ中だね」とそっとしておき、自分も自分の趣味に没頭できる、心地よい他人の距離感を維持できる。</p>
              </div>

              <div>
                <span className="font-bold text-slate-900 block text-base sm:text-lg mb-1">💼 仕事や子育てに関する考えのズレ</span>
                <p className="pl-4 border-l-2 border-amber-400 text-slate-700">お互いの考えのいい所を取り入れながら相談したり、相手の考えを尊重し、許容していく。</p>
              </div>
            </div>
          </section>

          <hr className="border-amber-100" />

          {/* --- 一言メッセージ 🩷 --- */}
          <div className="bg-white/90 p-6 rounded-2xl border border-amber-200/70 shadow-sm max-w-xl mx-auto">
            <div className="mb-3 text-center">
              <span className="text-xs sm:text-sm font-bold text-amber-800 uppercase tracking-wider block">
                キャリアカウンセラー / ライフコーチ
              </span>
            </div>

            <div className="pt-4 border-t border-amber-100 flex items-start gap-4">
              <div className="shrink-0">
                <Image
                  src={femaleAdvisor}
                  alt="アドバイザー"
                  width={64}  
                  height={64}
                  className="rounded-full object-cover border-2 border-amber-200 shadow-xs"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-lg">🩷</span>
                  <span className="font-bold text-slate-900 text-base">一言メッセージ</span>
                </div>
                <p className="text-slate-700 text-base leading-relaxed">
                  真面目な人は【選択にゼロか1】しかないことが多いです。要は、固定観念にしばられないことが大切。人生の答えは一つではありません。
                </p>
              </div>
            </div>
          </div>

          {/* --- ポスト形式的思考への誘導 --- */}
          <div className="text-center pt-2">
            <Link 
              href="/emotional-maturity#consider"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-[18px] w-full max-w-md mx-auto py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
            >
              <span>ポスト形式的思考とは？を詳しく見る➡</span>
            </Link>
          </div>

          <hr className="border-amber-100" />

          {/* --- 結婚の定義 --- */}
          <section className="space-y-4 pt-2">
            <h3 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
              💍 大阪梅田ドクターズ結婚相談所が考える「結婚の定義」
            </h3>
            <p>
              結婚とは、1つの人格に溶け合うことではありません。<br />
              <strong>「全く違う2つの個性が、お互いの領分を侵さずに、同じ屋根の下で機嫌よく並走するための共同プロジェクト」</strong>です。
            </p>
            <p className="font-bold text-slate-900 pt-2 bg-amber-50/50 p-4 rounded-xl border border-amber-100">
              「違っていて当たり前。だったら、お互いが一番ラクなルートを作ろう」とお互いが笑って言える相手。それこそが、持続可能な結婚生活をもたらし、本当に選ぶべきパートナーとなるでしょう。
            </p>
          </section>

        </div>

        {/* --- クロージングメッセージ / CTA CARD --- */}
        <div className="bg-gradient-to-br from-amber-100/90 via-amber-50/95 to-yellow-100/90 backdrop-blur-md p-6 sm:p-10 border border-amber-200/80 rounded-3xl text-center shadow-2xl">
          <div className="pt-2">
            <button className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-[18px] font-bold py-4 px-8 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200 cursor-pointer">
              柔軟な視点でパートナーを探す、無料相談はこちら
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}