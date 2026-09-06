import React from 'react';

export default function DungeonMapPage() {
  const rooms = [
    {
      label: 'START',
      summary: 'START｜活動開始',
      body: '活動を始める最初の段階では、目標設定そのものが分岐点になります。\n目的地を決めずに歩き出すと途中で判断がぶれるため、最初に週・月の活動量の目安を仲人と共有しておきます。',
      defaultOpen: false,
    },
    {
      label: 'GATE 01',
      summary: '分岐① 自分から何人に申し込みますか？',
      body: '週＿＿人／月＿＿人を目標にします。\n\nここを「気が向いたときだけ」にしてしまうと、そもそも分岐②以降に進む機会自体が生まれません。活動量の土台となる分岐点です。',
      defaultOpen: true,
    },
    {
      label: 'GATE 02',
      summary: '分岐② 申し込みが来ました',
      body: '「完璧に好みではない」という理由ですべてお断りしないために、\n\n月＿＿人以上はプロフィールをしっかり検討します。\n\n条件内であれば＿＿人程度は会ってみます。\n\n書類上の第一印象だけで機会を減らしすぎない仕組みです。',
      defaultOpen: true,
    },
    {
      label: 'GATE 03',
      summary: '分岐③ お見合い成立',
      body: '月＿＿件を目安にします。\n\n多すぎて疲れてしまわないように、上限も決めておきます。\n\n月最大＿＿件\n\n疲弊すると判断の質そのものが落ちるため、上限設定は成婚率を守るための重要な工程です。',
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
      body: '＿＿人を超えたら、新規お見合いを減らします／一度整理します。\n\n同時進行数が増えすぎると一人ひとりへの向き合い方が浅くなり、判断の精度が落ちるためです。',
      defaultOpen: true,
    },
    {
      label: 'GATE 09',
      summary: '分岐⑨ 一人が気になり始めました',
      body: '他の方とのご縁をすべて終了する前に、\n\n結婚条件・生活・気持ちの3点を仲人と確認します。\n\n感情の高まりだけで判断し、後から重要なミスマッチに気づくのを防ぎます。',
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

  const faqs = [
    {
      q: '仮交際の同時進行人数に決まりはありますか？',
      a: '決まった人数はなく、本人のタイプに合わせて仲人と設定します。1人に集中する方が向いているか、2〜3人を比較する方が向いているかは個人差があります。',
    },
    {
      q: 'お見合い後「よく分からない」と感じた場合、断るべきですか？',
      a: '即座に断る必要はありません。明確なNG要素がなければもう一度会う、あるいはお見合い4回につき1回は仮交側に進むことを目安にします。',
    },
    {
      q: '気になる点が出てきたら、その場で交際を終了すべきですか？',
      a: 'その場で終了せず、事実確認をしたうえで仲人に相談してから判断します。印象だけの判断は誤解につながることがあります。',
    },
    {
      q: '婚活ダンジョンマップは無料相談で作成できますか？',
      a: '可能です。無料相談の中で、各分岐点の数値・基準を本人の希望に合わせて仲人と一緒に設定します。',
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#101d25] text-[#f3ead7] font-sans leading-relaxed selection:bg-[#8d7950] selection:text-white print:bg-white print:text-[#172b35]">
      {/* Container set to full-width */}
      <main className="w-full max-w-none px-4 sm:px-8 md:px-12 py-6 sm:py-10 print:max-w-none print:p-0">
        {/* ヘッダー */}
        <header className="py-6 sm:py-8 border-b border-[#8d7950] print:py-0 print:pb-4">
          <small className="tracking-[0.3em] text-[#d2b879] font-semibold text-xs block">
            MARRIAGE QUEST
          </small>
          <h1 className="text-2xl sm:text-4xl font-bold tracking-wider my-2.5">
            婚活ダンジョンマップ
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#c3b188] mt-2">
            <span>更新日：2026年09月05日</span>
            <span>｜</span>
            <span>
              監修：〇〇結婚相談所（大阪梅田・IBJ加盟）代表カウンセラー（医療法人役員・病院勤務医・内科認定医）
            </span>
          </div>
        </header>

        {/* 目次 */}
        <nav className="my-8 p-4 sm:p-6 bg-[#182933] border border-[#8d7950]/50 rounded-lg shadow-inner print:hidden">
          <h2 className="text-base sm:text-lg font-bold text-[#e9c982] mb-3 flex items-center">
            <span className="mr-2">📜</span> 目次
          </h2>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm sm:text-base text-[#dbcb9f]">
            <li>
              <a href="#overview" className="hover:text-[#fff1b2] hover:underline flex items-center">
                <span className="text-xs mr-2 text-[#8d7950]">1.</span> 婚活ダンジョンマップの概要
              </a>
            </li>
            <li>
              <a href="#quick-table" className="hover:text-[#fff1b2] hover:underline flex items-center">
                <span className="text-xs mr-2 text-[#8d7950]">2.</span> 10の分岐点一覧（早見表）
              </a>
            </li>
            <li>
              <a href="#map-flow" className="hover:text-[#fff1b2] hover:underline flex items-center">
                <span className="text-xs mr-2 text-[#8d7950]">3.</span> START〜BOSSまでのマップ
              </a>
            </li>
            <li>
              <a href="#importance" className="hover:text-[#fff1b2] hover:underline flex items-center">
                <span className="text-xs mr-2 text-[#8d7950]">4.</span> なぜ「事前にルールを決める」ことが重要なのか
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-[#fff1b2] hover:underline flex items-center">
                <span className="text-xs mr-2 text-[#8d7950]">5.</span> よくある質問
              </a>
            </li>
            <li>
              <a href="#consultation" className="hover:text-[#fff1b2] hover:underline flex items-center">
                <span className="text-xs mr-2 text-[#8d7950]">6.</span> 無料相談でのご案内
              </a>
            </li>
          </ol>
        </nav>

        {/* 1. 概要 */}
        <section id="overview" className="mb-10 scroll-mt-6">
          <h2 className="text-lg sm:text-xl font-bold border-l-4 border-[#d2b879] pl-3 my-4 text-[#e9c982]">
            婚活ダンジョンマップの概要
          </h2>
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#e2d8c3]">
            <p>
              婚活ダンジョンマップは、〇〇結婚相談所が独自に開発した婚活の意思決定フレームワークです。活動開始から成婚判断まで、婚活の過程を「START」「10の分岐点」「BOSS（成婚判断）」という一続きの流れとして図式化し、各分岐点でどう判断するかを
              <strong className="text-[#e9c982] underline font-medium ml-1">
                活動を始める前にあらかじめ本人と仲人で決めておく
              </strong>
              ことを目的としています。
            </p>
            <p>
              このフレームワークは、内科医師でもある代表カウンセラー自身の相談実績と、これまでの婚活支援ケースの蓄積をもとに設計されました。婚活がうまくいかない大きな要因の一つは、判断基準を決めないまま活動を始め、お見合いや仮交際の場でそのつど感情的に判断してしまうことです。「なんとなく違う気がする」「完璧に好みではない」という理由で機会を切り続けると、活動量が多くても成婚に至らないまま時間だけが過ぎていきます。
            </p>
            <p>
              IBJが公表しているデータでも、お見合いから交際、成婚に至るまでには一定の継続的な活動量が必要であることが示されています。婚活ダンジョンマップは、この継続を感情まかせにせず、各段階で「何人」「どの基準」「誰に相談するか」を数値と行動であらかじめ言語化しておく設計になっています。
            </p>
          </div>
        </section>

        {/* 2. 早見表 */}
        <section id="quick-table" className="mb-10 scroll-mt-6">
          <h2 className="text-lg sm:text-xl font-bold border-l-4 border-[#d2b879] pl-3 my-4 text-[#e9c982]">
            10の分岐点一覧（早見表）
          </h2>
          <div className="overflow-x-auto rounded-lg border border-[#8d7950]/50 my-4">
            <table className="w-full text-left text-sm sm:text-base border-collapse">
              <thead>
                <tr className="bg-[#1e323d] text-[#e9c982] border-b border-[#8d7950]">
                  <th className="p-3 whitespace-nowrap w-28">分岐点</th>
                  <th className="p-3 min-w-[180px] w-1/3">内容</th>
                  <th className="p-3 min-w-[250px]">事前に決めておくこと</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#8d7950]/30 bg-[#14242e] text-[#e2d8c3]">
                <tr><td className="p-3 font-semibold text-[#d2b879]">START</td><td className="p-3">活動開始</td><td className="p-3">週・月の活動目標</td></tr>
                <tr><td className="p-3 font-semibold text-[#d2b879]">分岐①</td><td className="p-3">申し込み数</td><td className="p-3">週＿人／月＿人</td></tr>
                <tr><td className="p-3 font-semibold text-[#d2b879]">分岐②</td><td className="p-3">申し込みへの対応</td><td className="p-3">検討する人数・会う人数の下限</td></tr>
                <tr><td className="p-3 font-semibold text-[#d2b879]">分岐③</td><td className="p-3">お見合い成立</td><td className="p-3">月の目安件数と上限件数</td></tr>
                <tr><td className="p-3 font-semibold text-[#d2b879]">分岐④</td><td className="p-3">お見合い終了</td><td className="p-3">仮交側に進む基準（例：4回に1回）</td></tr>
                <tr><td className="p-3 font-semibold text-[#d2b879]">分岐⑤</td><td className="p-3">仮交際</td><td className="p-3">同時進行人数の目安</td></tr>
                <tr><td className="p-3 font-semibold text-[#d2b879]">分岐⑥</td><td className="p-3">「よく分からない」状態</td><td className="p-3">即終了／再会／仲人相談のルール</td></tr>
                <tr><td className="p-3 font-semibold text-[#d2b879]">分岐⑦</td><td className="p-3">気になる点の発生</td><td className="p-3">事実確認→仲人相談→判断の順序</td></tr>
                <tr><td className="p-3 font-semibold text-[#d2b879]">分岐⑧</td><td className="p-3">仮交際人数の増加</td><td className="p-3">上限人数と調整方法</td></tr>
                <tr><td className="p-3 font-semibold text-[#d2b879]">分岐⑨</td><td className="p-3">一人が気になり始めた</td><td className="p-3">結婚条件・生活・気持ちの3点確認</td></tr>
                <tr><td className="p-3 font-semibold text-[#d2b879]">分岐⑩</td><td className="p-3">真剣交際</td><td className="p-3">結婚後の確認項目クリアの有無</td></tr>
                <tr className="bg-[#243642]"><td className="p-3 font-bold text-[#e9c982]">BOSS</td><td className="p-3 font-semibold">成婚判断</td><td className="p-3">「結婚生活を作りたいか」で判断</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. マップエリア */}
        <section id="map-flow" className="relative py-6 sm:py-8 print:pt-4 scroll-mt-6">
          <h2 className="text-lg sm:text-xl font-bold border-l-4 border-[#d2b879] pl-3 mb-6 text-[#e9c982]">
            START〜BOSSまでのマップ
          </h2>

          {/* 点線の縦ルート軸 */}
          <div className="absolute left-[30px] sm:left-[42px] top-[90px] bottom-[50px] border-l-2 border-dashed border-[#71684f] z-0" />

          {/* 各ルーム（ステップ） */}
          <div className="space-y-6">
            {rooms.map((room, idx) => {
              const isLast = idx === rooms.length - 1;

              return (
                <div
                  key={room.label}
                  className="relative z-10 grid grid-cols-[62px_1fr] sm:grid-cols-[86px_1fr] gap-2.5 sm:gap-5 items-start print:break-inside-avoid print:mb-4"
                >
                  {/* ゲート（アーチ門） */}
                  <div className="pt-3.5 text-center relative select-none">
                    <span className="block text-[#e9c982] text-[11px] sm:text-xs tracking-[0.16em] font-medium">
                      {room.label}
                    </span>

                    <div className="relative w-[52px] h-[74px] sm:w-[66px] sm:h-[90px] bg-gradient-to-br from-[#b59c68] via-[#e9d5a6] to-[#806d49] rounded-t-[38px] rounded-b-[3px] mx-auto my-1.25 border-2 border-[#e7d4aa] p-1.5 sm:p-2 shadow-lg shadow-black/40">
                      <div className="h-full rounded-t-[30px] rounded-b-none bg-gradient-to-b from-[#e8bd61] to-[#fff1b2] overflow-hidden">
                        <div className="h-full bg-[repeating-linear-gradient(90deg,#4b3927_0_9px,#624d33_9px_11px)] border-2 border-[#96723d] relative origin-left -rotate-y-45 transition-transform duration-300 group-open:rotate-y-0">
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
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. 事前ルールの重要性 */}
        <section id="importance" className="my-10 scroll-mt-6">
          <h2 className="text-lg sm:text-xl font-bold border-l-4 border-[#d2b879] pl-3 my-4 text-[#e9c982]">
            なぜ「事前にルールを決める」ことが重要なのか
          </h2>
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#e2d8c3]">
            <p>
              婚活の各分岐点で判断に迷うのは、能力や相性の問題ではなく、判断基準を活動開始前に言語化していないことが原因であるケースが多くあります。お見合いや交際の最中は感情が動いているため、冷静な基準に基づいた判断がしづらくなります。
            </p>
            <p>
              婚活ダンジョンマップは、感情が動く前の段階で本人の傾向に合わせた基準を仲人と一緒に設計し、実際の局面ではその基準に沿って判断するという構造を取ることで、活動量と判断の質の両方を安定させることを目的としています。
            </p>
          </div>

          <div className="mt-6 p-4 sm:p-5 bg-[#172b35] border border-[#8d7950]/60 rounded-lg">
            <p className="text-sm sm:text-base text-[#e9d5a6] mb-3 font-medium">
              💡 他の婚活タイプ別の判断基準はこちら：
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-[#d2b879] underline">
              <li>
                <a href="/simulation/male" className="hover:text-white transition-colors">
                  ・男性版の婚活シミュレーション
                </a>
              </li>
              <li>
                <a href="/simulation/32-office-worker" className="hover:text-white transition-colors">
                  ・32歳会社員女性のケース
                </a>
              </li>
              <li>
                <a href="/simulation/doctor-consultation" className="hover:text-white transition-colors">
                  ・女医さん無料相談シミュレーション（代表カウンセラー担当）
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* 5. よくある質問 */}
        <section id="faq" className="mb-10 scroll-mt-6">
          <h2 className="text-lg sm:text-xl font-bold border-l-4 border-[#d2b879] pl-3 my-6 text-[#e9c982]">
            よくある質問
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-[#182933] border border-[#8d7950]/50 rounded-lg overflow-hidden group"
              >
                <summary className="p-4 font-bold cursor-pointer text-[#e9c982] flex items-center justify-between select-none">
                  <span className="flex items-center">
                    <span className="text-[#d2b879] mr-2">Q.</span> {faq.q}
                  </span>
                  <span className="text-[#8d7950] group-open:rotate-180 transition-transform text-xs">
                    ▼
                  </span>
                </summary>
                <div className="px-4 pb-4 text-sm sm:text-base text-[#faf6eb] border-t border-[#8d7950]/20 pt-3 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* 6. 無料相談でのご案内 (CTA) */}
        <section id="consultation" className="my-10 scroll-mt-6">
          <div className="bg-gradient-to-b from-[#1d3340] to-[#12222b] border-2 border-[#d2b879] rounded-xl p-6 sm:p-10 text-center shadow-xl">
            <h2 className="text-xl sm:text-3xl font-bold text-[#e9c982] mb-4">
              無料相談でのご案内
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-6 text-[#f3ead7] max-w-4xl mx-auto">
              婚活ダンジョンマップは、無料相談の際に一人ひとりの希望や性格に合わせて数値・基準を一緒に埋めながら作成します。
              テンプレートをそのまま当てはめるのではなく、同時進行人数への向き不向きや、意思決定のスピードなど、本人の傾向を踏まえたうえで各分岐点の基準を設定していきます。
            </p>
            <a
              href="/consultation"
              className="inline-block bg-gradient-to-r from-[#b59c68] via-[#e9d5a6] to-[#806d49] text-[#101d25] font-bold text-base sm:text-lg px-10 py-4 rounded-lg shadow-lg hover:brightness-110 transition-all transform hover:-translate-y-0.5"
            >
              無料相談で自分だけのマップを作成する
            </a>
          </div>
        </section>

        {/* フッター */}
        <footer className="border-t border-[#71684f] pt-5.5 text-[#d2b879] text-xs tracking-[0.16em] print:hidden">
          MARRIAGE QUEST / DUNGEON MAP
        </footer>
      </main>
    </div>
  );
}