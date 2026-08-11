"use client";

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { MessageCircle, ShieldCheck, ArrowRight } from 'lucide-react';

export default function BeginnerLandingPage() {
  return (
    <div className="relative min-h-screen text-slate-800 font-sans antialiased selection:bg-sky-200 w-full overflow-x-hidden">
      
      {/* 画面全体の固定背景レイヤー (sky1.jpg) */}
      <div 
        className="fixed inset-0 pointer-events-none -z-10 bg-cover bg-center bg-no-repeat bg-fixed opacity-25"
        style={{ backgroundImage: "url('/sky1.jpg')" }}
      />
      
      {/* ベース背景カラー */}
      <div className="fixed inset-0 pointer-events-none -z-20 bg-sky-50/70" />

      {/* ヒーローセクション */}
      <header className="relative bg-gradient-to-br from-sky-200/90 via-indigo-100/80 to-blue-200/90 text-slate-900 py-14 px-4 md:px-6 text-center overflow-hidden w-full border-b border-sky-300/80 shadow-xs backdrop-blur-xs">
        <div className="max-w-5xl mx-auto relative z-10 w-full">
          <span className="inline-block bg-sky-700 text-sky-50 font-extrabold tracking-widest text-xs uppercase px-4 py-1.5 rounded-full mb-4 shadow-xs">
            🌱 恋愛初心者・婚活ビギナーのあなたへ
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-extrabold leading-tight tracking-wider mb-6 text-slate-900">
            恋愛初心者・婚活ビギナーのあなたが<br className="hidden md:inline" />スピード成婚する方法
          </h1>
          <div className="bg-white/95 p-6 rounded-2xl border border-sky-300 shadow-sm inline-block text-left w-full backdrop-blur-sm">
            <p className="text-sky-950 font-bold text-lg md:text-xl mb-2 text-center">「誰を選べばいいかわからない」「どんなライフスタイルがいいかわからない」</p>
            <p className="text-slate-700 text-[20px] md:text-base leading-relaxed tracking-wide text-center w-full">
              それは、あなたの『アイデンティティ（自分軸）』がまだ眠っているだけ。<br />
              EQ（心の知能指数）を磨き、自分らしさを確立して、生涯のパートナーと巡り会いましょう。<br />
              現役女医とベテランカウンセラーが、あなたの心と本気で向き合う結婚相談所です。
            </p>
          </div>
        </div>
      </header>

      {/* 導入：お手本のない迷路 */}
      <section className="py-8 w-full px-0 md:px-4">
        <div className="max-w-5xl mx-auto w-full">
          <div className="bg-white/90 backdrop-blur-md md:rounded-2xl p-5 md:p-8 shadow-sm border-y md:border border-sky-200 space-y-6 w-full">
            <div className="text-center px-4 w-full">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-slate-900 tracking-wider">
                ひとりでお手本のない迷路に迷っていませんか？
              </h2>
            </div>
            
            <div className="grid gap-2 md:gap-3 w-full">
              {[
                "「どんな人がタイプ？」と聞かれても、自分の本音がよくわからない",
                "変わりたい気持ちはあるけれど、自分の外見や会話のどこを直せばいいか見当がつかない",
                "マッチングアプリの華やかなプロフィールを見て、自分とは世界が違うと諦めてしまう",
                "異性と接する機会が少なすぎて、何が正解なのか誰も教えてくれなかった"
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-sky-50/80 p-4 border border-sky-200/80 w-full md:rounded-xl shadow-2xs">
                  <span className="text-sky-600 font-bold shrink-0 text-lg">✅</span>
                  <p className="text-[20px] md:text-base text-slate-800 font-semibold leading-relaxed w-full">{text}</p>
                </div>
              ))}
            </div>

            <div className="px-4 text-center pt-2 w-full">
              <p className="text-sky-950 font-bold text-lg w-full">
                私たちは、あなたのその疑問を解決し、そして「変わりたい」という一歩に寄り添います！
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 核心問いかけ */}
      <section className="py-8 bg-sky-100/50 backdrop-blur-xs w-full border-y border-sky-200 px-0 md:px-4">
        <div className="max-w-5xl mx-auto w-full space-y-6">
          <div className="bg-white/90 backdrop-blur-md p-5 md:p-6 border border-sky-200 w-full space-y-3 md:rounded-2xl shadow-xs">
            <h3 className="text-lg md:text-xl font-bold text-sky-950 tracking-wider w-full">
              【問い】なぜ、服やLINEを変えるだけの婚活では上手くいかないのか？
            </h3>
            <p className="text-[20px] md:text-base leading-relaxed text-slate-700 w-full">
              <span className="font-extrabold text-slate-900">【答え】</span><br />
              婚活ノウハウのあるあるは、「清潔感のある服を着ましょう」「LINEはすぐ返しましょう」と、表面的なテクニックを教えます。しかし、私たちは知っています。外見や連絡の頻度という「小手先」を変えても、少しだけ足りないのです。<br />
              あなたがこれまで恋愛や婚活で思うようにいかなかったのは、テクニック不足だけではありません。あなたの心の中にある、<span className="bg-sky-200/80 text-sky-950 px-2 py-0.5 rounded font-bold">4つの「マインドのすれ違い」</span>が原因かもしれません。
            </p>
          </div>

          <div className="text-center py-2 px-4 w-full">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900 tracking-wider">
              恋愛から遠ざかってしまう4つの根本原因とは何か？
            </h3>
          </div>

          <div className="grid gap-3 md:gap-4 md:grid-cols-2 w-full">
            <div className="bg-white/90 backdrop-blur-md p-5 border border-sky-200 flex flex-col justify-between w-full md:rounded-xl shadow-2xs hover:shadow-xs transition-shadow">
              <div className="w-full">
                <h4 className="font-bold text-sky-900 text-base mb-2 w-full">① 「自分なんて。。」という自信のなさ</h4>
                <p className="text-[20px] md:text-base text-slate-700 leading-relaxed w-full">
                  「自分には異性を惹きつける魅力がない」と思い込んでいませんか？ 傷つくのを恐れるあまり、心のどこかで打席に立つ前から諦めてしまっている状態です。どれだけ素敵なお洋服を着ても、自信のない態度は相手に必ず伝わってしまいます。
                </p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-md p-5 border border-sky-200 flex flex-col justify-between w-full md:rounded-xl shadow-2xs hover:shadow-xs transition-shadow">
              <div className="w-full">
                <h4 className="font-bold text-sky-900 text-base mb-2 w-full">② 自分の「魅力が何か」がわからない</h4>
                <p className="text-[20px] md:text-base text-slate-700 leading-relaxed w-full">
                  あなたの性格、優しさ、仕事や趣味など、素敵な要素はたくさんあります。しかし、それを「異性から見てどう魅力的に映るか」わからない状態かもしれません。大阪梅田ドクターズ結婚相談所での的確な客観視やアドバイスをもらうことでだんだん自分の認識が高くなっていきます。
                </p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-md p-5 border border-sky-200 flex flex-col justify-between w-full md:rounded-xl shadow-2xs hover:shadow-xs transition-shadow">
              <div className="w-full">
                <h4 className="font-bold text-sky-900 text-base mb-2 w-full">③ 異性の視点を意識する機会がなかった</h4>
                <p className="text-[20px] md:text-base text-slate-700 leading-relaxed w-full">
                  「自分がどう見られているか」という異性側の視点（EQ：心の知能指数）を意識する生活を送ってこなかったため、自分の世界だけで完結しがちです。普段から「相手を喜ばせる視点」を意識するためのオーダーメイドサポートが役立つでしょう。
                </p>
              </div>
              <Link 
                href="EQ" 
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-sky-700 hover:bg-sky-800 text-sky-50 px-5 py-2.5 text-sm font-bold shadow-xs hover:shadow-md transition-all duration-200 active:scale-[0.98]"
              >
                <span>婚活に必要なEQについて詳しくみる</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white/90 backdrop-blur-md p-5 border border-sky-200 flex flex-col justify-between w-full md:rounded-xl shadow-2xs hover:shadow-xs transition-shadow">
              <div className="w-full">
                <h4 className="font-bold text-sky-900 text-base mb-2 w-full">④ 「選ぶ・選ばれる」という立場への覚悟</h4>
                <p className="text-[20px] md:text-base text-slate-700 leading-relaxed w-full">
                  「いつか自然に良い人と出会える」と、どこか受動的になっていませんか？ 婚活とは自分が相手を選ぶ立場であると同時に、自分も常に選ばれる立場です。自分がどんな未来を欲しいのか？お相手に何を与えることができるのかを一緒に考えていきましょう。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* マインドアップデート ＆ ベテランカウンセラーメッセージ */}
      <section className="py-8 w-full px-0 md:px-4">
        <div className="max-w-5xl mx-auto w-full">
          <div className="bg-white/90 backdrop-blur-md md:rounded-2xl p-0 md:p-8 shadow-sm border-y md:border border-sky-200 space-y-6 w-full">
            <div className="text-center px-4 pt-6 md:pt-0 w-full">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900 tracking-wider w-full">
                当相談所は「あなたの内面（マインド）」からアップデートします
              </h3>
              <p className="text-slate-600 text-[20px] md:text-base mt-2 w-full">
                私たちは、対話を通じて、この4つの根本原因にアプローチします。
              </p>
            </div>

            <div className="grid gap-2 md:gap-4 md:grid-cols-2 w-full px-4 md:px-0">
              <div className="bg-sky-50/80 p-5 border border-sky-200 w-full md:rounded-xl shadow-2xs">
                <span className="text-xl mb-1 block">🌿</span>
                <h4 className="font-bold text-slate-900 text-base mb-2 w-full">アイデンティティ（自分軸）の再構築</h4>
                <p className="text-[20px] md:text-base text-slate-700 leading-relaxed w-full">
                  「今のあなたのどこが魅力的なのか」を言語化し、根拠のある自信（自己肯定感）を育てます。
                </p>
              </div>
              <div className="bg-sky-50/80 p-5 border border-sky-200 w-full md:rounded-xl shadow-2xs">
                <span className="text-xl mb-1 block">🌿</span>
                <h4 className="font-bold text-slate-900 text-base mb-2 w-full">EQ（心の知能指数）のトレーニング</h4>
                <p className="text-[20px] md:text-base text-slate-700 leading-relaxed w-full">
                  異性の目線や心理を理解し、恋愛の楽しさを実感できるマインドへとシフトしていきます。
                </p>
              </div>
            </div>

            <div className="text-center px-4 pt-2">
              <a
                href="#eq-check"
                className="inline-flex items-center gap-2 rounded-full bg-sky-600 hover:bg-sky-700 px-7 py-3.5 text-base font-bold text-white shadow-md transition-all hover:shadow-lg"
              >
                🌿 EQ診断をしてみる
                <span>→</span>
              </a>

              <p className="mt-4 text-[20px] md:text-base font-medium text-slate-800 leading-relaxed">
                私たちは、あなたの「生き方や心のあり方」から伴走し、
                魅力をたくさん発見して、一生モノのパートナーシップを築く力を授けます。
              </p>
            </div>

            {/* カウンセラーからのメッセージ */}
            <div className="bg-gradient-to-br from-sky-100/90 via-indigo-50/80 to-blue-100/60 p-5 md:p-7 border border-sky-200/90 w-full md:rounded-2xl space-y-4 shadow-xs backdrop-blur-xs">
              <div className="flex items-center gap-3 w-full">
                <Image 
                  src="/maleAdvisor.jpg" 
                  alt="ベテランカウンセラー" 
                  width={40}
                  height={40}
                  className="w-20 h-20 rounded-full object-cover border-2 border-sky-400 shadow-xs shrink-0"
                />
                <h4 className="font-bold text-sky-950 text-lg md:text-xl tracking-wide w-full">
                  ベテランカウンセラーからのメッセージ
                </h4>
              </div>
              <p className="font-bold text-sky-900 text-base md:text-lg tracking-wide w-full">
                あなたの心に「24時間」寄り添います
              </p>
              <div className="text-[20px] md:text-base text-slate-700 space-y-4 leading-relaxed w-full">
                <p className="w-full">
                  婚活で、時に不安になったり、お見合いで傷ついたりすることもあるかもしれません。そんな時、あなたを絶対にひとりにしないのが私の役目です。多数の成婚を見届けてきたからこそ、あなたの言葉にできない焦りや孤独を、親のような包容力で丸ごと受け止めます。
                </p>
                <p className="w-full">
                  「LINEの返信に迷う」「デートで沈黙が怖い」といった小さなお悩みから、人生の決断まで、いつでもあなたの1番の味方になって、いつでもLINEや対面で並走します。
                </p>
                <p className="w-full font-bold text-sky-900 text-base md:text-lg">
                  婚活は、あなた自身を大好きになる「最高の自己投資」です。
                </p>
                <p className="w-full">
                  私たちのゴールは、ただ「誰かとマッチングさせること」だけではありません。あなたが自分自身の魅力に気がつき、自分を愛せるようになり、豊かなEQを持って、パートナーに愛情を注ぐ。そうすれば、生涯崩れることのない幸福な家庭を『自分の力』で築けるようになることです。
                </p>
                <p className="font-bold text-slate-900 text-center text-lg pt-2 w-full pb-6 md:pb-0">
                  「今度こそ、自分を変えて幸せになりたい」<br />
                  少し勇気を持って、私たちのドアを叩いてください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3つのアプローチ */}
      <section id="support" className="py-8 bg-white/80 backdrop-blur-md w-full border-y border-sky-200 px-0 md:px-4">
        <div className="max-w-5xl mx-auto w-full">
          <div className="text-center mb-6 px-4 w-full">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 tracking-wider w-full">
              ── あなたが「自分の力」で幸せを掴むための、3つのアプローチ
            </h2>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-6 md:before:left-1/2 before:w-0.5 before:bg-sky-300 w-full">
            
            {/* アプローチ 1 */}
            <div className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center w-full">
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-sky-600 text-white font-extrabold flex items-center justify-center border-4 border-white shadow-xs z-10 text-base">
                1
              </div>
              <div className="pl-14 w-full md:pl-0 md:w-[46%] bg-sky-50/80 p-5 border border-sky-200 md:rounded-xl shadow-2xs">
                <h4 className="font-bold text-slate-900 text-base mb-2 tracking-wide w-full">
                  答えを押し付けない「本音の発掘カウンセリング」
                </h4>
                <p className="text-[20px] md:text-base text-slate-700 leading-relaxed tracking-wide w-full">
                  私たちが「この人がいい」と勝手に決めることはしません。カウンセラーがじっくりお話を聞きながら、あなた自身が気づいていない「本当に大切にしたい価値観」を整理します。これはきっとあなたのアイデンティティの探求になるでしょう。
                </p>
              </div>
              <div className="hidden md:block w-[46%]"></div>
            </div>

            {/* アプローチ 2 */}
            <div className="relative flex flex-col md:flex-row-reverse md:justify-between items-start md:items-center w-full">
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-sky-600 text-white font-extrabold flex items-center justify-center border-4 border-white shadow-xs z-10 text-base">
                2
              </div>
              <div className="pl-14 w-full md:pl-0 md:w-[46%] bg-sky-50/80 p-5 border border-sky-200 md:rounded-xl shadow-2xs">
                <h4 className="font-bold text-slate-900 text-base mb-2 tracking-wide w-full">
                  あなたの魅力を引き出す「再現性のある自分磨き」
                </h4>
                <p className="text-[20px] md:text-base text-slate-700 leading-relaxed tracking-wide w-full">
                  一過性の変身ではなく、ずっと使える服装の選び方や髪型の整え方を、女医・カウンセラーの視点からロジカルにお伝えします。「これなら自分でも続けられる」という自信を、一歩ずつ身につけていただきます。
                </p>
              </div>
              <div className="hidden md:block w-[46%]"></div>
            </div>

            {/* アプローチ 3 */}
            <div className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center w-full">
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-sky-600 text-white font-extrabold flex items-center justify-center border-4 border-white shadow-xs z-10 text-base">
                3
              </div>
              <div className="pl-14 w-full md:pl-0 md:w-[46%] bg-sky-50/80 p-5 border border-sky-200 md:rounded-xl shadow-2xs">
                <h4 className="font-bold text-slate-900 text-base mb-2 tracking-wide w-full">
                  次に活かせる「振り返り」と「作戦会議」
                </h4>
                <p className="text-[20px] md:text-base text-slate-700 leading-relaxed tracking-wide w-full">
                  お見合いのあと「何がうまくいって、どこが課題だったか」を振り返ります。会話のコツも心理・理由を解明し、次に同じ場面になったとき、あなた自身の力で対応できるように導きます。
                </p>
              </div>
              <div className="hidden md:block w-[46%]"></div>
            </div>

          </div>

          <div className="mt-8 p-5 bg-sky-100/60 border border-sky-200 text-center w-full md:rounded-xl backdrop-blur-xs">
            <h4 className="font-bold text-slate-900 text-lg mb-2 px-4 w-full">── 主役は、どこまでも「あなた」です</h4>
            <p className="text-[20px] md:text-base text-slate-700 leading-relaxed px-4 w-full">
              私たちは、あなたの代わりに結婚することはできません。ですが、あなたが「自分で納得のいく決断」ができるようになるまで、一番近くで知恵を絞り、支え続けることはできます。今、自信がなくても構いません。「ここから始めてみよう」という少しの勇気だけ持って、私たちに会いに来てください。
            </p>
          </div>
        </div>
      </section>

      {/* サポート体制 */}
      <section className="py-8 bg-sky-100/50 backdrop-blur-xs text-slate-800 w-full border-y border-sky-200 px-0 md:px-4">
        <div className="max-w-5xl mx-auto w-full space-y-6">
          <div className="bg-white/90 backdrop-blur-md border border-sky-200 w-full overflow-hidden md:rounded-2xl shadow-xs">
            <div className="p-5 md:p-6 space-y-4 w-full">
              <h4 className="font-bold text-sky-950 text-lg md:text-xl tracking-wide text-center w-full">
                あなたの「初めて」を私たちが100%バックアップします
              </h4>
              <div className="grid gap-2 md:grid-cols-3 md:gap-4 w-full">
                <div className="bg-sky-50/80 p-4 border border-sky-200/60 rounded-xl shadow-2xs">
                  <p className="font-bold text-sky-800 text-base mb-1">1. 素直なあなたとじっくり相談</p>
                  <p className="text-[20px] md:text-base text-slate-700 leading-relaxed">異性との接し方の基本やデートのマナーを、イチから丁寧にお伝えします。</p>
                </div>
                <div className="bg-sky-50/80 p-4 border border-sky-200/60 rounded-xl shadow-2xs">
                  <p className="font-bold text-sky-800 text-base mb-1">2. 清楚さを愛してくれる人をご紹介</p>
                  <p className="text-[20px] md:text-base text-slate-700 leading-relaxed">あなたのピュアさを何よりの魅力だと感じてくれる誠実な会員様をピックアップ。</p>
                </div>
                <div className="bg-sky-50/80 p-4 border border-sky-200/60 rounded-xl shadow-2xs">
                  <p className="font-bold text-sky-800 text-base mb-1">3. お見合い・交際もサポート</p>
                  <p className="text-[20px] md:text-base text-slate-700 leading-relaxed">服装選びからLINEの返し方、デートのお店まで、一緒に考えていきましょう。</p>
                </div>
              </div>
              <p className="text-center text-sky-950 font-bold text-[20px] md:text-base leading-relaxed pt-2 px-4 w-full">
                結婚相談所は「恋愛の上級者が行く場所」ではなく、「素直で清楚な人が、一番大切にされて幸せになる場所」です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* リアルな相談例 */}
      <section className="py-8 w-full px-0 md:px-4">
        <div className="max-w-5xl mx-auto w-full space-y-6">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-slate-900 mb-4 tracking-wider w-full">
            リアルなご相談例
          </h2>
          
          <div className="grid gap-4 md:grid-cols-2 w-full">
            {/* 男性の相談例 */}
            <div className="bg-white/90 backdrop-blur-md p-5 border border-sky-200 md:rounded-2xl shadow-2xs space-y-4 w-full">
              <div className="flex items-center gap-3 border-b border-sky-100 pb-2 w-full">
                <Image 
                  src="/manAvatar1.jpg" 
                  alt="男性の相談例" 
                  width={40}
                  height={40}
                  className="w-20 h-20 rounded-full object-cover border border-sky-300 shadow-2xs shrink-0"
                />
                <h3 className="font-bold text-sky-950 text-lg w-full">男性のリアルな相談例</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-sky-50/80 p-4 rounded-xl border-l-4 border-sky-500 w-full shadow-2xs">
                  <p className="text-xs text-sky-800 font-bold mb-1">相談者（20代後半・男性）</p>
                  <p className="text-[20px] md:text-base text-slate-700 leading-relaxed">「人生で一度も女性と付き合ったことがありません。お見合いの席で、過去の恋愛経験を聞かれたら正直に答えるべきですか？」</p>
                </div>
                <div className="bg-sky-50/80 p-4 rounded-xl border-l-4 border-sky-500 w-full shadow-2xs">
                  <p className="text-xs text-sky-800 font-bold mb-1">相談者（30代半ば・男性）</p>
                  <p className="text-[20px] md:text-base text-slate-700 leading-relaxed">「服に全く興味がなく、普段着しか持っていません。お店に一緒に行って選んでもらうのは、入会前でも相談できますか？」</p>
                </div>
              </div>
            </div>

            {/* 女性の相談例 */}
            <div className="bg-white/90 backdrop-blur-md p-5 border border-sky-200 md:rounded-2xl shadow-2xs space-y-4 w-full">
              <div className="flex items-center gap-3 border-b border-sky-100 pb-2 w-full">
                <Image 
                  src="/womanAvatar1.jpg" 
                  alt="女性の相談例" 
                  width={32}
                  height={32}
                  className="w-20 h-20 rounded-full object-cover border border-indigo-300 shadow-2xs shrink-0"
                />
                <h3 className="font-bold text-indigo-950 text-lg w-full">女性のリアルな相談例</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-sky-50/80 p-4 rounded-xl border-l-4 border-indigo-500 w-full shadow-2xs">
                  <p className="text-xs text-indigo-800 font-bold mb-1">相談者（30代前半・女性）</p>
                  <p className="text-[20px] md:text-base text-slate-700 leading-relaxed">「仕事はバリバリこなせるのに、恋愛になると途端に甘え方がわからなくなります。いい人はみつかりますか？」</p>
                </div>
                <div className="bg-sky-50/80 p-4 rounded-xl border-l-4 border-indigo-500 w-full shadow-2xs">
                  <p className="text-xs text-indigo-800 font-bold mb-1">相談者（20代後半・女性）</p>
                  <p className="text-[20px] md:text-base text-slate-700 leading-relaxed">「周りが結婚していく焦りで婚活を始めましたが、自分がどんな人を好きなのか、どんな結婚生活を送りたいのか本当にわかりません」</p>
                </div>
                <div className="bg-sky-50/80 p-4 rounded-xl border-l-4 border-indigo-500 w-full shadow-2xs">
                  <p className="text-xs text-indigo-800 font-bold mb-1">相談者（30代前半・女性）</p>
                  <p className="text-[20px] md:text-base text-slate-700 leading-relaxed">「恋愛経験がないことを隠したくて、アプリで無理して『慣れてる風』を装ってました。ありのままの自分で婚活をリスタートしたいです」</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3つの小さなお約束 */}
          <div className="bg-sky-100/80 backdrop-blur-xs p-5 border border-sky-200 md:rounded-2xl w-full space-y-4 shadow-xs">
            <h3 className="font-bold text-sky-950 text-lg flex items-center gap-2 w-full">
              <ShieldCheck className="w-5 h-5 text-sky-700 shrink-0" />
              🛡️ 私たちからの3つの小さなお約束
            </h3>
            <p className="text-[20px] md:text-base text-slate-800 font-medium w-full leading-relaxed">
              当相談所の公式LINEであなたからのメッセージを直接読んで、丁寧にお答えします。
            </p>
            <div className="grid gap-2 md:grid-cols-3 md:gap-3 w-full text-[20px] md:text-base font-bold text-slate-800">
              <div className="bg-white/90 p-4 rounded-xl border border-sky-100 shadow-2xs">🌱 【お約束 1】無理な入会勧誘は1ミリもしません</div>
              <div className="bg-white/90 p-4 rounded-xl border border-sky-100 shadow-2xs">🌱 【お約束 2】本名ではなく「ニックネーム」での相談も大歓迎です</div>
              <div className="bg-white/90 p-4 rounded-xl border border-sky-100 shadow-2xs">🌱 【お約束 3】どんな相談も「説教」や「否定」をすることは絶対にありません</div>
            </div>
          </div>
        </div>
      </section>

      {/* LINE CTA セクション */}
      <section id="line-add" className="py-12 bg-gradient-to-br from-sky-200/90 via-indigo-100/90 to-blue-200/90 text-slate-900 text-center px-4 w-full border-t border-sky-300 backdrop-blur-xs">
        <div className="max-w-5xl mx-auto space-y-4 w-full">
          <h2 className="text-xl md:text-2xl font-serif font-bold tracking-wider text-slate-900 w-full">
            まずはLINEで、友達に相談するみたいに話してみませんか？
          </h2>
          <p className="text-slate-700 text-[20px] md:text-base font-medium leading-relaxed tracking-wide w-full">
            「結婚相談所に行くなんて、まだそこまで覚悟が決まっていない」<br className="hidden md:inline" />
            「自分が何を悩んでいるのかすら、上手く説明できる自信がない」<br />
            まずはLINEであなたのペースで教えてください。公式LINEでは、毎日たくさんの「いまさら誰にも聞けない本音」が届いています。
          </p>
          <div className="pt-4 flex justify-center w-full">
            <a href="#line-add" className="inline-flex items-center justify-center gap-2 bg-sky-700 hover:bg-sky-800 text-white font-extrabold px-8 py-4 rounded-full shadow-md hover:shadow-lg transition duration-200 tracking-wider text-base w-full sm:w-auto">
              <MessageCircle className="w-5 h-5" />
              勧誘ゼロ。まずはLINEで相談してみる（無料）
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}