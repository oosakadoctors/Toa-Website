"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Calendar,
  ChevronDown,
  ChevronRight,
  HeartHandshake,
  Sparkles,
  UserRound,
  Crown,
  BookOpen,
} from "lucide-react";

export default function PremiumNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  useEffect(() => {
  document.body.style.overflow = isOpen ? "hidden" : "unset";

  // Toggle class on body so layout elements can react to menu state
  if (isOpen) {
    document.body.classList.add("mobile-menu-open");
  } else {
    document.body.classList.remove("mobile-menu-open");
  }

  return () => {
    document.body.style.overflow = "unset";
    document.body.classList.remove("mobile-menu-open");
  };
}, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuSections = [
    {
      title: "初めてのドクターズ結婚相談所・強み",
      isMenSection: false,
      icon: HeartHandshake,
      links: [
        { name: "大阪梅田ドクターズ結婚相談所", href: "/" },
        { name: "大阪梅田の結婚相談所ってどんなところ？｜家族のような温かみあるサポート", href: "/umeda-marriage" },
        { name: "ドクターズ結婚相談所が選ばれる理由", href: "/why-us" },
        { name: "大阪梅田ドクターズ結婚相談所の会員と婚活環境について", href: "/elite-circle" },
        { name: "メインカウンセラーのメッセージ", href: "/main-counselor" },
        { name: "婚活でモテる人の特徴とは？", href: "/attraction-guide" },
        { name: "婚活って何？から一歩ずつ（初心者むけサポート内容説明）", href: "/marriage-hunting" },
        { name: "リアルな婚活の記録と成婚報告", href: "/dating-journeys" },
        { name: "特定商取引法に基づく表記・プライバシーポリシー", href: "/company-profile" },
      ],
    },
    {
      title: "３０代の女性のためのスマート成婚戦略",
      isMenSection: false,
      icon: Crown,
      links: [
        { name: "ハイスペック男性と結婚する方法", href: "/advantages" },
        { name: "３０代婚活でいい人がいないと思うあなたへ", href: "/consider" },
        { name: "笑顔の可愛い最高の男性が惹かれる高いＥＱ", href: "/ideal-man" },
      ],
    },
    {
      title: "医師の男性、女性へ",
      isMenSection: true,
      tag: "男性向け",
      icon: Crown,
      links: [
        { name: "男性医師の方へ サポート紹介とメッセージ", href: "/male-doctors" },
        { name: "女性医師の方へ サポート紹介とメッセージ", href: "/female-doctors" },
      ],
    },
    {
      title: "ハイスペックな男女へ",
      isMenSection: false,
      icon: Crown,
      links: [
        { name: "ハイスペックなあなたへ", href: "/elite-matchmaking" },
        { name: "ハイスペック婚を目指す女性へ", href: "/highspec-marriage" },
      ],
    },
    {
      title: "男性向け婚活戦略",
      isMenSection: true,
      tag: "男性向け",
      icon: UserRound,
      links: [
        { name: "男性のための戦略", href: "/mens-strategy" },
        { name: "僕の条件で出会える女性は？", href: "/ideal-woman" },
        { name: "可愛い子に選ばれる男の戦略", href: "/become-her-choice" },
        { name: "理想の恋人婚を叶える方法", href: "/ideal-match" },
      ],
    },
    {
      title: "理系・技術職の男性へ",
      isMenSection: true,
      tag: "男性向け",
      icon: UserRound,
      links: [
        { name: "恋愛経験がすくない理系・技術職の男性へ", href: "/level-up" },
        { name: "理系男性へおくる大阪梅田ドクターズ結婚相談所のサポート", href: "/tech-men" },
        { name: "理系男性の理想のパートナー探し", href: "/tech-matchmaking" },
      ],
    },
        {
      title: "医師監修の成婚サポート体制",
      icon: UserRound,
      links: [
        { name: "無料相談の流れと婚活未来図", href: "/consultation" },
        { name: "婚活ダンジョンマップと医師×仲人のダブルサポート体制", href: "/dungeon-map" },
        { name: "32歳会社員女性（婚活初心者）の無料相談ストーリー", href: "/vibe" },
        { name: "無料相談ストーリー（35歳・会社員）", href: "/mens-consultation" },
        { name: "お見合い後の交際判断基準|大阪梅田ドクターズ結婚相談所", href: "/matchmaking-criteria" },
        { name: "婚活初心者33歳男性プログラマーのお見合い後の相談実例", href: "/smart-dating" },
        { name: "大阪梅田ドクターズ結婚相談所の婚活カウンセリングとは|現役女医が実践する対話設計", href: "/dialogue-architecture" },
      ],
    },
    {
      title: "親御様へ 大切なお子様の結婚を願うあなたへ",
      isMenSection: false,
      icon: UserRound,
      links: [{ name: "親御様がお子様の結婚を願う", href: "/parents" }],
    },
    {
      title: "恋愛初心者、婚活ビギナーのあなたへ",
      isMenSection: false,
      icon: UserRound,
      links: [
        { name: "恋愛初心者がスピード成婚する方法", href: "/beginners" },
        { name: "大人の結婚に必要な「人間的成熟度」と内面魅力", href: "/emotional-maturity" },
        { name: "初心者むけ素朴な疑問を解決", href: "/first-steps" },
      ],
    },
        {
      title: "経験知で駆動するAIプロンプト婚活とは｜大阪梅田ドクターズ結婚相談所",
      isMenSection: false,
      icon: UserRound,
      links: [
        { name: "AI利用＆現代の成婚戦略", href: "/smart-IBJ" },
        { name: "現役女医が伴走するIBJ・AI婚活｜大阪梅田ドクターズ結婚相談所", href: "/medical-match" },
        { name: "AIにはできないカウンセラーの介在価値と強み｜大阪梅田ドクターズ結婚相談所", href: "/human-touch" },
        { name: "最先端AI×仲人の成婚戦略", href: "/data-strategy" },
      ],
    },
    {
      title: "本質的な問い",
      isMenSection: false,
      icon: UserRound,
      links: [
        { name: "男性は女性の外見しか見ない？問いと答え", href: "/attraction-essence" },
        { name: "「価値観の一致」を探している人が、いつまでも結婚できない理由", href: "/alignment-myth" },
        { name: "婚活で「選ぶ・選ばれる」レースに疲れたあなたへ。", href: "/intellectual-maturity" },
        { name: "なぜハイスペックとの成婚を望むのか？", href: "/true-partnership" },
        { name: "真の幸せを手に入れる方法", href: "/wellbeing" },
        { name: "いい人どまり卒業のヒント", href: "/nice-person" },
      ],
    },
    {
      title: "婚活に必要な４つのEQとその高め方",
      isMenSection: false,
      icon: UserRound,
      links: [{ name: "婚活・結婚生活に必要なEQとその高めかたを説明", href: "/EQ" }],
    },
        {
      title: "ブログ (準備中)",
      isMenSection: false,
      icon: Crown,
      links: [
        { name: "① 婚活初心者", href: "/blog/category/beginners-guide" },
        { name: "② 女性", href: "/blog/category/female" },
        { name: "③ 男性", href: "/blog/category/male" },
        { name: "④ ハイスペック婚", href: "/blog/category/high-status-marriage" },
        { name: "⑤ 医師", href: "/blog/category/doctors" },
        { name: "⑥ お見合い・交際", href: "/blog/category/matchmaking-and-dating" },
        { name: "⑦ 未来の結婚生活", href: "/blog/category/future-marriage" },
        { name: "⑧ 両親", href: "/blog/category/parents" },
      ],
    },
    {
      title: "料金・入会制限について",
      isMenSection: false,
      icon: Sparkles,
      links: [
        { name: "料金プランと少人数制について", href: "/plan" },
        { name: "婚活の悩みと不安を解消する特別サポート", href: "/support" },
        { name: "入会制限と入会審査", href: "/membership-steps" },
      ],
    },
    {
      title: "婚活情報・成婚実績",
      isMenSection: false,
      icon: BookOpen,
      links: [
        { name: "結婚相談所の流れとサポート内容", href: "/steps" },
        { name: "婚活よくある質問Q＆A", href: "/FAQ" },
        { name: "お見合いルールとNGマナー", href: "/rules" },
      ],
    },
  ];

  return (
    <header className="relative w-full z-50">
      {/* MEDICAL THEMED NAVY-PURPLE TOP HEADER */}
      <div
        className={`w-full bg-gradient-to-r from-[#1E1B4B] via-[#2E1065] to-[#3B0764] text-[#FAF7F4] py-2.5 px-4 relative shadow-md shadow-purple-950/20 border-b border-indigo-500/10 transition-all ${
          isOpen ? "hidden" : "block"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-start md:justify-center gap-3 pr-16 md:pr-0">
          <Image
            src="/logo2.png"
            width={50}
            height={50}
            priority
            alt="大阪梅田ドクターズ結婚相談所 ロゴ"
            className="rounded-full object-cover bg-white/10 flex-shrink-0 ring-1 ring-purple-300/30 shadow-sm"
          />
          <div className="text-left md:text-center">
            <span className="text-sm font-bold tracking-wider block md:inline text-white drop-shadow-sm">
              大阪梅田ドクターズ結婚相談所
            </span>
            <span className="hidden md:inline mx-2 text-[#2563EB]/40">|</span>
            <span className="text-[10px] md:text-xs font-medium text-[#E0DBEC] block md:inline tracking-wide">
              ２０代３０代の真剣婚活・1年以内の成婚
            </span>
          </div>
        </div>
      </div>

      {/* DESKTOP NAVBAR */}
      <nav
        className={`hidden md:block w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF7F4]/90 backdrop-blur-xl shadow-sm py-3"
            : "bg-[#FAF7F4] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo2.png"
              width={45}
              height={45}
              alt="大阪梅田ドクターズ結婚相談所"
            />
            <div>
              <p className="text-base font-black text-gray-900">
                大阪梅田ドクターズ結婚相談所
              </p>
              <p className="text-xs font-black text-[#D9889D]">
                ２０代３０代の真剣婚活・1年以内の成婚
              </p>
            </div>
          </Link>

          {/* Desktop Mega Dropdown Trigger */}
          <div className="relative flex items-center gap-6">
            <div
              className="relative"
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onMouseEnter={() => setActiveDropdown(0)}
                className="flex items-center gap-1 text-xs font-bold text-gray-800 hover:text-[#2563EB] py-2 transition-colors"
              >
                <span>サービス案内</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {/* Mega Menu Flyout */}
              {activeDropdown !== null && (
                <div className="absolute right-0 top-full pt-2 w-[720px] z-50">
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 grid grid-cols-2 gap-x-6 gap-y-4 max-h-[70vh] overflow-y-auto">
                    {menuSections.map((section) => {
                      return (
                        <div
                          key={section.title}
                          className={`space-y-1.5 pl-2 ${
                            section.isMenSection
                              ? "border-l-2 border-[#2563EB]"
                              : "border-l-2 border-transparent"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2 pr-1">
                            <p
                              className={`text-xs font-black ${
                                section.isMenSection
                                  ? "text-[#2563EB]"
                                  : "text-gray-800"
                              }`}
                            >
                              {section.title}
                            </p>
                            {section.isMenSection && section.tag && (
                              <span className="text-[9px] px-1.5 py-0.5 rounded border font-black bg-[#2563EB] text-white border-blue-700 shadow-sm flex-shrink-0 ml-auto">
                                {section.tag}
                              </span>
                            )}
                          </div>
                          <ul className="space-y-1">
                            {section.links.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  className={`text-[11px] font-semibold block py-0.5 transition-colors ${
                                    section.isMenSection
                                      ? "text-blue-900 hover:text-[#2563EB]"
                                      : "text-gray-600 hover:text-gray-900"
                                  }`}
                                >
                                  {link.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full text-xs font-black transition-colors"
            >
              <Calendar className="w-4 h-4 text-blue-300" />
              無料面談を予約する
            </Link>
          </div>
        </div>
      </nav>

      {/* MOBILE HAMBURGER BUTTON */}
      <div className="md:hidden absolute top-4 right-4 z-[60]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-11 h-11 rounded-full bg-white/90 backdrop-blur-md shadow-lg text-gray-900 active:scale-95 transition-transform"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

   {/* MOBILE ACCORDION MENU */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-[#FAF7F4] transition-all duration-500 overflow-y-auto ${
          isOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        {/* Changed pt-20 to pt-6 and added pr-16 to avoid the close button */}
        <div className="px-4 pt-6 pb-28">
          <div className="mb-6 pr-16">
            <p className="text-[11px] font-black tracking-[0.3em] text-[#B07A56] uppercase">
              Navigation
            </p>
            <h2 className="mt-2 text-xl font-black text-[#5E4633]">
              婚活メニュー
            </h2>
          </div>

          <div className="space-y-3">
            {menuSections.map((section, index) => {
              const Icon = section.icon;
              const isActive = openSection === index;

              return (
                <div
                  key={section.title}
                  className={`rounded-2xl border bg-white overflow-hidden transition-all duration-300 ${
                    section.isMenSection
                      ? "border-l-4 border-l-[#2563EB] border-t-blue-100 border-r-blue-100 border-b-blue-100 shadow-[0_4px_14px_rgba(37,99,235,0.18)]"
                      : "border-gray-200 shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => setOpenSection(isActive ? null : index)}
                    className="w-full flex items-center justify-between px-4 py-3.5 text-left gap-3"
                    aria-expanded={isActive}
                  >
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          section.isMenSection
                            ? "bg-blue-50 text-[#2563EB]"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span
                        className={`text-sm font-black truncate ${
                          section.isMenSection
                            ? "text-[#2563EB]"
                            : "text-gray-800"
                        }`}
                      >
                        {section.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      {section.isMenSection && section.tag && (
                        <span className="text-[14px] px-2 py-0.5 rounded-full border font-black bg-[#2563EB] text-white border-blue-700 shadow-sm">
                          {section.tag}
                        </span>
                      )}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${
                          isActive ? "rotate-180" : ""
                        } ${
                          section.isMenSection
                            ? "text-[#2563EB]"
                            : "text-gray-400"
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isActive ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-4 pb-3 space-y-1">
                      {section.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center justify-between rounded-xl px-3 py-2 text-sm font-bold transition-colors ${
                            section.isMenSection
                              ? "bg-blue-50/60 text-blue-900 hover:text-[#2563EB]"
                              : "bg-gray-50 text-gray-700 hover:text-gray-900"
                          }`}
                        >
                          <span className="pr-2">{link.name}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}