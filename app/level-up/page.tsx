import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "自称オタク・理系・技術職の男性へ | 婚活攻略ガイド",
  description:
    "技術者やIT企業、理系男性への婚活攻略方法を専門的知識を踏まえて解説。女性医師（ヒーラー）×体育会系男性仲人（タンク）の最強パーティが、あなたの婚活を成婚（デプロイ）まで完全キャリーします。",
  alternates: {
    canonical: "/tech-men-marriage-strategy",
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
        src="/champagne1.jpg" 
        alt="Multi-colored jellybean background" 
        className="fixed inset-0 w-full h-full object-cover object-center -z-10"
      />
      
      {/* Dark Overlay for Contrast */}
      

      {/* --- Main Stacked Cards Container --- */}
      <div className="max-w-5xl mx-auto space-y-6">
            
{/* --- HERO HEADER CARD (100% UNCROPPED FULL IMAGE) --- */}
<div className="relative bg-white/95 backdrop-blur-md shadow-2xl border border-sky-100 rounded-2xl sm:rounded-3xl p-4 sm:p-8">
  <div className="max-w-3xl mx-auto space-y-6 text-center">
    
    <span className="inline-block px-3.5 py-1 bg-sky-100 text-sky-800 rounded-full text-xs sm:text-sm font-black uppercase tracking-widest border border-sky-200">
      FOR ENGINEERS & TECH GUYS
    </span>

    <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug tracking-tight">
      マッチングアプリという「攻略本のない無理ゲー」に行き詰まっていませんか？
    </h1>

    {/* --- FULL IMAGE CONTAINER (NATURAL RATIO / ZERO CROPPING) --- */}
<section className="w-full">
      <div className="w-full max-w-4xl mx-auto">
        <div className="relative w-full aspect-[1/1] overflow-hidden rounded-2xl shadow-md">
          <Image
            src="/find-compatible-women.jpg"
            alt="婚活で出会った女性とドライブデートをしながら成婚をめざすイメージ写真"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            loading="eager" 
            fetchPriority="high"
            priority={true}
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAAEAAQBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA="
          />
        </div>
      </div>
    </section>

    <p className="text-sky-700 font-bold text-[18px] sm:text-[19px] leading-relaxed max-w-2xl mx-auto">
      Java、Python、PHP……コードは書けるのに、女性心理の仕様書（ホンネ）が読めない理系男性たちへ。
    </p>

    <div className="w-16 h-1 bg-sky-500 mx-auto rounded-full" />
</div>
</div>
        {/* --- CONCEPT & GAMIFICATION SECTION CARD --- */}
        <div className="bg-white/95 backdrop-blur-md shadow-2xl border border-sky-100 rounded-2xl sm:rounded-3xl p-4 sm:p-8 space-y-6">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 border-l-4 border-sky-500 pl-3 leading-relaxed">
            恋愛経験ゼロ・初期ステータスのままでOKです。
          </h2>
          
          <div className="bg-sky-50/80 p-4 rounded-xl border border-sky-200/60 text-slate-800 leading-relaxed text-[18px]">
            <strong>【女性医師（ヒーラー）】×【体育会系男性仲人（タンク）】</strong>が、あなたを成婚退会（デプロイ）まで完全キャリーします。
          </div>

          {/* Two-Column Feature Grid (Visual + Narrative) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Gamification Visual 1 */}
 <section className="w-full">
      <div className="w-full max-w-4xl mx-auto my-1">
        <div className="relative w-full aspect-[1/1] overflow-hidden rounded-2xl shadow-md">
          <Image
            src="/gamification1.jpg"
            alt="ハイスペック婚活の成功をイメージさせる、白いシャツを着て微笑むハイステ男性のイメージ写真"
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

            {/* Narrative Content */}
            <div className="lg:col-span-7 space-y-4 text-slate-700 leading-relaxed">
              <p>
                「現実（リアル）の恋愛には、明確な仕様書もエラーログもないから、どうしていいか分からない」
              </p>
              <p>
                マッチングアプリという名の難関ダンジョンで、不毛なメッセージの周回を繰り返し、突然の既読スルーというエラーでHPを削られる日々はもう終わりにしましょう。
              </p>
              <p>
                大阪梅田ドクターズ結婚相談所の女性医師は、高難度レイドボスに挑むヒーラーです。女性心理という複雑なソースコードをロジカルに解析し、女性の好感度メーターを動かす<strong>【秘密のコマンド（会話の法則）】</strong>をレクチャーします。
              </p>
            </div>
          </div>

          {/* Two-Column Feature Grid Reverse (Narrative + Visual) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-2">
            <div className="lg:col-span-7 space-y-4 text-slate-700 leading-relaxed">
              <p>
                また、テニスと野球を愛する体育会系の男性仲人が「前衛タンク」として参戦。お見合い前の会話ラリーを練習するロープレ、清潔感のある勝負服（最強装備）のアドバイス、デートの店選びなど、面倒な裏方タスクをすべて自動化します。
              </p>
              <p>
                あなたの「誠実さ」という初期ステータスはそのままに、私たちの最強パーティがあなたの戦闘力をレベルMAXまで引き上げます。
              </p>
              <p className="font-bold text-slate-900 border-l-2 border-sky-400 pl-3 py-1 bg-slate-50/60 rounded-r-lg">
                趣味のオンラインゲームを諦める必要なんて1ミリもありません。私たちと一緒に、最短で「結婚という名のエンドロール」を見に行きましょう。まずは男同士、気楽な作戦会議（無料相談）からプラグインしてください！
              </p>
            </div>

            {/* Gamification Visual 2 */}
<section className="w-full">
      <div className="w-full max-w-4xl mx-auto my-1">
        <div className="relative w-full aspect-[1/1] overflow-hidden rounded-2xl shadow-md">
          <Image
            src="/gamification2.jpg"
            alt="ハイスペック婚活の成功をイメージさせる、白いシャツを着て微笑むハイステ男性のイメージ写真"
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

        {/* --- COUNSELORS CARD --- */}
        <div className="bg-white/95 backdrop-blur-md shadow-2xl border border-sky-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 border-l-4 border-sky-500 pl-3 mb-5 leading-relaxed">
            最強のパーティ（カウンセラー紹介）
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 女性医師 */}
            <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-3">
                <span>🩺</span>
                <h3>女性医師（後方ヒーラー職）</h3>
              </div>
              <section className="w-full">
      <div className="w-full max-w-4xl mx-auto my-1">
        <div className="relative w-full aspect-[1/1] overflow-hidden rounded-2xl shadow-md">
          <Image
            src="/gamification3.jpg"
            alt="ハイスペック婚活の成功をイメージさせる、白いシャツを着て微笑むハイステ男性のイメージ写真"
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
              <div className="space-y-3 text-slate-700 text-[18px]">
                <p>
                  現役女医の加藤です。<br />
                  日中は医療現場にいますが、理系出身で昔からメガテンifやドラクエ大好きで、セーブポイント命の自称オタク・ゲーマーです。
                </p>
                <p className="bg-white p-3 rounded-lg border border-slate-200 font-mono text-base text-sky-800">
                  // 実は、あなたが今見ているこのホームページも、友人協力のもと自家製ビルドしました。【誰かPCスキルアップ教えてくださいね！】
                </p>
                <p>
                  「もしこのタイミングでLINEを送ったら？」という条件分岐のエラーログをロジカルに分析。なぜ既読スルーされるのか原因をコードレビューし、好感度を上げる【秘密のコマンド】を伝授します。
                </p>
                <p>
                  私が後ろからホイミやケアルをかける「ヒーラー」となり、あなたの誠実さを全力で支えます。趣味のゲームを諦める必要は1ミリもありません。私と一緒に、成婚（完全クリア）を目指しましょう。
                </p>
                <p className="font-bold text-sky-700">
                  婚活という名の「難関ダンジョン」のギミックは、すべて私に解析を任せてください。サーバーがダウンする前に、まずは気楽に無料相談へプラグインしてくださいね！
                </p>
              </div>

              <section className="w-full">
      <div className="w-full max-w-4xl mx-auto my-1">
        <div className="relative w-full aspect-[1/1] overflow-hidden rounded-2xl shadow-md">
          <Image
            src="/gamification4.jpg"
            alt="ハイスペック婚活の成功をイメージさせる、白いシャツを着て微笑むハイステ男性のイメージ写真"
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

            {/* ベテラン男性仲人 */}
            <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-1">
                <span>🛡️</span>
                <h3>20年の実績を持つベテラン男性仲人</h3>
              </div>
              <p className="text-base font-bold text-sky-800 mb-3">
                体育会系。普段のカウンセリングはとことん穏やか。
              </p>
                           <section className="w-full">
      <div className="w-full max-w-4xl mx-auto my-1">
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
          <Image
            src="/gamification12.jpg"
            alt="20年の実績を持つベテラン仲人が理系男性をサポートするイメージ画像"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            priority={false}
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAAEAAQBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA="
          />
        </div>
      </div>
                    <p className="text-xs text-slate-500">
                ※画像はイメージです。
              </p>
    </section>
              <div className="bg-sky-100/70 p-3 rounded-lg border border-sky-200 text-sky-900 font-bold mb-3 text-[18px]">
                「実戦のリードやお店選びは、すべて私が『盾（タンク）』となって先陣を切ります！」
              </div>
              <p className="text-base text-slate-600 font-mono uppercase mb-3">
                【担当】 実戦ナビゲート（お見合いロープレ・服装アドバイス・LINE添削）
              </p>
              <div className="space-y-3 text-slate-700 text-[18px]">
                <p>
                  <strong>■ メッセージ</strong><br />
                  はじめまして。仲人の石田です。女性医師が『作戦を立てるヒーラー』なら、私の役割は、あなたがデートで迷わないように道を切り開く『タンク』です。
                </p>
                <p>
                  私のサポートは、野球のサインプレイのように「すべて具体的なタスク」としてお渡しします。初お見合いの前に会話のラリーを練習する「模擬ロープレ」から、清潔感のある「勝負服のアドバイス」、デートの「お店選び」まで、面倒な裏方仕事はすべて私が引き受けます。
                </p>
                <p>
                  女性カウンセラーには話しにくい男の本音も全部ぶつけてください。会話が苦手でも、デートで緊張してガチガチになっても、私がすべて受け止めますから安心してください。
                </p>
                <p className="font-bold text-slate-900">
                  どんな難関ダンジョン（婚活）も必ずクリアできます。男同士、まずは気楽に作戦会議から始めましょう！
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- GIMMICK SECTION CARD --- */}
        <div className="bg-white/95 backdrop-blur-md shadow-2xl border border-sky-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 border-l-4 border-sky-500 pl-3 mb-5 leading-relaxed">
            🎮 婚活に潜む「3大・難関ギミック」と攻略コマンド
          </h2>

          <div className="space-y-4">
            {/* ギミック 1 */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2 text-[18px]">
                ①【LINEの既読スルー・ギミック】
              </h3>
              <ul className="space-y-2 text-[18px]">
                <li className="text-rose-700 bg-rose-50 p-3 rounded-lg border border-rose-200">
                  <strong>トラップ:</strong> 返信がないことに焦って「おーい」「生きてる？」と追撃メッセージを送ると、温度差でゲームオーバーに。
                </li>
                <li className="text-emerald-800 bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                  <strong>解決コマンド:</strong> 女性の返信ペースを考え、しばらく待つが正解。女性医師が最適なリトライのタイミングをチャットで指示（コードレビュー）します。
                </li>
              </ul>
            </div>

            {/* ギミック 2 */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2 text-[18px]">
                ②【デート終わりの『楽しかったです！』ギミック】
              </h3>
              <ul className="space-y-2 text-[18px]">
                <li className="text-rose-700 bg-rose-50 p-3 rounded-lg border border-rose-200">
                  <strong>トラップ:</strong> 額面通りに受け取って安心していると、次回の誘いで「予定を確認します」から音信不通になる大ダメージ。
                </li>
                <li className="text-emerald-800 bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                  <strong>解決コマンド:</strong> その言葉が社交辞令か確定演出かを女性医師がログ解析。男性仲人が、次につなげる「2回目デートの正しい配球（お店選び）」をセットします。
                </li>
              </ul>
            </div>

            {/* ギミック 3 */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2 text-[18px]">
                ③【結婚後の価値観・話し合いギミック】
              </h3>
              <ul className="space-y-2 text-[18px]">
                <li className="text-rose-700 bg-rose-50 p-3 rounded-lg border border-rose-200">
                  <strong>トラップ:</strong> 働き方や住む場所の条件分岐で、男側のロジックだけを一方的に通そうとすると、真剣交際が一瞬でバグ（破局）を起こします。
                </li>
                <li className="text-emerald-800 bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                  <strong>解決コマンド:</strong> 相手の意見を7割聞く傾聴スキルを伝授。20年の実績に基づく安心のサインプレイで、成婚まで安全にキャリーします。
                </li>
              </ul>
            </div>
            <section className="w-full">
      <div className="w-full max-w-4xl mx-auto my-1">
        <div className="relative w-full aspect-[1/1] overflow-hidden rounded-2xl shadow-md">
          <Image
            src="/gamification5.jpg"
            alt="ハイスペック婚活の成功をイメージさせる、白いシャツを着て微笑むハイステ男性のイメージ写真"
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

        {/* --- MARKET STRATEGY CARD --- */}
        <div className="bg-white/95 backdrop-blur-md shadow-2xl border border-sky-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 space-y-6 text-slate-700 text-[18px]">
          <section>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 border-l-4 border-sky-500 pl-3 mb-3 leading-relaxed">
              確率不明の「アプリガチャ」で消耗していませんか？
            </h2>
            <div className="space-y-3">
              <p>
                マッチングアプリであなたの大切な時間を浪費していませんか？<br />
                実はマッチングアプリ市場は「男性7割：女性3割」の超男性過多。上位の一部の男だけが勝つ、理不尽な仕様になっています。
              </p>
              <p>
                しかし、フィールドを結婚相談所に変えるだけで、世界線は180度反転します。<br />
                結婚相談所の20代・30代前半市場は、圧倒的な男手不足ステージ。
              </p>
              <p className="bg-sky-50 p-3.5 rounded-lg border border-sky-200 text-sky-900 font-bold">
                アプリでは評価されにくかったあなたの「誠実さ」や「安定した仕事（エンジニア等）」というステータスが、ここでは最高値のレア装備として女性から求められます。
              </p>
              <p>
                確実に「確定演出」を狙いに行けるスマートな婚活戦略（ロジック）に、あなたの大切な時間を投資しませんか？
              </p>
            </div>
          </section>

          <hr className="border-sky-100" />

          <section>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 border-l-4 border-sky-500 pl-3 mb-3 leading-relaxed">
              「なぜ不機嫌なのか理由が分からない」「急に連絡が途絶えてしまう」<br />
              そんな恋愛のあやふやな関係性に、戸惑っていませんか？
            </h2>
            <div className="space-y-3">
              <p>
                一般的な恋愛やマッチングアプリの世界では、どうしても男性側に「リード」や「お洒落なお店選び」、さらには「言葉にしなくても相手の気持ちを察する」といった振る舞いが求められがちです。
              </p>
              <p>
                お仕事が忙しく、実直に生きてこられた理系ビジネスマンにとって、こうした明確な理由やルールがないコミュニケーションは、どう対処していいか分からず疲弊してしまうものです。
              </p>
              <p>
                あなたが本当に結婚相手として探すべきなのは、そうした無理なリードを求める相手ではなく、<br />
                <strong className="text-sky-800">「あなたの大好きな趣味を尊重してくれて、何かあれば感情論ではなく言葉でしっかり話し合えて、一緒に居心地の良い関係を作っていける、精神的に自立した優しい女性」</strong>です。
              </p>
              <p>
                当結婚相談所には、アプリの目まぐるしいノリに気疲れして、「真面目で誠実な理系男性と、穏やかな家庭を築きたい」と本気で願っている、自立した素敵な女性がたくさん登録されています。
              </p>
              <p className="font-bold text-slate-900">
                理由の分からない既読スルーに頭を抱える日々は、もう終わりにしましょう。あなたの「誠実さ」という大切なステータスをそのまま評価してくれるお相手を、私たちと一緒に見つけに行きませんか？
              </p>
            </div>
          </section>
        </div>

        {/* --- ERROR LOG & DEBUG CARD --- */}
        <div className="bg-white/95 backdrop-blur-md shadow-2xl border border-sky-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 border-l-4 border-sky-500 pl-3 mb-3 leading-relaxed">
            エラー解決ログ
          </h2>
          <p className="mb-5 text-slate-700 text-[18px]">
            自分の好きな領域（技術・研究）に圧倒的な熱量と知識を持つ自称オタク、理系男性の方々へ。様々なエラーを解決します。
          </p>

          <div className="space-y-6">
            {/* 初級 */}
            <section className="w-full">
      <div className="w-full max-w-4xl mx-auto my-1">
        <div className="relative w-full aspect-[1/1] overflow-hidden rounded-2xl shadow-md">
          <Image
            src="/gamification6.jpg"
            alt="ハイスペック婚活の成功をイメージさせる、白いシャツを着て微笑むハイステ男性のイメージ写真"
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
            <div className="border-l-4 border-emerald-500 pl-3 sm:pl-4 space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="bg-emerald-100 text-emerald-800 text-sm font-bold px-2.5 py-0.5 rounded-full">
                  🟢 初級
                </span>
                <h3 className="font-bold text-slate-900 text-[18px]">
                  【初期化エラー】お見合い成立したのに仮交際にならずに終了
                </h3>
              </div>
              <p className="text-base font-mono text-slate-600">
                [悩み]: 仮交際にいたらない | [原因]: テンプレ質問によるスパム判定
              </p>
              <p className="text-slate-700 text-[18px]">
                会話でテンプレ質問を乱用していませんか？「よろしくお願いします」「はい、いいえ」だけのお返事。女性の画面では「退屈」とエラーが出ます。相談所は繋がっても、心は通信圏外です。
              </p>
              <p className="bg-emerald-50 p-3 sm:p-3.5 rounded-lg border border-emerald-200 text-emerald-900 font-medium text-[18px]">
                🛠️ <strong>デバッグ:</strong> 女性医師が、あなたの会話力を解析。相手の受信フィルターを突破するコードを伝授。お断りを回避し、接続を確立します。
              </p>
            </div>

            {/* 中級 */}
            <div className="border-l-4 border-amber-500 pl-3 sm:pl-4 space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="bg-amber-100 text-amber-800 text-sm font-bold px-2.5 py-0.5 rounded-full">
                  🟡 中級
                </span>
                <h3 className="font-bold text-slate-900 text-[18px]">
                  【並行処理負け】2回目のデート前で消える
                </h3>
              </div>
              <p className="text-base font-mono text-slate-600">
                [悩み]: ラリーは続くのに急な交際終了 | [原因]: ライバル競合による処理落ち
              </p>
              <p className="text-slate-700 text-[18px]">
                原因は、婚活のマルチスレッド（並行）仕様。女性は複数の男性と同時通信しています。あなたが「雑談ルーチン」を回す間に、ライバルが感情にコミットする。あなたのタスクは優先度「低」でメモリ消去されます。
              </p>
              <p className="bg-amber-50 p-3 sm:p-3.5 rounded-lg border border-amber-200 text-amber-900 font-medium text-[18px]">
                🛠️ <strong>デバッグ:</strong> 女性医師が、現状維持ログを瞬時にプロファイリング。並行ライバルに勝る最適化シグナルを解説。女性のリソースをあなたに100%割り当てます。
              </p>
            </div>

            {/* 上級 */}
            <div className="border-l-4 border-rose-500 pl-3 sm:pl-4 space-y-2.5">
              <section className="w-full">
      <div className="w-full max-w-4xl mx-auto my-1">
        <div className="relative w-full aspect-[1/1] overflow-hidden rounded-2xl shadow-md">
          <Image
            src="/gamification7.jpg"
            alt="ハイスペック婚活の成功をイメージさせる、白いシャツを着て微笑むハイステ男性のイメージ写真"
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
              <div className="flex items-center gap-2">
                <span className="bg-rose-100 text-rose-800 text-sm font-bold px-2.5 py-0.5 rounded-full">
                  🔴 上級
                </span>
                <h3 className="font-bold text-slate-900 text-[18px]">
                  【要件定義エラー】真剣交際直前で破局
                </h3>
              </div>
              <p className="text-base font-mono text-slate-600">
                [悩み]: 結婚の具体化を前にフェードアウト | [原因]: 正論の連発によるシステムダウン
              </p>
              <p className="text-slate-700 text-[18px]">
                婚活最終盤での致命的なシステムダウン。理系男子はスペックの要件定義を急ぎがち。住居、資産、キャリアの論理的構築。しかし、本番直前の女性のシステムは超不安定。欲しいのは正論ではなく、感情の例外処理です。
              </p>
              <p className="bg-rose-50 p-3 sm:p-3.5 rounded-lg border border-rose-200 text-rose-900 font-medium text-[18px]">
                🛠️ <strong>デバッグ:</strong> 女性医師が、微細な返信遅延ログを1秒でキャッチ。マリッジブルーというバグを未然に防止。確実に成婚（デプロイ）へ導くデバッグを提示。
              </p>
            </div>
          </div>
        </div>

        {/* --- CLOSING MESSAGE CARD --- */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 text-white backdrop-blur-md p-6 sm:p-10 border border-sky-800 rounded-2xl sm:rounded-3xl text-center shadow-2xl space-y-5">
          <p className="text-[18px] sm:text-[20px] leading-relaxed max-w-3xl mx-auto font-medium text-slate-200">
            あなたの「誠実さ」と「圧倒的な熱量」を正しく解釈し、成婚まで伴走します。<br />
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