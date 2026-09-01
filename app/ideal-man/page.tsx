import { Metadata } from "next";
import femaleAdvisor from "@/public/femaleAdvisor.jpg";
import Image from "next/image";
import { Sparkles, CheckCircle2, UserCheck, Heart, ShieldCheck, MessageCircle, ArrowRight, Stethoscope, Compass, Award } from "lucide-react";

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
    <main className="bg-[#faf8f5] min-h-screen text-[20px] leading-relaxed">
      
      {/* ============================================================
          HERO BANNER HEADLINE (Middle-Ground Magenta-Rose Gradient)
          ============================================================ */}
      <section 
        className="relative w-full py-16 px-4 sm:px-6 lg:px-8 border-b border-rose-200/50 overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, rgba(255, 0, 127, 0.25) 0%, rgba(255, 102, 178, 0.2) 50%, rgba(255, 166, 201, 0.25) 100%)' 
        }}
      >
        {/* Ambient Radiant Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-72 h-72 bg-[#FF007F]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-72 h-72 bg-[#FFA6C9]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center space-y-5">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-[#FF007F]/30 text-[#D9006C] px-5 py-2 rounded-full text-sm sm:text-base font-black tracking-widest uppercase shadow-sm">
            <Sparkles className="w-4 h-4 text-[#FF007F] shrink-0" />
            <span>30代女性のスマート婚活</span>
          </div>
          
          {/* Main Headline */}
          <h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-black leading-snug sm:leading-tight tracking-tight text-balance max-w-3xl pt-1 [text-shadow:_0_0_8px_#ffffff,_0_0_16px_#ffffff,_0_0_24px_rgba(255,255,255,0.8)]"
            style={{ wordBreak: 'auto-phrase' }}
          >
            笑顔の可愛い最高の男性が惹かれる高いＥＱ
          </h1>
          
          {/* Subtitle / Doctor Tagline */}
          <p 
            className="text-xl sm:text-2xl font-bold text-gray-800 pt-1 leading-relaxed text-balance [text-shadow:_0_0_8px_#ffffff]"
            style={{ wordBreak: 'auto-phrase' }}
          >
            「女医×20年のベテラン」が、あなたの幸せな結婚まで完全伴走。
          </p>

          {/* Matching Gradient Divider Bar */}
          <div className="flex items-center justify-center gap-2 pt-1 pb-4">
            <div className="w-2 h-2 rounded-full bg-[#FF007F]" />
            <div 
              className="w-28 h-1.5 rounded-full shadow-xs" 
              style={{ background: 'linear-gradient(90deg, #FF007F 0%, #FF66B2 50%, #FFA6C9 100%)' }}
            />
            <div className="w-2 h-2 rounded-full bg-[#FFA6C9]" />
          </div>

          {/* Checklist Box */}
          <div className="w-full text-left rounded-2xl border border-rose-200/60 bg-white/85 backdrop-blur-md p-6 sm:p-10 shadow-sm">
            <p 
              className="text-xl sm:text-2xl font-black text-[#D9006C] uppercase tracking-wider mb-5 flex items-center gap-2 text-balance"
              style={{ wordBreak: 'auto-phrase' }}
            >
              <CheckCircle2 className="w-6 h-6 text-[#FF007F]" />
              【チェックリスト】（当てはまるものはありますか？）
            </p>
            <ul className="grid gap-4 text-[20px] text-gray-800 font-medium">
              {[
                "30歳を迎えて、そろそろ真剣に将来を考え始めた",
                "身元が確かで、嘘のない「誠実で優しい人」と出会いたい",
                "お互いを尊敬できる、少し格上の男性と温かい家庭を築きたい",
                "ドクターズ相談所は敷居が高そうだけど、実はちょっと気になる",
                "恋愛経験が少なめだから、プロにしっかりサポートしてほしい",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3.5 group">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FF007F]/10 text-[#FF007F] font-black text-sm border border-[#FF007F]/20 group-hover:bg-[#FF007F] group-hover:text-white transition-colors mt-0.5">
                    ✓
                  </span>
                  <span className="leading-relaxed" style={{ wordBreak: 'auto-phrase' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section Callout Card */}
          <div className="w-full text-left mt-8 rounded-3xl border border-rose-200/80 bg-white/90 backdrop-blur-md p-6 sm:p-10 shadow-md">
            <h2 
              className="text-2xl sm:text-3xl font-black text-gray-900 leading-snug text-balance"
              style={{ wordBreak: 'auto-phrase' }}
            >
              「大人のスマートな優しさに、少年のような可愛い笑顔。あなたがあっと探していた『最高の男性』に出会いませんか？」
            </h2>

            <div className="mt-6 space-y-5 text-[20px] text-gray-700 leading-relaxed font-medium">
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
            <div className="mt-10 pt-8 border-t border-rose-100">
              <p 
                className="text-xl sm:text-2xl font-black text-[#D9006C] mb-6 flex items-center gap-2 text-balance"
                style={{ wordBreak: 'auto-phrase' }}
              >
                <Sparkles className="w-6 h-6 text-[#FF007F]" />
                【あなたがときめくスマートな男性】
              </p>

              <div className="grid gap-6 md:grid-cols-3">
                
                {/* Feature 1 */}
                <div className="rounded-2xl border border-rose-100 bg-gradient-to-b from-white to-rose-50/50 p-6 shadow-xs">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-sky-50 text-sky-600 border border-sky-100">
                      <UserCheck className="w-6 h-6" />
                    </div>
                    <h3 
                      className="font-black text-xl text-gray-900 text-balance"
                      style={{ wordBreak: 'auto-phrase' }}
                    >
                      スマートなエスコートと大人余裕
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed" style={{ wordBreak: 'auto-phrase' }}>
                    お見合いの席や梅田でのデートでも、さりげなくリード。お店の予約から歩くペースの配慮まで心地よい空間を作る。「大切にされる安心感」を最初の1秒から実感させてくれます。
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="rounded-2xl border border-rose-100 bg-gradient-to-b from-white to-pink-50/50 p-6 shadow-xs">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-pink-50 text-pink-600 border border-pink-100">
                      <Heart className="w-6 h-6" />
                    </div>
                    <h3 
                      className="font-black text-xl text-gray-900 text-balance"
                      style={{ wordBreak: 'auto-phrase' }}
                    >
                      少年のような「愛され笑顔」
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed" style={{ wordBreak: 'auto-phrase' }}>
                    仕事中は頼もしいビジネスパーソン。だからこそ見せるキュートな笑顔のギャップに胸が高鳴ります。あなただけに素直な表情を見せるからこそ、ありのままの自分でいられます。
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="rounded-2xl border border-rose-100 bg-gradient-to-b from-white to-purple-50/50 p-6 shadow-xs">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600 border border-purple-100">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h3 
                      className="font-black text-xl text-gray-900 text-balance"
                      style={{ wordBreak: 'auto-phrase' }}
                    >
                      対等に寄り添う包容力
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed" style={{ wordBreak: 'auto-phrase' }}>
                    30代女性のキャリアやライフスタイルを誰よりも応援。「頑張ってて偉いね」と優しく話を聴いてくれる知性と精神的スマートさに、生涯を共にする安心感を得られます。
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Hero Image Section */}
<section className="w-full">
  <div className="w-full max-w-4xl mx-auto my-2 px-4 sm:px-6 lg:px-8">
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
      
      {/* Overlay Disclaimer */}
<span className="absolute bottom-0 right-0 z-10 text-sm text-white px-3 py-1.5 pointer-events-none select-none">
        ※画像はイメージです。
      </span>
    </div>
  </div>
</section>

      {/* ============================================================
          NEW SECTIONS ADDED BELOW
          ============================================================ */}

      {/* SECTION 1: Why Ideal Smart Marriage Comes True Here */}
      <section className="w-full py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-rose-200/80 shadow-md">
            <div className="text-center mb-10">
              <span className="text-sm sm:text-base font-black text-[#D9006C] tracking-widest uppercase bg-rose-50 px-5 py-2 rounded-full border border-rose-200">
                Reason & Value
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-5 leading-snug" style={{ wordBreak: 'auto-phrase' }}>
                【大阪梅田ドクターズ結婚相談所】だからこそ、理想のスマート婚が叶う理由
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Feature 1 */}
              <div className="bg-rose-50/40 rounded-2xl p-6 sm:p-8 border border-rose-100 flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-black text-[#FF007F]">01</span>
                  <h3 className="font-bold text-gray-900 text-xl my-3" style={{ wordBreak: 'auto-phrase' }}>
                    「優しさと自立」を兼ね備えた男性陣
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed" style={{ wordBreak: 'auto-phrase' }}>
                    当相談所には、医師やベテランカウンセラーの人脈を生かして、医師をはじめとする専門職や、ビジネスの第一線で活躍するスマートな男性が多く在籍しています。彼らは日頃から責任ある立場にいるからこそ、大切なパートナーへのリスペクトを忘れず、結婚に対しても非常に誠実で前向きです。
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-rose-50/40 rounded-2xl p-6 sm:p-8 border border-rose-100 flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-black text-[#FF007F]">02</span>
                  <h3 className="font-bold text-gray-900 text-xl my-3" style={{ wordBreak: 'auto-phrase' }}>
                    女性の「私らしさ」を大切にするオーダーメイド婚活
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed" style={{ wordBreak: 'auto-phrase' }}>
                    「仕事を続けたい」「お互いのライフスタイルを尊重したい」といった30代女性のリアルな希望を、私たちは徹底的に応援します。梅田駅すぐの好立地で、お仕事帰りの相談もスムーズ。あなたの価値観にぴったり合う「未来の旦那様」をプロのカウンセラーが厳選してご紹介します。
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-rose-50/40 rounded-2xl p-6 sm:p-8 border border-rose-100 flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-black text-[#FF007F]">03</span>
                  <h3 className="font-bold text-gray-900 text-xl my-3" style={{ wordBreak: 'auto-phrase' }}>
                    恋する楽しさを忘れない「最速成婚ストーリー」
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed" style={{ wordBreak: 'auto-phrase' }}>
                    条件だけのマッチングではありません。お互いに「スマートな振る舞い」と「可愛い笑顔」に惹かれ合い、自然と温かい結婚生活へと繋がるよう、交際中の細かな悩みまで二人三脚で徹底サポートします。
                  </p>
                </div>
              </div>
            </div>

            {/* Sub-CTA Callout inside Section 1 */}
            <div className="mt-10 p-8 bg-gradient-to-r from-rose-50 via-pink-50 to-rose-50 rounded-2xl border border-rose-200 text-center space-y-4">
              <h4 className="font-black text-gray-900 text-xl sm:text-2xl" style={{ wordBreak: 'auto-phrase' }}>
                妥協のない、大人の「ハッピーエンド」を始めましょう
              </h4>
              <p className="text-lg sm:text-[20px] text-gray-700 leading-relaxed" style={{ wordBreak: 'auto-phrase' }}>
                結婚するからといって、ときめきを諦める必要はありません。<br />
                大人のスマートさであなたを守り、可愛い笑顔であなたを癒やしてくれる。<br />
                そんな毎日の笑顔が2倍になるパートナーシップが、ここ大阪梅田であなたを待っています。<br />
                まずは仕事帰りのほんの少しの時間、あなたが想い描く「一番理想の男性」について、ワクワクしながら私達に聞かせてくれませんか？<br />
                <strong className="text-[#D9006C]">【大阪梅田ドクターズ結婚相談所】</strong>で、あなたの人生を最高に輝かせる、運命の出会いを始めましょう！
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Concept Image 1 */}
<section className="w-full">
  <div className="w-full max-w-4xl mx-auto my-2 px-4 sm:px-6 lg:px-8">
    <div className="relative w-full aspect-[1/1] overflow-hidden rounded-2xl shadow-md">
      <Image
        src="/attractive-japanese-women-matchmaking-concept.jpg"
        alt="婚活市場で人気のある、品性と容姿を兼ね備えた若い日本人女性のイメージ写真"
        fill
        sizes="(max-width: 768px) 100vw, 800px"
        priority={false}
        className="object-cover"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAAEAAQBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA="
      />

      {/* Overlay Disclaimer */}
<span className="absolute bottom-0 right-0 z-10 text-sm text-white px-3 py-1.5 pointer-events-none select-none">
        ※画像はイメージです。
      </span>
    </div>
  </div>
</section>

      {/* SECTION 2: Doctor Advice & High EQ */}
      <section className="w-full py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-rose-200/80 shadow-md space-y-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-rose-100 text-[#FF007F]">
              <Stethoscope className="w-8 h-8" />
            </div>
            <div>
              <span className="text-sm font-bold text-[#D9006C] tracking-widest uppercase">Doctor's Advice</span>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900" style={{ wordBreak: 'auto-phrase' }}>
                🩷 素敵な彼に見合う女性になるために。女医からのアドバイス 🩷
              </h2>
            </div>
          </div>

          <div className="space-y-5 text-[20px] text-gray-700 leading-relaxed font-medium pt-2">
            <p style={{ wordBreak: 'auto-phrase' }}>
              素敵な男性がスマートなのは<strong>「EQ（心の知能指数）」の高さ</strong>によるものです。
            </p>
            <p style={{ wordBreak: 'auto-phrase' }}>
              EQとは、自分の感情を心地よくコントロールし、お相手の気持ちに寄り添いながら、温かい関係を育む力（＝大人の思いやりのセンス）のこと。
              日々、自分の仕事や責任と誠実に向き合っている男性だからこそ、<strong>「お互いの立場を思いやりながらお話ができるセンスがある」</strong>のです。
            </p>
            <p style={{ wordBreak: 'auto-phrase' }}>
              また同時に<strong>「高いEQを持った女性」を、絶対に手放したくない最高のパートナーとして選びます。</strong>
              背伸びをして自分を大きく見せる必要はありません。あなたの持っている「心の豊かさ」や「素直な美しさ」を、お相手に『この人とずっと一緒にいたい』と思わせる最高の価値として届けるプロデュースは、私たちの最も得意な領域です。
            </p>

            <div className="p-6 sm:p-8 bg-rose-50/60 rounded-2xl border border-rose-200/80 space-y-4 mt-6">
              <h3 className="font-black text-gray-900 text-xl sm:text-2xl flex items-center gap-2" style={{ wordBreak: 'auto-phrase' }}>
                <span>👩‍⚕️</span> 現役女医の得意分野である「高いEQとは何か？」をプロ視点でお伝えします
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed" style={{ wordBreak: 'auto-phrase' }}>
                実は、医師という仕事は、毎日何十人もの患者さんや医療スタッフと関わり、瞬時に相手の心理を汲み取って信頼関係を築く「高度なEQ（心の知能指数）」が求められる職業です。日々その最前線にいる現役女医だからこそ、「自立した素敵な男性たちが心を開くバランス」を誰よりも熟知しています。あなたの本来の心の温かさを、お相手の男性に確実に届くように開花させ、自己表現力とアピールの手法を磨き、高いEQをもつ魅力的な女性となるようにアドバイスをさせていただきます。
              </p>
              <p className="text-lg font-bold text-gray-900 pt-1" style={{ wordBreak: 'auto-phrase' }}>
                その努力はきっと婚活のみならず、あなたのお仕事や人生でも将来きっと役にたつに違いありません。
              </p>
            </div>

            <p className="pt-4 text-center font-bold text-gray-800 text-xl sm:text-2xl" style={{ wordBreak: 'auto-phrase' }}>
              あなたの前向きな選択が、1年後に「この人と結婚できて、本当によかった」と心から思える、豊かな毎日へと繋がっています。<br />
              お買い物ついでや、お仕事帰りに、まずは美味しいお茶を飲みながら、あなたが本当に望む未来の形を私たちに聞かせてくださいね。
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: FAQ & LINE Consultation Banner */}
      <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#faf8f5] to-emerald-50/30">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* LINE Callout Box */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-emerald-400 shadow-lg text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-5 py-2 rounded-full text-sm sm:text-base font-black tracking-widest uppercase">
              <MessageCircle className="w-5 h-5 text-emerald-600" />
              <span>無料LINE相談</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-gray-900" style={{ wordBreak: 'auto-phrase' }}>
              まずはLINEで、ほんの少しお話ししてみませんか？
            </h2>

            <div className="bg-emerald-50/50 rounded-2xl p-6 sm:p-8 text-left border border-emerald-100 space-y-4">
              <p className="font-black text-gray-900 text-lg sm:text-xl flex items-center gap-2" style={{ wordBreak: 'auto-phrase' }}>
                📱 たとえば、LINEではこのようなご質問をよくいただいています
              </p>
              
              <ul className="space-y-4 text-lg text-gray-800 font-medium">
                {[
                  "「私の年齢（30代前半）だと、実際どんな男性（年齢や職業）からお申し込みが来ますか？」",
                  "「恋愛経験がほぼゼロで、自分からアプローチする自信がないのですが本当に大丈夫でしょうか…？」",
                  "「他の大手の相談所でうまくいかなかったのですが、ドクターズさんだと何が違いますか？」",
                  "「平日は仕事が激務なのですが、梅田に行かなくても入会手続きや婚活は進められますか？」",
                  "「女医の先生やベテランの方に、最初から直接担当してもらうことは可能ですか？」"
                ].map((q, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-emerald-100/80 shadow-2xs">
                    <span className="text-emerald-600 shrink-0 font-bold text-xl">💬</span>
                    <span style={{ wordBreak: 'auto-phrase' }}>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-lg sm:text-xl text-gray-700 font-medium" style={{ wordBreak: 'auto-phrase' }}>
              どんなに小さな不安でも、まとまっていなくても大丈夫です。<br />
              まずはあなたのスマホ📱で本音を相談できる【公式LINE無料相談】からどうぞ。
            </p>

            <div className="pt-3">
              <a 
                href="https://lin.ee/ZXB0UNs" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-black px-10 py-5 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-xl sm:text-2xl w-full sm:w-auto"
              >
                <MessageCircle className="w-6 h-6 fill-current" />
                公式LINEで無料相談してみる
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Concept Image 2 */}
<section className="w-full">
  <div className="w-full max-w-4xl mx-auto my-2 px-4 sm:px-6 lg:px-8">
    <div className="relative w-full aspect-[1/1] overflow-hidden rounded-2xl shadow-md">
      <Image
        src="/mens-matchmaking-service-women-concept.jpg"
        alt="男性婚活で出会う可愛い女性のイメージ写真"
        fill
        sizes="(max-width: 768px) 100vw, 800px"
        priority={false}
        className="object-cover"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAAEAAQBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA="
      />

      {/* Overlay Disclaimer */}
<span className="absolute bottom-0 right-0 z-10 text-sm text-black px-3 py-1.5 pointer-events-none select-none">
        ※画像はイメージです。
      </span>
    </div>
  </div>
</section>

      {/* SECTION 4: Reassurance at Age 30 & High EQ Deep-Dive */}
      <section className="w-full py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-rose-200/80 shadow-md space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 border-b border-rose-100 pb-5" style={{ wordBreak: 'auto-phrase' }}>
              30歳という大切な節目を迎え、これからの人生をともに歩むパートナーを探し始めたあなたへ。
            </h2>

            <div className="space-y-5 text-[20px] text-gray-700 leading-relaxed font-medium">
              <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-200/60 space-y-3">
                <p className="italic text-gray-800 text-lg sm:text-xl" style={{ wordBreak: 'auto-phrase' }}>
                  「誰もが羨むような特別な結婚でなくていい。けれど、お互いを尊敬できて、少しだけリードしてくれる誠実な『いい人』に出会いたい」
                </p>
                <p className="italic text-gray-800 text-lg sm:text-xl" style={{ wordBreak: 'auto-phrase' }}>
                  「一生に一度の結婚だから、自分の『好き』という気持ちにも、お相手の誠実さにも、妥協はしたくない」
                </p>
              </div>

              <p style={{ wordBreak: 'auto-phrase' }}>
                その想いは、自分を大切にし人生を質の高いものにしていきたいという、大人の女性としての素敵な考えです。<br />
                「ドクターズ結婚相談所」という名前に、最初は少し敷居が高いかもしれませんね。でも、どうぞ安心して下さい。
              </p>

              <p style={{ wordBreak: 'auto-phrase' }}>
                現役の女医と、大阪で20年間たくさんの幸せなご縁を繋いできたベテランカウンセラーがいる大阪梅田ドクターズ結婚相談所だからこそ、確信を持ってあなたにお伝えできることがあります。<br />
                お仕事に誠実で、周囲から信頼されている「少し格上の素敵な男性」が、一生を共にする結婚相手に本当に求めているもの。それは、表面的なスペックの高さではなく、お互いの人生を豊かに彩る<strong>『本物の心の質の良さ【EQ】』</strong>なのです。
              </p>
            </div>

            {/* EQ Deep-Dive Sub-Block */}
            <div className="bg-rose-50/30 rounded-2xl p-6 sm:p-8 border border-rose-100 space-y-4 mt-8">
              <h3 className="text-xl sm:text-2xl font-black text-gray-900 flex items-center gap-2" style={{ wordBreak: 'auto-phrase' }}>
                <Sparkles className="w-6 h-6 text-[#FF007F]" />
                素敵な男性が最後に惹かれる「高いEQ（心の知能指数）」とは？
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed" style={{ wordBreak: 'auto-phrase' }}>
                本当に魅力的な男性たちが結婚相手に求める「良いもの」とは、華やかな経歴や外見だけではありません。彼らが何よりも大切にしているのは、女性の「EQ（心の知能指数）」の高さです。
              </p>
              <p className="text-lg text-gray-700 leading-relaxed" style={{ wordBreak: 'auto-phrase' }}>
                EQとは、自分の感情を心地よくコントロールし、お相手の気持ちに寄り添いながら、温かい関係を育む力（＝大人の思いやりのセンス）のこと。日々、自分の仕事や責任と誠実に向き合っている男性だからこそ、「お互いの立場を思いやりながらお話ができるセンスがある」と確信できる、「高いEQを持った女性」を、絶対に手放したくない最高のパートナーとして選びます。
              </p>
              <p className="text-lg font-bold text-gray-900 leading-relaxed" style={{ wordBreak: 'auto-phrase' }}>
                背伸びをして自分を大きく見せる必要はありません。あなたの持っている「心の豊かさ」や「素直な美しさ」を、お相手に『この人とずっと一緒にいたい』と思わせる最高の価値として届けるプロデュースは、私たちの最も得意な領域です。
              </p>
            </div>

            {/* Two Approaches */}
            <div className="pt-6 space-y-5">
              <h3 className="text-xl sm:text-2xl font-black text-gray-900" style={{ wordBreak: 'auto-phrase' }}>
                【私たちの得意分野】「選ばれるEQ」を見抜き、磨き上げる2つのアプローチ
              </h3>
              <p className="text-lg text-gray-700" style={{ wordBreak: 'auto-phrase' }}>
                私たちは、あなたの「少し格上のいい人に出会いたい」という理想を、ただの憧れで終わらせません。確かな実績と、医療の現場でも不可欠な「人間力」の知見で、確実な出会いへと変えていきます。
              </p>

              <div className="grid gap-6 md:grid-cols-2 pt-2">
                <div className="p-6 bg-white rounded-2xl border border-rose-200 shadow-2xs">
                  <h4 className="font-bold text-gray-900 text-lg sm:text-xl mb-3 flex items-center gap-2" style={{ wordBreak: 'auto-phrase' }}>
                    <span>👩‍⚕️</span> 現役女医の得意分野：「高いEQ」のプロフェッショナルな視点
                  </h4>
                  <p className="text-base text-gray-600 leading-relaxed" style={{ wordBreak: 'auto-phrase' }}>
                    実は、医師という仕事は、毎日何十人もの患者さんや医療スタッフと関わり、瞬時に相手の心理を汲み取って信頼関係を築く「高度なEQ（心の知能指数）」が求められる職業です。日々その最前線にいる現役女医だからこそ、「自立した素敵な男性たちが心を開くEQの絶妙なバランス」を誰よりもロジカルに熟知しています。あなたの本来の心の温かさを、お相手の男性に確実に届く「洗練された魅力」へと昇華させるアドバイスは、まさに女医ならではの得意分野です。
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-rose-200 shadow-2xs">
                  <h4 className="font-bold text-gray-900 text-lg sm:text-xl mb-3 flex items-center gap-2" style={{ wordBreak: 'auto-phrase' }}>
                    <span>🌸</span> 20年のベテランカウンセラーが磨き上げる「あなたの絶対的な強み」
                  </h4>
                  <p className="text-base text-gray-600 leading-relaxed" style={{ wordBreak: 'auto-phrase' }}>
                    20年間で数々の幸せな成婚を生み出してきたプロの目で、あなたの中に眠る「男性の心を惹きつけて離さない心の知性（EQ）」を見つけ出します。女医のロジカルな視点と、ベテランの温かい父親のような伴走力で、あなたの良さを最高の形でお相手にプロデュースします。
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-r from-rose-100/60 to-pink-100/60 rounded-2xl text-center space-y-3">
              <h3 className="font-black text-gray-900 text-xl sm:text-2xl" style={{ wordBreak: 'auto-phrase' }}>
                30歳のいま、妥協のない最高のご縁を
              </h3>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed" style={{ wordBreak: 'auto-phrase' }}>
                婚活市場において、30歳という年齢は、大人の品格とみずみずしさを兼ね備えた、最も美しく価値のあるタイミングです。<br />
                だからこそ、この貴重な時間を、安心できる最高の環境でスタートさせてみませんか？<br />
                「一歩、話を聞いてみよう」<br />
                その前向きな選択が、1年後に「この人と結婚できて、本当によかった」と心から思える、豊かな毎日へと繋がっています。<br />
                お買い物ついでや、お仕事帰りに、まずは美味しいお茶を飲みながら、あなたが本当に望む未来の形を私たちに聞かせてくださいね。
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: Final Reassurance */}
      <section className="w-full pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-rose-200/80 shadow-md space-y-8">
          <div className="text-center">
            <span className="text-sm sm:text-base font-black text-[#D9006C] tracking-widest uppercase bg-rose-50 px-5 py-2 rounded-full border border-rose-200">
              Support System
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-4" style={{ wordBreak: 'auto-phrase' }}>
              【現役女医×20年のプロ】あなたに寄り添う2つの安心
            </h2>
            <p className="text-lg text-gray-600 mt-3" style={{ wordBreak: 'auto-phrase' }}>
              私たちは、あなたの「少し格上のいい人に出会いたい」という願いを、ただの憧れで終わらせず、温かく現実のカタチにしていきます。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 pt-2">
            <div className="p-8 bg-rose-50/40 rounded-2xl border border-rose-100 flex items-start gap-5">
              <div className="p-4 bg-white rounded-2xl text-[#FF007F] shadow-2xs shrink-0">
                <Stethoscope className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-xl mb-2" style={{ wordBreak: 'auto-phrase' }}>
                  🌸 現役女医が伝える「素敵な男性のリアルな理想」
                </h3>
                <p className="text-base text-gray-600 leading-relaxed" style={{ wordBreak: 'auto-phrase' }}>
                  男性医師やエリート層が、どんな家庭を望み、女性のどんなところに居心地の良さを感じるのか。身近にいる女医だからこそ、彼らのリアルな声をキャッチし、あなたにぴったりのアプローチを楽しく、分かりやすくお伝えします。
                </p>
              </div>
            </div>

            <div className="p-8 bg-rose-50/40 rounded-2xl border border-rose-100 flex items-start gap-5">
              <div className="p-4 bg-white rounded-2xl text-[#FF007F] shadow-2xs shrink-0">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-xl mb-2" style={{ wordBreak: 'auto-phrase' }}>
                  🌸 20年のベテランカウンセラーが引き出す「あなたの輝き」
                </h3>
                <p className="text-base text-gray-600 leading-relaxed" style={{ wordBreak: 'auto-phrase' }}>
                  「自分には目立つ強みがないかも…」と思っている方も大丈夫。20年間で数多くの成婚を生み出してきたプロの目で、あなた自身も気づいていない「お相手を引きつける輝き」を見つけ出し、お相手にしっかり届けます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}