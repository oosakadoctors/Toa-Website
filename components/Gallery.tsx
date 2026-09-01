"use client";

import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export type ThemeKey =
  | "pink"
  | "blue"
  | "purple"
  | "amber"
  | "emerald"
  | "dark"
  | "navy"
  | "darkNavy"
  | "vibrantPink";

interface ThemeConfig {
  bgGradient: string;
  border: string;
  textTitle: string;
  textDescription: string;
  titleHover: string;
  btnBg: string;
  navHover: string;
  dotActive: string;
  dotInactive: string;
}

type Slide = {
  src: StaticImageData | string;
  alt: string;
  title: string;
  description: string;
  href?: string;
  theme?: ThemeKey | ThemeConfig;
};

interface GalleryProps {
  slides: Slide[];
  autoPlay?: boolean;
  interval?: number;
}

const COLOR_THEMES: Record<ThemeKey, ThemeConfig> = {
  pink: {
    bgGradient: "from-pink-100 via-rose-50 to-amber-50",
    border: "border-pink-200",
    textTitle: "text-gray-900",
    textDescription: "text-gray-700",
    titleHover: "group-hover:text-pink-600",
    btnBg: "bg-pink-500 hover:bg-pink-600",
    navHover: "hover:bg-pink-500 hover:text-white",
    dotActive: "bg-pink-500",
    dotInactive: "bg-pink-200 hover:bg-pink-300",
  },
  blue: {
    bgGradient: "from-blue-100 via-sky-50 to-teal-50",
    border: "border-sky-200",
    textTitle: "text-gray-900",
    textDescription: "text-gray-700",
    titleHover: "group-hover:text-sky-600",
    btnBg: "bg-sky-500 hover:bg-sky-600",
    navHover: "hover:bg-sky-500 hover:text-white",
    dotActive: "bg-sky-500",
    dotInactive: "bg-sky-200 hover:bg-sky-300",
  },
  purple: {
    bgGradient: "from-purple-100 via-fuchsia-50 to-pink-50",
    border: "border-purple-200",
    textTitle: "text-gray-900",
    textDescription: "text-gray-700",
    titleHover: "group-hover:text-purple-600",
    btnBg: "bg-purple-500 hover:bg-purple-600",
    navHover: "hover:bg-purple-500 hover:text-white",
    dotActive: "bg-purple-500",
    dotInactive: "bg-purple-200 hover:bg-purple-300",
  },
  amber: {
    bgGradient: "from-amber-100 via-orange-50 to-rose-50",
    border: "border-amber-200",
    textTitle: "text-gray-900",
    textDescription: "text-gray-700",
    titleHover: "group-hover:text-amber-600",
    btnBg: "bg-amber-500 hover:bg-amber-600",
    navHover: "hover:bg-amber-500 hover:text-white",
    dotActive: "bg-amber-500",
    dotInactive: "bg-amber-200 hover:bg-amber-300",
  },
  emerald: {
    bgGradient: "from-emerald-100 via-teal-50 to-cyan-50",
    border: "border-emerald-200",
    textTitle: "text-gray-900",
    textDescription: "text-gray-700",
    titleHover: "group-hover:text-emerald-600",
    btnBg: "bg-emerald-500 hover:bg-emerald-600",
    navHover: "hover:bg-emerald-500 hover:text-white",
    dotActive: "bg-emerald-500",
    dotInactive: "bg-emerald-200 hover:bg-emerald-300",
  },
  dark: {
    bgGradient: "from-slate-300 via-gray-200 to-zinc-300",
    border: "border-slate-400",
    textTitle: "text-gray-900",
    textDescription: "text-gray-700",
    titleHover: "group-hover:text-slate-800",
    btnBg: "bg-slate-800 hover:bg-slate-900",
    navHover: "hover:bg-slate-800 hover:text-white",
    dotActive: "bg-slate-800",
    dotInactive: "bg-slate-400 hover:bg-slate-500",
  },
  navy: {
    bgGradient: "from-slate-300 via-indigo-100 to-sky-200",
    border: "border-indigo-300",
    textTitle: "text-gray-900",
    textDescription: "text-gray-700",
    titleHover: "group-hover:text-indigo-900",
    btnBg: "bg-indigo-900 hover:bg-indigo-950",
    navHover: "hover:bg-indigo-900 hover:text-white",
    dotActive: "bg-indigo-900",
    dotInactive: "bg-indigo-300 hover:bg-indigo-400",
  },
  darkNavy: {
    bgGradient: "from-blue-950 via-indigo-900 to-slate-900",
    border: "border-blue-700",
    textTitle: "text-white",
    textDescription: "text-blue-100",
    titleHover: "group-hover:text-sky-300",
    btnBg: "bg-blue-600 hover:bg-blue-500",
    navHover: "hover:bg-blue-600 hover:text-white",
    dotActive: "bg-sky-400",
    dotInactive: "bg-blue-900 hover:bg-blue-800",
  },
  vibrantPink: {
    bgGradient: "from-pink-200 via-rose-100 to-pink-100",
    border: "border-pink-300",
    textTitle: "text-gray-900",
    textDescription: "text-gray-700",
    titleHover: "group-hover:text-pink-700",
    btnBg: "bg-pink-600 hover:bg-pink-700",
    navHover: "hover:bg-pink-600 hover:text-white",
    dotActive: "bg-pink-600",
    dotInactive: "bg-pink-300 hover:bg-pink-400",
  },
};

const DEFAULT_THEME_KEYS: ThemeKey[] = ["pink", "blue", "purple", "amber", "emerald"];

export default function Gallery({
  slides,
  autoPlay = true,
  interval = 5000,
}: GalleryProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, slides.length]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const previous = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (!slides || slides.length === 0) return null;

  const currentSlide = slides[current];

  const slideTheme = currentSlide.theme;
  const theme: ThemeConfig = slideTheme
    ? typeof slideTheme === "string"
      ? COLOR_THEMES[slideTheme] || COLOR_THEMES.pink
      : slideTheme
    : COLOR_THEMES[DEFAULT_THEME_KEYS[current % DEFAULT_THEME_KEYS.length]];

  const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
    if (currentSlide.href) {
      return (
        <Link
          href={currentSlide.href}
          className="w-full flex flex-col group cursor-pointer"
        >
          {children}
        </Link>
      );
    }
    return <div className="w-full flex flex-col">{children}</div>;
  };

  return (
    <section className="relative w-full max-w-4xl mx-auto my-6 px-0 sm:px-6">
      <div
        className={`relative overflow-hidden rounded-2xl sm:rounded-[2rem] border-y sm:border-2 bg-gradient-to-r shadow-2xl transition-all duration-700 ease-in-out ${theme.border} ${theme.bgGradient}`}
      >
        {/* Previous Button */}
        <button
          onClick={previous}
          className={`absolute left-3 sm:left-5 md:left-6 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-white/85 text-base sm:text-2xl font-bold text-gray-800 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 ${theme.navHover}`}
          aria-label="Previous slide"
        >
          ←
        </button>

        {/* Content Container */}
        <ContentWrapper>
          {/* Square Unclipped Image Container */}
          <div className="relative w-full aspect-square max-h-[550px] flex items-center justify-center p-2 sm:p-5">
            <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden">
              <Image
                src={currentSlide.src}
                alt={currentSlide.alt || currentSlide.title}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain p-1 transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay Disclaimer */}
              <span className="absolute bottom-2 right-3 z-10 text-xs text-white/90 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md select-none pointer-events-none">
                ※画像はイメージです。
              </span>
            </div>
          </div>

          {/* Text Content & Button Area */}
          <div className="w-full max-w-4xl mx-auto px-5 sm:px-12 py-4 sm:py-5">
            <div className="flex flex-row items-center justify-between gap-3 sm:gap-4 text-left">
              {/* Text Group */}
              <div className="space-y-1 min-w-0 flex-1">
                <h3
                  className={`text-[20px] sm:text-[22px] font-extrabold leading-tight tracking-tight truncate transition-colors duration-300 ${theme.textTitle} ${theme.titleHover}`}
                >
                  {currentSlide.title}
                </h3>

                <p
                  className={`text-[16px] sm:text-[20px] leading-snug tracking-tight font-normal line-clamp-2 sm:line-clamp-none ${theme.textDescription}`}
                >
                  {currentSlide.description}
                </p>
              </div>

              {/* Button Group */}
              {currentSlide.href && (
                <div className="flex-shrink-0">
                  <span
                    className={`inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-6 sm:py-3 rounded-full text-white font-bold text-[18px] sm:text-[20px] shadow-md whitespace-nowrap group-hover:gap-3 transition-all duration-300 ${theme.btnBg}`}
                  >
                    詳細を見る
                    <span className="text-xs sm:text-base">→</span>
                  </span>
                </div>
              )}
            </div>
          </div>
        </ContentWrapper>

        {/* Next Button */}
        <button
          onClick={next}
          className={`absolute right-3 sm:right-5 md:right-6 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-white/85 text-base sm:text-2xl font-bold text-gray-800 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 ${theme.navHover}`}
          aria-label="Next slide"
        >
          →
        </button>
      </div>

      {/* Navigation Dots */}
      {slides.length > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`transition-all duration-500 ${
                current === index
                  ? `h-3 w-8 rounded-full shadow-sm ${theme.dotActive}`
                  : `h-3 w-3 rounded-full ${theme.dotInactive}`
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}