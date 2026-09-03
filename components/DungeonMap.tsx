import React from 'react';

export default function DungeonMap() {
  const rooms = [
    {
      label: 'START',
      summary: 'START｜活動開始',
      body: '',
      defaultOpen: false,
    },
    {
      label: 'GATE 01',
      summary: '分岐① 自分から何人に申し込みますか？',
      body: '週＿＿人／月＿＿人を目標にします。',
      defaultOpen: true,
    },
    {
      label: 'GATE 02',
      summary: '分岐② 申し込みが来ました',
      body: '「完璧に好みではない」という理由ですべてお断りしないために、\n\n月＿＿人以上はプロフィールをしっかり検討します。\n\n条件内であれば＿＿人程度は会ってみます。',
      defaultOpen: true,
    },
    {
      label: 'GATE 03',
      summary: '分岐③ お見合い成立',
      body: '月＿＿件を目安にします。\n\n多すぎて疲れてしまわないように、上限も決めておきます。\n\n月最大＿＿件',
      defaultOpen: true,
    },
    {
      label: 'GATE 04',
      summary: '分岐④ お見合い終了',
      body: '「すごく好き」と思える方だけをOKにすると、最初からほとんどのご縁が進まなくなってしまいます。\n\nそのため、事前に、\n\n明確なNGがなければ、もう一度会います。\nあるいは\nお見合い4回につき最低1回程度は仮交際へ進むことを一つの目安にします。\n\nといった方針をご本人に合わせて決めておきます。',
      defaultOpen: true,
    },
    {
      label: 'GATE 05',
      summary: '分岐⑤ 仮交際',
      body: '同時進行＿＿人程度を目安にします。\n\n1人だけに集中するタイプなのか、2〜3人を比較した方が判断しやすいタイプなのかも、仲人と決めておきます。',
      defaultOpen: true,
    },
    {
      label: 'GATE 06',
      summary: '分岐⑥ 1〜2回会いましたが「よく分かりません」',
      body: 'こちらも婚活ではよくあることです。\n\n嫌ではありませんが、好きとも言えません。\n\n→ すぐに終了しますか？\n→ もう1回会ってみますか？\n→ 仲人と整理してから決めますか？\n\n事前ルール：＿＿＿＿＿＿',
      defaultOpen: true,
    },
    {
      label: 'GATE 07',
      summary: '分岐⑦ 気になるところが出てきました',
      body: 'その場で減点して終了するのではなく、\n\n事実確認 → 仲人に相談 → 判断\n\n何を確認するかも決めておきます。',
      defaultOpen: true,
    },
    {
      label: 'GATE 08',
      summary: '分岐⑧ 仮交際が増えすぎました',
      body: '＿＿人を超えたら、新規お見合いを減らします／一度整理します。',
      defaultOpen: true,
    },
    {
      label: 'GATE 09',
      summary: '分岐⑨ 一人が気になり始めました',
      body: '他の方とのご縁をすべて終了する前に、\n\n結婚条件・生活・気持ちの3点を仲人と確認します。',
      defaultOpen: true,
    },
    {
      label: 'GATE 10',
      summary: '分岐⑩ 真剣交際へ',
      body: '「好きだから」だけではなく、\n\n結婚後に確認しておく項目をクリアしているかを確認します。\n\n→ OKであれば真剣交際へ進みます。\n→ 不明であれば確認します。\n→ 大きな不一致があれば再検討します。',
      defaultOpen: true,
    },
    {
      label: 'BOSS',
      summary: 'BOSS｜成婚判断',
      body: '最後は、\n\nこの方以上の方のいるでしょうか？\n\nではなく、\n\n「この方と結婚生活を作っていきたいですか？」\n\nという視点で判断します。',
      defaultOpen: true,
      isBoss: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#101d25] text-[#f3ead7] font-sans leading-relaxed selection:bg-[#8d7950] selection:text-white print:bg-white print:text-[#172b35]">
      <main className="max-w-[880px] mx-auto px-3 sm:px-5 py-6 sm:py-10 print:max-w-none print:p-0">
        {/* ヘッダー */}
        <header className="py-6 sm:py-8 border-b border-[#8d7950] print:py-0 print:pb-4">
          <small className="tracking-[0.3em] text-[#d2b879] font-semibold text-xs block">
            MARRIAGE QUEST
          </small>
          <h1 className="text-2xl sm:text-4xl font-bold tracking-wider my-2.5">
            婚活ダンジョンマップ
          </h1>
        </header>

        {/* マップエリア */}
        <div className="relative py-6 sm:py-8 print:pt-4">
          {/* 点線の縦ルート軸 */}
          <div className="absolute left-[30px] sm:left-[42px] top-[40px] bottom-[50px] border-l-2 border-dashed border-[#71684f] z-0" />

          {/* 各ルーム（ステップ） */}
          <div className="space-y-6">
            {rooms.map((room, idx) => {
              const isLast = idx === rooms.length - 1;

              return (
                <section
                  key={room.label}
                  className="relative z-10 grid grid-cols-[62px_1fr] sm:grid-cols-[86px_1fr] gap-2.5 sm:gap-5 items-start print:break-inside-avoid print:mb-4"
                >
                  {/* ゲート（アーチ門） */}
                  <div className="pt-3.5 text-center relative select-none">
                    <span className="block text-[#e9c982] text-[11px] sm:text-xs tracking-[0.16em] font-medium">
                      {room.label}
                    </span>

                    {/* 門のグラデーション枠 */}
                    <div className="relative w-[52px] h-[74px] sm:w-[66px] sm:h-[90px] bg-gradient-to-br from-[#b59c68] via-[#e9d5a6] to-[#806d49] rounded-t-[38px] rounded-b-[3px] mx-auto my-1.25 border-2 border-[#e7d4aa] p-1.5 sm:p-2 shadow-lg shadow-black/40">
                      {/* アーチ内側 */}
                      <div className="h-full rounded-t-[30px] rounded-b-none bg-gradient-to-b from-[#e8bd61] to-[#fff1b2] overflow-hidden">
                        {/* 扉 */}
                        <div className="h-full bg-[repeating-linear-gradient(90deg,#4b3927_0_9px,#624d33_9px_11px)] border-2 border-[#96723d] relative origin-left -rotate-y-45 transition-transform duration-300 group-open:rotate-y-0">
                          {/* ドアノブ */}
                          <div className="absolute right-[5px] top-[52%] w-1.25 h-1.25 rounded-full bg-[#e7c170]" />
                        </div>
                      </div>
                    </div>

                    {!isLast && (
                      <div className="text-center text-[#d8bc7f] mt-3 font-mono print:text-[#8d6e34]">
                        ↓
                      </div>
                    )}
                  </div>

                  {/* 詳細アコーディオン */}
                  <details
                    open={room.defaultOpen}
                    className={`bg-[#faf6eb] text-[#263841] rounded-lg shadow-md overflow-hidden transition-all print:shadow-none ${
                      room.isBoss
                        ? 'border-2 border-[#d5b566]'
                        : 'border border-[#bca67b]'
                    }`}
                  >
                    <summary
                      className={`p-3.5 sm:p-5 text-base sm:text-lg font-bold cursor-pointer list-none select-none flex items-center ${
                        room.isBoss ? 'bg-[#e6d4a9]' : 'bg-[#eee5d0]'
                      }`}
                    >
                      <span className="text-[#99753b] mr-2">◇</span>
                      <span className="print:text-[13pt]">{room.summary}</span>
                    </summary>

                    {room.body && (
                      <div className="px-3.5 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-base whitespace-pre-wrap break-words leading-relaxed print:text-[11pt]">
                        {room.body}
                      </div>
                    )}
                  </details>
                </section>
              );
            })}
          </div>
        </div>

        {/* フッター */}
        <footer className="border-t border-[#71684f] pt-5.5 text-[#d2b879] text-xs tracking-[0.16em] print:hidden">
          MARRIAGE QUEST / DUNGEON MAP
        </footer>
      </main>
    </div>
  );
}