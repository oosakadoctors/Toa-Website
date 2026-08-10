

import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import maleAdvisor from "@/public/maleAdvisor2.jpg";

// ==========================================
// 1. ページ全体のSEO用メタデータ設定 (Server Side)
// ==========================================
export const metadata: Metadata = {
  title: "大人の結婚に必要な「人間的成熟度」とは？内面魅力の4つの条件",
  description:
    "生涯のパートナーから選ばれるための「人間的成熟度（精神的成熟）」を心理学・臨床経験に基づき徹底解説。白黒思考を脱却し、結婚生活の土台となるポスト形式的思考や真の共感力を育む4つの内面的アプローチを大阪梅田ドクターズ結婚相談所が提案します。",

  keywords: [
    "大阪梅田 結婚相談所",
    "人間的成熟度",
    "精神的成熟",
    "ポスト形式的思考",
    "共感力",
    "大人の婚活",
    "内面磨き",
    "医師監修 結婚相談所",
  ],

  authors: [
    {
      name: "現役女医（大阪梅田ドクターズ結婚相談所監修）",
    },
    {
      name: "ベテランカウンセラー",
    },
  ],

  alternates: {
    canonical: "/maturity",
  },

  openGraph: {
    title: "大人の結婚に必要な「人間的成熟度」とは？内面魅力の4つの条件",
    description:
      "生涯のパートナーから選ばれるための「人間的成熟度（精神的成熟）」を心理学・臨床経験に基づき徹底解説。矛盾を受け入れる大人の思考システムとは？",
    type: "article",
    locale: "ja_JP",
    siteName: "大阪梅田ドクターズ結婚相談所",
    url: "/maturity",
  },

  twitter: {
    card: "summary_large_image",
    title: "大人の結婚に必要な「人間的成熟度」とは？内面魅力の4つの条件",
    description:
      "白黒思考から脱却し、生涯続く結婚生活の安心の土台となる「人間的成熟度」の育て方を解説。",
  },
};

interface MaturityPageProps {
  sectionRef?: React.RefObject<HTMLDivElement>;
}

// ==========================================
// 2. メインコンポーネント
// ==========================================
export default function MaturityPage({ sectionRef }: MaturityPageProps) {
  
  // 構造化データ (JSON-LD) の定義 - 記事の内容に完全一致
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    'headline': '大人の結婚に必要な「人間的成熟度」とは？内面魅力の4つの条件',
    'description': '生涯のパートナーから選ばれるための「人間的成熟度（精神的成熟）」を心理学・臨床経験に基づき徹底解説。白黒思考を脱却し、結婚生活の土台となるポスト形式的思考や真の共感力を育む4つの内面的アプローチ。',
    'datePublished': '2026-07-20T12:00:00+09:00',
    'author': [
      {
        '@type': 'Person',
        'name': '現役女医（大阪梅田ドクターズ結婚相談所監修）',
        'jobTitle': 'Medical Doctor'
      },
      {
        '@type': 'Person',
        'name': 'ベテランカウンセラー',
        'jobTitle': 'Senior Marriage Counselor'
      }
    ],
    'publisher': {
      '@type': 'Organization',
      'name': '大阪梅田ドクターズ結婚相談所',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://your-domain.com/logo.png'
      }
    }
  };

  return (
    <div ref={sectionRef} className="min-h-screen bg-emerald-50/60 text-slate-800 font-sans antialiased selection:bg-emerald-200 w-full overflow-x-hidden">
      {/* 構造化データをHEADまたはBody内に安全に注入 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-5xl mx-auto bg-white md:rounded-2xl shadow-sm border-y md:border border-emerald-200 overflow-hidden  w-full">
        
        {/* --- ヒーローヘッダーセクション --- */}
        <header className="relative bg-gradient-to-br from-emerald-200 via-teal-100 to-emerald-300 text-slate-900 py-14 px-4 md:px-6 text-center overflow-hidden w-full border-b border-emerald-300/80 shadow-xs">
          <div className="max-w-5xl mx-auto relative z-10 w-full">
            <span className="inline-block bg-emerald-700 text-emerald-50 font-extrabold tracking-widest text-xs uppercase px-4 py-1.5 rounded-full mb-4 shadow-xs">
              🟢 内面磨きの特別コラム
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-extrabold leading-tight tracking-wider mb-6 text-slate-900">
              大人の結婚に必要な「人間的成熟度」とは？<br className="hidden md:inline" />
              誰もが本能的に惹かれる内面魅力の4つの条件
            </h1>
            <div className="w-16 h-1 bg-emerald-600 mx-auto mb-6" />
            
            <div className="bg-white/95 p-6 rounded-2xl border border-emerald-300 shadow-sm inline-block text-left w-full backdrop-blur-sm space-y-4">
              <p className="text-slate-700 text-base leading-relaxed tracking-wide text-center w-full">
                恋愛の「火種」を燃え上がらせ、生涯続く結婚生活の「安心の土台」となるもの。<br />
                それが、性別を超えて誰もが惹きつけられる<strong className="font-extrabold text-slate-900">「人間的成熟度（精神的成熟）」</strong>です。<br />
                心理学や医療の現場でも重視されるこの成熟度は、モテテクニックだけでは作れません。
              </p>
              <p className="text-slate-700 text-base leading-relaxed tracking-wide text-center w-full">
                ここでは、婚活サバイバルを勝ち抜き、生涯のパートナーから「この人と生きたい」と選ばれるための4つの内面的アプローチと、他者受容をスムーズに可能にする脳と心のメカニズムを解説します。
              </p>
            </div>
          </div>
        </header>

        {/* --- 4つの内面的魅力（条件） --- */}
        <section className="py-8 px-4 md:px-8 w-full">
          <div className="max-w-5xl mx-auto w-full space-y-6">
            <div className="text-center px-4 w-full">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-slate-900 tracking-wider">
                本能的に惹かれる「人間的成熟度」4つの条件
              </h2>
            </div>

            <div className="grid gap-3 md:gap-4 w-full">
              {/* 条件1 */}
              <div className="bg-emerald-50 p-5 border border-emerald-200/80 w-full md:rounded-xl">
                <div className="flex items-center gap-2 mb-2 w-full">
                  <span className="text-emerald-600 font-bold shrink-0 text-lg">🟢</span>
                  <h3 className="font-bold text-slate-900 text-base md:text-lg w-full">自分の感情の認知</h3>
                </div>
                <p className="text-base text-slate-800 leading-relaxed pl-7 w-full">
                  自分の心に湧き上がる「寂しさ・怒り・恐怖」といった感情 from 目を背けず、客観的に見つめる力（メタ認知能力）です。
                  自分の内面を把握できているからこそ、他者に対しても嘘のない、圧倒的な誠実さとして伝わります。
                </p>
              </div>

              {/* 条件2 */}
              <div className="bg-emerald-50 p-5 border border-emerald-200/80 w-full md:rounded-xl">
                <div className="flex items-center gap-2 mb-2 w-full">
                  <span className="text-emerald-600 font-bold shrink-0 text-lg">🟢</span>
                  <h3 className="font-bold text-slate-900 text-base md:text-lg w-full">感情の安定（セルフコントロール）</h3>
                </div>
                <p className="text-base text-slate-800 leading-relaxed pl-7 w-full">
                  心理学者ダニエル・ゴールマンが提唱するEQ（心の知能指数）の根幹であり、不安や怒りを「お相手のせい」にせず、自分で感情を処理するメンタルヘルス能力。
                  「大人の安定感」は、変化の多い現代の結婚生活において、最も価値のある心理的安定性となります。
                </p>
              </div>

              {/* 条件3 */}
              <div className="bg-emerald-50 p-5 border border-emerald-200/80 w-full md:rounded-xl">
                <div className="flex items-center gap-2 mb-2 w-full">
                  <span className="text-emerald-600 font-bold shrink-0 text-lg">🟢</span>
                  <h3 className="font-bold text-slate-900 text-base md:text-lg w-full">自己への肯定感</h3>
                </div>
                <div className="text-base text-slate-800 leading-relaxed pl-7 space-y-2 w-full">
                  <p>自分の強みだけでなく、不完全な部分や弱さも「これが今の自分だ」と認め、自分自身の最大の味方でいられる強さです。自分の内側にブレない土台があるため、精神的恒常性（メンタルの安定）を維持できます。</p>
                  <p>他者からの過度な承認欲求（見返り）を求めず、自立して相手と向き合えるため、依存や支配のない対等なパートナーシップが築けます。</p>
                </div>
              </div>

              {/* 条件4 */}
              <div className="bg-emerald-50 p-5 border border-emerald-200/80 w-full md:rounded-xl">
                <div className="flex items-center gap-2 mb-2 w-full">
                  <span className="text-emerald-600 font-bold shrink-0 text-lg">🟢</span>
                  <h3 className="font-bold text-slate-900 text-base md:text-lg w-full">高い共感力と傾聴力</h3>
                </div>
                <p className="text-base text-slate-800 leading-relaxed pl-7 w-full">
                  相手の話を自分の価値観で評価（ジャッジ）せずに聴くことができ、相手の気持ちや背景となる世界をそのまま理解【共感】しようとする姿勢です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- 深掘り：真の共感の仕方 --- */}
        <section className="py-8 bg-emerald-100/60 w-full border-y border-emerald-200">
          <div className="max-w-5xl mx-auto w-full space-y-6 px-4 md:px-8">
            <div className="text-center mb-6 w-full">
              <span className="text-xl">💚</span>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-slate-900 tracking-wider mt-1 w-full">
                簡単そうで難しい？！「真の共感の仕方」
              </h2>
              <div className="w-12 h-0.5 bg-emerald-600 mx-auto mt-2" />
            </div>

            <p className="text-base text-slate-700 leading-relaxed mb-6 w-full">
              他者に共感できるというのは、単に相手の話に「笑顔で相槌を打つ」といった表面的なスキルではありません。共感できるために必要な力を、もう少し深く考えてみましょう。
            </p>

            <div className="space-y-6 w-full">
              <div className="bg-white p-5 md:p-6 rounded-2xl shadow-xs border border-emerald-200 w-full space-y-4">
                <div className="text-emerald-800 font-bold text-base w-full">【問い】真に相手に共感するためには何が必要か？</div>
                <div className="text-slate-900 font-bold text-base w-full">【答え】</div>
                
                <div className="space-y-4 text-base text-slate-700 leading-relaxed w-full">
                  <div className="w-full">
                    <h4 className="font-bold text-slate-900 flex items-center gap-1.5 mb-1 w-full">
                      <span className="text-xs bg-emerald-700 text-white px-2 py-0.5 rounded-full font-extrabold shrink-0">1</span>
                      視点を変えた想像力
                    </h4>
                    <p className="pl-6 w-full">
                      自分とは全く異なる価値観や背景を持つ相手が、「なぜその感情を抱くに至ったか」という背景を、視点を変えて論理的・感情的に想像、推測する力です。
                      現在の自分の位置から自分を少しずつ遠ざけていくイメージでやってみると、上手くできるかもしれません。
                    </p>
                  </div>

                  <hr className="border-emerald-200/80" />

                  <div className="w-full">
                    <h4 className="font-bold text-slate-900 flex items-center gap-1.5 mb-1 w-full">
                      <span className="text-xs bg-emerald-700 text-white px-2 py-0.5 rounded-full font-extrabold shrink-0">2</span>
                      判断（自分の価値観との照合）を一旦手放す
                    </h4>
                    <p className="pl-6 w-full">
                      共感することが苦手な人は「じゃあ、自分もその意見や行動を正しいと思うか？（＝同意）」を、話を聴きながら自分の倫理観や価値観と照合し、お相手をジャッジしてしまいます。
                    </p>
                    <p className="pl-6 mt-2 w-full">
                      そのため、「相手の状況や気持ちは100%理解できる（ステップ①）」けれど、「私の価値観とは違うから同意はできない（ステップ②）」という状態で思考が止まりがちです。
                    </p>
                    <p className="pl-6 mt-2 font-medium text-slate-900 bg-emerald-50 p-3 rounded-lg border-l-4 border-emerald-600 w-full">
                      本当の共感とは、相手に対する「正しい・間違い」や「ベストな選択か否か」を判定する作業をせずに、ただ「今、相手が感じている痛みや喜びを、自分も同じ温度で感じる」ということなのです。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- ポスト形式的思考 --- */}
        <section className="py-8 px-4 md:px-8 w-full">
          <div className="max-w-5xl mx-auto w-full space-y-6">
            <div className="w-full space-y-2">
              <h3 className="text-lg md:text-xl font-bold text-emerald-900 tracking-wider w-full">
                理解はできるけど、「相手に同意できない、否定したくなる」のはなぜ？
              </h3>
              <p className="text-base text-slate-700 leading-relaxed w-full">
                大人の知性は「白か黒か（正論か間違いか）」ではなく、矛盾や不完全さを受け入れる<strong className="font-extrabold text-slate-900">「ポスト形式的思考（Post-formal Thought）」</strong>に移行しますが、その成熟が低いと他者の受容や共感がしにくい状況になります。
              </p>
            </div>

            <div id="consider" className="bg-white p-5 md:p-6 rounded-2xl border border-emerald-200 shadow-xs w-full space-y-4">
              <h4 className="text-lg font-bold text-emerald-900 tracking-wider flex items-center gap-2 w-full">
                🧠 ポスト形式的思考とは？（大人の思考法）
              </h4>
              <p className="text-base text-slate-700 leading-relaxed w-full">
                子どもの頃、私たちの脳は「正しいか、間違いか」「白か、黒か」という二者択一の絶対的な正解を求めます（これを発達心理学者ピアジェは「形式的思考」と呼びました）。
              </p>
              <p className="text-base text-slate-700 leading-relaxed w-full">
                しかし、20代以降の社会経験を積む中で、人間の脳はさらに進化し、「ポスト形式的思考」へと発達します。これは、以下の特徴を持つ<strong className="font-extrabold text-slate-900">「大人のための柔軟な思考システム」</strong>です。
              </p>
              
              <ul className="space-y-2 text-base text-slate-700 pl-4 list-disc w-full">
                <li>世界の「正解」は一つではないと知っている（相対性）。</li>
                <li>物事には常に矛盾が含まれることを受け入れられる（矛盾の受容）。</li>
                <li>理屈（論理）だけでなく、その場の文脈や「相手の感情」を統合して判断できる（統合性）。</li>
              </ul>

              <p className="text-base text-slate-700 leading-relaxed w-full">
                子どもの思考（白黒思考）だと、意見が合わない（同意できない）相手に対して、「あいつは間違っている」と突き放すか、無理やり相手に合わせるしかありません。
                しかし、ポスト形式的思考ができる大人は、以下のように脳内で処理します。
              </p>

              <div className="mt-4 bg-emerald-50 p-4 rounded-xl border border-emerald-200 text-base text-slate-800 leading-relaxed w-full">
                相手の意見そのもの（例えば「仕事を投げ出す」という行為）には賛成できなくても、<strong className="font-extrabold text-slate-900">「その人がこれまで生きてきた状況、今の置かれた状況、その瞬間の感情」を丸ごと一つの現実として受け止める（＝共感）</strong>ことができます。
                <span className="block mt-2 text-slate-900 font-medium w-full">
                  「私はその行動は選ばないけれど、あなたがその瞬間、そうせざるを得なかったほどの苦しみは、本当に痛いほど分かるよ」
                </span>
                という、矛盾を矛盾のまま抱きしめる包容力こそが、この思考の本質です。
              </div>
            </div>
          </div>
        </section>

        {/* --- 結婚生活で最強な理由 --- */}
        <section className="py-8 bg-emerald-100/60 w-full border-y border-emerald-200">
          <div className="max-w-5xl mx-auto w-full space-y-4 px-4 md:px-8">
            <h3 className="text-lg md:text-xl font-bold text-emerald-900 tracking-wider w-full">
              結婚生活において、なぜこれが「最強の内面魅力」なのか？
            </h3>
            <p className="text-base text-slate-700 leading-relaxed w-full">
              結婚生活は、育った環境が全く違う二人が一緒に暮らすわけですから、毎日が「矛盾」と「不完全さ」の連続です。
            </p>

            <div className="grid gap-2 w-full">
              <div className="flex items-start gap-2 text-base text-slate-700 bg-white p-4 rounded-xl border border-emerald-200 w-full">
                <span className="text-emerald-700 font-bold shrink-0">例1</span>
                <p className="w-full">「お互いに大好きなのに、生活の些細なこだわりでイライラしてしまう」</p>
              </div>
              <div className="flex items-start gap-2 text-base text-slate-700 bg-white p-4 rounded-xl border border-emerald-200 w-full">
                <span className="text-emerald-700 font-bold shrink-0">例2</span>
                <p className="w-full">「相手の言っていることは正論だけど、今はどうしても受け入れられない」</p>
              </div>
            </div>

            <p className="text-base text-slate-700 leading-relaxed w-full pt-2">
              こうした矛盾に直面したとき、白黒思考の人は「相性が悪い」「相手が間違っている」とすぐに離婚や破局を考えてしまいます。
              しかし、ポスト形式的思考ができる人は、<strong className="font-extrabold text-slate-900">「矛盾があるのが当たり前。お互い不完全な人間同士、どうやって新しい二人のルール（第3の答え）を作っていこうか」</strong>と、関係を柔軟に育むことができます。
            </p>
          </div>
        </section>

        {/* --- アドバイザーからのメッセージ --- */}
        <section className="py-8 px-4 md:px-8 w-full">
          <div className="max-w-5xl mx-auto w-full">
            <div className="bg-gradient-to-br from-emerald-100/70 via-teal-50 to-emerald-100/40 p-5 md:p-7 border border-emerald-200/90 w-full md:rounded-2xl space-y-4 shadow-2xs">
              <div className="flex items-center gap-3 w-full">
                <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-emerald-300 shadow-2xs">
                  <Image
                    src={maleAdvisor}
                    alt="アドバイザー"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold text-emerald-950 text-lg md:text-xl tracking-wide w-full flex items-center gap-2">
                  <span>💬</span> メッセージ
                </h4>
              </div>

              <div className="text-base text-slate-700 space-y-4 leading-relaxed w-full">
                <p className="w-full">
                  大人になると価値観が固定するため自分を変えるのも難しくなる傾向がありますが、新しい知識や見解を知ることで、
                  <strong className="font-extrabold text-slate-900">「なるほど、少し視野を広げて柔軟にチャレンジしてみようかな？」「そういうやり方もあるのか」</strong>
                  と気づ気のチャンスになればいいのかなと思います。
                </p>
                <p className="w-full">
                  その上で、人生において、どのような選択をするかはあなた次第です。
                </p>
                <p className="font-bold text-emerald-900 text-base md:text-lg w-full">
                  私たちは「人生の答えは一つではない」と深く考え、あなたの全ての選択に可能な限り寄り添うことをお約束します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- まとめ＆フッター（CTA） --- */}
        <section className="py-12 bg-gradient-to-br from-emerald-200 via-teal-100 to-emerald-300 text-slate-900 text-center px-4 w-full border-t border-emerald-300">
          <div className="max-w-5xl mx-auto space-y-4 w-full">
            <h3 className="text-xl md:text-2xl font-serif font-bold tracking-wider text-slate-900 w-full">
              🚪 新しい未来への扉を開きませんか？
            </h3>
            <p className="text-slate-700 text-base leading-relaxed tracking-wide w-full">
              大人の知性を兼ね備え、内面の成熟度を高めれば、結婚生活だけではなく、社会でもさらなる飛躍を得るでしょう。
            </p>
            <p className="text-slate-700 text-base leading-relaxed tracking-wide font-medium w-full">
              大阪梅田ドクターズ結婚相談所で、専門的な知識と知見を基に内面を磨く手がかりを得て、一生モノの魅力を手に入れませんか？
              あなたのその知的な挑戦を、心理学臨床経験の力で「一生モノの魅力」へと昇華させます。
            </p>

            <div className="pt-4 flex justify-center w-full">
              <button className="inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold px-8 py-4 rounded-full shadow-md hover:shadow-lg transition duration-200 tracking-wider text-base w-full sm:w-auto">
                内面から磨く、無料カウンセリングを予約する
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}