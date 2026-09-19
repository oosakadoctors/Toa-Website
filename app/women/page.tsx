import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import { Heart, Sparkles, Trophy, Flame, UserCheck, MessageCircle, ArrowRight, ArrowLeft } from 'lucide-react';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: '女性の婚活｜恋愛経験がなくても、何歳からでも｜北新地駅徒歩1分',
  description:
    '大阪・梅田で婚活を考えている女性へ。恋愛経験がなくても大丈夫か、何歳からでも間に合うか、費用はいくらか、周りに知られないか。入会前の不安に順番にお答えします。北新地駅徒歩1分・完全個室、現役女医とベテラン仲人の2名体制。IBJ加盟。',
  alternates: {
    canonical: '/women',
  },
  openGraph: {
    title: '女性の婚活｜大阪梅田ドクターズ結婚相談所',
    description: '恋愛経験がなくても、何歳からでも。大阪・梅田で女性の婚活をサポートしています。',
    url: '/women',
    siteName: '大阪梅田ドクターズ結婚相談所',
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '女性の婚活｜大阪梅田ドクターズ結婚相談所',
    description: '恋愛経験がなくても、何歳からでも。大阪・梅田で女性の婚活をサポートしています。',
  },
};

export default function WomenPage() {
  const domain = 'https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp';

  // 1. FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '恋愛経験がない女性でも、結婚相談所で結婚できますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '恋愛経験がなくても結婚できます。結婚相談所は恋愛が得意な人のための場所ではなく、ご自身では出会いの機会を作りにくかった方のための仕組みです。お見合いから結婚までの手順が決まっているため、経験がなくても順番どおりに進められます。プロフィール文の作成からお見合い当日の会話、交際中の連絡まで、カウンセラーが一つずつお伝えします。',
        },
      },
      {
        '@type': 'Question',
        name: '30代女性の婚活は厳しいですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '30代の婚活では、写真とプロフィール文の作り込みが大切になります。お相手は検索結果の一覧から気になる方を選ぶため、最初に目に入るのが写真、次に読まれるのがプロフィール文になるためです。当相談所では写真の撮影相談から文章の作成まで2名のカウンセラーが行い、申し込みが来ない期間が続いた場合は原因を一緒に探して作り直します。',
        },
      },
      {
        '@type': 'Question',
        name: '大阪梅田ドクターズ結婚相談所の料金はいくらですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '大阪梅田ドクターズ結婚相談所の女性の料金は男性と同額です。入会金150,000円、初期プロデュース・登録料80,000円、月会費15,000円、お見合い料は月4回まで無料で5回目以降は1回3,000円、成婚料250,000円です。ご入会時の初期費用は23万円（税込）となります。',
        },
      },
      {
        '@type': 'Question',
        name: '婚活の予算は、どのくらい見ておけばいいですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '大阪梅田ドクターズ結婚相談所の場合、ご入会時の初期費用が23万円（税込）、月会費が15,000円です。1年間活動した場合、月会費の合計は18万円となります。成婚時には別途、成婚料250,000円が必要です。',
        },
      },
      {
        '@type': 'Question',
        name: '結婚相談所には、きれいな女性が多いのでしょうか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '容姿で選ばれる場ではありません。プロフィール写真の印象は申し込みの数に影響しますが、それは生まれ持った顔立ちではなく、写真の撮り方と写り方の話です。同じ方でも、光の当たり方や服の色、表情で印象は変わります。大阪梅田ドクターズ結婚相談所では、撮影の相談から提携スタジオの手配、写真選定まで一緒に行います。',
        },
      },
      {
        '@type': 'Question',
        name: '結婚相談所に向いている女性は、どんな人ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '結婚相談所に向いているのは、結婚したい時期が決まっていて、人の意見を一度試せて、自分から動ける方です。会った瞬間の高揚よりも暮らしが続くかで選べる方、断られたときに次の一手をカウンセラーと相談できる方に向いています。',
        },
      },
      {
        '@type': 'Question',
        name: '積極的に動けない性格でも、結婚相談所で結婚できますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'できます。当相談所では活動を始める前に、申し込み数やお見合いの件数の目安を一緒に決めておきます。気持ちが乗らない日でも決めた数値に沿って進められるため、性格に頼らずに活動量を保てます。',
        },
      },
      {
        '@type': 'Question',
        name: '結婚相談所には、どんなサポートのタイプがありますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '結婚相談所のサポートには、ご自身でシステムを検索して探すデータマッチング型と、担当者が並走する仲人型があります。大阪梅田ドクターズ結婚相談所は仲人型で、現役女医の代表カウンセラーとカウンセラー歴20年のベテラン仲人の2名が担当します。婚活が初めての方、一人では判断しにくい方に向いています。',
        },
      },
      {
        '@type': 'Question',
        name: '担当のカウンセラーと合わなかったら、どうすればいいですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '無料相談で、担当する2名と実際に話してから判断できます。前半30分は現役女医の代表カウンセラー、後半30分はカウンセラー歴20年のベテラン男性仲人が担当し、ご入会後もこの2名がそのまま担当します。途中で担当が替わることはありません。',
        },
      },
      {
        '@type': 'Question',
        name: '婚活していることを、職場や友人に知られませんか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '婚活していることが職場や友人に知られる心配はありません。会員のプロフィールは連盟に加盟する相談所の中だけで閲覧され、検索エンジンやSNSに出ることはありません。インターネットで名前を検索されても、婚活していることは分かりません。当相談所の面談はすべて完全個室で行います。入会前の相談は、公式LINEでニックネームのままご利用いただけます。',
        },
      },
      {
        '@type': 'Question',
        name: '大阪・梅田で結婚相談所を選ぶとき、何を確認すればいいですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '大阪・梅田で結婚相談所を選ぶときは、加盟している連盟、担当カウンセラーに直接相談できるか、プロフィール作成をどこまで手伝ってもらえるかの3点を確認してください。IBJなど大手連盟に加盟していれば申し込める会員の数が増えます。婚活の判断は迷ったその日にできるかで結果が変わるため、担当者本人に連絡できるかどうかは入会前に確認してください。',
        },
      },
      {
        '@type': 'Question',
        name: 'お見合いには何を着ていけばいいですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'お見合いの服装は、清潔感があり体型に合ったサイズの服が基本です。膝丈のワンピースやスカートに、明るい色のジャケットやカーディガンを合わせる方が多くいらっしゃいます。昼間のホテルラウンジで行われることが多いため、露出の少ない落ち着いた服装が安心です。',
        },
      },
    ],
  };

  // 2. WebPage & Author Entity Schema
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: '女性の婚活｜大阪・梅田の結婚相談所',
    dateModified: '2026-09-15',
    author: {
      '@type': 'Person',
      '@id': `${domain}/#founder`,
      name: '加藤とあこ',
      jobTitle: '代表カウンセラー',
      hasOccupation: {
        '@type': 'Occupation',
        name: '医師',
      },
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: '内科認定医',
      },
      affiliation: {
        '@type': 'MedicalOrganization',
        name: '医療法人幸萌会 久宝寺透析クリニック',
        url: 'https://q-cl.com/',
      },
      sameAs: ['https://q-cl.com/', 'https://q-cl.com/greeting.html'],
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${domain}/#organization`,
      name: '大阪梅田ドクターズ結婚相談所',
    },
  };

  // 3. Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: `${domain}/` },
      { '@type': 'ListItem', position: 2, name: '女性の婚活', item: `${domain}/women` },
    ],
  };

  return (
    <>
      {/* Structural Data Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="min-h-screen bg-[#fffaf8] text-[#4a3e3d] text-[20px] leading-[1.8]  selection:bg-[#fbcfe8] selection:text-[#831843]">
        {/* Header Breadcrumb Banner */}
        <nav className="bg-[#fdf2f4] border-b border-[#fbcfe8]/40 py-4 px-4 text-[16px] text-[#8c6b6d]">
          <div className="max-w-4xl mx-auto flex items-center space-x-2">
            <Link href="/" className="hover:underline hover:text-[#9d174d]">
              ホーム
            </Link>
            <span>&gt;</span>
            <span className="font-medium text-[#701a75]">女性の婚活</span>
          </div>
        </nav>

        {/* Hero Banner Section */}
        <header className="bg-gradient-to-b from-[#fce7f3]/50 to-[#fffaf8] pt-14 pb-12 px-4 text-center border-b border-[#fbcfe8]/30">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 mb-5 text-[16px] font-semibold tracking-wider text-[#9d174d] bg-[#fbcfe8]/50 rounded-full">
              大阪・梅田の少人数制結婚相談所
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#701a75] leading-relaxed mb-6">
              女性の婚活
            </h1>
            <p className="text-[22px] sm:text-[24px] font-medium text-[#6b5153] leading-relaxed max-w-2xl mx-auto">
              大阪・梅田で婚活を考えている女性へ。
              <br />
              恋愛経験がなくても、何歳からでも。入会前の不安に順番にお答えします。
            </p>
          </div>
        </header>

        {/* Article Body Container */}
        <main className="max-w-4xl mx-auto px-4 py-10 space-y-14">
          {/* Intro Block */}
          <section className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-[#fbcfe8]/40 leading-relaxed space-y-5">
            <p>
              大阪梅田ドクターズ結婚相談所は、
              <strong className="text-[#9d174d]">
                大阪市北区梅田（大阪駅前第2ビル・北新地駅より徒歩1分）を面談場所とする、少人数担当制の結婚相談所
              </strong>
              です。IBJ（日本結婚相談所連盟）に加盟しています。
            </p>
            <p>
              現役女医の代表カウンセラー・加藤とあこと、カウンセラー歴20年のベテラン仲人が、
              <strong className="text-[#9d174d]">
                入会から成婚まで担当を替えずに2名体制でお手伝いします。
              </strong>
              面談はすべて完全個室、オンラインにも対応しています。
            </p>

            {/* Conclusion Box */}
            <div className="mt-8 p-6 bg-[#fdf2f4] rounded-xl border-l-4 border-[#db2777]">
              <h3 className="font-serif font-bold text-[#831843] text-[22px] mb-3">この記事の結論</h3>
              <p className="text-[18px] leading-relaxed text-[#5c4244]">
                恋愛経験がなくても、何歳からでも、結婚相談所での婚活は十分に可能です。プロフィール写真の撮り方から自己紹介文、お見合いやデートでの会話、服装とマナー、連絡の取り方まで、カウンセラーと一緒に決めていけるからです。大阪梅田ドクターズ結婚相談所は北新地駅徒歩1分、IBJ加盟の少人数担当制で、現役女医の代表カウンセラーとカウンセラー歴20年のベテラン仲人の2名が、入会から成婚まで担当を替えずに伴走します。ご入会時の初期費用は23万円（税込）、月会費15,000円です。
              </p>
            </div>
          </section>

          {/* Table: What you will learn */}
          <section className="space-y-4">
            <h2 className="text-3xl font-serif font-bold text-[#701a75] pb-3 border-b border-[#fbcfe8]">
              このページで分かること
            </h2>
            <div className="sm:hidden flex items-center justify-center my-2">
  <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold text-sm shadow-[0_0_12px_rgba(244,63,94,0.4)] animate-pulse">
    <ArrowLeft className="w-4 h-4 animate-[bounce_1.5s_infinite] -rotate-0" />
    <span>スライドします</span>
    <ArrowRight className="w-4 h-4 animate-[bounce_1.5s_infinite]" />
  </p>
</div>
            <div className="overflow-x-auto rounded-xl border border-[#fbcfe8]/60 bg-white shadow-sm">
              <table className="w-full text-[18px] text-left border-collapse min-w-[550px]">
                <thead>
                  <tr className="bg-[#fdf2f4] text-[#831843] font-serif border-b border-[#fbcfe8]">
                    <th className="p-4 w-1/3 border-r border-[#fbcfe8]/50">疑問</th>
                    <th className="p-4 w-2/3">答え</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#fbcfe8]/30">
                  <tr>
                    <td className="p-4 font-medium bg-[#fffaf8] border-r border-[#fbcfe8]/50">恋愛経験がなくても大丈夫？</td>
                    <td className="p-4">大丈夫です。むしろ結婚相談所は、恋愛が得意でない方のための仕組みです</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium bg-[#fffaf8] border-r border-[#fbcfe8]/50">30代からでは厳しい？</td>
                    <td className="p-4">年齢より、活動の進め方のほうが結果を左右します</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium bg-[#fffaf8] border-r border-[#fbcfe8]/50">女性の費用はいくら？</td>
                    <td className="p-4">入会時23万円（税込）、月会費15,000円。男女同額です</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium bg-[#fffaf8] border-r border-[#fbcfe8]/50">どんな女性が向いている？</td>
                    <td className="p-4">目的がはっきりしていること、助言を試せること、自分から動けること</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium bg-[#fffaf8] border-r border-[#fbcfe8]/50">きれいな人が多い？</td>
                    <td className="p-4">容姿ではなく、写真の撮り方と写り方の問題です</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium bg-[#fffaf8] border-r border-[#fbcfe8]/50">周りに知られない？</td>
                    <td className="p-4">会員情報は連盟内で管理され、外部に公開されません</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium bg-[#fffaf8] border-r border-[#fbcfe8]/50">どんなサポート？</td>
                    <td className="p-4">仲人型です。担当2名が申し込みから交際中の相談まで並走します</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium bg-[#fffaf8] border-r border-[#fbcfe8]/50">医師やハイスペ男性と出会える？</td>
                    <td className="p-4">IBJのシステムで全国の会員を条件検索できます</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section: 恋愛経験なし */}
          <section className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#701a75] pb-3 border-b border-[#fbcfe8]">
              恋愛経験がなくても、結婚相談所で結婚できますか？
            </h2>
            <p>
              <strong className="text-[#9d174d]">恋愛経験がなくても、結婚相談所で結婚できます。</strong>{' '}
              結婚相談所は、恋愛が得意な人が来る場所ではありません。
            </p>
            <p>
              むしろ、ご自身では出会いの機会を作りにくかった方、恋愛の進め方が分からない方のための仕組みです。
              <strong className="text-[#9d174d]">
                お見合いから交際、結婚までの手順が決まっているため、経験がなくても順番どおりに進められます。
              </strong>
            </p>
            <div className="bg-white p-6 sm:p-7 rounded-xl border border-[#fbcfe8]/60 space-y-4 shadow-sm">
              <p className="font-medium text-[#831843] text-[22px]">当相談所では、次のように進めます。</p>
              <ul className="list-disc pl-6 space-y-3 leading-relaxed">
                <li>
                  <strong className="text-[#9d174d]">プロフィール文は、カウンセラー2名と一緒に作ります。</strong>{' '}
                  ヒアリングで出てきた言葉を整理し、伝わる順番に並べ替え、誤解を招く表現を削ります。ご自身で書き上げる必要はありません
                </li>
                <li>
                  <strong className="text-[#9d174d]">お見合いの前に、1対1で練習します。</strong>{' '}
                  当日の流れ、想定される質問、<strong>会話が途切れたときの戻し方</strong>まで
                </li>
                <li>
                  <strong className="text-[#9d174d]">交際が始まってからも、カウンセラー2名のサポートは続きます。</strong>{' '}
                  連絡の頻度、次のデートの誘い方、真剣交際に進むかの判断まで
                </li>
              </ul>
            </div>
            <p>
              <strong className="text-[#9d174d]">交際経験については、聞かれたときの答え方を事前にお伝えします。</strong>{' '}
              お見合いの席で、過去の交際について詳しく話す場面はほとんどありません。
              <strong className="text-[#9d174d]">経験の少なさは、これから積んでいけるものです。</strong>
            </p>
            <p className="pt-2">
              <Link
                href="/vibe"
                className="inline-flex items-center font-semibold text-[#be185d] hover:text-[#9d174d] hover:underline"
              >
                ▶ 32歳・会社員女性（婚活初心者）の無料相談ストーリーを読む
              </Link>
            </p>
          </section>

          {/* Section: 30代 */}
          <section className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#701a75] pb-3 border-b border-[#fbcfe8]">
              30代の婚活は、厳しいですか？
            </h2>
            <p>
              <strong className="text-[#9d174d]">30代の婚活では、写真とプロフィール文の作り込みが大切になります。</strong>
            </p>
            <p>
              お相手は検索結果の一覧から気になる方を選びます。
              <strong className="text-[#9d174d]">
                そのとき最初に目に入るのが写真、次に読まれるのがプロフィール文です。
              </strong>{' '}
              ここが整っていないと、条件の合う方にも見てもらえないまま終わります。
            </p>
            <div className="bg-white p-6 sm:p-7 rounded-xl border border-[#fbcfe8]/60 space-y-4 shadow-sm">
              <p className="font-medium text-[#831843] text-[22px]">当相談所では次のように進めます。</p>
              <ul className="list-disc pl-6 space-y-3 leading-relaxed">
                <li>
                  <strong className="text-[#9d174d]">写真は、どんな雰囲気で撮るかを相談してから提携スタジオへ。</strong>{' '}
                  服装や表情もご提案し、撮影後の選定まで一緒に行います
                </li>
                <li>
                  <strong className="text-[#9d174d]">自己紹介文は、カウンセラー2名と作ります。</strong>{' '}
                  ヒアリングで出た言葉を整理し、伝わる順番に並べ替え、誤解を招く表現を削ります
                </li>
                <li>
                  <strong className="text-[#9d174d]">申し込みが来ない期間が続いたら、原因を一緒に探して作り直します。</strong>{' '}
                  写真なのか、文章なのか、申し込む相手の条件設定なのか。<strong>放置しません。</strong>
                </li>
              </ul>
            </div>
            <p>
              <strong className="text-[#9d174d]">ご自身から申し込む側の戦略も、一緒に立てます。</strong>{' '}
              待つだけでは進まないため、週あたりの申し込み数の目安を事前に決めておきます。
            </p>
          </section>

          {/* Section: きれいな女性 */}
          <section className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#701a75] pb-3 border-b border-[#fbcfe8]">
              結婚相談所には、きれいな女性が多いのでしょうか
            </h2>
            <p>
              <strong className="text-[#9d174d]">容姿で選ばれる場ではありません。</strong>
            </p>
            <p>
              プロフィール写真の印象は申し込みの数に影響しますが、それは生まれ持った顔立ちの話ではなく、
              <strong className="text-[#9d174d]">写真の撮り方と写り方</strong>の話です。同じ方でも、光の当たり方、服の色、表情の作り方で印象は大きく変わります。
            </p>
            <p>
              当相談所では、
              <strong className="text-[#9d174d]">
                どんな雰囲気で撮るかの相談から、提携スタジオの手配、撮影後の写真選定まで一緒に行います。
              </strong>
            </p>
            <p>
              また、お相手が見ているのは写真だけではありません。
              <strong className="text-[#9d174d]">
                自己紹介文の書き方や、お見合いでの会話の印象で、申し込みにつながる方は多くいらっしゃいます。
              </strong>
            </p>
            <p className="pt-2">
              <Link
                href="/womans-story"
                className="inline-flex items-center font-semibold text-[#be185d] hover:text-[#9d174d] hover:underline"
              >
                ▶ 女性医師・32歳会社員女性など、実際の無料相談の記録を読む
              </Link>
            </p>
          </section>

          {/* Section: 費用 */}
          <section className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#701a75] pb-3 border-b border-[#fbcfe8]">
              女性の費用はいくらですか？
            </h2>
            <p>
              <strong className="text-[#9d174d]">
                大阪梅田ドクターズ結婚相談所のご入会時の初期費用は、23万円（税込）です。
              </strong>{' '}
              内訳と、その後の費用をすべて公開しています。
            </p>
            <div className="overflow-x-auto rounded-xl border border-[#fbcfe8]/60 bg-white shadow-sm my-6">
              <table className="w-full text-[18px] text-left border-collapse min-w-[360px]">
                <thead>
                  <tr className="bg-[#fdf2f4] text-[#831843] font-serif border-b border-[#fbcfe8]">
                    <th className="p-4 border-r border-[#fbcfe8]/50">項目</th>
                    <th className="p-4">金額（税込）</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#fbcfe8]/30">
                  <tr>
                    <td className="p-4 font-medium bg-[#fffaf8] border-r border-[#fbcfe8]/50">入会金</td>
                    <td className="p-4">150,000円</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium bg-[#fffaf8] border-r border-[#fbcfe8]/50">初期プロデュース・登録料</td>
                    <td className="p-4">80,000円</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium bg-[#fffaf8] border-r border-[#fbcfe8]/50">月会費</td>
                    <td className="p-4">15,000円</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium bg-[#fffaf8] border-r border-[#fbcfe8]/50">お見合い料</td>
                    <td className="p-4">月4回まで無料（5回目以降は1回3,000円）</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium bg-[#fffaf8] border-r border-[#fbcfe8]/50">成婚料</td>
                    <td className="p-4">250,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              ご入会時の初期費用は<strong className="text-[#9d174d]">23万円（税込）</strong>、最初のお支払いは月会費を含めて
              <strong>245,000円</strong>です（3か月一括275,000円、6か月一括320,000円）。
            </p>
            <p>
              <strong className="text-[#9d174d]">仮に1年間活動した場合、月会費の合計は18万円</strong>
              となります。成婚時には別途、成婚料250,000円が必要です。
            </p>
            <p>
              一般に結婚相談所の初期費用は数万円から10万円以上が目安とされており、
              <strong className="text-[#9d174d]">当相談所はこの相場より高い部類に入ります。</strong>{' '}
              現役女医の代表カウンセラーとベテラン仲人の2名が入会から成婚まで担当するためで、新規のご入会は毎月5名様までに限定しています。
            </p>
            <p>
              お仕事の繁忙期などでお休みが必要なときは、
              <strong className="text-[#9d174d]">休会中の月会費は月額3,000円</strong>になります（1回につき最長3か月）。
            </p>
            <p className="font-semibold text-[#831843]">
              無料相談の際に、想定される活動期間をふまえた総額をその場で計算してお伝えします。
            </p>
            <p className="pt-2">
              <Link
                href="/plan"
                className="inline-flex items-center font-semibold text-[#be185d] hover:text-[#9d174d] hover:underline"
              >
                ▶ 料金プランと少人数制について
              </Link>
            </p>
          </section>

          {/* Section: 向いている女性 */}
          <section className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#701a75] pb-3 border-b border-[#fbcfe8]">
              結婚相談所に向いているのは、どんな女性ですか？
            </h2>
            <p>
              <strong className="text-[#9d174d]">
                結婚相談所に向いているのは、結婚したい時期が決まっていて、人の意見を一度試せて、自分から動ける方です。
              </strong>{' '}
              この3つが揃うと結果が出ます。
            </p>

            <div className="space-y-5">
              <div className="bg-white p-6 sm:p-7 rounded-xl border border-[#fbcfe8]/60 shadow-sm space-y-3">
                <h3 className="font-serif font-bold text-[#831843] text-[22px]">1. 結婚したい時期が決まっている</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>「いずれは」ではなく「いつまでに」がある</strong> — 期限が決まると、迷う時間が短くなります。判断の速さが、そのまま出会える人数になります
                  </li>
                  <li>
                    <strong>会った瞬間の高揚より、暮らしが続くかで選べる</strong> — 一緒にいて疲れないか、お金の使い方が近いか、休日の過ごし方が合うか。結婚生活を左右するのはこちらです
                  </li>
                  <li>
                    <strong>相手の素性がはっきりしている環境を求めている</strong> — 独身証明書を含む書類で全員が確認されている場で探したい方
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 sm:p-7 rounded-xl border border-[#fbcfe8]/60 shadow-sm space-y-3">
                <h3 className="font-serif font-bold text-[#831843] text-[22px]">2. 人の意見を、一度は試せる</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>写真や文章について指摘を受けたら、まず一度試してみる</strong> — 「その服よりこちらのほうが写ります」と言われたら、一度着てみる。試してから判断すれば、損はありません
                  </li>
                  <li>
                    <strong>お相手の良いところを先に見つけられる</strong> — 「話しやすかった」「時間を守る人だった」。欠点探しから入ると、誰とも先に進めません
                  </li>
                  <li>
                    <strong>断られたときに、次にどうするかを相談できる</strong> — 一人で抱えず、何を変えるとよいかをカウンセラーと一緒に考えられる方
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 sm:p-7 rounded-xl border border-[#fbcfe8]/60 shadow-sm space-y-3">
                <h3 className="font-serif font-bold text-[#831843] text-[22px]">3. 自分から動ける</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>待つだけにならない</strong> — ご自身からお見合いを申し込む、お会いした後にお礼を伝える。この2つができるだけで、結果は変わります
                  </li>
                  <li>
                    <strong>活動の時間を先に空けられる</strong> — 週末のうち半日を婚活に充てる、といった予定の取り方ができる方
                  </li>
                </ul>
              </div>
            </div>

            <p>
              <strong className="text-[#9d174d]">ただし、これらが今できている必要はありません。</strong>
            </p>
            <p>
              当相談所では、
              <strong className="text-[#9d174d]">
                婚活で迷う10の場面の判断基準を、活動を始める前に決めておきます。
              </strong>{' '}
              「明確なNGがなければもう一度会う」「お見合い4回につき1回は仮交際へ進む」といった目安を先に決めておくため、
              <strong className="text-[#9d174d]">
                良いところを見つけることも、断られた翌日に動き直すことも、性格ではなくルールとして実行できます。
              </strong>
            </p>
            <p className="pt-2">
              <Link
                href="/dungeon-map"
                className="inline-flex items-center font-semibold text-[#be185d] hover:text-[#9d174d] hover:underline"
              >
                ▶ 婚活で迷う10の分岐点・婚活ダンジョンマップ
              </Link>
            </p>

            {/* Fit vs Unfit Table */}
            <div className="pt-6 space-y-3">
              <h3 className="font-serif font-bold text-[#701a75] text-[22px]">当相談所の進め方が合う方・合わない方</h3>
              <div className="sm:hidden flex items-center justify-center my-2">
  <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold text-sm shadow-[0_0_12px_rgba(244,63,94,0.4)] animate-pulse">
    <ArrowLeft className="w-4 h-4 animate-[bounce_1.5s_infinite] -rotate-0" />
    <span>スライドします</span>
    <ArrowRight className="w-4 h-4 animate-[bounce_1.5s_infinite]" />
  </p>
</div>
              <div className="overflow-x-auto rounded-xl border border-[#fbcfe8]/60 bg-white shadow-sm">
                <table className="w-full text-[18px] text-left border-collapse min-w-[450px]">
                  <thead>
                    <tr className="bg-[#fdf2f4] text-[#831843] font-serif border-b border-[#fbcfe8]">
                      <th className="p-4 w-1/2 border-r border-[#fbcfe8]/50">合う方</th>
                      <th className="p-4 w-1/2">別の方法が合うかもしれません</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#fbcfe8]/30">
                    <tr>
                      <td className="p-4 font-medium bg-[#fffaf8] border-r border-[#fbcfe8]/50">結婚したい時期が決まっている</td>
                      <td className="p-4">いつかは結婚したい、という段階</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium bg-[#fffaf8] border-r border-[#fbcfe8]/50">第三者の意見を聞いてみたい</td>
                      <td className="p-4">一人で進めたい</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium bg-[#fffaf8] border-r border-[#fbcfe8]/50">暮らしの相性から考えたい</td>
                      <td className="p-4">好みの外見が最優先</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium bg-[#fffaf8] border-r border-[#fbcfe8]/50">最後は自分で決めたい</td>
                      <td className="p-4">決断まで任せたい</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[16px] text-[#6b5153] pt-1">
                <strong>右側に当てはまる方でも、無料相談は歓迎しています。</strong> 話してみて違うと感じられたら、それで構いません。
              </p>
            </div>
          </section>

          {/* Section: 不安 */}
          <section className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#701a75] pb-3 border-b border-[#fbcfe8]">
              入会前の不安について
            </h2>
            <p>
              <strong className="text-[#9d174d]">
                結婚相談所の入会前に多い不安は、「結婚できるのか」「担当者と合うか」「周りに知られないか」の3つです。
              </strong>{' '}
              順番にお答えします。
            </p>

            <div className="space-y-5">
              <div className="bg-white p-6 sm:p-7 rounded-xl border border-[#fbcfe8]/60 space-y-3 shadow-sm">
                <h3 className="font-serif font-bold text-[#831843] text-[22px]">
                  「時間とお金をかけても、結婚できないのでは」
                </h3>
                <p>
                  <strong className="text-[#9d174d]">
                    時間とお金をかけた分が無駄にならないよう、活動が止まらない仕組みを用意しています。
                  </strong>
                </p>
                <p>
                  婚活が停滞する原因の多くは、何を変えればいいか分からないまま同じ活動を続けてしまうことです。当相談所では、
                  <strong className="text-[#9d174d]">
                    お断りの理由をカウンセラーが分析してお伝えし、次に何を変えるかを一緒に決めます。
                  </strong>
                </p>
                <p>
                  また、<strong className="text-[#9d174d]">活動量の目安を入会時に決めておきます。</strong>{' '}
                  申し込み数やお見合いの件数を先に数値で決めるため、気持ちが乗らない時期でも活動が止まりません。
                </p>
                <p>
                  お相手についても、独身証明書を含む書類で全員の身元が確認されています。
                  <strong className="text-[#9d174d]">
                    結婚の意思がはっきりした方だけが登録している場で探せます。
                  </strong>
                </p>
              </div>

              <div className="bg-white p-6 sm:p-7 rounded-xl border border-[#fbcfe8]/60 space-y-3 shadow-sm">
                <h3 className="font-serif font-bold text-[#831843] text-[22px]">「担当者と合わなかったらどうしよう」</h3>
                <p>
                  <strong className="text-[#9d174d]">
                    担当者と合うかどうかは、無料相談で2名と実際に話してから判断できます。
                  </strong>{' '}
                  前半30分は現役女医の代表カウンセラー、後半30分はカウンセラー歴20年のベテラン男性仲人。
                  <strong className="text-[#9d174d]">
                    ご入会後も、この2名がそのまま担当します。
                  </strong>{' '}
                  途中で担当が替わることはありません。
                </p>
                <p>
                  <strong className="text-[#9d174d]">
                    私たちは、価値観の異なる方に対応することを仕事にしてきました。
                  </strong>{' '}
                  代表カウンセラーは医師として、ベテラン仲人は20年の経験から。
                  <strong className="text-[#9d174d]">
                    婚活の進め方に唯一の正解はなく、その方が何を大切にしているかで選ぶ道は変わります。
                  </strong>{' '}
                  ご自身の考え方を私達に合わせていただく必要はありません。
                </p>
                <p className="font-medium text-[#831843]">
                  その場で入会をお決めいただく必要はありません。 持ち帰って検討していただいても、他社と比較していただいても構いません。
                </p>
              </div>

              <div className="bg-white p-6 sm:p-7 rounded-xl border border-[#fbcfe8]/60 space-y-3 shadow-sm">
                <h3 className="font-serif font-bold text-[#831843] text-[22px]">「職場や友人に知られたくない」</h3>
                <p>
                  <strong className="text-[#9d174d]">
                    プロフィールを見られるのは、同じ連盟で活動している異性の会員だけです。
                  </strong>{' '}
                  連盟のシステム内に限られるため、検索エンジンやSNSには出ません。インターネットで名前を検索されても、婚活していることは分かりません。
                </p>
                <p>
                  当相談所の面談は<strong className="text-[#9d174d]">すべて完全個室</strong>です。大阪駅前第2ビル内でお会いしますので、知り合いに見られる心配なくお越しいただけます。オンライン面談にも対応しています。
                </p>
                <p className="font-medium text-[#831843]">
                  入会前のご相談は、公式LINEでニックネームのままお使いいただけます。
                </p>
              </div>
            </div>
          </section>

          {/* Section: 選び方 */}
          <section className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#701a75] pb-3 border-b border-[#fbcfe8]">
              大阪・梅田で結婚相談所を選ぶとき、何を見ればいいですか？
            </h2>
            <p>
              <strong className="text-[#9d174d]">
                大阪・梅田で結婚相談所を選ぶときは、加盟連盟・担当カウンセラーに直接相談できるか・プロフィール作成のサポート範囲の3点を確認してください。
              </strong>
            </p>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl border border-[#fbcfe8]/60 space-y-2">
                <h3 className="font-serif font-bold text-[#831843] text-[20px]">① 加盟している連盟</h3>
                <p>
                  <strong className="text-[#9d174d]">
                    IBJ（日本結婚相談所連盟）など大手連盟に加盟している相談所は、出会える会員の母数が大きくなります。
                  </strong>{' '}
                  当相談所はIBJに加盟しており、全国の会員を検索してお見合いを申し込めます。
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#fbcfe8]/60 space-y-2">
                <h3 className="font-serif font-bold text-[#831843] text-[20px]">② 担当カウンセラーに直接相談できるか</h3>
                <p>
                  <strong className="text-[#9d174d]">
                    婚活では、迷ったその日に相談できるかどうかが大切です。
                  </strong>{' '}
                  お見合いを受けるか、交際を続けるか、届いた連絡にどう返すか。
                  <strong className="text-[#9d174d]">数日待たされると、その間に状況が動きます。</strong>
                </p>
                <p>
                  確認すべきなのは、<strong className="text-[#9d174d]">窓口ではなく担当者本人に連絡できるか</strong>、アンド
                  <strong className="text-[#9d174d]">返事がどのくらいで返ってくるか</strong>です。会員数の多い相談所では、担当者が抱える人数も多くなります。
                </p>
                <p>
                  当相談所は新規のご入会を毎月5名様までに限定しており、
                  <strong className="text-[#9d174d]">
                    担当2名に公式LINEで直接ご相談いただけます。24時間受付で、原則当日中にお返しします。
                  </strong>
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#fbcfe8]/60 space-y-2">
                <h3 className="font-serif font-bold text-[#831843] text-[20px]">③ プロフィールと写真のサポート範囲</h3>
                <p>
                  <strong className="text-[#9d174d]">お相手が最初に見るのは、写真と自己紹介文です。</strong>{' '}
                  当相談所では、提携スタジオの手配、どんな雰囲気で撮るかの事前相談、撮影後の写真選定、自己紹介文の作成・添削まで、2名のカウンセラーが行います。
                </p>
              </div>
            </div>
          </section>

          {/* Section: 仲人型 */}
          <section className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#701a75] pb-3 border-b border-[#fbcfe8]">
              仲人に並走してほしい方へ
            </h2>
            <p>
              <strong className="text-[#9d174d]">大阪梅田ドクターズ結婚相談所は仲人型です。</strong>{' '}
              担当者が申し込み先の選定から交際中の相談まで並走します。
            </p>
            <p>
              結婚相談所のサポートには、大きく2つのタイプがあります。
            </p>
            <p>
              <strong>データマッチング型</strong>は、ご自身でシステムを検索し、自分のペースでお相手を探す形です。費用を抑えやすく、自分の判断だけで進めたい方に向いています。
            </p>
            <p>
              <strong>仲人型</strong>は、担当者が申し込み先の選定から交際中の相談まで並走する形です。
              <strong className="text-[#9d174d]">婚活が初めての方、一人では判断しにくい方に向いています。</strong>
            </p>
            <div className="bg-[#fdf2f4] p-6 rounded-xl border border-[#fbcfe8] space-y-3">
              <p className="font-bold text-[#831843] text-[22px]">当相談所は仲人型です。しかも担当が2名つきます。</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>お相手選びとお見合いの申し込みは、実務面からベテラン仲人が</li>
                <li>プロフィール写真・文面・交際中の心の揺れは、女性の代表カウンセラーが</li>
                <li>
                  <strong className="text-[#9d174d]">重要な局面では、2名で一緒に考えます</strong>
                </li>
              </ul>
            </div>
            <p>
              <strong className="text-[#9d174d]">
                「自分でどんどん探したい」という方には、当相談所の進め方は手厚すぎるかもしれません。
              </strong>{' '}
              その場合は、データマッチング型の相談所をご検討ください。
            </p>
            <p className="pt-2">
              <Link
                href="/dual-support"
                className="inline-flex items-center font-semibold text-[#be185d] hover:text-[#9d174d] hover:underline"
              >
                ▶ 担当カウンセラーは1人で十分？ 2人体制という選択
              </Link>
            </p>
          </section>

          {/* Section: ハイスペ男性 */}
          <section className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#701a75] pb-3 border-b border-[#fbcfe8]">
              医師やハイスペックな男性と出会いたいのですが
            </h2>
            <p>
              <strong className="text-[#9d174d]">
                IBJのシステムを通じて、全国の会員を年収・学歴・職業などの条件で検索し、お見合いを申し込めます。
              </strong>
            </p>
            <p>
              ただし、正直にお伝えしておきたいことがあります。
              <strong className="text-[#9d174d]">条件を高く設定するほど、申し込みが通る確率は下がります。</strong>{' '}
              年収・身長・年齢を先に絞り込んだ結果、該当者がほとんどいなくなり、「いい人がいない」という結論になる方は少なくありません。
            </p>
            <p>
              当相談所では、
              <strong className="text-[#9d174d]">
                お相手の条件を決める前に「どんな結婚生活を送りたいか」を言葉にするところから始めます。
              </strong>{' '}
              そのうえで、譲れないものと実は譲れるものを切り分けます。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/advantages"
                className="inline-flex items-center font-semibold text-[#be185d] hover:text-[#9d174d] hover:underline"
              >
                ▶ ハイスペック男性と結婚する方法
              </Link>
              <Link
                href="/consider"
                className="inline-flex items-center font-semibold text-[#be185d] hover:text-[#9d174d] hover:underline"
              >
                ▶ 30代婚活で「いい人がいない」と思うあなたへ
              </Link>
            </div>
          </section>

          {/* Section: 期間 */}
          <section className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#701a75] pb-3 border-b border-[#fbcfe8]">
              どのくらいの期間で活動が始まりますか？
            </h2>
            <p>
              <strong className="text-[#9d174d]">
                婚活を始めてから初めてのお見合いまでは、無料相談からおおよそ2か月前後です。
              </strong>{' '}
              書類の準備、写真撮影、登録までの具体的な日数は、別ページで公開しています。
            </p>
            <p>
              お見合いから交際が始まったあとは、
              <strong className="text-[#9d174d]">3か月を目安に結論を出す考え方が一般的です。</strong>{' '}
              当相談所では期限を機械的に当てはめず、判断に迷われている理由を一緒に整理したうえでお決めいただいています。
            </p>
            <p className="pt-2">
              <Link
                href="/beginners"
                className="inline-flex items-center font-semibold text-[#be185d] hover:text-[#9d174d] hover:underline"
              >
                ▶ 入会からお見合いまでの流れ・必要書類
              </Link>
            </p>
          </section>

          {/* Section: 服装 */}
          <section className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#701a75] pb-3 border-b border-[#fbcfe8]">
              お見合いには、何を着ていけばいいですか？
            </h2>
            <p>
              <strong className="text-[#9d174d]">
                お見合いの服装は、清潔感があり体型に合ったサイズの服が基本です。
              </strong>{' '}
              女性の場合、膝丈のワンピースやスカートに、明るい色のジャケットやカーディガンを合わせる方が多くいらっしゃいます。
            </p>
            <p>
              お見合いは昼間のホテルラウンジで行われることが多いため、
              <strong className="text-[#9d174d]">露出の少ない、落ち着いた印象の服装</strong>が安心です。迷われたときは、当相談所にご相談ください。写真を見せていただければ、具体的にお伝えします。
            </p>
          </section>

          {/* Section: アクセス */}
          <section className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#701a75] pb-3 border-b border-[#fbcfe8]">
              通いやすさについて
            </h2>
            <p>
              <strong className="text-[#9d174d]">
                面談場所は大阪駅前第2ビル（大阪市北区梅田）、北新地駅から徒歩1分です。
              </strong>{' '}
              JR大阪駅・地下鉄梅田駅からも徒歩圏で、豊中・西宮・三宮・難波方面からもお越しいただけます。面談はすべて完全個室です。
            </p>
            <p className="pt-2">
              <Link
                href="/location"
                className="inline-flex items-center font-semibold text-[#be185d] hover:text-[#9d174d] hover:underline"
              >
                ▶ 北新地駅徒歩1分・アクセスの詳細
              </Link>
            </p>
          </section>

          {/* Section: Consultation CTA */}
          <section className="bg-gradient-to-r from-[#fce7f3] to-[#fbcfe8]/40 p-[40px] rounded-2xl text-center space-y-5 border border-[#fbcfe8]">
            <h2 className="text-3xl font-serif font-bold text-[#701a75]">まずはご相談ください</h2>
            <p className="text-[20px] leading-relaxed text-[#5c4244] max-w-xl mx-auto">
              <strong className="text-[#9d174d]">婚活の相談は、何も決まっていない状態で構いません。</strong>
              <br />
              <strong className="text-[#9d174d]">
                「まだ入会するか決めていない」という段階のご相談が、実はいちばん多いです。
              </strong>
            </p>
            <p className="text-[16px] text-[#831843]">公式LINEなら、ニックネームのままご相談いただけます。</p>
            <div className="pt-3">
              <a
                href="https://line.me"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#db2777] hover:bg-[#be185d] text-white font-bold px-10 py-4 rounded-full shadow-md transition-all text-[22px]"
              >
                公式LINEで無料相談する
              </a>
            </div>
          </section>

          {/* Section: Author Metadata */}
          <section className="bg-white p-8 rounded-2xl border border-[#fbcfe8]/60 space-y-5 shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-[#701a75] pb-3 border-b border-[#fbcfe8]">
              この記事の執筆者
            </h2>
            <div className="space-y-3 leading-relaxed">
              <p className="text-[22px] font-bold text-[#831843]">加藤とあこ</p>
              <p className="text-[16px] text-[#8c6b6d]">
                大阪梅田ドクターズ結婚相談所 代表カウンセラー
                <br />
                医療法人幸萌会{' '}
                <a
                  href="https://q-cl.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#9d174d]"
                >
                  久宝寺透析クリニック
                </a>{' '}
                院長／内科認定医
              </p>
              <p className="pt-2">
                腎臓内科を専門とする医師として、大阪府八尾市の
                <a
                  href="https://q-cl.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#9d174d]"
                >
                  久宝寺透析クリニック
                </a>
                で院長を務めています。日々の診療で多くの方の人生の節目に立ち会うなかで、パートナーの存在が人の支えになる場面を数多く見てきました。その経験を、婚活のサポートに活かしています。
              </p>
            </div>
            <div className="pt-4 text-[16px] text-[#8c6b6d] border-t border-[#fbcfe8]/30 flex justify-between">
              <span>公開日：2026年9月15日</span>
              <span>最終更新日：2026年9月15日</span>
            </div>
          </section>

          {/* Section: FAQ Accordion / Listing */}
          <section className="space-y-6 pt-6">
            <h2 className="text-3xl font-serif font-bold text-[#701a75] pb-3 border-b border-[#fbcfe8]">
              よくあるご質問
            </h2>
            <div className="space-y-5">
              {faqSchema.mainEntity.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 sm:p-7 rounded-xl border border-[#fbcfe8]/60 shadow-sm space-y-3"
                >
                  <h3 className="font-serif font-bold text-[#831843] text-[22px] flex items-start">
                    <span className="text-[#db2777] font-bold mr-3">Q.</span>
                    <span>{item.name}</span>
                  </h3>
                  <p className="text-[#4a3e3d] leading-relaxed pl-8">
                    {item.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </article>
    </>
  );
}