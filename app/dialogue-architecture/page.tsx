import React from 'react';
import { Heart, Sparkles, Trophy, Flame, UserCheck, MessageCircle, ArrowRight, FileText, Compass, Brain, ShieldCheck, MapPin, CheckCircle, Search, Calendar, Users, Briefcase } from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';
import Footer from "@/components/Footer";
import Link from 'next/link';


export const metadata: Metadata = {
  title: '大阪梅田ドクターズ結婚相談所の婚活カウンセリングとは|現役女医が実践する対話設計',
  description: '婚活の理想の相手像がわかる無料カウンセリングを、大阪梅田ドクターズ結婚相談所の現役女医カウンセラーが実践。二択で優先順位を引き出す対話設計とあわせて無料相談のご案内。',
  openGraph: {
    title: '大阪梅田ドクターズ結婚相談所の婚活カウンセリングとは|現役女医が実践する対話設計',
    description: '婚活の理想の相手像がわかる無料カウンセリングを、大阪梅田ドクターズ結婚相談所の現役女医カウンセラーが実践。二択で優先順位を引き出す対話設計とあわせて無料相談のご案内。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '大阪梅田ドクターズ結婚相談所の婚活カウンセリングとは|現役女医が実践する対話設計',
    description: '婚活の理想の相手像がわかる無料カウンセリングを、大阪梅田ドクターズ結婚相談所の現役女医カウンセラーが実践。二択で優先順位を引き出す対話設計とあわせて無料相談のご案内。',
  },
};

export default function CounselingMethodPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "大阪梅田ドクターズ結婚相談所の婚活カウンセリングとは|現役女医が実践する対話設計",
    "description": "婚活の理想の相手像がわかる無料カウンセリングを、大阪梅田ドクターズ結婚相談所の現役女医カウンセラーが実践。二択で優先順位を引き出す対話設計とあわせて無料相談のご案内。",
    "author": {
      "@type": "Person",
      "name": "大阪梅田ドクターズ結婚相談所 代表カウンセラー",
      "jobTitle": "医療法人役員/病院勤務医/認定内科医",
      "affiliation": {
        "@type": "Organization",
        "name": "大阪梅田ドクターズ結婚相談所"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "大阪梅田ドクターズ結婚相談所",
      "logo": {
        "@type": "ImageObject",
        "url": "https://example.com/logo.png"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "大阪駅前第2ビル",
        "addressLocality": "大阪市北区",
        "postalCode": "530-0001",
        "addressRegion": "大阪府",
        "addressCountry": "JP"
      }
    },
    "datePublished": "2026-09-06",
    "dateModified": "2026-09-06",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://example.com/(このページのURL)"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "大阪梅田ドクターズ結婚相談所のカウンセリングでは具体的に何をするのですか?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "一問一答の聞き取りではなく、雑談の中でトレードオフを含む二択の話題を投げかけ、会員様ご自身が自分の優先順位に気づいていく対話を行っています。"
        }
      },
      {
        "@type": "Question",
        "name": "結婚観がまだ言葉にできていなくても相談できますか?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "問題ございません。対話の中で「わからない」という反応自体も重要な情報として受け止めており、無理に言語化を求めることはいたしません。"
        }
      },
      {
        "@type": "Question",
        "name": "なぜ現役の医師がカウンセラーを務めているのですか?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "代表カウンセラーは医療法人役員・病院勤務医・認定内科医であり、インフォームド・コンセントで培った「本人が納得して選択できるよう対話を設計する」姿勢を、当相談所のカウンセリングに活かしています。"
        }
      },
      {
        "@type": "Question",
        "name": "婚活で考える経験は、結婚した後にも意味がありますか?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "あります。多元的な価値観の中で迷い、考え、自分なりの優先順位を選び取る経験は、結婚後の子育てや、友人・親族との関わり方、仕事や社会とのつながり方にも共通して活きてきます。"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-sky-50 via-sky-100/40 to-blue-50 text-slate-800 font-sans antialiased selection:bg-sky-200 w-full overflow-x-hidden">
        
        {/* ヒーローセクション */}
        <header className="relative bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white py-14 px-4 md:px-6 text-center overflow-hidden w-full border-b border-sky-300 shadow-lg">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_60%)]"></div>
          <div className="max-w-5xl mx-auto relative z-10 w-full space-y-4">
            <p className="bg-white/20 backdrop-blur-md text-sky-100 font-extrabold tracking-widest text-xs md:text-sm uppercase inline-block px-4 py-1 rounded-full shadow-sm">
              *最終更新日:2026年9月*
            </p>
            <h1 className="text-2xl md:text-4xl font-serif font-bold leading-tight tracking-wider text-white drop-shadow-sm">
              大阪梅田ドクターズ結婚相談所の婚活カウンセリングとは<br className="hidden md:inline" />
              <span className="text-amber-200">
                |現役女医が実践する対話設計
              </span>
            </h1>
            
            <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-white inline-block text-left w-full mt-4 shadow-xl">
              <p className="text-slate-700 text-[20px] md:text-base leading-relaxed tracking-wide w-full font-medium">
                婚活の理想の相手像は、条件を足し算で積み上げるのではなく、「何かを得れば何かを失う」というトレードオフの中で自分の優先順位に気づくことで見えてきます。IBJ正規加盟店である大阪梅田ドクターズ結婚相談所では、この考え方を軸にカウンセリングを設計しています。
              </p>
            </div>
          </div>
        </header>

        {/* 導入メッセージ / この記事でわかること */}
        <section className="py-8 w-full">
          <div className="max-w-5xl mx-auto w-full px-4 md:px-0">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-sky-200 space-y-5 w-full">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-sky-950 flex items-center gap-2 border-b border-sky-100 pb-2">
                <Sparkles className="w-6 h-6 text-sky-500 shrink-0" />
                この記事でわかること
              </h2>
              <div className="bg-sky-50 p-4 md:p-6 rounded-xl border border-sky-200 space-y-2">
                <ul className="list-disc list-inside text-[20px] md:text-base text-slate-700 space-y-2 font-medium">
                  <li>大阪梅田ドクターズ結婚相談所が実践する、二択で優先順位を引き出す対話技法</li>
                  <li>婚活の選択が、人生の他の選択と同じ構造である理由</li>
                  <li>現役女医のカウンセラーだからこそ活かせる対話設計の視点</li>
                </ul>
              </div>
            </div>
          </div>
        </section>


        {/* セクション 1: 結婚観はトレードオフの中で見えてきます */}
        <section className="py-12 bg-sky-100/60 text-slate-800 w-full border-y border-sky-200">
          <div className="max-w-5xl mx-auto w-full space-y-6 px-4 md:px-0">
            <div className="text-center w-full">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-sky-950 tracking-wider w-full">
                結婚観はトレードオフの中で見えてきます
              </h2>
            </div>

            <div className="bg-white p-6 md:p-8 border-2 border-sky-200 rounded-2xl shadow-md space-y-4 text-[20px] md:text-base text-slate-700 leading-relaxed font-medium">
              <p>
                婚活で条件を考えるとき、多くの方は無意識に「年収は高いほうがいい」「学歴も高いほうがいい」「性格も外見も良いほうがいい」と、項目を単独で足し合わせて考えてしまいます。しかし実際の人間には、何かが高まれば何かが下がるという関係(トレードオフ)があります。
              </p>
              <p>
                当相談所のカウンセリングでは、「Aは良いけれど、その分Bという側面もある」という対比の中で会員様ご自身に考えていただく対話を行っています。単独の理想を追い求めるのではなく、複数の要素のバランスの中で何を優先するのかに気づいていただくことが目的です。婚活パーティーやマッチングアプリのプロフィール検索では条件だけで絞り込みがちですが、対話を通じてこの優先順位を言語化できる点が、カウンセリング型の結婚相談所の強みです。
              </p>
            </div>
          </div>
        </section>

        {/* セクション 2: 「もっと上」を求めるほど選択肢は狭まります */}
        <section className="py-12 bg-white w-full">
          <div className="max-w-5xl mx-auto w-full px-4 md:px-0 space-y-6">
            <div className="text-center px-4 w-full">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 tracking-wider w-full">
                「もっと上」を求めるほど選択肢は狭まります
              </h2>
            </div>

            <div className="bg-gradient-to-r from-sky-50 to-blue-50 border-2 border-sky-200 p-6 md:p-8 rounded-2xl shadow-sm space-y-6">
              <div className="space-y-4 text-[20px] md:text-base leading-relaxed text-slate-700 font-medium">
                <p>
                  婚活で条件を挙げていくと、あらゆる項目で「もっと上」を求めてしまいがちです。複数の良い面を併せ持つ方もいらっしゃるため誰にでも当てはまる法則ではありませんが、一般的な傾向として、何かの要素を強く求めるほど選べる相手の幅は狭くなります。
                </p>

                <ul className="list-disc list-inside space-y-2 bg-white p-4 rounded-xl border border-sky-200">
                  <li>決断力があり引っ張ってくれるタイプを求めるほど、穏やかで合わせてくれるタイプとは両立しにくくなります</li>
                  <li>経済的な安定を最優先にするほど、それ以外の価値観との相性を確認する優先度は下がりやすくなります</li>
                </ul>

                <p>
                  具体的な数字で見ると、次のとおりです。国税庁の民間給与実態統計調査によると、1年間を通じて勤務した男性の給与所得者のうち、年間給与額が1,000万円を超える方は全体の7.1%にとどまります。また、厚生労働省の医師・歯科医師・薬剤師統計によると、2024年末時点の全医師数は34万7,772人であり、日本の総人口(約1億2,400万人)に対する比率はおよそ0.3%にすぎません。<sup>[1][2]</sup>
                </p>

                <p>
                  これらの数字には、すでに結婚している方や、婚活の対象年齢から外れる方(学生や定年後の年齢層など)も含まれています。婚活で実際に出会える独身・同年代の対象者に絞り込めば、比率はさらに小さくなります。
                </p>

                <p className="bg-sky-100/70 p-4 rounded-xl border border-sky-300 font-bold text-sky-950">
                  大阪梅田ドクターズ結婚相談所のカウンセリングでは、この傾向を最初に共有したうえで、「では自分はどちらの側面をより重視するか」を会員様と一緒に考えていきます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* セクション 3: 二択の質問で無意識の優先順位に気づけます */}
        <section className="py-12 bg-sky-50/70 w-full">
          <div className="max-w-5xl mx-auto w-full px-4 md:px-0 space-y-6">
            <div className="text-center px-4 w-full">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 tracking-wider w-full">
                二択の質問で無意識の優先順位に気づけます
              </h2>
            </div>

            <div className="bg-white p-6 md:p-8 border-2 border-sky-200 rounded-2xl shadow-md space-y-6 text-[20px] md:text-base text-slate-700 leading-relaxed font-medium">
              <p>
                有効なのは、抽象的に「どんな人が理想ですか」とお聞きするのではなく、両立が難しい要素を含んだ具体的な二択を提示する方法です。両方の選択肢に良い面と気になる面を同じ分量で添えることで、会員様が「なんとなく良さそう」という一面的な判断ではなく、バランスの中での選択を意識できるように対話を組み立てています。
              </p>

              <p>代表的な対比軸は、下の早見表のとおりです。</p>

              <div className="space-y-3">
                <h3 className="font-bold text-sky-950 text-xl">対比の早見表</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-sky-200 text-left">
                    <thead>
                      <tr className="bg-sky-100 text-sky-950">
                        <th className="border border-sky-200 p-3 font-bold">対比</th>
                        <th className="border border-sky-200 p-3 font-bold">一方の良さ</th>
                        <th className="border border-sky-200 p-3 font-bold">もう一方の良さ</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-sky-100">
                      <tr className="bg-white">
                        <td className="border border-sky-200 p-3 font-semibold">力強さ vs 穏やかさ</td>
                        <td className="border border-sky-200 p-3">頼もしさ</td>
                        <td className="border border-sky-200 p-3">気疲れしない安心感</td>
                      </tr>
                      <tr className="bg-sky-50/50">
                        <td className="border border-sky-200 p-3 font-semibold">キャリア vs 一緒に過ごす時間</td>
                        <td className="border border-sky-200 p-3">実績・社会的安定感</td>
                        <td className="border border-sky-200 p-3">一緒に過ごせる時間</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border border-sky-200 p-3 font-semibold">経済的安定 vs 価値観の広さ</td>
                        <td className="border border-sky-200 p-3">生活の安定</td>
                        <td className="border border-sky-200 p-3">趣味・考え方の共有</td>
                      </tr>
                      <tr className="bg-sky-50/50">
                        <td className="border border-sky-200 p-3 font-semibold">誠実さの基準:行動 vs 言葉</td>
                        <td className="border border-sky-200 p-3">浮気をしない誠実さ</td>
                        <td className="border border-sky-200 p-3">小さな嘘もつかない誠実さ</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border border-sky-200 p-3 font-semibold">連絡頻度 vs 距離感</td>
                        <td className="border border-sky-200 p-3">こまめな連絡による安心感</td>
                        <td className="border border-sky-200 p-3">適度な距離感による自由さ</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p>
                これらの対比はあくまで考えるための切り口であり、両方の良さを併せ持つ相手も当然いらっしゃいます。一つの二択で終わらせず、「では、こちらの条件が加わったらどうか」と少しずつ条件を変えてお聞きすることで、何を優先し何なら手放せるかという構造が見えてきます。
              </p>

              <p>
                女性の場合、好みの対象が「知的な人」「運動ができる人」「面白い人」「外見が整っている人」「体格が良い人」など多岐にわたりやすい傾向があります。だからこそ、一つずつを単独で追い求めるのではなく、バランスの中でどれを優先するかを整理する対話が特に重要になります。
              </p>
            </div>
          </div>
        </section>

        {/* セクション 4: 過去の人間関係は「人として」振り返ります */}
        <section className="py-12 bg-white w-full">
          <div className="max-w-5xl mx-auto w-full px-4 md:px-0 space-y-6">
            <div className="text-center px-4 w-full">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 tracking-wider w-full">
                過去の人間関係は「人として」振り返ります
              </h2>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 md:p-8 rounded-2xl shadow-sm space-y-4 text-[20px] md:text-base leading-relaxed text-slate-700 font-medium">
              <p>
                恋愛経験が少ない会員様にとって、過去の交際関係を直接掘り下げようとしても材料が少なく話が広がりにくいことがあります。そこで有効なのが、対象を恋愛関係に限定せず、「これまで関わってきた人の中で、一緒にいて心地よかった人はどんな人だったか」というように、人として関わってきた相手全般を振り返っていただく視点です。
              </p>
              <p>
                友人、同僚、先輩など、恋愛感情の有無にかかわらず「一緒にいて楽な人」「話していて安心する人」「尊敬できると感じた人」を思い出すことは、初対面の異性を想像するよりも具体的な記憶に基づいて答えやすくなります。この振り返りから見えてくる傾向(会話のテンポ、価値観の近さ、頼れると感じた場面など)は、結婚相手に求める要素の土台になることが多くあります。
              </p>
            </div>
          </div>
        </section>

        {/* セクション 5: 婚活の選択は人生の選択と同じ難しさです */}
        <section className="py-12 bg-sky-100/60 w-full border-y border-sky-200">
          <div className="max-w-5xl mx-auto w-full px-4 md:px-0 space-y-6">
            <div className="text-center px-4 w-full">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-sky-950 tracking-wider w-full">
                婚活の選択は人生の選択と同じ難しさです
              </h2>
            </div>

            <div className="bg-white p-6 md:p-8 border-2 border-sky-200 rounded-2xl shadow-md space-y-4 text-[20px] md:text-base text-slate-700 leading-relaxed font-medium">
              <p>
                これらの対比が難しく感じられるのは、「上か下か」という一直線の物差しで測れないからです。これは進学先や就職先、住む場所を選ぶときと本質的に同じ構造をしています。人生の岐路はたいてい、一つの軸だけで優劣が決まるものではなく、複数の価値観が絡み合った中でどれを優先するかを選ぶものです。
              </p>
              <p>
                これは、人のアイデンティティが一言で言い表せないことと似ています。「仕事熱心な人」「家族を大切にする人」「新しいことに挑戦する人」といった要素は、一人の人間の中に矛盾しながら同居しています。人間の価値観も同様に、単純な一言では表現しきれない複合的なものです。
              </p>
              <p className="bg-sky-50 border-l-4 border-sky-500 p-4 rounded-r-xl text-slate-900 font-semibold">
                だからこそ、大阪梅田ドクターズ結婚相談所のカウンセリングでは、単純化した正解を提示するのではなく、複数の軸の中で会員様ご自身が迷い、考え、選び取っていく過程を大切にしています。
              </p>
            </div>
          </div>
        </section>

        {/* セクション 6: 女医だからこそできる対話設計があります */}
        <section className="py-12 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white w-full shadow-inner">
          <div className="max-w-5xl mx-auto w-full px-4 md:px-0">
            <div className="bg-white/95 backdrop-blur-md text-slate-800 p-6 md:p-10 rounded-2xl shadow-2xl space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-xl md:text-3xl font-serif font-bold text-sky-950 tracking-wider">
                  女医だからこそできる対話設計があります
                </h2>
              </div>

              <div className="space-y-4 text-[20px] md:text-base leading-relaxed text-slate-700 font-medium">
                <p>
                  当相談所の代表カウンセラーは、医療法人役員であり、現役の病院勤務医、認定内科医でもあります。この経歴が、婚活カウンセリングの対話設計に直接活かされています。
                </p>
                <p>
                  医療の現場では、患者様に治療方針を説明し、理解と納得を得たうえで合意形成を行う「インフォームド・コンセント」が求められます。ここで重要になるのは、一方的に説明するのではなく、患者様ご自身が自分の状況を理解し、納得したうえでご自身の意思で選択できるように対話を設計することです。
                </p>
                <p className="bg-sky-50 p-4 rounded-xl border border-sky-200 text-sky-900 font-semibold">
                  この経験は、婚活カウンセリングにも活かされています。カウンセラーが「こうすべき」と結論を押し付けるのではなく、会員様が状況を理解し、ご自身の優先順位に納得して気づいていけるよう対話を組み立てる姿勢は、医療現場での患者対応と共通しています。心理的な状態や言葉にしにくい迷いに配慮しながら対話を進める姿勢も、日々の診療の中で培われてきたものです。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* よくある質問 (FAQ) */}
        <section className="py-12 bg-white w-full">
          <div className="max-w-5xl mx-auto w-full px-4 md:px-0 space-y-8">
            <div className="text-center w-full">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 tracking-wider w-full">
                よくある質問
              </h2>
            </div>

            <div className="space-y-4 text-[20px] md:text-base leading-relaxed font-medium">
              <div className="bg-sky-50 p-6 rounded-2xl border border-sky-200 space-y-2">
                <h3 className="font-bold text-sky-950 text-lg md:text-xl">
                  Q. 大阪梅田ドクターズ結婚相談所のカウンセリングでは具体的に何をするのですか?
                </h3>
                <p className="text-slate-700">
                  A. 一問一答の聞き取りではなく、雑談の中でトレードオフを含む二択の話題を投げかけ、会員様ご自身が自分の優先順位に気づいていく対話を行っています。
                </p>
              </div>

              <div className="bg-sky-50 p-6 rounded-2xl border border-sky-200 space-y-2">
                <h3 className="font-bold text-sky-950 text-lg md:text-xl">
                  Q. 結婚観がまだ言葉にできていなくても相談できますか?
                </h3>
                <p className="text-slate-700">
                  A. 問題ございません。対話の中で「わからない」という反応自体も重要な情報として受け止めており、無理に言語化を求めることはいたしません。
                </p>
              </div>

              <div className="bg-sky-50 p-6 rounded-2xl border border-sky-200 space-y-2">
                <h3 className="font-bold text-sky-950 text-lg md:text-xl">
                  Q. なぜ現役の医師がカウンセラーを務めているのですか?
                </h3>
                <p className="text-slate-700">
                  A. 代表カウンセラーは医療法人役員・病院勤務医・認定内科医であり、インフォームド・コンセントで培った「本人が納得して選択できるよう対話を設計する」姿勢を、当相談所のカウンセリングに活かしています。
                </p>
              </div>

              <div className="bg-sky-50 p-6 rounded-2xl border border-sky-200 space-y-2">
                <h3 className="font-bold text-sky-950 text-lg md:text-xl">
                  Q. 婚活で考える経験は、結婚した後にも意味がありますか?
                </h3>
                <p className="text-slate-700">
                  A. あります。多元的な価値観の中で迷い、考え、自分なりの優先順位を選び取る経験は、結婚後の子育てや、友人・親族との関わり方、仕事や社会とのつながり方にも共通して活きてきます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* まとめ & 関連ページ & 監修・出典 */}
        <section className="py-12 bg-sky-50/70 w-full">
          <div className="max-w-5xl mx-auto w-full px-4 md:px-0 space-y-8">
            {/* まとめ */}
            <div className="bg-white p-6 md:p-10 border-2 border-sky-200 w-full rounded-2xl space-y-4 shadow-md">
              <h2 className="font-bold text-sky-950 text-xl md:text-2xl tracking-wide">
                まとめ:婚活の経験は人生を選ぶ力になります
              </h2>
              <div className="text-[20px] md:text-base text-slate-700 space-y-4 leading-relaxed font-medium">
                <p>
                  理想の相手像は、単独の条件を足し合わせて完成するものでも、一直線の物差しで測れるものでもありません。何かを重視すれば何かを手放すことになる関係の中で、複数の価値観を見比べながら優先順位を選び取っていく――これは進学や就職、住む場所を選ぶことと同じ、人生の選択そのものです。この経験は、結婚後の子育てや友人関係、仕事など、人生のあらゆる場面で活きてきます。
                </p>
                <p>
                  まずは無料相談で、実際の対話をぜひ体験してみてください。
                </p>
              </div>
            </div>

            {/* 関連ページ */}
<div className="bg-white p-6 md:p-8 border border-sky-200 rounded-2xl shadow-sm space-y-4">
  <h3 className="font-bold text-sky-950 text-lg border-b border-sky-100 pb-2">関連ページ</h3>

  <ul className="list-disc list-inside text-sky-600 underline font-medium space-y-2 text-[20px] md:text-base">
    <li><Link href="/contact">無料相談のお申し込み</Link></li>
    <li><Link href="/mens-consultation">男性向け婚活カウンセリングシミュレーション</Link></li>
    <li><Link href="/vibe">32歳会社員女性の婚活カウンセリングシミュレーション</Link></li>
  </ul>
</div>
            {/* 監修・出典 */}
            <div className="bg-white p-6 md:p-8 border border-sky-200 rounded-2xl shadow-sm space-y-6 text-slate-600 text-sm leading-relaxed">
              <div className="space-y-1">
                <p className="font-bold text-slate-900 text-base">監修</p>
                <p>大阪梅田ドクターズ結婚相談所 代表カウンセラー</p>
                <p>医療法人役員/病院勤務医/認定内科医</p>
                <p>IBJ正規加盟店</p>
                <p className="italic text-xs pt-2">
                  *本記事は、大阪梅田ドクターズ結婚相談所で実際に行われているカウンセリング手法を、プライバシー保護のため複数事例を組み合わせて再構成したものです。*
                </p>
              </div>

              <div className="border-t border-sky-100 pt-4 space-y-2">
                <p className="font-bold text-slate-900 text-base">出典</p>
                <p>
                  [1] 国税庁「令和2年分 民間給与実態統計調査」調査結果報告 第16表「給与階級別給与所得者数・構成比」(PDF21〜22ページ、男性の年収1,000万円超の内訳:5.2%+1.1%+0.4%+0.4%=7.1%):
                  <a href="https://www.nta.go.jp/publication/statistics/kokuzeicho/minkan2020/pdf/002.pdf" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline break-all ml-1">
                    https://www.nta.go.jp/publication/statistics/kokuzeicho/minkan2020/pdf/002.pdf
                  </a>
                </p>
                <p>
                  [2] 厚生労働省「令和6年(2024年)医師・歯科医師・薬剤師統計の概況」(PDF):
                  <a href="https://www.mhlw.go.jp/toukei/saikin/hw/ishi/24/dl/R06_1gaikyo.pdf" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline break-all ml-1">
                    https://www.mhlw.go.jp/toukei/saikin/hw/ishi/24/dl/R06_1gaikyo.pdf
                  </a>
                </p>
              </div>
            </div>

            {/* 実装用:構造化データ(JSON-LD) 説明セクション */}

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
              まずは無料相談で、実際の対話をぜひ体験してみてください。
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
    </>
  );
}