import React from 'react';
import { BookOpen, MessagesSquare, Shirt } from 'lucide-react';

export default function MatchmakingRules() {
  const rules = {
    etiquette: [
      { text: "女性がお茶代を払うのはNG", desc: "お茶代は男性全額支払いがルール。女性はスマートに奢られましょう。" },
      { text: "男性が「領収書」をもらうのはNG", desc: "会社の経費にできないため、お会計時の一言は厳禁です。" },
      { text: "飲み物以外の「ケーキ」を勝手に頼むのはNG", desc: "男性から勧められた場合のみ頼みましょう。" },
      { text: "どれだけ会話がつまらなくても早く帰るのはNG", desc: "厳格なルールとして「1時間前後（最低50分〜60分）」必須です。" },
      { text: "二次会（2軒目・食事）へ行くのはNG", desc: "どれだけ意気投合してもその場で次の店に行くのは禁止です。" },
      { text: "当日キャンセル・遅刻は高額ペナルティ", desc: "体調不良や電車の遅延でも違約金対象。15分以上の遅刻は当日キャンセル扱い。" },
      { text: "連絡先をその場で教える・SNS投稿は完全禁止", desc: "LINEの直接交換は規約違反。感想をネットに書くのもNGです。" },
      { text: "遅れてきたお相手を怒ったり責めるのはNG", desc: "到着したお相手を笑顔で迎えることが義務づけられています。" },
      { text: "複数人との同時お見合い・仮交際は「推奨」", desc: "一般の恋愛でのキープ行為も、相談所では効率化のため推奨されます。" },
    ],
    conversation: [
      { text: "「タメ口（敬語を崩す）」はNG", desc: "仲良くなろうとしてもお見合いの1時間は完全な敬語が鉄則。" },
      { text: "その場で次の約束（また会いましょう）はNG", desc: "結果の返事は相談所を通して行う決まりです。" },
      { text: "プロフィール読まずに「タバコ吸いますか？」", desc: "プロフィールに「吸う・吸わない」の記載があります。" },
      { text: "資産・会社名・最寄り駅の質問はNG", desc: "「貯金額は？」「勤務先は？」など個人情報は関係が深まるまでNG。" },
      { text: "「フルネーム」や「誕生日」を尋ねるのはNG", desc: "お見合い時は原則「苗字のみ」。個人情報の特定に繋がります。" },
      { text: "「何人お見合いした？」「他何人と交際中？」", desc: "他人の婚活状況を探る質問は重大なマナー違反です。" },
      { text: "子供・親の仕事・宗教・愛車の質問はNG", desc: "品定めのような質問や、結婚後の重すぎる話はお見合いでは厳禁。" },
      { text: "「得意料理は？」「手作りが良い」などこだわり強制", desc: "古い価値観の押し付けと見られます。家事は一緒にやるスタンスで。" },
      { text: "離婚歴のある人への過去の質問はNG", desc: "「前の結婚生活は何年？」など過去を詮索してはいけません。" },
      { text: "容姿や体型（スタイル）に関する発言はNG", desc: "「写真よりスレンダーですね」など、褒め言葉のつもりでもNG。" },
      { text: "過去の恋愛の質問はNG", desc: "「これまでに付き合った人とどのくらい続いた？」などはNG。" },
    ],
    clothing: [
      { text: "サンダル・生足・スニーカー・ブーツは男女ともNG", desc: "ホテルのラウンジにふさわしいフォーマルな足元が必須です。" },
      { text: "リュックサックでの参加はNG", desc: "カジュアルすぎるバッグは避け、スマートな鞄を選びましょう。" },
      { text: "きつすぎる香水はNG", desc: "ホテルのラウンジは密閉された空間のため、周囲への配慮が必要です。" },
      { text: "男性のネクタイは「着用が安全」", desc: "必須ではないですが、着用していくのが間違いありません。" },
    ]
  };

  return (
    <div className="w-full max-w-md mx-auto bg-slate-50 min-h-screen text-gray-800 antialiased font-sans">
      
      {/* ページヘッダー */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-50 shadow-sm">
        <h1 className="text-[22px] sm:text-[26px] font-black text-gray-900 text-center leading-tight">
          【えっ、これもNG？】<br />
          結婚相談所お見合いの暗黙のルールと意外なNGマナー
        </h1>
      </header>

      <div className="p-3 space-y-4">
        
        {/* リード文 */}
        <div className="bg-rose-50/70 border border-rose-100 p-3 rounded-xl text-[20px] sm:text-[24px] leading-relaxed text-gray-700">
          <p className="font-semibold text-rose-700 mb-0.5">⚠️ 知らないと一発ペナルティも！？</p>
          お見合いには「えっ？それもダメなの！？」と驚くような独自の暗黙のルールがあります。さらっと読んでおきましょう♡
        </div>

        {/* コア概念のシンプル解説 */}
        <div className="bg-white border border-gray-200 p-3 rounded-xl text-[20px] sm:text-[24px] leading-relaxed">
          <span className="inline-block bg-slate-800 text-white font-bold text-[18px] sm:text-[22px] px-2 py-0.5 rounded mb-1">
            お見合いの本当の目的
          </span>
          <p className="text-gray-600">
            お見合いは、条件のすり合わせをする場ではなく、<span className="font-bold text-gray-900 bg-yellow-100 px-0.5">「この人と話していて楽しいか」</span>を確かめるだけの場です。
          </p>
          <p className="text-gray-500 mt-1">
            住居、健康、結婚時期などの重い話は、仮交際に進んでお互いの信頼関係ができてから、相談所のカウンセラーを間に挟みつつ段階的に確認していくものです。
          </p>
        </div>

        {/* SECTION 1: ETIQUETTE */}
        <section id="etiquette" className="space-y-2 pt-2">
          <div className="flex items-center space-x-2 bg-rose-100/70 text-rose-800 p-2 rounded-lg">
            <BookOpen className="w-6 h-6 text-rose-600 flex-shrink-0" />
            <h2 className="text-[22px] sm:text-[26px] font-black">茶代・基本</h2>
          </div>

          <div className="space-y-2">
            {rules.etiquette.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-2.5 flex flex-col justify-center">
                <div className="flex items-start space-x-1.5">
                  <span className="inline-block flex-shrink-0 bg-rose-100 text-rose-700 font-extrabold text-[18px] sm:text-[22px] px-1.5 rounded mt-0.5">
                    NG
                  </span>
                  <h3 className="text-[21px] sm:text-[25px] font-bold text-gray-900 leading-snug">
                    {item.text}
                  </h3>
                </div>
                {item.desc && (
                  <p className="text-[20px] sm:text-[24px] text-gray-500 mt-1 pl-7 leading-tight">
                    {item.desc}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* 注文時マナーのワンポイント */}
          <div className="bg-emerald-50 border border-emerald-100 p-3 rounded-xl text-[20px] sm:text-[24px] mt-2">
            <p className="font-bold text-emerald-800 mb-0.5">💡 スマートな注文マナー</p>
            <p className="text-gray-600 leading-snug">
              注文時はお相手にメニューを向け、先に選んでもらう。メニュー表が1枚しかない場合、女性（お相手）に最初に見せます。メニュー選びは「ドリンクのみ」が基本です。
            </p>
          </div>
        </section>

        {/* SECTION 2: CONVERSATION */}
        <section id="conversation" className="space-y-2 pt-2">
          <div className="flex items-center space-x-2 bg-rose-100/70 text-rose-800 p-2 rounded-lg">
            <MessagesSquare className="w-6 h-6 text-rose-600 flex-shrink-0" />
            <h2 className="text-[22px] sm:text-[26px] font-black">会話・質問</h2>
          </div>

          <div className="space-y-2">
            {rules.conversation.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-2.5 flex flex-col justify-center">
                <div className="flex items-start space-x-1.5">
                  <span className="inline-block flex-shrink-0 bg-rose-100 text-rose-700 font-extrabold text-[18px] sm:text-[22px] px-1.5 rounded mt-0.5">
                    NG
                  </span>
                  <h3 className="text-[21px] sm:text-[25px] font-bold text-gray-900 leading-snug">
                    {item.text}
                  </h3>
                </div>
                {item.desc && (
                  <p className="text-[20px] sm:text-[24px] text-gray-500 mt-1 pl-7 leading-tight">
                    {item.desc}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: CLOTHING */}
        <section id="clothing" className="space-y-2 pt-2">
          <div className="flex items-center space-x-2 bg-rose-100/70 text-rose-800 p-2 rounded-lg">
            <Shirt className="w-6 h-6 text-rose-600 flex-shrink-0" />
            <h2 className="text-[22px] sm:text-[26px] font-black">服装・マナー</h2>
          </div>

          <div className="space-y-2">
            {rules.clothing.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-2.5 flex flex-col justify-center">
                <div className="flex items-start space-x-1.5">
                  <span className="inline-block flex-shrink-0 bg-rose-100 text-rose-700 font-extrabold text-[18px] sm:text-[22px] px-1.5 rounded mt-0.5">
                    NG
                  </span>
                  <h3 className="text-[21px] sm:text-[25px] font-bold text-gray-900 leading-snug">
                    {item.text}
                  </h3>
                </div>
                {item.desc && (
                  <p className="text-[20px] sm:text-[24px] text-gray-500 mt-1 pl-7 leading-tight">
                    {item.desc}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* フッター誘導 */}
        <div className="bg-gradient-to-br from-gray-900 to-slate-800 text-white p-4 rounded-xl text-center shadow-md mt-4">
          <p className="text-[20px] sm:text-[24px] font-medium text-rose-300">大阪梅田ドクターズ結婚相談所のお見合いサポート</p>
          <p className="text-[21px] sm:text-[25px] font-bold mt-1 leading-snug">
            他にも色々ルールがあるので<br />わからないことは何でも聞いてくださいね。
          </p>
          <p className="text-[22px] sm:text-[26px] font-black text-white mt-2 bg-rose-500/30 inline-block px-3 py-1 rounded-full border border-rose-500/50">
            理想に近いワザありテクニックもお伝えします♡
          </p>
        </div>

      </div>
    </div>
  );
}