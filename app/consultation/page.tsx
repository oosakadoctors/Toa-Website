"use client";

import React from 'react';
import { Heart, Sparkles, Trophy, Flame, UserCheck, MessageCircle, ArrowRight, FileText, Compass, Brain, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export default function FreeConsultationProcessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-sky-100/40 to-blue-50 text-slate-800 font-sans antialiased selection:bg-sky-200 w-full overflow-x-hidden">
      
      {/* ヒーローセクション - 明るく上品なスカイブルーグラデーション */}
      <header className="relative bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white py-14 px-4 md:px-6 text-center overflow-hidden w-full border-b border-sky-300 shadow-lg">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_60%)]"></div>
        <div className="max-w-5xl mx-auto relative z-10 w-full space-y-4">
          <p className="bg-white/20 backdrop-blur-md text-sky-100 font-extrabold tracking-widest text-xs md:text-sm uppercase inline-block px-4 py-1 rounded-full shadow-sm">
            OBJECTIVE & LOGICAL MATCHMAKING COUNSELING
          </p>
          <h1 className="text-2xl md:text-4xl font-serif font-bold leading-tight tracking-wider text-white drop-shadow-sm">
            【無料相談のリアル】30代の婚活を客観的・論理的に導く「婚活未来図」と、<br className="hidden md:inline" />
            <span className="text-amber-200">
              現役医師による伴走サポートの全貌
            </span>
          </h1>
          
          <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-white inline-block text-left w-full mt-4 shadow-xl">
            <p className="text-sky-900 font-extrabold text-xl md:text-2xl mb-3 text-center tracking-wide">
              30代のための、客観的で心理的安心感に満ちた結婚相談
            </p>
            <p className="text-slate-700 text-[20px] md:text-base leading-relaxed tracking-wide text-center w-full font-medium">
              現役女性医師と20年ベテラン仲人が、あなたの理想を可視化する独自の『婚活未来図』や『婚活未来診断MMM』で伴走。<br className="hidden md:inline" />
              IQの点数ではない、本当の価値観を深く知る無料相談のリアルな流れをご紹介します。
            </p>
          </div>
        </div>
      </header>

      {/* 導入メッセージ - 明るいカード構成 */}
      <section className="py-8 w-full">
        <div className="max-w-5xl mx-auto w-full px-4 md:px-0">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-sky-200 space-y-5 w-full">
            <p className="text-[20px] md:text-base text-slate-800 leading-relaxed tracking-wide w-full text-center md:text-left">
              30代を迎え、「そろそろ本気で人生のパートナーを見つけたい」と考えたとき、多くの方が結婚相談所の門を叩きます。しかし同時に、「無理に入会を勧められないか」「自分の理想や悩みを否定されないか」という不安を抱くのも自然なことです。<br /><br />
              当相談所の無料相談は、単なる「手続きの説明」の場ではありません。
              <span className="text-sky-950 font-bold bg-sky-100/80 px-2 py-0.5 rounded border-b-2 border-sky-400 ml-1">
                あなたという人間を深く知り、これからの人生の方向性を一緒に見つめ直す、未来への第一歩です。
              </span><br />
              ここでは、実際にご来店いただいてから、入会後にどのような科学的・人間的なアプローチで成婚へと進むのか、その具体的なステップを包み隠さずお伝えします。
            </p>
            
            <div className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-white p-4 rounded-xl w-full text-center shadow-md">
              <p className="font-bold text-[20px] md:text-base tracking-wider w-full">
                ✨ 理想の未来を可視化する、当相談所のカウンセリングステップをご覧ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* メインイメージ */}
      <section className="w-full px-4 md:px-0">
        <div className="w-full max-w-4xl mx-auto my-1">
          <div className="relative w-full aspect-[1/1] md:aspect-[16/9] overflow-hidden rounded-2xl shadow-lg border-2 border-white">
            <Image
              src="/go.jpg"
              alt="現役医師とベテランカウンセラーによる安心の無料相談イメージ"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              loading="eager"
              fetchPriority="high"
              priority={false}
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAAEAAQBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA="
            />
          </div>
        </div>
      </section>

      {/* STEP 1 - 鮮やかな水色＆ホワイトカード */}
      <section className="py-12 bg-sky-100/60 text-slate-800 w-full border-y border-sky-200">
        <div className="max-w-5xl mx-auto w-full space-y-8">
          <div className="text-center px-4 w-full">
            <span className="bg-sky-500 text-white font-extrabold text-sm px-4 py-1 rounded-full tracking-widest inline-block mb-2 shadow-xs">STEP 01</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-sky-950 tracking-wider w-full">
              言葉にできない理想を言葉にする「2つのオリジナルシート」
            </h2>
            <p className="text-[20px] md:text-base text-slate-700 mt-2 w-full max-w-3xl mx-auto font-medium">
              無料相談にお越しいただいた際、まずはリラックスした雰囲気の中で、あなたの現在地と未来の理想を書き出すことから始めます。データマッチングだけでは見抜けない「あなた自身の軸」を見つけるための大切なプロセスです。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 w-full px-4 md:px-0">
            {/* 1. マッチングシート */}
            <div className="bg-white p-6 md:p-8 border-2 border-sky-200 flex flex-col justify-between w-full rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="w-full space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-400 to-blue-500 flex items-center justify-center text-white text-xl font-extrabold shadow-md">1</div>
                <h3 className="font-bold text-sky-900 text-xl md:text-lg tracking-wide w-full flex items-center gap-2 border-b border-sky-100 pb-2">
                  <FileText className="w-6 h-6 text-sky-500 shrink-0" />
                  マッチングシートへのご記入
                </h3>
                <p className="text-[20px] md:text-base text-slate-700 leading-relaxed w-full">
                  まずは、当社オリジナルの「マッチングシート」に、ご自身のことやこれまでの婚活状況などの基本情報をご記入いただきます。これまでの歩みを一度フラットに整理するためのプロセスです。
                </p>
              </div>
            </div>

            {/* 2. 婚活未来図 */}
            <div className="bg-white p-6 md:p-8 border-2 border-sky-200 flex flex-col justify-between w-full rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="w-full space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-white text-xl font-extrabold shadow-md">2</div>
                <h3 className="font-bold text-sky-900 text-xl md:text-lg tracking-wide w-full flex items-center gap-2 border-b border-sky-100 pb-2">
                  <Compass className="w-6 h-6 text-blue-500 shrink-0" />
                  理想を形にする「婚活未来図」（20の質問）
                </h3>
                <p className="text-[20px] md:text-base text-slate-700 leading-relaxed w-full">
                  続いて、当相談所独自のヒアリングシート「婚活未来図」をお渡しします。ここには、あなたが思い描く理想の結婚生活に関する「20の質問」が用意されています。選択肢を選んだり、あなた自身の言葉で記述したりしていくプロセス自体が、これまで曖昧だった「理想の未来」を明確に思考し、言葉として表現する最初の一歩となります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STEP 2 - 二人三脚カウンセリング */}
      <section className="py-12 bg-white w-full">
        <div className="max-w-5xl mx-auto w-full px-4 md:px-0">
          <div className="text-center mb-8 px-4 w-full">
            <span className="bg-blue-600 text-white font-extrabold text-sm px-4 py-1 rounded-full tracking-widest inline-block mb-2 shadow-xs">STEP 02</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 tracking-wider w-full">
              現役女性医師×ベテラン男性による、多角的な「二人三脚カウンセリング」
            </h2>
            <p className="text-[20px] md:text-base text-slate-600 mt-2 max-w-3xl mx-auto">
              シートの文字だけでは伝えきれない、微妙なニュアンスや胸の奥にある本音。それを引き出し、整理するのが私たちの役割です。当相談所では、全く異なるバックグラウンドを持つ2人のカウンセラーが、あなたのお話をじっくりと伺います。
            </p>
          </div>
      <section className="w-full px-4 md:px-0">
        <div className="w-full max-w-4xl mx-auto my-1">
          <div className="relative w-full aspect-[1/1] md:aspect-[16/9] overflow-hidden rounded-2xl shadow-lg border-2 border-white">
            <Image
              src="/consultation1.jpg"
              alt="現役医師とベテランカウンセラーによる安心の無料相談イメージ"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              loading="eager"
              priority={false}
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAAEAAQBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA="
            />
          </div>
        </div>
      </section>
          {/* 面談スタイル概要ボックス */}
          <div className="bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-600 text-white p-6 rounded-2xl shadow-lg mb-8 max-w-2xl mx-auto">
            <h3 className="text-center font-bold text-amber-200 mb-4 text-xl md:text-lg tracking-wide">【無料相談の面談スタイル】</h3>
            <div className="space-y-3 text-center text-[20px] md:text-base font-medium">
              <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/20">
                <span className="text-amber-300 font-extrabold">［前半 30分］</span> 現役女性医師（代表カウンセラー）との心理的安全性に満ちた対話
              </div>
              <div className="text-amber-300 font-extrabold text-xl">▼</div>
              <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/20">
                <span className="text-amber-300 font-extrabold">［後半 30分］</span> 20年の実績を持つベテラン男性カウンセラーとの実戦的面談
              </div>
            </div>
          </div>

          {/* 前半・後半の詳細カード */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 border-2 border-sky-200 p-6 md:p-8 rounded-2xl shadow-sm space-y-4">
              <div className="flex flex-wrap items-center gap-3 border-b border-sky-200 pb-3">
                <span className="bg-sky-600 text-white font-bold px-3 py-1 rounded-lg text-sm shadow-xs">前半：30分</span>
                <h3 className="font-bold text-sky-950 text-xl md:text-xl">現役女性医師による、客観的かつ論理的な方向性</h3>
              </div>
              <p className="text-[20px] md:text-base text-slate-700 leading-relaxed">
                ファーストカウンセリングは、現役の内科認定医でもある代表カウンセラーとのリラックスした会話からスタートします。<br /><br />
                医師として日々、数多くの患者さまの多様な人生観、生死や家族の局面に触れてきたからこそ、私たちはどのような価値観も決して否定しません。医療現場で培った「傾聴」の姿勢と行動科学的な視点をもって、あなたの言葉に耳を傾けます。<br /><br />
                「こんな贅沢な理想を言っても大丈夫かな？」「年齢的な不安を笑われないか？」といった心配は不要です。人生の様々な局面で悲しみや苦労を乗り越えてきた大人だからこそ、あなたのあらゆる想いに心理的に寄り添うことができます。<br /><br />
                より高い目標を目指す前向きなマインドから、言葉にならない不安までを丸ごと受け止めた上で、医学的・心理学的知見をベースにした「客観的かつ論理的な方向性」を導き出します。
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 md:p-8 rounded-2xl shadow-sm space-y-4">
              <div className="flex flex-wrap items-center gap-3 border-b border-blue-200 pb-3">
                <span className="bg-indigo-600 text-white font-bold px-3 py-1 rounded-lg text-sm shadow-xs">後半：30分</span>
                <h3 className="font-bold text-indigo-950 text-xl md:text-xl">婚活歴20年のベテラン男性カウンセラーによる、実戦的な視点</h3>
              </div>
              <p className="text-[20px] md:text-base text-slate-700 leading-relaxed">
                続いて、20年の婚活サポート実績を持つベテラン男性カウンセラーが面談に加わります。<br /><br />
                男性目線と女性目線、そして医師としてのキャリアと20年の婚活現場のキャリア。異なる経歴と人生経験を持つ2人が揃うことで、一方向からでは見えなかったあなたの魅力や、進むべき道が立体的に見えてきます。<br /><br />
                「女性カウンセラーには少し聞きづらかったこと」や「より具体的な婚活の現実・対策」についても、相手を変えることで気兼ねなく、さらに深く踏み込んで質問していただけます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 入会後のアプローチ - MMM診断 */}
      <section className="py-12 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white w-full shadow-inner">
        <div className="max-w-5xl mx-auto w-full px-4 md:px-0">
          <div className="bg-white/95 backdrop-blur-md text-slate-800 p-6 md:p-10 rounded-2xl shadow-2xl space-y-6">
            <div className="text-center space-y-2">
              <span className="bg-amber-400 text-slate-900 font-extrabold text-xs px-3 py-1 rounded-full tracking-widest inline-block uppercase shadow-xs">AFTER JOINING APPROACH</span>
              <h2 className="text-xl md:text-3xl font-serif font-bold text-sky-950 tracking-wider">
                入会後のアプローチ：理想のパラメーターを言語化する「婚活未来診断MMM」
              </h2>
            </div>

            <p className="text-[20px] md:text-base text-slate-700 leading-relaxed max-w-3xl mx-auto text-center md:text-left font-medium">
              無料相談を経てご入会された後には、さらに解像度の高いサポートをご用意しています。その中核を担うのが、独自に開発された「婚活未来診断MMM」です。
            </p>

            <div className="bg-sky-50 border-2 border-sky-200 p-6 rounded-xl space-y-4 max-w-3xl mx-auto">
              <div className="flex items-center gap-3 text-sky-900 font-bold text-xl md:text-lg border-b border-sky-200 pb-2">
                <Brain className="w-7 h-7 text-sky-600 shrink-0" />
                <span>7つのパラメーターで未来を可視化</span>
              </div>
              <p className="text-[20px] md:text-base text-slate-700 leading-relaxed">
                この診断では、結婚に対する理想やお相手に求める要素を「7つのパラメーター」に分類。心理学、内科認定医としての知見、そして長年の医療分野での経験を掛け合わせ、あなたが心の奥底で求めている「思い描く未来」や「婚活の具体的な方向性」を完全に言語化・可視化します。<br /><br />
                感覚だけに頼るのではなく、ロジカルに自分の現在地とゴールを把握できるため、ブレのない効率的な婚活が可能になります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 私たちの哲学 - 思想セクション */}
      <section className="py-12 bg-sky-50/70 w-full">
        <div className="max-w-5xl mx-auto w-full px-4 md:px-0">
          <div className="bg-white p-6 md:p-10 border-2 border-sky-200 w-full md:rounded-2xl space-y-6 shadow-md">
            <div className="flex items-center gap-4 border-b border-sky-100 pb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-400 to-blue-500 text-white flex items-center justify-center shrink-0 shadow-md">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-sky-600 font-extrabold tracking-widest block uppercase">OUR PHILOSOPHY</span>
                <h2 className="font-bold text-sky-950 text-lg md:text-xl tracking-wide">
                  私たちの哲学：すべてのツールは「IQの点数」をつけるためのものではありません
                </h2>
              </div>
            </div>

            <div className="text-[20px] md:text-base text-slate-700 space-y-4 leading-relaxed">
              <p>
                私たちが提供する「マッチングシート」「婚活未来図」「婚活未来診断MMM」。これらはすべて、あなたに「〇〇点です」といった、知能指数（IQ）のようなスコアや優劣をつけるためのものではありません。診断を完結させることが目的ではないのです。
              </p>
              <p>
                婚活において最も大切なのは、機械的な条件の点数ではなく、お互いの感情を理解し、尊重し合える「EQ（心の知能指数）」や「人間性」です。
              </p>
              <p className="bg-sky-100/70 border-l-4 border-sky-500 p-4 rounded-r-xl text-slate-900 font-semibold shadow-xs">
                これらのツールはすべて、会員様ご自身が「自分の本当の価値観（高いEQ）」を深く知り、ご自身の人生の方向性を主体的に決めるための羅針盤（一助）として作成されました。
              </p>
              <p>
                自分の軸が明確になれば、お相手選びに迷うことはなくなります。私たちは、あなたが自分らしい納得のいく人生を選択できるよう、論理的なデータと温かい人間味の両輪で、誠実に伴走することをお約束します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 結び & LINE CTA セクション */}
      <section className="py-16 bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-700 text-white text-center px-4 w-full shadow-lg">
        <div className="max-w-5xl mx-auto space-y-6 w-full">
          <span className="bg-amber-300 text-slate-900 font-extrabold text-xs px-4 py-1.5 rounded-full tracking-widest inline-block uppercase shadow-md">FREE CONSULTATION</span>
          <h2 className="text-xl md:text-3xl font-serif font-bold tracking-wider text-white w-full drop-shadow-sm">
            まずはご自身の「婚活未来図」を、私達と一緒に描いてみませんか？
          </h2>
          <p className="text-sky-100 text-[20px] md:text-base leading-relaxed tracking-wide w-full max-w-2xl mx-auto font-medium">
            私たちは、30代の皆様がこれまでのキャリアや人生経験を活かし、最も輝く形で未来のパートナーと出会える環境を整えています。<br /><br />
            「まずはツールの詳細について聞いてみたい」「女医カウンセラーのロジカルなカウンセリングを体験してみたい」など、どのような動機でも歓迎です。当社のプレミアムな無料相談でお待ちしております。
          </p>
          <div className="pt-4 flex justify-center w-full">
            <a 
              href="https://lin.ee/ZXB0UNs" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-extrabold px-8 py-5 rounded-2xl shadow-xl hover:shadow-2xl transition duration-200 tracking-wider text-[20px] md:text-base w-full sm:w-auto border-2 border-white/30 transform hover:-translate-y-0.5">
              <MessageCircle className="w-6 h-6 shrink-0" />
              勧誘ゼロ。まずはLINEで無料相談してみる
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}