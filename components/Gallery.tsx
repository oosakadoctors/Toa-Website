"use client";

import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Slide = {
  src: StaticImageData | string;
  alt: string;
  title: string;
  description: string;
  href?: string;
};

interface GalleryProps {
  slides: Slide[];
  autoPlay?: boolean;
  interval?: number;
}

const COLOR_THEMES = [
  {
    bgGradient: "from-pink-100 via-rose-50 to-amber-50",
    border: "border-pink-200",
    titleHover: "group-hover:text-pink-600",
    btnBg: "bg-pink-500 hover:bg-pink-600",
    navHover: "hover:bg-pink-500",
    dotActive: "bg-pink-500",
    dotInactive: "bg-pink-200 hover:bg-pink-300",
  },
  {
    bgGradient: "from-blue-100 via-sky-50 to-teal-50",
    border: "border-sky-200",
    titleHover: "group-hover:text-sky-600",
    btnBg: "bg-sky-500 hover:bg-sky-600",
    navHover: "hover:bg-sky-500",
    dotActive: "bg-sky-500",
    dotInactive: "bg-sky-200 hover:bg-sky-300",
  },
  {
    bgGradient: "from-purple-100 via-fuchsia-50 to-pink-50",
    border: "border-purple-200",
    titleHover: "group-hover:text-purple-600",
    btnBg: "bg-purple-500 hover:bg-purple-600",
    navHover: "hover:bg-purple-500",
    dotActive: "bg-purple-500",
    dotInactive: "bg-purple-200 hover:bg-purple-300",
  },
  {
    bgGradient: "from-amber-100 via-orange-50 to-rose-50",
    border: "border-amber-200",
    titleHover: "group-hover:text-amber-600",
    btnBg: "bg-amber-500 hover:bg-amber-600",
    navHover: "hover:bg-amber-500",
    dotActive: "bg-amber-500",
    dotInactive: "bg-amber-200 hover:bg-amber-300",
  },
  {
    bgGradient: "from-emerald-100 via-teal-50 to-cyan-50",
    border: "border-emerald-200",
    titleHover: "group-hover:text-emerald-600",
    btnBg: "bg-emerald-500 hover:bg-emerald-600",
    navHover: "hover:bg-emerald-500",
    dotActive: "bg-emerald-500",
    dotInactive: "bg-emerald-200 hover:bg-emerald-300",
  },
];

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
  const theme = COLOR_THEMES[current % COLOR_THEMES.length];

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
    <section className="relative w-full max-w-6xl mx-auto my-6 px-4 sm:px-6">
      <div
        className={`relative overflow-hidden rounded-3xl border-2 bg-gradient-to-r shadow-2xl transition-all duration-700 ease-in-out ${theme.border} ${theme.bgGradient}`}
      >
        {/* Previous Button */}
        <button
          onClick={previous}
          className={`absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-11 sm:w-11 md:h-13 md:w-13 items-center justify-center rounded-full bg-white/90 text-lg sm:text-xl font-bold text-gray-700 shadow-md backdrop-blur-md transition-all duration-300 hover:text-white hover:scale-105 active:scale-95 ${theme.navHover}`}
          aria-label="Previous slide"
        >
          ←
        </button>

        {/* Content Container */}
        <ContentWrapper>
          {/* Image Container */}
          <div className="relative w-full h-[35vh] min-h-[240px] max-h-[440px] bg-white/40 backdrop-blur-sm flex items-center justify-center p-2">
            <Image
              src={currentSlide.src}
              alt={currentSlide.alt || currentSlide.title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-contain p-2 transition-transform duration-700 group-hover:scale-[1.02]"
            />

            {/* Overlay Disclaimer */}
            <span className="absolute bottom-3 right-3 z-10 text-xs text-slate-600 bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-md shadow-sm pointer-events-none select-none">
              ※画像はイメージです。
            </span>
          </div>

          {/* Text Content & Button Area - Always Side-by-Side */}
          <div className="w-full max-w-4xl mx-auto px-10 sm:px-16 pt-3 pb-4">
            <div className="flex flex-row items-center justify-between gap-3 text-left">
              {/* Text Group */}
              <div className="space-y-1 min-w-0 flex-1">
                <h3
                  className={`text-lg sm:text-2xl md:text-3xl font-extrabold text-gray-900 leading-none tracking-tight truncate transition-colors duration-300 ${theme.titleHover}`}
                >
                  {currentSlide.title}
                </h3>

                <p className="text-[15px] sm:text-[18px] leading-tight tracking-tight text-gray-700 font-normal line-clamp-2 sm:line-clamp-none">
                  {currentSlide.description}
                </p>
              </div>

              {/* Button Group - Fixed side-by-side even on small screens */}
              {currentSlide.href && (
                <div className="flex-shrink-0">
                  <span
                    className={`inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full text-white font-bold text-[12px] sm:text-[14px] shadow-sm whitespace-nowrap group-hover:gap-2.5 transition-all duration-300 ${theme.btnBg}`}
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
          className={`absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-11 sm:w-11 md:h-13 md:w-13 items-center justify-center rounded-full bg-white/90 text-lg sm:text-xl font-bold text-gray-700 shadow-md backdrop-blur-md transition-all duration-300 hover:text-white hover:scale-105 active:scale-95 ${theme.navHover}`}
          aria-label="Next slide"
        >
          →
        </button>
      </div>

      {/* Navigation Dots */}
      {slides.length > 1 && (
        <div className="mt-3 flex justify-center gap-2">
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