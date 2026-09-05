import React from 'react';

export default function CounselingKarteTable() {
  const karteData = [
    {
      category: "ご相談者ステータス",
      status: "32歳・初婚女性・会社員（年収400万）",
      strategy: "30代前半・初婚はIBJ市場で需要が非常に高い強み。ポテンシャルを最大化するプロフィールを作成。"
    },
    {
      category: "お相手へのご条件",
      status: "身長170cm以上、年収600万以上の初婚男性",
      strategy: "ボリュームゾーンとして多数実在。登録初期3ヶ月の「入会バブル」を逃さない緻密な先行申込計画。"
    },
    {
      category: "潜在的なこだわり",
      status: "趣味（テニス）、ペット（猫）、禁煙（絶対条件）",
      strategy: "IBJの「こだわり検索機能」をフル活用。相性やライフスタイルが最初から一致する男性を厳選しミスマッチを完全排除。"
    },
    {
      category: "活動スケジュール",
      status: "仕事が忙しく、週末のパニックを避けたい",
      strategy: "お見合い成立確率（目安8%）を考慮。週2回（100人申込で毎週2人）など、仕事と両立できる活動量をロジカルに設計。"
    },
    {
      category: "費用のご不安",
      status: "複雑なプランや追加料金が心配",
      strategy: "月会費15,000円（一律・税込）の1プランのみ。毎月の申込制限なし＆お見合い4回まで無料で費用負担を軽減。"
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto my-6 px-2 sm:px-4">
      {/* キャッチコピー */}
      <div className="mb-4 text-center md:text-left">
        <span className="inline-block bg-pink-100 text-pink-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
          可視化サポート
        </span>
        <h3 className="text-lg sm:text-xl font-bold text-slate-800">A子さんのドクターズカウンセリングカルテ</h3>
        <p className="text-xs text-slate-500 mt-1">無料カウンセリングでお聞きした本音と、当相談所が提示する成婚戦略のサマリーです。</p>
      </div>

      {/* 3列固定・レスポンシブテーブル容器 */}
      <div className="w-full rounded-xl border border-slate-200 shadow-sm bg-white overflow-hidden">
        <table className="w-full border-collapse text-left table-fixed">
          {/* 厳格な列幅設定 (スマホ時: 28% - 32% - 40%) */}
          <colgroup>
            <col className="w-[28%] sm:w-1/4" />
            <col className="w-[32%] sm:w-1/3" />
            <col className="w-[40%] sm:w-5/12" />
          </colgroup>

          {/* ヘッダー部分 */}
          <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold text-[11px] sm:text-sm">
            <tr>
              <th scope="col" className="px-1.5 py-2.5 sm:px-4 sm:py-3 leading-tight">分析項目</th>
              <th scope="col" className="px-1.5 py-2.5 sm:px-4 sm:py-3 leading-tight">ご相談者様の状況・ご希望</th>
              <th scope="col" className="px-1.5 py-2.5 sm:px-4 sm:py-3 text-pink-700 bg-pink-50/50 leading-tight">医師×仲人による成婚戦略</th>
            </tr>
          </thead>
          
          {/* ボディ部分 */}
          <tbody className="divide-y divide-slate-100 font-medium text-[10px] sm:text-xs md:text-sm">
            {karteData.map((row, index) => (
              <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                {/* 1列目: 分析項目 */}
                <td className="px-1.5 py-2.5 sm:px-4 sm:py-3 text-slate-900 font-bold bg-slate-50/30 break-all leading-snug align-top">
                  {row.category}
                </td>
                
                {/* 2列目: 状況・希望 */}
                <td className="px-1.5 py-2.5 sm:px-4 sm:py-3 text-slate-700 break-words leading-snug align-top">
                  {row.status}
                </td>
                
                {/* 3列目: 成婚戦略 */}
                <td className="px-1.5 py-2.5 sm:px-4 sm:py-3 bg-pink-50/20 text-slate-800 font-normal break-words leading-snug align-top">
                  <div className="flex items-start gap-1 sm:gap-2">
                    <span className="text-pink-500 font-bold shrink-0 text-[10px] sm:text-xs">💡</span>
                    <span>{row.strategy}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-right text-[10px] sm:text-[11px] text-slate-400 mt-2">
        ※データの抽出・分析には当相談所独自の「婚活未来図MMM」を使用しています。
      </p>
    </div>
  );
}