import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Calendar, User, ChevronRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "結婚相談所のサポート内容｜入会後に何をしてもらえるか｜大阪・梅田",
  description:
    "結婚相談所に入会したら、実際に何をしてもらえるのか。大阪梅田ドクターズ結婚相談所では、入会時に「助言が必要な分野」「連絡の取り方」「伝え方の希望」をアンケートで伺い、その方に合わせて伴走します。判断に迷う場面は事前にお伝えし、担当2名は成婚まで替わりません。北新地駅徒歩1分、IBJ加盟。",
  keywords: [
    "結婚相談所 サポート内容",
    "結婚相談所 何をしてくれる",
    "仲人型 サポート",
    "結婚相談所 担当 相性",
    "大阪 結婚相談所 サポート",
    "梅田 結婚相談所",
  ],
  authors: [{ name: "加藤とあこ（代表カウンセラー・内科認定医・現役女性医師）" }],
  alternates: {
    canonical: "https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp/how-we-support",
  },
  openGraph: {
    title: "結婚相談所のサポート内容｜入会後に何をしてもらえるか｜大阪・梅田",
    description: "入会後に何をしてもらえるのか。助言の分野も、連絡の頻度も、伝え方も、あなたに合わせます。",
    url: "https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp/how-we-support",
    type: "article",
    publishedTime: "2026-09-15T00:00:00+09:00",
    modifiedTime: "2026-09-15T00:00:00+09:00",
  },
  twitter: {
    card: "summary_large_image",
    title: "結婚相談所のサポート内容｜入会後に何をしてもらえるか｜大阪・梅田",
    description: "入会後に何をしてもらえるのか。助言の分野も、連絡の頻度も、伝え方も、あなたに合わせます。",
  },
};

export default function HowWeSupportPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "結婚相談所に入会したら、具体的に何をしてもらえますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ご希望の整理、プロフィール文の作成と添削、写真撮影の手配と写真選定、お見合い前の練習、お断りされた後の振り返り、交際中の相談、真剣交際やプロポーズの判断まで、婚活のすべての場面が対象です。",
        },
      },
      {
        "@type": "Question",
        name: "結婚相談所で実際にどんなやり取りをしているのか知りたいのですが。",
        acceptedAnswer: {
          "@type": "Answer",
          text: "大阪梅田ドクターズ結婚相談所では、無料相談で実際にどんな会話をしているのかの記録を公開しています。32歳会社員女性、35歳会社員男性、36歳女性医師、33歳男性プログラマーの4件をご覧いただけます。",
        },
      },
      {
        "@type": "Question",
        name: "結婚相談所のサポートの距離感は選べますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "選べます。大阪梅田ドクターズ結婚相談所では、入会のときに「どの分野の助言が必要か」「連絡の取り方」「伝え方の希望」の3点を簡単なアンケートで伺います。必要な助言だけを、望むタイミングと伝え方で受け取れます。",
        },
      },
      {
        "@type": "Question",
        name: "厳しいことを言われるのが苦手でも大丈夫ですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "入会時に伝え方の希望を伺うため、自分から言い出す必要がありません。まず気持ちを受け止めてほしい、率直に言ってほしい、優しく見守ってほしい。アンケートにチェックするだけです。",
        },
      },
      {
        "@type": "Question",
        name: "担当のカウンセラーと相性が合わなかったら、どうすればいいですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "無料相談の60分で、担当する2名と実際に話せます。入会後も、この2名がそのまま担当します。話してみて違うと感じたら、入会しなくて構いません。",
        },
      },
      {
        "@type": "Question",
        name: "担当のカウンセラーは途中で替わりますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "替わりません。現役女性医師の代表カウンセラーとカウンセラー歴20年のベテラン仲人の2名が、入会から成婚まで担当します。",
        },
      },
      {
        "@type": "Question",
        name: "プロフィールは自分で書く必要がありますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ありません。文章を考えるのが負担な方には、伺った内容をもとにこちらで作成します。自分で書きたい方には、書いたものを添削します。",
        },
      },
      {
        "@type": "Question",
        name: "お見合いを断られたとき、何をしてもらえますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "お断りの連絡はすべてカウンセラーが受け、理由を分析して伝えます。写真の印象なのか、文章なのか、当日の受け答えなのか。改善できる部分を特定して次につなげます。",
        },
      },
      {
        "@type": "Question",
        name: "交際が始まってからも相談できますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "できます。連絡の頻度、デートの誘い方、お店選び、真剣交際に進むかの判断、プロポーズまで相談できます。婚活で最も迷うのは、お見合いより交際中です。",
        },
      },
      {
        "@type": "Question",
        name: "夜間や週末に連絡しても返事はもらえますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LINEでの相談は回数無制限で、24時間受付しています。原則当日中にお返しします。",
        },
      },
      {
        "@type": "Question",
        name: "途中で活動を休むことはできますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "できます。休会中の月会費は月額3,000円となり、通常の月会費15,000円は停止します。1回の申し込みにつき最長3か月まで取得可能です。",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "結婚相談所のサポート内容｜入会後に何をしてもらえるか",
    datePublished: "2026-09-15",
    dateModified: "2026-09-15",
    author: {
      "@type": "Person",
      "@id": "https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp/#founder",
      name: "加藤とあこ",
      jobTitle: "代表カウンセラー",
      hasOccupation: {
        "@type": "Occupation",
        name: "医師",
      },
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "内科認定医",
      },
      affiliation: {
        "@type": "MedicalOrganization",
        name: "医療法人幸萌会 久宝寺透析クリニック",
        url: "https://q-cl.com/",
      },
      sameAs: ["https://q-cl.com/", "https://q-cl.com/greeting.html"],
    },
    publisher: {
      "@type": "Organization",
      name: "大阪梅田ドクターズ結婚相談所",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ホーム",
        item: "https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "サポート内容",
        item: "https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp/how-we-support",
      },
    ],
  };

  const faqs = [
    {
      q: "結婚相談所に入会したら、具体的に何をしてもらえますか？",
      a: "ご希望の整理、プロフィール文の作成と添削、写真撮影の手配と写真選定、お見合い前の練習、お断りされた後の振り返り、交際中のご相談、真剣交際やプロポーズの判断まで、婚活のすべての場面が対象です。",
    },
    {
      q: "実際にどんなやり取りをしているのか知りたいのですが",
      a: "無料相談で実際にどんな会話をしているのか、記録を公開しています。32歳会社員女性、35歳会社員男性、36歳女性医師、33歳男性プログラマーの4件をご覧いただけます。",
    },
    {
      q: "サポートの距離感は選べますか？",
      a: "選べます。ご入会のときに「どの分野の助言が必要か」「連絡の取り方」「伝え方の希望」の3点を、簡単なアンケートで伺います。必要な助言だけを、望むタイミングと伝え方で受け取れます。",
    },
    {
      q: "厳しいことを言われるのが苦手なのですが、大丈夫ですか？",
      a: "ご入会時に伝え方のご希望を伺うため、ご自身から言い出す必要がありません。まず気持ちを受け止めてほしい、率直に言ってほしい、優しく見守ってほしい。アンケートにチェックしていただくだけです。",
    },
    {
      q: "担当のカウンセラーと相性が合わなかったら、どうすればいいですか？",
      a: "無料相談の60分で、担当する2名と実際にお話しいただけます。ご入会後も、この2名がそのまま担当します。話してみて違うと感じられたら、ご入会いただかなくて構いません。",
    },
    {
      q: "担当のカウンセラーは途中で替わりますか？",
      a: "替わりません。現役女性医師の代表カウンセラーとカウンセラー歴20年のベテラン仲人の2名が、入会から成婚まで担当します。",
    },
    {
      q: "プロフィールは自分で書く必要がありますか？",
      a: "ありません。文章を考えるのが負担な方には、伺った内容をもとにこちらで作成します。ご自身で書きたい方には、書いたものを添削します。",
    },
    {
      q: "お見合いを断られたとき、何をしてもらえますか？",
      a: "お断りのご連絡はすべてカウンセラーが受け、理由を分析してお伝えします。写真の印象なのか、文章なのか、当日の受け答えなのか。改善できる部分を特定して次につなげます。",
    },
    {
      q: "交際が始まってからも相談できますか？",
      a: "できます。連絡の頻度、デートの誘い方、お店選び、真剣交際に進むかの判断、プロポーズまでご相談いただけます。婚活で最も迷うのは、お見合いより交際中です。",
    },
    {
      q: "夜間や週末に連絡しても返事はもらえますか？",
      a: "LINEでのご相談は回数無制限で、24時間受付しています。原則当日中にお返しします。",
    },
    {
      q: "途中で活動を休むことはできますか？",
      a: "できます。休会中の月会費は月額3,000円となり、通常の月会費15,000円は停止します。1回のお申し込みにつき最長3か月まで取得可能です。",
    },
  ];

  return (
    <>
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

      <article className="min-h-screen bg-slate-50 py-12 text-[20px] leading-relaxed text-slate-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* パンくずリスト */}
          <nav aria-label="Breadcrumb" className="mb-6 text-base text-slate-500">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="hover:text-emerald-700 transition-colors">
                  ホーム
                </Link>
              </li>
              <li>
                <ChevronRight className="h-4 w-4" />
              </li>
              <li aria-current="page" className="font-medium text-slate-700">
                サポート内容
              </li>
            </ol>
          </nav>

          {/* ヘッダー */}
          <header className="mb-10 rounded-2xl bg-white p-6 sm:p-10 shadow-sm border border-slate-100">
            <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-snug mb-6">
              結婚相談所のサポート内容｜入会後に何をしてもらえるか
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-base text-slate-600 border-t border-slate-100 pt-4">
              <span className="flex items-center gap-2">
                <User className="h-5 w-5 text-emerald-700 flex-shrink-0" />
                執筆: 代表カウンセラー 加藤とあこ（内科認定医・現役女性医師）
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-emerald-700 flex-shrink-0" />
                公開日: 2026年9月15日
              </span>
            </div>
          </header>

          {/* 要点ブロック */}
          <section className="mb-12 rounded-2xl bg-emerald-50/70 p-6 sm:p-8 border border-emerald-100 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-emerald-950 mb-4 flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6 text-emerald-700 flex-shrink-0" />
              この記事の要点（1分でわかる要約）
            </h2>
            <p className="text-slate-800 text-[20px] leading-relaxed">
              大阪梅田ドクターズ結婚相談所では、
              <strong className="bg-emerald-200/60 font-semibold px-1 py-0.5 rounded">
                入会時に「どの分野の助言が必要か」「連絡の取り方」「伝え方の希望」の3点をアンケートで伺い、その方に合わせてサポートの形を決めます。
              </strong>{" "}
              必要な助言だけを、望むタイミングと伝え方で受け取れるため、放っておかれることも、干渉されすぎることもありません。婚活で判断に迷う場面はあらかじめ決まっているため、次に何が来るかを先にお伝えします。担当は現役女性医師の代表カウンセラーとカウンセラー歴20年のベテラン仲人の2名で、
              <strong className="bg-emerald-200/60 font-semibold px-1 py-0.5 rounded">
                無料相談で会った2名が、そのまま成婚まで担当します。
              </strong>{" "}
              実際の相談のやり取りは、無料相談ストーリーとして公開しています。
            </p>
          </section>

          {/* 本文コンテンツ */}
          <div className="space-y-12">
            {/* セクション 1 */}
            <section className="rounded-2xl bg-white p-6 sm:p-10 shadow-sm border border-slate-100">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 border-b-2 border-emerald-700 pb-3">
                サポートの内容は、人によって変えています
              </h2>
              <p className="font-bold text-emerald-950 bg-emerald-50 p-5 rounded-xl border-l-4 border-emerald-700 mb-6 text-[20px]">
                結論：必要な助言も、連絡の頻度も、伝え方の好みも、人によって違います。当相談所では入会時にそれを伺ってから始めます。
              </p>
              <p className="text-slate-800 text-[20px] leading-relaxed mb-4">
                手厚いサポートを求める方もいれば、要点だけ聞いてご自身で判断したい方もいらっしゃいます。
                <strong>どちらが良いということはありません。</strong>{" "}
                同じサポートをすべての方に当てはめると、片方には物足りず、もう片方には重くなります。
              </p>
              <p className="text-slate-800 text-[20px] leading-relaxed mb-6">
                ご入会のときに、簡単なアンケートで次の3点を伺います。
                <strong>チェックしていただくだけです。</strong> 必要に応じて、面談で詳しくお聞きします。
              </p>

              <div className="space-y-6">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <h3 className="font-bold text-emerald-900 text-xl sm:text-2xl mb-3">
                    ① どの分野の助言が必要ですか
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-800 text-[20px]">
                    <li>
                      <strong>活動の組み立て</strong> — 誰に、何人、どんなペースで申し込むか。お受けするかどうかの判断
                    </li>
                    <li>
                      <strong>振る舞い</strong> — 外見や服装、お店でのエスコート、LINEやデートでの会話
                    </li>
                    <li>
                      <strong>関係の進め方</strong> — お相手の言動をどう受け取るか、どう応じるか
                    </li>
                  </ul>
                  <p className="mt-4 font-semibold text-slate-900 text-[20px]">
                    「全部お願いしたい」でも、「活動の組み立てだけでいい」でも構いません。
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <h3 className="font-bold text-emerald-900 text-xl sm:text-2xl mb-3">
                    ② 連絡は、どのように取りたいですか
                  </h3>
                  <p className="text-slate-800 text-[20px] leading-relaxed">
                    こちらからご連絡したほうがよいか、ご自身のタイミングでご連絡いただくほうがよいか。
                    <strong>どのくらいの頻度が心地よいか。</strong>
                  </p>
                  <p className="mt-3 text-slate-800 text-[20px]">
                    こまめに声をかけてほしい方もいれば、必要なときだけがよい方もいらっしゃいます。
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <h3 className="font-bold text-emerald-900 text-xl sm:text-2xl mb-3">
                    ③ どのように伝えてほしいですか
                  </h3>
                  <p className="text-slate-800 text-[20px] leading-relaxed mb-4">
                    まず気持ちを受け止めてほしい。率直な助言がほしい。耳が痛いことでも、はっきり言ってほしい。優しく見守ってほしい。背中を押してほしい。
                  </p>
                  <p className="font-semibold text-slate-900 text-[20px] mb-4">
                    同じ内容でも、伝わり方は人によって変わります。
                  </p>
                  <p className="text-slate-800 text-[20px] bg-white p-4 rounded-lg border border-slate-200">
                    <strong>「年齢の話には触れないでほしい」「他の会員と比べる話はしないでほしい」といった項目もご用意しています。</strong>{" "}
                    言いにくいことも、チェックするだけで伝わります。
                  </p>
                </div>
              </div>

              {/* 画像掲載 */}
              <div className="my-10 rounded-2xl bg-slate-50 p-6 sm:p-8 border border-slate-200 text-center">
                <p className="font-bold text-slate-900 text-xl mb-4">実際にお使いいただくアンケートです</p>
                <div className="relative mx-auto max-w-md aspect-[3/4] overflow-hidden rounded-lg shadow-md border border-slate-200">
                  <Image
                    src="/support-survey-page1.jpg"
                    alt="大阪梅田ドクターズ結婚相談所で入会時にご記入いただくサポート希望アンケートの1ページ目"
                    fill
                    className="object-contain bg-white"
                  />
                </div>
                <p className="mt-5 text-slate-700 text-[20px]">
                  <strong>ご入会時に、タブレットでご記入いただきます。</strong> 所要時間は5分ほど。
                  <strong>空欄のままでも構いません。</strong>
                </p>
              </div>

              <p className="text-slate-800 text-[20px] leading-relaxed font-medium">
                <strong>この3点は、活動の途中で変わっても構いません。</strong> 「もう少し任せてほしい」「ここは一緒に考えてほしい」。そのときどきでおっしゃってください。
              </p>
            </section>

            {/* セクション 2 */}
            <section className="rounded-2xl bg-white p-6 sm:p-10 shadow-sm border border-slate-100">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 border-b-2 border-emerald-700 pb-3">
                「この人に本音を話せるか」を、直感だけに頼らない
              </h2>
              <p className="font-bold text-emerald-950 bg-emerald-50 p-5 rounded-xl border-l-4 border-emerald-700 mb-6 text-[20px]">
                結論：言いにくいことを、言わなくて済むようにしておく。これが、相性を運任せにしないための方法です。
              </p>
              <p className="text-slate-800 text-[20px] leading-relaxed mb-4">
                結婚相談所選びで最後に残るのは、担当者との相性です。「この人になら本音を話せそうか」という直感で決める方が多いと思います。
              </p>
              <p className="text-slate-800 text-[20px] leading-relaxed mb-4">
                ただ、<strong>婚活では、うまくいっていないことや言いにくい本音を話す場面が必ず来ます。</strong> そのとき話しやすいかどうかは、初対面では分かりにくいものです。
              </p>
              <p className="text-slate-800 text-[20px] leading-relaxed mb-4">
                <strong>だから当相談所では、入会時に伝え方のご希望を先に伺います。</strong> 「厳しいことは言わないでほしい」も「はっきり言ってほしい」も、アンケートにチェックしていただくだけ。
                <strong>自分から言い出す必要がありません。</strong>
              </p>
              <p className="text-slate-800 text-[20px] leading-relaxed">
                <strong>担当が2名いることも、同じ意味を持ちます。</strong> 女性には言いにくいこと、男性には分かってもらえないと感じること。
                <strong>話す相手を選べます。</strong>
              </p>
            </section>

            {/* セクション 3 */}
            <section className="rounded-2xl bg-white p-6 sm:p-10 shadow-sm border border-slate-100">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 border-b-2 border-emerald-700 pb-3">
                担当は2名。無料相談で会った2名が、そのまま担当します
              </h2>
              <p className="font-bold text-emerald-950 bg-emerald-50 p-5 rounded-xl border-l-4 border-emerald-700 mb-6 text-[20px]">
                結論：入会前に相談を受ける担当者と、入会後にサポートする担当者が同じです。
              </p>
              <p className="text-slate-800 text-[20px] leading-relaxed mb-4">
                相談所によっては、<strong>入会前の担当者と入会後の担当者が別の方になる場合があります。</strong> 担当が途中で替わる体制のところもあります。
                <strong>入会前に確認しておきたい点です。</strong>
              </p>
              <p className="text-slate-800 text-[20px] leading-relaxed mb-6">
                当相談所では、無料相談の60分で、前半30分を現役女性医師の代表カウンセラー、後半30分をカウンセラー歴20年のベテラン仲人が担当します。
                <strong>この2名が、そのままご入会後も成婚まで担当します。</strong>
              </p>

              {/* テーブル：担当役割 */}
                  <div className="sm:hidden flex items-center justify-center my-2">
  <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-green-400 to-green-700 text-white font-bold text-sm shadow-[0_0_12px_rgba(244,63,94,0.4)] animate-pulse">
    <ArrowLeft className="w-4 h-4 animate-[bounce_1.5s_infinite] -rotate-0" />
    <span>スライドします</span>
    <ArrowRight className="w-4 h-4 animate-[bounce_1.5s_infinite]" />
  </p>
</div>
              <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                <table className="w-full text-left border-collapse text-[20px]">
                  <thead>
                    <tr className="bg-emerald-800 text-white">
                      <th className="p-4 font-semibold min-w-[220px]">ご相談の内容</th>
                      <th className="p-4 font-semibold min-w-[180px]">主な担当</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 text-slate-800">お見合いの日程調整、お相手側とのやり取り</td>
                      <td className="p-4 font-medium text-emerald-950">ベテラン仲人</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 text-slate-800">お相手選び、申し込みの戦略</td>
                      <td className="p-4 font-medium text-emerald-950">ベテラン仲人</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 text-slate-800">プロフィール写真、服装</td>
                      <td className="p-4 font-medium text-emerald-950">代表カウンセラー</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 text-slate-800">交際中の気持ちの揺れ、返信の迷い</td>
                      <td className="p-4 font-medium text-emerald-950">代表カウンセラー</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 text-slate-800">真剣交際に進むかの判断</td>
                      <td className="p-4 font-medium text-emerald-950">2名で一緒に</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-800 text-[20px] leading-relaxed mb-4">
                <strong>明確に分けているわけではありません。</strong> どちらにご相談いただいても構いませんし、重要な局面では2名で一緒に考えます。
              </p>
              <p className="text-slate-800 text-[20px] leading-relaxed mb-6">
                <strong>新規のご入会を毎月5名様までに限定しているのも、同じ理由です。</strong> お一人にかける時間を確保するためで、活動中のご相談にすぐお応えできます。
              </p>

              <div className="pt-2">
                <Link
                  href="/dual-support"
                  className="inline-flex items-center gap-2 text-emerald-800 font-bold text-[20px] hover:underline"
                >
                  <ArrowRight className="h-5 w-5 text-emerald-700 flex-shrink-0" />
                  結婚相談所、担当カウンセラーは1人で本当に十分？
                </Link>
              </div>
            </section>

            {/* セクション 4 */}
            <section className="rounded-2xl bg-white p-6 sm:p-10 shadow-sm border border-slate-100">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 border-b-2 border-emerald-700 pb-3">
                判断に迷う場面は、来る前にお伝えします
              </h2>
              <p className="font-bold text-emerald-950 bg-emerald-50 p-5 rounded-xl border-l-4 border-emerald-700 mb-6 text-[20px]">
                結論：婚活で判断を求められる場面は決まっています。その場になってから考えると、判断を誤ります。
              </p>

              <ul className="list-disc list-inside space-y-2 text-slate-800 text-[20px] mb-6 bg-slate-50 p-6 rounded-xl border border-slate-200">
                <li>活動開始の直後、申し込みが集中する時期</li>
                <li>プロフィールを読んで申し込んでくださった方への対応</li>
                <li>仮交際を何人まで並行するか</li>
                <li>真剣交際に進むかどうか</li>
                <li>ご家族との関係、生活のすり合わせ</li>
                <li>プロポーズ</li>
              </ul>

              <p className="font-bold text-slate-900 text-[20px] mb-4">感情が動いている最中に、冷静な判断はできません。</p>
              <p className="text-slate-800 text-[20px] leading-relaxed mb-6">
                当相談所では、<strong>次に来る場面を先にお伝えし、そこでどう判断するかの基準を、活動を始める前に決めておきます。</strong> 「明確なNGがなければもう一度会う」「お見合い4回につき1回は仮交際へ進む」といった目安を、ご自身の傾向に合わせて設定します。
              </p>

              <div>
                <Link
                  href="/dungeon-map"
                  className="inline-flex items-center gap-2 text-emerald-800 font-bold text-[20px] hover:underline"
                >
                  <ArrowRight className="h-5 w-5 text-emerald-700 flex-shrink-0" />
                  婚活で迷う10の分岐点・婚活ダンジョンマップ
                </Link>
              </div>
            </section>

            {/* セクション 5 */}
            <section className="rounded-2xl bg-white p-6 sm:p-10 shadow-sm border border-slate-100">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 border-b-2 border-emerald-700 pb-3">
                実際に受けられるサポート
              </h2>
              <p className="font-bold text-emerald-950 bg-emerald-50 p-5 rounded-xl border-l-4 border-emerald-700 mb-6 text-[20px]">
                結論：お相手探しからプロポーズまで、婚活のすべての場面が対象です。
              </p>

              {/* テーブル：受けられるサポート */}
    <div className="sm:hidden flex items-center justify-center my-2">
  <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-green-400 to-green-700 text-white font-bold text-sm shadow-[0_0_12px_rgba(244,63,94,0.4)] animate-pulse">
    <ArrowLeft className="w-4 h-4 animate-[bounce_1.5s_infinite] -rotate-0" />
    <span>スライドします</span>
    <ArrowRight className="w-4 h-4 animate-[bounce_1.5s_infinite]" />
  </p>
</div>              <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                <table className="w-full text-left border-collapse text-[20px]">
                  <thead>
                    <tr className="bg-emerald-800 text-white">
                      <th className="p-4 font-semibold min-w-[150px]">場面</th>
                      <th className="p-4 font-semibold min-w-[320px]">サポート内容</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-bold text-slate-900">入会時</td>
                      <td className="p-4 text-slate-800">ご希望の整理、プロフィール文の作成・添削、提携スタジオの手配と写真選定</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-bold text-slate-900">お相手探し</td>
                      <td className="p-4 text-slate-800">ご自身の検索に加え、ベテラン仲人からの推薦。申し込みの代行も可能です</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-bold text-slate-900">お見合い前</td>
                      <td className="p-4 text-slate-800">当日の流れ、想定される質問への答え方、会話が途切れたときの戻し方、服装</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-bold text-slate-900">お見合い後</td>
                      <td className="p-4 text-slate-800">お断り理由の分析、次に何を変えるかの整理</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-bold text-slate-900">交際中</td>
                      <td className="p-4 text-slate-800">連絡の頻度、デートの誘い方、お店選び、続けるか迷ったときの整理</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-bold text-slate-900">真剣交際〜成婚</td>
                      <td className="p-4 text-slate-800">進むかどうかの判断、ご家族との関係、プロポーズ</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-800 text-[20px] leading-relaxed mb-4">
                <strong>プロフィール文は、ご希望に応じて作り方を変えます。</strong> 文章を考えるのが負担な方には、伺った内容をもとにこちらで作成します。ご自身で書きたい方には、書いたものを添削します。
              </p>
              <p className="text-slate-800 text-[20px] leading-relaxed mb-6">
                <strong>お相手選びには、当相談所ならではの方法があります。</strong> プロフィールの読み方、お相手側の相談所への確認。詳しくは別ページでご説明しています。
              </p>

              <div className="space-y-3">
                <div>
                  <Link
                    href="/support"
                    className="inline-flex items-center gap-2 text-emerald-800 font-bold text-[20px] hover:underline"
                  >
                    <ArrowRight className="h-5 w-5 text-emerald-700 flex-shrink-0" />
                    誰に申し込めばいいか分からない方への特別サポート
                  </Link>
                </div>
                <div>
                  <Link
                    href="/why-us"
                    className="inline-flex items-center gap-2 text-emerald-800 font-bold text-[20px] hover:underline"
                  >
                    <ArrowRight className="h-5 w-5 text-emerald-700 flex-shrink-0" />
                    大阪梅田ドクターズ結婚相談所が選ばれる6つの理由
                  </Link>
                </div>
              </div>
            </section>

            {/* セクション 6 */}
            <section className="rounded-2xl bg-white p-6 sm:p-10 shadow-sm border border-slate-100">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 border-b-2 border-emerald-700 pb-3">
                実際のご相談を読む
              </h2>
              <p className="font-bold text-emerald-950 bg-emerald-50 p-5 rounded-xl border-l-4 border-emerald-700 mb-6 text-[20px]">
                結論：どんなやり取りをしているのか、無料相談の記録を公開しています。
              </p>
              <p className="text-slate-800 text-[20px] leading-relaxed mb-6">
                サポートの内容は、言葉で説明するより実際のやり取りを読んでいただくほうが早いかもしれません。
                <strong>無料相談で実際にどんな会話をしているのか、記録を公開しています。</strong>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <Link
                  href="/vibe"
                  className="p-5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-emerald-50/50 hover:border-emerald-200 transition-colors flex items-center justify-between group"
                >
                  <span className="font-semibold text-slate-900 text-[20px] group-hover:text-emerald-950">
                    32歳・会社員女性（婚活初心者）の無料相談ストーリー
                  </span>
                  <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-emerald-700 flex-shrink-0 ml-3" />
                </Link>
                <Link
                  href="/mens-consultation"
                  className="p-5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-emerald-50/50 hover:border-emerald-200 transition-colors flex items-center justify-between group"
                >
                  <span className="font-semibold text-slate-900 text-[20px] group-hover:text-emerald-950">
                    35歳・会社員男性の無料相談ストーリー
                  </span>
                  <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-emerald-700 flex-shrink-0 ml-3" />
                </Link>
                <Link
                  href="/womans-story"
                  className="p-5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-emerald-50/50 hover:border-emerald-200 transition-colors flex items-center justify-between group"
                >
                  <span className="font-semibold text-slate-900 text-[20px] group-hover:text-emerald-950">
                    36歳・女性医師の無料相談ストーリー
                  </span>
                  <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-emerald-700 flex-shrink-0 ml-3" />
                </Link>
                <Link
                  href="/smart-dating"
                  className="p-5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-emerald-50/50 hover:border-emerald-200 transition-colors flex items-center justify-between group"
                >
                  <span className="font-semibold text-slate-900 text-[20px] group-hover:text-emerald-950">
                    33歳・男性プログラマーのお見合い後の相談実例
                  </span>
                  <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-emerald-700 flex-shrink-0 ml-3" />
                </Link>
              </div>

              <p className="text-slate-800 text-[20px] leading-relaxed mb-4">
                <strong>お見合いの後、続けるか終えるかで迷ったときの判断についても、別ページでご紹介しています。</strong>
              </p>

              <div>
                <Link
                  href="/matchmaking-criteria"
                  className="inline-flex items-center gap-2 text-emerald-800 font-bold text-[20px] hover:underline"
                >
                  <ArrowRight className="h-5 w-5 text-emerald-700 flex-shrink-0" />
                  お見合い後の交際判断基準
                </Link>
              </div>
            </section>

            {/* セクション 7 & 8 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 border-b-2 border-emerald-700 pb-2">
                    いつでもLINEで相談できます
                  </h2>
                  <p className="font-bold text-emerald-950 bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-700 mb-4 text-[20px]">
                    結論：LINEでのご相談は回数無制限。24時間受付で、原則当日中にお返しします。
                  </p>
                  <p className="text-slate-800 text-[20px] leading-relaxed">
                    夜間や週末にお送りいただいても構いません。入会前の方も、ニックネームのままお使いいただけます。
                  </p>
                </div>
              </section>

              <section className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 border-b-2 border-emerald-700 pb-2">
                    活動を休みたいときは
                  </h2>
                  <p className="font-bold text-emerald-950 bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-700 mb-4 text-[20px]">
                    結論：会員籍を維持したまま、休会できます。
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-800 text-[20px] mb-4">
                    <li>
                      <strong>休会中の月会費：月額3,000円</strong>（通常の15,000円は停止します）
                    </li>
                    <li>
                      <strong>休会期間：1回のお申し込みにつき最長3か月</strong>
                    </li>
                    <li>休会中も、月1回まで担当カウンセラーへLINEでご相談いただけます</li>
                  </ul>
                  <p className="text-base text-slate-500 mb-4">
                    ※お見合いのご予定がある場合や、交際中のお相手がいる期間はご利用いただけません。ご希望の月の前月20日までにお申し出ください。
                  </p>
                </div>
                <div>
                  <Link
                    href="/plan"
                    className="inline-flex items-center gap-2 text-emerald-800 font-bold text-[20px] hover:underline"
                  >
                    <ArrowRight className="h-5 w-5 text-emerald-700 flex-shrink-0" />
                    料金プランと少人数制について
                  </Link>
                </div>
              </section>
            </div>

            {/* FAQ */}
            <section className="rounded-2xl bg-white p-6 sm:p-10 shadow-sm border border-slate-100">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 border-b-2 border-emerald-700 pb-3">
                よくあるご質問
              </h2>
              <div className="space-y-8">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-slate-100 pb-8 last:border-b-0 last:pb-0">
                    <h3 className="font-bold text-slate-900 text-xl sm:text-2xl mb-3 flex items-start gap-2">
                      <span className="text-emerald-700 font-black">Q.</span>
                      <span>{faq.q}</span>
                    </h3>
                    <div className="flex items-start gap-2 text-slate-800 text-[20px] leading-relaxed pl-7">
                      <p>
                        <strong className="text-emerald-800 mr-2">A.</strong>
                        {faq.a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* まとめ */}
            <section className="rounded-2xl bg-gradient-to-br from-emerald-800 to-slate-900 p-6 sm:p-10 text-white shadow-md">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 border-b border-emerald-600/50 pb-3">
                まとめ
              </h2>
              <p className="text-[20px] leading-relaxed mb-4 text-slate-100">
                婚活のサポートに、決まった形はないと思っています。
              </p>
              <p className="text-[20px] leading-relaxed mb-6 text-slate-100">
                <strong className="text-emerald-200">
                  必要な助言も、連絡の頻度も、伝え方の好みも、人によって違います。
                </strong>{" "}
                だから当相談所では、それを先に伺ってから始めます。
              </p>
              <p className="text-[20px] leading-relaxed mb-8 text-slate-100">
                <strong>どんなサポートが合うかは、実際に話してみないと分かりません。</strong>{" "}
                無料相談で、担当する2名とお話しください。その2名が、そのまま成婚まで担当します。
              </p>

              <div className="pt-2">
                <Link
                  href="/consultation"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-[20px] px-8 py-4 rounded-xl transition-all shadow-md"
                >
                  無料相談の流れと婚活未来図
                  <ArrowRight className="h-6 w-6" />
                </Link>
              </div>
            </section>

            {/* 著者情報 */}
            <footer className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                この記事の執筆者
              </h2>
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="space-y-3 text-slate-800 text-[20px]">
                  <p className="font-bold text-2xl text-slate-900">加藤とあこ</p>
                  <p className="text-emerald-800 font-medium">
                    大阪梅田ドクターズ結婚相談所 代表カウンセラー
                    <br />
                    医療法人幸萌会{" "}
                    <a
                      href="https://q-cl.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-emerald-900"
                    >
                      久宝寺透析クリニック
                    </a>{" "}
                    院長／内科認定医
                  </p>
                  <p className="text-slate-700 text-[20px] leading-relaxed">
                    腎臓内科を専門とする医師として、大阪府八尾市の
                    <a
                      href="https://q-cl.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-800 underline hover:text-emerald-900 mx-1"
                    >
                      久宝寺透析クリニック
                    </a>
                    で院長を務めています。
                  </p>
                  <div className="pt-4 text-sm text-slate-500 flex flex-wrap gap-4 border-t border-slate-100">
                    <span>公開日：2026年9月15日</span>
                    <span>最終更新日：2026年9月15日</span>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </>
  );
}