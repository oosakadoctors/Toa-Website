import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "男性医師の方へ｜大阪梅田ドクターズ結婚相談所",
  description:
    "「知性の融合」から始まる、最良のパートナーシップ。未来の医療経営と次世代の教育を共に担う、女医との「同職婚」、医療従事者との成婚という選択",

  keywords: [
    "男性医師 婚活",
    "女医 同職婚",
    "医師同士の結婚",
    "大阪梅田 ドクターズ結婚相談所",
    "医療従事者 成婚",
  ],

  alternates: {
    canonical: "/male-doctors-guide",
  },

  openGraph: {
    title: "男性医師の方へ｜大阪梅田ドクターズ結婚相談所",
    description:
      "「知性の融合」から始まる、最良のパートナーシップ。未来の医療経営と次世代の教育を共に担う、女医との「同職婚」、医療従事者との成婚という選択",
    type: "article",
    locale: "ja_JP",
    siteName: "大阪梅田ドクターズ結婚相談所",
    url: "/male-doctors-guide",
  },

  twitter: {
    card: "summary_large_image",
    title: "男性医師の方へ｜大阪梅田ドクターズ結婚相談所",
    description:
      "「知性の融合」から始まる、最良のパートナーシップ。未来の医療経営と次世代の教育を共に担う、女医との「同職婚」、医療従事者との成婚という選択",
  },
};

export default function MaleDoctorsGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'headline': '男性医師の方へ',
    'description': '「知性の融合」から始まる、最良のパートナーシップ。未来の医療経営と次世代の教育を共に担う、女医との「同職婚」、医療従事者との成婚という選択',
    'publisher': {
      '@type': 'Organization',
      'name': '大阪梅田ドクターズ結婚相談所',
    }
  };

  return (
    <main className="bg-[#faf8f5] min-h-screen text-[20px] leading-relaxed text-gray-800  px-1 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-4xl space-y-12">

        {/* HERO SECTION - Distinct Premium Blue Gradient */}
<section className="bg-gradient-to-br from-slate-900 via-sky-950 to-blue-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-8 border border-sky-700/50 overflow-hidden">
  <div className="inline-block bg-sky-500/20 text-sky-200 border border-sky-400/30 px-4 py-1.5 rounded-full text-lg font-bold tracking-wider text-[15px]">
    MALE DOCTORS
  </div>

  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
    男性医師の方へ
  </h1>

  {/* YELLOW TEXT */}
  <p className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-amber-300 leading-snug border-l-4 border-amber-400 pl-4 sm:pl-6 my-6">
    「知性の融合」から始まる、最良のパートナーシップ。<br />
    未来の医療経営と次世代の教育を共に担う、女医との「同職婚」、医療従事者との成婚という選択
  </p>

  {/* WHITE BACKGROUND AREA (Contains Image & Black Paragraph Text) */}
  <div className="-mx-8 -mb-8 sm:-mx-12 sm:-mb-12 p-8 sm:p-12 bg-white text-gray-900 rounded-b-3xl mt-8">
    {/* IMAGE */}
    <div className="-mx-8 sm:-mx-12 md:mx-0 md:float-right md:ml-8 mb-6 md:mb-2 w-[calc(100%+4rem)] sm:w-[calc(100%+6rem)] md:w-80">
      <Image
        src="/male-doctors-marriage-activity.jpg"
        alt="笑顔の現役内科女医がカウンセラーとして結婚相談所でサポートするイメージ"
        width={500}
        height={650}
        className="w-full h-auto rounded-none md:rounded-2xl object-cover shadow-md border-y md:border border-gray-100"
      />
    </div>

    {/* BLACK TEXT */}
    <p className="text-gray-800 text-[20px] leading-relaxed">
      確かな経済力、卓越した知性、そして互いのキャリアを最大化させる未来――。<br />
      現代の婚活において、男性医師が「同じ目線で語り合える女医」を人生の伴侶に選ぶのは、極めて合理的で前向きな決断です。<br />
      真に魅力的なハイスペック男女は、不特定多数が集まるアプリやカジュアルなパーティーには現れません。お互いの時間価値を理解し、プライバシーが完全に守られた特別な環境にこそ、理想の出会いは存在します。<br />
      「大阪梅田ドクターズ結婚相談所」は、医師同士・医療従事者同士の理想的な出会いを最速で実現するプレミアムな空間です。お互いの背景を1秒で理解し合える高い親和性をもって、生涯の伴侶であり、最強のビジネスパートナーとなるお相手をお引き合わせします。
    </p>

    {/* CLEAR FLOAT SO EVERYTHING STAYS neatly IN THE WHITE CONTAINER */}
    <div className="clear-both" />
  </div>
</section>

        {/* SECTION 2: Message from Female Doctor Counselor */}
<section className="bg-rose-50/70 rounded-3xl border-2 border-rose-300 p-4 sm:p-4 shadow-sm space-y-6">
  {/* SECTION HEADER */}
  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-rose-950 tracking-tight leading-tight flex items-center gap-3">
    ❤️女性医師カウンセラーからのメッセージ❤️
  </h2>

  {/* CONTENT CONTAINER WITH FLOATING IMAGE */}
  <div className="text-gray-800 text-[20px] leading-relaxed">
    {/* SMALL SQUARE IMAGE (Floated Top-Left) */}
    <img
      src="/doctor1.jpg"
      alt="女性医師カウンセラー"
      className="float-left mr-6 mb-4 w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-2xl border-2 border-rose-200 shadow-md"
    />

    <p className="mb-5">
      はじめまして。日々責任ある立場で真摯に患者様と向き合う毎日だと思います。職業的にも社会的にも活躍される一方、プライベートの充実も長い人生でとても大切になります。
    </p>

    <p className="mb-5">
      最近はハイスペックな男性こそ、お相手の職業、年収、育ちなどをしっかり鑑みる傾向にあります。
    </p>

    <p className="mb-5">
      医師は体が資本の職業ですから、いざ万が一というときに、自分を支えてくれるパートナーの存在は心強いものとなります。大阪梅田ドクターズ結婚結婚相談所では、女性として魅力的だなと思うような恋愛の要素だけではなく、どんなお相手となら理想の家庭生活、未来が描けるのかを人生の先輩としてご相談させていただきます。ご両親のご意見も、あなたの選択に価値ある助言であることも多いです。
    </p>

    <p className="mb-5">
      両親ではなく他人だから話せる本音もあることでしょう。
    </p>

    <p className="mb-5">
      私は現在、医療法人の理事、および病院での勤務医をしています。国際学会や論文発表、認定医や国内多数の学会発表経験、参加経験、アメリカの病院やオーストラリアでの生活だけではなく、結婚、出産、子育てを終え、人生の後半を迎え様々な人生の経験をした医師の先輩として様々な場面であなたのお役にたてると信じています。私の経験のすべてが、若い方々への形のない贈り物として皆様の人生の灯火となりますように。<br />
      あなたが年老いた時、また若い方に人生の経験を送り、世界が素敵な贈り物で循環しますように。
    </p>

    {/* CLEAR FLOAT SO THE CALLOUT BOX STAYS BELOW EVERYTHING */}
    <div className="clear-both pt-2">
      <p className="font-extrabold text-2xl sm:text-3xl text-rose-900 bg-white p-6 rounded-2xl border border-rose-200 text-center shadow-sm">
        他の結婚相談所にはいない女性医師のカウンセラーと一緒に頑張っていきませんか？
      </p>
    </div>
  </div>
</section>

        {/* SECTION 3: 3 Pillars */}
        <section className="space-y-8">
          <div className="bg-white rounded-3xl border-2 border-sky-300 p-8 sm:p-10 shadow-sm space-y-4">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-black text-sky-950 leading-snug">
              🔵キャリアと経営を加速させる「同職婚」の最適解
            </h2>
            <p className="text-[20px]">
              将来を見据え、同じ医師としてのビジョンを持つ女性との結婚を希望する男性医師が今、非常に増えています。世帯年収の安定はもちろん、次世代への教育方針の共有、さらにはクリニックの開業や共同経営において、同じレベルのリテラシーで未来をデザインできる唯一無二の存在です。大阪梅田ドクターズ結婚相談所は、このハイスペック同士のシナジーを最大化する独自のネットワークを構築しています。
            </p>
          </div>

          <div className="bg-white rounded-3xl border-2 border-sky-300 p-8 sm:p-10 shadow-sm space-y-4">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-black text-sky-950 leading-snug">
              🔵説明不要の安心感が生む、ストレスフリーな交際
            </h2>
            <p className="text-[20px]">
              当直やオンコール、急な手術や論文執筆など、医療の最前線に立つあなたのライフスタイルを、当相談所の女医カウンセラーは最初から100%理解しています。過度な説明や遠慮は一切不要です。限られた時間の中で、お互いの仕事を深く尊重し合いながら、スマートに交際を進めることができます。
            </p>
          </div>

          <div className="bg-white rounded-3xl border-2 border-sky-300 p-8 sm:p-10 shadow-sm space-y-4">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-black text-sky-950 leading-snug">
              🔵厳格な秘密保持と、大阪を拠点とする人脈
            </h2>
            <p className="text-[20px]">
              プライバシーの保護は、ドクターの婚活において最優先されるべき事項です。当相談所では完全審査制と厳重なプライバシー管理を徹底。さらに、関西の国立大学医学部附属病院、主要医科大学や大手医療法人などに勤務する医師との人脈を活かし社会的地位と信頼性の高いハイスペック男女のご紹介もしています。<br />
              <span className="text-base text-gray-500 font-bold">【ご紹介は条件やタイミングもありますので、必ずしも確約できるわけではありません】</span>
            </p>
          </div>
        </section>

        {/* SECTION 4: Special Premium Support */}
        <section className="bg-white rounded-3xl border-2 border-sky-300 p-8 sm:p-10 shadow-sm space-y-8">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-black text-sky-950 leading-snug border-b-2 border-sky-100 pb-4">
            🔵大阪梅田ドクターズ結婚相談所【特別プレミアムサポート】
          </h2>
            <div className="-mx-8 sm:-mx-12 md:mx-0 md:float-right md:ml-8 mb-6 md:mb-2 w-[calc(100%+4rem)] sm:w-[calc(100%+6rem)] md:w-80">
  <Image
    src="/veteran-matchmaker-female-doctor-candid-support.jpg"
    alt="笑顔の現役内科女医がカウンセラーとして結婚相談所でサポートするイメージ"
    width={500}
    height={650}
    className="w-full h-auto rounded-none md:rounded-2xl object-cover shadow-md border-y md:border border-gray-100"
  />
</div>

          <div className="space-y-6">
            <p className="font-extrabold text-2xl sm:text-3xl text-gray-900">
              少人数制だからこそ実現する「2つの絶対的サポート」
            </p>
            <p className="text-[20px]">
              当相談所は、会員数を極少数に限定した完全会員制です。大手の機械的なマッチングとは一線を画し、あなたの婚活を緻密かつ迅速にプロデュースします。
            </p>

            <div className="bg-sky-50/80 rounded-2xl p-6 sm:p-8 border border-sky-200 space-y-3">
              <h3 className="font-black text-sky-950 text-xl sm:text-2xl">
                ①【いつでも、即座に】現役女医とのLINE直接相談（無制限）
              </h3>
              <p className="text-[20px]">
                婚活中の些細な疑問や、お相手の心理が読めない時、24時間いつでもLINEで直接ご相談いただけます。アドバイザーを務めるのは、医療現場とハイスペック婚活のリアルを知り尽くした現役の女医です。<br />
                同職だからこそわかる「その時、お相手の女医がどう感じたか」「どう返信すればスマートか」を、現場目線で即座にフィードバック。多忙なあなたに、タイムロスを与えません。
              </p>
            </div>

            <div className="bg-sky-50/80 rounded-2xl p-6 sm:p-8 border border-sky-200 space-y-3">
              <h3 className="font-black text-sky-950 text-xl sm:text-2xl">
                ②【ブレない方向性】会議室での戦略面談
              </h3>
              <p className="text-[20px]">
                当相談所では、梅田のプライベートな会議室（またはオンライン）にて、ご希望に応じて月最大2回までの徹底的な戦略面談を行います。<br />
                婚活において最も重要なのは「何事も迅速に方向性を決定すること」。そしてその決定に基づいた「具体的な行動戦略（アクションプラン）」の策定です。PDCAサイクルを高速で回し、最短期間での成婚へ導きます。
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: Matching System */}
        <section className="bg-white rounded-3xl border-2 border-sky-300 p-8 sm:p-10 shadow-sm space-y-6">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-black text-sky-950 leading-snug border-b-2 border-sky-100 pb-4">
            🔵提携大手結婚相談所の検索システム ✕ 最先端AIマッチング
          </h2>
          <p className="text-[20px] space-y-4">
            当相談所は、日本最大級の会員数を誇る大手結婚相談所連盟（IBJ）の正規加盟店です。<br />
            これにより、梅田周辺の関西エリアはもちろん、全国の厳選されたハイスペック男女「約11万人以上※」が登録する、業界最高峰の巨大な会員検索システム（データベース）をそのままご利用いただけます。※IBJ2026年公式発表より<br />
            多忙を極める男性医師の婚活において、最大の敵は「お見合いのミスマッチによる時間の浪費」です。<br />
            当相談所では、この広大なデータベースに対して、最先端のAIマッチングシステムを掛け合わせて運用します。<br />
            過去の膨大な成婚データ（年齢、学歴、年収、価値観、行動パターンなど）をディープラーニングにより徹底分析。AIがお相手側の「潜在的な好みの傾向」までを割り出します。<br />
            膨大な母数の中から、「最初からお互いにお見合いを受諾する確率が極めて高い、真に相性の良い女医・ハイスペック女性」だけをピンポイントで抽出するため、闇雲に多くのお相手と会う必要がなくなります。
          </p>
        </section>

        {/* SECTION 6: Pitfalls & Solutions */}
        <section className="bg-amber-50/30 rounded-3xl border-2 p-4 border-amber-200 sm:p-10 shadow-sm space-y-8">
          <div className="space-y-3 border-b-2 border-amber-200 ">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-950 leading-tight">
              男性医師の婚活特有の「3つの落とし穴」と解決策
            </h2>
            <p className="text-[20px] font-medium text-amber-900">
              高い知性と社会的地位を持つ医師だからこそ、一般的な婚活のセオリーが通用せず、無駄に時間を浪費してしまう「特有の落とし穴」が存在します。その解決方法を専門的に解説します。
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-3 sm:p-2 shadow-sm space-y-3">
              <h3 className="font-black text-amber-950 text-xl sm:text-2xl">
                落とし穴①：「多忙」を理由にしたフェードアウト
              </h3>
              <ul className="list-disc list-inside space-y-2 text-[20px]">
                <li><strong>悩み:</strong> 当直や急なオペでデートのリスケが続き、お相手の熱量が下がってしまう。</li>
                <li><strong>解説:</strong> 医師同士の婚活であっても、事後報告の謝罪だけでは関係は維持できません。「不規則な生活」を前提とした、事前のリスクヘッジと代替案の提示（クイックなオンライン面会など）の具体的戦術が必要です。当相談所が、多忙を言い訳にしないスマートな交際管理をサポートします。</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl  p-3 sm:p-8  shadow-sm space-y-3">
              <h3 className="font-black text-amber-950 text-xl sm:text-2xl">
                落とし穴②：「世間体とプライド」による身動きの悪さ
              </h3>
              <ul className="list-disc list-inside space-y-2 text-[20px]">
                <li><strong>悩み:</strong> 医局や周囲の目が気になり、大胆なアプローチや自己開示ができない。</li>
                <li><strong>解説:</strong> 守りに入るあまり、お相手に「自分に興味がないのでは」と誤解されるケースが多発します。当相談所では、完全非公開での活動を担保した上で、お相手の心を確実に開く「スマートかつ誠実な自己表現のステップ」を伝授します。</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl  p-3 sm:p-8 0 shadow-sm space-y-3">
              <h3 className="font-black text-amber-950 text-xl sm:text-2xl">
                落とし穴③：「条件重視」でプロファイリングを見誤る
              </h3>
              <ul className="list-disc list-inside space-y-2 text-[20px]">
                <li><strong>悩み:</strong> 同職婚（女医）を希望するあまり、スペックや経歴ばかりに目が向き、人間性やライフスタイルのすり合わせを後回しにしてしまう。</li>
                <li><strong>解説:</strong> 開業ビジョンや教育方針が一致していても、日常の些細な生活リテラシーのズレで破談になるケースは少なくありません。当相談所の戦略面談では、条件の奥にある「生活者としての相性」を鋭く分析し、見落としがちなリスクを事前に排除します。</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl  p-3 sm:p-8 shadow-sm space-y-3">
              <h3 className="font-black text-amber-950 text-xl sm:text-2xl">
                落とし穴④：「両親の希望」との乖離による直前での破談
              </h3>
              <ul className="list-disc list-inside space-y-2 text-[20px]">
                <li><strong>悩み:</strong> お互いの気持ちは固まり成婚間近になった段階で、実家の両親（特に父親である院長や母親）からの反対に遭い、白紙に戻ってしまう。</li>
                <li><strong>解説:</strong> 医師の結婚、特に家系やクリニックの継承が絡む場合、当事者二人だけの合意では成立しません。「お相手の出身校や専門科」「実家の家柄」「将来の同居や開業への理解度」など、親族側が求める無言の条件が存在します。当相談所では、最初の戦略面談の時点で「ご実家の意向や将来の承諾ライン」をあらかじめヒアリング。親族からの祝福を得られるお相手選びの基準を初期段階から設定し、最後の最後で時間が無駄になるリスクを完璧に回避します</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl  p-3 sm:p-8  shadow-sm space-y-3">
              <h3 className="font-black text-amber-950 text-xl sm:text-2xl">
                落とし穴⑤：プロ同士ゆえの「プライドの衝突」と主導権争い
              </h3>
              <ul className="list-disc list-inside space-y-2 text-[20px]">
                <li><strong>悩み:</strong> 医療への熱意やキャリア論、あるいは些細な日常の選択において、お互いのプライドがぶつかり合い、関係が冷え切ってしまう。</li>
                <li><strong>解説:</strong> お互いが第一線で活躍する医師である場合、無意識に「自分の正しさ」を主張しがちです。特に男性医師側が「立てられたい」という気持ちを強く持ちすぎたり、女性医師側が「妥協したくない」と強く出たりすると、一瞬で破談を迎えます。当相談所では、現役女医のアドバイザーが「女医が男性医師に求めている本当の配慮」と「スマートな譲り合いの技術」を伝授。お互いのプライドを傷つけず、「2人の知性を掛け合わせて1+1を3にする」ためのコミュニケーション戦術をアドバイスします。</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8  shadow-sm space-y-3">
              <h3 className="font-black text-amber-950 text-xl sm:text-2xl">
                落とし穴⑥：「家事・育児の分担」をロジックだけで解決しようとする
              </h3>
              <ul className="list-disc list-inside space-y-2 text-[20px]">
                <li><strong>悩み:</strong> 将来の生活設計において「外注すればいい」「お互い一歩も引けない」と効率やロジックだけで割り切ろうとし、情緒的な結びつきが薄れてしまう。</li>
                <li><strong>解説:</strong> 忙しい生活を送る2人だからこそ、合理的な役割分担は不可欠です。しかし、条件交渉のような話し合いばかりが先行すると、結婚生活に対する温かみが薄れてしまいます。「多忙な2人がどうすれば『家庭』という安らぎの場を維持できるか」、具体的なライフスタイルのシミュレーションを戦略面談で一緒に作り上げていきます。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 7: Pricing */}
        <section className="bg-white rounded-3xl border-2 border-sky-300 p-4  shadow-sm space-y-6">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-black text-sky-950 leading-snug border-b-2 border-sky-100 ">
            🔵大阪梅田ドクターズ結婚相談所の料金について
          </h2>
          
          <div className="bg-sky-50/80 p-6 sm:p-8 rounded-2xl border border-sky-200 space-y-4">
            <p className="font-black text-2xl sm:text-3xl text-sky-950">
              月会費：15,000円（税込）に含まれるプレミアムサポート
            </p>

              {/* FULL-WIDTH HERO IMAGE WITH PRIORITY */}

            <ul className="list-disc list-inside space-y-3 text-[20px] text-gray-800">
              <li>提携大手（IBJ）の検索システム利用：完全無料（約11万人データベース）</li>
              <li>最先端AIマッチングを利用した仲人からのご紹介：完全無料</li>
              <li>現役女性医師とのLINE直接相談：回数無制限</li>
              <li>月1回の定期戦略面談（対面・Zoom選択可）：進捗管理と翌月のアクションプラン策定</li>
              <li>お見合い調整・交際管理代行：スケジュール調整はすべて相談所にお任せ</li>
            </ul>
            <p className="text-sm font-medium text-gray-600 bg-white p-4 rounded-xl border border-sky-100">
              ※「今月は勝負の月なので対面でじっくり話したい」という場合は、月2回まで柔軟に面談枠を拡張可能です（事前予約制・追加費用なし）。
            </p>
          </div>
        </section>

        {/* SECTION 8: Synergy */}
        <section className="bg-white rounded-3xl border-2 border-sky-300 p-8 sm:p-10 shadow-sm space-y-6">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-black text-sky-950 leading-snug border-b-2 border-sky-100 pb-4">
            🔵ベテラン仲人の「客観的戦術」✕ 現役女性医師の「主観的リアル」が導く成婚
          </h2>
          <p className="text-[20px]">
            大阪梅田ドクターズ相談所の最大の強みは、データに基づく冷静な「外からの戦術」と、医療現場の医師しか知り得ない「内からのリアル」の完璧な融合にあります。<br />
            医師同士の婚活（同職婚）において最も重要なのは、スペックの裏側にある「ライフスタイルの一致」です。<br />
            当相談所では、数々のハイスペック成婚を導いてきたベテラン仲人が、客観的なデータ分析と実家・両親対策のノウハウを駆使して、成婚への外堀を確実に埋めていきます。<br />
            さらに医療現場の最前線を熟知した現役の女性医師も伴走。多忙を極める勤務医の日常やオンコールの緊張感、医師のキャリアに対する本音や繊細な心理を100%理解した上で、LINEによる直接相談で2人の距離感をスマートにコントロールします。<br />
            無駄なすれ違いやプライドの衝突を未然に防ぎ、「最短期間での医師同士のスピード成婚」が実現するのです。
          </p>
        </section>

        {/* SECTION 9: Summary */}
        <section className="bg-gradient-to-br from-sky-950 via-slate-900 to-blue-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-8 border border-sky-700/50">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-sky-200 tracking-tight leading-snug">
            🔵まとめ。なぜ、当相談所ならうまくいくのか？
          </h2>

          <p className="font-extrabold text-xl sm:text-2xl lg:text-3xl text-center bg-white/10 p-6 rounded-2xl border border-white/20 text-amber-300 shadow-inner">
            【ベテラン仲人の戦術眼】 ✕ 【現役女性医師のリアルな視点】 ✕ 【最先端AI】
          </p>

          <p className="leading-relaxed text-white text-[20px]">
            医師の婚活には、一般的なマニュアルは一切通用しません。<br />
            当相談所には、数々のハイスペック成婚を導いてきた「百戦錬磨のベテラン仲人」と、医療現場の最前線を知り尽くした「現役の女性医師アドバイザー」、そして「提携大手の巨大インフラとAI」が揃っています。この3つの要素がシンクロするからこそ、他の相談所には真似できない「医師同士のスピード成婚」が実現します。<br />
            ベテラン仲人が培ってきた「成婚しやすいお相手の行動パターン」の客観的なデータ分析と、実家・両親対策の豊富なノウハウ。そこへ、現役女性医師による「ドクター特有の心理・ライフスタイル」という内側からの深い理解を掛け合わせます。<br />
            客観データによる冷徹なまでの具体戦術、同職だからこそ通じ合う深い心理理解、アンドAIによる超高確率なスクリーニング。このトリプルハイブリッド体制が、あなたの貴重な時間を無駄にすることなく、最短での成婚へと導きます。
          </p>
        </section>

      </div>
    </main>
  );
}