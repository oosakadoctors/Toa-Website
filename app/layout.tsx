import React from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

import type { Metadata } from 'next';

// Comprehensive LocalBusiness JSON-LD Structured Data Schema
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp/#organization",
  "name": "大阪梅田ドクターズ結婚相談所",
  "description": "現役女医と仲人歴20年のベテランカウンセラーによるダブルサポート体制の結婚相談所。毎月5名限定の完全少人数制で、20代・30代の1年以内の成婚を目指します。",
  "url": "https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp/",
  "telephone": "+81-90-6646-3456",
  "image": "https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp/logo2.png",
  "logo": "https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp/logo2.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "梅田1丁目2番2-200号 大阪駅前第2ビル2階 3-1-2",
    "addressLocality": "大阪市北区",
    "addressRegion": "大阪府",
    "postalCode": "530-0001",
    "addressCountry": "JP"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 34.698837,
    "longitude": 135.497885
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "09:00",
      "closes": "21:00"
    }
  ],
  "priceRange": "¥¥¥",
  "areaServed": [
    { "@type": "City", "name": "大阪市" },
    { "@type": "AdministrativeArea", "name": "大阪府" },
    { "@type": "AdministrativeArea", "name": "兵庫県" },
    { "@type": "AdministrativeArea", "name": "京都府" }
  ],
  "sameAs": [
    "https://lin.ee/ZXB0UNs",
    "https://www.instagram.com/oosaka.doctors/"
  ]
};

export const metadata: Metadata = {
  // Official Punycode domain base URL
  metadataBase: new URL('https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp'), 
  alternates: {
    canonical: '/',
  },

  title: {
    default: '大阪梅田ドクターズ結婚相談所｜20代30代のハイクラス婚活', 
    template: '%s ｜ 大阪梅田ドクターズ結婚相談所', 
  },
  description: '大阪梅田でハイクラス婚活・スピード成婚なら当相談所へ。現役医師監修×仲人歴20年のベテランカウンセラーが、医学的アプローチと丁寧なマンツーマンサポートで、20代・30代の1年以内の成婚へお手伝いします。',

  openGraph: {
    title: '大阪梅田ドクターズ結婚相談所｜20代30代の真剣婚活・1年以内の成婚',
    description: '現役医師監修×仲人歴20年のダブルサポート。毎月5名限定の完全少人数制で、あなたの理想のスピード成婚を叶えます。',
    url: 'https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp',
    siteName: '大阪梅田ドクターズ結婚相談所',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '大阪梅田ドクターズ結婚相談所',
    description: '現役医師監修×仲人歴20年のダブルサポートで目指すハイクラススピード成婚。',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  verification: {
    // Replace with your real code from Google Search Console when available
    google: 'your-google-search-console-code-here', 
  },
};

export const viewport = {
  themeColor: '#ffb6c1',
  width: 'device-width',
  initialScale: 1,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {/* Inject LocalBusiness JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd).replace(/</g, '\\u003c'),
          }}
        />

        <div className="relative min-h-screen w-full bg-gradient-to-b from-[#FAF8F5] via-white to-[#FFF5F6] text-gray-800 selection:bg-[#E6A2B3]/30 flex flex-col justify-between">

          <div>
            {/* Background ornaments */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-50">
              {/* Top Left */}
              <div className="absolute top-10 left-0 h-40 w-40 rounded-full bg-[#E6A2B3]/15 blur-3xl md:h-72 md:w-72" />

              {/* Right */}
              <div className="absolute top-1/3 right-0 h-52 w-52 rounded-full bg-rose-100/30 blur-3xl md:h-96 md:w-96" />

              {/* Bottom */}
              <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-pink-50/40 blur-3xl md:h-80 md:w-80" />
            </div>

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="relative z-10 pt-1 pb-24 lg:pt-24 lg:pb-0">
              <div className="mx-auto w-[98%] max-w-7xl px-0 sm:px-6 lg:px-8">
                {children}
              </div>
            </main>
          </div>

          {/* Footer with Plain Text NAP for Local SEO & Instagram link */}
          <footer className="relative z-10 bg-stone-100 border-t border-stone-200 py-8 px-4 text-center text-sm text-gray-600">
            <div className="max-w-4xl mx-auto space-y-3">
              <p className="font-bold text-gray-800 text-base">大阪梅田ドクターズ結婚相談所</p>
              <p>〒530-0001 大阪府大阪市北区梅田1丁目2番2-200号 大阪駅前第2ビル2階 3-1-2</p>
              <p>TEL: <a href="tel:+819066463456" className="hover:underline">+81-90-6646-3456</a></p>
              <div className="pt-2 flex justify-center items-center gap-4">
                <a
                  href="https://www.instagram.com/oosaka.doctors/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-pink-600 hover:underline font-medium"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram公式アカウント
                </a>
              </div>
              <p className="text-xs text-gray-400 pt-2">© 大阪梅田ドクターズ結婚相談所 All Rights Reserved.</p>
            </div>
          </footer>

          {/* Mobile Sticky CTA */}
          <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden [.mobile-menu-open_&]:hidden">
            <div className="flex items-center gap-3">

              {/* Custom LINE Button */}
              <a
                href="https://lin.ee/ZXB0UNs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 rounded-full bg-[#06C755] py-4 text-base font-semibold text-white shadow-lg transition hover:bg-[#05b34c]"
              >
                {/* LINE SVG Icon */}
                <svg 
                  className="w-5 h-5 fill-current" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 10.304c0-5.36-5.385-9.72-12-9.72s-12 4.36-12 9.72c0 4.8 4.266 8.825 10.027 9.565.39.084.922.258 1.058.592.12.302.079.775.039 1.08l-.171 1.027c-.052.31-.25 1.21 1.077.66 1.266-.525 6.83-4.022 9.317-6.89 1.73-1.921 2.651-4.004 2.651-6.314z"/>
                </svg>
                <span>LINEで友だち追加</span>
              </a>

              {/* Reservation Button */}
              <Link
                href="/contact"
                className="flex-1 flex items-center justify-center rounded-full bg-rose-500 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-rose-600"
              >
                無料相談を予約する
              </Link>

            </div>
          </div>

        </div>
      </body>
    </html>
  );
}