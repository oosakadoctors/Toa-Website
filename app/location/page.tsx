import React from 'react';
import {
  Heart,
  Sparkles,
  Trophy,
  Flame,
  UserCheck,
  MessageCircle,
  ArrowRight,
  FileText,
  Compass,
  Brain,
  ShieldCheck,
  MapPin,
  Clock,
  Train,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    '北新地駅徒歩1分の結婚相談所|豊中・西宮・三宮・難波からアクセス抜群|大阪梅田ドクターズ結婚相談所',
  description:
    '大阪駅前第2ビル内、北新地駅直結徒歩1分の結婚相談所。豊中・池田・千里中央・吹田・茨木市の北摂エリア、西宮・御影・三宮の兵庫エリア、難波・心斎橋・天王寺・堺など大阪市内主要エリアからもアクセス良好。LINE・Zoomでのオンライン相談も対応。',
  openGraph: {
    title:
      '北新地駅徒歩1分の結婚相談所|豊中・西宮・三宮・難波からアクセス抜群|大阪梅田ドクターズ結婚相談所',
    description:
      '大阪駅前第2ビル内、北新地駅直結徒歩1分の結婚相談所。豊中・池田・千里中央・吹田・茨木市の北摂エリア、西宮・御影・三宮の兵庫エリア、難波・心斎橋・天王寺・堺など大阪市内主要エリアからもアクセス良好。LINE・Zoomでのオンライン相談も対応。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      '北新地駅徒歩1分の結婚相談所|豊中・西宮・三宮・難波からアクセス抜群|大阪梅田ドクターズ結婚相談所',
    description:
      '大阪駅前第2ビル内、北新地駅直結徒歩1分の結婚相談所。豊中・池田・千里中央・吹田・茨木市の北摂エリア、西宮・御影・三宮の兵庫エリア、難波・心斎橋・天王寺・堺など大阪市内主要エリアからもアクセス良好。LINE・Zoomでのオンライン相談も対応。',
  },
};

export default function LocationAccessPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '豊中・池田・千里中央からでも無理なく通えますか?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい、阪急宝塚線や北大阪急行を利用すれば、乗り換えなし、または一回の乗り換えで15～20分程度でお越しいただけます。北摂エリアからの会員様も多くご利用いただいています。',
        },
      },
      {
        '@type': 'Question',
        name: '西宮・御影・三宮など兵庫県からの利用者もいますか?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい、阪神本線・JR・阪急いずれかを使えば大阪梅田駅・大阪駅まで直通、または乗り換え一回でアクセスできるため、兵庫県内からご来店される会員様も多くいらっしゃいます。',
        },
      },
      {
        '@type': 'Question',
        name: '難波や心斎橋など大阪市内南部からのアクセスは?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '地下鉄御堂筋線を使えば、難波から約10分、心斎橋から約8分、本町・淀屋橋からは10分弱と、大阪市内中心部からは非常にスムーズにお越しいただけます。',
        },
      },
      {
        '@type': 'Question',
        name: '堺市や天王寺方面からでも通えますか?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '堺方面は南海本線・地下鉄御堂筋線の乗り継ぎで25～30分程度、天王寺方面は地下鉄御堂筋線で約15分です。少し距離のあるエリアからも、無理のない範囲でお越しいただいている会員様がいらっしゃいます。',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-sky-100/40 to-blue-50 text-slate-800 font-sans antialiased selection:bg-sky-200 w-full overflow-x-hidden">
      {/* FAQ Schema Script Injection for AEO/LLMO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ヒーローセクション */}
      <header className="relative bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white py-14 px-4 md:px-6 text-center overflow-hidden w-full border-b border-sky-300 shadow-lg">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_60%)]"></div>
        <div className="max-w-5xl mx-auto relative z-10 w-full space-y-4">
          <p className="bg-white/20 backdrop-blur-md text-sky-100 font-extrabold tracking-widest text-xs md:text-sm uppercase inline-block px-4 py-1 rounded-full shadow-sm">
            LOCATION & ACCESSIBILITY
          </p>
          <h1 className="text-2xl md:text-4xl font-serif font-bold leading-tight tracking-wider text-white drop-shadow-sm">
            北新地駅徒歩1分の結婚相談所|豊中・西宮・三宮・難波か ろもアクセス抜群
          </h1>

          <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-white inline-block text-left w-full mt-4 shadow-xl">
            <p className="text-slate-700 text-[20px] md:text-base leading-relaxed tracking-wide text-center w-full font-medium">
              婚活を始めようと考えたとき、「どの結婚相談所を選ぶか」で多くの方が重視するのは、カウンセ
              ラーの質やサポート内容、料金プランではないでしょうか。しかし、実はもう一つ、成婚率や活動の
              続けやすさに大きく関わる要素があります。それが「立地」です。
              <br />
              <br />
              <a
                href="/"
                className="text-sky-700 hover:text-sky-900 font-bold underline decoration-sky-400 decoration-2 underline-offset-2"
              >
                大阪梅田ドクターズ結婚相談所
              </a>
              は、大阪駅前という交通至便な立地に恵まれた大阪駅前第2ビル内に
              あります。今回は、この立地がなぜ婚活において重要なのか、そして大阪府内はもちろん兵庫県・北
              摂エリアなど幅広い地域から通いやすい理由についてご紹介します。
            </p>
          </div>
        </div>
      </header>

      {/* この記事の要点(1分でわかる要約) */}
      <section className="py-8 w-full">
        <div className="max-w-5xl mx-auto w-full px-4 md:px-0">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-sky-200 space-y-5 w-full">
            <div className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-white p-4 rounded-xl w-full text-center shadow-md">
              <p className="font-bold text-[20px] md:text-base tracking-wider w-full">
                この記事の要点(1分でわかる要約)
              </p>
            </div>
            <p className="text-[20px] md:text-base text-slate-800 leading-relaxed tracking-wide w-full text-center md:text-left">
              大阪梅田ドクターズ結婚相談所は、JR東西線「北新地駅」直結・徒歩1分、大阪駅から徒歩約8分の
              立地にあります。豊中・池田・千里中央・吹田・茨木市などの北摂エリア、西宮・御影・三宮などの
              兵庫エリア、難波・心斎橋・天王寺・堺などの大阪市内主要エリアから、いずれも電車で30分以内で
              アクセスできます。来店が難しい場合はLINE・メール・Zoomでのオンライン相談にも対応していま
              す。
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1 - なぜ「駅からの近さ」が婚活の成功率に関わるのか */}
      <section className="py-12 bg-sky-100/60 text-slate-800 w-full border-y border-sky-200">
        <div className="max-w-5xl mx-auto w-full space-y-8 px-4 md:px-0">
          <div className="text-center w-full">
            <span className="bg-sky-500 text-white font-extrabold text-sm px-4 py-1 rounded-full tracking-widest inline-block mb-2 shadow-xs">
              POINT 01
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-sky-950 tracking-wider w-full">
              なぜ「駅からの近さ」が婚活の成功率に関わるのか
            </h2>
          </div>

          <div className="bg-white p-6 md:p-8 border-2 border-sky-200 rounded-2xl shadow-md w-full space-y-4">
            <p className="text-[20px] md:text-base text-slate-700 leading-relaxed w-full">
              婚活は一度の相談で終わるものではなく、カウンセリングやお見合いのセッティング、プロフィール
              の見直しなど、繰り返し相談所に足を運ぶ活動です。駅から遠い、乗り換えが多いといった立地は、
              それだけで「行くのが面倒」という気持ちを生み、活動のペースが落ちてしまう原因になりかねま
              せん。反対に、駅からすぐの立地であれば、ちょっとした空き時間にも立ち寄りやすく、継続的な相談がし
              やすくなります。婚活において「相談のハードルの低さ」は、想像以上に成婚までの期間に影響する
              要素です。
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 - 大阪梅田ドクターズ結婚相談所の立地 */}
      <section className="py-12 bg-white w-full">
        <div className="max-w-5xl mx-auto w-full px-4 md:px-0 space-y-8">
          <div className="text-center px-4 w-full">
            <span className="bg-blue-600 text-white font-extrabold text-sm px-4 py-1 rounded-full tracking-widest inline-block mb-2 shadow-xs">
              POINT 02
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 tracking-wider w-full">
              大阪梅田ドクターズ結婚相談所の立地|北新地駅・大阪駅・大阪梅田駅
              からのアクセス
            </h2>
            <p className="text-[20px] md:text-base text-slate-600 mt-2 max-w-3xl mx-auto">
              当相談所は大阪駅前第2ビル内にあり、複数の路線から徒歩圏内という非常に恵まれたアクセス環境
              です。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 border-2 border-sky-200 p-5 rounded-xl shadow-xs flex items-center gap-3">
              <Train className="w-6 h-6 text-sky-600 shrink-0" />
              <span className="text-[20px] md:text-base font-bold text-slate-800">
                JR東西線「北新地駅」から徒歩1分(直結)
              </span>
            </div>
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 border-2 border-sky-200 p-5 rounded-xl shadow-xs flex items-center gap-3">
              <Train className="w-6 h-6 text-sky-600 shrink-0" />
              <span className="text-[20px] md:text-base font-bold text-slate-800">
                JR「大阪駅」から徒歩約8分
              </span>
            </div>
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 border-2 border-sky-200 p-5 rounded-xl shadow-xs flex items-center gap-3">
              <Train className="w-6 h-6 text-sky-600 shrink-0" />
              <span className="text-[20px] md:text-base font-bold text-slate-800">
                阪神「大阪梅田駅」から徒歩約5分
              </span>
            </div>
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 border-2 border-sky-200 p-5 rounded-xl shadow-xs flex items-center gap-3">
              <Train className="w-6 h-6 text-sky-600 shrink-0" />
              <span className="text-[20px] md:text-base font-bold text-slate-800">
                阪急「大阪梅田駅」から徒歩約10分
              </span>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl max-w-4xl mx-auto">
            <p className="text-[20px] md:text-base text-slate-700 leading-relaxed">
              大阪駅前第2ビルはJR北新地駅に直結しており、JR大阪駅、大阪メトロ各線、阪神、阪急へも地下街
              でつながっています。雨や強い日差しの日でも、地上に出ることなくアクセスできるのは大きな魅力
              です。
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 - 仕事帰り・休日でも通いやすい */}
      <section className="py-12 bg-sky-50/70 w-full border-y border-sky-200">
        <div className="max-w-5xl mx-auto w-full px-4 md:px-0">
          <div className="bg-white p-6 md:p-10 border-2 border-sky-200 w-full rounded-2xl space-y-6 shadow-md">
            <div className="flex items-center gap-4 border-b border-sky-100 pb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-400 to-blue-500 text-white flex items-center justify-center shrink-0 shadow-md">
                <Clock className="w-6 h-6" />
              </div>
              <h2 className="font-bold text-sky-950 text-xl md:text-2xl tracking-wide">
                仕事帰り・休日でも通いやすい、忙しい社会人に選ばれる理由
              </h2>
            </div>
            <p className="text-[20px] md:text-base text-slate-700 leading-relaxed">
              平日は仕事で忙しく、婚活に割ける時間が限られている方は少なくありません。北新地駅・大阪駅前
              という立地は、オフィス街からのアクセスも良く、仕事帰りに立ち寄って相談することも可能です。
              また、休日にゆっくり相談したい方にとっても、梅田・北新地エリアはショッピングやお食事のつい
              でに立ち寄りやすい立地です。「わざわざ行く」のではなく「ついでに寄れる」距離感であること
              が、婚活を無理なく続けられるポイントの一つです。
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 - 広域アクセス & 主要エリアからの所要時間比較表 */}
      <section className="py-12 bg-white w-full">
        <div className="max-w-5xl mx-auto w-full px-4 md:px-0 space-y-8">
          <div className="text-center px-4 w-full">
            <span className="bg-sky-500 text-white font-extrabold text-sm px-4 py-1 rounded-full tracking-widest inline-block mb-2 shadow-xs">
              ACCESS MAP
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-sky-950 tracking-wider w-full">
              北摂・兵庫エリアからもスムーズに通える広域アクセス
            </h2>
            <p className="text-[20px] md:text-base text-slate-700 mt-2 max-w-3xl mx-auto font-medium">
              梅田・北新地は大阪の交通結節点であり、大阪市内はもちろん、北摂・兵庫方面など幅広いエリアか
              ら電車一本、または乗り換え一回程度でアクセスできます。
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-center text-slate-800">
              主要エリアからの所要時間比較表
            </h3>
            <p className="text-[20px] md:text-base text-slate-600 text-center">
              「実際どのくらいの時間で通えるのか」が一目でわかるよう、主要エリアからの目安所要時間をまと
              めました。
            </p>

            <div className="overflow-x-auto rounded-2xl border border-sky-200 shadow-md">
              <table className="w-full text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-gradient-to-r from-sky-600 to-blue-600 text-white text-[18px] md:text-base">
                    <th className="p-4 border-b border-sky-700">エリア</th>
                    <th className="p-4 border-b border-sky-700">最寄り駅</th>
                    <th className="p-4 border-b border-sky-700">
                      梅田・北新地までの目安時間
                    </th>
                    <th className="p-4 border-b border-sky-700">主な利用路線</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sky-100 text-[18px] md:text-base text-slate-700">
                  <tr className="hover:bg-sky-50/50">
                    <td className="p-4 font-bold text-sky-900">豊中</td>
                    <td className="p-4">豊中駅</td>
                    <td className="p-4">約15分</td>
                    <td className="p-4">阪急宝塚線</td>
                  </tr>
                  <tr className="hover:bg-sky-50/50">
                    <td className="p-4 font-bold text-sky-900">池田</td>
                    <td className="p-4">池田駅</td>
                    <td className="p-4">約20分</td>
                    <td className="p-4">阪急宝塚線</td>
                  </tr>
                  <tr className="hover:bg-sky-50/50">
                    <td className="p-4 font-bold text-sky-900">千里中央</td>
                    <td className="p-4">千里中央駅</td>
                    <td className="p-4">約15分</td>
                    <td className="p-4">北大阪急行・地下鉄御堂筋線</td>
                  </tr>
                  <tr className="hover:bg-sky-50/50">
                    <td className="p-4 font-bold text-sky-900">吹田</td>
                    <td className="p-4">吹田駅</td>
                    <td className="p-4">約15分</td>
                    <td className="p-4">JR京都線</td>
                  </tr>
                  <tr className="hover:bg-sky-50/50">
                    <td className="p-4 font-bold text-sky-900">茨木市</td>
                    <td className="p-4">茨木市駅/JR茨木駅</td>
                    <td className="p-4">約15～20分</td>
                    <td className="p-4">阪急京都線・JR京都線</td>
                  </tr>
                  <tr className="hover:bg-sky-50/50">
                    <td className="p-4 font-bold text-sky-900">十三</td>
                    <td className="p-4">十三駅</td>
                    <td className="p-4">約5分</td>
                    <td className="p-4">阪急各線</td>
                  </tr>
                  <tr className="hover:bg-sky-50/50">
                    <td className="p-4 font-bold text-sky-900">西宮</td>
                    <td className="p-4">西宮駅</td>
                    <td className="p-4">約20分</td>
                    <td className="p-4">阪神本線</td>
                  </tr>
                  <tr className="hover:bg-sky-50/50">
                    <td className="p-4 font-bold text-sky-900">御影</td>
                    <td className="p-4">御影駅</td>
                    <td className="p-4">約25分</td>
                    <td className="p-4">阪神本線</td>
                  </tr>
                  <tr className="hover:bg-sky-50/50">
                    <td className="p-4 font-bold text-sky-900">三宮</td>
                    <td className="p-4">三宮駅</td>
                    <td className="p-4">約30分</td>
                    <td className="p-4">JR・阪神・阪急</td>
                  </tr>
                  <tr className="hover:bg-sky-50/50">
                    <td className="p-4 font-bold text-sky-900">難波</td>
                    <td className="p-4">なんば駅</td>
                    <td className="p-4">約10分</td>
                    <td className="p-4">地下鉄御堂筋線</td>
                  </tr>
                  <tr className="hover:bg-sky-50/50">
                    <td className="p-4 font-bold text-sky-900">心斎橋</td>
                    <td className="p-4">心斎橋駅</td>
                    <td className="p-4">約8分</td>
                    <td className="p-4">地下鉄御堂筋線</td>
                  </tr>
                  <tr className="hover:bg-sky-50/50">
                    <td className="p-4 font-bold text-sky-900">本町</td>
                    <td className="p-4">本町駅</td>
                    <td className="p-4">約6分</td>
                    <td className="p-4">地下鉄御堂筋線</td>
                  </tr>
                  <tr className="hover:bg-sky-50/50">
                    <td className="p-4 font-bold text-sky-900">淀屋橋</td>
                    <td className="p-4">淀屋橋駅</td>
                    <td className="p-4">約5分</td>
                    <td className="p-4">地下鉄御堂筋線</td>
                  </tr>
                  <tr className="hover:bg-sky-50/50">
                    <td className="p-4 font-bold text-sky-900">天王寺</td>
                    <td className="p-4">天王寺駅</td>
                    <td className="p-4">約15分</td>
                    <td className="p-4">地下鉄御堂筋線</td>
                  </tr>
                  <tr className="hover:bg-sky-50/50">
                    <td className="p-4 font-bold text-sky-900">
                      上本町(上六)
                    </td>
                    <td className="p-4">大阪上本町駅</td>
                    <td className="p-4">約20分</td>
                    <td className="p-4">近鉄・地下鉄乗り継ぎ</td>
                  </tr>
                  <tr className="hover:bg-sky-50/50">
                    <td className="p-4 font-bold text-sky-900">堺</td>
                    <td className="p-4">堺駅/堺東駅</td>
                    <td className="p-4">約25～30分</td>
                    <td className="p-4">南海本線・地下鉄御堂筋線乗り継ぎ</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs md:text-sm text-slate-500 text-right">
              ※所要時間は目安です。時間帯や乗り継ぎ状況により前後します。
            </p>
          </div>

          <div className="bg-sky-50 border border-sky-200 p-6 rounded-2xl max-w-4xl mx-auto">
            <p className="text-[20px] md:text-base text-slate-700 leading-relaxed">
              こうして見ると、大阪市内主要エリアはもちろん、北摂・兵庫エリアからも30分圏内で通えることが
              わかります。「遠いから」という理由で婚活相談所選びを諦める必要はありません。
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 - エリア別・よくあるご質問 (FAQ) */}
      <section className="py-12 bg-sky-100/60 text-slate-800 w-full border-y border-sky-200">
        <div className="max-w-5xl mx-auto w-full px-4 md:px-0 space-y-8">
          <div className="text-center w-full">
            <span className="bg-sky-500 text-white font-extrabold text-sm px-4 py-1 rounded-full tracking-widest inline-block mb-2 shadow-xs">
              FAQ
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-sky-950 tracking-wider w-full">
              エリア別・よくあるご質問
            </h2>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {/* Q1 */}
            <div className="bg-white p-6 rounded-2xl border border-sky-200 shadow-sm space-y-3">
              <div className="flex items-start gap-3 text-sky-900 font-bold text-xl md:text-lg">
                <HelpCircle className="w-6 h-6 text-sky-600 shrink-0 mt-0.5" />
                <h3>Q. 豊中・池田・千里中央からでも無理なく通えますか?</h3>
              </div>
              <p className="text-[20px] md:text-base text-slate-700 leading-relaxed pl-9">
                A.
                はい、阪急宝塚線や北大阪急行を利用すれば、乗り換えなし、または一回の乗り換えで15～20分程度でお越しいただけます。北摂エリアからの会員様も多くご利用いただいています。
              </p>
            </div>

            {/* Q2 */}
            <div className="bg-white p-6 rounded-2xl border border-sky-200 shadow-sm space-y-3">
              <div className="flex items-start gap-3 text-sky-900 font-bold text-xl md:text-lg">
                <HelpCircle className="w-6 h-6 text-sky-600 shrink-0 mt-0.5" />
                <h3>
                  Q. 西宮・御影・三宮など兵庫県からの利用者もいますか?
                </h3>
              </div>
              <p className="text-[20px] md:text-base text-slate-700 leading-relaxed pl-9">
                A.
                はい、阪神本線・JR・阪急いずれかを使えば大阪梅田駅・大阪駅まで直通、または乗り換え一回でアクセスできるため、兵庫県内からご来店される会員様も多くいらっしゃいます。
              </p>
            </div>

            {/* Q3 */}
            <div className="bg-white p-6 rounded-2xl border border-sky-200 shadow-sm space-y-3">
              <div className="flex items-start gap-3 text-sky-900 font-bold text-xl md:text-lg">
                <HelpCircle className="w-6 h-6 text-sky-600 shrink-0 mt-0.5" />
                <h3>Q. 難波や心斎橋など大阪市内南部からのアクセスは?</h3>
              </div>
              <p className="text-[20px] md:text-base text-slate-700 leading-relaxed pl-9">
                A.
                地下鉄御堂筋線を使えば、難波から約10分、心斎橋から約8分、本町・淀屋橋からは10分弱と、大阪市内中心部からは非常にスムーズにお越しいただけます。
              </p>
            </div>

            {/* Q4 */}
            <div className="bg-white p-6 rounded-2xl border border-sky-200 shadow-sm space-y-3">
              <div className="flex items-start gap-3 text-sky-900 font-bold text-xl md:text-lg">
                <HelpCircle className="w-6 h-6 text-sky-600 shrink-0 mt-0.5" />
                <h3>Q. 堺市や天王寺方面からでも通えますか?</h3>
              </div>
              <p className="text-[20px] md:text-base text-slate-700 leading-relaxed pl-9">
                A.
                堺方面は南海本線・地下鉄御堂筋線の乗り継ぎで25～30分程度、天王寺方面は地下鉄御堂筋線で約15分です。少し距離のあるエリアからも、無理のない範囲でお越しいただいている会員様がいらっしゃいます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - オンライン相談 & 完全予約制 */}
      <section className="py-12 bg-white w-full">
        <div className="max-w-5xl mx-auto w-full px-4 md:px-0 space-y-8">
          {/* オンライン相談 */}
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 border-2 border-sky-200 p-6 md:p-8 rounded-2xl shadow-sm space-y-4 max-w-4xl mx-auto">
            <h2 className="font-bold text-sky-950 text-xl md:text-2xl border-b border-sky-200 pb-3">
              通えない日も安心|LINE・メール・Zoomでのオンライン相談も随時対応
            </h2>
            <p className="text-[20px] md:text-base text-slate-700 leading-relaxed">
              とはいえ、どれだけ立地が良くても、出張や体調不良、育児や介護などの事情でどうしても来店が難
              しい日もあるかと思います。
              <br />
              <br />
              大阪梅田ドクターズ結婚相談所では、LINE・メール・Zoomを使ったオンライン相談を随時受け付け
              ています。来店が難しいときでも、オンラインでのカウンセリングやご相談を通じて、婚活のペース
              を止めることなく活動を継続していただけます。
              <br />
              <br />
              「今日は行けないから相談を先延ばしにする」ということがなくなるため、遠方にお住まいの方や、
              スケジュールの調整が難しい方にも安心してご利用いただいています。
            </p>
          </div>

          {/* 完全予約制 */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 md:p-8 rounded-2xl shadow-sm space-y-4 max-w-4xl mx-auto">
            <h2 className="font-bold text-indigo-950 text-xl md:text-2xl border-b border-blue-200 pb-3">
              完全予約制だからこそ実現できる、無駄のない通いやすさ
            </h2>
            <p className="text-[20px] md:text-base text-slate-700 leading-relaxed">
              当相談所は完全予約制で運営しております。事前にご予約いただくことで、待ち時間なく、お一人お
              ひとりのペースに合わせたカウンセリングが可能です。
              <br />
              <br />
              来店でもオンラインでも、事前にご予約いただければ確実に対応いたしますので、「行ったのに対応
              してもらえなかった」という心配もありません。
              <br />
              <br />
              <a
                href="/support"
                className="text-indigo-700 hover:text-indigo-900 font-bold underline decoration-indigo-400 decoration-2 underline-offset-2"
              >
                婚活って何?から一歩ずつ(初心者むけサポート内容説明)
              </a>
              も充実しておりますので、どうぞお気軽にお尋ねください。
            </p>
          </div>
        </div>
      </section>

      {/* ドクターズ結婚相談所が選ばれる理由 (内部リンク橋渡し) */}
      <section className="py-6 bg-sky-50 w-full">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[20px] md:text-base font-bold text-sky-950">
            当相談所の詳しい強みやサポート内容については「
            <a
              href="/reasons"
              className="text-sky-700 hover:text-sky-900 underline decoration-sky-400 decoration-2 underline-offset-2"
            >
              ドクターズ結婚相談所が選ばれる理由
            </a>
            」も併せてご覧ください。
          </p>
        </div>
      </section>

      {/* メインカウンセラーのメッセージ (内部リンク橋渡し) */}
      <section className="py-6 bg-white w-full">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[20px] md:text-base text-slate-700">
            代表カウンセラーからの詳しい挨拶や想いについては「
            <a
              href="/message"
              className="text-sky-700 hover:text-sky-900 font-bold underline decoration-sky-400 decoration-2 underline-offset-2"
            >
              メインカウンセラーのメッセージ
            </a>
            」をお読みください。
          </p>
        </div>
      </section>

      {/* SECTION 7 - まとめ & CTA */}
      <section className="py-16 bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-700 text-white text-center px-4 w-full shadow-lg">
        <div className="max-w-5xl mx-auto space-y-6 w-full">
          <span className="bg-amber-300 text-slate-900 font-extrabold text-xs px-4 py-1.5 rounded-full tracking-widest inline-block uppercase shadow-md">
            SUMMARY
          </span>
          <h2 className="text-xl md:text-3xl font-serif font-bold tracking-wider text-white w-full drop-shadow-sm">
            まとめ:立地の良さと柔軟な相談体制が「続けやすさ」に直結する
          </h2>
          <p className="text-sky-100 text-[20px] md:text-base leading-relaxed tracking-wide w-full max-w-3xl mx-auto font-medium text-left md:text-center">
            婚活相談所選びでは、カウンセラーの質やサポート内容に目が向きがちですが、「通いやすさ」もま
            た、活動を継続し、成婚に近づくための重要な要素です。
            <br />
            <br />
            大阪梅田ドクターズ結婚相談所は、北新地駅徒歩1分・大阪駅前という好立地に加え、豊中・池田・
            千里中央・吹田といった北摂エリア、西宮・御影・三宮といった兵庫エリア、さらに難波・心斎橋・
            天王寺・上本町・本町・淀屋橋・堺といった大阪市内主要エリアからもアクセスしやすく、LINE・
            メール・Zoomによるオンライン相談にも対応しています。忙しい方、遠方にお住まいの方でも無理
            なく婚活を続けていただける環境を整えています。
            <br />
            <br />
            大阪・兵庫エリアで婚活・結婚相談所をお探しの方は、
            <a
              href="/free-consultation"
              className="text-amber-200 hover:text-amber-100 font-extrabold underline decoration-amber-300 decoration-2 underline-offset-2"
            >
              まずは無料相談から
            </a>
            、当相談所の雰囲気やサ ポート体制をご確認ください。
          </p>
          <div className="pt-4 flex justify-center w-full">
            <a
              href="https://lin.ee/ZXB0UNs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-extrabold px-8 py-5 rounded-2xl shadow-xl hover:shadow-2xl transition duration-200 tracking-wider text-[20px] md:text-base w-full sm:w-auto border-2 border-white/30 transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-6 h-6 shrink-0" />
              まずは無料相談から
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}