import Image from "next/image";
import maleAdvisor from "@/public/maleAdvisor.jpg";

import React from 'react';
import Link from 'next/link';
import { Metadata } from "next";
import { 
  Sparkles, 
  HelpCircle, 
  ArrowRight, 
  ChevronRight, 
  Users,
  Compass,
  DollarSign,
  HeartHandshake
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'ハイスペックな方の婚活｜医師・経営者・専門職のための結婚相談所',
  description: '医師・経営者・専門職・キャリア女性の婚活を、現役女医とベテラン仲人が2名体制でサポートします。多忙な方の生活リズムに合わせた進め方をご提案します。北新地駅徒歩1分。',
  alternates: { canonical: '/executive' },
  openGraph: {
    title: 'ハイスペックな方の婚活｜医師・経営者・専門職のための結婚相談所',
    description: '医師・経営者・専門職の婚活を、現役女医とベテラン仲人が2名体制でサポート。多忙な方の生活リズムに合わせて進めます。',
    url: '/executive',
    type: 'website',
  },
};

export default function HighClassSupportPage() {
  return (
    <div className="bg-[#FAF8F5] text-gray-950 min-h-screen pb-12 font-medium text-xl">
      
      {/* ============================================================
          HERO BANNER HEADLINE
          ============================================================ */}
      <div className="w-full px-2 sm:px-4 pt-6 pb-6 text-center">
        <div className="inline-flex items-center gap-1.5 bg-[#E6A2B3]/10 text-[#D9889D] px-3 py-1 rounded-full text-base font-black tracking-widest uppercase mb-2">
          <Sparkles className="w-5 h-5" />
          <span>Premium Limited Member</span>
        </div>
        
        <h1 className="text-3xl lg:text-6xl font-black text-gray-900 leading-tight">
          女医とベテランカウンセラーが<br className="sm:hidden" />導く、完全少人数制のハイクラス成婚
        </h1>
        
        <h2 className="text-base sm:text-xl md:text-2xl font-bold text-gray-600 mt-2 tracking-wide">
          大阪梅田ドクターズ結婚相談所｜医師・ドクターと結婚したい方のための結婚相談所
        </h2>
        
        <div className="w-16 h-1 bg-gradient-to-r from-[#E6A2B3] to-[#D9889D] mx-auto mt-4 rounded-full" />
      </div>

      {/* ============================================================
          DYNAMIC TABLE OF CONTENTS INDEX
          ============================================================ */}
      <div className="w-full px-2 sm:px-4 mb-8">

        <aside className="rounded-2xl border border-pink-100 bg-gradient-to-b from-white to-[#FFF8FA] shadow-sm">

          <header className="px-5 py-5 border-b border-pink-100">

            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="w-5 h-5 text-pink-500" />

              <span className="text-sm font-black tracking-[0.18em] uppercase text-pink-600">
                Premium Guide
              </span>
            </div>

            <h2 className="text-2xl font-black text-gray-900">
              このページでわかること
            </h2>

          </header>

          <div className="divide-y divide-pink-100">

            {/* 1 */}

            <div className="flex items-center justify-between gap-6 px-5 py-5">

              <div>

                <div className="text-sm font-black tracking-widest text-pink-500">
                  SECTION 01
                </div>

                <h3 className="mt-1 font-bold text-gray-900 text-xl">
                  誰もが「ベストを目指すサポート」で活動できる一律料金制
                </h3>

              </div>

              <a
                href="#section-1"
                className="shrink-0 inline-flex items-center gap-2 rounded-full bg-pink-500 px-5 py-2.5 text-base font-black text-white shadow-sm transition hover:bg-pink-600 hover:shadow-md"
              >
                詳しく見る
                <ChevronRight className="w-5 h-5" />
              </a>

            </div>

            {/* 2 */}

            <div className="flex items-center justify-between gap-6 px-5 py-5">

              <div>

                <div className="text-sm font-black tracking-widest text-blue-500">
                  SECTION 02
                </div>

                <h3 className="mt-1 font-bold text-gray-900 text-xl">
                  第一線で活躍するエグゼクティブ層にふさわしいプレミアムな出会い
                </h3>

              </div>

              <a
                href="#section-2"
                className="shrink-0 inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-2.5 text-base font-black text-white shadow-sm transition hover:bg-blue-600 hover:shadow-md"
              >
                詳しく見る
                <ChevronRight className="w-5 h-5" />
              </a>

            </div>

            {/* 3 */}

            <div className="flex items-center justify-between gap-6 px-5 py-5">

              <div>

                <div className="text-sm font-black tracking-widest text-purple-500">
                  SECTION 03
                </div>

                <h3 className="mt-1 font-bold text-gray-900 text-xl">
                  ベテランカウンセラーからのひとこと
                </h3>

              </div>

              <a
                href="#section-3"
                className="shrink-0 inline-flex items-center gap-2 rounded-full bg-purple-500 px-5 py-2.5 text-base font-black text-white shadow-sm transition hover:bg-purple-600 hover:shadow-md"
              >
                詳しく見る
                <ChevronRight className="w-5 h-5" />
              </a>

            </div>

          </div>

        </aside>

      </div>

      {/* ============================================================
          SECTION 1: FLAT RATE PREMIUM SUPPORT
          ============================================================ */}
      <div id="section-1" className="w-full px-2 sm:px-4 mb-8 scroll-mt-20">
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-gray-100">
          <div className="flex items-center gap-2 mb-3">
            <div className="bg-emerald-50 text-emerald-700 p-1.5 rounded-lg">
              <DollarSign className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight pb-2">
              誰もが「ベストを目指すサポート」で活動できる一律料金制
            </h2>
          </div>
          
          <div className="space-y-2 text-gray-800 leading-relaxed font-medium w-full text-xl">
            <p>
              多くの結婚相談所では、実績のあるメインカウンセラーのサポートを受けるために、追加料金や高額な上位プランが必要となります。しかし、大阪梅田ドクターズ結婚相談所では<span className="font-bold text-gray-900 border-b-2 border-[#E6A2B3]">「すべての会員様に、一定の品質のサポートで行き届いた成婚をお届けしたい」</span>と考えています。
            </p>
            <p>
              そのため、当相談所では担当者による料金の格差は一切ございません。
            </p>
            <p>
              ご入会いただいたすべての方に、心身のコンディションまで見守る<span className="font-bold text-gray-900">「女医」</span>と、VIPの婚活を数多く成婚へ導いてきた<span className="font-bold text-gray-900">「ベテランカウンセラー」</span>の2名が、最初から最後まで一貫してダブルサポートいたします。
            </p>
          </div>
        </div>
      </div>

      {/* ============================================================
          SECTION 2: EXECUTIVE PRODUCING & LIMITED SLOTS
          ============================================================ */}
      <div id="section-2" className="w-full px-2 sm:px-4 mb-8 scroll-mt-20">
        <div className="text-center mb-4">
          <span className="text-sm font-black text-[#D9889D] uppercase tracking-widest block">Premium Quality</span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight px-2">
            医師、経営者、弁護士など、第一線で活躍するエグゼクティブ層にふさわしいプレミアムな出会いと、妥協のないハイクラス結婚をプロデュースいたします。
          </h2>
        </div>

        {/* FEATURE CARD: SYSTEM DETAILS */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-gray-100 space-y-5">
          
          {/* SUBSECTION 1 */}
          <div className="border-l-4 border-[#D9889D] pl-3 pb-2">
            <h3 className="text-2xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight pb-2">
              <Users className="w-6 h-6 text-[#D9889D]" />
              ダブルサポートを貫くための「完全少人数制」
            </h3>
            <p className="space-y-2 text-gray-800 leading-relaxed font-medium w-full text-xl">
              この贅沢な2名体制を維持し、お一人おひとりに限界まで手をかけるため、私たちはあえて<span className="font-bold text-gray-900">【完全少人数制】</span>という選択をしています。「少人数制だと、今すぐには入会できないの？」と思われるかもしれません。
            </p>
            <p className="space-y-2 text-gray-800 leading-relaxed font-medium w-full text-xl">
              私たちは、現在活動されている会員様へのレスポンスを最優先し、サポートの質を落さないよう、毎月の<span className="font-bold text-red-600">「新規ご入会枠」を毎月5名に限定</span>させていただいております。
            </p>
            <p className="space-y-2 text-gray-800 leading-relaxed font-medium w-full text-xl">
              在籍会員様が成婚退会されるペースに合わせて順番にご案内する形をとることで、会員様全員が「いつでもプロにすぐ相談できる環境」を徹底して担保しています。
            </p>
          </div>

          <hr className="border-gray-100" />

          {/* SUBSECTION 2 */}
          <div className="border-l-4 border-[#D9889D] pl-3">
            <h3 className="text-2xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight pb-2">
              <Compass className="w-6 h-6 text-[#D9889D]" />
              【的確な認識と一流の成婚戦略がもたらす、無駄のない婚活】
            </h3>
            <p className="space-y-2 text-gray-800 leading-relaxed font-medium w-full text-xl">
              多忙を極めるハイクラス層だからこそ、タイムパフォーマンス（タイパ）は大切です。
              激務による疲労やストレスを理解しメンタルサポートをする女医、そして、細かなマナーから様々な困難を乗り越える技を熟知したベテランカウンセラーの戦略。
            </p>
            <p className="space-y-2 text-gray-800 leading-relaxed font-medium w-full text-xl">
              2人のプロの目があるからこそ、常に客観的でブレのない正しい判断が可能です。あなたの大切な未来を、「誰が担当になるか分からない」といった不安のない、ベストを目指すサポート環境でお迎えいたします。
            </p>
          </div>

        </div>
      </div>

      {/* ============================================================
          SECTION 3: COUNSELOR'S MESSAGE
          ============================================================ */}
      <section className="mx-auto px-0 sm:px-2 lg:px-10 py-2">

        <div className="rounded-3xl border border-blue-100 bg-white shadow-sm p-6 sm:p-10">

          <div className="text-center mb-8">

            <span className="text-sm font-black tracking-widest uppercase text-sky-500 block">
              Message
            </span>

            <h2 className="text-2xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
              🩵ベテランカウンセラーのメッセージ💙
            </h2>

          </div>

          <div id="section-3" className="space-y-2 text-gray-800 leading-relaxed font-medium w-full text-xl scroll-mt-20">

            <div className="float-left mr-5 mb-3 w-32 sm:w-40 md:w-48">
              <Image
                src={maleAdvisor}
                alt="Male Counselor"
                className="rounded-2xl shadow-md w-full h-auto object-cover"
              />
            </div>

            <p>
              はじめまして。大阪梅田ドクターズ結婚相談所の男性カウンセラーです。

              <br /><br />

              これまで数多くの成婚の喜びを共にしてきた私だからこそ、確信していることがあります。それは、ハイクラスな方の婚活に必要なのは「たくさんの紹介」ではなく、
              <span className="font-bold text-gray-900 border-b-2 border-[#E6A2B3]">
                「たった一人の、本質が合うパートナーとの出会い」
              </span>
              であるということです。

              <br /><br />

              高い社会的地位や、日々のお忙しさ、そして「妥協したくない理想の条件」を抱えながら、なんとなく…婚活を進めてはいませんか？当相談所は、会員様一人ひとりの人生に誰よりも深く寄り添うため、【完全少人数制】に徹底的にこだわっています。

              <br /><br />

              <span className="font-bold text-gray-900">
                💡 ベテランを選ぶ本当の意味
              </span>

              <br /><br />

              「若いカウンセラーの方が、自分の感覚や恋愛を分かってくれそう」そう思う方も多いかもしれません。しかし、あなたが目指すのが「理想の成婚」「ハイクラスな結婚」であれば、私たちは自信を持って【実績あるベテランカウンセラー】をおすすめします。ハイクラス成婚に必要なのは、「表面的な共感」や「妥協」ではなく、
              <span className="font-bold text-gray-900">
                「百戦錬磨のサポート力」と「相手を見抜く人間力」
              </span>
              だからです。

              <br /><br />

              あなたの価値を誰よりも理解し、時には家族のように親身に、時にはプロとして客観的に、成婚のその日まで二人三脚で伴走します。

              <br /><br />

              また、ハイクラスな結婚において、避けて通れないのが
              <span className="font-bold text-gray-900">
                「お相手のご両親や家柄との調和」
              </span>
              です。ベテランカウンセラーは、親世代の心理やマナーにも精通しています。「相手のご家族に愛される立ち振る舞い」や、育った環境が違う二人の間を取り持つクッションとしての役割は、経験豊富なベテランだからこそご提供できる技です。

              <br /><br />

              <span className="font-black text-[#D9889D]">
                ❤️ 結婚の土台にあるのは、いつの時代も、人を心から愛する喜びと素晴らしさ
              </span>

              <br /><br />

              ハイクラスな婚活となると、年収、学歴、職業といった「条件のパズル」を合わせることに必死になってしまいがちです。しかしながら、やはり結婚は恋愛の延長上にあるべきだと考えています。

              <br /><br />

              <span className="font-bold text-gray-900">
                結婚には条件も大切ですが、最後に男女を繋ぐのはやはり愛だと思っています。ずっと先の将来、長い年月をかけたあと、死が夫婦や人々を悲しく別つ時、涙が流れるような愛が生まれますように願っています。
              </span>

              <br /><br />

              <span className="font-bold text-gray-900">
                「ここに来て、本当に良かった」
              </span>

              <br /><br />

              そう笑顔で卒業していただける未来のために、私は持てるすべての情熱と経験を注ぎます。私と一緒に、愛溢れる結婚を探しにいきませんか？
            </p>

            <div className="clear-both"></div>

          </div>

        </div>

      </section>

      {/* ============================================================
          BOTTOM CLOSING CTA BOARD
          ============================================================ */}
      <div className="w-full px-2 sm:px-4 mt-6">
        <div className="bg-gray-900 text-white rounded-2xl p-5 sm:p-6 text-center shadow-xl shadow-gray-900/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-[#D9889D]/10 to-transparent pointer-events-none" />
          
          <HeartHandshake className="w-8 h-8 text-[#E6A2B3] mx-auto mb-2 animate-pulse" />
          <h3 className="text-2xl sm:text-3xl font-black mb-1.5">毎月5名様限定のプレミアム相談枠</h3>
          <p className="space-y-2 text-gray-400 leading-relaxed font-medium w-full text-xl">
            ダブルサポートと、妥協のない戦略的な出会いを担保するため、新規ご入会は毎月5名様に絞らせていただいております。ご自身のキャリアと人生にふさわしいベストを目指す環境をお探しの方は、まずはお気軽に無料カウンセリングからお申し込みください。
          </p>

          <div className="flex flex-col sm:flex-row gap-2 justify-center items-center w-full pt-3">
            <Link 
              href="/#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E6A2B3] to-[#D9889D] text-white text-base font-black px-6 py-3 rounded-xl transition-transform hover:scale-[1.02] shadow-lg shadow-[#E6A2B3]/20"
            >
              <span className="space-y-2 text-gray-100 leading-relaxed font-medium w-full text-base">完全少人数制のカウンセリングを予約する</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}