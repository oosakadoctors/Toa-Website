import React from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

import type { Metadata } from 'next';

// Comprehensive LocalBusiness JSON-LD Structured Data Schema

const localBusinessJsonLd = {
"image": [
    {
      "@type": "ImageObject",
      "url": "https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp/logo2.png",
      "caption": "大阪梅田ドクターズ結婚相談所 ロゴ",
      "width": "800",
      "height": "800" // 1:1 Aspect Ratio
    },
    {
      "@type": "ImageObject",
      "url": "https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp/female-doctor.jpg",
      "caption": "現役女医カウンセラー",
      "width": "1200",
      "height": "900" // 4:3 Aspect Ratio
    },
    {
      "@type": "ImageObject",
      "url": "https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp/meeting-room.jpg",
      "caption": "面談室カウンセリングルーム",
      "width": "1600",
      "height": "900" // 16:9 Aspect Ratio
    }
  ],
"founder": {
  "@type": "Person",
  "@id": "https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp/#founder",
  "name": "加藤とあこ",
  "jobTitle": ["代表カウンセラー", "院長"],
  "gender": "Female",
  "image": "https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp/owner.jpg",
  "mainEntityOfPage": "https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp/main-counselor",
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "内科認定医"
  },
  "knowsAbout": ["腎臓内科", "人工透析", "腹膜透析", "婚活", "結婚相談"],
  "worksFor": [
    {
      "@type": "MedicalClinic",
      "name": "医療法人幸萌会 久宝寺透析クリニック",
      "url": "https://q-cl.com/",
      "medicalSpecialty": "Nephrologic",
      "address": {
        "@type": "PostalAddress",
        "postalCode": "581-0072",
        "addressRegion": "大阪府",
        "addressLocality": "八尾市",
        "streetAddress": "久宝寺3-15-34-3F",
        "addressCountry": "JP"
      }
    },
    {
      "@id": "https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp/#organization"
    }
  ],
  "sameAs": [
    "https://q-cl.com/",
    "https://q-cl.com/greeting.html"
  ]
},
  "employee": {
  "@type": "Person",
  "@id": "https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp/#counselor",
  "name": "ベテラン男性カウンセラー",
  "jobTitle": "婚活カウンセラー（カウンセラー歴20年）",
  "worksFor": {
    "@type": "LocalBusiness",
    "@id": "https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp/#organization"
  }
},
    "memberOf": {
      "@type": "Organization",
      "name": "IBJ(日本結婚相談所連盟)",
      "url": "https://www.ibjapan.jp/"
    },
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp/#organization",
  "name": "大阪梅田ドクターズ結婚相談所",
  "description": "現役女医と仲人歴20年のベテランカウンセラーによるダブルサポート体制の結婚相談所。毎月5名限定の完全少人数制で、20代・30代の1年以内の成婚を目指します。",
  "url": "https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp/",
  "telephone": "+81-90-6646-3456",
  "logo": "https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp/logo2.png",
"address": {
  "@type": "PostalAddress",
  "postalCode": "530-0001",
  "addressRegion": "大阪府",
  "addressLocality": "大阪市北区",
  "streetAddress": "梅田1-2-2-200 大阪駅前第2ビル 2階 3-1-2",
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
  { "@type": "AdministrativeArea", "name": "大阪府" },
  { "@type": "AdministrativeArea", "name": "兵庫県" },
  { "@type": "AdministrativeArea", "name": "京都府" },
  { "@type": "AdministrativeArea", "name": "奈良県" }
],
"sameAs": [
          "https://lin.ee/WvDSj6U",
          "https://www.instagram.com/oosaka.doctors/",
          "https://maps.app.goo.gl/wZYzjYYN3qynqeYY9"
        ],


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
  images: [
    {
      url: 'https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp/og-default.jpg', // Replace with your default image filename in /public
      width: 1200,
      height: 630,
      alt: '大阪梅田ドクターズ結婚相談所',
    },
  ],
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
  }
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
            <main className="relative z-10 pt-1 pb-4 lg:pt-24 lg:pb-0">
              <div className="mx-auto w-[98%] max-w-7xl px-0 sm:px-6 lg:px-8">
                {children}
              </div>
            </main>
          </div>

          {/* Footer with Plain Text NAP for Local SEO & Instagram link */}
<footer className="pb-24 relative z-10 bg-slate-50 border-t border-slate-200/80 py-10 px-4 text-center text-sm text-slate-600">
  <div className="max-w-4xl mx-auto space-y-4">
    {/* Company Name & Address */}
    <div className="space-y-1.5">
      <p className="font-bold text-slate-900 text-lg tracking-wide">
        大阪梅田ドクターズ結婚相談所
      </p>
      <p className="text-slate-600 text-xs sm:text-sm">
        〒530-0001 大阪府大阪市北区梅田1丁目2番2-200号 大阪駅前第2ビル2階 3-1-2
      </p>
    </div>

    {/* Phone & Operating Hours */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-xs sm:text-sm text-slate-700">
      <p className="font-medium">
        TEL:{" "}
        <a 
          href="tel:+819066463456" 
          className="font-semibold text-slate-900 hover:text-rose-600 transition-colors underline-offset-4 hover:underline"
        >
          +81-90-6646-3456
        </a>
      </p>
      <span className="hidden sm:inline text-slate-300">|</span>
      <p className="text-slate-500 text-xs">
        受付時間 9:00〜21:00（年中無休・完全予約制）
      </p>
    </div>

    {/* Social Media Button Links */}
    <div className="pt-3 flex flex-wrap justify-center items-center gap-3">
      {/* Instagram Button */}
      <a
        href="https://www.instagram.com/oosaka.doctors/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-pink-200 text-pink-600 hover:bg-pink-50/80 hover:border-pink-300 transition-all duration-200 shadow-sm text-xs sm:text-sm font-medium"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
        Instagram公式アカウント
      </a>

      <br/>

      {/* LINE Button with Official LINE Green (#06C755) */}
      <a
        href="https://page.line.me/279kpsce"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#06C755]/30 text-[#06C755] hover:bg-[#06C755]/10 hover:border-[#06C755]/60 transition-all duration-200 shadow-sm text-xs sm:text-sm font-medium"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.122.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.572-3.844 2.572-6.002z"/>
        </svg>
        LINE公式アカウント
      </a>
    </div>

    {/* Copyright */}
    <div className="pt-4 border-t border-slate-200/60">
      <p className="text-[11px] text-slate-400 font-light">
        © 大阪梅田ドクターズ結婚相談所 All Rights Reserved.
      </p>
    </div>
  </div>
</footer>
          {/* Mobile Sticky CTA */}
          <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden [.mobile-menu-open_&]:hidden">
            <div className="flex items-center gap-3">

              {/* Custom LINE Button */}
              <a
                href="https://lin.ee/WvDSj6U"
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