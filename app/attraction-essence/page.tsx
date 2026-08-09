import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "恋愛初心者がスピード成婚する方法",
  description:
    "大阪梅田のドクターズ結婚相談所は、男性が外見に惹かれた後に内面を見始めるという心理学的アプローチを分析し、婚活において中身を愛させる科学的な戦略を解説しています。自分の内面磨きを通じて、成婚へと導くためのプロの視点を提案します。内面の磨き方に関する詳細な戦略は、大阪梅田ドクターズ結婚相談所のウェブサイトでご確認いただけます。",
  alternates: {
    canonical: "/emotional-maturity",
  },
    authors: [
    { name: "現役の女性内科医師" }, 
    { name: "男性ベテラン仲人" },
  ],
  creator: "大阪梅田ドクターズ結婚相談所",
  publisher: "大阪梅田ドクターズ結婚相談所",
};

export default function EssentialQuestionPage() {
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
                Essential Question #01
              </span>
              <h1 className="text-3xl sm:text-24xl md:text-3xl font-black text-slate-900 leading-snug tracking-tight mb-6">
                男性は女性の外見しか見ない？<br />
                <span className="text-amber-600">大阪梅田ドクターズ結婚相談所の答え</span>
              </h1>
              <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full" />
            </div>

          </div>
        </div>

        {/* --- 導入 & 本文セクション CARD --- */}
        <div className="bg-white/95 backdrop-blur-md shadow-2xl border border-amber-100 rounded-3xl p-6 sm:p-10">
          <h2 className="text-lg sm:text-xl font-black text-slate-900 border-l-4 border-amber-400 pl-3 mb-6 leading-relaxed">
            なぜ男性は「外見」に惹かれないと<br className="sm:hidden" />女性の「中身」を見ないのか？
          </h2>
          
          <div className="bg-amber-50/70 p-5 sm:p-6 rounded-2xl border border-amber-200/60 text-[18px] text-slate-700 leading-relaxed mb-8 shadow-2xs">
            スピード成婚、ハイクラス成婚、真剣婚活を望む女性たちが直面する問題です。<br />
            男性が最初の数秒、視覚情報で相手を識別しているのは進化心理学的な事実です。このシャッターを通過しなければ土俵にすら立てません。<br />
            しかし、男性の脳が惹かれる「外見」とは、単なるパーツとしての顔の美しさ（美人かどうか）だけではありません。
          </div>

          {/* --- 本文セクション --- */}
          <div className="space-y-10 text-[18px] text-slate-700 leading-relaxed">
            
            {/* セクション 1 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-white font-black text-sm shrink-0 shadow-xs">1</span>
                <h3 className="text-[18px] sm:text-lg font-bold text-slate-900">
                  男性の脳が最初の3秒で見ている「外見」の正体
                </h3>
              </div>
              <p className="pl-0 sm:pl-11 space-y-4">
                なぜ見た目にこだわるのか。脳に刻まれた「生存・生殖本能」のせいです。原始の時代から、男性の脳は初対面の女性の「健康状態（生命力の高さ）」を一瞬で嗅ぎ分ける能力を発達させました。<br /><br />
                対面した最初の3秒で、彼らの脳は「肌の質感」「髪のツヤ」「健康的な姿勢」を無意識にスキャンしています。パーツの配置ではなく、その奥にある<strong>「健やかで清潔なエネルギー」</strong>に反応しているのです。<br /><br />
                ブランド物の服や流行のメイクは、男性の古い脳には「ノイズ」として処理され、「お金がかかりそう」「近寄りがたい」という警戒アラートを鳴らさせてしまうので、注意が必要です。
              </p>
            </section>

            <hr className="border-amber-100" />

            {/* セクション 2 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-white font-black text-sm shrink-0 shadow-xs">2</span>
                <h3 className="text-[18px] sm:text-lg font-bold text-slate-900">
                  「外見」とは、最も外側にある内面である
                </h3>
              </div>
              <div className="pl-0 sm:pl-11 space-y-4">
                <p>
                  心理学において、外見とは「最も外側にある内面」と定義されます。<br />
                  写真をみてお見合い自体は成立しているのに、実際会った際に男性が「外見に惹かれない」とお断りする時、彼らは<strong>「表情や佇まいから、ネガティブな内面の状態を察知して拒絶している」</strong>ことも多いです。
                </p>
                <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-200/70 my-4 shadow-2xs">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">✖</span>
                      心の中の「どうせ私なんて」という自己否定感は下がった口角や丸まった背中に現れ、「暗そう」という印象を与えます。
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">✖</span>
                      「品定めしよう」という心は目元の鋭さや不自然な表情となり、男性の脳に「責められそう」「色々求められすぎて、一緒にいるとしんどそう」という恐怖を与えます。
                    </li>
                  </ul>
                </div>
                <p>
                  外見に透けて見える「心のサビ」を検知して、心のシャッターを降ろすのです。<br /><br />
                  男性たちは、お見合いの席で「スマートにエスコートしたい」「楽しい時間を作りあげたい」と様々な理由から緊張を保っています。その空間に、「私はあなたを審査していませんよ」という明るい笑顔や、ゆったりとした肯定的な相槌を持った女性が現れた瞬間、男性の脳は<strong>「この場所は安全だ！」</strong>と強烈な心地よさを覚えます。<br />
                  脳が安全だと確信した男性は、自ら進んであなたの「中身」へと深く潜り込み始めます。
                </p>
              </div>
            </section>

            <hr className="border-amber-100" />

            {/* セクション 3 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-white font-black text-sm shrink-0 shadow-xs">3</span>
                <h3 className="text-[18px] sm:text-lg font-bold text-slate-900">
                  男性が「中身を見るモード」に切り替わるスイッチ
                </h3>
              </div>
              <div className="pl-0 sm:pl-11 space-y-4">
                <p>
                  最初のスタート地点である異性として生命力あふれる魅力的な外見を磨くのはもちろんですが、それだけでは十分ではありません。<br />
                  内面の歪みを排除し、<strong>「魅力的な内面が現れる外見（＝オーラ・雰囲気）」</strong>を保つことです。
                </p>
                <p>
                  輝くような雰囲気をかもしだすのは多くの人には難しく感じるかもしれません。<br />
                  しかし、数多くの成婚を見届けてきた大阪梅田ドクターズ結婚相談所から言わせてください。<br />
                  <strong className="text-amber-700">この世界に、『いいところが1つもない人』なんて、絶対に存在しません。</strong>
                </p>
                <p>
                  人を惹きつける外見としてのオーラ、雰囲気の本質とは、世間が言うような大層なキャリアや、地位だけではないのです。あなたがこれまでの人生のどこかで、誰にも言わずに『少しだけがんばってきた何か』。それこそが、あなたの静かな自信になり、消えないオーラ（魅力）の源泉になります。
                </p>

                {/* 小さながんばりのリスト */}
                <div className="bg-amber-50/80 p-5 rounded-xl border border-amber-200/80 my-4 shadow-xs">
                  <p className="font-bold text-slate-900 mb-3 text-center">
                    あなたの『小さながんばり』の歴史
                  </p>
                  <ul className="text-sm sm:text-[18px] space-y-2 text-slate-700">
                    <li>✨ 休まず仕事にいっていること</li>
                    <li>✨ 職場でいつも自分から挨拶をしてきたこと</li>
                    <li>✨ 健康のために、食事に気を使ってきたこと</li>
                    <li>✨ 小さな嘘をつかずに生きてきたこと</li>
                    <li>✨ 上手くいかないときも誰かのせいにしなかったこと</li>
                    <li>✨ 自分より弱い人に優しくしていること</li>
                    <li>✨ なるべく笑顔でいようと頑張っていること</li>
                  </ul>
                </div>

                <p>
                  他人から見れば、小さくて見過ごされてしまうような『あなたの小さながんばり』。その積み重ね（歴史）こそが、あなたの振る舞いや、お相手の話を聞く眼差し、ふとした時の微笑みに、<strong>独自の温かい『雰囲気』</strong>として必ず現れています。<br /><br />
                  男性が最終的に『この人と一生を共にしたい』と中身に惚れる瞬間とは、あなたが演じた表面的な姿を見た時ではなく、あなたが自分の人生で小さくがんばってきた歴史（いいところ）を、誇らず、でも大切に、等身大で差し出してくれた瞬間です。
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* --- クロージングメッセージ CARD --- */}
        <div className="bg-gradient-to-br from-amber-100/90 via-amber-50/95 to-yellow-100/90 backdrop-blur-md p-6 sm:p-10 border border-amber-200/80 rounded-3xl text-center shadow-2xl">
          <p className="text-[18px] text-slate-800 leading-relaxed max-w-3xl mx-auto font-medium">
            大阪梅田ドクターズ相談所は、人生の本質に向き合い、あなたが自分では気づいていない、あるいは忘れてしまっている『小さながんばり（最高の魅力）』を対話の中から一緒に見つけ出し、それを自信（オーラ）に変えて、お相手に届けるためのパートナーです。
          </p>
          <div className="pt-8">
            <button className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-[18px] font-bold py-4 px-8 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200 cursor-pointer">
              あなたの魅力を引き出す無料相談へ
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}