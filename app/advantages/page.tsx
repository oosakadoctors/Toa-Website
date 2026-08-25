'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import femaleAdvisor from "@/public/femaleAdvisor.jpg";
import Link from 'next/link';
import { 
  Sparkles, 
  HelpCircle, 
  Heart, 
  ArrowRight, 
  ChevronRight, 
  Award,
  UserCheck,
  Briefcase,
  Home,
  AlertCircle,
  ShieldCheck
} from 'lucide-react';

export default function HighSpecStrategyPage() {
  // ナビゲーションのアンカースクロール用リファレンス
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);

  const scrollToSection = (elementRef: React.RefObject<HTMLDivElement | null>) => {
    if (elementRef.current) {
      const offset = 70; // 固定ナビバーのバッファオフセット
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = elementRef.current.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-[#FAF8F5] text-gray-950 min-h-screen pb-12 font-medium text-xl leading-relaxed w-full overflow-x-hidden">
    
{/* ============================================================
    HERO BANNER HEADLINE (Combined with Pink Radiant Background)
    ============================================================ */}
<div 
  className="relative w-full py-12 px-4 sm:px-6 lg:px-8 text-center border-b border-rose-200/50 overflow-hidden"
  style={{ 
    background: 'linear-gradient(135deg, rgba(255, 0, 127, 0.25) 0%, rgba(255, 102, 178, 0.2) 50%, rgba(255, 166, 201, 0.25) 100%)' 
  }}
>
  {/* Ambient Radiant Glows */}
  <div className="absolute top-[-20%] left-[-10%] w-80 h-80 bg-[#FF007F]/20 rounded-full blur-3xl pointer-events-none" />
  <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-[#FFA6C9]/25 rounded-full blur-3xl pointer-events-none" />

  <div className="relative max-w-4xl mx-auto flex flex-col items-center space-y-6">
    
    {/* Badge */}
    <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-[#FF007F]/30 text-[#D9006C] px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-sm">
      <Sparkles className="w-3.5 h-3.5 text-[#FF007F] shrink-0" />
      <span>High-Spec Marriage Strategy</span>
    </div>
    
    {/* Main Headline */}
    <h1 
      className="text-3xl sm:text-3xl lg:text-4xl font-black text-black leading-snug sm:leading-tight tracking-tight text-balance max-w-3xl pt-1 [text-shadow:_0_0_8px_#ffffff,_0_0_16px_#ffffff,_0_0_24px_rgba(255,255,255,0.8)]"
      style={{ wordBreak: 'auto-phrase' }}
    >
      大阪梅田で医師・ハイスペック男性と結婚する方法｜女性向けハイクラス婚活の戦略
    </h1>
    
    {/* Matching Gradient Divider Bar */}
    <div className="flex items-center justify-center gap-2 pt-1">
      <div className="w-1.5 h-1.5 rounded-full bg-[#FF007F]" />
      <div 
        className="w-24 h-1 rounded-full shadow-xs" 
        style={{ background: 'linear-gradient(90deg, #FF007F 0%, #FF66B2 50%, #FFA6C9 100%)' }}
      />
      <div className="w-1.5 h-1.5 rounded-full bg-[#FFA6C9]" />
    </div>

    {/* Integrated Intro Text Box */}
    <div className="w-full max-w-3xl rounded-2xl border border-rose-200/70 bg-white/80 backdrop-blur-md px-6 py-6 shadow-sm text-center">
      <p 
        className="text-xl font-medium text-gray-800 leading-relaxed"
        style={{ wordBreak: 'auto-phrase' }}
      >
        大阪梅田で医師やエグゼクティブ男性に選ばれ、確実にハイクラス成婚を叶えるためには、彼らの結婚観を捉えた専用のアプローチが必要です。本ページでは、ハイスペック婚活に必要な<span className="font-bold text-[#D9006C]">３つのリスペクト</span>について解説します。あなたが最短スピードで成婚にいたり、その後、持続可能な関係を保つための条件について女医の視点から説明していきます。
      </p>
    </div>

  </div>
</div>
<section className="w-full">
  <div className="w-full max-w-4xl mx-auto my-1">
    <div className="relative w-full aspect-[1/1] overflow-hidden rounded-2xl shadow-md">
      <Image
        src="/high-spec-marriage-partner.jpg"
        alt="ハイスペック婚活の成功をイメージさせる、白いシャツを着て微笑むハイステ男性のイメージ写真"
        fill
        sizes="(max-width: 768px) 100vw, 800px"
        priority={false}
        className="object-cover"
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

      {/* ============================================================
          DYNAMIC TABLE OF CONTENTS INDEX (Full-Width Mobile)
          ============================================================ */}
      <div className="w-full mb-8 sm:px-4 sm:mt-6">
        <div className="bg-white w-full max-w-4xl mx-auto p-5 sm:p-6 shadow-[0_6px_30px_rgba(0,0,0,0.04)] border-2 border-[#89D1D5]/40 rounded-3xl">

          <h2 
            className="text-xl font-black text-black tracking-wider uppercase mb-2 flex items-center gap-2 text-balance"
            style={{ wordBreak: 'auto-phrase' }}
          >
            <HelpCircle className="w-5 h-5 text-[#89D1D5]" />
            👇 気になるテーマからご覧ください
          </h2>

          <p 
            className="text-xl text-gray-600 mb-6 leading-relaxed"
            style={{ wordBreak: 'auto-phrase' }}
          >
            ボタンをクリックすると、そのセクションへ移動します。
          </p>

          <div className="space-y-5">

            {/* 成婚のヒント */}
            <div className="rounded-2xl border border-[#89D1D5]/50 bg-gradient-to-r from-[#89D1D5]/10 to-white p-5 shadow-sm">

              <h3 
                className="text-xl font-black text-gray-900 text-balance"
                style={{ wordBreak: 'auto-phrase' }}
              >
                【成婚のヒント】
              </h3>

              <p 
                className="mt-2 text-xl text-gray-700 leading-relaxed"
                style={{ wordBreak: 'auto-phrase' }}
              >
                なぜ、年収1000万超のエグゼクティブは「誰もが羨む美女」を断ったのか？
              </p>

              <div className="mt-6 flex justify-end">

                <button
                  onClick={() => scrollToSection(section1Ref)}
                  className="group inline-flex min-w-[260px] justify-center items-center gap-2 rounded-xl bg-[#89D1D5] hover:bg-[#72c2c6] px-6 py-3.5 text-xl font-black text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-xl active:scale-95"
                >
                  📖 成婚のヒントを読む
                  <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

              </div>

            </div>

            {/* 女医からのメッセージ */}
            <div className="rounded-2xl border border-[#F5A3B8]/50 bg-gradient-to-r from-[#F5A3B8]/10 to-white p-5 shadow-sm">

              <h3 
                className="text-xl font-black text-gray-900 text-balance"
                style={{ wordBreak: 'auto-phrase' }}
              >
                👩‍⚕️ 女医からのメッセージ
              </h3>

              <p 
                className="mt-2 text-xl text-gray-700 leading-relaxed"
                style={{ wordBreak: 'auto-phrase' }}
              >
                持続可能なパートナーになるための客観的自己認識
              </p>

              <div className="mt-6 flex justify-end">

                <button
                  onClick={() => scrollToSection(section2Ref)}
                  className="group inline-flex min-w-[260px] justify-center items-center gap-2 rounded-xl bg-[#F5A3B8] hover:bg-[#e88ba2] px-6 py-3.5 text-xl font-black text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-xl active:scale-95"
                >
                  💗 女医からのメッセージ
                  <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

              </div>

            </div>

          </div>

        </div>
      </div>

      {/* ============================================================
          SECTION 1: THE REALITY OF EXECUTIVE MARRIAGE (Full-Width Mobile)
          ============================================================ */}
      <div ref={section1Ref} className="w-full mb-8 sm:px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* SECTION HEADER BLOCK */}
          <div className="bg-white w-full p-4 sm:p-6 shadow-xs border-y sm:border border-gray-100 sm:rounded-2xl border-l-4 border-l-[#89D1D5]">
            <span className="text-xs font-black text-[#89D1D5] uppercase tracking-widest block mb-1">Marriage Hints</span>
            <h2 
              className="text-2xl font-black text-gray-900 tracking-tight leading-snug text-balance"
              style={{ wordBreak: 'auto-phrase' }}
            >
              【成婚のヒント】なぜ、年収1000万超のエグゼクティブは「誰もが羨む美女」を断ったのか？
            </h2>
            <div className="w-12 h-0.5 bg-[#89D1D5] mt-2 mb-4" />
            
            <h3 
              className="text-xl sm:text-2xl font-black text-gray-800 leading-snug mb-3 text-balance"
              style={{ wordBreak: 'auto-phrase' }}
            >
              第一線で戦うビジネスマンが、生涯の伴侶を選ぶときに「外見」より優先する3つの絶対条件
            </h3>
            <p 
              className="text-xl text-gray-700 leading-relaxed text-start"
              style={{ wordBreak: 'auto-phrase' }}
            >
              ハイスペックの男性が容姿端麗な若くて可愛い女性の申し出を断ったケースを、私たちは何度も経験してきました。
              「綺麗だから、若いから選ばれる」という安易な公式は、ハイスペック婚活の世界では通用しません。
            </p>
            <p 
              className="text-xl text-gray-700 leading-relaxed text-start mt-3"
              style={{ wordBreak: 'auto-phrase' }}
            >
              仕事の最前線で大きな責任とプレッシャーを背負う有能なビジネスマンや経営者にとって、結婚は人生最大の「自分をゆだねる相手を決める決断」です。彼らが外見だけの美女を断り、最後に選ぶ女性の条件には、明確なパターンがあります。
            </p>
          </div>

          {/* CORE VALUE: 3 RESPECTS */}
          <div id="linkId1" className="bg-white w-full p-4 sm:p-6 shadow-xs border-y sm:border border-gray-100 sm:rounded-2xl">
            <h3 
              className="text-xl sm:text-2xl font-black text-gray-900 flex items-center gap-1.5 border-b border-gray-100 pb-3 mb-4 text-balance"
              style={{ wordBreak: 'auto-phrase' }}
            >
              <Award className="w-6 h-6 text-[#89D1D5] shrink-0" />
              なぜ容姿だけでは選ばれないのか。第一線で戦う男性が求める「リスペクトの真実」
            </h3>
            <p 
              className="text-xl text-gray-600 leading-relaxed text-start mb-4"
              style={{ wordBreak: 'auto-phrase' }}
            >
              彼らが求めているのは単なる「条件」や「外見の華やかさ」ではなく、以下の<span className="font-bold text-gray-900">『3つのリスペクト（尊敬と共感）』</span>のうち、どれか1つでも強烈に彼らの心を満たしているということです。女性に「すべてが完璧であること」は求めていません。自分のライフスタイルや価値観に合う「たった1つの何か」を持っている女性に、男性は最大の敬意と愛を払います。
            </p>

            {/* THREE BLOCKS */}
            <div className="space-y-3">
              
              {/* BLOCK 1 */}
              <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#89D1D5]/30 border-l-4 border-l-[#89D1D5]">
                <span className="inline-flex items-center gap-1 bg-[#89D1D5]/20 text-[#2c777a] px-2.5 py-0.5 rounded-full text-xs font-black mb-2">
                  <UserCheck className="w-3.5 h-3.5" /> 条件 01
                </span>
                <h4 
                  className="font-black text-xl text-gray-900 mb-1.5 text-balance"
                  style={{ wordBreak: 'auto-phrase' }}
                >
                  【自分には無いものへのリスペクト】彼にない秀でた何かを女性が持っているか
                </h4>
                <p 
                  className="text-xl text-gray-600 leading-relaxed text-start"
                  style={{ wordBreak: 'auto-phrase' }}
                >
                  高いステータスを持つ男性は、自分を盲目的に崇めたり収入に依存的な女性を警戒します。実際、マッチングアプリに登録したとしても職業や年収を大っぴらに記載している人は医療の職場でも少ないです。
                </p>
                <p 
                  className="text-xl text-gray-600 leading-relaxed text-start mt-2"
                  style={{ wordBreak: 'auto-phrase' }}
                >
                  彼らは、自分にはない経験や秀でた能力や内面を持つ女性を深くリスペクトします。自分とは違う何かを持っていて、常に新しい発見や価値観を与えてくれるお相手だからこそ、自分の世界は広がり、引き上げられ、一生飽きることのないリスペクトが生まれます。単なる『トロフィー（飾り）』としての美しさではなく、お互いの人生の可能性を2倍にする『最高のバディ』のような関係を求めています。
                </p>
              </div>

              {/* BLOCK 2 */}
              <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#89D1D5]/30 border-l-4 border-l-[#89D1D5]">
                <span className="inline-flex items-center gap-1 bg-[#89D1D5]/20 text-[#2c777a] px-2.5 py-0.5 rounded-full text-xs font-black mb-2">
                  <Briefcase className="w-3.5 h-3.5" /> 条件 02
                </span>
                <h4 
                  className="font-black text-xl text-gray-900 mb-1.5 text-balance"
                  style={{ wordBreak: 'auto-phrase' }}
                >
                  【キャリアの共感リスペクト】同じ世界観で「戦う毎日」を理解し合えるか
                </h4>
                <p 
                  className="text-xl text-gray-600 leading-relaxed text-start"
                  style={{ wordBreak: 'auto-phrase' }}
                >
                  社会の最前線にある独特の責任感、不規則な時間、そして高みを目指すからゆえの孤独。同じレベルのキャリアや高い志を持つ者同士だからこそ、言葉にしなくても『ONの自分』を深く共感し、協力し合えます。
                </p>
                <p 
                  className="text-xl text-gray-600 leading-relaxed text-start mt-2"
                  style={{ wordBreak: 'auto-phrase' }}
                >
                  同じ世界を生きる同志としての絶対的な尊敬や安心が、二人の絆を強固にします。事実、同業種婚や似たフィールドの成婚が多いのもそのためです。
                </p>
              </div>

              {/* BLOCK 3 */}
              <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#89D1D5]/30 border-l-4 border-l-[#89D1D5]">
                <span className="inline-flex items-center gap-1 bg-[#89D1D5]/20 text-[#2c777a] px-2.5 py-0.5 rounded-full text-xs font-black mb-2">
                  <Home className="w-3.5 h-3.5" /> 条件 03
                </span>
                <h4 
                  className="font-black text-xl text-gray-900 mb-1.5 text-balance"
                  style={{ wordBreak: 'auto-phrase' }}
                >
                  【プライベートの満足リスペクト】外の鎧を脱ぎ捨てて「心から安らげる家庭」を作れるか
                </h4>
                <p 
                  className="text-xl text-gray-600 leading-relaxed text-start"
                  style={{ wordBreak: 'auto-phrase' }}
                >
                  社会的に成功すればするほど、家の中は本来の自分でいれる唯一の場所です。プライベートの時間を豊かに彩り、自立を持って精神的な満足と温かみをもたらしてくれる女性の存在に、男性は最大の敬意を払います。
                </p>
                <p 
                  className="text-xl text-gray-600 leading-relaxed text-start mt-2"
                  style={{ wordBreak: 'auto-phrase' }}
                >
                  家に帰ってまで「機嫌を取らなければいけない美女」や「感情の起伏が激しい相手」「信頼できない女性」「奪うだけの傲慢な女性」では、心身が休まりません。外での戦いを忘れ、ただの自分に戻って心からリラックスできる家庭経営の天才。それもまた、彼らが何よりも渇望する存在です。
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          SECTION 2: DOCTOR'S REALISTIC MESSAGE (Full-Width Mobile)
          ============================================================ */}

      <div ref={section2Ref} className="w-full mb-8 sm:px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-white to-[#F5A3B8]/10 w-full p-4 sm:p-6 shadow-sm border-y sm:border border-[#F5A3B8]/30 sm:rounded-3xl border-l-4 border-l-[#F5A3B8]">

          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <span className="text-xs font-black text-[#F5A3B8] uppercase tracking-widest block mb-1">
              Message from Female Doctor
            </span>

            <h2 
              className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight text-balance"
              style={{ wordBreak: 'auto-phrase' }}
            >
              女医からのメッセージ
            </h2>

            <div className="w-12 h-0.5 bg-[#F5A3B8] mx-auto mt-2" />
          </div>

          {/* Letter Container */}
          <div className="text-xl text-gray-700 leading-relaxed tracking-wide">

            {/* Profile Image */}
            <div className="float-left mr-4 mb-2 w-24 sm:w-32 md:w-40">
              <Image
                src={femaleAdvisor}
                alt="現役女医"
                className="rounded-xl shadow-md object-cover w-full h-auto border-2 border-[#F5A3B8]/30"
                priority
              />
            </div>

            {/* Paragraphs */}
            <div className="space-y-4">
              <p style={{ wordBreak: 'auto-phrase' }}>
                個人の好みはありますが、やはり地位、内面、外見、エスコート力がそろったハイスペック男性は女性から非常に人気です。
                そんな彼らと真のパートナーになるにはどうしたらいいと思いますか。
              </p>

              <p style={{ wordBreak: 'auto-phrase' }}>
                私は、「選ばれる」という気持ちだけでは、本当に選ばれることは難しいと考えています。
              </p>

              <p style={{ wordBreak: 'auto-phrase' }}>
                もう少し分かりやすく言えば、お相手の高いステータスや魅力に見合う何かをご自身も持っていなければ、
                真のパートナーとして長く幸せな関係を築くことは簡単ではありません。
                仮に一時的にご縁があったとしても、お互いが支え合い、与え合い、尊敬し合える関係でなければ、
                長い結婚生活を幸せに続けることは難しいでしょう。
              </p>

              <p style={{ wordBreak: 'auto-phrase' }}>
                私は婚活とは「選ぶ・選ばれる」という一方通行のものではなく、
                お互いが何を与えられるのかを考えながら築いていくものだと思っています。
              </p>

              <p style={{ wordBreak: 'auto-phrase' }}>
                だからこそ大阪梅田ドクターズ結婚相談所では、
                ご自身の現在地とかけ離れた高望みをおすすめすることはありません。
                厳しいようですが、それでは持続可能なパートナーシップにならない可能性が高いからです。
              </p>

              <p style={{ wordBreak: 'auto-phrase' }}>
                もし自己評価と現実に大きな差がある場合には、
                そのことも誠実にお伝えします。
                しかし、それは決して否定するためではありません。
              </p>

              <p style={{ wordBreak: 'auto-phrase' }}>
                あなたの魅力を客観的に見つめ、
                今より一段上の素敵なお相手と幸せな結婚ができるよう、
                一緒に考え、一緒に歩んでいきたいと思っています。
              </p>

              <p style={{ wordBreak: 'auto-phrase' }}>
                婚活では決断力や素直さ、謙虚さ、そして前向きな気持ちが、
                思っている以上に未来を変えてくれます。
              </p>

              <p style={{ wordBreak: 'auto-phrase' }}>
                同じ時代にこうして出会えたことも、一つのご縁です。
              </p>

              <p style={{ wordBreak: 'auto-phrase' }}>
                私たちは、あなたが幸せな未来へ進むお手伝いができれば嬉しく思いますし、
                その過程で私達自身もまた成長させていただけると信じています。
              </p>

              <p className="font-medium text-gray-900 pt-2" style={{ wordBreak: 'auto-phrase' }}>
                お会いできる日を心より楽しみにしております。
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* ============================================================
          BOTTOM CLOSING CTA BOARD (Full-Width Mobile)
          ============================================================ */}
 <div className="w-full sm:px-4 mt-6">
  <div className="max-w-4xl mx-auto bg-gray-900 text-white w-full p-6 sm:p-10 text-center shadow-2xl shadow-gray-900/20 relative overflow-hidden sm:rounded-3xl border-t-4 border-t-[#89D1D5]">
    
    {/* Ambient Glow Effects */}
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#89D1D5]/15 via-transparent to-[#F5A3B8]/10 pointer-events-none" />
    <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#89D1D5]/20 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-[#F5A3B8]/15 rounded-full blur-3xl pointer-events-none" />

    {/* Content Container */}
    <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
      
      {/* Icon Badge */}
      <div className="p-3 rounded-2xl bg-[#89D1D5]/10 border border-[#89D1D5]/20 mb-4 inline-flex items-center justify-center">
        <ShieldCheck className="w-7 h-7 text-[#89D1D5] animate-pulse" />
      </div>

      {/* Main Title */}
      <h3 
        className="text-xl sm:text-2xl lg:text-3xl font-black mb-3 text-balance tracking-tight text-white"
        style={{ wordBreak: 'auto-phrase' }}
      >
        プロの客観的な分析眼で、<br className="hidden sm:inline" />生涯のバディを見つける
      </h3>

      {/* Decorative Accent Line */}
      <div className="w-16 h-1 bg-gradient-to-r from-[#89D1D5] to-[#F5A3B8] rounded-full mb-4" />

      {/* Paragraph Text */}
      <p 
        className="text-xl sm:text-2xl text-gray-300 font-medium leading-relaxed text-center sm:text-center px-1"
        style={{ wordBreak: 'auto-phrase' }}
      >
        一方的な高望みや表面的な条件パズルではなく、お互いをリスペクトし合える「持続可能な最高の出会い」へ。当相談所の分析力と伴走サポートで、あなたの本当の市場価値と魅力を最大限に引き出します。
      </p>

    </div>
  </div>
</div>
    </div>
  );
}