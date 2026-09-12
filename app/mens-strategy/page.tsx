import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Sparkles, 
  ChevronRight, 
  TrendingUp, 
  ShieldCheck, 
  UserCheck, 
  MessageSquare, 
  Compass, 
  ArrowRight,
  Clock,
  Briefcase
} from 'lucide-react';

export const metadata: Metadata = {
  title: '大阪の男性向け婚活戦略｜選ばれる男性になるための具体策',
  description: '大阪・梅田の結婚相談所が、男性会員向けの婚活戦略を解説します。プロフィール写真、お見合いの会話、交際中の進め方まで、仲人歴20年のベテランが具体的にサポートします。',
  alternates: { canonical: '/mens-strategy' },
  openGraph: {
    title: '大阪の男性向け婚活戦略｜選ばれる男性になるための具体策',
    description: 'プロフィール写真からお見合いの会話、交際中の進め方まで。仲人歴20年のベテランが具体的にサポートします。',
    url: '/mens-strategy',
    type: 'website',
  },
};

export default function MensStrategyPage() {
  return (
    <div className="bg-[#FAF8F5] text-gray-950 min-h-screen pb-16 font-medium text-xl w-full overflow-x-hidden">
      
      {/* ============================================================
          HERO BANNER HEADLINE (Full-Width Viewport)
          ============================================================ */}
<div className="w-full pt-14 pb-12 text-center bg-gradient-to-br from-[#0B2545] via-[#134074] to-[#1D4ED8] text-white border-b border-blue-400/30 shadow-xl px-4 relative">
  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-400/10 to-transparent pointer-events-none" />
  
  {/* Centered Pill Badge */}
  <div className="flex justify-center mb-5">
    <div className="inline-flex items-center gap-2 bg-pink-950/40 backdrop-blur-xs text-amber-300 border border-pink-500/30 px-4 py-1.5 rounded-full text-base sm:text-lg font-black tracking-widest uppercase shadow-sm">
      <Sparkles className="w-5 h-5 text-amber-300" />
      <span>Exclusive Strategy for Men</span>
    </div>
  </div>
  
  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-snug tracking-tight w-full max-w-5xl mx-auto text-white">
    格上女性を射止めたい30代男性のあなたへ。
  </h1>

  <p className="text-xl sm:text-2xl text-sky-200 mt-4 font-bold max-w-3xl mx-auto">
    30代だからこそ、妥協せず勝ちに行く。スペックの壁を越え、理想の女性を射止める「男のための最速攻略戦略」
  </p>
  
  <div className="w-24 h-1.5 bg-gradient-to-r from-sky-400 to-blue-300 mx-auto mt-7 rounded-full" />
</div>
      {/* ============================================================
          DYNAMIC NAVIGATION INDEX (Full-Width Mobile)
          ============================================================ */}
      <div className="w-full mb-12 sm:px-4 sm:mt-10">
        <div className="bg-white w-full max-w-5xl mx-auto p-6 sm:p-8 shadow-xs border-y sm:border border-gray-200/50 sm:rounded-2xl">
          <h2 className="text-base sm:text-lg font-black text-gray-400 tracking-wider uppercase mb-4 flex items-center gap-2">
            <Compass className="w-5 h-5 text-slate-800" />
            3大攻略フェーズ・ショートカット
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a 
              href="#phase1"
              className="text-left bg-[#FAF8F5] hover:bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center justify-between group transition-all"
            >
              <span className="text-base sm:text-lg font-bold text-gray-900">PHASE 01: プロフィール改造</span>
              <ChevronRight className="w-5 h-5 text-[#D9889D] group-hover:translate-x-0.5 transition-transform shrink-0" />
            </a>

            <a 
              href="#phase2"
              className="text-left bg-[#FAF8F5] hover:bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center justify-between group transition-all"
            >
              <span className="text-base sm:text-lg font-bold text-gray-900">PHASE 02: デート完全攻略</span>
              <ChevronRight className="w-5 h-5 text-[#D9889D] group-hover:translate-x-0.5 transition-transform shrink-0" />
            </a>

            <a 
              href="#phase3"
              className="text-left bg-[#FAF8F5] hover:bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center justify-between group transition-all"
            >
              <span className="text-base sm:text-lg font-bold text-gray-900">PHASE 03: コミュニケーション</span>
              <ChevronRight className="w-5 h-5 text-[#D9889D] group-hover:translate-x-0.5 transition-transform shrink-0" />
            </a>
          </div>
        </div>
      </div>

      {/* ============================================================
          MAIN MANIFESTO CONTAINER (Full-Width Mobile & Large Font)
          ============================================================ */}
      <div className="w-full mb-12 sm:px-4">
        <div className="max-w-5xl mx-auto bg-white w-full p-6 sm:p-10 shadow-xs border-y sm:border border-gray-100 sm:rounded-2xl">
          <span className="text-sm sm:text-base font-black text-slate-500 uppercase tracking-widest block mb-2">The Market Reality</span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-snug tracking-tight">
            「この年齢になったからこそ、もう妥協したくない」<br />そう決意したあなたへ。
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-slate-800 to-slate-600 mt-4 mb-8 rounded-full" />
          
          <div className="text-xl sm:text-2xl text-gray-700 leading-relaxed text-justify space-y-6 font-medium">
            <p>
              「自分の年収や外見は平均的。だから、ワンランク上の理想の女性（キャリア女性や人気の美女）は高望みかな……」と、諦める必要はありません。
            </p>
            <p className="font-black text-gray-950 bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl text-xl sm:text-2xl">
              正直にお伝えします。現在の結婚相談所において、30代前半の真面目な男性は、「売り手市場」です。
            </p>
            <p>
              婚活市場では、男性にも十分な出会いのチャンスがあります。
ただし、何の努力もせずに「自分より条件の良い女性」と結ばれるほど、婚活市場は甘くありません。
            </p>
            <p>
              大切なのは、スペックだけで勝負するのではなく、自分の魅力を知り、相手から選ばれるための準備をすること。
普通の会社員男性でも、婚活の進め方次第で、素敵な女性とのご縁をつかむことは十分可能です。
            </p>
            <p className="text-2xl sm:text-3xl font-black text-slate-900 pt-3 leading-tight">
              「理想の相手から選ばれるために、現役女医の心理分析のもと、あなたの持つポテンシャルをどう臨床的（clinical）に開花させるか」
            </p>
            <p>
              そのためのオーダーメイドの攻略作戦を徹底的に立てます。20年の最前線でハイクラスな成婚を目指してきたベテランカウンセラーが、あなたの<span className="font-bold text-gray-900 bg-rose-50/60 px-1 text-gray-950">「ベストを目指す戦略参謀（頼れる兄貴）」</span>となり、あなたの外見・立ち振る舞い・会話術を、選ばれる水準まで引き上げます。
            </p>
            <p>
              現在の30代男性は、「仕事のプロジェクトと同じように、人生のパートナー探しもプロに任せてなるべく早く終わらせる」というスマートな目的で入会されています。会社の信頼できる先輩に相談に行くような安心感で、あなたの『理想に近い理想』を私たちにぶつけてください。
            </p>
            <p className="font-black text-gray-950 text-2xl sm:text-3xl pt-3 text-[#D9889D]">
              人生の大きな節目に立ち、強い覚悟とプライドを持って一歩を踏み込むあなたを、私たちは熱意を持ってサポートさせていただきます。
            </p>
          </div>
        </div>
      </div>

      {/* ============================================================
          THE THREE STRATEGIC PHASES (Full-Width Mobile & Large Font)
          ============================================================ */}
      <div className="w-full mb-12 sm:px-4">
        <div className="max-w-5xl mx-auto bg-white w-full p-6 sm:p-10 shadow-xs border-y sm:border border-gray-100 sm:rounded-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-gray-900 flex items-center gap-3 border-b border-gray-100 pb-5 mb-8">
            <span className="w-3 h-6 bg-slate-900 rounded-xs shrink-0" />
            【サポート内容（3大戦略）】
          </h3>

          <div className="space-y-10">
            
            {/* PHASE 1 */}
            <div id="phase1" className="bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-gray-100 scroll-mt-24">
              <span className="bg-slate-900 text-white text-sm sm:text-base font-black px-4 py-1.5 rounded-sm inline-block mb-4">
                PHASE 01
              </span>
              <h4 className="font-black text-xl sm:text-2xl text-gray-900 mb-4">
                プロフィール劇的改造（現役女医監修）
              </h4>
              <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed text-justify">
                量産型の自己紹介文は、ターゲット層の目には留まりません。現役女医監修のもと、あなたの職歴、年収、趣味の背景にある「誠実さと将来性」をあぶり出し、聡明な女性が「この人の隣にいたい」と評価する<span className="font-bold text-gray-900">【プレミアムプロフィール】</span>を作成します。
              </p>
            </div>

            {/* PHASE 2 */}
            <div id="phase2" className="bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-gray-100 scroll-mt-24">
              <span className="bg-[#D9889D] text-white text-sm sm:text-base font-black px-4 py-1.5 rounded-sm inline-block mb-4">
                PHASE 02
              </span>
              <h4 className="font-black text-xl sm:text-2xl text-gray-900 mb-4">
                デート完全攻略（お相手別・オーダーメイド設計）
              </h4>
              <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed text-justify">
                初対面で「いい人だけど、興味がわかない」と判断されてしまう男性がいます。洗練されたデート場所の選定、スマートな所作、目線の配り方、知性が滲み出る会話のテンポまで、狙う女性のタイプに合わせて事前にシミュレーションを徹底します。
              </p>
            </div>

            {/* PHASE 3 */}
            <div id="phase3" className="bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-gray-100 scroll-mt-24">
              <span className="bg-slate-900 text-white text-sm sm:text-base font-black px-4 py-1.5 rounded-sm inline-block mb-4">
                PHASE 03
              </span>
              <h4 className="font-black text-xl sm:text-2xl text-gray-900 mb-4">
                コミュニケーション完全ナビゲート（20年ベテラン直伝）
              </h4>
              <div className="text-xl sm:text-2xl text-gray-700 leading-relaxed text-justify space-y-4">
                <p>
                  交際初期の段階において、メッセージの頻度や文面1つで関係が終了になるケースは少なくありません。相手の関心を引き続ける「適切な間隔」「温度感」「次につなげるキラーワード」を、ベテランカウンセラーがこれまでの成婚データからリアルタイムでバックアップ。
                </p>
                <p className="font-bold text-gray-950 border-l-4 border-[#D9889D] pl-4 py-1">
                  婚活における連絡は、減点を防ぐ「リスクマネジメント」が最重要です。そのプロの技を伝授します。
                </p>
                <p>
                  またお見合いやデートでの対話スキルでは、単なる雑談ではなく、短時間で「この人と未来を築きたい」と思わせる会話＆エスコート術を伝授。あなたの魅力と価値をチューニングし、平均スペックからでもワンランク上の女性を射止めるお手伝いをさせていただきます。
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ============================================================
          REASONS TO CHOOSE (Full-Width Mobile & Large Font)
          ============================================================ */}
      <div className="w-full mb-12 sm:px-4">
        <div className="max-w-5xl mx-auto bg-white w-full p-6 sm:p-10 shadow-xs border-y sm:border border-gray-100 sm:rounded-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">
            スマートな30代男性が、大阪梅田ドクターズ結婚相談所を選ぶ理由
          </h3>
          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed mb-8">
            当相談所に在籍する30代男性の多くは、「自分の時間を価値あるもの」と考える合理的なビジネスパーソンです。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-gray-100 flex gap-5 items-start">
              <div className="p-3.5 bg-slate-900 text-white rounded-xl shrink-0 mt-1">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-black text-lg sm:text-xl text-gray-950 mb-2">
                  タイムパフォーマンス（タイパ）の最大化
                </h4>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  結婚の意思が100%ある女性とだけ出会うため、時間のロスがありません。
                </p>
              </div>
            </div>

            <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-gray-100 flex gap-5 items-start">
              <div className="p-3.5 bg-[#D9889D] text-white rounded-xl shrink-0 mt-1">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-black text-lg sm:text-xl text-gray-950 mb-2">
                  「男磨き」の自己投資としての婚活
                </h4>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  ここで身につく「女性に選ばれるコミュニケーション能力や洗練された立ち振る舞い」は、そのまま仕事の商談やマネジメント、今後の人生のあらゆる場面で一生モノの武器になります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          DYNAMIC ACTION AREA / LINK DESTINATION (Full-Width Mobile)
          ============================================================ */}
      <div className="w-full sm:px-4 mt-10">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-slate-950 to-slate-900 text-white w-full p-8 sm:p-12 text-center shadow-xl relative overflow-hidden sm:rounded-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#D9889D]/15 to-transparent pointer-events-none" />
          
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-xs mb-5">
            <ShieldCheck className="w-7 h-7 text-[#E6A2B3]" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-black mb-4 tracking-tight">
            あなたのプライドと熱意に、私たちは全力で応えます
          </h3>
          
          <p className="text-xl sm:text-2xl text-gray-300 w-full max-w-3xl mx-auto mb-10 font-medium leading-relaxed text-justify sm:text-center px-1">
            信頼できるビジネスの先輩に、今後のキャリア戦略を相談しに行くような感覚で、まずは私たちのドアを叩いてください。ベストを目指す戦略参謀と共に、最短期間で理想を現実に変えましょう。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-1">
            <Link 
              href="/why-us" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#E6A2B3] to-[#D9889D] text-white text-lg sm:text-xl font-black px-10 py-5 rounded-2xl transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-[#E6A2B3]/30 active:scale-[0.98]"
            >
              <span>大阪梅田ドクターズ結婚相談所が選ばれる理由</span>
              <ArrowRight className="w-6 h-6 shrink-0" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}