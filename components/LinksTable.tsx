import React from 'react';
import Image from 'next/image';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Camera, 
  MessageCircle, 
  ExternalLink, 
  ChevronRight, 
  Building2, 
  Clock, 
  ShieldCheck 
} from 'lucide-react';

export default function ContactTableComponent() {
  // 🔴 Links table of contents data placeholder
  const pageLinks = [
    { title: '初めての方へ（当相談所の特徴）', href: '/about' },
    { title: '医師×仲人による成婚戦略・料金プラン', href: '/plan' },
    { title: '成婚実績・ご相談者の声', href: '/cases' },
    { title: '無料カウンセリングの流れ', href: '/flow' },
    { title: '代表カウンセラー紹介（医師プロフィール）', href: '/profile' },
    { title: 'よくある質問（FAQ）', href: '/faq' },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto my-12 px-4 font-sans text-slate-800 text-[20px]">
      <div className="bg-white rounded-3xl shadow-xl border border-sky-100 overflow-hidden">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 text-white p-6 md:p-8 text-center relative">
          <span className="bg-white/20 backdrop-blur-md text-sky-100 font-bold text-sm md:text-base px-4 py-1 rounded-full uppercase tracking-widest inline-block mb-3">
            Contact & Information
          </span>
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-white tracking-wide">
            お問い合わせ・店舗情報
          </h2>
          <p className="text-sky-100 text-base md:text-lg mt-2">
            無料カウンセリングのご予約・ご質問はお気軽にお問い合わせください
          </p>
        </div>

        <div className="p-6 md:p-10 space-y-10">
          
          {/* 🔴 IBJ Official Banner Image Box */}
          <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 md:p-6 text-center shadow-sm">
            <p className="text-sm md:text-base font-bold text-slate-500 mb-4 flex items-center justify-center gap-2">
              <ShieldCheck className="w-5 h-5 text-sky-600" />
              東証プライム上場企業 IBJ正規加盟店
            </p>
            <div className="relative w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <Image
                src="/links-table.jpg" // Ensure this image is saved in your /public folder as links-table.jpg
                alt="IBJ正規加盟店・2026年実績No.1加盟相談所"
                width={600}
                height={1000}
                className="w-full h-auto object-cover mx-auto"
                priority
              />
            </div>
          </div>

          {/* Quick Contact Buttons (LINE & Call) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* LINE CTA */}
            <a
              href="https://lin.ee/ZXB0UNs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-emerald-500 hover:bg-emerald-600 text-white p-5 rounded-2xl shadow-md transition-all transform hover:-translate-y-0.5 group"
            >
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full font-bold block w-max mb-1">
                    24時間受付 / 勧誘ゼロ
                  </span>
                  <span className="text-xl md:text-2xl font-bold block">公式LINEで簡単相談</span>
                </div>
              </div>
              <ExternalLink className="w-6 h-6 opacity-80 group-hover:opacity-100 shrink-0" />
            </a>

            {/* Telephone Contact */}
            <a
              href="tel:0660000000" // Replace with exact phone number
              className="flex items-center justify-between bg-sky-600 hover:bg-sky-700 text-white p-5 rounded-2xl shadow-md transition-all transform hover:-translate-y-0.5 group"
            >
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full font-bold block w-max mb-1">
                    お電話でのお問い合わせ
                  </span>
                  <span className="text-xl md:text-2xl font-bold block">06-XXXX-XXXX</span>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 opacity-80 group-hover:opacity-100 shrink-0" />
            </a>
          </div>

          {/* Table: Contact & Location Details */}
          <div className="bg-white rounded-2xl border border-sky-200 overflow-hidden shadow-sm">
            <table className="w-full text-left text-[18px] md:text-[20px] border-collapse">
              <tbody className="divide-y divide-slate-100">
                <tr className="border-b border-slate-100">
                  <th className="py-4 px-5 font-bold bg-sky-50/60 text-slate-800 w-1/3 sm:w-1/4 align-top flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-sky-600 shrink-0" />
                    <span>相談所名</span>
                  </th>
                  <td className="py-4 px-5 text-slate-700 font-semibold">
                    大阪梅田ドクターズ結婚相談所
                  </td>
                </tr>

                <tr className="border-b border-slate-100">
                  <th className="py-4 px-5 font-bold bg-sky-50/60 text-slate-800 align-top flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-sky-600 shrink-0" />
                    <span>所在地・住所</span>
                  </th>
                  <td className="py-4 px-5 text-slate-700 space-y-1">
                    <p className="font-medium">〒530-0001 大阪府大阪市北区梅田1丁目2-2</p>
                    <p className="text-base text-slate-500">大阪駅前第2ビル 完全個室会議室（事前予約制）</p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sky-600 hover:text-sky-800 text-base font-bold mt-1 underline"
                    >
                      Google Mapsで開く <ExternalLink className="w-4 h-4" />
                    </a>
                  </td>
                </tr>

                <tr className="border-b border-slate-100">
                  <th className="py-4 px-5 font-bold bg-sky-50/60 text-slate-800 align-top flex items-center gap-2">
                    <Clock className="w-5 h-5 text-sky-600 shrink-0" />
                    <span>営業時間</span>
                  </th>
                  <td className="py-4 px-5 text-slate-700">
                    10:00 〜 20:00（火曜定休）
                  </td>
                </tr>

                <tr className="border-b border-slate-100">
                  <th className="py-4 px-5 font-bold bg-sky-50/60 text-slate-800 align-top flex items-center gap-2">
                    <Mail className="w-5 h-5 text-sky-600 shrink-0" />
                    <span>メール</span>
                  </th>
                  <td className="py-4 px-5 text-slate-700">
                    <a href="mailto:info@doctors-matchmaking.jp" className="text-sky-600 hover:underline font-medium">
                      info@doctors-matchmaking.jp
                    </a>
                  </td>
                </tr>

                <tr>
                  <th className="py-4 px-5 font-bold bg-sky-50/60 text-slate-800 align-top flex items-center gap-2">
                    <Camera className="w-5 h-5 text-pink-600 shrink-0" />
                    <span>Instagram</span>
                  </th>
                  <td className="py-4 px-5 text-slate-700">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-bold hover:underline"
                    >
                      <Camera className="w-5 h-5" />
                      @doctors_matchmaking
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 🔴 Links to Each Page (Table of Contents / Navigation) */}
          <div className="bg-sky-50/70 rounded-2xl p-6 md:p-8 border border-sky-200">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-sky-200 flex items-center gap-2">
              <ChevronRight className="w-6 h-6 text-sky-600 shrink-0" />
              🔴 サイト内コンテンツ一覧（各ページへのリンク）
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[18px] md:text-[20px]">
              {pageLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 bg-white p-3.5 rounded-xl border border-sky-100 text-sky-700 hover:text-sky-900 hover:bg-sky-100/50 hover:shadow-sm transition-all font-medium"
                  >
                    <span className="text-sky-500 font-bold">•</span>
                    <span className="flex-1">{link.title}</span>
                    <ChevronRight className="w-4 h-4 text-sky-400 shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}