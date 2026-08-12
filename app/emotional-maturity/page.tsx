

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { MessageCircle, ShieldCheck, ArrowRight, Brain, HeartHandshake, Sparkles } from 'lucide-react';

export const metadata = {
  title: "大人の結婚に必要な「人間的成熟度」とは？内面魅力の4つの条件",
  description: "生涯のパートナーから選ばれるための「人間的成熟度（精神的成熟）」を心理学・臨床経験に基づき徹底解説。白黒思考を脱却し、結婚生活の土台となるポスト形式的思考や真の共感力を育む4つの内面的アプローチを大阪梅田ドクターズ結婚相談所が提案します。",
  keywords: ["大阪梅田 結婚相談所", "人間的成熟度", "精神的成熟", "ポスト形式的思考", "共感力", "大人の婚活", "内面磨き", "医師監修 結婚相談所"],
  authors: [
    { name: "現役女医（大阪梅田ドクターズ結婚相談所監修）" },
    { name: "ベテランカウンセラー" }
  ],
  openGraph: {
    title: "大人の結婚に必要な「人間的成熟度」とは？内面魅力の4つの条件",
    description: "生涯のパートナーから選ばれるための「人間的成熟度（精神的成熟）」を心理学・臨床経験に基づき徹底解説。矛盾を受け入れる大人の思考システムとは？",
  },
  twitter: {
    title: "大人の結婚に必要な「人間的成熟度」とは？内面魅力の4つの条件",
    description: "白黒思考から脱却し、生涯続く結婚生活の安心の土台となる「人間的成熟度」の育て方を解説。",
  },
};

export default function PsychologicalMaturityLandingPage() {
  return (
    <div className="relative min-h-screen text-slate-800 font-sans antialiased selection:bg-sky-200 w-full overflow-x-hidden">
      
      {/* 画面全体の固定背景レイヤー */}
      <div 
        className="fixed inset-0 pointer-events-none -z-10 bg-cover bg-center bg-no-repeat bg-fixed opacity-60"
        style={{ backgroundImage: "url('/skyRepeat.jpg')" }}
      />
      
      {/* ベース背景カラー */}
      <div className="fixed inset-0 pointer-events-none -z-20 bg-sky-50/30" />

      {/* Header Section */}
      <header className="relative bg-gradient-to-br from-sky-200/70 via-indigo-100/60 to-blue-200/70 text-slate-900 py-12 px-4 md:px-6 text-center overflow-hidden w-full border-b border-sky-300/80 shadow-xs backdrop-blur-sm">
        <div className="max-w-3xl mx-auto relative z-10 w-full">
          <span className="inline-block bg-sky-700 text-sky-50 font-extrabold tracking-widest text-sm md:text-xs uppercase px-4 py-1.5 rounded-full mb-4 shadow-xs">
            🟢 内面磨きの特別コラム
          </span>
          <h1 className="text-2xl md:text-4xl font-serif font-extrabold leading-tight tracking-wider mb-6 text-slate-900 drop-shadow-xs">
            大人の結婚に必要な「人間的成熟度」とは？<br />
            誰もが本能的に惹かれる内面魅力の4つの条件
          </h1>
          <div className="bg-white/85 p-5 md:p-6 rounded-3xl border border-sky-300/80 shadow-sm inline-block text-left w-full backdrop-blur-md">
            <p className="text-slate-700 text-[20px] md:text-base leading-relaxed tracking-wide text-center w-full">
              恋愛の「火種」を燃え上がらせ、生涯続く結婚生活の「安心の土台」となるもの。<br />
              それが、性別を超えて誰もが惹きつけられる「人間的成熟度（精神的成熟）」です。<br />
              心理学や医療の現場でも重視されるこの成熟度は、モテテクニックだけでは作れません。<br />
              ここでは、婚活サバイバルを勝ち抜き、生涯のパートナーから「この人と生きたい」と選ばれるための4つの内面的アプローチと、他者受容をスムーズに可能にする脳と心のメカニズムを解説します。
            </p>
          </div>
        </div>
      </header>

      {/* Section 1: 4つの条件 */}
      <section className="py-8 w-full px-4">
        <div className="max-w-3xl mx-auto w-full">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-5 md:p-7 shadow-sm border border-sky-200/80 space-y-6 w-full">
            <div className="text-center px-2 w-full">
              <h2 className="text-[22px] md:text-2xl font-serif font-bold text-slate-900 tracking-wider">
                本能的に惹かれる「人間的成熟度」4つの条件
              </h2>
            </div>

            <div className="grid gap-3.5 md:grid-cols-2 w-full">
              {/* 1. 自分の感情の認知 */}
              <div className="bg-sky-50/70 p-4 border border-sky-200/80 flex flex-col justify-between w-full rounded-2xl shadow-2xs">
                <div className="w-full">
                  <h3 className="font-bold text-sky-900 text-[20px] md:text-base mb-1.5 w-full">
                    1. 自分の感情の認知
                  </h3>
                  <p className="text-[20px] md:text-sm text-slate-700 leading-relaxed w-full">
                    自分の心に湧き上がる「寂しさ・怒り・恐怖」といった感情 from 目を背けず、客観的に見つめる力（メタ認知能力）です。自分の内面を把握できているからこそ、他者に対しても嘘のない、圧倒的な誠実さとして伝わります。
                  </p>
                </div>
              </div>

              {/* 2. 感情の安定（セルフコントロール） */}
              <div className="bg-sky-50/70 p-4 border border-sky-200/80 flex flex-col justify-between w-full rounded-2xl shadow-2xs">
                <div className="w-full">
                  <h3 className="font-bold text-sky-900 text-[20px] md:text-base mb-1.5 w-full">
                    2. 感情の安定（セルフコントロール）
                  </h3>
                  <p className="text-[20px] md:text-sm text-slate-700 leading-relaxed w-full">
                    心理学者ダニエル・ゴールマンが提唱するEQ（心の知能指数）の根幹であり、不安や怒りを「お相手のせい」にせず、自分で感情を処理するメンタルヘルス能力。「大人の安定感」は、変化の多い現代の結婚生活において、最も価値のある心理的安定性となります。
                  </p>
                </div>
              </div>

              {/* 3. 自己への肯定感 */}
              <div className="bg-sky-50/70 p-4 border border-sky-200/80 flex flex-col justify-between w-full rounded-2xl shadow-2xs">
                <div className="w-full">
                  <h3 className="font-bold text-sky-900 text-[20px] md:text-base mb-1.5 w-full">
                    3. 自己への肯定感
                  </h3>
                  <p className="text-[20px] md:text-sm text-slate-700 leading-relaxed w-full">
                    自分の強みだけでなく、不完全な部分や弱さも「これが今の自分だ」と認め、自分自身の最大の味方でいられる強さです。自分の内側にブレない土台があるため、精神的恒常性（メンタルの安定）を維持できます。<br />
                    他者からの過度な承認欲求（見返り）を求めず、自立して相手と向き合えるため、依存や支配のない対等なパートナーシップが築けます。
                  </p>
                </div>
              </div>

              {/* 4. 高い共感力と傾聴力 */}
              <div className="bg-sky-50/70 p-4 border border-sky-200/80 flex flex-col justify-between w-full rounded-2xl shadow-2xs">
                <div className="w-full">
                  <h3 className="font-bold text-sky-900 text-[20px] md:text-base mb-1.5 w-full">
                    4. 高い共感力と傾聴力
                  </h3>
                  <p className="text-[20px] md:text-sm text-slate-700 leading-relaxed w-full">
                    相手の話を自分の価値観で評価（ジャッジ）せずに聴くことができ、相手の気持ちや背景となる世界をそのまま理解【共感】しようとする姿勢です。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: 真の共感の仕方 */}
      <section className="py-8 bg-sky-100/30 backdrop-blur-xs w-full border-y border-sky-200/60 px-4">
        <div className="max-w-3xl mx-auto w-full space-y-5">
          <div className="bg-white/80 backdrop-blur-md p-5 md:p-6 border border-sky-200/80 w-full space-y-4 rounded-3xl shadow-xs">
            <h3 className="text-[22px] md:text-xl font-bold text-sky-950 tracking-wider w-full">
              💚 簡単そうで難しい？！「真の共感の仕方」
            </h3>
            <p className="text-[20px] md:text-base leading-relaxed text-slate-700 w-full">
              他者に共感できるというのは、単に相手の話に「笑顔で相槌を打つ」といった表面的なスキルではありません。共感できるために必要な力を、もう少し深く考えてみましょう。
            </p>

            <div className="bg-sky-50/80 p-4 md:p-5 rounded-2xl border border-sky-200/80 space-y-3">
              <h4 className="font-bold text-sky-900 text-[20px] md:text-base">
                【問い】真に相手に共感するためには何が必要か？
              </h4>
              <p className="text-[20px] md:text-base leading-relaxed text-slate-800 font-bold">
                【答え】
              </p>
              
              <div className="space-y-3 text-[20px] md:text-base text-slate-700 leading-relaxed">
                <div>
                  <h5 className="font-bold text-sky-950 text-[20px] md:text-base">1. 視点を変えた想像力</h5>
                  <p>
                    自分とは全く異なる価値観や背景を持つ相手が、「なぜその感情を抱くに至ったか」という背景を、視点を変えて論理的・感情的に想像、推測する力です。現在の自分の位置から自分を少しずつ遠ざけていくイメージでやってみると、上手くできるかもしれません。
                  </p>
                </div>

                <div>
                  <h5 className="font-bold text-sky-950 text-[20px] md:text-base">2. 判断（自分の価値観との照合）を一旦手放す</h5>
                  <p>
                    共感することが苦手な人は「じゃあ、自分もその意見や行動を正しいと思うか？（＝同意）」を、話を聴きながら自分の倫理観や価値観と照合し、お相手をジャッジしてしまいます。
                  </p>
                  <p className="mt-1">
                    そのため、「相手の状況や気持ちは100%理解できる（ステップ①）」けれど、「私の価値観とは違うから同意はできない（ステップ②）」という状態で思考が止まりがちです。
                  </p>
                  <p className="mt-2 font-bold text-sky-950 bg-white p-3 rounded-xl border border-sky-200">
                    本当の共感とは、相手に対する「正しい・間違い」や「ベストな選択か否か」を判定する作業をせずに、ただ「今、相手が感じている痛みや喜びを、自分も同じ温度で感じる」ということなのです。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: ポスト形式的思考 */}
      <section className="py-8 w-full px-4">
        <div className="max-w-3xl mx-auto w-full">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-5 md:p-7 shadow-sm border border-sky-200/80 space-y-6 w-full">
            <div className="text-center px-2 w-full">
              <h2 className="text-[22px] md:text-2xl font-serif font-bold text-slate-900 tracking-wider">
                理解はできるけど、「相手に同意できない、否定したくなる」のはなぜ？
              </h2>
              <p className="text-slate-700 text-[20px] md:text-base mt-2">
                大人の知性は「白か黒か（正論か間違いか）」ではなく、矛盾や不完全さを受け入れる「ポスト形式的思考（Post-formal Thought）」に移行しますが、その成熟が低いと他者の受容や共感がしにくい状況になります。
              </p>
            </div>

            <div className="space-y-4 text-[20px] md:text-base text-slate-700 leading-relaxed">
              <h3 className="font-bold text-sky-950 text-[22px] md:text-xl">
                🧠 ポスト形式的思考とは？（大人の思考法）
              </h3>
              <p>
                子どもの頃、私たちの脳は「正しいか、間違いか」「白か、黒か」という二者択一の絶対的な正解を求めます（これを発達心理学者ピアジェは「形式的思考」と呼びました）。
              </p>
              <p>
                しかし、20代以降の社会経験を積む中で、人間の脳はさらに進化し、「ポスト形式的思考」へと発達します。これは、以下の特徴を持つ「大人のための柔軟な思考システム」です。
              </p>

              <div className="grid gap-2.5 w-full my-4">
                <div className="bg-sky-50/70 p-3.5 border border-sky-200/80 rounded-2xl flex items-start gap-3">
                  <span className="text-sky-600 font-bold text-[20px]">・</span>
                  <p className="text-[20px] md:text-base text-slate-800 leading-relaxed">
                    世界の「正解」は一つではないと知っている（相対性）。
                  </p>
                </div>
                <div className="bg-sky-50/70 p-3.5 border border-sky-200/80 rounded-2xl flex items-start gap-3">
                  <span className="text-sky-600 font-bold text-[20px]">・</span>
                  <p className="text-[20px] md:text-base text-slate-800 leading-relaxed">
                    物事には常に矛盾が含まれることを受け入れられる（矛盾の受容）。
                  </p>
                </div>
                <div className="bg-sky-50/70 p-3.5 border border-sky-200/80 rounded-2xl flex items-start gap-3">
                  <span className="text-sky-600 font-bold text-[20px]">・</span>
                  <p className="text-[20px] md:text-base text-slate-800 leading-relaxed">
                    理屈（論理）だけでなく、その場の文脈や「相手の感情」を統合して判断できる（統合性）。
                  </p>
                </div>
              </div>

              <p>
                子どもの思考（白黒思考）だと、意見が合わない（同意できない）相手に対して、「あいつは間違っている」と突き放すか、無理やり相手に合わせるしかありません。
              </p>
              <p>
                しかし、ポスト形式的思考ができる大人は、以下のように脳内で処理します。
              </p>
              <p>
                相手の意見そのもの（例えば「仕事を投げ出す」という行為）には賛成できなくても、「その人がこれまで生きてきた状況、今の置かれた状況、その瞬間の感情」を丸ごと一つの現実として受け止める（＝共感）ことができます。
              </p>

              <div className="bg-sky-100/70 p-4 md:p-5 rounded-2xl border border-sky-200 text-sky-950 font-bold text-center my-2">
                「私はその行動は選ばないけれど、あなたがその瞬間、そうせざるを得なかったほどの苦しみは、本当に痛いほど分かるよ」
              </div>

              <p>
                という、矛盾を矛盾のまま抱きしめる包容力こそが、この思考の本質です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: 結婚生活で最強な理由 */}
      <section className="py-8 bg-sky-100/30 backdrop-blur-xs w-full border-y border-sky-200/60 px-4">
        <div className="max-w-3xl mx-auto w-full space-y-5">
          <div className="bg-white/80 backdrop-blur-md p-5 md:p-6 border border-sky-200/80 w-full space-y-4 rounded-3xl shadow-xs">
            <h2 className="text-[22px] md:text-xl font-bold text-sky-950 tracking-wider w-full">
              結婚生活において、なぜこれが「最強の内面魅力」なのか？
            </h2>
            <p className="text-[20px] md:text-base leading-relaxed text-slate-700 w-full">
              結婚生活は、育った環境が全く違う二人が一緒に暮らすわけですから、毎日が「矛盾」と「不完全さ」の連続です。
            </p>

            <div className="space-y-2.5 w-full">
              <div className="bg-sky-50/70 p-3.5 border border-sky-200/80 rounded-2xl">
                <p className="text-[20px] md:text-base text-slate-800 leading-relaxed">
                  例1：「お互いに大好きなのに、生活の些細なこだわりでイライラしてしまう」
                </p>
              </div>
              <div className="bg-sky-50/70 p-3.5 border border-sky-200/80 rounded-2xl">
                <p className="text-[20px] md:text-base text-slate-800 leading-relaxed">
                  例2：「相手の言っていることは正論だけど、今はどうしても受け入れられない」
                </p>
              </div>
            </div>

            <p className="text-[20px] md:text-base leading-relaxed text-slate-700 w-full">
              こうした矛盾に直面したとき、白黒思考の人は「相性が悪い」「相手が間違っている」とすぐに離婚や破局を考えてしまいます。
            </p>
            <p className="text-[20px] md:text-base leading-relaxed text-slate-700 w-full">
              しかし、ポスト形式的思考ができる人は、「矛盾があるのが当たり前。お互い不完全な人間同士、どうやって新しい二人のルール（第3の答え）を作っていこうか」と、関係を柔軟に育むことができます。
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: アドバイザーからのメッセージ */}
      <section className="py-8 w-full px-4">
        <div className="max-w-3xl mx-auto w-full">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-5 md:p-7 shadow-sm border border-sky-200/80 space-y-6 w-full">
            <div className="bg-gradient-to-br from-sky-100/80 via-indigo-50/70 to-blue-100/50 p-5 md:p-6 border border-sky-200/80 w-full rounded-2xl space-y-3.5 shadow-xs">
              <div className="flex items-center gap-3 w-full">
                <Image 
                  src="/maleAdvisor.jpg"
                  width={44}
                  height={44}
                  alt="アドバイザー"
                  className="w-20 h-20 rounded-full object-cover border-2 border-sky-400 shadow-xs shrink-0"
                />
                <h3 className="font-bold text-sky-950 text-[22px] md:text-lg tracking-wide w-full">
                  💬 メッセージ
                </h3>
              </div>
              <div className="text-[20px] md:text-base text-slate-700 space-y-3 leading-relaxed w-full">
                <p className="w-full">
                  大人になると価値観が固定するため自分を変えるのも難しくなる傾向がありますが、新しい知識や見解を知ることで、「なるほど、少し視野を広げて柔軟にチャレンジしてみようかな？」「そういうやり方もあるのか」と気づ気のチャンスになればいいのかなと思います。
                </p>
                <p className="w-full">
                  その上で、人生において、どのような選択をするかはあなた次第です。
                </p>
                <p className="w-full">
                  私たちは「人生の答えは一つではない」と深く考え、あなたの全ての選択に可能な限り寄り添うことをお約束します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: CTA / Footer */}
      <section id="line-add" className="py-10 bg-gradient-to-br from-emerald-100/80 via-emerald-50/70 to-teal-100/80 text-slate-900 text-center px-4 w-full border-t border-emerald-300/80 backdrop-blur-md">
        <div className="max-w-3xl mx-auto space-y-3.5 w-full">
          <h2 className="text-[22px] md:text-xl font-serif font-bold tracking-wider text-emerald-950 w-full">
            🚪 新しい未来への扉を開きませんか？
          </h2>
          <p className="text-slate-700 text-[20px] md:text-sm font-medium leading-relaxed tracking-wide w-full">
            大人の知性を兼ね備え、内面の成熟度を高めれば、結婚生活だけではなく、社会でもさらなる飛躍を得るでしょう。<br />
            大阪梅田ドクターズ結婚相談所で、専門的な知識と知見を基に内面を磨く手がかりを得て、一生モノの魅力を手に入れませんか？<br />
            あなたのその知的な挑戦を、心理学臨床経験の力で「一生モノの魅力」へと昇華させます。
          </p>
          <div className="pt-2 flex justify-center w-full">
            <a 
              href="#line-add" 
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-extrabold px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 tracking-wider text-[20px] md:text-base w-full sm:w-auto transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-6 h-6 md:w-5 md:h-5 fill-current" />
              内面から磨く、無料カウンセリングを予約する
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}