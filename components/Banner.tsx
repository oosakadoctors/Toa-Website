'use client';

import { useState, useEffect } from 'react';

export default function PremiumBanner() {
  const [remainingSlots, setRemainingSlots] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingSlots((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getBannerMessage = () => {
    if (remainingSlots === 0) {
      return (
        <span>
          今月の新規受付枠は<span className="mx-1 font-bold text-red-400 underline underline-offset-4 decoration-red-400">【満員御礼】</span>となりました。
        </span>
      );
    }
    return (
      <span>
        現在、空き枠は<span className="mx-1 font-bold text-amber-400 underline underline-offset-4 decoration-amber-400">【残り{remainingSlots}名様】</span>です。
      </span>
    );
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-blue-900 px-2 py-10 text-center text-white shadow-2xl sm:px-6 md:px-12 md:py-16">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/20 via-slate-900/40 to-slate-900" />

      {/* コンテンツエリア */}
      <div className="relative z-10 mx-auto max-w-3xl">
        <h2 className="text-xl font-bold tracking-widest text-amber-200 md:text-3xl">
          大阪梅田ドクターズ結婚相談所
        </h2>
        <p className="mt-2 text-xs font-semibold tracking-[0.2em] text-amber-400/80 md:text-sm">
          【PREMIUM COUNSELING SERVICE】
        </p>

        <p className="mt-6 text-sm leading-relaxed text-slate-200 md:text-base md:leading-loose">
          サポート品質を絶対的に維持するため、毎月の新規受付は一律5名様まで。<br />
          {getBannerMessage()}
        </p>

        {/* 5つの限定枠インジケーター (Slightly larger sizing with optimized gap spacing) */}
        <div className="my-6 sm:my-10 flex min-h-[80px] sm:min-h-[88px] flex-row items-center justify-center gap-1 xs:gap-2 sm:gap-3 md:gap-4 w-full py-4 overflow-visible">
          {[5, 4, 3, 2, 1].map((num) => {
            const isVisible = num <= remainingSlots;
            const isActiveLast = num === remainingSlots && remainingSlots > 0;

            if (!isVisible) {
              return (
                <div
                  key={num}
                  className="w-0 scale-0 opacity-0 transition-all duration-700 ease-out pointer-events-none"
                />
              );
            }

            if (!isActiveLast) {
              return (
                <div
                  key={num}
                  className="flex h-12 w-12 xs:h-14 xs:w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 flex-col items-center justify-center rounded-full border border-amber-600/30 bg-gradient-to-br from-amber-700/40 to-amber-900/60 font-medium tracking-wider text-amber-200/50 shadow-inner backdrop-blur-sm shrink-0 transition-all duration-700 ease-out scale-100 opacity-100"
                >
                  <span className="text-[13px] xs:text-[14px] sm:text-base md:text-lg font-black leading-none mb-0.5">{num}</span>
                  <span className="text-[7.5px] xs:text-[8px] sm:text-[9px] md:text-xs opacity-60 leading-none">Reserved</span>
                </div>
              );
            }

            // Active Glowing Slot
            return (
              <div
                key={num}
                className="relative flex h-12 w-12 xs:h-14 xs:w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 animate-pulse flex-col items-center justify-center rounded-full border-2 border-amber-400 bg-gradient-to-br from-amber-300 via-amber-500 to-amber-600 text-center font-bold text-slate-950 shadow-[0_0_15px_rgba(251,191,36,0.6)] shrink-0 transition-all duration-700 ease-out scale-100 opacity-100"
              >
                <span className="text-[13px] xs:text-[14px] sm:text-base md:text-lg font-black leading-none mb-0.5">{num}</span>
                <span className="text-[7.5px] xs:text-[8px] sm:text-[9px] md:text-[10px] font-black leading-none uppercase tracking-tighter">
                  Last {num}
                </span>
                <span className="text-[6px] xs:text-[7px] sm:text-[8px] md:text-[9px] font-normal leading-none opacity-90 mt-0.5">
                  残り{num}名
                </span>
                <div className="absolute inset-0 -z-10 rounded-full bg-amber-400 blur-sm opacity-50" />
              </div>
            );
          })}

          {remainingSlots === 0 && (
            <p className="text-sm font-bold text-red-400 animate-fade-in py-2">
              今月の受付は終了しました
            </p>
          )}
        </div>

        <p className="text-xs text-amber-200/75 md:text-sm">
          {remainingSlots > 0
            ? '枠が埋まり次第、今月の審査・面談受付は完全に終了となります。'
            : '来月の受付開始をお待ちいただくか、直接お問い合わせください。'}
        </p>
      </div>
    </div>
  );
}