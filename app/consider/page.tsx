import { Metadata } from "next";
import femaleAdvisor from "@/public/femaleAdvisor.jpg";
import osakaUmedaDoctors from "@/public/osaka-umeda-doctors-konkatsu-30s.jpg";
import Image from "next/image";
import { Sparkles } from "lucide-react"; // Make sure lucide-react is installed, or replace with your preferred icon
import TrueHappinessAnalysis from "../wellbeing/page";

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
    <main className="bg-[#faf8f5] min-h-screen">
      
      {/* ============================================================
          HERO BANNER HEADLINE (Middle-Ground Magenta-Rose Gradient)
          ============================================================ */}
      <div 
        className="relative w-full py-12 px-4 sm:px-6 lg:px-8 text-center border-b border-rose-200/50 overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, rgba(255, 0, 127, 0.25) 0%, rgba(255, 102, 178, 0.2) 50%, rgba(255, 166, 201, 0.25) 100%)' 
        }}
      >
        {/* Ambient Radiant Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-72 h-72 bg-[#FF007F]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-72 h-72 bg-[#FFA6C9]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto flex flex-col items-center space-y-4">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-[#FF007F]/30 text-[#D9006C] px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#FF007F] shrink-0" />
            <span>いい人がいない！と思う30代のあなたへ</span>
          </div>
          
          {/* Main Headline (Pure Black with Strong White Glow Halo) */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black leading-snug sm:leading-tight tracking-tight max-w-3xl pt-1 [text-shadow:_0_0_8px_#ffffff,_0_0_16px_#ffffff,_0_0_24px_rgba(255,255,255,0.8)]">
            「婚活でいい人がいない？」と思い始めた３０代のあなたへ｜大阪梅田ドクターズ結婚相談所が効率的な理由
          </h1>
          
          {/* Matching Gradient Divider Bar */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF007F]" />
            <div 
              className="w-24 h-1 rounded-full shadow-xs" 
              style={{ background: 'linear-gradient(90deg, #FF007F 0%, #FF66B2 50%, #FFA6C9 100%)' }}
            />
            <div className="w-1.5 h-1.5 rounded-full bg-[#FFA6C9]" />
          </div>

        </div>
      </div>

<section className="w-full">
  <div className="w-full max-w-4xl mx-auto my-1">
    <div className="relative w-full aspect-[1/1] overflow-hidden rounded-2xl shadow-md">
      <Image
        src={osakaUmedaDoctors}
        alt="大阪梅田のドクターズ結婚相談所で、タイパを重視して効率的に医師婚活を進める30歳前後のアラサー女性"
        fill
        sizes="(max-width: 768px) 100vw, 600px"
        priority={true}
        fetchPriority="high"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAAEAAQBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA="
      />

      {/* Overlay Disclaimer */}
      <span className="absolute bottom-0 right-0 z-10 text-xs text-white   px-2.5 py-1  pointer-events-none select-none">
        ※画像はイメージです。
      </span>
    </div>
  </div>
</section>


      {/* Main Content Body */}
      <div className="mx-auto max-w-3xl px-4 py-6">

        {/* Intro Card (H2 & Main Text Section) */}
        <section className="mt-5 rounded-2xl bg-white border border-pink-200 p-5 shadow-sm">

          <h2 className="text-xl font-bold text-gray-900 leading-snug border-b border-pink-100 pb-3">
            タイパ至上主義！30代の婚活に大阪・梅田の結婚相談所が最強に効率的な理由
          </h2>

          <div className="mt-5 space-y-4 text-[17px] leading-8 text-gray-700">

            <h3 className="text-lg font-bold leading-8 text-gray-900">
              20代の頃は普通に生活しているだけで「素敵だな」と思える人に出会えていたはず。なのに、30代になった途端、周りの素敵な人は、みんな「既婚者」になっている。
            </h3>

            <p>
              マッチングアプリを開いても、ピンとくる人が全然いない。理想の人が周りにいない。
              30代になると周りで結婚にベストな“いい人”が減っているのです。
            </p>

            <p>
              ここで言う「いい人」とは、『優しくて、気が遣えて、清潔感があり、経済的にも精神的にも自立している人』です。こうした優秀な人たちは、その高いコミュニケーション能力と魅力ゆえに、学生時代や20代の職場、あるいはマッチングアプリの初期段階で、周囲の異性が絶対に放っておきません。結果として、彼達は30代を迎える前に「普通の自然な恋愛」を継続させ結婚し、婚活のフィールドからいなくなってしまうのです。
            </p>

            <p>
              自然な出会いが減った30代が次に頼るのが「マッチングアプリ」ですが、アプリには「まだ結婚は考えていないけれど恋人は欲しい」「遊び目的」という結婚したくない理由がある人も一部紛れ込んでいます。
            </p>

            <p className="font-semibold text-pink-600">
              安全に身元が保証された独身の素敵な人に出会いたい人は、結婚相談所に入るのは成婚への安全な選択肢を増やす方法の一つです。
            </p>

            <p>
              一方、30代に残る素敵な男女が結婚相談所に一定数いるのはなぜだと思いますか？
            </p>

            <p>
              30代の「いい人」は、職場でも責任あるポジションを任され、毎日とても忙しく働いています。そんな ハイスペック男性（高収入、上場企業勤務、専門職、経営者など）は、自分の強みを活かして結婚相談所で選ぶ側として育ちの良い理想のお相手をタイパ良く探しています。
            </p>

            <p>
              収入に余裕があれば、結婚相談所への入会も敷居が低くなります。逆に個人情報や本人画像、写真を長くマッチングアプリでさらすのはデジタルタトゥーのリスクや立場上の問題があります。そういった理由から結婚相談所にたくさんのハイスペック男性が集まります。
            </p>

            <p>
              バリバリ稼ぐ高年収女性や、大手企業・専門職の女性、そして品と美貌を備えた容姿端麗、才色兼備なハイスペック女性もまた、育ちの良さやキャリアを利用して「選ぶ側」として効率よく結婚相談所を利用しています。
              「尊敬できる同職の男性」や「自分を認め支えあえる男性」に安全に内密に出会えるからです。
            </p>

            <p>
              結婚相談所なら、「身元が保証された本気の候補者とお見合いができる。面倒なスケジュール調整は相談所に任せて、サクッとタイパよい婚活を始められます。
              30代男女にとって時間は貴重です。タイパを重視し、結婚相談所にお金をかけて時間の節約をするのも賢い選択の一つかもしれません。
            </p>

          </div>

        </section>

        {/* Doctor Message Section */}
        <section className="mt-8 rounded-2xl bg-white border border-pink-200 p-5 shadow-sm">

          {/* Header */}
          <div className="text-lg font-bold text-pink-600 border-b border-pink-100 pb-2">
            🩷 女医からのメッセージ
          </div>

          {/* Letter */}
          <div className="mt-5 text-[17px] leading-8 text-gray-700">

            {/* Doctor Photo */}
            <div className="float-left mr-5 mb-3 w-28 sm:w-32 md:w-40">
              <Image
                src={femaleAdvisor}
                alt="女医"
                className="rounded-xl shadow-md object-cover w-full h-auto"
                priority
              />
            </div>

            <p>

              <span className="font-semibold text-gray-900">
                まわりが結婚し始め、結婚を意識するアラサーのあなたへ。
              </span>

              <br /><br />

              私たちが異性に出会う場所は、同じ学校、バイト先、アプリ、職場、知人、飲食店など、様々ですが、今思えば、大学一年生に付き合っていた人が1番ハイスペックで結婚に近かったということはよくあります。

              <br /><br />

              その後、街やマッチングアプリやSNSの出会いでは、年詐、職業詐称、年収詐称などのリスクもあふれ、周りのリアルな話でも、付き合っていると思っていたら既婚者だった、年齢や本名はウソだった、会社も違ったという話は恋愛あるあるです。

              <br /><br />

              <span className="font-semibold text-pink-700">
                大阪梅田ドクターズ結婚相談所では、身元審査をクリアした人だけしかおらず、独身偽装や年収、経歴の詐称は不可能です。
              </span>

              <br /><br />

              ハイスペック男女やご両親がしっかりされている育ちの良い男女は、「確実な未来」のためにお金を払う経済力があるので、初期費用や月会費を「安全の保証と、時間効率のための必要経費」と捉えています。そのため経済的・精神的に自立した魅力的な男女が大阪梅田ドクターズ結婚相談所にたくさん集まるのです。

              <br /><br />

              <span className="font-medium text-gray-900">
                医師、医療関係者、経営者、公務員、弁護士、税理士などハイステータスの方々、高級ゴルフクラブの会員、オーナー専用会員制の集まりなど人脈をたくさん有しています。
              </span>

              <br /><br />

              どの結婚相談所をえらぶかは自分の価値観や将来の家庭像、望みを反映していると思います。

              <br /><br />

              あなたも、今の職種、ステータスや地域や年齢の制限を超えて素敵な出会いが欲しくないでしょうか。
              一般的に異性との出会いは少し地域や職業などににより制限や偏りがありますので、そんな制限を取払い、あなたがいるフィールドを越えた出会いを私たちはご提供します。

              <br /><br />

              普段は出会うことができない華やかな異性やハイスペックな男女に出会うチャンスが広がります。
              今までの自分のフィールドを一段あげさらなる自己実現のチャンスとなるでしょう。

              <br /><br />

              大阪梅田ドクターズ結婚相談所では、自分の未来を変えたい、前向きにチャレンジしたい、そのためにプロの技を利用したいという、意識の高い会員様をお待ちしています。
              私達の人脈と経験にてお手伝いさせていただきます。

            </p>

            <div className="clear-both" />

          </div>

        </section>

        {/* Bottom CTA */}
        <section className="mt-10 rounded-3xl bg-pink-600 p-6 text-center text-white">
          
          <h2 className="text-2xl font-bold">
            素敵なお相手に巡り会いたいあなたへ。
          </h2>

          <p className="mt-3 text-pink-50 leading-7 text-[15px]">
            ぜひ大阪梅田ドクターズ結婚相談所にいらしてください。
          </p>
        </section>

      </div>
    </main>
  );
}