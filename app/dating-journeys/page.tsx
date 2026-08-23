import React from 'react';
import { Sparkles, Clock, Mail, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "準備中 | 大阪梅田ドクターズ結婚相談所",
  description: "大阪梅田ドクターズ結婚相談所の公式ウェブサイトは現在リニューアル準備中です。現役女医監修×ベテラン仲人による最高峰の婚活プロデュースを近日公開予定です。",
};

export default function ComingSoonPage() {
  return (
    <div className="bg-[#FAF8F5] text-gray-950 min-h-screen flex flex-col justify-between selection:bg-pink-500/20 text-[1.25rem] leading-relaxed relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />

      {/* Header Badge Area */}
      <header className="pt-12 px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-rose-500/10 text-rose-600 px-5 py-2.5 rounded-full font-black tracking-widest uppercase mb-4 border border-rose-200/50">
          <Sparkles className="w-4 h-4 animate-pulse" />
          <span className="text-[0.75rem] sm:text-[0.85rem]">Coming Soon</span>
        </div>
      </header>

      {/* Main Content Card */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center relative z-10 w-full">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-xl border border-white/60">
          
          <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-rose-500 shadow-inner">
            <Clock className="w-8 h-8 animate-spin-slow" />
          </div>

          <h1 className="text-[1.8rem] sm:text-[2.4rem] lg:text-[2.8rem] font-black text-gray-900 leading-[1.3] tracking-tight">
            ただいまWebサイトを<br />
            <span className="text-rose-500">準備（リニューアル）中</span>です
          </h1>

          <p className="text-[0.9em] sm:text-[1em] font-medium text-gray-700 max-w-2xl mx-auto mt-6 leading-relaxed">
            大阪梅田ドクターズ結婚相談所のホームページをご覧いただきありがとうございます。
            よりわかりやすく、快適にご利用いただけるよう、現在サイトの制作・調整を行っております。
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto my-8 rounded-full" />

          {/* Value Props Brief */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-xl mx-auto my-8">
            <div className="flex items-start gap-3 p-4 bg-rose-50/50 rounded-2xl border border-rose-100/60">
              <ShieldCheck className="w-6 h-6 text-rose-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-[0.85em] text-gray-900">現役女医 監修</p>
                <p className="text-[0.75em] text-gray-600">心理学・脳科学に基づいたロジカル成婚戦略</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-rose-50/50 rounded-2xl border border-rose-100/60">
              <Heart className="w-6 h-6 text-rose-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-[0.85em] text-gray-900">仲人歴20年の実績</p>
                <p className="text-[0.75em] text-gray-600">2名1組の手厚い個別ダブルサポート体制</p>
              </div>
            </div>
          </div>

          {/* Contact / Inquiries Box */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 mt-8 shadow-lg text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[0.7em] font-bold uppercase tracking-wider text-rose-400 block mb-1">
                  Inquiries & Counseling
                </span>
                <h2 className="text-[1.1em] font-bold">事前のお問い合わせ・カウンセリングのご予約</h2>
                <p className="text-[0.75em] text-slate-300 mt-1">
                  サイト公開前のお問い合わせやご相談も受け付けております。
                </p>
              </div>
              <a 
                href="mailto:info@example.com" 
                className="inline-flex items-center justify-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-bold text-[0.85em] px-6 py-3.5 rounded-xl transition-all duration-200 shrink-0 shadow-md hover:shadow-rose-500/25"
              >
                <Mail className="w-4 h-4" />
                <span>お問い合わせ</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </main>

      {/* Footer Notice */}
      <footer className="pb-8 pt-4 text-center text-gray-500 text-[0.75em] relative z-10">
        <p>© 大阪梅田ドクターズ結婚相談所 All Rights Reserved.</p>
      </footer>

    </div>
  );
}