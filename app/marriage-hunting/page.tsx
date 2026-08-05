import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  CheckCircle2, 
  HelpCircle, 
  Coffee, 
  Camera, 
  Users, 
  Compass, 
  ArrowRight,
  Heart
} from "lucide-react";

export const metadata: Metadata = {
  title: "「婚活って何？」から一歩ずつ。初心者向けの安心スタートガイド",
  description:
    "大阪梅田ドクターズ結婚相談所による初心者向け解説。お見合いの服装、場所、プロフィール作成、会員層のリアルまで、右も左もわからないあなたの不安にベテランカウンセラーと女性医師が寄り添い、丁寧にお答えします。",

  keywords: [
    "大阪梅田 結婚相談所",
    "婚活 初めて 何から",
    "お見合い 服装 メイク",
    "結婚相談所 どんな人",
    "お見合い 場所 大阪",
    "婚活 不安 初心者",
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
    canonical: "/konkatsu-hajimete",
  },

  openGraph: {
    title: "「婚活って何？」から一歩ずつ。右も左もわからないあなたを置いてけぼりにしない丁寧なスタート",
    description:
      "婚活って何から始めるの？そんなあなたの戸惑いに寄り添い、お見合いの基本から一つずつ丁寧にサポートします。",
    type: "article",
    locale: "ja_JP",
    siteName: "大阪梅田ドクターズ結婚相談所",
    url: "/konkatsu-hajimete",
  },

  twitter: {
    card: "summary_large_image",
    title: "「婚活って何？」から一歩ずつ。初心者向けの安心スタートガイド",
    description:
      "右も左もわからない初心者さんのための安心スタートガイド。女性医師×カウンセラーがサポート。",
  },
};

export default function KonkatsuHajimetePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    'headline': '「婚活って何？」から一歩ずつ。右も左もわからないあなたを置いてけぼりにしない丁寧なスタート',
    'description': '大阪梅田ドクターズ結婚相談所による初心者向け解説。お見合いの服装、場所、プロフィール作成、会員層のリアルまで、右も左もわからないあなたの不安にベテランカウンセラーと女性医師が寄り添い、丁寧にお答えします。',
    'datePublished': '2026-08-02T12:00:00+09:00',
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
    <main className="bg-[#faf8f5] min-h-screen text-[18px] leading-relaxed text-gray-800 py-4 px-2 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-4xl space-y-10">

        {/* Header Ribbon / Banner */}
        <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-2 text-center text-white font-bold rounded-t-2xl shadow-sm text-[18px]">
          <span className="inline-flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 shrink-0" />
            右も左もわからない初心者さんのための安心スタートガイド
          </span>
        </div>

        {/* Hero / Header Section */}
        <section className="rounded-b-2xl bg-white border border-rose-200 p-6 sm:p-10 shadow-sm space-y-6 -mt-10 pt-10">
          <h1 
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-snug tracking-tight"
            style={{ wordBreak: 'break-all' }}
          >
            「婚活って何？」から一歩ずつ。<br className="hidden sm:inline" />
            右も左もわからないあなたを置いてけぼりにしない丁寧なスタート
          </h1>

          <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-r-xl space-y-2">
            <h2 
              className="text-lg sm:text-xl font-bold text-rose-600 leading-snug"
              style={{ wordBreak: 'break-all' }}
            >
              婚活ってそもそも何から始めるの？」「何が正解かわからない…」そんなあなたへ。大阪梅田ドクターズ結婚相談所は、あなたの戸惑いに寄り添い、お見合いの基本から一つずつ丁寧にサポートします。
            </h2>
            <p className="text-[18px] text-gray-700 leading-relaxed" style={{ wordBreak: 'break-all' }}>
              「婚活を始めてみようかな、と思ったけれど……そもそも婚活って何からすればいいの？」
              「お見合い用の服なんて持っていないし、メイクや髪型はどうしたら正解？」
              「お見合いってどこでするの？ 全然申し込みが来なかったらどうしよう……」
            </p>
          </div>

          <section className="w-full">
            <div className="w-full max-w-4xl mx-auto my-1">
              <div className="relative w-full aspect-[1/1] overflow-hidden rounded-2xl shadow-md">
                <Image
                  src="/a-young-woman-new-to-the-world-of-marriage-hunting.jpg"
                  alt="リラックスして相談を受ける初心者婚活者とカウンセラーのイメージ写真"
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority={true}
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAAEAAQBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA="
                />
              </div>
            </div>
          </section>

          <div className="text-[18px] text-gray-700 leading-relaxed space-y-4 border-t border-rose-100 pt-6">
            <p style={{ wordBreak: 'break-all' }}>
              当相談所にいらっしゃる方の多くが、最初はこのような「右も左もわからない状態」からの初心者スタートです。周りの友人が次々と結婚していく中で少し焦りを感じつつも、「何から始めるの？」と一人で画面を見つめて考えている方もいらっしゃるのではないでしょうか。
            </p>
            <p style={{ wordBreak: 'break-all' }}>
              私たちは、あなたが抱くその小さな戸惑いや不安に、仲人歴20年のベテランカウンセラーと現役女医が耳を傾け、基本の「き」から一つずつ一緒に考え、丁寧にお伝えしていきます。
              まずは、新しく活動を考える方がよく感じている「5つの疑問」について、一つずつ分かりやすくお答えします。
            </p>
          </div>
        </section>

        {/* 5つの疑問 Section */}
        <section className="space-y-8">

          {/* Question 1 */}
          <div className="rounded-2xl bg-white border border-rose-200 p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-3 border-b border-rose-200 pb-4">
              <span className="p-2 rounded-xl bg-rose-500 text-white shrink-0 font-bold text-lg">
                Q1
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-gray-900" style={{ wordBreak: 'break-all' }}>
                「お見合い用の服なんて持ってない…メイクはどうしたらいい？」
              </h3>
            </div>
                      <section className="w-full">
            <div className="w-full max-w-4xl mx-auto my-1">
              <div className="relative w-full aspect-[1/1] overflow-hidden rounded-2xl shadow-md">
                <Image
                  src="/woman-applying-makeup-with-brush.jpg"
                  alt="婚活初心者が大阪梅田ドクターズ結婚相談所でメイクのサポートを受けている写真"
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority={true}
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAAEAAQBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA="
                />
              </div>
            </div>
          </section>
            <div className="text-[18px] text-gray-700 leading-relaxed space-y-3">
              <p style={{ wordBreak: 'break-all' }}>
                普段、カジュアルな服装やオフィスカジュアルで仕事をしている方なら、お見合いにどんな服を着ていけばいいのかピンとこないかもしれません。「デパートに行って、高級なスーツやワンピースを新しく買い揃えなければいけないのかな？」と思われがちですが、そんなことはありません。
              </p>
              <p style={{ wordBreak: 'break-all' }}>
                当相談所では、身近なブランドでも十分に素敵に見える「清潔感と優しさが伝わるコーディネート」を、お洋服の形から色合わせまで具体的にアドバイスします。
              </p>
              <p style={{ wordBreak: 'break-all' }}>
                メイクに関しても、あなたの本来の魅力を引き出す「お人柄が伝わるナチュラルなメイク」の基本を一つずつお教えします。
                最初からすべてを完璧にする必要はありません。あなたの歩幅に合わせて、一緒に準備を整えていきましょう。
              </p>
            </div>
          </div>

          {/* Question 2 */}
          <div className="rounded-2xl bg-white border border-rose-200 p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-3 border-b border-rose-200 pb-4">
              <span className="p-2 rounded-xl bg-rose-500 text-white shrink-0 font-bold text-lg">
                Q2
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-gray-900" style={{ wordBreak: 'break-all' }}>
                「お見合いって、そもそもどこでするの？」
              </h3>
            </div>
               <section className="w-full">
            <div className="w-full max-w-4xl mx-auto my-1">
              <div className="relative w-full aspect-[1/1] overflow-hidden rounded-2xl shadow-md">
                <Image
                  src="/umeda-hotel-lounge-matchmaking-30s.jpg"
                  alt="グランビア大阪ホテルのラウンジで婚活の30代男女が笑顔でお見合いをしている写真"
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority={true}
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAAEAAQBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA="
                />
              </div>
            </div>
          </section>
            <div className="text-[18px] text-gray-700 leading-relaxed space-y-3">
              <p style={{ wordBreak: 'break-all' }}>
                お見合いは、映画やドラマにあるように、シーンと静まり返った個室で行うわけではありません。主な場所は、「ホテルグランヴィア大阪」や「ヒルトン大阪」「ウェスティンホテル大阪」など、大阪梅田エリアにある一流ホテルの洗練されたラウンジ【カフェ】です。
              </p>
              <p style={{ wordBreak: 'break-all' }}>
                適度ににぎやかな空間なので、お互いに緊張しすぎずにリラックスしてお話しすることができます。当日の場所のセッティングや席の予約、スムーズに合流できる待ち合わせルートの確保まで、すべて事前にこちらで手配・ご案内します。
              </p>
              <p style={{ wordBreak: 'break-all' }}>
                お見合いの事前打ち合わせやコーディネート相談もしっかりサポートします。<br />
                当日は、笑顔で待ち合わせ場所に向かっていただければ、それだけで大丈夫です。
              </p>
            </div>
          </div>

          {/* Question 3 */}
          <div className="rounded-2xl bg-white border border-rose-200 p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-3 border-b border-rose-200 pb-4">
              <span className="p-2 rounded-xl bg-rose-500 text-white shrink-0 font-bold text-lg">
                Q3
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-gray-900" style={{ wordBreak: 'break-all' }}>
                「私（僕）なんか、全然申し込みが来ないこともあるんじゃ…」
              </h3>
            </div>
               <section className="w-full">
            <div className="w-full max-w-4xl mx-auto my-1">
              <div className="relative w-full aspect-[1/1] overflow-hidden rounded-2xl shadow-md">
                <Image
                  src="/attractive-female-profile-umeda.jpg"
                  alt="20代女性の魅力的なプロフィール写真　大阪梅田ドクターズ結婚相談所のサポート内容"
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority={true}
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAAEAAQBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA="
                />
              </div>
            </div>
          </section>
            <div className="text-[18px] text-gray-700 leading-relaxed space-y-3">
              <p style={{ wordBreak: 'break-all' }}>
                「勇気を出して登録したのに、誰からも選ばれなかったらどうしよう」<br />
                「人気がなかったら恥ずかしいかも…」<br />
                という不安があるかもしれません。
              </p>
              <p style={{ wordBreak: 'break-all' }}>
                一般的に申し込みが来ない理由の大半は、「プロフィールの写真」や「自己紹介文の言葉選び」が、まだあなたの良さを表現しきれていないという、技術的なことが原因です。
              </p>
              <div className="bg-rose-50/80 p-4 rounded-xl border border-rose-200 space-y-2">
                <p className="font-bold text-gray-900" style={{ wordBreak: 'break-all' }}>大阪梅田ドクターズ結婚相談所では</p>
                <ul className="space-y-1.5 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <span style={{ wordBreak: 'break-all' }}>あなたの魅力を散りばめた素敵なお写真作成のお手伝い</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <span style={{ wordBreak: 'break-all' }}>プロフィールの代行作成や添削まで、全てサポートします。</span>
                  </li>
                </ul>
              </div>
              <p style={{ wordBreak: 'break-all' }}>
                あなたの大切な本命のパートナーにメッセージが届くよう、<br />
                私達が、全力であなたの縁の下の力持ちになりますので、ご安心くださいね♡
              </p>
            </div>
          </div>

          {/* Question 4 */}
          <div className="rounded-2xl bg-white border border-rose-200 p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-3 border-b border-rose-200 pb-4">
              <span className="p-2 rounded-xl bg-rose-500 text-white shrink-0 font-bold text-lg">
                Q4
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-gray-900" style={{ wordBreak: 'break-all' }}>
                「結婚相談所って、実際はどんな人がいるの？」
              </h3>
            </div>
               <section className="w-full">
            <div className="w-full max-w-4xl mx-auto my-1">
              <div className="relative w-full aspect-[1/1] overflow-hidden rounded-2xl shadow-md">
                <Image
                  src="/working-situation.jpg"
                  alt="30代会社で働く自立した婚活男女のイメージ写真"
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority={true}
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAAEAAQBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA="
                />
              </div>
            </div>
          </section>
            <div className="text-[18px] text-gray-700 leading-relaxed space-y-3">
              <p style={{ wordBreak: 'break-all' }}>
                「少し堅苦しい人が多いのかな……」というイメージをお持ちかもしれませんが、今の婚活市場には、とても素敵な方々がたくさん集まっています。
              </p>
              <p style={{ wordBreak: 'break-all' }}>
                日本の結婚相談所の連盟には、現在全国で数万人を超える非常に多くの一般の男女が登録しています。一般的な会員背景データとして、年齢層は男女ともに30代前半が最もボリュームの多い中心層となっています。また、男女比の割合も「男性約4割、女性約6割」とバランスが良く、職業もごく一般的な会社員や公務員、技術職、看護師や保育士など、社会のさまざまな場所で真面目に働いている普通の男女がほとんどです。
              </p>
              <div className="bg-rose-50 p-4 rounded-xl border border-rose-100 space-y-1">
                <p style={{ wordBreak: 'break-all' }}>「なんとなくいつかは結婚したいなぁとは思っていたけど、気がつけば出会いの機会が少し減ってしまった。。」</p>
                <p style={{ wordBreak: 'break-all' }}>「日常生活の職場と自宅の往復だけでは、お相手にあえない」</p>
                <p style={{ wordBreak: 'break-all' }}>「結婚を前提とした真剣な恋愛をしたい」</p>
              </div>
              <p style={{ wordBreak: 'break-all' }}>
                という、あなたと同じように誠実な結婚生活を望まれている身近な一般の方々が、未来を思い描いて真剣に活動されています。<br />
                ご安心くださいね♡
              </p>
            </div>
          </div>

          {/* Question 5 */}
          <div className="rounded-2xl bg-white border border-rose-200 p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-3 border-b border-rose-200 pb-4">
              <span className="p-2 rounded-xl bg-rose-500 text-white shrink-0 font-bold text-lg">
                Q5
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-gray-900" style={{ wordBreak: 'break-all' }}>
                「最初は本当に、何から手を付ければいいの？」
              </h3>
            </div>
               <section className="w-full">
            <div className="w-full max-w-4xl mx-auto my-1">
              <div className="relative w-full aspect-[1/1] overflow-hidden rounded-2xl shadow-md">
                <Image
                  src="/young-woman-consultation-umeda.jpg"
                  alt="若い女性が婚活の基本からカウンセラーに教えてもらっている面談室の様子"
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority={true}
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAAEAAQBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA="
                />
              </div>
            </div>
          </section>
            <div className="text-[18px] text-gray-700 leading-relaxed space-y-3">
              <p style={{ wordBreak: 'break-all' }}>
                「色々やることが多そうで、やっぱり難しそう……」と感じる必要はありません。あなたが最初に行うことは、「プロの手を借りて、自分のこれまでの生活や、これからの理想をリラックスして話してみる」、ただそれだけです。
              </p>
              <p style={{ wordBreak: 'break-all' }}>
                書類の集め方から、写真館での素敵なプロフィールの撮影の予約、お相手への最初のお声がけのボタンの押し方にいたるまで、システム上の操作もすべて一緒に画面を見ながら進めていきます。
              </p>
              <p style={{ wordBreak: 'break-all' }}>
                まずは「婚活の仕組みを知る」という小さな一歩から、一緒に始めていきましょう。<br />
                なんでもご質問してくださいね♡
              </p>
            </div>
          </div>

        </section>

        {/* Counselor Message Box */}
        <section className="rounded-2xl bg-white border border-rose-300 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-3 border-b border-rose-200 pb-3">
            <span className="p-2 rounded-xl bg-rose-500 text-white">
              <Heart className="w-5 h-5" />
            </span>
            <h3 className="text-xl font-black text-gray-900" style={{ wordBreak: 'break-all' }}>
              カウンセラーより
            </h3>
          </div>
          <div className="text-[18px] text-gray-700 leading-relaxed space-y-3">
            <p style={{ wordBreak: 'break-all' }}>
              お見合いの基本の作法、お互いの負担にならないLINEの返信頻度やLINEの内容、初めてのデートの場所選びから関わりの深め方にいたるまで、すべてのステップを私達プロが「一歩ずつ、丁寧に」アドバイスします。
            </p>
            <p style={{ wordBreak: 'break-all' }}>
              梅田の静かなオフィスで、私たちと秘密厳守のご相談が可能です。<br />
              あなたの最初の「え？」をお聞かせくださいね♡
            </p>
          </div>
        </section>

        {/* Navigation back / related link */}
        <div className="text-center pt-4">
          <Link 
            href="/attraction-guide" 
            className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-6 rounded-xl shadow-sm transition-all text-[18px]"
          >
            <span>モテる人の特徴・雰囲気づくりの解説へ戻る</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </main>
  );
}