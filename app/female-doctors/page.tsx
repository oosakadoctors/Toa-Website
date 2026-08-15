import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "女性医師の方へ｜大阪梅田ドクターズ結婚相談所",
  description:
    "妥協ではなく、「真に並び立つ知性」と出会う。多忙を極める女性医師のキャリアとプライドを尊重し、理想の婚姻を最速でデザインする。",

  keywords: [
    "女性医師 婚活",
    "女医 結婚相談所",
    "医師同士の結婚",
    "大阪梅田 ドクターズ結婚相談所",
    "ハイスペック婚活 大阪",
  ],

  alternates: {
    canonical: "/female-doctors-guide",
  },

  openGraph: {
    title: "女性医師の方へ｜大阪梅田ドクターズ結婚相談所",
    description:
      "妥協ではなく、「真に並び立つ知性」と出会う。多忙を極める女性医師のキャリアとプライドを尊重し、理想の婚姻を最速でデザインする。",
    type: "article",
    locale: "ja_JP",
    siteName: "大阪梅田ドクターズ結婚相談所",
    url: "/female-doctors-guide",
  },

  twitter: {
    card: "summary_large_image",
    title: "女性医師の方へ｜大阪梅田ドクターズ結婚相談所",
    description:
      "妥協ではなく、「真に並び立つ知性」と出会う。多忙を極める女性医師のキャリアとプライドを尊重し、理想の婚姻を最速でデザインする。",
  },
};

export default function FemaleDoctorsGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'headline': '女性医師の方へ',
    'description': '妥協ではなく、「真に並び立つ知性」と出会う。多忙を極める女性医師のキャリアとプライドを尊重し、理想の婚姻を最速でデザインする。',
    'publisher': {
      '@type': 'Organization',
      'name': '大阪梅田ドクターズ結婚相談所',
    }
  };

  return (
    <main className="bg-[#fffafb] min-h-screen text-[20px] leading-relaxed text-gray-800 px-1 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-4xl space-y-12">

        {/* HERO SECTION - Elegant Rose & Burgundy Gradient */}
<section className="bg-gradient-to-br from-pink-50 via-rose-100 to-amber-50 text-gray-900 rounded-3xl p-8 sm:p-12 shadow-xl space-y-8 border-2 border-rose-200/80 overflow-hidden">
  {/* PILL BADGE */}
  <div className="inline-block bg-white/80 text-rose-600 border border-rose-300 px-4 py-1.5 rounded-full text-lg font-bold tracking-wider shadow-sm">
    FOR FEMALE DOCTORS
  </div>

  {/* MAIN HEADING */}
  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-rose-950 tracking-tight leading-tight">
    女性医師の方へ
  </h1>

  {/* SUBHEADING ACCENT TEXT */}
  <p className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-rose-800 leading-snug border-l-4 border-rose-400 pl-4 sm:pl-6">
    妥協ではなく、「真に並び立つ知性」と出会う。<br />
    多忙を極める女性医師のキャリアとプライドを尊重し、理想の婚姻を最速でデザインする。
  </p>

  {/* WHITE BACKGROUND AREA */}
  <div className="-mx-8 -mb-8 sm:-mx-12 sm:-mb-12 p-8 sm:p-12 bg-white text-gray-900 rounded-b-3xl shadow-inner border-t border-rose-100">
    {/* IMAGE */}
    <div className="-mx-8 sm:-mx-12 md:mx-0 md:float-right md:ml-8 mb-6 md:mb-2 w-[calc(100%+4rem)] sm:w-[calc(100%+6rem)] md:w-80">
      <Image
        src="/female-doctor-thinking.jpg"
        alt="女性医師の婚活をサポートするイメージ"
        width={500}
        height={650}
        className="w-full h-auto rounded-none md:rounded-2xl object-cover shadow-md border-y md:border border-rose-100"
      />
    </div>

    {/* BODY TEXT */}
    <p className="text-gray-800 text-[20px] leading-relaxed">
      大学を卒業すればすでに24歳。そこから初期研修医、専門医の取得、日々の当直や臨床に没頭しているうちに、あっという間に30代を迎える――。<br />
      医療の最前線でキャリアを積み重ねてきた女性医師にとって、気がつけば「婚期を逃しやすい環境」に置かれているのは、決して珍しいことではありません。<br />
      ふと周囲を見渡せば、大学時代の友人や同僚の女医の大多数は男性医師と結婚しており、「自分と同等、あるいはそれ以上の知性と経済力を持つ男性」を求めるのは当然の心理です。しかし、日常の狭い人間関係の中でその条件を満たす独身男性に出会うのは、至難の業と言えます。<br />
      「大阪梅田ドクターズ結婚相談所」は、女性医師特有のキャリアの重み、論理的思考、そして「譲れない結婚相手の条件」を100%理解した、梅田でおすすめのハイスペック特化型結婚相談所です。あなたのこれまでの努力と知性をそのまま肯定し、生涯を共に歩むにふさわしい最良のパートナーをお引き合わせします。
    </p>

    <div className="clear-both" />
  </div>
</section>

        {/* SECTION 2: Message from Female Doctor Counselor */}
        <section className="bg-gradient-to-b from-rose-50 to-pink-50/60 rounded-3xl border-2 border-rose-300 p-6 sm:p-10 shadow-sm space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-rose-950 tracking-tight leading-tight flex items-center gap-3">
            ❤️女性医師カウンセラーからのメッセージ❤️
          </h2>

          <div className="text-gray-800 text-[20px] leading-relaxed">
            <img
              src="/doctor1.jpg"
              alt="女性医師カウンセラー"
              className="float-left mr-6 mb-4 w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-2xl border-2 border-rose-300 shadow-md"
            />

            <p className="mb-5">
              努力家で高みを目指し頑張っているあなたへ。世の中のいわゆる「結婚への高望み」とは違う意味で、自分に見合った知性と能力、社会経験の高い男性を探していらっしゃることと思います。
            </p>

            <p className="mb-5">
              一般的に男性医師は社会的にはとても人気の職業で、病院の中にも「お医者様」と結婚できればいいなと考えている医療従事者の女性はたくさんいます。男性医師の場合は必ずしもお相手が女性医師でなければいけないと考えているわけではない人もいますので、女医の婚活は他業種の女性と比較されるフィールドでもあります。
            </p>

            <p className="mb-5">
              女性医師であること自体が知性、社会的ステータス、広い視野を持ちながらお話ができるなどの点において「類い稀なる魅力」です。そこに女性として愛される「少しの技」「あざとさ」「可愛いさ」をプラスして一緒に婚活を乗り切りましょう。
            </p>

            <p className="mb-5">
              私は現在、医療法人の理事、および病院での勤務医をしています。国際学会や論文発表、認定医や国内多数の学会発表経験、参加経験、アメリカの病院やオーストラリアでの生活だけではなく、結婚、出産、子育てを終え、人生の後半を迎え様々な人生の経験をした女性医師の先輩として様々な場面であなたのお役にたてると信じています。私の経験のすべてが、若い方々への形のない贈り物として皆様の人生の灯火となりますように。
            </p>

            <div className="clear-both pt-2">
              <p className="font-extrabold text-2xl sm:text-3xl text-rose-950 bg-white p-6 rounded-2xl border-2 border-rose-200 text-center shadow-sm">
                他の結婚相談所にはいない女性医師のカウンセラーと一緒に頑張っていきませんか？
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: Realities for Female Doctors */}
        <section className="space-y-8">
          <div className="bg-white rounded-3xl border-2 border-rose-200 p-8 sm:p-10 shadow-sm space-y-4">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-black text-rose-950 leading-snug">
              🌸 女性医師の婚活に立ちはだかる「リアルな現実」
            </h2>
            <p className="text-[20px]">
              女性医師のキャリア形成期は、まさに人生のパートナーを選ぶ時期と完全に合致しています。だからこそ、特有の環境とリスクを事前に把握することが重要です。
            </p>
          </div>

          <div className="bg-white rounded-3xl border-2 border-rose-200 p-8 sm:p-10 shadow-sm space-y-4">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-black text-rose-950 leading-snug">
              ① 職場の男性医師は「意外と早く、看護師と結婚する」という現実
            </h2>
            <p className="text-[20px]">
              病院という職場は、看護師、事務職、薬剤師など、圧倒的に女性が多い環境です。そのため、職場にいる貴重な独身の男性医師は、身近でサポートしてくれる看護師の方々と、驚くほど早いタイミングで誠実に結婚していきます。<br />
              「いつでも職場に出会いがある」と思ってキャリアに邁進していると、気づいたときには周囲の優秀な男性医師はすべて既婚者になっているというケースが多発しています。
            </p>
          </div>

          <div className="bg-white rounded-3xl border-2 border-rose-200 p-8 sm:p-10 shadow-sm space-y-4">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-black text-rose-950 leading-snug">
              ② 「同等以上」を求めるほど、日常の出会いの範囲は狭まる
            </h2>
            <p className="text-[20px]">
              経済的にも精神的にも自立しているからこそ、結婚相手の男性に対して「自分と対等に議論ができる知性」や「社会的地位」を求めるのは当然です。しかし、一般のマッチングアプリやカジュアルな大阪の婚活パーティーに、そのようなハイスペック男性はほとんど存在しません。仮に登録していても、身バレのリスクや、お相手の結婚に対する本気度の低さに疲弊してしまう女医の方が後を絶ちません。
            </p>
          </div>

          <div className="bg-white rounded-3xl border-2 border-rose-200 p-8 sm:p-10 shadow-sm space-y-4">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-black text-rose-950 leading-snug">
              ③ キャリアと「30代の壁」という時間的な制約
            </h2>
            <p className="text-[20px]">
              女医の婚活において、30代という年齢は大きな転機となります。ライフプラン（出産や育児）と、専門医としてのキャリアアップが重なる時期だからこそ、1年、あるいは1ヶ月のタイムロスも避けたいところです。当相談所では、あなたのライフプランから逆算し、時間を無駄にしない「超効率的な婚活戦略」をご提案します。
            </p>
          </div>
        </section>

        {/* SECTION 4: Special Premium Support */}
        <section className="bg-white rounded-3xl border-2 border-rose-200 p-8 sm:p-10 shadow-sm space-y-8">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-black text-rose-950 leading-snug border-b-2 border-rose-100 pb-4">
            🌸 少人数制・大阪梅田ドクターズだからこそ提供できる「特別サポート」
          </h2>
          <div className="-mx-8 sm:-mx-12 md:mx-0 md:float-right md:ml-8 mb-6 md:mb-2 w-[calc(100%+4rem)] sm:w-[calc(100%+6rem)] md:w-80">
            <Image
              src="/veteran-matchmaker-female-doctor-candid-support.jpg"
              alt="女性医師カウンセラーによるサポート"
              width={500}
              height={650}
              className="w-full h-auto rounded-none md:rounded-2xl object-cover shadow-md border-y md:border border-rose-100"
            />
          </div>

          <div className="space-y-6">
            <p className="font-extrabold text-2xl sm:text-3xl text-gray-900">
              あなたの立場とライフスタイルを完全理解した少人数制プレミアム体制
            </p>
            <p className="text-[20px]">
              当相談所は、会員数を極少数に限定した完全会員制です。大手の機械的なマッチングとは一線を画し、あなたの婚活を緻密かつ迅速にプロデュースします。
            </p>

            <div className="bg-rose-50/80 rounded-2xl p-6 sm:p-8 border border-rose-200 space-y-3">
              <h3 className="font-black text-rose-950 text-xl sm:text-2xl">
                ①【本音が話せる】現役女性医師によるLINE直接相談（無制限）
              </h3>
              <p className="text-[20px]">
                アドバイザーを務めるのは、あなたと同じ道を歩んできた大阪の現役女医です。「男性医師をお見合いで立てるべき？」「開業を見据えた相手選びは？」といった、同じ立場だからこそ分かる繊細な悩みやプライドの葛藤に、LINEで24時間いつでも、回数無制限で直接寄り添います。
              </p>
            </div>

            <div className="bg-rose-50/80 rounded-2xl p-6 sm:p-8 border border-rose-200 space-y-3">
              <h3 className="font-black text-rose-950 text-xl sm:text-2xl">
                ②【タイパ最優先】月1回の個別戦略面談
              </h3>
              <p className="text-[20px]">
                多忙な勤務医のスケジュールに合わせて、梅田のプライベート空間（またはオンラインZoom）にて作戦会議を行います。「何事も迅速に方向性を決定し、具体的な行動戦略（アクションプラン）に落とし込む」ことで、無駄なお見合いを徹底的に排除します。
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: Matching System */}
        <section className="bg-white rounded-3xl border-2 border-rose-200 p-8 sm:p-10 shadow-sm space-y-6">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-black text-rose-950 leading-snug border-b-2 border-rose-100 pb-4">
            🌸 提携大手の検索システム ✕ 最先端AIマッチング
          </h2>
          <p className="text-[20px] space-y-4">
            当相談所は、日本最大級の会員数を誇る大手結婚相談所連盟（IBJ）の正規加盟店です。<br />
            関西・全国の厳選されたハイスペック男性を含む「約10万人以上※」の巨大な会員検索システム（データベース）をそのままご利用いただけます。※IBJ公式発表データより<br />
            多忙を極める女性医師の婚活において、最大の敵は「お見合いのミスマッチによる時間の浪費」です。<br />
            当相談所では、この広大なデータベースに対して、最先端のAIマッチングシステムを掛け合わせて運用します。<br />
            過去の膨大な成婚データをディープラーニングにより徹底分析。過去の傾向から「あなたのような知性あふれる女性医師を、生涯の伴侶として心から望んでいるハイスペック男性（男性医師、経営者、大手企業幹部など）」をピンポイントでスクリーニング。<br />
            受諾確率の極めて高いお相手だけを厳選するため、効率重視のスマートな婚活が可能です。
          </p>
        </section>

        {/* SECTION 6: Pitfalls & Solutions */}
        <section className="bg-amber-50/40 rounded-3xl border-2 p-4 border-amber-300 sm:p-10 shadow-sm space-y-8">
          <div className="space-y-3 border-b-2 border-amber-300 pb-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-950 leading-tight">
              女性医師の婚活特有の「5つの落とし穴」と解決策
            </h2>
            <p className="text-[20px] font-medium text-amber-900">
              高い知性と専門性を持つ女性医師だからこそ陥りやすい「特有の落とし穴」が存在します。その具体的な問題と当相談所の戦術を解説します。
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-sm space-y-3 border border-amber-200">
              <h3 className="font-black text-amber-950 text-xl sm:text-2xl">
                🚨 落とし穴①：「男性医師を立てるべき」という呪縛での機会損失
              </h3>
              <ul className="list-disc list-inside space-y-2 text-[20px]">
                <li><strong>悩み:</strong> 「男はプライドが高いから、一歩引いて下手（したて）に出るべき」という一般論を意識しすぎて、お見合いやデートで自分を出せず、疲弊してしまう。</li>
                <li><strong>解決策（当相談所の戦術）:</strong> 現代の「同職婚」を希望する男性医師（特に将来の開業や共同経営、子供の教育を重視する層）が求めているのは、過剰なお世辞ではなく「対等に議論ができる知的なパートナーシップ」です。当相談所では、現役女医のアドバイザーが「あなたの知性を隠さずに、かつ男性医師のプライドを心地よく満たすスマートな対話術」を具体的に伝授します。</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-sm space-y-3 border border-amber-200">
              <h3 className="font-black text-amber-950 text-xl sm:text-2xl">
                🚨 落とし穴②：一般男性との「時間感覚・金銭リテラシー」の致命的なズレ
              </h3>
              <ul className="list-disc list-inside space-y-2 text-[20px]">
                <li><strong>悩み:</strong> 男性医師以外のハイスペック男性（大企業の幹部や士業など）とお見合いをした際、自身の多忙さ（当直、オンコール）への理解不足や、金銭感覚のズレにストレスを感じてしまう。</li>
                <li><strong>解決策（当相談所の戦術）:</strong> 医師のライフスタイルは、特殊です。当相談所の戦略面談では、条件検索の段階で「医師の勤務形態に対して高い理解とリスペクトを持つ男性」を徹底的にスクリーニング。最初から無駄なミスマッチを排除し、あなたの貴重なリソース（時間）を守ります。</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-sm space-y-3 border border-amber-200">
              <h3 className="font-black text-amber-950 text-xl sm:text-2xl">
                🚨 落とし穴③：無意識な「マウンティング」による関係硬化
              </h3>
              <ul className="list-disc list-inside space-y-2 text-[20px]">
                <li><strong>悩み:</strong> 医療への熱意や日々の臨床の癖で、お相手の意見に対して、つい「エビデンス」や「正論」で論破してしまい、交際が即終了する。</li>
                <li><strong>解決策（当相談所の戦術）:</strong> 病院内での論理的なコミュニケーションをプライベートに持ち込むと、お相手は「安らげない」と感じてしまいます。当相談所の面談では、ロジックではなく「感情の共有」を主軸にした交際術をフィードバックし、お相手に「この人といると心地いい」と思わせるプロファイリングを実施します。</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-sm space-y-3 border border-amber-200">
              <h3 className="font-black text-amber-950 text-xl sm:text-2xl">
                🚨 落とし穴④：「実家の医療家系ルール」を後回しにするリスク
              </h3>
              <ul className="list-disc list-inside space-y-2 text-[20px]">
                <li><strong>悩み:</strong> お互いのフィーリングが合い、成婚間近になった段階で、お相手の実家（親族が院長など）から「結婚後は同居してほしい」「家業を継ぐために特定のエリアに住んでほしい」などの条件を突きつけられ、破談になる。</li>
                <li><strong>解決策（当相談所の戦術）:</strong> 女性医師の結婚、特に同職婚において「お互いの実家の意向や将来のキャリアプラン」のすり合わせは最優先事項です。当相談所では、最初の戦略面談の時点であなたのご実家の希望を確認します。相手方の実家事情や将来の展望をお相手の相談所に確認し、最後の最後で時間が無駄になるリスクを回避します。</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-sm space-y-3 border border-amber-200">
              <h3 className="font-black text-amber-950 text-xl sm:text-2xl">
                🚨 落とし穴⑤：キャリアの「過渡期」に婚活をストップさせてしまう
              </h3>
              <ul className="list-disc list-inside space-y-2 text-[20px]">
                <li><strong>悩み:</strong> 「専門医の取得直前だから」「新しい病院への医局人事のタイミングだから」と、婚活を完全に後回しにしてしまい、気づけば35歳の壁を超えてしまう。</li>
                <li><strong>解決策（当相談所の戦術）:</strong> 多忙な過渡期だからこそ、「LINE直接相談（無制限）」と「月1回の戦略面談」によるサポートが活きます。あなたが診療に集中している間も、相談所が検索システムをフル稼働させ、スケジュール調整までを代行。キャリアと婚活を完全両立させ、最短ルートでの成婚へ導きます。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 7: Pricing */}
        <section className="bg-white rounded-3xl border-2 border-rose-200 p-4 sm:p-8 shadow-sm space-y-6">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-black text-rose-950 leading-snug border-b-2 border-rose-100 pb-4">
            🌸 大阪梅田ドクターズ結婚相談所の料金について
          </h2>
          
          <div className="bg-rose-50/80 p-6 sm:p-8 rounded-2xl border border-rose-200 space-y-4">
            <p className="font-black text-2xl sm:text-3xl text-rose-950">
              月会費：15,000円（税込）に含まれるプレミアムサポート
            </p>

            <ul className="list-disc list-inside space-y-3 text-[20px] text-gray-800">
              <li>提携大手（IBJ）の検索システム利用：完全無料（約10万人データベース）</li>
              <li>最先端AIマッチングを利用した仲人からのご紹介：完全無料</li>
              <li>現役女性医師とのLINE直接相談：回数無制限（24時間受付）</li>
              <li>月1回の定期戦略面談（対面・Zoom選択可）：進捗管理と翌月のアクションプラン策定</li>
              <li>お見合い調整・交際管理代行：多忙なあなたに代わりスケジュール調整全般をお任せ</li>
            </ul>
            <p className="text-sm font-medium text-gray-600 bg-white p-4 rounded-xl border border-rose-100">
              ※ご自身のスケジュールや状況に合わせて対面・オンライン面談を柔軟にご活用いただけます（事前予約制）。
            </p>
          </div>
        </section>

        {/* SECTION 8: Synergy */}
        <section className="bg-white rounded-3xl border-2 border-rose-200 p-8 sm:p-10 shadow-sm space-y-6">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-black text-rose-950 leading-snug border-b-2 border-rose-100 pb-4">
            🌸 ベテラン仲人の「客観的戦術」✕ 現役女性医師の「主観的リアル」が導く成婚
          </h2>
          <p className="text-[20px]">
            大阪梅田ドクターズ相談所の最大の強みは、データに基づく冷静な「外からの戦術」と、医療現場の医師しか知り得ない「内からのリアル」の完璧な融合にあります。<br />
            女性医師の婚活において最も重要なのは、スペックや知名度のみならず「相互のキャリアに対するリスペクト」です。<br />
            当相談所では、数々のハイスペック成婚を導いてきたベテラン仲人が、客観的なデータ分析と実家・両親対策のノウハウを駆使して、成婚への外堀を確実に埋めていきます。<br />
            さらに医療現場の最前線を熟知した現役の女性医師も伴走。勤務医の日常や当直、キャリアへの懸念やプライドを100%理解した上で、LINEによる直接相談でスマートな立ち振る舞いや心理戦術を伝授します。<br />
            無駄なすれ違いやプライドの衝突を未然に防ぎ、「最短期間での理想的なスピード成婚」が実現するのです。
          </p>
        </section>

        {/* SECTION 9: Summary & Call to Action */}
        <section className="bg-gradient-to-br from-rose-950 via-pink-950 to-amber-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-8 border border-rose-800/40">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-rose-200 tracking-tight leading-snug">
            🌸 最後に：妥協のない未来を、今ここから。
          </h2>

          <p className="font-extrabold text-xl sm:text-2xl lg:text-3xl text-center bg-white/10 p-6 rounded-2xl border border-white/20 text-amber-200 shadow-inner">
            【ベテラン仲人の戦術眼】 ✕ 【現役女性医師のリアルな視点】 ✕ 【最先端AI】
          </p>

          <p className="leading-relaxed text-white text-[20px]">
            あなたの知性とキャリアは、結婚における「最大の武器」です。<br />
            一般的な女性の婚活では敬遠されがちな「高い年収」や「多忙なキャリア」も、結婚相談所のフィールドでは、強い魅力として評価されます。「話の通じないリスク」をゼロにし、同じ地平で未来をデザインできる最高のパートナーを、最短ルートで見つけませんか？<br />
            完全審査制のため、病院や医局への身バレ対策も万全です。まずは、現役女医アドバイザーと直接つながる、匿名性の高い「LINE公式アカウント」より、お気軽にお問い合わせ・無料相談へお進みください。
          </p>
        </section>

      </div>
    </main>
  );
}