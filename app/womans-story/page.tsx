import React from 'react';
import { 
  Heart, 
  Sparkles, 
  Trophy, 
  Flame, 
  UserCheck, 
  MessageCircle, 
  ArrowRight, 
  FileText, 
  Compass, 
  Brain, 
  ShieldCheck,
  CheckCircle2,
  Lock,
  Building2,
  Clock,
  HelpCircle,
  Stethoscope,
  Users,
  Search,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '36歳・女性医師の婚活相談事例|大阪梅田ドクターズ結婚相談所',
  description: '【無料相談ケース紹介】大学卒業後、交際経験のない36歳・勤務医(女性医師)が来店した際の実際のカウンセリング内容を再現。交際経験がなくても安心して入会できる理由や、大阪梅田の相談室での無料相談の流れ・所要時間を、現役女性医師カウンセラーが解説します。',
  openGraph: {
    title: '36歳・女性医師の婚活相談事例|大阪梅田ドクターズ結婚相談所',
    description: '大阪梅田の相談室にお越しいただいた36歳・女性医師(勤務医)のリアルな無料相談を再現。男性医師の在籍状況の検索、交際経験なしでも入会できる理由、女医ならではの婚活戦略まで詳しく解説します。',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '36歳・女性医師の婚活相談事例|大阪梅田ドクターズ結婚相談所',
    description: '大阪梅田の相談室にお越しいただいた36歳・女性医師(勤務医)のリアルな無料相談を再現。男性医師の在籍状況の検索、交際経験なしでも入会できる理由、女医ならではの婚活戦略まで詳しく解説します。',
  },
};

export default function DoctorConsultationStoryPage() {
  // サイト共通 Organization 構造化データ
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "〇〇結婚相談所",
    "url": "https://example.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "梅田1丁目2番2-200号 大阪駅前第2ビル2階3-1-2",
      "addressLocality": "大阪市北区",
      "addressRegion": "大阪府",
      "postalCode": "530-0001",
      "addressCountry": "JP"
    },
    "telephone": "※電話番号を記載",
    "sameAs": [
      "※InstagramやX等のSNSアカウントURL"
    ]
  };

  // ページ個別 FAQPage 構造化データ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "無料相談は本当に1回で終わりますか?しつこい勧誘はありませんか?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "無料相談はあくまで現状のヒアリングと当社サービスのご説明の場です。その場でのご入会を強要することはありません。"
        }
      },
      {
        "@type": "Question",
        "name": "交際経験がなくても本当に大丈夫ですか?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、問題ありません。交際経験がないことを理由に入会をお断りすることはなく、経験の有無に応じたサポート体制を整えています。"
        }
      },
      {
        "@type": "Question",
        "name": "医師以外の職業でも、同じように無料相談を受けられますか?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい。職業を問わずどなたでも無料相談を受けていただけます。"
        }
      },
      {
        "@type": "Question",
        "name": "相談内容が周囲に知られる心配はありませんか?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "完全個室でのカウンセリングのため、周囲の目を気にせずご相談いただけます。"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-sky-100/40 to-blue-50 text-slate-800 font-sans antialiased selection:bg-sky-200 w-full overflow-x-hidden">
      {/* 構造化データスクリプト埋め込み */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ヒーローセクション */}
      <header className="relative bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white py-14 px-4 md:px-6 text-center overflow-hidden w-full border-b border-sky-300 shadow-lg">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_60%)]"></div>
        <div className="max-w-5xl mx-auto relative z-10 w-full space-y-4">
          <p className="bg-white/20 backdrop-blur-md text-sky-100 font-extrabold tracking-widest text-xs md:text-sm uppercase inline-block px-4 py-1 rounded-full shadow-sm">
            REAL CONSULTATION STORY
          </p>
          <h1 className="text-2xl md:text-4xl font-serif font-bold leading-tight tracking-wider text-white drop-shadow-sm">
            【実例】36歳・女性医師（勤務医）の無料相談ストーリー<br className="hidden md:inline" />
            <span className="text-amber-200">
              「交際経験がない」「職場に出会いがない」悩みをどう解決したか
            </span>
          </h1>
          
          <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-white inline-block text-left w-full mt-4 shadow-xl">
            <p className="text-sky-900 font-extrabold text-xl md:text-2xl mb-3 text-center tracking-wide">
              男性医師の検索から女医ならではの婚活戦略までリアルに再現
            </p>
            <p className="text-slate-700 text-[20px] md:text-base leading-relaxed tracking-wide text-center w-full font-medium">
              大阪梅田の相談室にお越しいただいた36歳・女性医師のご相談を基に、無料カウンセリングで実際に交わされた対話を再現。<br className="hidden md:inline" />
              交際経験がなくても安心できる理由や、当日の具体的な流れを包み隠さずご紹介します。
            </p>
          </div>
        </div>
      </header>

      {/* 導入メッセージ＆この記事でわかること */}
      <section className="py-8 w-full">
        <div className="max-w-5xl mx-auto w-full px-4 md:px-0 space-y-6">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-sky-200 space-y-5 w-full">
            <p className="text-[20px] md:text-base text-slate-800 leading-relaxed tracking-wide w-full text-center md:text-left">
              「交際経験がないまま30代になった」「職場に出会いがない」⸺これは女性医師や勤務医の方から大変よく寄せられるお悩みです。<br /><br />
              今回は、大阪梅田の相談室（第二ビル）にお越しいただいた36歳・女性医師（初婚）のご相談を基に、無料カウンセリングで実際に交わされた会話を再現しました。男性医師の在籍状況をその場で検索して確認したこと、交際経験がなくても入会できる理由、女医だからこそ意識したい婚活戦略まで、当日の流れをそのままご紹介します。
            </p>

            {/* この記事でわかること */}
            <div className="bg-sky-50 border-2 border-sky-200 p-6 rounded-2xl space-y-3">
              <h2 className="font-bold text-sky-950 text-xl flex items-center gap-2 border-b border-sky-200 pb-2">
                <Sparkles className="w-6 h-6 text-sky-500 shrink-0" />
                この記事でわかること
              </h2>
              <ul className="grid gap-2 text-[20px] md:text-base text-slate-700 font-medium pt-1">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-1" />
                  <span>結婚相談所の無料相談で「実際に何を聞かれ、何を話すのか」</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-1" />
                  <span>女性医師（女医）・ドクター婚活が来店する際によくある悩みと当社の回答</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-1" />
                  <span>交際経験がない方でも安心して入会できる理由</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-1" />
                  <span>大阪梅田の相談室（第二ビル）での無料相談の流れ（所要時間・雰囲気）</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-white p-4 rounded-xl w-full text-center shadow-md">
              <p className="font-bold text-[20px] md:text-base tracking-wider w-full">
                ✨ 無料相談当日のリアルな対話の流れと具体的なアドバイスをご覧ください。
              </p>
            </div>

            {/* 本コンテンツについての注記 */}
            <p className="text-xs text-slate-500 bg-slate-100 p-3 rounded-lg leading-relaxed">
              ※本コンテンツについて：本記事は、実際に当社にお寄せいただいたご相談内容を基に再現したものです。プライバシー保護の観点から、年齢・職業・エピソードなどの詳細は複数の事例を組み合わせて構成しており、特定の個人を描写したものではありません。実際の無料相談の内容・進行は、お一人おひとりの状況により異なります。
            </p>
          </div>
        </div>
      </section>

      {/* 監修・カウンセラー情報 & 会員データベース情報 */}
      <section className="py-12 bg-sky-100/60 text-slate-800 w-full border-y border-sky-200">
        <div className="max-w-5xl mx-auto w-full space-y-8">
          <div className="text-center px-4 w-full">
            <span className="bg-sky-500 text-white font-extrabold text-sm px-4 py-1 rounded-full tracking-widest inline-block mb-2 shadow-xs">ABOUT US</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-sky-950 tracking-wider w-full">
              当社のカウンセラー体制と国内最大級の会員基盤
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 w-full px-4 md:px-0">
            {/* 監修・カウンセラー情報 */}
            <div className="bg-white p-6 md:p-8 border-2 border-sky-200 flex flex-col justify-between w-full rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="w-full space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-400 to-blue-500 flex items-center justify-center text-white text-xl font-extrabold shadow-md">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-sky-900 text-xl md:text-lg tracking-wide w-full border-b border-sky-100 pb-2">
                  監修・カウンセラー情報
                </h3>
                <p className="text-[20px] md:text-base text-slate-700 leading-relaxed w-full">
                  本ケースの担当カウンセラーは、〇〇結婚相談所の代表カウンセラー。医療法人役員、市中病院での勤務医としての経験を持ち、内科認定医の資格を有する女性医師です。<br /><br />
                  医師という職業ならではの悩み（出会いの少なさ、多忙による恋愛経験の不足、同業者からの理解のされにくさなど）を、当事者に近い立場から理解した上でカウンセリングを行っています。
                </p>
              </div>
            </div>

            {/* IBJデータベース情報 */}
            <div className="bg-white p-6 md:p-8 border-2 border-sky-200 flex flex-col justify-between w-full rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="w-full space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-white text-xl font-extrabold shadow-md">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-sky-900 text-xl md:text-lg tracking-wide w-full border-b border-sky-100 pb-2">
                  登録会員数11万名突破のIBJネットワーク
                </h3>
                <p className="text-[20px] md:text-base text-slate-700 leading-relaxed w-full">
                  当社が加盟する結婚相談所ネットワーク「IBJ」は、2026年7月15日時点で登録会員数110,482名となり、11万名を突破しました。同月のIBJ全体の実績は、加盟相談所数4,818社、お見合い成立件数101,790件、成婚組数2,019組です（出典：株式会社IBJ公式プレスリリース、2026年7月付）。<br /><br />
                  この規模の会員データベースがあるからこそ、「男性医師は何名くらいいますか」といったご相談にも、その場で条件を絞り込んで具体的にお答えできます。
                </p>
              </div>
            </div>
          </div>

          {/* ご相談者様の概要（スペック表） */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border-2 border-sky-200 shadow-md max-w-4xl mx-auto space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-sky-950 border-b border-sky-200 pb-2 text-center md:text-left">
              ご相談者様の概要（複数の実例を基に再構成）
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[20px] md:text-base text-slate-700">
              <div className="bg-sky-50/70 p-3 rounded-xl"><span className="font-bold text-sky-900">年齢：</span> 36歳</div>
              <div className="bg-sky-50/70 p-3 rounded-xl"><span className="font-bold text-sky-900">職業：</span> 勤務医（病院所属）</div>
              <div className="bg-sky-50/70 p-3 rounded-xl"><span className="font-bold text-sky-900">婚歴・学歴：</span> 初婚・大卒</div>
              <div className="bg-sky-50/70 p-3 rounded-xl"><span className="font-bold text-sky-900">家族背景：</span> 父親も医師</div>
              <div className="bg-sky-50/70 p-3 rounded-xl"><span className="font-bold text-sky-900">交際経験：</span> 大学生以降なし</div>
              <div className="bg-sky-50/70 p-3 rounded-xl"><span className="font-bold text-sky-900">来店のきっかけ：</span> HPで女医カウンセラーの在籍を知り来店</div>
              <div className="bg-sky-50/70 p-3 rounded-xl"><span className="font-bold text-sky-900">相談場所：</span> 大阪梅田・第二ビル内の完全個室会議室</div>
              <div className="bg-sky-50/70 p-3 rounded-xl"><span className="font-bold text-sky-900">所要時間：</span> 約1時間</div>
            </div>
          </div>
        </div>
      </section>

      {/* カウンセリング当日の再現ダイアログ */}
      <section className="py-12 bg-white w-full">
        <div className="max-w-5xl mx-auto w-full px-4 md:px-0">
          <div className="text-center mb-8 px-4 w-full">
            <span className="bg-blue-600 text-white font-extrabold text-sm px-4 py-1 rounded-full tracking-widest inline-block mb-2 shadow-xs">DIALOGUE</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 tracking-wider w-full">
              無料相談 当日の様子（対話の再現）
            </h2>
            <p className="text-[20px] md:text-base text-slate-600 mt-2 max-w-3xl mx-auto">
              大阪梅田・第二ビル内の完全個室で、受付・シート記入を経てスタートした実際の無料相談の会話です。
            </p>
          </div>

          {/* 対話カード群 */}
          <div className="space-y-6 max-w-4xl mx-auto">
            {/* 来店経緯と個室環境 */}
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2">
              <h3 className="font-bold text-sky-900 text-lg flex items-center gap-2">
                <Building2 className="w-5 h-5 text-sky-600" />
                会場・受付の雰囲気（完全個室の安心感）
              </h3>
              <p className="text-slate-700 text-[20px] md:text-base leading-relaxed">
                大学を卒業してから交際経験がなく、職場も既婚者が多いため出会いがない悩みを抱えておられたご相談者様。会場は大阪梅田・第二ビル内の完全個室の会議室です。外から中の様子が見えないため周囲を気にせず話せる環境をご用意しています。受付後、簡単なマッチングシートに基本情報を記入いただき、女性医師の代表カウンセラーが入室しました。
              </p>
            </div>

            {/* 対話 1 */}
            <div className="space-y-4">
              <div className="bg-sky-50 border-l-4 border-sky-500 p-4 rounded-r-xl">
                <p className="font-bold text-sky-950 mb-1">カウンセラー（女性医師）</p>
                <p className="text-slate-800 text-[20px] md:text-base">「本日はお越しいただきありがとうございます。今、どんなことにお悩みですか？」</p>
              </div>

              <div className="bg-slate-100 border-l-4 border-slate-400 p-4 rounded-r-xl">
                <p className="font-bold text-slate-800 mb-1">相談者様（36歳・勤務医）</p>
                <p className="text-slate-800 text-[20px] md:text-base">「大学を卒業してから、お付き合いした経験が一度もなくて。職場も既婚者ばかりで、出会いがどこにあるのかわからないんです」</p>
              </div>

              <div className="bg-sky-50 border-l-4 border-sky-500 p-4 rounded-r-xl">
                <p className="font-bold text-sky-950 mb-1">カウンセラー（女性医師）</p>
                <p className="text-slate-800 text-[20px] md:text-base">「病院という環境だと、出会いの機会自体が構造的に少ないんですよね。よくあるお悩みです」</p>
              </div>

              <div className="bg-slate-100 border-l-4 border-slate-400 p-4 rounded-r-xl">
                <p className="font-bold text-slate-800 mb-1">相談者様（36歳・勤務医）</p>
                <p className="text-slate-800 text-[20px] md:text-base">「男性医師の方は、どれくらい在籍されているんですか？」</p>
              </div>

              <div className="bg-sky-50 border-l-4 border-sky-500 p-4 rounded-r-xl">
                <p className="font-bold text-sky-950 mb-1">カウンセラー（女性医師）</p>
                <p className="text-slate-800 text-[20px] md:text-base">「実際にIBJの検索システムで一緒に見てみましょう」</p>
              </div>
            </div>

            {/* その場での検索体験説明 */}
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 border-2 border-sky-200 p-6 rounded-2xl space-y-3">
              <h3 className="font-bold text-sky-950 text-xl flex items-center gap-2">
                <Search className="w-6 h-6 text-sky-600 shrink-0" />
                【その場での検索体験】条件を絞り込んで人数感を提示
              </h3>
              <p className="text-slate-700 text-[20px] md:text-base leading-relaxed">
                カウンセラーが検索システムを操作し、「関西圏・34歳〜45歳・初婚・男性医師・身長165cm以上・禁煙」などの希望条件を入力。歯科医師を含めない正確な「男性医師」の人数感をお伝えしたところ、「そんなに条件を細かく絞れるんですね。思っていたより…」と安心されたご様子でした。
              </p>
            </div>

            {/* 対話 2 - 戦略とアドバイス */}
            <div className="space-y-4">
              <div className="bg-slate-100 border-l-4 border-slate-400 p-4 rounded-r-xl">
                <p className="font-bold text-slate-800 mb-1">相談者様（36歳・勤務医）</p>
                <p className="text-slate-800 text-[20px] md:text-base">「男性医師の方って、どんな女性を希望されるものなんでしょうか。交際経験がないことがすごく気になっていて、何をどうしたらいいのか…お医者さんの方だったら話も合うんじゃないかと思うんですが」</p>
              </div>

              <div className="bg-sky-50 border-l-4 border-sky-500 p-4 rounded-r-xl">
                <p className="font-bold text-sky-950 mb-1">カウンセラー（女性医師）</p>
                <p className="text-slate-800 text-[20px] md:text-base">「交際経験がないことは、まったく気にされなくて大丈夫です。私自身も市中病院で勤務医をしていましたので、そのあたりの事情はよくわかります。経験豊富な男性カウンセラーと一緒にサポートしますので、二人三脚で進めていきましょう」</p>
              </div>

              <div className="bg-sky-50 border-l-4 border-sky-500 p-4 rounded-r-xl">
                <p className="font-bold text-sky-950 mb-1">カウンセラー（戦略的アドバイス）</p>
                <p className="text-slate-800 text-[20px] md:text-base">
                  「男性医師は人気が高いですが、職業だけを重視しているわけではありません。同職（女性医師）を希望される方は体感で全体の2割程度です。残りの多くの方は知性や職業そのものより、育ちの良さや人柄を重視します。ですから『女医』という枠だけで見られるのではなく、<strong>女性としての魅力に女医であることがプラスされる</strong>、という見え方が重要になってきます」
                </p>
              </div>

              <div className="bg-slate-100 border-l-4 border-slate-400 p-4 rounded-r-xl">
                <p className="font-bold text-slate-800 mb-1">相談者様（36歳・勤務医）</p>
                <p className="text-slate-800 text-[20px] md:text-base">「女性としての魅力と言われると、仕事の服ばかりでプライベート用の服はあまり買っていなくて…」</p>
              </div>

              <div className="bg-sky-50 border-l-4 border-sky-500 p-4 rounded-r-xl">
                <p className="font-bold text-sky-950 mb-1">カウンセラー（女性医師）</p>
                <p className="text-slate-800 text-[20px] md:text-base">
                  「男性医師が魅力を感じやすい女性像は、お仕事への理解、明るく前向きなこと、女性らしい華やかさ、可愛らしく守ってあげたくなるような雰囲気などです。また、女性医師の方は考えすぎて行動が慎重になりすぎる傾向がありますが、身元が保証された独身の方しかいない環境ですので、もう少し積極的に動いていただいて大丈夫ですよ」
                </p>
              </div>

              <div className="bg-slate-100 border-l-4 border-slate-400 p-4 rounded-r-xl">
                <p className="font-bold text-slate-800 mb-1">相談者様（36歳・勤務医）</p>
                <p className="text-slate-800 text-[20px] md:text-base">「たしかに考えすぎて動けなくなるところがあります。身元が保証されているなら安心できそうです。男性の方も緊張しているかもしれないなら、自分から話しかけるのもそんなに怖くないのかもしれません」</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* この相談内容から見えてくるポイント（まとめテーブル） */}
      <section className="py-12 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white w-full shadow-inner">
        <div className="max-w-5xl mx-auto w-full px-4 md:px-0">
          <div className="bg-white/95 backdrop-blur-md text-slate-800 p-6 md:p-10 rounded-2xl shadow-2xl space-y-6">
            <div className="text-center space-y-2">
              <span className="bg-amber-400 text-slate-900 font-extrabold text-xs px-3 py-1 rounded-full tracking-widest inline-block uppercase shadow-xs">KEY POINTS</span>
              <h2 className="text-xl md:text-3xl font-serif font-bold text-sky-950 tracking-wider">
                この相談内容から見えてくるポイント
              </h2>
            </div>

            <div className="overflow-x-auto w-full">
              <table className="w-full border-collapse text-left text-[20px] md:text-base">
                <thead>
                  <tr className="bg-sky-100 border-b-2 border-sky-300 text-sky-950">
                    <th className="p-3 md:p-4 font-bold w-1/3">相談者の悩み</th>
                    <th className="p-3 md:p-4 font-bold w-2/3">当社からの視点・回答</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sky-100 text-slate-700">
                  <tr className="hover:bg-sky-50/50">
                    <td className="p-3 md:p-4 font-semibold text-sky-900">交際経験がない不安</td>
                    <td className="p-3 md:p-4">入会の障壁にはならない。カウンセラーが伴走するサポート体制がある。</td>
                  </tr>
                  <tr className="hover:bg-sky-50/50">
                    <td className="p-3 md:p-4 font-semibold text-sky-900">出会いがない職場環境</td>
                    <td className="p-3 md:p-4">女性医師・勤務医に共通する構造的な悩み。個人の問題ではない。</td>
                  </tr>
                  <tr className="hover:bg-sky-50/50">
                    <td className="p-3 md:p-4 font-semibold text-sky-900">男性医師は同職を求めるのか</td>
                    <td className="p-3 md:p-4">同職希望は約2割。人柄・育ちの良さや居心地を重視する方が多数派。</td>
                  </tr>
                  <tr className="hover:bg-sky-50/50">
                    <td className="p-3 md:p-4 font-semibold text-sky-900">「女医」として見られる葛藤</td>
                    <td className="p-3 md:p-4">「女性としての魅力＋女医」という両面を自然に打ち出すことが大切。</td>
                  </tr>
                  <tr className="hover:bg-sky-50/50">
                    <td className="p-3 md:p-4 font-semibold text-sky-900">慎重になりすぎる傾向</td>
                    <td className="p-3 md:p-4">身元保証された独身限定の環境だからこそ、積極性が最大の武器になる。</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* こんな方に読んでいただきたい記事です */}
            <div className="bg-sky-50 border-2 border-sky-200 p-6 rounded-xl space-y-3">
              <h3 className="text-sky-900 font-bold text-lg md:text-xl flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-sky-600" />
                まとめ：こんな方に読んでいただきたい記事です
              </h3>
              <ul className="space-y-2 text-slate-700 font-medium">
                <li className="flex items-center gap-2">✔ 忙しくて出会いがない女性医師・勤務医の方</li>
                <li className="flex items-center gap-2">✔ 交際経験がないことに不安を感じている方</li>
                <li className="flex items-center gap-2">✔ 結婚相談所の無料相談で「何を聞かれるのか」が分からず一歩を踏み出せない方</li>
                <li className="flex items-center gap-2">✔ 大阪梅田エリアで、プライバシーが保たれた個室相談を希望している方</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 関連記事（おすすめの実例） */}
      <section className="py-12 bg-sky-50/70 w-full">
        <div className="max-w-5xl mx-auto w-full px-4 md:px-0">
          <div className="bg-white p-6 md:p-8 border-2 border-sky-200 rounded-2xl space-y-6 shadow-md">
            <h2 className="font-bold text-sky-950 text-xl md:text-2xl border-b border-sky-200 pb-3 flex items-center gap-2">
              <FileText className="w-6 h-6 text-sky-600" />
              こちらの相談実例もあわせてご覧ください
            </h2>
            
            <div className="grid gap-4 md:grid-cols-2">
              <a href="#" className="block p-4 border border-sky-200 rounded-xl bg-sky-50/50 hover:bg-sky-100/60 transition group">
                <p className="font-bold text-sky-900 group-hover:text-sky-600 flex items-center justify-between">
                  【男性版】無料相談ストーリー（35歳・会社員）
                  <ChevronRight className="w-5 h-5 text-sky-500" />
                </p>
                <p className="text-slate-600 text-sm mt-2">
                  男性会員の視点では、どんな悩みを相談し、どんなアドバイスを受けているのか。男性側の本音が気になる方はこちら。
                </p>
              </a>

              <a href="#" className="block p-4 border border-sky-200 rounded-xl bg-sky-50/50 hover:bg-sky-100/60 transition group">
                <p className="font-bold text-sky-900 group-hover:text-sky-600 flex items-center justify-between">
                  32歳会社員女性（婚活初心者）の無料相談ストーリー
                  <ChevronRight className="w-5 h-5 text-sky-500" />
                </p>
                <p className="text-slate-600 text-sm mt-2">
                  医師などの専門職ではなく、一般的な会社員として婚活を始める方の相談実例。「まず何から始めればいいかわからない」という方に近い内容です。
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* よくある質問 (FAQ) セクション */}
      <section className="py-12 bg-white w-full">
        <div className="max-w-5xl mx-auto w-full px-4 md:px-0">
          <div className="bg-white p-6 md:p-10 border-2 border-sky-200 rounded-2xl space-y-6 shadow-md">
            <div className="flex items-center gap-3 border-b border-sky-200 pb-3">
              <HelpCircle className="w-8 h-8 text-sky-600" />
              <h2 className="font-bold text-sky-950 text-xl md:text-2xl">よくある質問</h2>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-bold text-sky-900 text-lg flex items-start gap-2">
                  <span className="text-sky-600 font-extrabold">Q.</span>
                  無料相談は本当に1回で終わりますか？しつこい勧誘はありませんか？
                </h3>
                <p className="text-slate-700 text-[20px] md:text-base leading-relaxed pl-6 border-l-2 border-sky-200">
                  無料相談はあくまで現状のヒアリングと当社サービスのご説明の場です。その場でのご入会を強要することはありません。
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-sky-900 text-lg flex items-start gap-2">
                  <span className="text-sky-600 font-extrabold">Q.</span>
                  交際経験がなくても本当に大丈夫ですか？
                </h3>
                <p className="text-slate-700 text-[20px] md:text-base leading-relaxed pl-6 border-l-2 border-sky-200">
                  はい、問題ありません。今回のケースのように、交際経験がないことを理由に入会をお断りすることはなく、経験の有無に応じたサポート体制を整えています。
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-sky-900 text-lg flex items-start gap-2">
                  <span className="text-sky-600 font-extrabold">Q.</span>
                  医師以外の職業でも、同じように無料相談を受けられますか？
                </h3>
                <p className="text-slate-700 text-[20px] md:text-base leading-relaxed pl-6 border-l-2 border-sky-200">
                  はい。今回は女性医師の実例を紹介していますが、職業を問わずどなたでも無料相談を受けていただけます。上記の関連記事もあわせてご参照ください。
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-sky-900 text-lg flex items-start gap-2">
                  <span className="text-sky-600 font-extrabold">Q.</span>
                  相談内容が周囲に知られる心配はありませんか？
                </h3>
                <p className="text-slate-700 text-[20px] md:text-base leading-relaxed pl-6 border-l-2 border-sky-200">
                  完全個室でのカウンセリングのため、周囲の目を気にせずご相談いただけます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 結び & LINE CTA セクション */}
      <section className="py-16 bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-700 text-white text-center px-4 w-full shadow-lg">
        <div className="max-w-5xl mx-auto space-y-6 w-full">
          <span className="bg-amber-300 text-slate-900 font-extrabold text-xs px-4 py-1.5 rounded-full tracking-widest inline-block uppercase shadow-md">FREE CONSULTATION</span>
          <h2 className="text-xl md:text-3xl font-serif font-bold tracking-wider text-white w-full drop-shadow-sm">
            大阪梅田の完全個室で、まずはあなたのお悩みをお聞かせください
          </h2>
          <p className="text-sky-100 text-[20px] md:text-base leading-relaxed tracking-wide w-full max-w-2xl mx-auto font-medium">
            無料相談は約1時間、大阪梅田・第二ビルの完全個室でお受けしております。<br />
            ご自身の状況と重なる部分があれば、まずはお気軽にご相談ください。
          </p>
          <div className="pt-4 flex justify-center w-full">
            <a 
              href="https://lin.ee/ZXB0UNs" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-extrabold px-8 py-5 rounded-2xl shadow-xl hover:shadow-2xl transition duration-200 tracking-wider text-[20px] md:text-base w-full sm:w-auto border-2 border-white/30 transform hover:-translate-y-0.5">
              <MessageCircle className="w-6 h-6 shrink-0" />
              勧誘ゼロ。まずはLINEで無料相談してみる
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}