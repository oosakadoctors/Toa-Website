import { Metadata } from "next";
import femaleAdvisor from "@/public/femaleAdvisor.jpg";
import Image from "next/image";
import { Sparkles, CheckCircle2, UserCheck, Heart, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "婚活でいい人が減った？」と思い始めた30代のあなたへ｜大阪梅田ドクターズ結婚相談所が効率的な理由",
  description:
    " 「大阪梅田で確実な未来への投資として婚活を始める男女へ。医師・経営者・公務員などのハイステータス層や、女医の人脈を活かした、育ちの良い男女が集まる大阪梅田ドクターズ結婚相談所への入会はスピード婚への効率的な選択肢の一つであることを解説",
  alternates: {
    canonical: "/consider",
  },
};

export default function MarriageAdvicePage() {
  return (
    <main className="bg-[#faf8f5] min-h-screen text-base leading-relaxed">
      
      {/* ============================================================
          HERO BANNER HEADLINE (Middle-Ground Magenta-Rose Gradient)
          ============================================================ */}
      <section 
        className="relative w-full py-12 px-4 sm:px-6 lg:px-8 border-b border-rose-200/50 overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, rgba(255, 0, 127, 0.25) 0%, rgba(255, 102, 178, 0.2) 50%, rgba(255, 166, 201, 0.25) 100%)' 
        }}
      >
        {/* Ambient Radiant Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-72 h-72 bg-[#FF007F]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-72 h-72 bg-[#FFA6C9]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center space-y-4">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-[#FF007F]/30 text-[#D9006C] px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#FF007F] shrink-0" />
            <span>30代女性のスマート婚活</span>
          </div>
          
          {/* Main Headline */}
          <h1 
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-black leading-snug sm:leading-tight tracking-tight text-balance max-w-3xl pt-1 [text-shadow:_0_0_8px_#ffffff,_0_0_16px_#ffffff,_0_0_24px_rgba(255,255,255,0.8)]"
            style={{ wordBreak: 'auto-phrase' }}
          >
            笑顔の可愛い最高の男性が惹かれる高いＥＱ
          </h1>
          
          {/* Subtitle / Doctor Tagline */}
          <p 
            className="text-base font-bold text-gray-800 pt-1 leading-relaxed text-balance [text-shadow:_0_0_8px_#ffffff]"
            style={{ wordBreak: 'auto-phrase' }}
          >
            「女医×20年のベテラン」が、あなたの幸せな結婚まで完全伴走。
          </p>

          {/* Matching Gradient Divider Bar */}
          <div className="flex items-center justify-center gap-2 pt-1 pb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF007F]" />
            <div 
              className="w-24 h-1 rounded-full shadow-xs" 
              style={{ background: 'linear-gradient(90deg, #FF007F 0%, #FF66B2 50%, #FFA6C9 100%)' }}
            />
            <div className="w-1.5 h-1.5 rounded-full bg-[#FFA6C9]" />
          </div>

          {/* Checklist Box */}
          <div className="w-full text-left rounded-2xl border border-rose-200/60 bg-white/85 backdrop-blur-md p-6 sm:p-8 shadow-sm">
            <p 
              className="text-base font-black text-[#D9006C] uppercase tracking-wider mb-4 flex items-center gap-2 text-balance"
              style={{ wordBreak: 'auto-phrase' }}
            >
              <CheckCircle2 className="w-5 h-5 text-[#FF007F]" />
              【チェックリスト】（当てはまるものはありますか？）
            </p>
            <ul className="grid gap-3 sm:gap-4 text-base text-gray-800 font-medium">
              {[
                "30歳を迎えて、そろそろ真剣に将来を考え始めた",
                "身元が確かで、嘘のない「誠実で優しい人」と出会いたい",
                "お互いを尊敬できる、少し格上の男性と温かい家庭を築きたい",
                "ドクターズ相談所は敷居が高そうだけど、実はちょっと気になる",
                "恋愛経験が少なめだから、プロにしっかりサポートしてほしい",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 group">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF007F]/10 text-[#FF007F] font-black text-xs border border-[#FF007F]/20 group-hover:bg-[#FF007F] group-hover:text-white transition-colors mt-0.5">
                    ✓
                  </span>
                  <span className="leading-relaxed" style={{ wordBreak: 'auto-phrase' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section Callout Card */}
          <div className="w-full text-left mt-6 rounded-3xl border border-rose-200/80 bg-white/90 backdrop-blur-md p-6 sm:p-10 shadow-md">
            <h2 
              className="text-lg sm:text-2xl font-black text-gray-900 leading-snug text-balance"
              style={{ wordBreak: 'auto-phrase' }}
            >
              「大人のスマートな優しさに、少年のような可愛い笑顔。あなたがあっと探していた『最高の男性』に出会いませんか？」
            </h2>

            <div className="mt-6 space-y-4 text-base text-gray-700 leading-relaxed font-medium">
              <p style={{ wordBreak: 'auto-phrase' }}>
                仕事もプライベートも、自分なりに頑張ってきた30代女性のあなたへ。
              </p>
              <p style={{ wordBreak: 'auto-phrase' }}>
                「一緒にいて心が満たされ、お互いを心からリスペクトし合えるスマートな男性」こそが、あなたが本当に隣にいてほしい理想のパートナーではないでしょうか？
              </p>
              <p style={{ wordBreak: 'auto-phrase' }}>
                スマートなエスコート力と少年のようなピュアな笑顔を兼ね備えた魅力的な男性との出会いを、大阪梅田ドクターズ結婚相談所が全力でプロデュースします！
              </p>
              <p className="text-gray-900 font-bold" style={{ wordBreak: 'auto-phrase' }}>
                当相談所には、経済的にも精神的にも自立し、大人の包容力を持ちながらも、パートナーの前ではチャーミングな一面を見せてくれる上質な男性たちが集まっています。
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="mt-8 pt-8 border-t border-rose-100">
              <p 
                className="text-base font-black text-[#D9006C] mb-6 flex items-center gap-2 text-balance"
                style={{ wordBreak: 'auto-phrase' }}
              >
                <Sparkles className="w-5 h-5 text-[#FF007F]" />
                【あなたがときめくスマートな男性】
              </p>

              <div className="grid gap-6 md:grid-cols-3">
                
                {/* Feature 1 */}
                <div className="rounded-2xl border border-rose-100 bg-gradient-to-b from-white to-rose-50/50 p-5 shadow-xs">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-sky-50 text-sky-600 border border-sky-100">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <h3 
                      className="font-black text-base text-gray-900 text-balance"
                      style={{ wordBreak: 'auto-phrase' }}
                    >
                      スマートなエスコートと大人余裕
                    </h3>
                  </div>
                  <p className="text-base text-gray-600 leading-relaxed" style={{ wordBreak: 'auto-phrase' }}>
                    お見合いの席や梅田でのデートでも、さりげなくリード。お店の予約から歩くペースの配慮まで心地よい空間を作る。「大切にされる安心感」を最初の1秒から実感させてくれます。
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="rounded-2xl border border-rose-100 bg-gradient-to-b from-white to-pink-50/50 p-5 shadow-xs">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-pink-50 text-pink-600 border border-pink-100">
                      <Heart className="w-5 h-5" />
                    </div>
                    <h3 
                      className="font-black text-base text-gray-900 text-balance"
                      style={{ wordBreak: 'auto-phrase' }}
                    >
                      少年のような「愛され笑顔」
                    </h3>
                  </div>
                  <p className="text-base text-gray-600 leading-relaxed" style={{ wordBreak: 'auto-phrase' }}>
                    仕事中は頼もしいビジネスパーソン。だからこそ見せるキュートな笑顔のギャップに胸が高鳴ります。あなただけに素直な表情を見せるからこそ、ありのままの自分でいられます。
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="rounded-2xl border border-rose-100 bg-gradient-to-b from-white to-purple-50/50 p-5 shadow-xs">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-purple-50 text-purple-600 border border-purple-100">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h3 
                      className="font-black text-base text-gray-900 text-balance"
                      style={{ wordBreak: 'auto-phrase' }}
                    >
                      対等に寄り添う包容力
                    </h3>
                  </div>
                  <p className="text-base text-gray-600 leading-relaxed" style={{ wordBreak: 'auto-phrase' }}>
                    30代女性のキャリアやライフスタイルを誰よりも応援。「頑張ってて偉いね」と優しく話を聴いてくれる知性と精神的スマートさに、生涯を共にする安心感を得られます。
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="w-full">
        <div className="w-full max-w-4xl mx-auto my-1">
          <div className="relative w-full aspect-[1/1] overflow-hidden rounded-2xl shadow-md">
            <Image
              src="/umeda-highclass-kekkon-eq-male.jpg"
              alt="高いEQと包容力を持つ誠実なエリート男性の笑顔。魅力的なハイクラス層から選ばれるための内面磨きを解説するイメージ"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              priority={false}
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAAEAAQBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA="
            />
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="mx-auto max-w-3xl px-4 py-6">

        {/* Intro Card (H2 & Main Text Section) */}
        <section className="mt-5 rounded-2xl bg-white border border-pink-200 p-5 shadow-sm">

          <h2 
            className="text-xl font-bold text-gray-900 leading-snug border-b border-pink-100 pb-3 text-balance"
            style={{ wordBreak: 'auto-phrase' }}
          >
            タイパ至上主義！30代の婚活に大阪・梅田の結婚相談所が最強に効率的な理由
          </h2>

          <div className="mt-5 space-y-4 text-base leading-relaxed text-gray-700">

            <h3 
              className="text-lg font-bold leading-relaxed text-gray-900 text-balance"
              style={{ wordBreak: 'auto-phrase' }}
            >
              20代の頃は普通に生活しているだけで「素敵だな」と思える人に出会えていたはず。なのに、30代になった途端、周りの素敵な人は、みんな「既婚者」になっている。
            </h3>

            <p style={{ wordBreak: 'auto-phrase' }}>
              マッチングアプリを開いても、ピンとくる人が全然いない。理想の人が周りにいない。
              30代になると周りで結婚にベストな“いい人”が減っているのです。
            </p>

            <p style={{ wordBreak: 'auto-phrase' }}>
              ここで言う「いい人」とは、『優しくて、気が遣えて、清潔感があり、経済的にも精神的にも自立している人』です。こうした優秀な人たちは、その高いコミュニケーション能力と魅力ゆえに、学生時代や20代の職場、あるいはマッチングアプリの初期段階で、周囲の異性が絶対に放っておきません。結果として、彼達は30代を迎える前に「普通の自然な恋愛」を継続させ結婚し、婚活のフィールドからいなくなってしまうのです。
            </p>

            <p style={{ wordBreak: 'auto-phrase' }}>
              自然な出会いが減った30代が次に頼るのが「マッチングアプリ」ですが、アプリには「まだ結婚は考えていないけれど恋人は欲しい」「遊び目的」という結婚したくない理由がある人も一部紛れ込んでいます。
            </p>

            <p className="font-semibold text-pink-600" style={{ wordBreak: 'auto-phrase' }}>
              安全に身元が保証された独身の素敵な人に出会いたい人は、結婚相談所に入るのは成婚への安全な選択肢を増やす方法の一つです。
            </p>

            <p style={{ wordBreak: 'auto-phrase' }}>
              一方、30代に残る素敵な男女が結婚相談所に一定数いるのはなぜだと思いますか？
            </p>

            <p style={{ wordBreak: 'auto-phrase' }}>
              30代の「いい人」は、職場でも責任あるポジションを任され、毎日とても忙しく働いています。そんな ハイスペック男性（高収入、上場企業勤務、専門職、経営者など）は、自分の強みを活かして結婚相談所で選ぶ側として育ちの良い理想のお相手をタイパ良く探しています。
            </p>

            <p style={{ wordBreak: 'auto-phrase' }}>
              収入に余裕があれば、結婚相談所への入会も敷居が低くなります。逆に個人情報や本人画像、写真を長くマッチングアプリでさらすのはデジタルタトゥーのリスクや立場上の問題があります。そういった理由から結婚相談所にたくさんのハイスペック男性が集まります。
            </p>

            <p style={{ wordBreak: 'auto-phrase' }}>
              バリバリ稼ぐ高年収女性や、大手企業・専門職の女性、そして品と美貌を備えた容姿端麗、才色兼備なハイスペック女性もまた、育ちの良さやキャリアを利用して「選ぶ側」として効率よく結婚相談所を利用しています。
              「尊敬できる同職の男性」や「自分を認め支えあえる男性」に安全に内密に出会えるからです。
            </p>

            <p style={{ wordBreak: 'auto-phrase' }}>
              結婚相談所なら、「身元が保証された本気の候補者とお見合いができる。面倒なスケジュール調整は相談所に任せて、サクッとタイパよい婚活を始められます。
              30代男女にとって時間は貴重です。タイパを重視し、結婚相談所にお金をかけて時間の節約をするのも賢い選択の一つかもしれません。
            </p>

          </div>

        </section>

        {/* Doctor Message Section */}
        <section className="mt-8 rounded-2xl bg-white border border-pink-200 p-5 shadow-sm">

          {/* Header */}
          <div 
            className="text-lg font-bold text-pink-600 border-b border-pink-100 pb-2 text-balance"
            style={{ wordBreak: 'auto-phrase' }}
          >
            🩷 女医からのメッセージ
          </div>

          {/* Letter */}
          <div className="mt-5 text-base leading-relaxed text-gray-700">

            {/* Doctor Photo */}
            <div className="float-left mr-5 mb-3 w-28 sm:w-32 md:w-40">
              <Image
                src={femaleAdvisor}
                alt="女医"
                className="rounded-xl shadow-md object-cover w-full h-auto"
                priority
              />
            </div>

            <div className="space-y-4">
              <p className="font-semibold text-gray-900" style={{ wordBreak: 'auto-phrase' }}>
                まわりが結婚し始め、結婚を意識するアラサーのあなたへ。
              </p>

              <p style={{ wordBreak: 'auto-phrase' }}>
                私たちが異性に出会う場所は、同じ学校、バイト先、アプリ、職場、知人、飲食店など、様々ですが、今思えば、大学一年生に付き合っていた人が1番ハイスペックで結婚に近かったということはよくあります。
              </p>

              <p style={{ wordBreak: 'auto-phrase' }}>
                その後、街やマッチングアプリやSNSの出会いでは、年詐、職業詐称、年収詐称などのリスクもあふれ、周りのリアルな話でも、付き合っていると思っていたら既婚者だった、年齢や本名はウソだった、会社も違ったという話は恋愛あるあるです。
              </p>

              <p className="font-semibold text-pink-700" style={{ wordBreak: 'auto-phrase' }}>
                大阪梅田ドクターズ結婚相談所では、身元審査をクリアした人だけしかおらず、独身偽装や年収、経歴の詐称は不可能です。
              </p>

              <p style={{ wordBreak: 'auto-phrase' }}>
                ハイスペック男女やご両親がしっかりされている育ちの良い男女は、「確実な未来」のためにお金を払う経済力があるので、初期費用や月会費を「安全の保証と、時間効率のための必要経費」と捉えています。そのため経済的・精神的に自立した魅力的な男女が大阪梅田ドクターズ結婚相談所にたくさん集まるのです。
              </p>

              <p className="font-medium text-gray-900" style={{ wordBreak: 'auto-phrase' }}>
                医師、医療関係者、経営者、公務員、弁護士、税理士などハイステータスの方々、高級ゴルフクラブの会員、オーナー専用会員制の集まりなど人脈をたくさん有しています。
              </p>

              <p style={{ wordBreak: 'auto-phrase' }}>
                どの結婚相談所をえらぶかは自分の価値観や将来の家庭像、望みを反映していると思います。
              </p>

              <p style={{ wordBreak: 'auto-phrase' }}>
                あなたも、今の職種、ステータスや地域や年齢の制限を超えて素敵な出会いが欲しくないでしょうか。
                一般的に異性との出会いは少し地域や職業などににより制限や偏りがありますので、そんな制限を取払い、あなたがいるフィールドを越えた出会いを私たちはご提供します。
              </p>

              <p style={{ wordBreak: 'auto-phrase' }}>
                普段は出会うことができない華やかな異性やハイスペックな男女に出会うチャンスが広がります。
                今までの自分のフィールドを一段あげさらなる自己実現のチャンスとなるでしょう。
              </p>

              <p style={{ wordBreak: 'auto-phrase' }}>
                大阪梅田ドクターズ結婚相談所では、自分の未来を変えたい、前向きにチャレンジしたい、そのためにプロの技を利用したいという、意識の高い会員様をお待ちしています。
                私達の人脈と経験にてお手伝いさせていただきます。
              </p>
            </div>

            <div className="clear-both" />

          </div>

        </section>

        {/* Bottom CTA */}
        <section className="mt-10 rounded-3xl bg-pink-600 p-6 text-center text-white">
          
          <h2 
            className="text-2xl font-bold text-balance"
            style={{ wordBreak: 'auto-phrase' }}
          >
            素敵なお相手に巡り会いたいあなたへ。
          </h2>

          <p 
            className="mt-3 text-pink-50 leading-relaxed text-base"
            style={{ wordBreak: 'auto-phrase' }}
          >
            ぜひ大阪梅田ドクターズ結婚相談所にいらしてください。
          </p>

          <button className="mt-6 w-full rounded-full bg-white py-3 text-base font-semibold text-pink-600 shadow-lg hover:bg-pink-50 transition-colors">
            無料相談はこちら
          </button>

        </section>

      </div>
    </main>
  );
}