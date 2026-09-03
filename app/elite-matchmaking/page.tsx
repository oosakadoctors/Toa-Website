import React from 'react';
import Image from "next/image";
import femaleAdvisor from "@/public/femaleAdvisor.jpg";
import maleAdvisor from "@/public/maleAdvisor.jpg";
import Link from 'next/link';
import { 
  Sparkles, 
  LineChart, 
  Stethoscope, 
  Compass, 
  ArrowRight,
  Phone,
  Brain,
  GraduationCap,
  CheckCircle2
} from 'lucide-react';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ハイスペック男女が大阪梅田で選ぶ最短成婚",
  description:
    "年収1000万以上の男女や医師が大阪梅田ドクターズ結婚相談所で最速成婚を叶える理由とは？「人生の幸せを共有する時間は一日でも長いほうがいい」という価値観のもと、決断と行動で人生の幸福度を最大化する、ハイクラスのための効率的な婚活戦略を解説します。",
  alternates: {
    canonical: "/advantages",
  },
};

export default function ReasonsPage() {
  return (
    <div className="text-[20px]">
      {/* ============================================================
          HERO BANNER HEADLINE (Warm Radiant Orange Gradient)
          ============================================================ */}
      <div 
        className="relative w-full py-12 px-4 sm:px-6 lg:px-8 text-center border-b border-amber-200/50 overflow-hidden"
        style={{ 
          background: "linear-gradient(135deg, rgba(255, 122, 0, 0.22) 0%, rgba(255, 178, 36, 0.2) 50%, rgba(255, 214, 153, 0.25) 100%)"
        }}
      >
        {/* Ambient Radiant Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-80 h-80 bg-[#FF6B00]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-[#FFB800]/25 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto flex flex-col items-center space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-amber-400/40 text-amber-900 px-4 py-1.5 rounded-full text-[15px] font-black tracking-widest uppercase shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
            <span>🟧ハイスペックなあなたへ🟧</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-[30px] sm:text-[38px] lg:text-[48px] font-black text-gray-950 leading-snug sm:leading-tight tracking-tight max-w-3xl pt-1 [text-shadow:_0_0_8px_#ffffff,_0_0_16px_#ffffff,_0_0_24px_rgba(255,255,255,0.8)]">
            ハイスペック男女が大阪梅田で選ぶ最短成婚｜人生の幸せを共にする時間は一日でも長いほうがいい
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

          {/* Integrated Intro Text Box */}
          <div className="w-full max-w-3xl rounded-2xl border border-amber-200/70 bg-white/85 backdrop-blur-md p-6 sm:p-8 shadow-sm text-left sm:text-center">
            <p className="text-[18px] sm:text-[20px] lg:text-[23px] font-medium text-gray-800 leading-relaxed sm:leading-loose">
              ハイスペック男女がお相手に困っているわけではないのに、大阪梅田ドクターズ結婚相談所で成婚にむきあうのはなぜなのか？
              その答えは、幸せをもたらす結婚を効率的に最短で掴みとり、人生全体の幸福度を上げることが<span className="font-bold text-amber-700">【価値ある選択】</span>と考えているからです。
              <br className="hidden sm:inline" />
              <span className="font-bold text-gray-900 bg-amber-100/70 px-1.5 py-0.5 rounded mt-2 inline-block">
                【人生の幸せをパートナーと共有する時間は、1日でも長いほうがいい】
              </span>
              <br />
              これは、ビジネスの世界で「決断と行動が早いほど、得られる恩恵は大きくなる」ように、婚活においても同様の結果がもたらされます。「一日でも早く理想のパートナーと出会うこと」は、人生全体の幸福度を最大化する決断です。
              ハイスペック男女が、迷うことなく「今」動き、一日でも長く結婚がもたらす幸せを享受すべき明確な理由がここにあります。
            </p>
          </div>

        </div>
      </div>

      {/* Female Doctor Letter */}
      <section className="mx-auto px-0 sm:px-2 lg:px-10 py-2">
        <div className="rounded-3xl border border-amber-100 bg-white shadow-sm p-6 sm:p-10">
          <div className="text-center mb-8">
            <span className="text-[15px] font-black tracking-widest uppercase text-amber-600 block">
              Message
            </span>
            <h2 className="text-[26px] sm:text-[48px] lg:text-[58px] font-black text-gray-900 leading-tight">
              📙現役女医カウンセラーからのアドバイス📙<br />
              【第一線で戦うあなたへ。最短で「幸せな家庭」を手に入れるためのアプローチ】
            </h2>
          </div>

          <div className="space-y-2 text-gray-800 leading-relaxed font-medium w-full text-[20px]">
            <div className="float-left mr-5 mb-3 w-28 sm:w-36 md:w-44">
              <Image
                src={femaleAdvisor}
                alt="Female Doctor"
                className="rounded-2xl shadow-md w-full h-auto object-cover"
                priority
              />
            </div>

            日々、社会の最前線でご活躍されている皆さまへ。<br/><br/>
            社会的な責任や役割の中、充実した多忙な毎日を送っておられると思います。<br/><br/>
            一方、責任ある立場になればなるほど、誰からも助言は得られにくく自らで自らの判断や行動を律し、あらゆるフィールドで知的好奇心を満たしながら、さらなる高みを目指す毎日になります。<br/><br/>
            立ち止まり考え、そしてまた進んでいく毎日の中、社会で必要とされる喜びを享受されているはずです。<br/><br/>
            一つの扉を開けば、またその先の扉が開くように、終わりのない挑戦が楽しく、人生の価値を高めてくれます。
            一方で、仕事だけでは幸せになれないとよく言われますが、それは仕事とは別に、肩書き関係なく本当の自分に戻れる居場所があることが、人生の幸福度を決定づけるという意味でもあります。<br/><br/>
            社会的な立場で求められる自分と本当の自分には少し違いがあることが多いはずです。社会では責任あるスマートな決断を求められ自信溢れた行動を要求されますが、プライベートでは心配性だったり小学生のように甘えただったりすることもよくあります。<br/><br/>
            家庭に帰った瞬間に、自分の社会的地位や年収、肩書きに関係なく、ただ『あなた』という存在を受け入れて、どんな敵が来てもどんなことが起きても味方でいてくれるパートナーがいる。誰かにささえられ、誰かをささえることが、人を、強くしてくれます。<br/><br/>
            また、小さな幸せが私達を幸せにしてくれます。美味しいご飯を一緒に食べ、何気ない今日の出来事を話し、時には笑い合い、時には熱く語り、お互いの存在に安心を感じる。そんな何気ない日常の温かみは、外の世界のどんな成功よりも深く私たちの心を癒やしてくれます。<br/><br/>
            幸せな結婚生活のスタートは、一日でも早いほうがいいと思います。なぜなら、温かい家庭や家族や子供のために生きる毎日は、仕事とは違う別の大きな幸せを人生に与えてくれますし、幸せをささえる健康や寿命も限りあるものですから、一日一日は誰にとっても貴重なものです。<br/><br/>
            ハイステータス男女の立場や思考を理解する大阪梅田ドクターズ結婚相談所で、あなたの豊かな未来を変える一歩を踏み出してみませんか？ 
            LINE相談でお話しできるのを楽しみにしています。

            <div className="clear-both"></div>

            <div className="mt-8 flex justify-center">
              <a
                href="https://lin.ee/ZXB0UNs" 
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center rounded-full bg-green-500 px-8 py-3 text-[20px] font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-600 hover:shadow-xl active:translate-y-0"
              >
                LINEで質問してみる
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Male Counselor Letter */}
      <section className="mx-auto px-0 sm:px-2 lg:px-10 py-2">
        <div className="rounded-3xl border border-amber-100 bg-white shadow-sm p-6 sm:p-10">
          <div className="text-center mb-8">
            <span className="text-[15px] font-black tracking-widest uppercase text-amber-600 block">
              Message
            </span>
            <h2 className="text-[26px] sm:text-[48px] lg:text-[58px] font-black text-gray-900 leading-tight">
              📙ベテランカウンセラーのメッセージ📙
            </h2>
          </div>

          <div className="space-y-2 text-gray-800 leading-relaxed font-medium w-full text-[20px]">
            <div className="float-left mr-5 mb-3 w-28 sm:w-36 md:w-44">
              <Image
                src={maleAdvisor}
                alt="Male Counselor"
                className="rounded-2xl shadow-md w-full h-auto object-cover"
              />
            </div>

            20年間で多数の人生を見てきたから断言できることがあります。<br/><br/>「結婚は、あなたの人生を2倍にも3倍にも豊かにする」<br/><br/>
            これまで20年間、大阪でハイスペック層と呼ばれる皆さまの婚活を多数見守り、良縁を結んできました。たくさんの男女の悩みにも寄り添ってきました。<br/><br/>
            その中で感じているのは、第一線で活躍する方ほど『一人で生きていける強さ』を持っているということです。しかし、だからこそ『この人とだから、一緒に生きていきたい』と思えるパートナーに出会えたときの喜びは計り知れません。<br/><br/>
            『今日、こんなに嬉しいことがあった』『仕事でちょっと迷いがあった』
            そんな日々の機微を、聞いてもらえる家族がいることそれは、これからの人生を生き抜く上での『無敵の盾』を手に入れるようなものです。<br/><br/>一人で見る景色も素晴らしいですが、愛する人と二人で分かち合う景色は、あなたの人生の彩りをまったく違うものに変えてくれます。<br/><br/>
            大切に守るべき人、大切な自分の家庭があれば、人は強くなれますし、人生の選択肢も豊かに広がります。
            家族のために、時には犠牲になりながら、また失敗も成功も経験し、挫折を知りながら深みある人間に成長するでしょう。<br/><br/>
            結婚をあせる必要はありませんが、人生の最も輝かしい、エネルギーに溢れた時間を共に紡ぎ、支え合う時間は、一日でも長いほうが絶対に幸せです。<br/><br/>
            ハイスペックなあなたの『本当の相性』まだ結婚したその先までを、20年の経験から推しはかることができます。パートナーに出会うチャンスを広げるため、婚活もプロを頼って最短で最高の成果を掴み取りましょう。<br/><br/>大阪梅田ドクターズ結婚相談所があなたのハイスペック婚活を全力でサポートします。<br/><br/>
            結婚すべきか？の迷いがある人は詳しく見るをどうぞ🧡

            <div className="clear-both"></div>

            <div className="mt-8 flex justify-center">
              <Link
                href="#essential-question"
                className="group inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-[20px] font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-xl active:translate-y-0"
              >
                結婚すべきか？詳しく見る
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="mx-auto px-0 sm:px-2 lg:px-10 py-2">
        <div className="rounded-3xl border border-amber-100 bg-white shadow-sm p-6 sm:p-10 mb-4">
          <h2 className="text-[26px] sm:text-[48px] lg:text-[58px] font-black text-gray-900 leading-tight mb-4">
            【For MEN】年収1000万円以上の医師・経営者・エグゼクティブの男性へ
          </h2>
          <div className="space-y-2 text-gray-800 leading-relaxed font-medium w-full text-[20px]">
            時間を節約🧡完全外注型サポート<br/><br/>
            【完全代行型】お見合い設定：ご希望に応じてプロフィールの厳ご紹介からスケジュール調整まで、すべて当相談所が代行します。<br/><br/>
            もしあなたが避けたいと思うわずらわしい作業があるならば、可能な限り代行させていただきます🧡<br/>
            【温かみと美貌を兼ね備えた女性をご紹介】<br/>
            単に容姿が美しいだけでなく、エグゼクティブの妻として、また人生の真のパートナーとしてお互いを高め合える、美貌とを温かい内面を合わせ持つ女性をご推薦します。
          </div>
        </div>

        <div className="rounded-3xl border border-amber-100 bg-white shadow-sm p-6 sm:p-10">
          <h2 className="text-[26px] sm:text-[48px] lg:text-[58px] font-black text-gray-900 leading-tight mb-4">
            【For WOMEN】ハイスペック女性の方へ <br/>📙ベテランカウンセラーより📙
          </h2>
          <div className="space-y-2 text-gray-800 leading-relaxed font-medium w-full text-[20px]">
            築いてきたキャリアも、人を愛する純粋な心も、どちらも諦めなくていい。<br/>
            はじめまして。大阪梅田ドクターズ結婚相談所のカウンセラーです。<br/>
            これまで、社会の第一線で美しく、そして懸命に戦ってきた多くの女性たちの人生に寄り添ってきました。その中で、彼女たちが口を揃えて言う言葉があります。<br/>
            「私のキャリアや立場を、丸ごと受け止めてくれる男性が本当にいるのだろうか」<br/>
            もしあなたもそんな不安を抱えているなら、どうか安心してください。あなたのキャリアその能力も、すべてあなたの素晴らしい魅力です。<br/>
            あなたの立場や能力を理解し同じ目線で尊敬し支えあえる男性であることはもちろんですが、もう一つのあなたに必要なのは、一人の女性として甘えられる場所です、あなたの知性やキャリアをリスペクトし、対等なパートナーとして支え合える「本物の愛」です。<br/>
            お互いを愛おしく思い、心から支えあえる。そんな「恋愛の延長にある最高の結婚」こそが、あなたの人生をさらに輝かせるでしょう。<br/><br/>
            大阪梅田ドクターズ相談所は、条件だけでなく相性を考え、あなたのご希望に寄り添うため、【完全少人数制】を徹底しています。<br/><br/>
            私達が培ってきた「ハイクラスな男性の本質を見抜く力」と「成婚への確かなノウハウ」。この2つのアプローチで、あなたのキャリアを敬い、一人の女性として心から愛してくれる男性とのご縁を力強く引き寄せます。<br/><br/>
            結婚は、何かを犠牲にするものではありません。<br/><br/>
            大好きな人と巡り合い、愛し、愛されることで、あなたの人生はもっと自由で、もっと豊かになります。<br/><br/>
            「私のすべてを受け止めてくれる、最高の味方に出会えた」そう笑顔で卒業していただける未来のために、私は持てるすべての情熱と経験を注ぎます。
            LINE相談を心よりお待ちしております。
          </div>
        </div>
      </section>

      {/* ============================================================
          NEW SECTION: THE ESSENTIAL QUESTION OF MARRIAGE
          ============================================================ */}
      <div id="essential-question" className="w-full mb-10 sm:px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* MAIN PHILOSOPHY CONTAINER */}
          <div className="bg-white w-full p-5 sm:p-8 shadow-xs border-y sm:border border-amber-100 sm:rounded-2xl">
            <span className="text-[15px] sm:text-[18px] font-black text-amber-600 uppercase tracking-widest block mb-1.5">The Essential Question</span>
            <h2 className="text-[26px] sm:text-[48px] lg:text-[58px] font-black text-gray-900 leading-tight">
              【本質的な問い】一人でも豊かに生きていける時代に、<br className="hidden sm:inline" />あなたは本当に「結婚すべき」なのか？？
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mt-3 mb-6 rounded-full" />
            
            <h3 className="text-[23px] sm:text-[26px] font-black text-gray-800 leading-snug mb-4 border-l-4 border-amber-500 pl-3">
              過去の「義務」から、現代の「自由な選択肢」へ
            </h3>
            
            <div className="space-y-2 text-gray-800 leading-relaxed font-medium w-full text-[20px]">
              <p>
                昭和の時代までは、結婚は「大人ならして当たり前の通過点」でした。しかし現代における結婚は、<span className="font-black text-gray-950 border-b-2 border-amber-400 px-0.5">「しても、しなくても、どちらでも幸せになれる自由な選択肢」</span>に変わっています。
              </p>
              <p>
                つまり世間体やカタチではなく、結婚するということは<span className="font-bold text-gray-900 bg-amber-50 px-1 rounded-sm">【人生という長い旅を、お互いに支え合って進む『チーム』を作ること】</span>です。
              </p>
              <p>
                一人の人生には、自分の思い通りになる「自由」や「1人だからこそ選べる選択肢」もあります。一方で結婚は、その自由を少しだけ相手と分け合う必要があり、その代わりに1人では得られない「深い安心感」と「チームで進む人生の選択肢」をふたりで育んでいくコースです。
              </p>
              <p className="font-black text-gray-950 text-[23px] sm:text-[26px] pt-2 text-amber-700">
                「どちらが正しい」ということはありません。
              </p>
              <p>
                あなたがこれからの人生で、「自由な時間と1人だからこそできる選択を大切にしたいか」、それとも「誰かと人生を分かち合う時間と2人だからこそできる選択を大切にしたいか」という、これからの生き方の問題なのです。
              </p>
            </div>
          </div>

          {/* THREE VALUES OF MARRIAGE */}
          <div className="bg-white w-full p-5 sm:p-8 shadow-xs border-y sm:border border-amber-100 sm:rounded-2xl">
            <h3 className="text-[26px] sm:text-[32px] font-black text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-4 mb-6">
              <span className="w-2.5 h-5 bg-amber-500 rounded-xs shrink-0" />
              結婚を選ぶ人たちが家族に見出している「3つの真実の価値」
            </h3>
            <p className="space-y-2 text-gray-800 leading-relaxed font-medium w-full text-[20px]">
              さて、ここは結婚相談所なので、結婚を選ぶ人たちが、結婚、自由、そして家族にどんな価値を見出しているかを見てみましょう。その価値は大きくわけて3つあると思います。
            </p>

            {/* VALUE BLOCKS */}
            <div className="space-y-6 mt-4">
              
              {/* VALUE 1 */}
              <div className="bg-[#FFFDF9] p-5 rounded-xl border border-amber-100/60">
                <h4 className="font-black text-[23px] sm:text-[26px] text-gray-900 mb-3 flex items-start gap-2">
                  <span className="bg-amber-500 text-white text-[15px] sm:text-[18px] font-black px-2.5 py-0.5 rounded-sm shrink-0 mt-1">1</span>
                  人生の「基盤・よりどころ」としての位置づけと孤独の解消
                </h4>
                <p className="space-y-2 text-gray-800 leading-relaxed font-medium w-full text-[20px]">
                  最も多くの人が家族に求める位置づけです。結婚を「人生を生き抜くためのチーム結成」と捉えます。具体的には絶対的な味方がいることで安心や安定を得られます。
                </p>
                <div className="mt-3 space-y-2 pl-3 border-l-2 border-amber-400 text-[18px] sm:text-[20px] text-gray-600">
                  <p>• <span className="font-black text-gray-900">孤独の解消：</span>人生の喜びや苦しみを分かち合える相手がいる安心感</p>
                  <p>• <span className="font-black text-gray-900">自己肯定感の向上：</span>ありのままの自分を受け入れてくれる存在の獲得</p>
                </div>
              </div>

              {/* VALUE 2 */}
              <div className="bg-[#FFFDF9] p-5 rounded-xl border border-amber-100/60">
                <h4 className="font-black text-[23px] sm:text-[26px] text-gray-900 mb-3 flex items-start gap-2">
                  <span className="bg-amber-500 text-white text-[15px] sm:text-[18px] font-black px-2.5 py-0.5 rounded-sm shrink-0 mt-1">2</span>
                  人生のリスク軽減と、経済的・生活基盤の安定
                </h4>
                <p className="space-y-2 text-gray-800 leading-relaxed font-medium w-full text-[20px]">
                  万が一の病気やキャリアの転換期を迎えたとき、一人で全てを抱え込むのはハイリスクです。二人で支え合うことで、人生の様々なリスクに備えたり、共働きによる世帯収入の増加によって、生活の選択肢を大きく広げることができます。
                </p>
              </div>

              {/* VALUE 3 */}
              <div className="bg-[#FFFDF9] p-5 rounded-xl border border-amber-100/60">
                <h4 className="font-black text-[23px] sm:text-[26px] text-gray-900 mb-3 flex items-start gap-2">
                  <span className="bg-amber-500 text-white text-[15px] sm:text-[18px] font-black px-2.5 py-0.5 rounded-sm shrink-0 mt-1">3</span>
                  人生の自己実現を達成し、ふたりで人生を2倍豊かにする
                </h4>
                <p className="space-y-2 text-gray-800 leading-relaxed font-medium w-full text-[20px]">
                  「1人でも十分に幸せだけど、2人ならもっと楽しい」という高い次元の考え方です。
                  自分の子供を育てたい、温かい家庭を築いたいという願望の実現や、独身の立場から脱却して新しい社会的な役割（夫・妻・親）を得る側面もあります。
                </p>
                <p className="space-y-2 text-gray-800 leading-relaxed font-medium w-full text-[20px]">
                  お互いの仕事や趣味、一人の時間も尊重し合い、美味しいものを食べる、旅をするなど、何をしても人生を2倍楽しめるでしょう。家族になれば過ごす時間は多くなり、経験の共有はさらに増えていきます。
                </p>
              </div>

            </div>
          </div>

          {/* THE QUESTION SELF-REFLECTION BOX */}
          <div className="bg-white w-full p-5 sm:p-8 shadow-xs border-y sm:border border-amber-100 sm:rounded-2xl">
            <h3 className="text-[23px] sm:text-[26px] font-black text-gray-900 mb-3">
              あなたにとっての「位置づけ」を見つけるヒント
            </h3>
            <p className="space-y-2 text-gray-800 leading-relaxed font-medium w-full text-[20px]">
              もし「自分にとって結婚って何だろう？」と迷ったら、次の問いを自分に投げかけてみてください。
            </p>

            <div className="bg-amber-50/70 p-5 sm:p-6 rounded-xl border border-amber-200/60 text-center my-5">
              <p className="font-black text-[20px] sm:text-[26px] text-gray-950 leading-snug tracking-tight">
                「もし、一生誰にも独身であることを責められず、お金の不安も一切ないとしたら、<br className="hidden sm:inline" />私は誰かと一緒に暮らしたいですか？」
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
              <div className="bg-[#FFFDF9] p-4 sm:p-5 rounded-xl border border-amber-100/60">
                <p className="font-black text-[20px] sm:text-[23px] mb-2 flex items-center gap-1.5 text-amber-700">
                  <span>👉 「それでも誰かといたい」場合</span>
                </p>
                <p className="text-[18px] sm:text-[20px] text-gray-600 leading-relaxed">
                  あなたにとって結婚は<span className="font-bold text-gray-900">「精神的なつながりや喜びの共有」</span>を目的とする場合が多いです。
                </p>
              </div>

              <div className="bg-[#FFFDF9] p-4 sm:p-5 rounded-xl border border-amber-100/60">
                <p className="font-black text-[20px] sm:text-[23px] mb-2 flex items-center gap-1.5 text-gray-700">
                  <span>👉 「それなら1人がいい」場合</span>
                </p>
                <p className="text-[18px] sm:text-[20px] text-gray-600 leading-relaxed">
                  今のあなたにとって結婚は優先度が低いか、もしくは結婚に<span className="font-bold text-gray-900">「条件や明確な自己実現」</span>を求めている場合が多いです。
                </p>
              </div>
            </div>
          </div>

          {/* DOCTOR'S COMMENT BLOCK */}
          <div className="bg-gradient-to-b from-white to-[#FFFDF9] w-full p-5 sm:p-8 shadow-sm border-y sm:border border-amber-200/50 sm:rounded-3xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="bg-amber-100 text-amber-800 text-[15px] sm:text-[18px] font-black px-3 py-1 rounded-md tracking-wider">
                女医からの一言
              </span>
            </div>

            <div className="text-gray-800 leading-relaxed font-medium text-[20px]">
              <div className="float-left mr-5 mb-3 w-24 sm:w-32 md:w-36">
                <Image
                  src={femaleAdvisor}
                  alt="女医カウンセラー"
                  className="rounded-2xl shadow-md w-full h-auto object-cover"
                  priority
                />
              </div>

              <p className="mb-4">
                求めている結婚像がぼんやりとわかれば、それを自分に与えてくれるお相手も少しずつわかってくると思います。
                一緒にあなたにとってベストの結婚の形、またそのお相手を探しましょう🧡
              </p>

              <p className="font-black text-gray-950 text-[23px] sm:text-[26px] border-l-4 border-amber-500 pl-4 py-3 bg-white shadow-sm rounded-r-xl border border-amber-100 mb-4">
                また結婚や、自分の求めるものについて考えることは、自分を深く知ることになり【アイデンティティの確立】に繋がります。
              </p>

              <p className="text-gray-600 text-[18px] sm:text-[20px]">
                ここで深く内省した経験は、きっと将来、あなたの人生において様々な分かれ道、選択すべき岐路に立たされた時に、何か役立つに違いありません。
              </p>

              <div className="clear-both" />
            </div>
          </div>

        </div>
      </div> 
    </div>
  );
}