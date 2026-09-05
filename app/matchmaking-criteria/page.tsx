import React from 'react';
import { Heart, Sparkles, MessageCircle, FileText, Brain, ShieldCheck, CheckCircle2, Stethoscope, HelpCircle, ChevronRight, Users, Compass } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お見合い後の交際判断基準(大阪梅田ドクターズ結婚相談所)|32歳女性が迷いから「もう一度会いたい」に変わった相談実例',
  description: 'お見合い後に「交際に進むべきか」迷う32歳女性に向けた相談実例を解説。ときめきがなくても交際に進んでいい理由やお見合いから仮交際に進む割合の目安など、実際の対話を通じてご紹介します。',
  openGraph: {
    title: 'お見合い後の交際判断基準(大阪梅田ドクターズ結婚相談所)|32歳女性が迷いから「もう一度会いたい」に変わった相談実例',
    description: 'お見合い後に「交際に進むべきか」迷う32歳女性に向けた相談実例を解説。ときめきがなくても交際に進んでいい理由やお見合いから仮交際に進む割合の目安など、実際の対話を通じてご紹介します。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'お見合い後の交際判断基準(大阪梅田ドクターズ結婚相談所)|32歳女性が迷いから「もう一度会いたい」に変わった相談実例',
    description: 'お見合い後に「交際に進むべきか」迷う32歳女性に向けた相談実例を解説。ときめきがなくても交際に進んでいい理由やお見合いから仮交際に進む割合の目安など、実際の対話を通じてご紹介します。',
  },
};

export default function MatchmakingDecisionConsultationPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "お見合い後の返事には期限がありますか?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい。IBJの仕組みでは、お見合い後の可否について、翌日17時までにお相手の所属する相談所へ返事をする必要があります。振り返りページに感想を記載しつつ、期限までにカウンセラーと相談しながら判断していただけます。"
        }
      },
      {
        "@type": "Question",
        "name": "「決め手がなかった」という曖昧な理由でお断りしても大丈夫ですか?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、問題ありません。具体的な理由が言語化できなくても、率直な気持ちをお伝えいただければ、当社がお相手に配慮した形で伝えます。"
        }
      },
      {
        "@type": "Question",
        "name": "お見合いで「好き」という気持ちが湧かなかったら、断るべきですか?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "一度も会わないうちから「好き」というときめきを求めてしまうと、それは一目惚れでしか成立しなくなります。お見合いの段階では「嫌いではないか」「一緒にいて苦にならないか」を基準にしていただく方が、その後の関係がうまく進みやすい傾向にあります。"
        }
      },
      {
        "@type": "Question",
        "name": "お相手から早くOKの返事が来ると、プレッシャーに感じてしまいます。",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "お申し込みをした側は、その時点である程度お相手に好意的なことが多く、早めにOKの返事が来ること自体は珍しくありません。ご自身のペースで判断していただいて問題ありません。"
        }
      },
      {
        "@type": "Question",
        "name": "お見合いから交際に進む割合はどれくらいですか?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "体感値にはなりますが、お見合いから仮交際に進む割合はおよそ4割程度です。あくまで目安としてお考えください。"
        }
      },
      {
        "@type": "Question",
        "name": "「仮交際」とは何ですか?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "お見合い後、お互いが「もう少し話してみたい」と合意した段階で始まる交際期間のことです。結婚を前提とした本交際に進むかどうかを見極めるための期間で、この間はデートを重ねながら価値観や将来設計のすり合わせを行います。"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-sky-100/40 to-blue-50 text-slate-800 font-sans antialiased selection:bg-sky-200 w-full overflow-x-hidden text-[20px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* ヒーローセクション */}
      <header className="relative bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white py-16 px-4 md:px-6 text-center overflow-hidden w-full border-b border-sky-300 shadow-lg">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_60%)]"></div>
        <div className="max-w-5xl mx-auto relative z-10 w-full space-y-5">
          <p className="bg-white/20 backdrop-blur-md text-sky-100 font-extrabold tracking-widest text-base md:text-lg uppercase inline-block px-5 py-1.5 rounded-full shadow-sm">
            LOGICAL & PSYCHOLOGICAL MATCHMAKING
          </p>
          <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight tracking-wider text-white drop-shadow-sm">
            お見合い後の交際判断基準(大阪梅田ドクターズ結婚相談所)|32歳女性が迷いから「もう一度会いたい」に変わった相談実例
          </h1>
        </div>
      </header>

      {/* 導入メッセージ */}
      <section className="py-10 w-full">
        <div className="max-w-5xl mx-auto w-full px-4 md:px-0">
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-md border border-sky-200 space-y-6 w-full">
            <p className="text-[20px] md:text-[22px] text-slate-800 leading-relaxed tracking-wide w-full text-center md:text-left">
              お見合いの後、「交際に進むべきか、正直まだよくわからない」と感じることは、実は珍しくありません。今回は、大阪梅田の相談室で32歳・会社員女性(初婚)が受けた、お見合い後のフォロー相談を再現しました。カウンセラーとの対話を通じて見えてきた「もう一度会いたい」と思えるまでの気持ちの変化、ときめきがなくても交際に進んでいい理由、お見合いから仮交際に進む割合の目安まで、実際のやり取りをご紹介します。
            </p>
            
            <div className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-white p-5 rounded-xl w-full text-center shadow-md">
              <p className="font-bold text-[22px] md:text-[24px] tracking-wider w-full">
                ✨ この記事でわかること
              </p>
            </div>

            <ul className="space-y-3 text-slate-700 pt-2 text-[20px]">
              <li className="flex items-start gap-3">
                <span className="text-sky-600 font-bold">•</span>
                お見合い後、実際にどんなフォロー面談が行われるのか
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sky-600 font-bold">•</span>
                「好き」というときめきがなくても交側に進んでいい理由
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sky-600 font-bold">•</span>
                交側に進む・進まないを、無理に即決させられることはないという安心材料
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sky-600 font-bold">•</span>
                気まずい思いをせずに意思表示できる仕組み
              </li>
            </ul>

            <blockquote className="bg-amber-50 border-l-4 border-amber-400 p-5 text-base md:text-lg text-amber-900 rounded-r mt-6">
              <p className="font-bold mb-1 text-[20px]">※本コンテンツについて</p>
              <p>
                本記事は、実際に当社にお寄せいただいたご相談内容を基に再現したものです。プライバシー保護の観点から、年齢・職業・エピソードなどの詳細は複数の事例を組み合わせて構成しており、特定の個人を描写したものではありません。実際の面談内容・進行は、お一人おひとりの状況により異なります。
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* 監修・カウンセラー情報 */}
      <section className="py-14 bg-sky-100/60 text-slate-800 w-full border-y border-sky-200">
        <div className="max-w-5xl mx-auto w-full px-4 md:px-0 space-y-6">
          <div className="bg-white p-8 md:p-10 border-2 border-sky-200 rounded-2xl shadow-md space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold text-sky-950 border-b border-sky-100 pb-4 flex items-center gap-3">
              <Stethoscope className="w-8 h-8 text-sky-600 shrink-0" />
              監修・カウンセラー情報
            </h2>
            <p className="leading-relaxed text-[20px] md:text-[22px] text-slate-700">
              本ケースの担当カウンセラーは、大阪梅田ドクターズ結婚相談所の代表カウンセラー。医療法人役員、市中病院での勤務医としての経験を持ち、内科認定医の資格を有する女性医師です。お見合い後の気持ちの整理は、医療現場での対話経験を活かし、相談者の言葉を否定せずに引き出すスタイルを大切にしています。
            </p>
            <p className="leading-relaxed text-[18px] md:text-[20px] text-slate-700 bg-sky-50/50 p-5 rounded-xl border border-sky-100">
              当社が加盟する結婚相談所ネットワーク「IBJ」は、2026年7月15日時点で登録会員数110,482名となり、11万名を突破しました。同月のIBJ全体の実績は、加盟相談所数4,818社、お見合い成立件数101,790件、成婚組数2,019組です(出典:株式会社IBJ公式プレスリリース、2026年7月付)。全国規模のネットワークだからこそ、一度のお見合いで結果が出なくても、次の出会いにすぐつなげられる土台があります。
            </p>
          </div>
        </div>
      </section>

      {/* ご相談者様の概要 */}
      <section className="py-14 bg-white w-full">
        <div className="max-w-5xl mx-auto w-full px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 border-b pb-4 mb-8">
            ご相談者様の概要(複数の実例を基に再構成)
          </h2>
          <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-sky-200">
            <table className="w-full text-left text-[18px] md:text-[20px]">
              <tbody>
                <tr className="border-b border-slate-100">
                  <th className="py-4 px-5 font-semibold bg-sky-50/50 w-1/3 sm:w-1/4">年齢</th>
                  <td className="py-4 px-5">32歳</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <th className="py-4 px-5 font-semibold bg-sky-50/50">職業</th>
                  <td className="py-4 px-5">会社員(事務職)</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <th className="py-4 px-5 font-semibold bg-sky-50/50">婚歴</th>
                  <td className="py-4 px-5">初婚</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <th className="py-4 px-5 font-semibold bg-sky-50/50">希望条件</th>
                  <td className="py-4 px-5">同世代、年収600万円以上、身長170cm以上、大卒、初婚</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <th className="py-4 px-5 font-semibold bg-sky-50/50">相談内容</th>
                  <td className="py-4 px-5">初めてのお見合い後、交際に進むべきか判断に迷っている</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <th className="py-4 px-5 font-semibold bg-sky-50/50">相談場所</th>
                  <td className="py-4 px-5">大阪梅田・第二ビル内の完全個室会議室</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <th className="py-4 px-5 font-semibold bg-sky-50/50">所要時間</th>
                  <td className="py-4 px-5">約30分(お見合い後のフォロー面談)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 対話セクション */}
      <section className="py-14 bg-sky-50/70 w-full">
        <div className="max-w-5xl mx-auto w-full px-4 md:px-0">
          <div className="bg-white p-8 md:p-12 border-2 border-sky-200 rounded-2xl shadow-md space-y-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 border-b pb-4">
              お見合い後フォロー面談の様子(実際のご相談内容をもとに再現)
            </h2>

            {/* 面談の経緯 */}
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-sky-900 flex items-center gap-2">
                <Compass className="w-6 h-6 text-sky-600 shrink-0" />
                面談の経緯
              </h3>
              <p className="text-slate-700 leading-relaxed text-[20px]">
                お見合いは大阪梅田のホテルラウンジで実施。当日は普通に会話ができ、お相手とはラウンジから駅まで一緒に帰った。事前のカウンセリングでは、お相手が自分としっかり関わろうというスタンスを持っているか、そして「一期一会。好きになれなくても、ご縁があってお見合いしたこの一時を、お互い温かい気持ちで大切にしましょう」というスタンスで臨むことを話していた。あれこれ希望を伝えてジャッジするのではなく、結婚を目指す方向でいい関係の一歩になれたらいいね、あえてよかった、せっかくの出会いをお互い楽しもうね、というくらいの気持ちでいく、という内容だった。当日は、その通りに素直に実践できたという感覚があった。
              </p>
              <p className="text-slate-700 leading-relaxed text-[20px]">
                IBJの公式会員サイトには、お見合い後に感想を記載する振り返りページがあり、良かった点・気になった点を入力する仕組みになっている。また、お見合いを受けるかどうかの返事は、翌日17時までにお相手の所属する相談所へ回答する必要がある。この期限が近づく中、初めてのお見合いということもあり、お断りした方がいいのではと考え、担当カウンセラーに相談することにした。
              </p>
            </div>

            {/* 面談内容（対話） */}
            <div className="space-y-5 pt-6 border-t border-slate-100">
              <h3 className="text-xl md:text-2xl font-bold text-sky-900 flex items-center gap-2 mb-6">
                <MessageCircle className="w-6 h-6 text-sky-600 shrink-0" />
                面談内容(対話の再現)——お見合いを断るか、仮交側に進むかの判断基準
              </h3>

              <div className="bg-sky-50 p-5 rounded-lg border-l-4 border-sky-500">
                <p><span className="font-bold text-sky-900">カウンセラー:</span>「お見合い、お疲れさまでした。振り返りページも拝見しましたが、ご自身の言葉でもう少し聞かせてもらえますか?」</p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-slate-200">
                <p><span className="font-bold text-slate-700">相談者:</span>「事前にお話ししていただいた通り、ジャッジするというより、一期一会の出会いを楽しもう、という気持ちで臨めたと思います。普通に会話もできましたし」</p>
              </div>

              <div className="bg-sky-50 p-5 rounded-lg border-l-4 border-sky-500">
                <p><span className="font-bold text-sky-900">カウンセラー:</span>「なるほど。具体的に、気になった点はありましたか?」</p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-slate-200">
                <p><span className="font-bold text-slate-700">相談者:</span>「お相手が、ご自分の会社の話や、栄転されたときの話をずっとされていて。少し早口だったのも気になりました。仕事への熱量というか、温度差のようなものを少し感じてしまって」</p>
              </div>

              <div className="bg-sky-50 p-5 rounded-lg border-l-4 border-sky-500">
                <p><span className="font-bold text-sky-900">カウンセラー:</span>「その感覚は大事にしていただいて大丈夫です。逆に、事前に必須確認事項としてお伝えしていた、動物がお好きかどうかは聞けましたか?」</p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-slate-200">
                <p><span className="font-bold text-slate-700">相談者:</span>「はい、猫を飼っていることを伝えたら、動物はお好きだとおっしゃっていたので、そこは大丈夫でした」</p>
              </div>

              <div className="bg-sky-50 p-5 rounded-lg border-l-4 border-sky-500">
                <p><span className="font-bold text-sky-900">カウンセラー:</span>「それは良かったです。最後は、練習していた通り『お話しできて楽しかったです』と笑顔で伝えられましたか?」</p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-slate-200">
                <p><span className="font-bold text-slate-700">相談者:</span>「はい、それも素直にお伝えできました。ただ、いざこの後どうしたらいいのか考えると正直迷っていて……今回はお断りしようかと思っています」</p>
              </div>

              <div className="bg-sky-50 p-5 rounded-lg border-l-4 border-sky-500">
                <p><span className="font-bold text-sky-900">カウンセラー:</span>「よろしければ、お断りしようと思われた一番の理由も聞かせてもらえますか?」</p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-slate-200">
                <p><span className="font-bold text-slate-700">相談者:</span>「正直に言うと、外見や雰囲気に『好き』という感覚が湧かなかったのが大きいです。嫌いというわけではないんですが、ときめきがなかったというか……」</p>
              </div>

              <div className="bg-sky-50 p-5 rounded-lg border-l-4 border-sky-500">
                <p><span className="font-bold text-sky-900">カウンセラー:</span>「その感覚、よくわかります。ただ一つだけお伝えしたいのですが、お見合いの時点で『好き』というときめきを条件にしてしまうと、それはもう一目惚れでしか成立しなくなってしまうんです。一目惚れが起きる確率で相手を探していくと、正直かなり難しくなってしまいます」</p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-slate-200">
                <p><span className="font-bold text-slate-700">相談者:</span>「言われてみれば、たしかにそうかもしれません……」</p>
              </div>

              <div className="bg-sky-50 p-5 rounded-lg border-l-4 border-sky-500">
                <p><span className="font-bold text-sky-900">カウンセラー:</span>「お見合いは、恋愛感情がゼロの状態から始まって当然の場です。ときめきは、会話を重ねたり、一緒に過ごす時間の中で後から育っていくことの方が多いんです。なので、最初の段階では『好きかどうか』ではなく、『嫌いではないか』『一緒にいて苦にならないか』を基準にしていただく方が、うまくいきやすいですよ」</p>
              </div>

              <div className="bg-sky-50 p-5 rounded-lg border-l-4 border-sky-500">
                <p><span className="font-bold text-sky-900">カウンセラー:</span>「実は、お相手からはすでに『仮交際希望』のお返事をいただいています。今回は男性側からのお申し込みだったんです」</p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-slate-200">
                <p><span className="font-bold text-slate-700">相談者:</span>「あ。そうなんですね。迷っていたんですが、なぜか少し嬉しいです」</p>
              </div>

              <div className="bg-sky-50 p-5 rounded-lg border-l-4 border-sky-500">
                <p><span className="font-bold text-sky-900">カウンセラー:</span>「お申し込みされた側は、その時点である程度お相手を気に入っていることが多いので、早めにOKのお返事をいただくケースは珍しくありません。条件面も確認させていただくと、ご希望条件——同世代、年収600万円以上、身長170cm以上、大卒、初婚——には、今回のお相手も合致しています」</p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-slate-200">
                <p><span className="font-bold text-slate-700">相談者:</span>「条件は合っているんですが、それだけで決めていいものなのか……」</p>
              </div>

              <div className="bg-sky-50 p-5 rounded-lg border-l-4 border-sky-500">
                <p><span className="font-bold text-sky-900">カウンセラー:</span>「無理に交際を決めていただく必要はありません。ただ、初めてのお見合いということもあるので、一つの目安をお伝えしますね。『もう一度会って、もう少し考えてみてもいいかな』と思えるようであれば、OKを出しておく、というくらいの気持ちで大丈夫です。お見合いの段階では、そのくらいの敷居で考えていただいて問題ありません」</p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-slate-200">
                <p><span className="font-bold text-slate-700">相談者:</span>「もう一度なら、会ってみてもいいかもしれません」</p>
              </div>

              <div className="bg-sky-50 p-5 rounded-lg border-l-4 border-sky-500">
                <p><span className="font-bold text-sky-900">カウンセラー:</span>「ちなみに、お見合いから交際(仮交際)に進む割合は、人にもよりますが、体感で4割程度です。条件面が合っていて、かつ『はっきり嫌ではない』という状態であれば、次に進んでみる価値は十分あります」</p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-slate-200">
                <p><span className="font-bold text-slate-700">相談者:</span>「そのくらいの割合なんですね。それを聞くと、少し気が楽になりました。今回はOKのお返事をしてみようと思います」</p>
              </div>

              <div className="bg-sky-50 p-5 rounded-lg border-l-4 border-sky-500">
                <p><span className="font-bold text-sky-900">カウンセラー:</span>「承知しました。17時までにお相手の相談所へこちらからお返事しておきますね」</p>
              </div>
            </div>

            {/* 断り方・仕組み */}
            <div className="space-y-4 pt-6 border-t border-slate-100">
              <h3 className="text-xl md:text-2xl font-bold text-sky-900 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-sky-600 shrink-0" />
                お見合いの断り方・意思表示の仕組みについて
              </h3>

              <div className="bg-sky-50 p-5 rounded-lg border-l-4 border-sky-500">
                <p><span className="font-bold text-sky-900">カウンセラー:</span>「今回のように迷っている場合はもちろん、もしはっきりお断りしたい場合も、直接相手に伝える必要はありません。当社を通じてお伝えするので、気まずい思いをせずに意思表示していただけます」</p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-slate-200">
                <p><span className="font-bold text-slate-700">相談者:</span>「直接断るのはやっぱり気が引けるので、それはありがたいです」</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ポイントまとめ */}
      <section className="py-14 bg-white w-full">
        <div className="max-w-5xl mx-auto w-full px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 border-b pb-4 mb-8">
            この相談内容から見えてくるポイント(まとめ)
          </h2>
          <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-sky-200">
            <table className="w-full text-left text-[18px] md:text-[20px]">
              <thead>
                <tr className="bg-sky-50 border-b border-sky-200">
                  <th className="py-4 px-5 font-bold text-sky-900 w-1/2">相談者の悩み</th>
                  <th className="py-4 px-5 font-bold text-sky-900 w-1/2">当社からの視点</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-4 px-5">温かい気持ちで臨めたが決め手がなく迷う</td>
                  <td className="py-4 px-5">初回のお見合いで強い決め手を求めすぎなくてよい</td>
                </tr>
                <tr>
                  <td className="py-4 px-5">外見や雰囲気に「好き」という感覚が湧かなかった</td>
                  <td className="py-4 px-5">お見合いで「好き」を条件にすると一目惚れでしか成立しなくなる。「嫌いではないか」を基準にする</td>
                </tr>
                <tr>
                  <td className="py-4 px-5">仕事の話ばかりで温度差を感じた</td>
                  <td className="py-4 px-5">気になった点として率直に受け止め、判断材料として整理する</td>
                </tr>
                <tr>
                  <td className="py-4 px-5">条件は合致しているが決めきれない</td>
                  <td className="py-4 px-5">「もう一度会ってもいいか」を目安にする、という低めの敷居で十分</td>
                </tr>
                <tr>
                  <td className="py-4 px-5">相手からの早期OKへの戸惑い</td>
                  <td className="py-4 px-5">申し込み側は既に好意的なことが多く、特別なことではない</td>
                </tr>
                <tr>
                  <td className="py-4 px-5">交際に進むかどうかの一般的な目安</td>
                  <td className="py-4 px-5">お見合いから仮交側に進む割合は体感で約4割</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="py-14 bg-sky-50/70 w-full">
        <div className="max-w-5xl mx-auto w-full px-4 md:px-0">
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md border border-sky-200 space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 border-b pb-4">
              まとめ:こんな方に読んでいただきたい記事です
            </h2>
            <ul className="space-y-4 text-slate-700 text-[20px]">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-sky-600 shrink-0 mt-1" />
                <span>お見合い後、交側に進むべきか判断がつかずモヤモヤしている方</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-sky-600 shrink-0 mt-1" />
                <span>交側に進む・進まないを、その場で即決しないといけないと思い込んでいる方</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-sky-600 shrink-0 mt-1" />
                <span>断る場合の気まずさが心配で、お見合いに踏み出せない方</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-sky-600 shrink-0 mt-1" />
                <span>大阪梅田エリアで、丁寧なフォロー体制がある相談所を探している方</span>
              </li>
            </ul>
            <p className="text-slate-700 pt-3 leading-relaxed text-[20px]">
              お見合い後のフォロー面談は、状況に応じて電話・対面いずれの形でも対応しております。判断に迷ったときこそ、お一人で抱え込まずにご相談ください。
            </p>
          </div>
        </div>
      </section>

      {/* 関連実例 */}
      <section className="py-12 bg-white w-full border-t border-sky-100">
        <div className="max-w-5xl mx-auto w-full px-4 md:px-0">
          <h2 className="text-2xl font-bold text-slate-900 border-b pb-4 mb-5">
            こちらの相談実例もあわせてご覧ください
          </h2>
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-sky-600 hover:text-sky-800 hover:underline flex items-center gap-2 font-medium text-[20px]">
                <ChevronRight className="w-5 h-5 shrink-0" />
                【無料相談実例】交際なし36歳・女医が来店した無料カウンセリングの中身
              </a>
              <p className="text-base text-slate-500 pl-7">入会前の無料相談で、実際にどんな会話が交わされるのかが気になる方はこちら。</p>
            </li>
            <li>
              <a href="#" className="text-sky-600 hover:text-sky-800 hover:underline flex items-center gap-2 font-medium text-[20px]">
                <ChevronRight className="w-5 h-5 shrink-0" />
                【男性版】無料相談ストーリー(35歳・会社員)
              </a>
              <p className="text-base text-slate-500 pl-7">男性会員の視点では、どんな悩みを相談し、どんなアドバイスを受けているのか。</p>
            </li>
          </ul>
        </div>
      </section>

      {/* よくある質問 */}
      <section className="py-14 bg-sky-50/70 w-full">
        <div className="max-w-5xl mx-auto w-full px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 border-b pb-4 mb-8 flex items-center gap-3">
            <HelpCircle className="w-8 h-8 text-sky-600 shrink-0" />
            よくある質問
          </h2>
          <div className="space-y-5">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-sky-200">
              <h3 className="font-bold text-slate-900 mb-3 text-[22px]">Q. お見合い後の返事には期限がありますか?</h3>
              <p className="text-[20px] text-slate-700 leading-relaxed">
                はい。IBJの仕組みでは、お見合い後の可否について、翌日17時までにお相手の所属する相談所へ返事をする必要があります。振り返りページに感想を記載しつつ、期限までにカウンセラーと相談しながら判断していただけます。
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-sky-200">
              <h3 className="font-bold text-slate-900 mb-3 text-[22px]">Q. 「決め手がなかった」という曖昧な理由でお断りしても大丈夫ですか?</h3>
              <p className="text-[20px] text-slate-700 leading-relaxed">
                はい、問題ありません。具体的な理由が言語化できなくても、率直な気持ちをお伝えいただければ、当社がお相手に配慮した形で伝えます。
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-sky-200">
              <h3 className="font-bold text-slate-900 mb-3 text-[22px]">Q. お見合いで「好き」という気持ちが湧かなかったら、断るべきですか?</h3>
              <p className="text-[20px] text-slate-700 leading-relaxed">
                一度も会わないうちから「好き」というときめきを求めてしまうと、それは一目惚れでしか成立しなくなります。お見合いの段階では「嫌いではないか」「一緒にいて苦にならないか」を基準にしていただく方が、その後の関係がうまく進みやすい傾向にあります。
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-sky-200">
              <h3 className="font-bold text-slate-900 mb-3 text-[22px]">Q. お相手から早くOKの返事が来ると、プレッシャーに感じてしまいます。</h3>
              <p className="text-[20px] text-slate-700 leading-relaxed">
                お申し込みをした側は、その時点である程度お相手に好意的なことが多く、早めにOKの返事が来ること自体は珍しくありません。ご自身のペースで判断していただいて問題ありません。
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-sky-200">
              <h3 className="font-bold text-slate-900 mb-3 text-[22px]">Q. お見合いから交際に進む割合はどれくらいですか?</h3>
              <p className="text-[20px] text-slate-700 leading-relaxed">
                体感値にはなりますが、お見合いから仮交側に進む割合はおよそ4割程度です。あくまで目安としてお考えください。
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-sky-200">
              <h3 className="font-bold text-slate-900 mb-3 text-[22px]">Q. 「仮交際」とは何ですか?</h3>
              <p className="text-[20px] text-slate-700 leading-relaxed">
                お見合い後、お互いが「もう少し話してみたい」と合意した段階で始まる交際期間のことです。結婚を前提とした本交側に進むかどうかを見極めるための期間で、この間はデートを重ねながら価値観や将来設計のすり合わせを行います。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="py-16 bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-700 text-white text-center px-4 w-full shadow-lg">
        <div className="max-w-5xl mx-auto space-y-6 w-full">
          <span className="bg-amber-300 text-slate-900 font-extrabold text-sm px-5 py-2 rounded-full tracking-widest inline-block uppercase shadow-md">FREE CONSULTATION</span>
          <h2 className="text-2xl md:text-4xl font-serif font-bold tracking-wider text-white w-full drop-shadow-sm">
            まずはご自身の「婚活未来図」を、私達と一緒に描いてみませんか？
          </h2>
          <div className="pt-6 flex justify-center w-full">
            <a 
              href="https://lin.ee/ZXB0UNs" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-extrabold px-10 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-200 tracking-wider text-[22px] md:text-[24px] w-full sm:w-auto border-2 border-white/30 transform hover:-translate-y-0.5">
              <MessageCircle className="w-8 h-8 shrink-0" />
              勧誘ゼロ。まずはLINEで無料相談してみる
            </a>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="py-8 bg-slate-100 border-t border-slate-200 text-base text-slate-500 text-center">
        <p>大阪梅田ドクターズ結婚相談所</p>
      </footer>
    </div>
  );
}