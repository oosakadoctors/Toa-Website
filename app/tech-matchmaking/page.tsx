import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "理系男性のお見合い、お相手探し | 大阪梅田ドクターズ結婚相談所",
  description:
    "婚活中の理系男性に特化し、お見合いの方法や会話術、さらに理想のお相手を探す具体的な方法について専門的に解説。",
  alternates: {
    canonical: "/science-men-matchmaking-guide",
  },
  authors: [
    { name: "現役の女性内科医師" },
    { name: "男性ベテラン仲人" },
  ],
  creator: "大阪梅田ドクターズ結婚相談所",
  publisher: "大阪梅田ドクターズ結婚相談所",
};

export default function ScienceMenMatchmakingPage() {
  return (
    <div className="relative min-h-screen w-full py-6 sm:py-10 px-3 sm:px-6 overflow-hidden text-[18px]">
      {/* --- Full Page Background Image --- */}
      <img
        src="/champagne1.png"
        alt="Multi-colored jellybean background"
        className="fixed inset-0 w-full h-full object-cover object-center -z-10"
      />

      {/* --- Main Stacked Cards Container --- */}
      <div className="max-w-5xl mx-auto space-y-6">

        {/* --- HERO HEADER CARD --- */}
        <div className="relative bg-white/95 backdrop-blur-md shadow-2xl border border-sky-100 rounded-2xl sm:rounded-3xl p-4 sm:p-8">
          <div className="max-w-3xl mx-auto space-y-6 text-center">

            <span className="inline-block px-3.5 py-1 bg-sky-100 text-sky-800 rounded-full text-xs sm:text-sm font-black uppercase tracking-widest border border-sky-200">
              FOR TECH & SCIENCE PROFESSIONALS
            </span>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug tracking-tight">
              理系男性のお見合い、お相手探し
            </h1>

            <p className="text-sky-700 font-bold text-[18px] sm:text-[19px] leading-relaxed max-w-2xl mx-auto">
              恋愛経験が少なめの理系男性・技術職・企業勤務の男性の方へ。
            </p>

            {/* FULL IMAGE CONTAINER */}
            <section className="w-full">
              <div className="w-full max-w-4xl mx-auto">
                <div className="relative w-full aspect-[1/1] overflow-hidden rounded-2xl shadow-md">
                  <Image
                    src="/good-future-together.jpg"
                    alt="理系男性のお見合いとお相手探しを応援するイメージ画像"
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

            <div className="w-16 h-1 bg-sky-500 mx-auto rounded-full" />
          </div>
        </div>

        {/* --- ONLINE MATCHMAKING SECTION --- */}
        <div className="bg-white/95 backdrop-blur-md shadow-2xl border border-sky-100 rounded-2xl sm:rounded-3xl p-4 sm:p-8 space-y-6">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 border-l-4 border-sky-500 pl-3 leading-relaxed">
            🔵 大阪梅田ドクターズ結婚相談所ではオンラインお見合いにも対応。自分らしさを失わずにリラックスして、お見合いする方法を解説。
          </h2>

          <div className="bg-sky-50/80 p-4 rounded-xl border border-sky-200/60 text-slate-800 leading-relaxed text-[18px]">
            <p>
              最初のお見合いは、ご自宅からリラックスして参加できる「オンラインお見合い」も選択肢の一つです。<br />
              移動時間もお店選びも不要。仕事と両立できる、効率的でスマートな婚活スタイルです。<br />
              <span className="text-sky-800 font-bold">【※ただし、お相手も合意の場合のみです】</span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <section className="w-full lg:col-span-5">
              <div className="w-full max-w-4xl mx-auto my-1">
                <div className="relative w-full aspect-[1/1] overflow-hidden rounded-2xl shadow-md">
                  <Image
                    src="/pic1.jpg"
                    alt="オンラインお見合いでリラックスして会話するイメージ"
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
              <p className="font-bold text-sky-900 bg-sky-50 p-3.5 rounded-lg border border-sky-200">
                カメラの映り方から沈黙しない会話のコツまで、女性医師とベテラン仲人が事前に分かりやすくアドバイス。
              </p>
              <ul className="space-y-3 list-disc list-inside">
                <li>
                  「休日にわざわざ慣れないホテルのラウンジまで出向くのは、時間も体力も負担が大きい……」と感じている方はとても多いです。大阪梅田ドクターズ結婚相談所では、最初のお見合いをZoomなどを使ったオンライン形式で行うことができます。ご自宅からリラックスして参加できますし、移動時間や交通費などのコストをかけずに、効率よく1日に何件もお見合いすることができます。
                </li>
                <li>
                  画面越しの印象を良くするための「カメラの画角」や「明るさの整え方」などは、女性医師とベテラン仲人が事前に丁寧にレクチャーします。お仕事が激務な方でも、最もスマートに理想のパートナーと出会える環境をご用意しています。
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- CONVERSATION TIPS CARD --- */}
        <div className="bg-white/95 backdrop-blur-md shadow-2xl border border-sky-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 border-l-4 border-sky-500 pl-3 mb-2 leading-relaxed">
              🔵 理系男性の強みを活かす：お見合いの具体的会話術（アドバイス3選）
            </h2>
            <p className="text-sky-800 font-bold text-[18px]">
              お見合い必勝法として理系男性に贈る会話のワンポイントアドバイス❤️
            </p>
            <p className="text-slate-600 mt-1">
              理系男性が陥りがちな落とし穴を先回りして解決する、より本質的なアドバイスを解説します。
            </p>
          </div>

          <section className="w-full">
            <div className="w-full max-w-4xl mx-auto my-1">
              <div className="relative w-full aspect-[1/1] overflow-hidden rounded-2xl shadow-md">
                <Image
                  src="/pic2.jpg"
                  alt="お見合い会話術のイメージ"
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

          <div className="space-y-4">
            {/* Tip 1 */}
            <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-sky-800 text-[19px]">
                ① 質問は「相手の感情（動機）」に向かって投げる
              </h3>
              <p className="text-slate-700">
                理系男性は「いつから？」「どこで？」といった事実（データ）を尋ねる質問を重ねてしまい、お見合いを【面接】にしてしまいがちです。
              </p>
              <p className="bg-white p-3 rounded-lg border border-slate-200 text-slate-800">
                お見合いで本当に収集すべきデータは、相手の事実ではなく「感情」です。女性が「旅行が好きです」と言ったら、どこに行ったかだけではなく、「どんな事が一番楽しかったですか？」と聞いてみてください。相手の感情の動機を掘り下げることで、会話のラリーが驚くほどスムーズに回り始めます。
              </p>
            </div>

            {/* Tip 2 */}
            <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200 space-y-3">
              <h3 className="font-bold text-sky-800 text-[19px]">
                ② 女性が話している間は、3秒に1回うなずく
              </h3>
              <p className="text-slate-700">
                「話は静かにじっくり聞くもの」と考えて、無表情・微動だにせず女性の話を聞いてしまう理系男性はとても多いです。しかし、女性の目にはそれが「私の話、つまらないのかな」と映ってしまいます。
              </p>
              <p className="bg-white p-3 rounded-lg border border-slate-200 text-slate-800">
                女性との会話では、「私はあなたの話を100%受信（肯定）しています」というサインを視覚的に送る必要があります。相手が喋っている間は、3秒に1回、少し大きめに深くうなずいてください。これだけで女性は「この人は私の話を真剣に聞いてくれる、包容力のある人だ」と判断します。
              </p>
            </div>

            <section className="w-full pt-1">
              <div className="w-full max-w-4xl mx-auto my-1">
                <div className="relative w-full aspect-[1/1] overflow-hidden rounded-2xl shadow-md">
                  <Image
                    src="/pic3.jpg"
                    alt="コミュニケーションとリアクションのイメージ"
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

            {/* Tip 3 */}
            <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-sky-800 text-[19px]">
                ③ 結論の出ない「雑談」は、お互いの相性を測るテストだと割り切る
              </h3>
              <p className="text-slate-700">
                理系男性にとって、オチや結論のない「今日のお天気」や「最近の流行り」といった雑談は、非効率で意味のないものに感じられるかもしれません。しかし、女性にとって雑談は「問題解決の場」ではなく「お互いの心の距離を縮めるための場」です。
              </p>
              <p className="bg-sky-50 p-3.5 rounded-lg border border-sky-200 text-sky-900 font-bold">
                「この雑談に結論は必要ない。『お互いが笑顔で言葉を交わし合えている状態』そのものが、この会話のゴール（合格ライン）である」とあらかじめ定義しておきましょう。そう割り切るだけで、焦って答えを探す必要がなくなり、心のゆとりが生まれます。
              </p>
            </div>
          </div>
        </div>

        {/* --- FINDING LIKE-MINDED PARTNERS CARD --- */}
        <div className="bg-white/95 backdrop-blur-md shadow-2xl border border-sky-100 rounded-2xl sm:rounded-3xl p-4 sm:p-8 space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 border-l-4 border-sky-500 pl-3 mb-2 leading-relaxed">
              🔵 同じ趣味・感覚の女性を探そう！
            </h2>
            <p className="text-sky-800 font-bold text-[19px]">
              お洒落な高級カフェより、水族館やゲームセンターで自然体になれる相手の方が楽しい。
            </p>
          </div>

          <section className="w-full">
            <div className="w-full max-w-4xl mx-auto my-1">
              <div className="relative w-full aspect-[1/1] overflow-hidden rounded-2xl shadow-md">
                <Image
                  src="/pic5.jpg"
                  alt="等身大のデートを楽しむイメージ"
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

          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p className="bg-sky-50/80 p-4 rounded-xl border border-sky-200/60 font-medium text-slate-800">
              理系・自社オタク男性が、同じ感覚や趣味を持つ女性と出会い、水族館やゲームセンターで自然体で楽しめるデートを実現するための「最も打率が高いお相手の見つけ方」をロジカルに解説します。
            </p>

            <p>
              「婚活のデートといえば、お洒落な高級カフェや静かなフレンチレストランでスマートにエスコートしなければならない」と思い込んでいませんか？<br />
              恋愛経験が少ない理系男性にとって、そのような慣れないアウェイの環境は緊張してエラー（沈黙）を起こす原因になります。
            </p>
            <p>
              あなたが本当に探すべきなのは、背伸びが必要な場所ではなく、「水族館やゲームセンターで、一緒にワクワクを共有できる等身大の女性」です。そんな理想のお相手と出会うための3つのステップを解説します。
            </p>

            <div className="space-y-4 pt-2">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-[18px]">
                  ① 検索システムの「キーワード検索」をフル活用する
                </h3>
                <p>
                  検索システムには、プロフィール内に自分の好きなものを細かく記載している女性が多数登録しています。まずは検索画面のキーワード欄に、「ゲーム」「アーケード」「アニメ」「レトロゲーム」といった具体的な単語を入力して検索をかけてみましょう。これだけで、一般的なアプリのように無駄な空振りをすることなく、最初から同じ感覚を持つ女性を絞り込むことができます。
                </p>
              </div>

              <section className="w-full">
                <div className="w-full max-w-4xl mx-auto my-1">
                  <div className="relative w-full aspect-[1/1] overflow-hidden rounded-2xl shadow-md">
                    <Image
                      src="/pic6.jpg"
                      alt="キーワード検索とプロフィール設計のイメージ"
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

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-[18px]">
                  ② プロフィールに「デートで行きたい具体的な場所」を明記しておく
                </h3>
                <p>
                  お相手を探すのと同時に、自分のプロフィール欄にもあらかじめ「仕様（ヒント）」を埋め込んでおくことが重要です。女性医師のアドバイスのもと、以下のような一文をプロフィールに記載します。
                </p>
                <div className="bg-sky-50/80 p-3.5 rounded-lg border border-sky-200 italic text-sky-900 font-medium">
                  「休日は水族館でクラゲを眺めて癒やされたり、ゲームセンターでクレーンゲームやレトロゲームを楽しんだりすることが好きです。お付き合いした方とは、気取らずにそんな場所で一緒に笑顔で過ごせたら嬉しいです」
                </div>
                <p>
                  これを見た「同じ感覚を持つ女性」から、「この人なら私も緊張せず、普段通りの自分でデートを楽しめそう！」と、逆にお見合いの申し込みが届くようになります。
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-[18px]">
                  ③ 最初のデートプランを「男性仲人（兄貴）」に丸投げする
                </h3>
                <p>
                  共通の趣味を持つ女性とマッチングしたら、いよいよ実戦（初デート）です。<br />
                  「水族館の後はどこでお茶をすればいい？」「ゲームセンターの滞在時間はどれくらいが正解？」といったタイムスケジュールやルート選びは、すべて20年の実績を持つ男性仲人に丸投げしてください。<br />
                  テニスや野球の作戦を立てるように、「女性が疲れない、かつお互いの距離が自然と縮まる最適化されたデートコース」をあなたのために個別に設計してお渡しします。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- INFINITE LOOP BREAKTHROUGH CARD --- */}
        <div className="bg-white/95 backdrop-blur-md shadow-2xl border border-sky-100 rounded-2xl sm:rounded-3xl p-4 sm:p-8 space-y-6">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 border-l-4 border-sky-500 pl-3 leading-relaxed">
            🔵 無限ループの問題。「自分に興味なさそうなら頑張れないし、グッとくる女性も見当たらない」と悩むあなたへ
          </h2>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-slate-700 leading-relaxed space-y-3">
            <p>
              「飲み会や婚活パーティー、マッチングアプリに参加しても、相手が自分に興味なさそうだと一気に冷めてしまう。かといって、自分から進んでアプローチしたくなるほど、グッとくる魅力的な女性にも出会えない……」
            </p>
            <p>
              「でも、このまま一生ひとりでいるのは寂しいから、何か行動しておかなければと思ってまたアプリを開く。けれどやっぱり誰も見つからない」
            </p>
            <p className="font-bold text-sky-800 border-l-2 border-sky-500 pl-3">
              大阪梅田で働く真面目な理系男性やエンジニア、オタク気質の男性から、このような「不毛な無限ループのバグ」の相談を本当にたくさんいただきます。今回は、その無限ループを打開する方法を解説します。
            </p>
          </div>

          <div className="space-y-4 text-slate-700 leading-relaxed">
            <div className="border-l-4 border-amber-500 pl-3 sm:pl-4 space-y-1">
              <h3 className="font-bold text-slate-900 text-[18px]">
                ① なぜ「がんばれない」のか？ 相手の真剣度が見えないから
              </h3>
              <p>
                あなたが「相手が自分に興味なさそうなら頑張れない」と感じるのは、ビジネスパーソンとして極めて合理的な判断です。
                マッチングアプリや気軽な街コンパーティーは、結婚への真剣度がバラバラ（ご飯友達が欲しい、ただの暇つぶしなど）という仕様になっています。お相手の本気度が分からない状態では、「この人に自分のリソース（時間・お金・メンタル）を投資しても無駄に終わるリスクが高い」とモチベーションが低下してしまうのは当然なのです。
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-3 sm:pl-4 space-y-1">
              <h3 className="font-bold text-slate-900 text-[18px]">
                ② なぜ「グッとくる女性がみあたらない」のか？ 中身のデータが不足しているから
              </h3>
              <p>
                理系男性やエンジニアが誰かに「グッとくる」ためには、表面的な顔写真や、お酒の席での薄い世間話だけでは不十分です。お相手の人生の価値観、物事の考え方、自分の大切なゲームやアニメの趣味を否定しない寛容さといった、「中身の深いデータ」に触れて初めて、脳に恋のフラグが立つ性質を持っています。
              </p>
              <p>
                情報が薄すぎるアプリの画面をどれだけスワイプしても、あなたの理系脳が反応するお相手が見つからないのは当たり前なのです。
              </p>
            </div>

            <div className="bg-sky-50/80 p-4 rounded-xl border border-sky-200/60 space-y-3">
              <h3 className="font-bold text-sky-900 text-[19px]">
                ③ その無限ループを、結婚相談所で打開できる理由
              </h3>
              <p className="text-slate-800 font-medium">
                この不毛な繰り返しを完全に終了させるために設計されたシステムが、結婚相談所です。
              </p>
              <ul className="space-y-2 list-disc list-inside text-slate-800">
                <li>
                  <strong>100%「真剣な女性」しかいない安心の仕様：</strong> 登録している女性は全員、独身証明書や年収証明書を提出し、高額な費用を払って「本気で生涯のパートナーを探している自立した女性」だけです。あなたの「誠実さ」に対してお相手も本気で向き合ってくれるため、アプリのような「空振り」がなく、安心して情熱を注ぐことができます。
                </li>
                <li>
                  <strong>最初から「深い中身のデータ」が開示されている：</strong> 検索システムでは、お見合い前の段階でお相手の「結婚観」「休日の過ごし方」「趣味」が開示されています。女性医師が、女性のホンネや相性を裏でロジック解析。最初から「この人なら価値観が合いそう」と分かった状態で会えるため、最初のお見合いから自然と「グッとくる」体験が生まれます。
                </li>
                <li>
                  <strong>あなたが一人で頑張る必要はない：</strong> 「自分からアプローチする（リードする）のが苦手」なら、その役割はすべて体育会系男性仲人に丸投げしてください。お相手との日程調整、初デートのスマートなお店選び、LINEの返信内容まで、面倒なタスクは私たちがサポートします。
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- DUAL-INCOME TEAM CARD --- */}
        <div className="bg-white/95 backdrop-blur-md shadow-2xl border border-sky-100 rounded-2xl sm:rounded-3xl p-4 sm:p-8 space-y-6">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 border-l-4 border-sky-500 pl-3 leading-relaxed">
            🔵「専業主婦を養うプレッシャー」を感じていませんか？ 大阪梅田ドクターズ結婚相談所が『共働き＆自立したチーム』を強く推奨する理由。
          </h2>

          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              「結婚したら自分の稼ぎだけで家族を養うべき？」「自分の稼ぎで足りる？」そんな昭和型の重圧を感じる必要はありません。<br />
              大阪梅田ドクターズ結婚相談所では、結婚を一方が負担を背負うものではなく、お互いに経済的・精神的に自立したプロ同士が組む「最強の共同チーム」だと考えています。
            </p>
            <p>
              収入の最大化とリスクの「1/2分散」を狙う共働きスタイルなら、新NISA等の資産運用や住宅ローンの将来設計もロジカルに構築可能です。家事や育児も仕事と同じように「明確なタスク分担」を行い、お互いの世界（オンラインゲームやアニメ等の趣味のテリトリー）を100%尊重し合える対等な関係を築けます。
            </p>
            <p className="bg-sky-50 p-3.5 rounded-lg border border-sky-200 text-sky-900 font-bold">
              「結婚相談所には専業主婦志望の女性ばかりでは？」というのは大きな誤解です。当相談所には、マッチングアプリのあやふやなノリに気疲れし、「真面目で誠実な理系男性・エンジニア・オタク男性と、お互いのキャリアや一人の時間を大切にしながら、フラットで温かい家庭を築きたい」と本気で願う自立した素敵な女性が多数登録しています。
            </p>
            <p className="font-bold text-slate-900 text-center text-[19px] pt-2">
              あなたの仕事への実直さをそのまま評価してくれるお相手を、大阪梅田ドクターズ相談所で見つけに行きませんか？
            </p>
          </div>
        </div>

        {/* --- CLOSING MESSAGE CARD --- */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 text-white backdrop-blur-md p-6 sm:p-10 border border-sky-800 rounded-2xl sm:rounded-3xl text-center shadow-2xl space-y-5">
          <p className="text-[18px] sm:text-[20px] leading-relaxed max-w-3xl mx-auto font-medium text-slate-200">
            あなたの「誠実さ」と「実直な仕事への誇り」を正しく評価してくれるお相手を探しましょう。<br />
            まずは男同士、気楽な作戦会議（無料相談）からプラグインしてください。
          </p>
          <div>
            <button className="inline-block bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white text-[18px] sm:text-[20px] font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-sky-500/30 transform hover:-translate-y-0.5 transition duration-200 cursor-pointer">
              気楽な作戦会議（無料相談）へプラグイン
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}