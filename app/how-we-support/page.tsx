import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  CheckCircle2, 
  HelpCircle, 
  ArrowLeft, 
  BookOpen, 
  UserCheck, 
  ArrowRight, 
  MessageCircle, 
  ShieldAlert, 
  Users, 
  Compass, 
  Sparkles,
  Calendar,
  Clock
} from 'lucide-react';

// --- Page Metadata ---
export const metadata: Metadata = {
  title: '結婚相談所のサポート内容｜入会後に何をしてもらえるか｜大阪・梅田',
  description:
    '結婚相談所に入会したら、実際に何をしてもらえるのか。大阪梅田ドクターズ結婚相談所では、入会時に「助言が必要な分野」「連絡の取り方」「伝え方の希望」をアンケートで伺い、その方に合わせて伴走します。判断に迷う場面は事前にお伝えし、担当2名は成婚まで替わりません。北新地駅徒歩1分、IBJ加盟。',
  alternates: {
    canonical: '/how-we-support',
  },
  keywords: [
    '結婚相談所 サポート内容',
    '結婚相談所 何をしてくれる',
    '仲人型 サポート',
    '結婚相談所 担当 相性',
    '大阪 結婚相談所 サポート',
    '梅田 結婚相談所',
  ],
  authors: [{ name: '加藤とあこ（代表カウンセラー・内科認定医・現役女性医師）' }],
  openGraph: {
    title: '結婚相談所のサポート内容｜入会後に何をしてもらえるか｜大阪・梅田',
    description: '入会後に何をしてもらえるのか。助言の分野も、連絡の頻度も、伝え方も、あなたに合わせます。',
    url: 'https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp/how-we-support',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '結婚相談所のサポート内容｜入会後に何をしてもらえるか｜大阪・梅田',
    description: '入会後に何をしてもらえるのか。助言の分野も、連絡の頻度も、伝え方も、あなたに合わせます。',
  },
};

// --- Structured Data (JSON-LD) ---
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': '結婚相談所に入会したら、具体的に何をしてもらえますか？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'ご希望の整理、プロフィール文の作成と添削、写真撮影の手配と写真選定、お見合い前の練習、お断りされた後の振り返り、交際中のご相談、真剣交際やプロポーズの判断まで、婚活のすべての場面が対象です。',
      },
    },
    {
      '@type': 'Question',
      'name': '実際にどんなやり取りをしているのか知りたいのですが',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '大阪梅田ドクターズ結婚相談所では、無料相談で実際にどんな会話をしているのかの記録を公開しています。32歳会社員女性、35歳会社員男性、36歳女性医師、33歳男性プログラマーの4件をご覧いただけます。',
      },
    },
    {
      '@type': 'Question',
      'name': 'サポートの距離感は選べますか？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '選べます。ご入会のときに「どの分野の助言が必要か」「連絡の取り方」「伝え方の希望」の3点を、簡単なアンケートで伺います。必要な助言だけを、望むタイミングと伝え方で受け取れます。',
      },
    },
    {
      '@type': 'Question',
      'name': '厳しいことを言われるのが苦手なのですが、大丈夫ですか？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'ご入会時に伝え方のご希望を伺うため、ご自身から言い出す必要がありません。まず気持ちを受け止めてほしい、率直に言ってほしい、優しく見守ってほしい。アンケートにチェックしていただくだけです。',
      },
    },
    {
      '@type': 'Question',
      'name': '担当のカウンセラーと相性が合わなかったら、どうすればいいですか？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '無料相談の60分で、担当する2名と実際にお話しいただけます。ご入会後も、この2名がそのまま担当します。話してみて違うと感じられたら、ご入会いただかなくて構いません。',
      },
    },
    {
      '@type': 'Question',
      'name': '担当のカウンセラーは途中で替わりますか？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '替わりません。現役女性医師の代表カウンセラーとカウンセラー歴20年のベテラン仲人の2名が、入会から成婚まで担当します。',
      },
    },
    {
      '@type': 'Question',
      'name': 'プロフィールは自分で書く必要がありますか？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'ありません。文章を考えるのが負担な方には、伺った内容をもとにこちらで作成します。ご自身で書きたい方には、書いたものを添削します。',
      },
    },
    {
      '@type': 'Question',
      'name': 'お見合いを断られたとき、何をしてもらえますか？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'お断りのご連絡はすべてカウンセラーが受け、理由を分析してお伝えします。写真の印象なのか、文章なのか、当日の受け答えなのか。改善できる部分を特定して次につなげます。',
      },
    },
    {
      '@type': 'Question',
      'name': '交際が始まってからも相談できますか？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'できます。連絡の頻度、デートの誘い方、お店選び、真剣交際に進むかの判断、プロポーズまでご相談いただけます。婚活で最も迷うのは、お見合いより交際中です。',
      },
    },
    {
      '@type': 'Question',
      'name': '夜間や週末に連絡しても返事はもらえますか？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'LINEでのご相談は回数無制限で、24時間受付しています。原則当日中にお返しします。',
      },
    },
    {
      '@type': 'Question',
      'name': '途中で活動を休むことはできますか？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'できます。休会中の月会費は月額3,000円となり、通常の月会費15,000円は停止します。1回のお申し込みにつき最長3か月まで取得可能です。',
      },
    },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  'headline': '結婚相談所のサポート内容｜入会後に何をしてもらえるか',
  'datePublished': '2026-09-15',
  'dateModified': '2026-09-15',
  'author': {
    '@type': 'Person',
    '@id': 'https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp/#founder',
    'name': '加藤とあこ',
    'jobTitle': '代表カウンセラー',
    'hasOccupation': {
      '@type': 'Occupation',
      'name': '医師',
    },
    'hasCredential': {
      '@type': 'EducationalOccupationalCredential',
      'credentialCategory': '内科認定医',
    },
    'affiliation': {
      '@type': 'MedicalOrganization',
      'name': '医療法人幸萌会 久宝寺透析クリニック',
      'url': 'https://q-cl.com/',
    },
    'sameAs': ['https://q-cl.com/', 'https://q-cl.com/greeting.html'],
  },
  'publisher': {
    '@type': 'Organization',
    'name': '大阪梅田ドクターズ結婚相談所',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    {
      '@type': 'ListItem',
      'position': 1,
      'name': 'ホーム',
      'item': 'https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp/',
    },
    {
      '@type': 'ListItem',
      'position': 2,
      'name': 'サポート内容',
      'item': 'https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp/how-we-support',
    },
  ],
};

export default function HowWeSupportPage() {
  return (
    <>
      {/* Inject Structured Data into Head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Main container with standard text-[20px] font size */}
      <main className="min-h-screen bg-white text-slate-800 antialiased selection:bg-emerald-100 selection:text-emerald-900 text-[20px] leading-relaxed">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
          
          {/* Breadcrumb Navigation */}
          <nav className="text-[16px] text-slate-500 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-emerald-700 transition-colors">
              ホーム
            </Link>
            <span>/</span>
            <span className="text-slate-800 font-medium">サポート内容</span>
          </nav>

          {/* Page Title & Meta Info */}
          <header className="mb-12 pb-2 border-b border-slate-200">
            <h1 className="text-[30px] sm:text-[38px] lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              結婚相談所のサポート内容｜入会後に何をしてもらえるか
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-[16px] sm:text-[18px] text-slate-600">
              <span className="font-semibold text-slate-800">
                執筆: 代表カウンセラー 加藤とあこ（内科認定医・現役女性医師）
              </span>
              <span className="flex items-center gap-1 text-slate-500">
                <Calendar className="w-5 h-5 text-slate-400" />
                公開日: 2026年9月15日
              </span>
            </div>
          </header>

          {/* Key Summary Block (1分でわかる要約) */}
          <section className="mb-16 p-4 bg-slate-50 border-2 border-emerald-500/30 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-7 h-7 text-emerald-600" />
              <h2 className="text-[24px] sm:text-[28px] font-bold text-slate-900">
                この記事の要点（1分でわかる要約）
              </h2>
            </div>
            <p className="text-slate-700 leading-relaxed text-[20px]">
              大阪梅田ドクターズ結婚相談所では、
              <strong className="text-slate-900 font-semibold bg-emerald-100/70 px-1.5 py-0.5 rounded">
                入会時に「どの分野の助言が必要か」「連絡の取り方」「伝え方の希望」の3点をアンケートで伺い、その方に合わせてサポートの形を決めます。
              </strong>
              必要な助言だけを、望むタイミングと伝え方で受け取れるため、放っておかれることも、干渉されすぎることもありません。婚活で判断に迷う場面はあらかじめ決まっているため、次に何が来るかを先にお伝えします。担当は現役女性医師の代表カウンセラーとカウンセラー歴20年のベテラン仲人の2名で、
              <strong className="text-slate-900 font-semibold">
                無料相談で会った2名が、そのまま成婚まで担当します。
              </strong>
              実際の相談のやり取りは、無料相談ストーリーとして公開しています。
            </p>
          </section>

          {/* Section 1 */}
          <section className="mb-16">
            <h2 className="text-[26px] sm:text-[32px] font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200 flex items-center gap-3">
              <Compass className="w-8 h-8 text-emerald-600 shrink-0" />
              サポートの内容は、人によって変えています
            </h2>

            {/* Conclusion Callout */}
            <div className="mb-8 p-6 rounded-xl bg-emerald-500/10 border-l-4 border-emerald-600">
              <p className="text-[22px] font-bold text-emerald-950 leading-snug">
                結論：必要な助言も、連絡の頻度も、伝え方の好みも、人によって違います。当相談所では入会時にそれを伺ってから始めます。
              </p>
            </div>

            <p className="text-slate-700 leading-relaxed text-[20px] mb-6">
              手厚いサポートを求める方もいれば、要点だけ聞いてご自身で判断したい方もいらっしゃいます。
              <strong className="text-slate-900">どちらが良いということはありません。</strong>
              同じサポートをすべての方に当てはめると、片方には物足りず、もう片方には重くなります。
            </p>

            <p className="text-slate-700 leading-relaxed text-[20px] mb-8">
              ご入会のときに、簡単なアンケートで次の3点を伺います。
              <strong className="text-slate-900">チェックしていただくだけです。</strong>
              必要に応じて、面談で詳しくお聞きします。
            </p>

            {/* 3 Questionnaire Points Cards */}
            <div className="space-y-6 mb-10">
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl">
                <h3 className="text-[22px] sm:text-[24px] font-bold text-slate-900 mb-3 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-600 text-white text-[16px] font-bold shrink-0">1</span>
                  どの分野の助言が必要ですか
                </h3>
                <ul className="space-y-2.5 text-slate-700 pl-10 list-disc text-[20px]">
                  <li><strong>活動の組み立て</strong> — 誰に、何人、どんなペースで申し込むか。お受けするかどうかの判断</li>
                  <li><strong>振る舞い</strong> — 外見や服装、お店でのエスコート、LINEやデートでの会話</li>
                  <li><strong>関係の進め方</strong> — お相手の言動をどう受け取るか、どう応じるか</li>
                </ul>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl">
                <h3 className="text-[22px] sm:text-[24px] font-bold text-slate-900 mb-3 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-600 text-white text-[16px] font-bold shrink-0">2</span>
                  連絡は、どのように取りたいですか
                </h3>
                <p className="text-slate-700 pl-10 text-[20px]">
                  こちらからご連絡したほうがよいか、ご自身のタイミングでご連絡いただくほうがよいか。
                  <strong className="text-slate-900">どのくらいの頻度が心地よいか。</strong>
                  こまめに声をかけてほしい方もいれば、必要なときだけがよい方もいらっしゃいます。
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl">
                <h3 className="text-[22px] sm:text-[24px] font-bold text-slate-900 mb-3 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-600 text-white text-[16px] font-bold shrink-0">3</span>
                  どのように伝えてほしいですか
                </h3>
                <p className="text-slate-700 pl-10 text-[20px]">
                  まず気持ちを受け止めてほしい。率直な助言がほしい。耳が痛いことでも、はっきり言ってほしい。優しく見守ってほしい。背中を押してほしい。
                  <strong className="text-slate-900">同じ内容でも、伝わり方は人によって変わります。</strong>
                </p>
              </div>
            </div>

            <p className="text-slate-700 leading-relaxed text-[20px] mb-8">
              <strong className="text-slate-900 font-semibold bg-emerald-50 px-2 py-1 rounded border border-emerald-200">
                「年齢の話には触れないでほしい」「他の会員と比べる話はしないでほしい」といった項目もご用意しています。
              </strong>
              言いにくいことも、チェックするだけで伝わります。
            </p>

            {/* Survey Screenshot Box */}
            <div className="my-10 p-8 bg-slate-100/80 border border-slate-200 rounded-2xl text-center">
              <h4 className="text-[22px] font-bold text-slate-900 mb-6">
                実際にお使いいただくアンケートです
              </h4>
              <div className="max-w-md mx-auto mb-6 overflow-hidden rounded-xl border border-slate-300 shadow-sm bg-white">
                <Image
                  src="/images/survey-sample.jpg" // Ensure this image exists in public/images
                  alt="大阪梅田ドクターズ結婚相談所で入会時にご記入いただくサポート希望アンケートの1ページ目"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-[18px] text-slate-700">
                <strong>ご入会時に、タブレットでご記入いただきます。</strong> 所要時間は5分ほど。
                <strong className="text-slate-900">空欄のままでも構いません。</strong>
              </p>
            </div>

            <p className="text-slate-700 leading-relaxed text-[20px] font-medium">
              <strong className="text-emerald-800">この3点は、活動の途中で変わっても構いません。</strong>
              「もう少し任せてほしい」「ここは一緒に考えてほしい」。そのときどきでおっしゃってください。
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-16">
            <h2 className="text-[26px] sm:text-[32px] font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200 flex items-center gap-3">
              <ShieldAlert className="w-8 h-8 text-emerald-600 shrink-0" />
              「この人に本音を話せるか」を、直感だけに頼らない
            </h2>

            <div className="mb-8 p-6 rounded-xl bg-emerald-500/10 border-l-4 border-emerald-600">
              <p className="text-[22px] font-bold text-emerald-950 leading-snug">
                結論：言いにくいことを、言わなくて済むようにしておく。これが、相性を運任せにしないための方法です。
              </p>
            </div>

            <p className="text-slate-700 leading-relaxed text-[20px] mb-6">
              結婚相談所選びで最後に残るのは、担当者との相性です。「この人になら本音を話せそうか」という直感で決める方が多いと思います。
            </p>

            <p className="text-slate-700 leading-relaxed text-[20px] mb-6">
              ただ、<strong className="text-slate-900">婚活では、うまくいっていないことや言いにくい本音を話す場面が必ず来ます。</strong>
              そのとき話しやすいかどうかは、初対面では分かりにくいものです。
            </p>

            <p className="text-slate-700 leading-relaxed text-[20px] mb-6">
              <strong className="text-slate-900">だから当相談所では、入会時に伝え方のご希望を先に伺います。</strong>
              「厳しいことは言わないでほしい」も「はっきり言ってほしい」も、アンケートにチェックしていただくだけ。
              <strong className="text-emerald-800 font-semibold">自分から言い出す必要がありません。</strong>
            </p>

            <p className="text-slate-700 leading-relaxed text-[20px]">
              <strong className="text-slate-900">担当が2名いることも、同じ意味を持ちます。</strong>
              女性には言いにくいこと、男性には分かってもらえないと感じること。
              <strong className="text-slate-900">話す相手を選べます。</strong>
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-16">
            <h2 className="text-[26px] sm:text-[32px] font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200 flex items-center gap-3">
              <Users className="w-8 h-8 text-emerald-600 shrink-0" />
              担当は2名。無料相談で会った2名が、そのまま担当します
            </h2>

            <div className="mb-8 p-6 rounded-xl bg-emerald-500/10 border-l-4 border-emerald-600">
              <p className="text-[22px] font-bold text-emerald-950 leading-snug">
                結論：入会前に相談を受ける担当者と、入会後にサポートする担当者が同じです。
              </p>
            </div>

            <p className="text-slate-700 leading-relaxed text-[20px] mb-6">
              相談所によっては、<strong className="text-slate-900">入会前の担当者と入会後の担当者が別の方になる場合があります。</strong>
              担当が途中で替わる体制のところもあります。<strong className="text-slate-900">入会前に確認しておきたい点です。</strong>
            </p>

            <p className="text-slate-700 leading-relaxed text-[20px] mb-8">
              当相談所では、無料相談の60分で、前半30分を現役女性医師の代表カウンセラー、後半30分をカウンセラー歴20年のベテラン仲人が担当します。
              <strong className="text-slate-900 font-semibold bg-emerald-100/70 px-1.5 py-0.5 rounded">
                この2名が、そのままご入会後も成婚まで担当します。
              </strong>
            </p>

            {/* Centered Mobile Scroll Hint */}
                 <div className="sm:hidden flex items-center justify-center my-2">
  <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-green-400 to-green-700 text-white font-bold text-sm shadow-[0_0_12px_rgba(244,63,94,0.4)] animate-pulse">
    <ArrowLeft className="w-4 h-4 animate-[bounce_1.5s_infinite] -rotate-0" />
    <span>スライドします</span>
    <ArrowRight className="w-4 h-4 animate-[bounce_1.5s_infinite]" />
  </p>
</div>

            {/* Table 1 */}
            <div className="overflow-x-auto border border-slate-200 rounded-xl mb-8 shadow-sm">
              <table className="w-full text-left text-[20px] text-slate-700 min-w-[550px]">
                <thead className="bg-slate-100 text-slate-900 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="p-4 sm:p-5 w-1/2 border-r border-slate-200">ご相談の内容</th>
                    <th className="p-4 sm:p-5 w-1/2">主な担当</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr>
                    <td className="p-4 sm:p-5 border-r border-slate-200 font-medium text-slate-800">
                      お見合いの日程調整、お相手側とのやり取り
                    </td>
                    <td className="p-4 sm:p-5 text-emerald-900 font-semibold">ベテラン仲人</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 border-r border-slate-200 font-medium text-slate-800">
                      お相手選び、申し込みの戦略
                    </td>
                    <td className="p-4 sm:p-5 text-emerald-900 font-semibold">ベテラン仲人</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 border-r border-slate-200 font-medium text-slate-800">
                      プロフィール写真、服装
                    </td>
                    <td className="p-4 sm:p-5 text-emerald-900 font-semibold">代表カウンセラー</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 border-r border-slate-200 font-medium text-slate-800">
                      交際中の気持ちの揺れ、返信の迷い
                    </td>
                    <td className="p-4 sm:p-5 text-emerald-900 font-semibold">代表カウンセラー</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 border-r border-slate-200 font-medium text-slate-800">
                      真剣交際に進むかの判断
                    </td>
                    <td className="p-4 sm:p-5 text-emerald-900 font-semibold">2名で一緒に</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-slate-700 leading-relaxed text-[20px] mb-6">
              <strong className="text-slate-900">明確に分けているわけではありません。</strong>
              どちらにご相談いただいても構いませんし、重要な局面では2名で一緒に考えます。
            </p>

            <p className="text-slate-700 leading-relaxed text-[20px] mb-8">
              <strong className="text-slate-900">新規のご入会を毎月5名様までに限定しているのも、同じ理由です。</strong>
              お一人にかける時間を確保するためで、活動中のご相談にすぐお応えできます。
            </p>

            <div className="pt-2">
              <Link
                href="/dual-support"
                className="inline-flex items-center gap-2 font-bold text-emerald-700 hover:text-emerald-800 hover:underline text-[20px]"
              >
                <span>▶ 結婚相談所、担当カウンセラーは1人で本当に十分？</span>
              </Link>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-16">
            <h2 className="text-[26px] sm:text-[32px] font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200 flex items-center gap-3">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 shrink-0" />
              判断に迷う場面は、来る前にお伝えします
            </h2>

            <div className="mb-8 p-6 rounded-xl bg-emerald-500/10 border-l-4 border-emerald-600">
              <p className="text-[22px] font-bold text-emerald-950 leading-snug">
                結論：婚活で判断を求められる場面は決まっています。その場になってから考えると、判断を誤ります。
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-[20px] text-slate-800 font-medium mb-8">
              <li className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0"></span>
                活動開始の直後、申し込みが集中する時期
              </li>
              <li className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0"></span>
                プロフィールを読んで申し込んでくださった方への対応
              </li>
              <li className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0"></span>
                仮交際を何人まで並行するか
              </li>
              <li className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0"></span>
                真剣交際に進むかどうか
              </li>
              <li className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0"></span>
                ご家族との関係、生活のすり合わせ
              </li>
              <li className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0"></span>
                プロポーズ
              </li>
            </ul>

            <p className="text-slate-900 font-bold leading-relaxed text-[20px] mb-6">
              感情が動いている最中に、冷静な判断はできません。
            </p>

            <p className="text-slate-700 leading-relaxed text-[20px] mb-8">
              当相談所では、<strong className="text-slate-900">次に来る場面を先にお伝えし、そこでどう判断するかの基準を、活動を始める前に決めておきます。</strong>
              「明確なNGがなければもう一度会う」「お見合い4回につき1回は仮交際へ進む」といった目安を、ご自身の傾向に合わせて設定します。
            </p>

            <div>
              <Link
                href="/dungeon-map"
                className="inline-flex items-center gap-2 font-bold text-emerald-700 hover:text-emerald-800 hover:underline text-[20px]"
              >
                <span>▶ 婚活で迷う10の分岐点・婚活ダンジョンマップ</span>
              </Link>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-16">
            <h2 className="text-[26px] sm:text-[32px] font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200 flex items-center gap-3">
              <UserCheck className="w-8 h-8 text-emerald-600 shrink-0" />
              実際に受けられるサポート
            </h2>

            <div className="mb-8 p-6 rounded-xl bg-emerald-500/10 border-l-4 border-emerald-600">
              <p className="text-[22px] font-bold text-emerald-950 leading-snug">
                結論：お相手探しからプロポーズまで、婚活のすべての場面が対象です。
              </p>
            </div>

            {/* Centered Mobile Scroll Hint */}
                <div className="sm:hidden flex items-center justify-center my-2">
  <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-green-400 to-green-700 text-white font-bold text-sm shadow-[0_0_12px_rgba(244,63,94,0.4)] animate-pulse">
    <ArrowLeft className="w-4 h-4 animate-[bounce_1.5s_infinite] -rotate-0" />
    <span>スライドします</span>
    <ArrowRight className="w-4 h-4 animate-[bounce_1.5s_infinite]" />
  </p>
</div>

            {/* Table 2 */}
            <div className="overflow-x-auto border border-slate-200 rounded-xl mb-8 shadow-sm">
              <table className="w-full text-left text-[20px] text-slate-700 min-w-[600px]">
                <thead className="bg-slate-100 text-slate-900 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="p-4 sm:p-5 w-1/4 border-r border-slate-200">場面</th>
                    <th className="p-4 sm:p-5 w-3/4">サポート内容</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr>
                    <td className="p-4 sm:p-5 border-r border-slate-200 font-bold text-slate-900">入会時</td>
                    <td className="p-4 sm:p-5">ご希望の整理、プロフィール文の作成・添削、提携スタジオの手配と写真選定</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 border-r border-slate-200 font-bold text-slate-900">お相手探し</td>
                    <td className="p-4 sm:p-5">ご自身の検索に加え、ベテラン仲人からの推薦。申し込みの代行も可能です</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 border-r border-slate-200 font-bold text-slate-900">お見合い前</td>
                    <td className="p-4 sm:p-5">当日の流れ、想定される質問への答え方、会話が途切れたときの戻し方、服装</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 border-r border-slate-200 font-bold text-slate-900">お見合い後</td>
                    <td className="p-4 sm:p-5">お断り理由の分析、次に何を変えるかの整理</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 border-r border-slate-200 font-bold text-slate-900">交際中</td>
                    <td className="p-4 sm:p-5">連絡の頻度、デートの誘い方、お店選び、続けるか迷ったときの整理</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 border-r border-slate-200 font-bold text-slate-900">真剣交際〜成婚</td>
                    <td className="p-4 sm:p-5">進むかどうかの判断、ご家族との関係、プロポーズ</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-slate-700 leading-relaxed text-[20px] mb-6">
              <strong className="text-slate-900">プロフィール文は、ご希望に応じて作り方を変えます。</strong>
              文章を考えるのが負担な方には、伺った内容をもとにこちらで作成します。ご自身で書きたい方には、書いたものを添削します。
            </p>

            <p className="text-slate-700 leading-relaxed text-[20px] mb-8">
              <strong className="text-slate-900">お相手選びには、当相談所ならではの方法があります。</strong>
              プロフィールの読み方、お相手側の相談所への確認。詳しくは別ページでご説明しています。
            </p>

            <div className="space-y-3">
              <div>
                <Link
                  href="/support"
                  className="inline-flex items-center gap-2 font-bold text-emerald-700 hover:text-emerald-800 hover:underline text-[20px]"
                >
                  <span>▶ 誰に申し込めばいいか分からない方への特別サポート</span>
                </Link>
              </div>
              <div>
                <Link
                  href="/why-us"
                  className="inline-flex items-center gap-2 font-bold text-emerald-700 hover:text-emerald-800 hover:underline text-[20px]"
                >
                  <span>▶ 大阪梅田ドクターズ結婚相談所が選ばれる6つの理由</span>
                </Link>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-16">
            <h2 className="text-[26px] sm:text-[32px] font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-emerald-600 shrink-0" />
              実際のご相談を読む
            </h2>

            <div className="mb-8 p-6 rounded-xl bg-emerald-500/10 border-l-4 border-emerald-600">
              <p className="text-[22px] font-bold text-emerald-950 leading-snug">
                結論：どんなやり取りをしているのか、無料相談の記録を公開しています。
              </p>
            </div>

            <p className="text-slate-700 leading-relaxed text-[20px] mb-8">
              サポートの内容は、言葉で説明するより実際のやり取りを読んでいただくほうが早いかもしれません。
              <strong className="text-slate-900">無料相談で実際にどんな会話をしているのか、記録を公開しています。</strong>
            </p>

            {/* Consultation Story Cards */}
            <div className="space-y-4 mb-8">
              <Link
                href="/vibe"
                className="group flex items-center justify-between p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                    <UserCheck className="w-5 h-5" />
                  </span>
                  <span className="font-semibold text-slate-800 group-hover:text-emerald-700 transition-colors text-[20px]">
                    32歳・会社員女性（婚活初心者）の無料相談ストーリー
                  </span>
                </div>
                <ArrowRight className="w-6 h-6 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all shrink-0" />
              </Link>

              <Link
                href="/mens-consultation"
                className="group flex items-center justify-between p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                    <UserCheck className="w-5 h-5" />
                  </span>
                  <span className="font-semibold text-slate-800 group-hover:text-emerald-700 transition-colors text-[20px]">
                    35歳・会社員男性の無料相談ストーリー
                  </span>
                </div>
                <ArrowRight className="w-6 h-6 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all shrink-0" />
              </Link>

              <Link
                href="/womans-story"
                className="group flex items-center justify-between p-5 bg-emerald-50/60 rounded-xl border border-emerald-200/80 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                    <UserCheck className="w-5 h-5" />
                  </span>
                  <span className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors text-[20px]">
                    36歳・女性医師の無料相談ストーリー
                  </span>
                </div>
                <ArrowRight className="w-6 h-6 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all shrink-0" />
              </Link>

              <Link
                href="/smart-dating"
                className="group flex items-center justify-between p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                    <UserCheck className="w-5 h-5" />
                  </span>
                  <span className="font-semibold text-slate-800 group-hover:text-emerald-700 transition-colors text-[20px]">
                    33歳・男性プログラマーのお見合い後の相談実例
                  </span>
                </div>
                <ArrowRight className="w-6 h-6 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            </div>

            <p className="text-slate-700 leading-relaxed text-[20px] mb-6">
              <strong className="text-slate-900">お見合いの後、続けるか終えるかで迷ったときの判断についても、別ページでご紹介しています。</strong>
            </p>

            <div>
              <Link
                href="/matchmaking-criteria"
                className="inline-flex items-center gap-2 font-bold text-emerald-700 hover:text-emerald-800 hover:underline text-[20px]"
              >
                <span>▶ お見合い後の交際判断基準</span>
              </Link>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-16">
            <h2 className="text-[26px] sm:text-[32px] font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200 flex items-center gap-3">
              <MessageCircle className="w-8 h-8 text-emerald-600 shrink-0" />
              いつでもLINEで相談できます
            </h2>

            <div className="mb-8 p-6 rounded-xl bg-emerald-500/10 border-l-4 border-emerald-600">
              <p className="text-[22px] font-bold text-emerald-950 leading-snug">
                結論：LINEでのご相談は回数無制限。24時間受付で、原則当日中にお返しします。
              </p>
            </div>

            <p className="text-slate-700 leading-relaxed text-[20px]">
              夜間や週末にお送りいただいても構いません。入会前の方も、ニックネームのままお使いいただけます。
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-16">
            <h2 className="text-[26px] sm:text-[32px] font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200 flex items-center gap-3">
              <Clock className="w-8 h-8 text-emerald-600 shrink-0" />
              活動を休みたいときは
            </h2>

            <div className="mb-8 p-6 rounded-xl bg-emerald-500/10 border-l-4 border-emerald-600">
              <p className="text-[22px] font-bold text-emerald-950 leading-snug">
                結論：会員籍を維持したまま、休会できます。
              </p>
            </div>

            <ul className="space-y-3 text-slate-700 mb-8 pl-2 text-[20px]">
              <li className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0"></span>
                <span><strong>休会中の月会費：月額3,000円</strong>（通常の15,000円は停止します）</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0"></span>
                <span><strong>休会期間：1回のお申し込みにつき最長3か月</strong></span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0"></span>
                <span>休会中も、月1回まで担当カウンセラーへLINEでご相談いただけます</span>
              </li>
            </ul>

            <p className="text-[17px] text-slate-500 mb-6 italic">
              ※お見合いのご予定がある場合や、交際中のお相手がいる期間はご利用いただけません。ご希望の月の前月20日までにお申し出ください。
            </p>

            <div>
              <Link
                href="/plan"
                className="inline-flex items-center gap-2 font-bold text-emerald-700 hover:text-emerald-800 hover:underline text-[20px]"
              >
                <span>▶ 料金プランと少人数制について</span>
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-[26px] sm:text-[32px] font-bold text-slate-900 mb-8 pb-3 border-b border-slate-200 flex items-center gap-3">
              <HelpCircle className="w-8 h-8 text-emerald-600 shrink-0" />
              よくあるご質問
            </h2>

            <div className="space-y-6">
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                <h3 className="text-[22px] font-bold text-slate-900 mb-3 flex items-start gap-3">
                  <span className="text-emerald-700 font-black">Q.</span>
                  結婚相談所に入会したら、具体的に何をしてもらえますか？
                </h3>
                <p className="text-slate-700 pl-8 leading-relaxed text-[20px]">
                  <strong className="text-slate-900">A.</strong> ご希望の整理、プロフィール文の作成と添削、写真撮影の手配と写真選定、お見合い前の練習、お断りされた後の振り返り、交際中のご相談、真剣交際やプロポーズの判断まで、婚活のすべての場面が対象です。
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                <h3 className="text-[22px] font-bold text-slate-900 mb-3 flex items-start gap-3">
                  <span className="text-emerald-700 font-black">Q.</span>
                  実際にどんなやり取りをしているのか知りたいのですが
                </h3>
                <p className="text-slate-700 pl-8 leading-relaxed text-[20px]">
                  <strong className="text-slate-900">A.</strong> 無料相談で実際にどんな会話をしているのか、記録を公開しています。32歳会社員女性、35歳会社員男性、36歳女性医師、33歳男性プログラマーの4件をご覧いただけます。
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                <h3 className="text-[22px] font-bold text-slate-900 mb-3 flex items-start gap-3">
                  <span className="text-emerald-700 font-black">Q.</span>
                  サポートの距離感は選べますか？
                </h3>
                <p className="text-slate-700 pl-8 leading-relaxed text-[20px]">
                  <strong className="text-slate-900">A.</strong> 選べます。ご入会のときに「どの分野の助言が必要か」「連絡の取り方」「伝え方の希望」の3点を、簡単なアンケートで伺います。
                  <strong className="text-slate-900">必要な助言だけを、望むタイミングと伝え方で受け取れます。</strong>
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                <h3 className="text-[22px] font-bold text-slate-900 mb-3 flex items-start gap-3">
                  <span className="text-emerald-700 font-black">Q.</span>
                  厳しいことを言われるのが苦手なのですが、大丈夫ですか？
                </h3>
                <p className="text-slate-700 pl-8 leading-relaxed text-[20px]">
                  <strong className="text-slate-900">A.</strong> ご入会時に伝え方のご希望を伺うため、ご自身から言い出す必要がありません。まず気持ちを受け止めてほしい、率直に言ってほしい、優しく見守ってほしい。
                  <strong className="text-slate-900">アンケートにチェックしていただくだけです。</strong>
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                <h3 className="text-[22px] font-bold text-slate-900 mb-3 flex items-start gap-3">
                  <span className="text-emerald-700 font-black">Q.</span>
                  担当のカウンセラーと相性が合わなかったら、どうすればいいですか？
                </h3>
                <p className="text-slate-700 pl-8 leading-relaxed text-[20px]">
                  <strong className="text-slate-900">A.</strong> 無料相談の60分で、担当する2名と実際にお話しいただけます。
                  <strong className="text-slate-900">ご入会後も、この2名がそのまま担当します。</strong>
                  話してみて違うと感じられたら、ご入会いただかなくて構いません。
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                <h3 className="text-[22px] font-bold text-slate-900 mb-3 flex items-start gap-3">
                  <span className="text-emerald-700 font-black">Q.</span>
                  担当のカウンセラーは途中で替わりますか？
                </h3>
                <p className="text-slate-700 pl-8 leading-relaxed text-[20px]">
                  <strong className="text-slate-900">A.</strong> 替わりません。現役女性医師の代表カウンセラーとカウンセラー歴20年のベテラン仲人の2名が、入会から成婚まで担当します。
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                <h3 className="text-[22px] font-bold text-slate-900 mb-3 flex items-start gap-3">
                  <span className="text-emerald-700 font-black">Q.</span>
                  プロフィールは自分で書く必要がありますか？
                </h3>
                <p className="text-slate-700 pl-8 leading-relaxed text-[20px]">
                  <strong className="text-slate-900">A.</strong> ありません。文章を考えるのが負担な方には、伺った内容をもとにこちらで作成します。ご自身で書きたい方には、書いたものを添削します。
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                <h3 className="text-[22px] font-bold text-slate-900 mb-3 flex items-start gap-3">
                  <span className="text-emerald-700 font-black">Q.</span>
                  お見合いを断られたとき、何をしてもらえますか？
                </h3>
                <p className="text-slate-700 pl-8 leading-relaxed text-[20px]">
                  <strong className="text-slate-900">A.</strong> お断りのご連絡はすべてカウンセラーが受け、理由を分析してお伝えします。写真の印象なのか、文章なのか、当日の受け答えなのか。改善できる部分を特定して次につなげます。
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                <h3 className="text-[22px] font-bold text-slate-900 mb-3 flex items-start gap-3">
                  <span className="text-emerald-700 font-black">Q.</span>
                  交際が始まってからも相談できますか？
                </h3>
                <p className="text-slate-700 pl-8 leading-relaxed text-[20px]">
                  <strong className="text-slate-900">A.</strong> できます。連絡の頻度、デートの誘い方、お店選び、真剣交際に進むかの判断、プロポーズまでご相談いただけます。
                  <strong className="text-slate-900">婚活で最も迷うのは、お見合いより交際中です。</strong>
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                <h3 className="text-[22px] font-bold text-slate-900 mb-3 flex items-start gap-3">
                  <span className="text-emerald-700 font-black">Q.</span>
                  夜間や週末に連絡しても返事はもらえますか？
                </h3>
                <p className="text-slate-700 pl-8 leading-relaxed text-[20px]">
                  <strong className="text-slate-900">A.</strong> LINEでのご相談は回数無制限で、24時間受付しています。原則当日中にお返しします。
                </p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                <h3 className="text-[22px] font-bold text-slate-900 mb-3 flex items-start gap-3">
                  <span className="text-emerald-700 font-black">Q.</span>
                  途中で活動を休むことはできますか？
                </h3>
                <p className="text-slate-700 pl-8 leading-relaxed text-[20px]">
                  <strong className="text-slate-900">A.</strong> できます。休会中の月会費は月額3,000円となり、通常の月会費15,000円は停止します。1回のお申し込みにつき最長3か月まで取得可能です。
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion & Call to Action */}
          <section className="mb-16 p-8 sm:p-12 bg-slate-900 text-white rounded-2xl text-center">
            <h2 className="text-[28px] sm:text-[34px] font-bold mb-6">まとめ</h2>
            <p className="text-slate-300 text-[20px] leading-relaxed max-w-2xl mx-auto mb-6">
              婚活のサポートに、決まった形はないと思っています。
            </p>
            <p className="text-slate-200 font-medium text-[20px] leading-relaxed max-w-2xl mx-auto mb-6">
              <strong className="text-white font-bold">必要な助言も、連絡の頻度も、伝え方の好みも、人によって違います。</strong>
              だから当相談所では、それを先に伺ってから始めます。
            </p>
            <p className="text-slate-300 text-[20px] leading-relaxed max-w-2xl mx-auto mb-8">
              <strong className="text-white font-bold">どんなサポートが合うかは、実際に話してみないと分かりません。</strong>
              無料相談で、担当する2名とお話しください。その2名が、そのまま成婚まで担当します。
            </p>

            <div className="pt-2">
              <Link
                href="/consultation"
                className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[20px] rounded-full shadow-lg transition-all duration-200"
              >
                <span>無料相談の流れと婚活未来図</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </section>

          {/* Author Bio Box */}
          <footer className="pt-10 border-t border-slate-200">
            <div className="p-8 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row gap-6 items-start">
              <div className="space-y-3">
                <span className="text-[14px] font-bold text-emerald-800 tracking-wider uppercase">
                  この記事の執筆者
                </span>
                <h3 className="text-[24px] font-bold text-slate-900">
                  加藤とあこ
                </h3>
                <p className="text-[18px] text-slate-700 leading-relaxed">
                  大阪梅田ドクターズ結婚相談所 代表カウンセラー<br />
                  医療法人幸萌会{' '}
                  <a
                    href="https://q-cl.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 underline hover:text-emerald-800"
                  >
                    久宝寺透析クリニック
                  </a>{' '}
                  院長／内科認定医
                </p>
                <p className="text-[16px] text-slate-500 leading-relaxed pt-2">
                  腎臓内科を専門とする医師として、大阪府八尾市の久宝寺透析クリニックで院長を務めています。
                </p>
              </div>
            </div>

            <div className="mt-8 text-right text-[15px] text-slate-400">
              公開日：2026年9月15日 <br/>｜ 最終更新日：2026年9月15日
            </div>
          </footer>

        </div>
      </main>
    </>
  );
}