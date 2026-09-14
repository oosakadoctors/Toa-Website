import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  Users, 
  UserCheck, 
  Stethoscope, 
  Sparkles, 
  HeartHandshake, 
  HelpCircle, 
  CheckCircle2, 
  MessageSquare, 
  FileText,
  Building2,
  CalendarCheck
} from "lucide-react";

export const metadata: Metadata = {
  title: "大阪梅田ドクターズ結婚相談所の会員と婚活環境について｜全国11万人のネットワークと2名体制",
  description:
    "大阪・梅田の結婚相談所。日本結婚相談所連盟（IBJ）加盟で全国11万人規模のネットワークからお相手を探せます。医師・士業・研究職など専門職の会員が多く、現役女医の代表カウンセラーとベテラン仲人の2名が担当。新規入会は毎月5名まで。",
  authors: [{ name: "加藤（代表カウンセラー／内科認定医）" }],
  publisher: "大阪梅田ドクターズ結婚相談所",
  alternates: {
    canonical: "https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp/elite-circle",
  },
  openGraph: {
    title: "大阪梅田ドクターズ結婚相談所の会員と婚活環境について",
    description:
      "全国11万人のIBJネットワークと、現役女医＋ベテラン仲人の2名体制。北新地駅徒歩1分の結婚相談所です。",
    url: "https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp/elite-circle",
    siteName: "大阪梅田ドクターズ結婚相談所",
    type: "website",
    locale: "ja_JP",
  },
  verification: {
    google: "YOUR_ACTUAL_GOOGLE_SEARCH_CONSOLE_CODE",
  },
};

const faqList = [
  {
    q: "大阪梅田ドクターズ結婚相談所はどこにありますか？",
    a: "大阪市北区梅田1丁目の大阪駅前第2ビル2階です。JR東西線「北新地駅」から徒歩1分、JR「大阪駅」から徒歩約8分。地下街を通れば雨の日も濡れずにお越しいただけます。",
  },
  {
    q: "何名くらいの会員から相手を探せますか？",
    a: "IBJの発表によれば、2026年7月時点で110,482名です。全国規模のデータベースをスマートフォンからご利用いただけます。",
  },
  {
    q: "どんな職業の方が活動していますか？",
    a: "医師・薬剤師・看護師などの医療職、弁護士・公認会計士などの士業、公務員、大学の研究職、経営者、大手企業にお勤めの方が中心です。20代後半から40代の男女が多く活動しています。",
  },
  {
    q: "医療関係者でなくても入会できますか？",
    a: "できます。ご職業は問いません。代表が医師であるだけで、会員様のご職業は幅広くいらっしゃいます。",
  },
  {
    q: "担当カウンセラーは何名つきますか？",
    a: "2名です。現役女医の代表カウンセラーとベテラン男性仲人が、1組となって担当します。",
  },
  {
    q: "すぐに入会できますか？",
    a: "新規のご入会は毎月先着5名様までです。その月の枠が埋まっている場合は、翌月のご案内となります。まずは無料相談にお越しください。",
  },
  {
    q: "入会に必要な書類は何ですか？",
    a: "独身証明書、住民票、収入証明書（男性は必須）、学歴証明書などです。有資格者の方は資格証明書もご提出いただきます。",
  },
  {
    q: "大阪以外に住んでいても利用できますか？",
    a: "利用できます。豊中・西宮・神戸・京都・奈良など関西全域の方にご活用いただいています。LINE・Zoomでのオンライン相談も可能です。",
  },
  {
    q: "恋愛経験がなくても大丈夫ですか？",
    a: "大丈夫です。「これまで異性と付き合ったことがない」というご相談は珍しくありません。プロフィール作成からお見合いの会話まで、2名で伴走します。",
  },
  {
    q: "他の結婚相談所から移ることはできますか？",
    a: "できます。これまでの活動データを客観的に見直すところから始めます。",
  },
  {
    q: "職場や友人に知られませんか？",
    a: "知られることはありません。会員情報は厳重に管理しており、外部に開示することはありません。",
  },
  {
    q: "相談だけでも可能ですか？",
    a: "可能です。無料相談は完全予約制で、受付は年中無休9時から21時。入会を決めていなくても構いません。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "大阪梅田ドクターズ結婚相談所の会員と婚活環境について",
  description:
    "全国11万人規模のIBJネットワークと、現役女医とベテラン仲人による2名体制。大阪・梅田の結婚相談所の会員層と婚活環境について解説します。",
  author: {
    "@type": "Person",
    name: "加藤",
    jobTitle: "代表カウンセラー／内科認定医",
  },
  publisher: {
    "@id": "https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp/#organization",
  },
  datePublished: "2026-09-11",
  dateModified: "2026-09-11",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp/elite-circle",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqList.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function EnvironmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-[#faf8f5] min-h-screen text-[18px] leading-relaxed text-gray-800 py-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-8">
          
          <div className="text-right text-xs text-gray-500">
            作成日 2026年9月11日
          </div>

          {/* Header Ribbon / Banner */}
          <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-2.5 text-center text-white font-bold rounded-t-2xl shadow-sm text-lg sm:text-xl">
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="w-5 h-5 shrink-0" />
              全国11万人のネットワークと2名体制
            </span>
          </div>

          {/* Hero / Header Section */}
          <section className="rounded-b-2xl bg-white border border-rose-200 p-6 sm:p-10 shadow-sm space-y-4 -mt-8 pt-8">
            <h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-snug tracking-tight"
              style={{ wordBreak: 'break-all' }}
            >
              大阪梅田ドクターズ結婚相談所の会員と婚活環境について
            </h1>

            {/* リード文（太字・枠囲み推奨） */}
            <div className="border-2 border-rose-300 bg-rose-50/50 p-5 rounded-xl text-[18px] font-bold text-gray-800 leading-relaxed pt-3 mt-4">
              大阪梅田ドクターズ結婚相談所は、大阪市北区の大阪駅前第2ビル2階（JR東西線・北新地駅から徒歩1分）にある結婚相談所です。日本結婚相談所連盟（IBJ）の正規加盟店として、全国11万人規模のネットワークからお相手を探せます。医師・士業・研究職など専門職の方が多く活動しており、お一人の会員様に現役女医の代表カウンセラーとベテラン仲人の2名が担当としてつきます。新規のご入会は毎月5名様まで。受付は年中無休9時から21時、完全予約制です。
            </div>

            {/* 代表写真のキャプションと画像 */}
            <figure className="pt-4 text-center space-y-2">
              <div className="relative w-full max-w-md mx-auto aspect-[4/3] overflow-hidden rounded-2xl shadow-md border border-rose-200">
                <Image
                  src="/real-female-physician-lead-counselor.jpg"
                  alt="代表カウンセラー 加藤"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 448px"
                  priority
                />
              </div>
              <figcaption className="text-sm text-gray-600 font-medium">
                代表カウンセラー 加藤／内科認定医。診療を続けながら、会員様の婚活に伴走しています。
              </figcaption>
            </figure>
          </section>

          {/* H2｜このページでわかること */}
          <section className="rounded-2xl bg-white border border-rose-200 p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-3 border-b border-rose-200 pb-4">
              <div className="p-2.5 rounded-xl bg-rose-400 text-white shrink-0">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h2 
                className="text-xl sm:text-2xl font-black text-gray-900 leading-snug"
                style={{ wordBreak: 'break-all' }}
              >
                このページでわかること
              </h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-[18px] text-gray-700 pl-2">
              <li>出会える会員の規模と、身元確認の仕組み</li>
              <li>どんな職業・年代の方が活動しているか</li>
              <li>担当が2名つく体制と、その理由</li>
              <li>新規入会の人数枠と入会審査について</li>
              <li>他の結婚相談所からの移籍について</li>
            </ul>
          </section>

          {/* H2｜全国11万人のネットワークから、身元の確かな相手を探せます */}
          <section className="rounded-2xl bg-white border border-rose-200 p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-start gap-3 border-b border-rose-200 pb-4">
              <div className="p-2.5 rounded-xl bg-rose-400 text-white shrink-0 mt-1">
                <Users className="w-7 h-7" />
              </div>
              <h2 
                className="text-xl sm:text-2xl font-black text-gray-900 leading-snug"
                style={{ wordBreak: 'break-all' }}
              >
                全国11万人のネットワークから、身元の確かな相手を探せます
              </h2>
            </div>

            <div className="text-[18px] text-gray-700 leading-relaxed space-y-4 pt-2">
              <p style={{ wordBreak: 'break-all' }}>
                <strong>IBJの発表によれば、2026年7月時点の登録会員数は110,482名です。</strong> この全国規模のデータベースから、スマートフォンでいつでもお相手を検索していただけます。大阪市内はもちろん、豊中・吹田・北摂、西宮・神戸、京都、奈良まで、関西全域の会員様とお会いいただけます。
              </p>
              
              <p style={{ wordBreak: 'break-all' }}>
                IBJへの登録には、次の書類の提出が義務付けられています。
              </p>
              
              <ul className="list-disc list-inside space-y-1 pl-4 text-gray-800">
                <li>独身証明書（本籍地の自治体が発行）</li>
                <li>住民票</li>
                <li>収入証明書（男性は必須）</li>
                <li>学歴証明書（卒業証明書など）</li>
                <li>資格証明書（医師・弁護士などの有資格者）</li>
              </ul>

              <p style={{ wordBreak: 'break-all' }}>
                年収も、学歴も、独身であることも、すべて公的書類で確認された情報です。プロフィールに書かれた事実については、確かめる手間がいりません。
              </p>

              <p style={{ wordBreak: 'break-all' }}>
                これに加えて、当相談所からのご紹介もあります。医師として長く医療の現場にいれば、自然と業界内のつながりができます。仲人として人と関わり続けてきた者にも、同じように人のつながりがあります。そうしたご縁の中で、ご希望と条件、タイミングが合う場合に、直接ご提案することがあります。
              </p>

              <p className="text-sm text-gray-500 pt-1" style={{ wordBreak: 'break-all' }}>
                ※ご紹介は双方のご希望が合致した際のご提案であり、すべての方への紹介をお約束するものではありません。
              </p>
            </div>
          </section>

          {/* H2｜こういう方が活動しています */}
          <section className="rounded-2xl bg-white border border-rose-200 p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-start gap-3 border-b border-rose-200 pb-4">
              <div className="p-2.5 rounded-xl bg-rose-400 text-white shrink-0 mt-1">
                <UserCheck className="w-7 h-7" />
              </div>
              <h2 
                className="text-xl sm:text-2xl font-black text-gray-900 leading-snug"
                style={{ wordBreak: 'break-all' }}
              >
                こういう方が活動しています
              </h2>
            </div>

            <div className="text-[18px] text-gray-700 leading-relaxed space-y-4 pt-2">
              <p style={{ wordBreak: 'break-all' }}>
                <strong>中心となるのは、20代後半から40代の、仕事を持つ男女です。</strong>
              </p>

              <p style={{ wordBreak: 'break-all' }}>
                多い職業は次のとおりです。
              </p>

              <ul className="list-disc list-inside space-y-1 pl-4 text-gray-800">
                <li>医療職（医師・薬剤師・看護師・検査技師など）</li>
                <li>士業（弁護士・公認会計士・税理士など）</li>
                <li>研究職（大学・企業の研究開発）</li>
                <li>公務員</li>
                <li>経営者・自営業</li>
                <li>大手企業にお勤めの方</li>
              </ul>

              <p style={{ wordBreak: 'break-all' }}>
                現役女医が代表を務める相談所ということもあり、医療関係の方からのご相談は特に多くいただきます。当直明けの疲れも、シフトの組みにくさも、説明せずに伝わる。それだけで活動の負担が変わります。
              </p>

              <p style={{ wordBreak: 'break-all' }}>
                一方で、恋愛経験が少ない方、人見知りの方も同じように活動しています。「これまで異性と付き合ったことがない」というご相談は珍しくありません。仕事に打ち込んできた方ほど、そうなりがちです。
              </p>

              <p style={{ wordBreak: 'break-all' }}>
                共通しているのは、結婚を真剣に考えていること。そして、条件を並べるだけでは決められないと気づいている方が多いことです。
              </p>

              <p style={{ wordBreak: 'break-all' }}>
                年齢構成や職業の内訳は、無料相談の際に実際の検索画面をお見せしながらご説明します。
              </p>
            </div>
          </section>

          {/* H2｜女医と仲人、2人が同時にあなたを見ています */}
          <section className="rounded-2xl bg-white border border-rose-200 p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-start gap-3 border-b border-rose-200 pb-4">
              <div className="p-2.5 rounded-xl bg-rose-400 text-white shrink-0 mt-1">
                <Stethoscope className="w-7 h-7" />
              </div>
              <h2 
                className="text-xl sm:text-2xl font-black text-gray-900 leading-snug"
                style={{ wordBreak: 'break-all' }}
              >
                女医と仲人、2人が同時にあなたを見ています
              </h2>
            </div>

            <div className="text-[18px] text-gray-700 leading-relaxed space-y-4 pt-2">
              <p style={{ wordBreak: 'break-all' }}>
                <strong>当相談所では、会員1名に対して2名の担当がつきます。</strong> 現役の女性医師である代表カウンセラーと、ベテランの男性仲人です。
              </p>

              <p style={{ wordBreak: 'break-all' }}>
                医療の現場で日々多くの方の話を聞き、言葉にならない不安を汲み取ってきた女医の目。長年、数多くの成婚を見届けてきた仲人の目。同じお見合いの報告を聞いても、二人が気づくことは違います。プロフィール写真ひとつ選ぶにも、意見が分かれることがあります。その違いが、そのままあなたへのアドバイスになります。
              </p>

              <p style={{ wordBreak: 'break-all' }}>
                異性から見た自分と、同性から見た自分。その両方が同時に返ってくる。一人で活動していては、手に入らない視点です。
              </p>

              <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl mt-4">
                <Link 
                  href="/dual-support"
                  className="text-rose-600 hover:text-rose-700 font-bold underline flex items-center gap-2"
                >
                  <FileText className="w-5 h-5 shrink-0" />
                  担当カウンセラーは1人で本当に十分？——2人体制という選択
                </Link>
              </div>
            </div>
          </section>

          {/* H2｜新規入会は毎月5名まで */}
          <section className="rounded-2xl bg-white border border-rose-200 p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-start gap-3 border-b border-rose-200 pb-4">
              <div className="p-2.5 rounded-xl bg-rose-400 text-white shrink-0 mt-1">
                <CalendarCheck className="w-7 h-7" />
              </div>
              <h2 
                className="text-xl sm:text-2xl font-black text-gray-900 leading-snug"
                style={{ wordBreak: 'break-all' }}
              >
                新規入会は毎月5名まで
              </h2>
            </div>

            <div className="text-[18px] text-gray-700 leading-relaxed space-y-4 pt-2">
              <p style={{ wordBreak: 'break-all' }}>
                <strong>新規のご入会は、毎月先着5名様までとしています。</strong> 会員1名に2名の担当がつく体制を保つためです。
              </p>

              <p style={{ wordBreak: 'break-all' }}>
                だから、小さな疑問にも<strong>24時間以内を目安に</strong>お返事します。お見合いの日程調整も、デート前の不安も、思い立ったときに聞いていただけます。婚活は、迷ったその瞬間に相談できるかどうかで進み方が変わります。返事を3日待っている間に、お相手の熱は冷めます。
              </p>

              <p style={{ wordBreak: 'break-all' }}>
                ご入会には審査があります。真剣に結婚を考えている方だけの環境を保つためです。
              </p>

              <div className="space-y-3 p-4 bg-rose-50 border border-rose-200 rounded-xl mt-4">
                <div>
                  <Link 
                    href="/plan"
                    className="text-rose-600 hover:text-rose-700 font-bold underline flex items-center gap-2"
                  >
                    <FileText className="w-5 h-5 shrink-0" />
                    料金プランと少人数制について
                  </Link>
                </div>
                <div>
                  <Link 
                    href="/membership-steps"
                    className="text-rose-600 hover:text-rose-700 font-bold underline flex items-center gap-2"
                  >
                    <FileText className="w-5 h-5 shrink-0" />
                    入会制限と入会審査
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* H2｜うまくいかない原因は、あなたの魅力ではありません */}
          <section className="rounded-2xl bg-white border border-rose-200 p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-start gap-3 border-b border-rose-200 pb-4">
              <div className="p-2.5 rounded-xl bg-rose-400 text-white shrink-0 mt-1">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <h2 
                className="text-xl sm:text-2xl font-black text-gray-900 leading-snug"
                style={{ wordBreak: 'break-all' }}
              >
                うまくいかない原因は、あなたの魅力ではありません
              </h2>
            </div>

            <div className="text-[18px] text-gray-700 leading-relaxed space-y-4 pt-2">
              <p style={{ wordBreak: 'break-all' }}>
                お見合いが組めない。仮交際で終わる。お断りが続く。
              </p>

              <p style={{ wordBreak: 'break-all' }}>
                そんなとき、多くの方が原因を自分の魅力に求めます。けれど実際に多いのは、条件の設定がずれているか、伝え方に改善の余地があるか、そのどちらかです。
              </p>

              <p style={{ wordBreak: 'break-all' }}>
                原因が分かれば、変えられます。医療の現場でやっていることと、実は同じです。感情で受け止める前に、何が起きているのかを整理する。そのうえで、次に何を変えるかを具体的にお伝えします。
              </p>

              <p style={{ wordBreak: 'break-all' }}>
                同時に、落ち込んだお気持ちにも寄り添います。分析だけでは人は動けません。私たちが「心の保健室」と呼んでいるのは、その部分です。
              </p>

              <p style={{ wordBreak: 'break-all' }}>
                他の結婚相談所で足踏みされていた方の移籍も歓迎です。これまでの活動データやプロフィールを客観的に見直し、どこで止まっていたのかを一緒に確かめます。
              </p>
            </div>
          </section>

          {/* H2｜あなたの生活に、婚活のほうを合わせます */}
          <section className="rounded-2xl bg-white border border-rose-200 p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-start gap-3 border-b border-rose-200 pb-4">
              <div className="p-2.5 rounded-xl bg-rose-400 text-white shrink-0 mt-1">
                <Sparkles className="w-7 h-7" />
              </div>
              <h2 
                className="text-xl sm:text-2xl font-black text-gray-900 leading-snug"
                style={{ wordBreak: 'break-all' }}
              >
                あなたの生活に、婚活のほうを合わせます
              </h2>
            </div>

            <div className="text-[18px] text-gray-700 leading-relaxed space-y-4 pt-2">
              <p style={{ wordBreak: 'break-all' }}>
                夜勤のある方、シフト制の方、リモート中心の方。趣味を大切にしたい方、キャリアを優先したい方。子どもを持つかどうかについても、考えは人それぞれです。
              </p>

              <p style={{ wordBreak: 'break-all' }}>
                「結婚したらこうあるべき」という前提でアドバイスをすることはありません。まずお聞きするのは、あなたにとっての幸せがどういう形かということ。そこが定まると、条件の優先順位も自然に決まります。
              </p>

              <p style={{ wordBreak: 'break-all' }}>
                お見合いの日程調整も、交際中の進め方も、生活リズムに合わせて組み立てます。
              </p>
            </div>
          </section>

          {/* H2｜よくあるご質問 */}
          <section className="rounded-2xl bg-white border border-rose-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-rose-200 pb-4">
              <div className="p-2.5 rounded-xl bg-rose-400 text-white shrink-0">
                <HelpCircle className="w-7 h-7" />
              </div>
              <h2 
                className="text-xl sm:text-2xl font-black text-gray-900 leading-snug"
                style={{ wordBreak: 'break-all' }}
              >
                よくあるご質問
              </h2>
            </div>

            <div className="space-y-6">
              {faqList.map((faq, index) => (
                <div key={index} className="border-b border-rose-100 pb-4 space-y-2">
                  <p className="font-bold text-gray-900 text-lg flex items-start gap-2">
                    <span className="text-rose-500 font-black">Q.</span>
                    <span>{faq.q}</span>
                  </p>
                  <p className="text-gray-700 pl-6">
                    <span className="font-bold text-gray-900 mr-2">A.</span>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* H2｜まずは、話を聞きに来てください */}
          <section className="rounded-2xl bg-white border border-rose-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-rose-200 pb-4">
              <div className="p-2.5 rounded-xl bg-rose-400 text-white shrink-0">
                <MessageSquare className="w-7 h-7" />
              </div>
              <h2 
                className="text-xl sm:text-2xl font-black text-gray-900 leading-snug"
                style={{ wordBreak: 'break-all' }}
              >
                まずは、話を聞きに来てください
              </h2>
            </div>

            <div className="text-[18px] text-gray-700 leading-relaxed space-y-4">
              <p style={{ wordBreak: 'break-all' }}>
                無料相談は完全予約制です。ご来訪の際は、必ず担当が対応いたします。遠方の方、時間の取りにくい方には、LINE・メール・Zoomでのオンライン相談も承ります。
              </p>

              <p style={{ wordBreak: 'break-all' }}>
                入会を決めていなくても構いません。「いつから始めるべきか」「今のやり方でいいのか」。そのご相談だけでも、どうぞ。
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-xl text-center shadow-md text-lg transition-all"
                >
                  無料相談を予約する
                </Link>
                <a
                  href="https://lin.ee/ZXB0UNs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-xl text-center shadow-md text-lg transition-all"
                >
                  LINEで相談する
                </a>
              </div>
            </div>
          </section>

          {/* フッター情報 */}
          <footer className="rounded-2xl bg-white border border-rose-200 p-6 sm:p-8 shadow-sm text-sm text-gray-700 leading-relaxed space-y-2">
            <div className="flex items-center gap-2 font-bold text-base text-gray-900 mb-2">
              <Building2 className="w-5 h-5 text-rose-500" />
              <span>大阪梅田ドクターズ結婚相談所</span>
            </div>
            <p>〒530-0001 大阪府大阪市北区梅田1丁目2番2-200号 大阪駅前第2ビル2階 3-1-2</p>
            <p>TEL: 090-6646-3456</p>
            <p>受付時間 9:00〜21:00（年中無休・完全予約制）</p>
            <p>アクセス JR東西線「北新地駅」徒歩1分／JR「大阪駅」徒歩約8分</p>
          </footer>

          {/* ページ末尾の署名欄 */}
          <div className="border-t border-rose-200 pt-4 text-xs text-gray-500 space-y-1 text-center">
            <p>執筆・監修 加藤（代表カウンセラー／内科認定医）</p>
            <p>公開日 2026年9月11日</p>
            <p>最終更新日 2026年9月11日</p>
          </div>

        </div>
      </main>
    </>
  );
}