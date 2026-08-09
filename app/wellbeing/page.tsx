import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "真の幸せを手に入れるために必要なもの",
  description:
    "幸福の本質は「自分の意思で積み重ねてきた歴史」の先にあります。外側の条件や他人の評価に振り回されない確固たる幸福を掴むために必要な、3つの本質的な土台（居場所・目的・自由）を大阪梅田ドクターズ結婚相談所が解き明かします。",
  authors: [
    { name: "現役の女性内科医師" }, 
    { name: "男性ベテラン仲人" },
  ],
  creator: "大阪梅田ドクターズ結婚相談所",
  publisher: "大阪梅田ドクターズ結婚相談所",
};

export default function TrueHappinessAnalysis() {
  return (
    <div className="relative min-h-screen w-full py-10 sm:py-16 px-4 overflow-hidden font-medium">
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
                Essential Question #05
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-snug tracking-tight mb-6">
                真の幸せを手に入れるために必要なもの。<br />
                幸せの正体とは？人生を満たす<br />
                <span className="text-amber-600">「3つの要素」の重なり</span>
              </h1>
              <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full" />
            </div>

          </div>
        </div>

        {/* --- 導入 & 本文セクション CARD --- */}
        <div className="bg-white/95 backdrop-blur-md shadow-2xl border border-amber-100 rounded-3xl p-6 sm:p-10">
          <h2 className="text-lg sm:text-xl font-black text-slate-900 border-l-4 border-amber-400 pl-3 mb-6 leading-relaxed">
            幸福の本質は「自分の意思で<br className="sm:hidden" />積み重ねてきた歴史」の先にある
          </h2>
         
          <div className="bg-amber-50/70 p-5 sm:p-6 rounded-2xl border border-amber-200/60 text-[18px] text-slate-700 leading-relaxed mb-8 shadow-2xs space-y-4">
            <p>
              「幸せになりたい」。これは、あらゆる時代や環境において、私たち人間が共通して抱く究極の願いです。では、その「幸せ」の具体的な正体とは一体何でしょうか。
            </p>
            <p>
              数多くの人間関係や人生の節目、精度高い成婚の現場に立ち会ってきた私たち（大阪梅田ドクターズ結婚相談所）は、幸福とは日々の日常の中で<strong>「自分の意思で経験を積み重ねてきた歴史」の先にあるもの</strong>だと確信しています。
            </p>
            <p>
              人間が内側から満たされ、誰にも真似できない穏やかで深い大人のオーラを放っているとき、そこには必ず<strong>「居場所」「目的」「自由」</strong>という3つの本質的な要素が、完璧な三位一体として揃っています。
            </p>
            <p>
              あなたがあなた自身の人生を肯定し、真の幸福を手に入れるために「3つの必要な土台」を、ここにストレートに解き明かします。
            </p>
          </div>

          {/* --- 本文セクション --- */}
          <div className="space-y-10 text-[18px] text-slate-700 leading-relaxed">
           
            {/* セクション 1 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-white font-black text-sm shrink-0 shadow-xs">1</span>
                <h3 className="text-[18px] sm:text-lg font-bold text-slate-900">
                  自分が必要とされる「自分の居場所」があること
                </h3>
              </div>
              <div className="pl-0 sm:pl-11 space-y-4">
                <p>
                  人間が幸せを感じるための第1の土台は、「自分が必要とされる居場所があること」です。これは、単にどこかの組織や家庭に籍を置いているという形式的な話ではありません。自分の存在が何かの役に立ち、<strong>「存在意義」を実感できる心の拠り所</strong>のことです。
                </p>
                <p>
                  この大切な居場所は、天から突然降ってくるものではありません。あなたがこれまでの日常の中で、小さながんばりを重ねて築いてきたものです。あなたの行動の積み重ねが、あなたの居場所を形作っています。
                </p>
                <p>
                  「いいところがない人なんて、この世に一人も存在しない」という前提で、自分のこれまでの行動を認めた時、この居場所は揺るぎない自信へと変わります。「誰かや社会に必要とされている」という確信があるからこそ、自分を尊び、周囲の人を包み込むような、優しく温かい雰囲気を自然と放つようになるのです。
                </p>
              </div>
            </section>

            <hr className="border-amber-100" />

            {/* セクション 2 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-white font-black text-sm shrink-0 shadow-xs">2</span>
                <h3 className="text-[18px] sm:text-lg font-bold text-slate-900">
                  したいと思う「何か」があること
                </h3>
              </div>
              <div className="pl-0 sm:pl-11 space-y-4">
                <p>
                  第2の要素は、「心の奥底から『したい』と思える、自発的な何か（目的や情熱）を胸に持っていること」です。「やらなければならない義務」や、他人に自慢するための「条件としての目標」ではなく、自分の内側からピュアに湧き出る「もっと知りたい」「これを楽しみたい」という、<strong>純粋な向上心や知的好奇心</strong>のことを指します。
                </p>
                <p>
                  人生を生き生きと楽しんでいる人は、常にどんなに小さなことでも「したいこと」に向かって進んでいます。それは決して大きな目標だけではありません。
                </p>

                <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-200/70 my-4 shadow-2xs italic text-slate-600 space-y-1">
                  <p>「今週末のデートのために、相手が喜びそうな美味しいお店をがんばって調べてみる」</p>
                  <p>「自分のこれからの健康のために、少しだけ食事にこだわってみる」</p>
                </div>

                <p>
                  こうした「小さくてもしたいこと」へ向かって一歩を踏み出して行動している時間そのものが、人間の生命力を最も高い次元で活性化させます。
                </p>
                <p>
                  より良い自分や未来を目指して進むエネルギーがあるとき、人の眼差しには輝きが宿り、佇まいには知性と洗練された美しさが現れます。魅力の大小を他人と比べる必要など一切ありません。自分の内なる「したい」に純粋に向き合い、そのプロセスをがんばっている瞬間こそが、人間を最も内側から満たしてくれる幸せの源泉なのです。
                </p>
              </div>
            </section>

            <hr className="border-amber-100" />

            {/* セクション 3 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-white font-black text-sm shrink-0 shadow-xs">3</span>
                <h3 className="text-[18px] sm:text-lg font-bold text-slate-900">
                  それができる「健康や環境などの自由」があること
                </h3>
              </div>
              <div className="pl-0 sm:pl-11 space-y-4">
                <p>
                  そして、これらすべての幸福を作動させるための最後の決定的な要素が、「それらを実行に移すことができる、健康や環境という名の『自由』を持っていること」です。どれほど温かい居場所があり、胸に秘めたやりたいことがあっても、自分の意思で選択することを阻まれる不自由な環境に縛られていては、幸福を実現することはできません。
                </p>
                <p>
                  この<strong>【健康】という尊い土台を維持し、【環境】を守り、自分の意思で次の選択肢を選べる状態（精神的自立）を確保している</strong>からこそ、人間は本当の意味で「自由」を謳歌できます。
                </p>
                <div className="bg-amber-50/80 p-5 rounded-xl border border-amber-200/80 my-4 text-center shadow-xs">
                  <span className="font-bold text-slate-900 block">
                    「必要とされる居場所」 × 「したいと思う何か」 × 「それを叶える自由」
                  </span>
                </div>
                <p>
                  この3つの要素がピタリと重なったとき、人は外側の条件や他人の評価に一切振り回されない、確固たる幸福と、圧倒的に美しい佇まいを手に入れることができるのです。
                </p>
              </div>
            </section>

          </div>
        </div>

        {/* --- ベテランカウンセラーからのメッセージ CARD --- */}
        <div className="bg-white/95 backdrop-blur-md shadow-2xl border border-amber-100 rounded-3xl p-6 sm:p-10">
          <div className="max-w-4xl mx-auto">
            
            {/* カウンセラー画像（フロート配置） */}
            <div className="float-right ml-4 mb-2 sm:ml-6 sm:mb-4 relative w-20 h-20 sm:w-28 sm:h-28">
              <Image 
                src="/maleAdvisor2.jpg" 
                alt="ベテランカウンセラー" 
                width={421}
                height={421}
                className="rounded-full object-cover border-2 border-amber-200 shadow-sm w-full h-full"
              />
            </div>
            
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">💙</span>
              <h3 className="text-lg sm:text-xl font-black text-slate-900">ベテランカウンセラーからのメッセージ</h3>
            </div>

            <div className="text-[18px] text-slate-700 space-y-4 leading-relaxed">
              <p className="font-bold text-slate-900">
                社会で毎日頑張っている皆様へ。
              </p>
              <p>
                今、婚活という新しいフィールドでさらに人生の次のステージに向かおうとしていることと思います。
              </p>
              <p>
                ご自身の大切なパートナーとの家庭を得ることで、恋愛だけのパートナーとは違う深いつながりを得ることでしょう。結婚は<strong>【1人のパートナーと一生を共にする】という決断</strong>でもあるので、覚悟を決めた先に、さらなる深いつながりとあなたの居場所ができると思います。
              </p>
              <p>
                【結婚】という形により、あなたとパートナーを社会が支えてくれるはずです。与えあい、支えあい、笑い、時にはケンカもしながら、誰かと歩む人生、ご家族のために生きる人生の喜びを得ることを願っています。
              </p>
              <p>
                婚活の道のりは必ずしもうまくいく瞬間ばかりではありませんが、その中、自分を見つめて努力した経験は、将来きっとあなたの礎となり、あなたを成長させてくれることと思います。深みある人間に成長し、温かみを持ち、未来を支えてくれることを心から願っています。
              </p>
              <p className="font-bold text-amber-700 pt-2">
                あなたより少し先を生きている私の経験の全てを、大阪梅田ドクターズ結婚相談所でお伝えしたいと思います。私たちの気持ちに共感していただけるかたの入会をお待ちしています。
              </p>
            </div>
          </div>
        </div>

        {/* --- クロージングメッセージ（CTA CARD） --- */}
        <div className="bg-gradient-to-br from-amber-100/90 via-amber-50/95 to-yellow-100/90 backdrop-blur-md p-6 sm:p-10 border border-amber-200/80 rounded-3xl text-center shadow-2xl space-y-6">
          <p className="text-[18px] text-slate-800 leading-relaxed max-w-3xl mx-auto font-medium">
            3つの土台を共に築き、外側の条件に左右されない本質的な幸福を掴むために。<br className="hidden sm:inline" />
            大阪梅田ドクターズ結婚相談所があなたの婚活を伴走します。
          </p>

          <div className="pt-2">
            <button className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-[18px] font-bold py-4 px-8 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200 cursor-pointer">
              3つの土台を共に築く、無料カウンセリングはこちら
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}