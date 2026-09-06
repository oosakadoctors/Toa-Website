import React from 'react';
import { Trophy, MessageCircle, Compass, ShieldCheck, DoorOpen, Users, Stethoscope, CheckCircle2, Sparkles } from 'lucide-react';
import Image from 'next/image';
import DungeonMap from "@/components/DungeonMap";

import type { Metadata } from 'next';

// 1. Exact canonical domain (including https:// and www.)
const SITE_URL = "https://www.xn--pckwao2bxsk71tt0bgu0asjnu04arde02wnj5byk7a.jp"; 

// 2. Exact path/route of this page within your app
const PAGE_PATH = "/dungeon-map"; 

// 3. Absolute path to the OGP image in public/dungeon-map.jpg
const OG_IMAGE = `${SITE_URL}/dungeon-map.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: '婚活ダンジョンマップと医師×仲人のダブルサポート体制 | 大阪梅田ドクターズ結婚相談所',
  description: '大阪梅田ドクターズ結婚相談所が開発した「婚活ダンジョンマップ」と現役医師×ベテラン仲人のダブルサポート体制で納得の成婚へ導きます。',
  openGraph: {
    title: '婚活ダンジョンマップと医師×仲人のダブルサポート体制 | 大阪梅田ドクターズ結婚相談所',
    description: '大阪梅田ドクターズ結婚相談所が開発した「婚活ダンジョンマップ」と現役医師×ベテラン仲人のダブルサポート体制で納得の成婚へ導きます。',
    url: `${SITE_URL}${PAGE_PATH}`,
    siteName: '大阪梅田ドクターズ結婚相談所',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: '婚活ダンジョンマップ',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '婚活ダンジョンマップと医師×仲人のダブルサポート体制 | 大阪梅田ドクターズ結婚相談所',
    description: '大阪梅田ドクターズ結婚相談所が開発した「婚活ダンジョンマップ」と現役医師×ベテラン仲人のダブルサポート体制で納得の成婚へ導きます。',
    images: [OG_IMAGE],
  },
};



export default function DungeonMapSupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-sky-100/40 to-blue-50 text-slate-800 font-sans antialiased selection:bg-amber-200 w-full overflow-x-hidden">
      
      {/* ヒーローセクション */}
      <header className="relative bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white py-14 px-4 md:px-6 text-center overflow-hidden w-full border-b border-amber-300/40 shadow-lg">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.15),transparent_60%)]"></div>
        <div className="max-w-5xl mx-auto relative z-10 w-full space-y-4">
          <p className="bg-amber-400/20 backdrop-blur-md text-amber-200 border border-amber-300/40 font-extrabold tracking-widest text-xs md:text-sm uppercase inline-flex items-center gap-1.5 px-4 py-1 rounded-full shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-200" />
            STRATEGIC MATCHMAKING & DOUBLE SUPPORT
          </p>
          <h1 className="text-2xl md:text-4xl font-serif font-bold leading-tight tracking-wider text-white drop-shadow-sm">
            婚活の分岐点をプロと攻略する<br className="hidden md:inline" />
            <span className="text-amber-200 underline decoration-amber-400/60 underline-offset-8">
              「婚活ダンジョンマップ」
            </span>
          </h1>
          
          <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl border-2 border-amber-200/60 inline-block text-left w-full mt-4 shadow-xl">
            <p className="text-slate-700 text-[20px] md:text-base leading-relaxed tracking-wide text-center w-full font-medium">
              <span className="text-amber-600">大阪梅田ドクターズ結婚相談所</span>が開発した「婚活ダンジョンマップ」は、活動開始から成婚（ゴール）までに直面するすべての分岐点を可視化し、あなたに最適な最短ルートを仲人と共に設計する戦略的婚活計画書です。
            </p>
          </div>
        </div>
      </header>

      {/* 婚活ダンジョンマップ セクション */}
<section className="py-8 w-full">
  {/* Changed max-w-5xl to max-w-none / w-full */}
  <div className="w-full px-2  md:px-8">
    {/* Removed rounded borders and shadow if you want a true edge-to-edge look, or keep them for a full-bleed card */}
    <div className="bg-white rounded-2xl p-4 md:p-6 shadow-md border border-sky-200 space-y-5 w-full relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/50 rounded-bl-full -z-0 pointer-events-none"></div>
      
      <p className="text-[20px] md:text-base text-slate-800 leading-relaxed tracking-wide w-full relative z-10">
        プロフィール作成、お申し込み、お見合い、仮交際、真剣交際、そしてプロポーズ。<br />
        <span className="text-sky-950 font-bold bg-amber-100/80 px-2 py-0.5 rounded border-b-2 border-amber-400">
          婚活における一つひとつの意思決定をデータと経験に基づいてサポートし、納得のいく未来へあなたを導きます。
        </span>
      </p>

      <div className="relative z-10 w-full">
        <DungeonMap />
      </div>
    </div>
  </div>
</section>

      

      {/* 人生は選択の連続 セクション */}
      <section className="py-12 bg-sky-100/60 text-slate-800 w-full border-y border-sky-200">
        <div className="max-w-5xl mx-auto w-full space-y-8 px-4 md:px-0">
          <div className="text-center w-full">
            <span className="bg-amber-500 text-white font-extrabold text-xs px-3 py-1 rounded-full tracking-widest inline-block mb-2 shadow-xs uppercase">
              VISION & CHOICE
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-sky-950 tracking-wider w-full">
              人生は選択の連続。最適な「未来の扉」を開くために
            </h2>
            <p className="text-[20px] md:text-base text-slate-700 mt-2 w-full max-w-3xl mx-auto font-medium">
              人生とは、一つの扉を開くたびに、また新しい選択肢が現れる旅のようなものです。婚活も例外ではありません。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 w-full">
            {/* 選択肢 1 */}
            <div className="bg-white p-6 rounded-2xl border-2 border-amber-200 shadow-md hover:shadow-lg transition space-y-3 relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 to-amber-500 flex items-center justify-center text-white font-bold shadow-sm">
                1
              </div>
              <h3 className="font-bold text-sky-900 text-lg flex items-center gap-2">
                <DoorOpen className="w-5 h-5 text-amber-500 shrink-0" />
                一歩を踏み出す勇気
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                お見合いの受託・申し込みのステップ。迷いを解消し、最初の扉を開きます。
              </p>
            </div>

            {/* 選択肢 2 */}
            <div className="bg-white p-6 rounded-2xl border-2 border-amber-200 shadow-md hover:shadow-lg transition space-y-3 relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-600 flex items-center justify-center text-white font-bold shadow-sm">
                2
              </div>
              <h3 className="font-bold text-sky-900 text-lg flex items-center gap-2">
                <Compass className="w-5 h-5 text-amber-500 shrink-0" />
                関係を深める決断
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                交際へのステップアップ。互いの価値観を共有し、確固たる信頼を築きます。
              </p>
            </div>

            {/* 選択肢 3 */}
            <div className="bg-white p-6 rounded-2xl border-2 border-amber-200 shadow-md hover:shadow-lg transition space-y-3 relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-700 flex items-center justify-center text-white font-bold shadow-sm">
                3
              </div>
              <h3 className="font-bold text-sky-900 text-lg flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-500 shrink-0" />
                生涯のパートナーを選ぶ確信
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                成婚の意思表示。納得のいく決断で、最高の未来の扉を開きます。
              </p>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl border border-amber-300/70 max-w-4xl mx-auto shadow-sm text-center">
            <p className="text-[20px] md:text-base text-slate-700 leading-relaxed font-medium">
              これらすべてのライフステージにおいて、あなたが「どのような人生を歩みたいのか」「どんな相手と理想の家庭を築きたいのか」の本質を見極め、次の扉を一緒に選び抜きます。
            </p>
          </div>
        </div>
      </section>

      {/* 主体的な選択を支えるメッセージ */}
      <section className="py-12 bg-white w-full">
        <div className="max-w-5xl mx-auto w-full px-4 md:px-0">
          <div className="bg-gradient-to-r from-sky-50 via-blue-50 to-amber-50/50 border-2 border-amber-200/80 p-6 md:p-8 rounded-2xl shadow-sm space-y-4 max-w-4xl mx-auto relative">
            <div className="flex items-center gap-3 border-b border-amber-200/60 pb-3">
              <ShieldCheck className="w-8 h-8 text-amber-500 shrink-0" />
              <h2 className="font-bold text-sky-950 text-xl md:text-2xl">
                主体的な選択を支え、成婚への背中を押す
              </h2>
            </div>
            <p className="text-[20px] md:text-base text-slate-700 leading-relaxed">
              次の扉を開くとき、誰しも不安や孤独を感じるものです。私たちはあなたの声を深く聴き、客観的な事実とプロの視点を提示して、一歩を踏み出す背中を押します。<br /><br />
              最終的に「この人と、温かい結婚生活を作っていきたい」と、あなた自身が確信を持って選べるように。すべての選択が望む未来へ直結するよう、私たちは行動とマインドの両面から支え続けます。
            </p>
          </div>
        </div>
      </section>

      {/* ダブルサポート体制 セクション */}
      <section className="py-12 bg-white w-full border-t border-sky-100">
        <div className="max-w-5xl mx-auto w-full px-4 md:px-0">
          <div className="text-center mb-8 px-4 w-full">
            <span className="bg-amber-100 text-amber-800 border border-amber-300 font-extrabold text-xs px-3 py-1 rounded-full tracking-widest inline-block mb-2 shadow-2xs">
              DOUBLE SUPPORT
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 tracking-wider w-full">
              婚活の分岐点で、想いを確実な行動に変える<br className="hidden md:inline" />
              <span className="text-amber-600 underline decoration-amber-300">「医師×ベテラン仲人」</span>のダブルサポート体制
            </h2>
            <p className="text-sky-900 font-bold text-lg md:text-xl mt-3 max-w-3xl mx-auto">
              現役女性医師とベテラン男性仲人が、あなたの意思決定を科学する
            </p>
            <p className="text-[20px] md:text-base text-slate-600 mt-2 max-w-3xl mx-auto">
              成婚への分岐点（選択局面）では、現役女性医師である代表カウンセラーと、確かな実績を持つベテラン男性カウンセラーが、男女双方の視点からあなたを多角的にダブルサポートします。
            </p>
          </div>

          {/* 医師×ベテラン仲人 詳細 */}
          <div className="space-y-6 max-w-4xl mx-auto mt-8">
            {/* 代表カウンセラー（医師） */}
            <div className="bg-gradient-to-r from-sky-50 via-blue-50 to-amber-50/30 border-2 border-sky-200 p-6 md:p-8 rounded-2xl shadow-sm space-y-5">
              <div className="flex flex-wrap items-center gap-3 border-b border-sky-200 pb-3">
                <span className="bg-sky-600 text-white font-bold px-3 py-1 rounded-lg text-sm shadow-xs flex items-center gap-1">
                  <Stethoscope className="w-4 h-4 text-amber-200" /> 代表カウンセラー（医師）
                </span>
                <h3 className="font-bold text-sky-950 text-xl md:text-xl">【代表カウンセラー（医師）の専門性と提供価値】</h3>
              </div>
              <p className="text-[20px] md:text-base text-slate-700 leading-relaxed">
                代表カウンセラーは、現在も市中病院に勤務し、医療法人の役員を務める現役の医師です。20代の青年期から100歳代の終末期まで、あらゆる人生のターム（段階）、ターミナル（終末期）、ホスピス研修を経て、数多くの患者様の「人生観」や「幸福の本質」に深く寄り添ってきました。<br /><br />
                医療現場において培った下記の高度な専門スキルとマインドは、分野を超えて「結婚」という人生最大の選択（ライフイベント）を最適化するサポートにダイレクトに活かされています。
              </p>

              <div className="space-y-4 pt-2">
                <div className="bg-white p-4 rounded-xl border border-amber-200/80 space-y-2 shadow-xs">
                  <h4 className="font-bold text-sky-900 text-lg flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                    徹底的なインフォームド・コンセント（説明と同意）
                  </h4>
                  <p className="text-[20px] md:text-base text-slate-700 leading-relaxed">
                    医療において、患者様とコ・ワーカー（医療従事者）と協力しながら、あらゆる選択肢のメリット・デメリットを提示し、納得のいく決断を導き出すプロフェッショナルです。婚活でも、あなたに最適な選択肢をクリアに提示し、対話を通じて後悔のない意思決定を促します。
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-amber-200/80 space-y-2 shadow-xs">
                  <h4 className="font-bold text-sky-900 text-lg flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                    多職種連携（チーム医療）による課題解決力
                  </h4>
                  <p className="text-[20px] md:text-base text-slate-700 leading-relaxed">
                    往診医や他科の専門医への紹介・連携をはじめ、MSW（医療ソーシャルワーカー）、ケアマネジャー、訪問看護師、介護事業所、薬局の薬剤師など、多岐にわたる専門職のハブとなりチームを統括してきました。この強固な連携力とトータルマネジメント能力により、あなたの婚活における課題を構造化し、迅速に解決へと導きます。
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-amber-200/80 space-y-2 shadow-xs">
                  <h4 className="font-bold text-sky-900 text-lg flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                    人生の価値観に寄り添う深い傾聴力
                  </h4>
                  <p className="text-[20px] md:text-base text-slate-700 leading-relaxed">
                    人間の生と死、そして多様な生き方を見つめてきたからこそ、表面的な条件だけにとらわれない、あなた自身の「真の幸福」「本当に求めるパートナー像」を導き出すことができます。
                  </p>
                </div>
              </div>
            </div>

            {/* ベテラン男性カウンセラー */}
            <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-amber-50/20 border-2 border-blue-200 p-6 md:p-8 rounded-2xl shadow-sm space-y-4">
              <div className="flex flex-wrap items-center gap-3 border-b border-blue-200 pb-3">
                <span className="bg-indigo-600 text-white font-bold px-3 py-1 rounded-lg text-sm shadow-xs flex items-center gap-1">
                  <Users className="w-4 h-4 text-amber-200" /> ベテラン男性カウンセラー
                </span>
                <h3 className="font-bold text-indigo-950 text-xl md:text-xl">確かな成婚実績を持つ、ベテラン男性カウンセラーの併走</h3>
              </div>
              <p className="text-[20px] md:text-base text-slate-700 leading-relaxed">
                医師の持つ高い親和性・課題解決力に加え、百戦錬磨のベテラン男性カウンセラーが、リアルな婚活市場のトレンド、異性心理、交際をスムーズに進めるための実践的なテクニックをアドバイス。<br /><br />
                <span className="font-bold text-indigo-900 bg-amber-100/80 px-2 py-0.5 rounded border-b-2 border-amber-400">
                  「医療レベルの安心感・意思決定サポート」×「実践的な成婚プロデュース」
                </span>
                のダブルサポートにより、あなたの婚活ダンジョン攻略を確実なものにします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 結び & CTA セクション */}
      <section className="py-16 bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-700 text-white text-center px-4 w-full shadow-lg relative">
        <div className="max-w-5xl mx-auto space-y-6 w-full relative z-10">
          <span className="bg-amber-400 text-slate-900 font-extrabold text-xs px-4 py-1.5 rounded-full tracking-widest inline-block uppercase shadow-md border border-amber-200">
            FREE CONSULTATION
          </span>
          <h2 className="text-xl md:text-3xl font-serif font-bold tracking-wider text-white w-full drop-shadow-sm">
            【まずは無料カウンセリングへ】
          </h2>
          <p className="text-sky-100 text-[20px] md:text-base leading-relaxed tracking-wide w-full max-w-2xl mx-auto font-medium">
            大阪梅田ドクターズ結婚相談所では、入会前の無料カウンセリングにて、あなただけの「婚活ダンジョンマップ」のシミュレーションを行っています。婚活アプリで上手くいかなかった原因や、最短で成婚するための費用（お見合い料・成婚料）の仕組みについても丁寧にご説明します。強引な勧誘は一切ありませんので、梅田駅から徒歩5分の当相談所へお気軽にお越しください。
          </p>
          <div className="pt-4 flex justify-center w-full">
            <a 
              href="https://lin.ee/ZXB0UNs" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-extrabold px-8 py-5 rounded-2xl shadow-xl hover:shadow-2xl transition duration-200 tracking-wider text-[20px] md:text-base w-full sm:w-auto border-2 border-amber-300/50 transform hover:-translate-y-0.5">
              <MessageCircle className="w-6 h-6 shrink-0 text-amber-200" />
              勧誘ゼロ。まずはLINEで無料相談してみる
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}