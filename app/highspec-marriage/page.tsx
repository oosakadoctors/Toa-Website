import React from 'react';
import Image from "next/image";
import femaleAdvisor from "@/public/femaleAdvisor.jpg";
import maleAdvisor from "@/public/maleAdvisor.jpg";
import Link from 'next/link';
import { 
  Sparkles, 
  ArrowRight,
  Heart,
  ShieldCheck,
  Compass,
  CheckCircle2
} from 'lucide-react';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "【ハイスペック婚を目指す女性へ】結婚はゴールではない。｜大阪梅田ドクターズ結婚相談所",
  description:
    "【ハイスペック婚を目指す女性へ】結婚はゴールではない。あなたが相手に「与えられるもの」は何ですか？",
  alternates: {
    canonical: "/advantages",
  },
};

export default function ReasonsPage() {
  return (
    <div className="bg-amber-50/20 min-h-screen ">
      {/* ============================================================
          HERO BANNER HEADLINE (Warm Radiant Orange Gradient)
          ============================================================ */}
      <div 
        className="relative w-full py-12 px-4 sm:px-6 lg:px-8 text-center border-b border-amber-200/50 overflow-hidden mb-12"
        style={{ 
          background: "linear-gradient(135deg, rgba(255, 122, 0, 0.22) 0%, rgba(255, 178, 36, 0.2) 50%, rgba(255, 214, 153, 0.25) 100%)"
        }}
      >
        {/* Ambient Radiant Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-80 h-80 bg-[#FF6B00]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-[#FFB800]/25 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto flex flex-col items-center space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-amber-400/40 text-amber-900 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>大阪梅田ドクターズ結婚相談所</span>
          </div>
          
          {/* Main Headline - Exact Input Text */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-950 leading-snug sm:leading-tight tracking-tight max-w-3xl pt-1 [text-shadow:_0_0_8px_#ffffff,_0_0_16px_#ffffff,_0_0_24px_rgba(255,255,255,0.8)]">
            【ハイスペック婚を目指す女性へ】<br />
            結婚はゴールではない。あなたが相手に「与えられるもの」は何ですか？
          </h1>
          
          {/* Matching Gradient Divider Bar */}
          <div className="flex items-center justify-center gap-2 pt-1">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-800" />
            <div 
              className="w-24 h-1 rounded-full shadow-xs" 
              style={{ background: 'linear-gradient(90deg, #FF6B00 0%, #FF9E00 50%, #FFC107 100%)' }}
            />
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          </div>

        </div>
      </div>

           <section className="w-full">
            <div className="w-full max-w-4xl mx-auto">
              <div className="relative w-full aspect-[1/1] overflow-hidden rounded-2xl shadow-md">
                <Image
                  src="/highspec-woman-thinking-marriage.jpg"
                  alt="6か月でスピード成婚をめざす女性会員へのメッセージ写真"
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  loading="eager" 
                  fetchPriority="high"
                  priority={true}
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAAEAAQBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA="
                />
              </div>
            </div>
          </section>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* SECTION 1 */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-amber-100 shadow-sm relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-8 rounded-full bg-amber-500 text-white font-black flex items-center justify-center text-sm shrink-0">1</span>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900">
              1. 「もらって当たり前」のスタンスでは、豊かな結婚生活は継続できない
            </h2>
          </div>

          <div className="space-y-4 text-gray-800 font-medium text-[20px] leading-relaxed">
            <p>
              「経済的に豊かなハイスペックな男性と結婚して、不自由のない暮らしがしたい」<br />
              そう願う女性は少なくありません。しかし、社会的地位が高く、自ら富を築いてきた男性ほど、結婚生活における「互いに与え合う（ギブし合う）バランス」を非常に重視しています。
            </p>
            <p>
              現代のハイスペック婚において、女性だからといって「エスコートされて当然」「経済的に頼って当然」という一方的な依存スタンスでは、どれだけ熱烈に始まっても、結果として良好な関係を長く継続させることはできません。
            </p>
            <p>
              結婚とはゴールではなく、長い人生を共にする共同経営のようなもの。そこにあるべきなのは、片方が奪う関係ではなく「お互いを尊敬し合い、支え合い、深く関わり合いながら、生涯にわたって必要とされ続けるパートナーシップ」です。
            </p>
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-amber-100 shadow-sm relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-8 rounded-full bg-amber-500 text-white font-black flex items-center justify-center text-sm shrink-0">2</span>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900">
              2. 相手に求めるレベルは、すなわち「現在のあなたのレベル」である
            </h2>
          </div>

          <div className="space-y-4 text-gray-800 font-medium text-[20px] leading-relaxed">
            <p>
              「各分野で水は高きから低きに流れる」という自然の摂理がありますが、夫婦関係という器においても、トータルのバランス（均衡）が絶対に必要です。
            </p>
            <p>
              あなたが男性に高い経済力、優れた知性、スマートな包容力を求めるのであれば、あなた自身もまた、彼らの世界観を理解できる教養や、精神的な自立心、そして彼らを癒やす包容力やその他の魅力などを持ち合わせていなければ、関係のバランスが崩れてしまいます。「相手に求めるレベルは、そのまま自分のレベルを映す鏡」なのです。
            </p>
            <p>
              昨今、どれほど華やかな結婚式を挙げても、数年で離婚に至るカップルが後を絶ちません。離婚率が高いと言われる背景には、一時的な感情だけで結びつき、互いに「与え合う」精神が欠落していたために、生活の継続が困難になってしまう場合があります。あなたは人生のパートナーとなるお相手に対して、一体何を「与える」ことができますか？<br />
              またそれは、相手が永続的に求め続けるものですか？？
            </p>
          </div>
        </section>

        {/* SECTION 3 */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-amber-100 shadow-sm relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-8 rounded-full bg-amber-500 text-white font-black flex items-center justify-center text-sm shrink-0">3</span>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900">
              3. 家事代行で代替できる家事。年齢と共に失われる若さ。最後に残る「本質的な結びつき」
            </h2>
          </div>

          <div className="space-y-4 text-gray-800 font-medium text-[20px] leading-relaxed">
            <p>
              20代の若さや美しい容姿は、婚活において一時的なアドバンテージにはなりますが、時間は残酷にそれを目減りさせます。また、ハイスペックな家庭において、日々の家事や雑務は、家事代行や最新の家電などの外部サービスで簡単に担う（代替する）ことができます。
            </p>
            <p>
              つまり、「若さ」や「家事能力」「お料理」だけに頼った結婚生活は、時間の経過や環境の変化によって、その価値を維持できなくなるリスクをはらんでいるのです。
            </p>
            <p>
              激務や重責と戦うハイスペック男性が、生涯にわたって大切にし、共に暮らし続けたいと願うのは、代替可能な条件ではありません。外見だけではなく内面的な結びつきにより深く愛し合い、困難な時にこそ手を取り合い、同じ目線と熱量で人生を支え合える「本質的な結びつき」からしか、継続的な愛は生まれないのです。
            </p>
          </div>
        </section>

        {/* SECTION 4: MESSAGE FROM MARRIAGE AGENCY */}
<section className="bg-gradient-to-b from-amber-500/10 via-white to-amber-500/5 rounded-3xl p-6 sm:p-10 border-2 border-amber-300/60 shadow-md relative">
  {/* Floated Image at the absolute top-left of the card */}
  <div className="float-left mr-5 sm:mr-8 mb-4 w-28 sm:w-40">
    <Image
      src={femaleAdvisor}
      alt="大阪梅田ドクターズ結婚相談所"
      className="rounded-2xl shadow-md w-full h-auto object-cover border-2 border-amber-200"
      priority
    />
  </div>

  {/* Header Badge & Title aligned left to wrap beside the image */}
  <div className="mb-6">
    <span className="inline-block bg-amber-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest mb-2">
      Message
    </span>
    <h2 className="text-xl sm:text-3xl font-black text-gray-900 leading-snug">
      【大阪梅田ドクターズ結婚相談所】からのメッセージ
    </h2>
  </div>

  {/* Text Content */}
  <div className="text-gray-800 font-medium text-[20px] leading-relaxed">
    <p className="mb-4">
      当相談所が目指すのは、単に「お医者様やハイスペック男性と形だけの結婚をさせること」ではありません。
    </p>
    <p className="mb-4">
      あなたが一生、お相手の医師やハイスペック男性から必要とされ、愛され、幸せな家庭を維持し続けるための「本質的な人間力」と「具体的な行動戦略」を、ベテラン仲人と現役女性医師がマンツーマンで指導します。
    </p>
    <p className="mb-4">
      表面的なモテテクニックに頼る、継続できない婚活だけでは、数年も経てば、お相手はあなたを見なくなってしまいます。
    </p>
    <p className="mb-4">
      同じ目線で高め合える「一生モノのパートナーシップ」を手に入れるため、ご自身の内面を知り、結婚という自分探しの旅、幸せの未来について一緒に考えていきませんか？
    </p>

    {/* Clear Float before the CTA button */}
    <div className="clear-both" />

    <div className="pt-6 flex justify-center">
      <Link
        href="/line"
        className="group inline-flex items-center justify-center rounded-full bg-green-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-600 hover:shadow-xl active:translate-y-0"
      >
        無料相談・お問い合わせはこちら
        <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  </div>
</section>

      </div>
    </div>
  );
}