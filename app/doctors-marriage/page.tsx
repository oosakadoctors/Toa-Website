import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight,ArrowLeft, UserCheck, BookOpen } from 'lucide-react';

// 【A】Server-side Metadata export
export const metadata: Metadata = {
  title: '男性医師の婚活｜勤務医の出会いと結婚',
  description:
    '医局や職場での出会いが減った、当直で時間が取れない、実家の意向が気になる。男性医師・勤務医の婚活を、大阪市北区梅田の結婚相談所がサポートします。お相手探しから日程調整まで代行し、現役女医とベテラン仲人が2名体制で伴走します。IBJ加盟、北新地駅徒歩1分。',
  alternates: {
    canonical: "/doctors-marriage",
  },
  openGraph: {
    title: '男性医師の婚活｜勤務医の出会いと結婚｜大阪・梅田の結婚相談所',
    description:
      '医局や職場での出会いが減った男性医師・勤務医の方へ。大阪・梅田の結婚相談所が、現役女医とベテラン仲人の2名体制でサポートします。',
  },
  twitter: {
    card: 'summary_large_image',
    title: '男性医師の婚活｜勤務医の出会いと結婚｜大阪・梅田の結婚相談所',
    description:
      '医局や職場での出会いが減った男性医師・勤務医の方へ。大阪・梅田の結婚相談所が、現役女医とベテラン仲人の2名体制でサポートします。',
  },
};

export default function DoctorsMarriagePage() {
  const faqData = [
    {
      q: "職場以外で出会う機会は、どう作ればいいですか？",
      a: "結婚相談所は、出会いの母数を意図的に作り直す仕組みです。大阪梅田ドクターズ結婚相談所はIBJに加盟しており、全国の会員データベースから年代・お住まい・ご職業などの条件を指定して検索できます。会員数は約11万人以上（IBJ2026年公式発表）で、全員が独身証明書を提出し、結婚の意思をもって登録しています。"
    },
    {
      q: "当直や急な呼び出しがあっても、婚活を続けられますか？",
      a: "続けられます。お見合いの日程調整とお相手側の相談所とのやり取りは、大阪梅田ドクターズ結婚相談所が行います。お相手探しは、ご自身の検索とベテラン仲人からのご提案の両方で進めます。"
    },
    {
      q: "医師の婚活は、何から決めればいいですか？",
      a: "お相手の条件より先に、ご自身が今後どう進みたいかを整理してください。継承、開業、病院での役職、研究、留学や大学院、医局に属するかどうか。どの道を選ぶかで、住む場所や働き方、お相手に望むことが変わってきます。まだ決まっていない場合は、決まっていないことを前提として共有しておくことが大切です。"
    },
    {
      q: "お相手は医師でないといけませんか？",
      a: "いいえ。医師以外の方と結婚される医師も多くいらっしゃいます。同じ医師の方となら生活のリズムを説明せずに分かり合えますが、医療の仕事を理解してくれる方、家庭を作れる方を大切に思う方も多くいらっしゃいます。"
    },
    {
      q: "サポートの距離感は選べますか？",
      a: "合わせます。細かく相談しながら進めたい方も、要点だけ聞いてご自身で判断したい方もいらっしゃいます。踏み込んでほしくないところには入りませんし、迷っておられるときに黙って待つこともしません。活動の途中で「もう少し任せてほしい」「ここは一緒に考えてほしい」とお伝えいただければ、その都度合わせます。"
    },
    {
      q: "入会してから、実際に会えるまでどのくらいかかりますか？",
      a: "無料相談から初めてのお見合いまで、多くの方で2か月前後です。ご検討と書類準備に2〜3週間、ご入会からプロフィール登録完了まで約2週間、登録後1か月以内に初めてのお見合いをされる方が大半です。ただしご希望の条件によって進み方は変わり、条件を絞り込むほどお見合いの成立までに時間がかかります。"
    },
    {
      q: "忙しくて面談の時間が取れないのですが。",
      a: "LINEでのご相談は回数無制限、24時間受付で、原則当日中にお返しします。戦略面談は月1〜2回、対面またはオンラインを選べます。"
    },
    {
      q: "実家や医局に知られずに婚活できますか？",
      a: "会員のプロフィールを閲覧できるのは、連盟のシステム内で活動している異性の会員だけです。検索エンジンやSNSには出ません。面談はすべて完全個室で行い、オンラインにも対応しています。"
    },
    {
      q: "医師が結婚相談所に入会するとき、必要な書類は何ですか？",
      a: "全員に必要なのは本人確認書類・住民票・独身証明書の3点で、これに収入証明書、最終学歴証明書、医師免許証が加わります。勤務先を証明する書類の提出は必要ありません。医師は勤務先が変わることが多いため、資格そのものの証明で足ります。"
    },
    {
      q: "大阪梅田ドクターズ結婚相談所の料金はいくらですか？",
      a: "ご入会時の初期費用は23万円（税込）で、内訳は入会金150,000円と初期プロデュース・登録料80,000円です。月会費は15,000円、お見合い料は月4回まで無料（5回目以降1回3,000円）、成婚料は250,000円です。"
    },
    {
      q: "親の意向が気になるのですが、相談できますか？",
      a: "できます。医師の結婚では、ご家族の考えが後から問題になることが少なくありません。当相談所では初回の面談でご実家の考え方を伺い、お相手を探す段階から踏まえておきます。"
    },
    {
      q: "無料相談は、話を聞くだけでもいいですか？",
      a: "はい。情報収集だけのご来店も歓迎しています。その場での入会手続きは求めませんし、後日の営業電話もいたしません。"
    }
  ];

  // 【D】JSON-LD Schemas
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
const webpageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  'name': '男性医師の婚活｜勤務医の出会いと結婚',
  'dateModified': '2026-09-16',
  'author': {
    '@type': 'Person',
    '@id': 'https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp/#founder'
  },
  'publisher': {
    '@type': 'LocalBusiness',
    '@id': 'https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp/#organization'
  }
};
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': 'https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp/doctors-marriage#webpage',
    'url': 'https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp/doctors-marriage',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'ホーム',
        item: 'https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '男性医師の婚活',
        item: 'https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp/doctors-marriage',
      },
    ],
  };

  return (
    <>
      {/* Inject Structured Data into Head on Server */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Base body text sized 20px on mobile (`text-[20px]`), scaling to 18px on desktop (`sm:text-lg`) */}
      <div className="bg-slate-50 text-slate-800 font-sans antialiased min-h-screen py-8 px-4 sm:px-6 lg:px-8 text-[20px] sm:text-lg leading-relaxed">
        <main className="max-w-4xl mx-auto bg-white shadow-sm border border-slate-200 rounded-xl p-5 sm:p-10">
          
          {/* Breadcrumb Navigation - Proportional size (16px mobile) */}
          <nav className="text-base sm:text-sm text-slate-500 mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="hover:underline text-slate-600">
                  ホーム
                </Link>
              </li>
              <li><span>&gt;</span></li>
              <li className="text-slate-900 font-medium" aria-current="page">
                男性医師の婚活
              </li>
            </ol>
          </nav>

          {/* Page Title - Proportional size (~32px mobile) */}
          <h1 className="text-[30px] sm:text-3xl font-bold text-slate-900 border-b-2 border-emerald-600 pb-4 mb-8 leading-tight">
            男性医師の婚活
          </h1>

          {/* Conclusion Box */}
          <section className="bg-emerald-50 border-l-4 border-emerald-600 p-5 sm:p-6 rounded-r-lg mb-10 leading-relaxed text-slate-700">
            <h2 className="text-[22px] sm:text-xl font-bold text-emerald-900 mb-3">この記事の結論</h2>
            <p>
              医師の婚活では、<strong className="bg-emerald-100 font-semibold px-1">職場以外でどう出会うか</strong>と、<strong className="bg-emerald-100 font-semibold px-1">当直や急な呼び出しの中でどう時間を作るか</strong>の2つが課題になります。大阪梅田ドクターズ結婚相談所は、お相手探しをご本人と分担し、お見合いの日程調整はこちらで引き受ける形で活動を組み立てます。担当は現役女医の代表カウンセラーとカウンセラー歴20年のベテラン仲人の2名で、<strong className="font-semibold text-slate-900">サポートの距離感はご本人に合わせます。</strong> IBJ加盟で全国の会員を検索でき、LINEでのご相談は回数無制限です。無料相談から初めてのお見合いまでは、おおよそ2か月前後です。北新地駅から徒歩1分、面談はすべて完全個室。ご入会時の初期費用は23万円（税込）、月会費15,000円です。
            </p>
          </section>

          {/* Summary Table */}
          <section className="mb-12">
            <h2 className="text-[24px] sm:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              このページで分かること
            </h2>
    <div className="sm:hidden flex items-center justify-center my-2">
  <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-green-400 to-green-700 text-white font-bold text-sm shadow-[0_0_12px_rgba(244,63,94,0.4)] animate-pulse">
    <ArrowLeft className="w-4 h-4 animate-[bounce_1.5s_infinite] -rotate-0" />
    <span>スライドします</span>
    <ArrowRight className="w-4 h-4 animate-[bounce_1.5s_infinite]" />
  </p>
</div>
            <div className="overflow-x-auto border border-slate-200 rounded-lg">
              <table className="w-full text-left text-[18px] sm:text-base text-slate-700 min-w-[550px]">
                <thead className="bg-slate-100 text-slate-900 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="p-4 w-1/3 border-r border-slate-200">疑問</th>
                    <th className="p-4">答え</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-4 font-medium bg-slate-50 border-r border-slate-200">職場以外でどう出会う？</td>
                    <td className="p-4">IBJの約11万人のデータベースから条件を指定して探せます</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium bg-slate-50 border-r border-slate-200">忙しくても続けられる？</td>
                    <td className="p-4">日程調整はこちらで行い、お相手探しは分担します</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium bg-slate-50 border-r border-slate-200">何から決めればいい？</td>
                    <td className="p-4">お相手の条件より先に、ご自身の進み方を整理します</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium bg-slate-50 border-r border-slate-200">相手は医師でないとだめ？</td>
                    <td className="p-4">医師以外の方と結婚される医師も多くいらっしゃいます</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium bg-slate-50 border-r border-slate-200">実家や医局に知られない？</td>
                    <td className="p-4">会員情報は連盟のシステム内に限られ、外部には出ません</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium bg-slate-50 border-r border-slate-200">サポートの距離感は選べる？</td>
                    <td className="p-4">合わせます。踏み込んでほしくないところには入りません</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium bg-slate-50 border-r border-slate-200">費用は？</td>
                    <td className="p-4">ご入会時23万円（税込）、月会費15,000円、成婚料25万円</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium bg-slate-50 border-r border-slate-200">場所は？</td>
                    <td className="p-4">大阪駅前第2ビル、北新地駅徒歩1分。オンラインにも対応</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 1 */}
          <section className="mb-10 space-y-4">
            <h2 className="text-[24px] sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              職場以外で出会う機会を、どう作りますか？
            </h2>
            <p className="font-bold text-slate-800">
              結婚相談所は、出会いの母数を意図的に作り直す仕組みです。
            </p>
            <p className="leading-relaxed">
              大阪梅田ドクターズ結婚相談所はIBJ（日本結婚相談所連盟）に加盟しており、<strong className="font-semibold">全国の会員データベースから、年代・お住まい・ご職業などの条件を指定して検索できます。</strong> 会員数は約11万人以上（IBJ2026年公式発表）。
            </p>
            <p className="leading-relaxed">
              <strong className="font-semibold">全員が独身証明書を提出し、結婚の意思をもって登録しています。</strong> 相手が結婚を考えているかどうかを確かめるところから始める必要がありません。
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-10 space-y-4">
            <h2 className="text-[24px] sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              当直や急な呼び出しがあっても、婚活を続けられますか？
            </h2>
            <p className="font-bold text-slate-800">
              日程調整をこちらで引き受け、お相手探しを分担するため、続けられます。
            </p>
            <p className="leading-relaxed">
              医師の婚活で時間を失うのは、探す作業と、予定を合わせる作業です。<strong className="font-semibold">この2つを当相談所が引き受けます。</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-slate-700">
              <li>
                <strong className="font-semibold">お相手の検索と申し込み</strong> — ご自身で検索していただきながら、ベテラン仲人からも候補をご提案します
              </li>
              <li>
                <strong className="font-semibold">お見合いの日程調整</strong> — お相手側の相談所とのやり取りは、こちらで行います
              </li>
              <li>
                <strong className="font-semibold">LINEでのご相談</strong> — 回数無制限。24時間受付で、原則当日中にお返しします
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-10 space-y-4">
            <h2 className="text-[24px] sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              条件を決める前に、これからの進み方を言葉にしてください
            </h2>
            <p className="font-bold text-slate-800">
              医師の婚活では、お相手の条件より先に、ご自身が今後どう進みたいかを整理する必要があります。
            </p>
            <p className="leading-relaxed">同じ「医師」でも、道は大きく分かれます。</p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-slate-700">
              <li>ご実家のクリニックを継ぐ</li>
              <li>いずれご自身で開業する</li>
              <li>病院に勤め、役職を上げていく</li>
              <li>研究を続け、論文や基礎研究に軸を置く</li>
              <li>数年勤務してから、留学や大学院に入る</li>
              <li>医局に属する／医局を離れ、病院に個別に応募する</li>
            </ul>
            <p className="font-bold text-slate-800 pt-2">
              どの道を選ぶかで、住む場所や働き方、お相手に望むことが変わってきます。
            </p>

            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mt-4 space-y-4">
              <h3 className="text-[22px] sm:text-xl font-bold text-slate-900">決まっていなくても構いません</h3>
              <p className="leading-relaxed">
                医師の進路は、卒業の時点では決まりません。<strong className="font-semibold">数年働いてから留学を決める方、医局に残るか離れるかを迷い続ける方、後になって開業を考え始める方。決まっていないほうが、むしろ普通です。</strong>
              </p>
              <p className="leading-relaxed">
                だからこそ、<strong className="font-semibold">「まだ決めていない」という前提をお相手と共有しておくことが大切です。</strong> 確定していないことを確定したように伝えると、後で食い違います。
              </p>
              <p className="leading-relaxed">
                当相談所では、無料相談で「婚活未来図」の20の質問に答えていただきながら、<strong className="font-semibold">今考えている方向と、まだ決めていない部分を切り分けます。</strong> そのうえで、変化に対応できる方を探すのか、特定の生活に合う方を探すのかを決めていきます。
              </p>
              <div className="pt-2">
                <Link href="/consultation" className="text-emerald-700 font-semibold hover:underline inline-flex items-center">
                  ▶ 無料相談の流れと婚活未来図
                </Link>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-10 space-y-4">
            <h2 className="text-[24px] sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              お相手は、医師でないといけませんか？
            </h2>
            <p className="font-bold text-slate-800">
              医師以外の方と結婚される医師も、多くいらっしゃいます。
            </p>
            <p className="leading-relaxed">
              同じ医師の方となら、生活のリズムや勤務の事情を説明せずに分かり合えます。将来の開業やお子様の教育についても、前提が近い。<strong className="font-semibold">そこに安心を感じる方は少なくありません。</strong>
            </p>
            <p className="leading-relaxed">
              一方で、<strong className="font-semibold">医師であることをお相手に求めない方も多くいらっしゃいます。</strong> 医療の仕事を理解してくれる方、帰る場所として家庭を作れる方、一緒にいて気が休まる方。<strong className="font-semibold">何を大切に思うかは、人によって違います。</strong>
            </p>
            <p className="leading-relaxed">
              <strong className="font-semibold">どちらが正しいということはありません。</strong> 当相談所では、まず「どんな家庭を作りたいか」を伺うところから始めます。そのうえで、お相手をどう探していくかを一緒に考えます。
            </p>
            <p className="leading-relaxed">
              <strong className="font-semibold">女医との結婚を具体的に考えている方へ。</strong> 同職での結婚には、生活面での利点と、同じ専門職どうしだからこその難しさの両方があります。詳しくは別ページでお伝えしています。
            </p>
            <div>
              <Link href="/male-doctors" className="text-emerald-700 font-semibold hover:underline inline-flex items-center">
                ▶ 男性医師の方へ（同職婚という選択）
              </Link>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-10 space-y-4">
            <h2 className="text-[24px] sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              実家や医局に知られずに活動できますか？
            </h2>
            <p className="leading-relaxed">
              <strong className="font-semibold">会員のプロフィールを閲覧できるのは、連盟のシステム内で活動している異性の会員だけです。</strong> 検索エンジンやSNSには出ません。インターネットで名前を検索されても、婚活していることは分かりません。
            </p>
            <p className="leading-relaxed">
              面談はすべて<strong className="font-semibold">完全個室</strong>です。大阪駅前第2ビル内でお会いしますので、知り合いに見られる心配なくお越しいただけます。オンラインにも対応しています。
            </p>
            <p className="leading-relaxed">
              <strong className="font-semibold">ご実家の意向については、むしろ早い段階でお聞かせください。</strong> 気持ちが固まった後にご家族の考えが分かり、話が止まってしまう例は、医師の婚活では珍しくありません。当相談所では最初の面談でご実家の考え方や将来の見通しを伺い、お相手を探す段階から踏まえておきます。
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-10 space-y-4">
            <h2 className="text-[24px] sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              入会に必要な書類を教えてください
            </h2>
            <p className="leading-relaxed">
              <strong className="font-semibold">全員に必要なのは、本人確認書類・住民票・独身証明書の3点です。</strong> これに収入証明書、最終学歴証明書、医師免許証が加わります。
            </p>
            <p className="leading-relaxed bg-amber-50 border-l-4 border-amber-500 p-4 text-slate-800">
              <strong className="font-semibold">勤務先を証明する書類の提出は必要ありません。</strong> 医師は勤務先が変わることが多いため、資格そのものの証明で足ります。
            </p>
            <p className="leading-relaxed">
              独身証明書は本籍地の市区町村役場で取得できます。郵送での取り寄せも可能です。<strong className="font-semibold">取り方が分からない場合は、無料相談の際にご案内します。</strong>
            </p>
            <div>
              <Link href="/beginners" className="text-emerald-700 font-semibold hover:underline inline-flex items-center">
                ▶ 必要書類と入会からお見合いまでの流れ
              </Link>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-10 space-y-4">
            <h2 className="text-[24px] sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              費用はいくらかかりますか？
            </h2>
            <p className="leading-relaxed">
              <strong className="font-semibold">ご入会時にかかる初期費用は23万円（税込）、月会費は15,000円（税込）です。</strong>
            </p>
                <div className="sm:hidden flex items-center justify-center my-2">
  <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-green-400 to-green-700 text-white font-bold text-sm shadow-[0_0_12px_rgba(244,63,94,0.4)] animate-pulse">
    <ArrowLeft className="w-4 h-4 animate-[bounce_1.5s_infinite] -rotate-0" />
    <span>スライドします</span>
    <ArrowRight className="w-4 h-4 animate-[bounce_1.5s_infinite]" />
  </p>
</div>
            <div className="overflow-x-auto border border-slate-200 rounded-lg">
              <table className="w-full text-left text-[18px] sm:text-base text-slate-700 min-w-[450px]">
                <thead className="bg-slate-100 text-slate-900 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="p-4 w-1/2 border-r border-slate-200">項目</th>
                    <th className="p-4">金額（税込）</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-4 font-medium bg-slate-50 border-r border-slate-200">入会金</td>
                    <td className="p-4">150,000円</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium bg-slate-50 border-r border-slate-200">初期プロデュース・登録料</td>
                    <td className="p-4">80,000円</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium bg-slate-50 border-r border-slate-200">月会費</td>
                    <td className="p-4">15,000円</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium bg-slate-50 border-r border-slate-200">お見合い料</td>
                    <td className="p-4">月4回まで無料（5回目以降は1回3,000円）</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium bg-slate-50 border-r border-slate-200">成婚料</td>
                    <td className="p-4">250,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="pt-2">
              <p className="font-bold text-slate-800 mb-2">月会費に含まれるもの</p>
              <ul className="list-disc list-inside space-y-2 pl-2 text-slate-700">
                <li>IBJ検索システムの利用（約11万人以上のデータベース／IBJ2026年公式発表）</li>
                <li>AIマッチングを活用した仲人からのご提案</li>
                <li>現役女医へのLINE直接相談（回数無制限）</li>
                <li>月1〜2回の戦略面談（対面・オンライン選択可）</li>
                <li>お見合い調整・交際管理の代行</li>
              </ul>
            </div>
            <p className="leading-relaxed">
              お仕事の繁忙期には<strong className="font-semibold">休会制度</strong>もご利用いただけます（休会中の月会費は月額3,000円、1回につき最長3か月）。
            </p>
            <div>
              <Link href="/plan" className="text-emerald-700 font-semibold hover:underline inline-flex items-center">
                ▶ 料金プランと少人数制について
              </Link>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-10 space-y-6">
            <h2 className="text-[24px] sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              どんなサポートが受けられますか？
            </h2>
            <p className="font-bold text-slate-800">
              お相手を探す時間を減らし、会う場面に集中していただくための体制です。
            </p>

            <div className="space-y-3">
              <h3 className="text-[22px] sm:text-xl font-bold text-slate-900 border-l-4 border-slate-700 pl-3">早く動き出せます</h3>
              <p className="leading-relaxed">
                <strong className="font-semibold">無料相談から初めてのお見合いまで、多くの方で2か月前後です。</strong> ご検討と書類準備に2〜3週間、ご入会からプロフィール登録完了まで約2週間。登録後、1か月以内に初めてのお見合いをされる方が大半です。
              </p>
              <p className="leading-relaxed">
                <strong className="font-semibold">ただし、ご希望の条件によって進み方は変わります。</strong> 条件を絞り込むほど、お見合いが成立するまでに時間がかかります。<strong className="font-semibold">そこも含めて、最初の面談で一緒に見通しを立てます。</strong>
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-[22px] sm:text-xl font-bold text-slate-900 border-l-4 border-slate-700 pl-3">お相手探しの負担を分担します</h3>
              <p className="leading-relaxed">
                <strong className="font-semibold">ご自身で検索していただきながら、こちらからもお相手をご提案します。</strong> IBJの約11万人以上のデータベース（IBJ2026年公式発表）をご自身で検索でき、そこにベテラン仲人からの推薦が加わります。<strong className="font-semibold">探す目が2つ増えるとお考えください。</strong>
              </p>
              <p className="leading-relaxed">
                <strong className="font-semibold">お見合いの日程調整と、お相手側の相談所とのやり取りは当相談所が行います。</strong> ご希望の日程や条件は、その都度ご本人に確認します。
              </p>
              <p className="leading-relaxed">
                <strong className="font-semibold">プロフィール文は、ご希望に応じて作り方を変えます。</strong> 文章を考えるのが負担な方には、伺った内容をもとにこちらで作成します。ご自身で書きたい方には、書いたものを添削します。
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-[22px] sm:text-xl font-bold text-slate-900 border-l-4 border-slate-700 pl-3">経験にもとづく、客観的な視点</h3>
              <p className="leading-relaxed">
                <strong className="font-semibold">現役女医の代表カウンセラーと、カウンセラー歴20年のベテラン仲人の2名が、入会から成婚まで担当を替えずにつきます。</strong>
              </p>
              <p className="leading-relaxed">
                医療現場を知る医師が担当につくため、<strong className="font-semibold">勤務の事情を説明する手間がありません。</strong> 当直明けの疲れ方も、急な呼び出しの頻度も、前提として共有されています。
              </p>
              <p className="leading-relaxed">
                一方でベテラン仲人は、<strong className="font-semibold">婚活の場から見た視点</strong>を担います。どんなプロフィールに申し込みが集まるのか、交際がどこで止まりやすいのか。<strong className="font-semibold">ご自身では気づきにくい部分を、第三者の目でお伝えします。</strong>
              </p>
              <p className="leading-relaxed">
                内側からの理解と、外側からの視点。<strong className="font-semibold">この2つを同時に受け取れることが、2名体制の意味です。</strong>
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-[22px] sm:text-xl font-bold text-slate-900 border-l-4 border-slate-700 pl-3">距離感は、あなたに合わせます</h3>
              <p className="leading-relaxed">
                <strong className="font-semibold">細かく相談しながら進めたい方も、要点だけ聞いて自分で判断したい方もいらっしゃいます。どちらが良いということはありません。</strong>
              </p>
              <p className="leading-relaxed">
                私たちは、その方が心地よく感じる距離を見ながら進めます。<strong className="font-semibold">踏み込んでほしくないところには入りません。</strong> 一方で、迷っておられるときに黙って待つこともしません。
              </p>
              <p className="leading-relaxed">
                <strong className="font-semibold">「もう少し任せてほしい」「ここは一緒に考えてほしい」。</strong> 活動の途中で言っていただければ、その都度合わせます。
              </p>
            </div>

            <div className="pt-2 space-y-2">
              <div>
                <Link href="/dungeon-map" className="text-emerald-700 font-semibold hover:underline inline-flex items-center">
                  ▶ 婚活ダンジョンマップと医師×仲人のダブルサポート体制
                </Link>
              </div>
              <div>
                <Link href="/dual-support" className="text-emerald-700 font-semibold hover:underline inline-flex items-center">
                  ▶ 担当カウンセラーは1人で十分？ 2人体制という選択
                </Link>
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section className="mb-10 space-y-4">
            <h2 className="text-[24px] sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              大阪・梅田で活動できますか？
            </h2>
            <p className="leading-relaxed">
              <strong className="font-semibold">面談場所は大阪駅前第2ビル（大阪市北区梅田）、北新地駅から徒歩1分です。</strong> JR大阪駅・地下鉄梅田駅からも徒歩圏で、豊中・西宮・三宮・難波方面からもお越しいただけます。
            </p>
            <p className="leading-relaxed">
              <strong className="font-semibold">オンライン面談にも対応しています。</strong> 当直明けや勤務の合間でもご相談いただけます。
            </p>
            <div>
              <Link href="/location" className="text-emerald-700 font-semibold hover:underline inline-flex items-center">
                ▶ 北新地駅徒歩1分・アクセスの詳細
              </Link>
            </div>
          </section>

          <section className="my-12 py-8 px-2 bg-slate-50 border border-slate-200/80 rounded-2xl shadow-sm">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <BookOpen className="w-6 h-6 text-emerald-600" />
        <h2 className="text-[20px] font-bold text-slate-900 tracking-tight">
          実際のご相談を読む
        </h2>
      </div>

      {/* Conclusion / Summary Callout */}
      <div className="mb-6 p-2 rounded-xl bg-emerald-500/10 border-l-4 border-emerald-600">
        <p className="text-[20px] font-bold text-emerald-950">
          結論：無料相談で実際にどんな会話をしているのか、記録を公開しています。
        </p>
      </div>

      {/* Description Paragraph */}
      <p className="text-slate-700 leading-relaxed text-[20px] mb-6">
        医師の方の相談としては、
        <strong className="text-slate-900 font-semibold">
          36歳・女性医師の無料相談ストーリー
        </strong>
        をご覧いただけます。多忙な勤務のなかで婚活をどう組み立てるか、お相手に何を求めるかを、実際のやり取りに沿って掲載しています。
      </p>

      {/* Consultation Story Links */}
      <div className="space-y-3">
        <Link
          href="/womans-story"
          className="group flex items-center justify-between p-2 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all duration-200"
        >
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <UserCheck className="w-4 h-4" />
            </span>
            <span className="font-semibold text-slate-800 group-hover:text-emerald-700 transition-colors">
              36歳・女性医師の無料相談ストーリー
            </span>
          </div>
          <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
        </Link>

        <Link
          href="/mens-consultation"
          className="group flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all duration-200"
        >
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <UserCheck className="w-4 h-4" />
            </span>
            <span className="font-medium text-slate-700 group-hover:text-emerald-700 transition-colors">
              35歳・会社員男性の無料相談ストーリー
            </span>
          </div>
          <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
        </Link>

        <Link
          href="/smart-dating"
          className="group flex items-center justify-between p-2 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all duration-200"
        >
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <UserCheck className="w-4 h-4" />
            </span>
            <span className="font-medium text-slate-700 group-hover:text-emerald-700 transition-colors">
              33歳・男性プログラマーのお見合い後の相談実例
            </span>
          </div>
          <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
        </Link>
      </div>
    </section>

          {/* Section 10 */}
          <section className="mb-10 space-y-4">
            <h2 className="text-[24px] sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              まずはご相談ください
            </h2>
            <p className="leading-relaxed">
              <strong className="font-semibold">無料相談は60分。前半30分は現役女医の代表カウンセラー、後半30分はカウンセラー歴20年のベテラン仲人が担当します。</strong> ご入会後も、この2名がそのまま担当します。
            </p>
            <p className="leading-relaxed">
              その場で入会をお決めいただく必要はありません。公式LINEなら、ニックネームのままご相談いただけます。
            </p>
          </section>

          {/* Author Profile */}
          <section className="bg-slate-100 rounded-lg p-6 mb-12 border border-slate-200">
            <h2 className="text-[22px] sm:text-xl font-bold text-slate-900 mb-2">この記事の執筆者</h2>
            <p className="font-bold text-slate-800">加藤とあこ</p>
            <p className="text-[18px] sm:text-base text-slate-600 mb-3 leading-relaxed">
              大阪梅田ドクターズ結婚相談所 代表カウンセラー<br />
              医療法人幸萌会 <a href="https://q-cl.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">久宝寺透析クリニック</a> 院長／内科認定医
            </p>
            <p className="text-[18px] sm:text-base leading-relaxed text-slate-700">
              腎臓内科を専門とする医師として、大阪府八尾市の<a href="https://q-cl.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">久宝寺透析クリニック</a>で院長を務めています。医療法人の理事、病院での勤務医としての経験をふまえ、医師の婚活をサポートしています。
            </p>
            <div className="mt-6 pt-3 border-t border-slate-200 text-sm text-slate-500 ">
              <span>公開日：2026年09月16日</span>
              <br/>
        
              <span>最終更新日：2026年09月16日</span>
            </div>
          </section>

          {/* 【C】FAQ Section - Accordion using <details>/<summary> */}
          <section className="mb-8">
            <h2 className="text-[24px] sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
              よくあるご質問
            </h2>
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <details key={index} className="group border border-slate-200 rounded-lg overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                  <summary className="w-full text-left p-4 sm:p-5 bg-slate-50 hover:bg-slate-100 flex justify-between items-center font-bold text-slate-800 cursor-pointer transition-colors select-none text-[20px] sm:text-lg">
                    <span>Q. {item.q}</span>
                    <span className="text-slate-400 text-2xl ml-3 group-open:rotate-45 transition-transform duration-200">
                      +
                    </span>
                  </summary>
                  <div className="p-4 sm:p-5 bg-white border-t border-slate-200 text-slate-700 leading-relaxed text-[19px] sm:text-base">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

        </main>
      </div>
    </>
  );
}