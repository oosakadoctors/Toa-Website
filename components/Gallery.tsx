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
    <section className="relative w-full max-w-6xl mx-auto my-8 px-4 sm:px-6">
      <div
        className={`relative overflow-hidden rounded-3xl border-2 bg-gradient-to-r shadow-2xl transition-all duration-700 ease-in-out ${theme.border} ${theme.bgGradient}`}
      >
        {/* Previous Button */}
        <button
          onClick={previous}
          className={`absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 md:h-13 md:w-13 items-center justify-center rounded-full bg-white/90 text-xl font-bold text-gray-700 shadow-md backdrop-blur-md transition-all duration-300 hover:text-white hover:scale-105 active:scale-95 ${theme.navHover}`}
          aria-label="Previous slide"
        >
          ←
        </button>

        {/* Content Container */}
        <ContentWrapper>
          {/* Image Container */}
          <div className="relative w-full h-[40vh] min-h-[300px] max-h-[500px] bg-white/40 backdrop-blur-sm flex items-center justify-center p-4">
            <Image
              src={currentSlide.src}
              alt={currentSlide.alt || currentSlide.title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-contain p-2 transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>

          {/* Text Content Area */}
          <div className="w-full max-w-3xl mx-auto text-center px-6 sm:px-12 py-6 md:py-8 space-y-3">
            <h3
              className={`text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight transition-colors duration-300 ${theme.titleHover}`}
            >
              {currentSlide.title}
            </h3>

            {/* Description forced to 18px with tighter compressed line-height */}
            <p className="text-[18px] leading-snug text-gray-700 max-w-2xl mx-auto font-normal">
              {currentSlide.description}
            </p>

            {currentSlide.href && (
              <div className="pt-2">
                <span
                  className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-white font-bold text-[15px] shadow-md group-hover:gap-3.5 transition-all duration-300 ${theme.btnBg}`}
                >
                  詳細を見る
                  <span className="text-lg">→</span>
                </span>
              </div>
            )}
          </div>
        </ContentWrapper>

        {/* Next Button */}
        <button
          onClick={next}
          className={`absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 md:h-13 md:w-13 items-center justify-center rounded-full bg-white/90 text-xl font-bold text-gray-700 shadow-md backdrop-blur-md transition-all duration-300 hover:text-white hover:scale-105 active:scale-95 ${theme.navHover}`}
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