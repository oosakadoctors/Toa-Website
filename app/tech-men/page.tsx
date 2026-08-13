import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "IT・SE・理系男性のロジカル婚活 | 大阪梅田ドクターズ結婚相談所",
  description:
    "システムエンジニア、IT企業勤務、技術職など理系男性への大阪梅田ドクターズ結婚相談所のロジカル婚活、タイパ良いスマート婚活、手厚いサポートなどの解説",
  alternates: {
    canonical: "/tech-men",
  },
  authors: [
    { name: "現役の女性内科医師" },
    { name: "男性ベテラン仲人" },
  ],
  creator: "大阪梅田ドクターズ結婚相談所",
  publisher: "大阪梅田ドクターズ結婚相談所",
};

export default function TechMenStrategyPage() {
  return (
    <div className="relative min-h-screen w-full py-6 sm:py-10 px-3 sm:px-6 overflow-hidden text-[18px]">
      {/* --- Full Page Background Image --- */}
      <img 
        src="/champagne1.png" 
        alt="Background texture" 
        className="fixed inset-0 w-full h-full object-cover object-center -z-10"
      />

      {/* --- Main Stacked Cards Container --- */}
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* --- HERO HEADER CARD --- */}
        <div className="relative bg-white/95 backdrop-blur-md shadow-2xl border border-sky-100 rounded-2xl sm:rounded-3xl p-4 sm:p-8">
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            
            <span className="inline-block px-3.5 py-1 bg-sky-100 text-sky-800 rounded-full text-xs sm:text-sm font-black uppercase tracking-widest border border-sky-200">
              FOR SE & IT ENGINEERS
            </span>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug tracking-tight">
              IT企業勤務のSE・プログラマー・インフラエンジニアなどの方へ
            </h1>

            {/* --- HERO IMAGE CONTAINER --- */}
            <section className="w-full">
              <div className="w-full max-w-4xl mx-auto">
                <div className="relative w-full aspect-[1/1] overflow-hidden rounded-2xl shadow-md">
                  <Image
                    src="/good-future-together.jpg"
                    alt="seや技術者の理系男性が大阪梅田で婚活を始めるイメージ写真"
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    loading="eager" 
                    fetchPriority="high"
                    priority={false}
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAAEAAQBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA="
                  />
                </div>
              </div>
            </section>

            <p className="text-sky-700 font-bold text-[18px] sm:text-[19px] leading-relaxed max-w-2xl mx-auto">
              感情ではなく「実績データ」で選ぶ、男のロジカル婚活。
            </p>

            <div className="w-16 h-1 bg-sky-500 mx-auto rounded-full" />
          </div>
        </div>

        {/* --- STATS & PERFORMANCE CARD --- */}
        <div className="bg-white/95 backdrop-blur-md shadow-2xl border border-sky-100 rounded-2xl sm:rounded-3xl p-4 sm:p-8 space-y-6">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 border-l-4 border-sky-500 pl-3 leading-relaxed">
            【3ヶ月以内お見合い率96%】【1年以内の成婚率82%】<br className="hidden sm:inline" />
            成果にこだわる大阪梅田ドクターズ結婚相談所
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <section className="w-full lg:col-span-5">
              <div className="w-full max-w-4xl mx-auto my-1">
                <div className="relative w-full aspect-[1/1] overflow-hidden rounded-2xl shadow-md">
                  <Image
                    src="/stats-image.jpg"
                    alt="データと成果にこだわる結婚相談所のイメージ"
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    priority={false}
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAAEAAQBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA="
                  />
                </div>
                              <p className="text-xs text-slate-500 pt-1">
                ※成婚率、お見合い成立率：2025年9月から2026年8月までの社内調査統計による
              </p>
              </div>
            </section>

            <div className="lg:col-span-7 space-y-4 text-slate-700 leading-relaxed">
              <p>
                出会えない焦りや、無駄な時間は一切取らせません。当相談所では、女医によるデータ分析とプロの戦略的なサポートにより、入会から3ヶ月以内に96%の男性がお見合いに成功。さらに、82%の方が1年以内に理想のパートナーと成婚退会しています。
              </p>
              <p className="font-bold text-sky-800 bg-sky-50 p-3.5 rounded-lg border border-sky-200">
                「結果」を求めるビジネスパーソンのための最短ルートがここにあります。
              </p>
            </div>
          </div>
        </div>

        {/* --- MALE COUNSELOR SECTION CARD --- */}
        <div className="bg-white/95 backdrop-blur-md shadow-2xl border border-sky-100 rounded-2xl sm:rounded-3xl p-4 sm:p-8 space-y-6">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 border-l-4 border-sky-500 pl-3 leading-relaxed">
            業界では珍しい「男性仲人」がいる相談所。<br />
            男同士だから、かっこ悪い本音も全部話せる。
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-4 text-slate-700 leading-relaxed">
              <p>
                結婚相談所のカウンセラーは女性が多く、そもそもカウンセラーに本音を言えない男性は少なくありません。当相談所には、婚活業界では珍しい「男性のベテラン仲人」がいます。
              </p>
              <p>
                私は学生時代からスポーツが大好きで、中身は少し熱めの体育会系です。でも、普段のお悩みをお聞きするときは、とことん穏やかで聞き役に徹します。私自身、高齢の両親や親族を大切にしているので、あなたの結婚への想いにも全力で寄り添います。
              </p>
              <p className="bg-sky-50 p-3.5 rounded-lg border border-sky-200 font-bold text-slate-900">
                女性カウンセラーには話しにくい、男ならではのかっこ悪い本音も全部ぶつけてください。チームの監督のように、あなたが素敵なお相手と結ばれるまで、すぐ隣で一緒に走り抜けます。
              </p>
              <p className="text-sky-800 font-bold">
                恋愛経験がなくても、リードできなくても大丈夫。男同士、まずは気楽にお話ししましょう！
              </p>
            </div>

            <section className="w-full lg:col-span-5">
              <div className="w-full max-w-4xl mx-auto my-1">
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
                  <Image
                    src="/male-counselor.jpg"
                    alt="頼れる男性仲人カウンセラーのイメージ"
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    priority={false}
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAAEAAQBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA="
                  />
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* --- LOGICAL MARRIAGE TAG TEAM CARD --- */}
        <div className="bg-white/95 backdrop-blur-md shadow-2xl border border-sky-100 rounded-2xl sm:rounded-3xl p-4 sm:p-8 space-y-6">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 border-l-4 border-sky-500 pl-3 leading-relaxed">
            「恋愛経験が少ない…」そんな30代男性が6ヶ月で成婚できるロジカル婚活
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <section className="w-full lg:col-span-5">
              <div className="w-full max-w-4xl mx-auto my-1">
                <div className="relative w-full aspect-[1/1] overflow-hidden rounded-2xl shadow-md">
                  <Image
                    src="/logical-tag-team.jpg"
                    alt="女性医師とベテラン仲人の最強タッグイメージ"
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    priority={false}
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAAEAAQBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA="
                  />
                </div>
              </div>
            </section>

            <div className="lg:col-span-7 space-y-4 text-slate-700 leading-relaxed">
              <p className="text-lg font-bold text-slate-900">
                「女性の気持ちは天気のように変わるから、どうしていいか分からない」
              </p>
              <p>
                会話無料もうまくない。リードなんてしたことない。でも、大丈夫！
              </p>

              <div className="bg-sky-50/90 p-4 rounded-xl border border-sky-200 text-slate-900 font-bold">
                【女性医師】×【20年のベテラン仲人】の最強タッグが、あなたの婚活を完全バックアップ
              </div>

              <p>
                女性の心が読めなくて戸惑うのも、気の利いたトークでリードできなくても大丈夫！チャラチャラしたテクニックはいりません。結婚相談所で最後に選ばれるのは、あなたのような誠実な男性です。
              </p>
              <p>
                当相談所では、会話の苦手意識をなくす模擬お見合いや、女性医師により、デートごとにお相手女性の気持ちをわかりやすく解説。たくさん喋らなくても大切なポイントさえ押さえれば婚活は上手くいきます！
              </p>
            </div>
          </div>

          {/* Counselor Message Callout */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3 text-slate-700">
            <h3 className="text-lg font-bold text-slate-900 border-l-4 border-sky-500 pl-2">
              ベテラン仲人からの熱いメッセージ
            </h3>
            <p className="text-sky-800 font-bold">
              「会話が苦手でも、気の利いたリードができなくても大丈夫。あなたの『誠実さ』を、私がすぐ隣で支えます」
            </p>
            <p>
              20年間、たくさんの男性たちと涙あり笑いありで一緒に歩んできました。デートのお店選びに迷ったときも、LINEの返信に困ったときも、「どうしよう」と思ったらすぐに私を頼ってください。一つずつゆっくり解決していきましょう。
            </p>
            <p className="font-bold text-slate-900">
              あなたの良さが素敵なお相手にちゃんと届くように、私がずっと隣で味方になります！
            </p>
          </div>
        </div>

        {/* --- TIME PERFORMANCE (TIME-PA) CARD --- */}
        <div className="bg-white/95 backdrop-blur-md shadow-2xl border border-sky-100 rounded-2xl sm:rounded-3xl p-4 sm:p-8 space-y-6">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 border-l-4 border-sky-500 pl-3 leading-relaxed">
            メッセージの駆け引き、既読スルー、ドタキャンは一切なし。<br />
            忙しいビジネスマンのための、無駄をゼロにした「タイパ至上主義」の婚活。
          </h2>

            <section className="w-full lg:col-span-5">
              <div className="w-full max-w-4xl mx-auto my-1">
                <div className="relative w-full aspect-[1/1] overflow-hidden rounded-2xl shadow-md">
                  <Image
                    src="/smart-meeting.jpg"
                    alt="タイパ至上主義のお見合い・スマートな日程調整イメージ"
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    priority={false}
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAAEAAQBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA="
                  />
                </div>
              </div>
            </section>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-4 text-slate-700 leading-relaxed">
              <p className="text-lg font-bold text-sky-800">
                お見合いが成立すれば「確実に会える」スマートな仕組み。
              </p>
              <p>
                マッチングアプリで何通もメッセージを重ね、やっとの思いで取り付けたデートがドタキャンに終わる――。会えるかわからない人とメッセージやり取りを続けるのがしんどい。。そんな不毛な時間にあなたの労力を使わないでください。
              </p>
              <p>
                大阪梅田ドクターズ相談所では、お見合いが成立した時点で「100%出会うこと」が確定します。会うまでにやり取りする労力は不要です。
              </p>
              <p className="bg-sky-50 p-3.5 rounded-lg border border-sky-200 text-slate-900 font-medium">
                面倒な日程調整や場所選びは、すべて私たち仲人が代行。あなたは指定された日時に、指定された場所へ向かうだけです。
              </p>
              <p>
                さらに「3ヶ月間の交際ルール」があるため、だらだらと関係が長引くリスクもありません。最短ルートで効率よく、理想のパートナーと出会える環境がここにあります。
              </p>
            </div>

          </div>
        </div>

        {/* --- 20s WOMEN MARKET STRATEGY CARD --- */}
        <div className="bg-white/95 backdrop-blur-md shadow-2xl border border-sky-100 rounded-2xl sm:rounded-3xl p-4 sm:p-8 space-y-6">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 border-l-4 border-sky-500 pl-3 leading-relaxed">
            「結婚相談所は年齢層が高い」は大誤解。<br />
            今、最もタイパを求める「20代の真剣婚活女性」が全国に約10,000人登録中！
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <section className="w-full lg:col-span-5">
              <div className="w-full max-w-4xl mx-auto my-1">
                <div className="relative w-full aspect-[1/1] overflow-hidden rounded-2xl shadow-md">
                  <Image
                    src="/young-women-market.jpg"
                    alt="20代真剣婚活女性の登録増加イメージ"
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    priority={false}
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAAEAAQBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA="
                  />
                </div>
              </div>
            </section>

            <div className="lg:col-span-7 space-y-4 text-slate-700 leading-relaxed">
              <p className="font-bold text-sky-800">
                20代女性の入会数が急増中。マッチングアプリから「嘘のない安全な出会い」へ乗り換えています。
              </p>
              <p>
                現在は、20代後半から活動を始める女性が非常に増えています。当相談所が加盟する日本最大級のネットワークには、約10,000人※もの20代女性が登録しています。
              </p>
              <p>
                身元不明な相手の多いアプリとは違い、全員が「独身証明書」や「身分証」を100%提出している、結婚への本気度が高い女性ばかりです。
              </p>
              <p className="bg-sky-50 p-3.5 rounded-lg border border-sky-200 text-slate-900 font-bold">
                30代前半の男性にとって、20代女性と最も高確率・安全に出会える場所が、実はここ（結婚相談所）なのです。
              </p>
              <p className="text-xs text-slate-500">
                ※日本結婚相談所連盟（IBJ）の登録会員数（2026年時点の最新データ）です。
              </p>
            </div>
          </div>
        </div>

        {/* --- TOP 5 SUPPORT FEATURES CARD --- */}
        <div className="bg-white/95 backdrop-blur-md shadow-2xl border border-sky-100 rounded-2xl sm:rounded-3xl p-4 sm:p-8 space-y-6">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 border-l-4 border-sky-500 pl-3 leading-relaxed">
            納得の充実サポートTOP5
          </h2>
          <p className="text-slate-700 font-medium">
            初心者でも安心。充実のサポート。嬉しいお見合い模擬練習。
          </p>

          <section className="w-full">
            <div className="w-full max-w-4xl mx-auto my-1">
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl shadow-md">
                <Image
                  src="/support-top5.jpg"
                  alt="納得の充実サポートTOP5イメージ"
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority={false}
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAAEAAQBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA="
                />
              </div>
            </div>
          </section>

          <div className="space-y-4 text-[18px]">
            {/* Support 1 */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
              <h3 className="font-bold text-slate-900 text-sky-800">
                ①【書類集めの完全代行・サポート】
              </h3>
              <p className="text-slate-700 leading-relaxed">
                入会時に一番面倒な「独身証明書」や「住民票」の手続きをサポートします。役所へ行かなくても、スマホから郵送で一発請求できる「手順シート」をお渡しするので、忙しい方でも3日で書類が揃います。
              </p>
            </div>

            {/* Support 2 */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
              <h3 className="font-bold text-slate-900 text-sky-800">
                ②【女性医師監修・女性心理のロジック解説】
              </h3>
              <p className="text-slate-700 leading-relaxed">
                「なぜLINEが既読スルーされるのか」「女性のあの態度のホンネは？」といった疑問を、データと心理学からロジカルに解説します。次に取るべき行動が明確に分かります。
              </p>
            </div>

            {/* Support 3 */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
              <h3 className="font-bold text-slate-900 text-sky-800">
                ③【20年仲人の買い物同行＆写真プロデュース】
              </h3>
              <p className="text-slate-700 leading-relaxed">
                お見合いやデートで女性に「絶対に外さない」服装を、仲人がアドバイスします。髪型や眉毛の整え方まで指定し、プロのカメラマンと最高の一枚を撮影します。
              </p>
            </div>

            {/* Support 4 */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
              <h3 className="font-bold text-slate-900 text-sky-800">
                ④【会話の不安をゼロにする「模擬お見合い」】
              </h3>
              <p className="text-slate-700 leading-relaxed">
                女性と話すのが苦手な方のために、本番そっくりの模擬お見合い（ロープレ）を実施します。合格ラインに達するまで練習します。
              </p>
            </div>

            {/* Gift Banner */}
            <div className="bg-gradient-to-r from-rose-500 to-pink-600 text-white p-4 rounded-xl shadow-md text-center font-bold text-lg sm:text-xl">
              ❤️ 大阪梅田ドクターズ結婚相談所オリジナル【必勝会話マニュアル】を無料でプレゼント中 ❤️
            </div>

            <section className="w-full">
              <div className="w-full max-w-4xl mx-auto my-1">
                <div className="relative w-full aspect-[1/1] overflow-hidden rounded-2xl shadow-md">
                  <Image
                    src="/manual-present.jpg"
                    alt="必勝会話マニュアルプレゼントのイメージ"
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    priority={false}
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAAEAAQBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA="
                  />
                </div>
              </div>
            </section>

            {/* Support 5 */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
              <h3 className="font-bold text-slate-900 text-sky-800">
                ⑤【お店選びから文面まで「デート丸投げ」サポート】
              </h3>
              <p className="text-slate-700 leading-relaxed">
                交際が始まったあとの「お店選び」や「デートプラン」はすべてこちらで提案します。「なんて返せばいい？」と迷うLINEの文章も、スクショを送っていただければ、仲人がその場で最適な返信文を一緒に考えます。
              </p>
            </div>
          </div>
        </div>

        {/* --- PRICING PLAN CARD --- */}
        <div className="bg-white/95 backdrop-blur-md shadow-2xl border border-sky-100 rounded-2xl sm:rounded-3xl p-4 sm:p-8 space-y-6">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 border-l-4 border-sky-500 pl-3 leading-relaxed">
            コースはシンプルな一つだけ。
          </h2>

          <section className="w-full">
            <div className="w-full max-w-4xl mx-auto my-1">
              <div className="relative w-full aspect-[1/1] overflow-hidden rounded-2xl shadow-md">
                <Image
                  src="/pricing-plan.jpg"
                  alt="シンプル料金プランイメージ"
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority={false}
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAAEAAQBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA="
                />
              </div>
            </div>
          </section>

          <div className="bg-sky-50 p-4 rounded-xl border border-sky-200 text-slate-900 space-y-2">
            <p className="font-bold text-lg text-sky-900">
              初期費用 230,000円（入会金＋登録料）からスタートできます。
            </p>
            <p className="text-sm text-slate-600">
              ※月会費は15,000円。成婚料は、理想のパートナーが見つかった時のみいただく「完全成果報酬制」です。
            </p>
          </div>

          <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
            <table className="w-full text-left text-sm sm:text-base border-collapse">
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <th className="py-3.5 px-4 font-bold text-slate-900 w-1/3 bg-slate-50/60">入会金</th>
                  <td className="py-3.5 px-4 text-slate-700 font-semibold">150,000円</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <th className="py-3.5 px-4 font-bold text-slate-900 bg-slate-50/60">登録料</th>
                  <td className="py-3.5 px-4 text-slate-700 font-semibold">80,000円</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <th className="py-3.5 px-4 font-bold text-slate-900 bg-slate-50/60">月会費</th>
                  <td className="py-3.5 px-4 text-slate-700 font-semibold">15,000円</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <th className="py-3.5 px-4 font-bold text-slate-900 bg-slate-50/60">お見合い料</th>
                  <td className="py-3.5 px-4 text-slate-700">4回まで0円 <span className="text-xs text-slate-500">(5回目以降 3,000円/回)</span></td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <th className="py-3.5 px-4 font-bold text-slate-900 bg-slate-50/60">成婚料</th>
                  <td className="py-3.5 px-4 text-sky-800 font-bold">250,000円 <span className="text-xs font-normal text-slate-600">(完全成果報酬)</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* --- CLOSING CTA CARD --- */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 text-white backdrop-blur-md p-6 sm:p-10 border border-sky-800 rounded-2xl sm:rounded-3xl text-center shadow-2xl space-y-5">
          <p className="text-[18px] sm:text-[20px] leading-relaxed max-w-3xl mx-auto font-medium text-slate-200">
            あなたの「誠実さ」と「情熱」を成果につなげるロジカル婚活。<br />
            男同士、まずは気楽な作戦会議（無料相談）からお話ししましょう！
          </p>
          <div>
            <button className="inline-block bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white text-[18px] sm:text-[20px] font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-sky-500/30 transform hover:-translate-y-0.5 transition duration-200 cursor-pointer">
              気楽な作戦会議（無料相談）へ申込む
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}