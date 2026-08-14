import { Metadata } from "next";
import femaleAdvisor from "@/public/femaleAdvisor.jpg"; // 画像パスは適宜調整してください
import maleAdvisor from "@/public/maleAdvisor.jpg";     // 画像パスは適宜調整してください
import Image from "next/image";
import { Stethoscope, Compass, BookOpen, Target, HeartHandshake, Smile, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "メインカウンセラー紹介｜大阪梅田ドクターズ結婚相談所",
  description:
    "現役女性医師【加藤】とベテランカウンセラー【石田】のご紹介。医療的・論理的アプローチと20年の成婚実績ノウハウで、あなたの理想の成婚を全力でサポートします。",
  alternates: {
    canonical: "/counselors",
  },
};

export default function CounselorsPage() {
  return (
    <main className="bg-[#faf8f5] min-h-screen text-base leading-relaxed text-gray-800 py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-10">

        {/* ============================================================
            SECTION: 代表挨拶 (Representative Greeting)
            ============================================================ */}
<section className="rounded-2xl bg-white border border-amber-200/80 p-6 sm:p-8 shadow-sm">
  {/* Header */}
  <div className="border-b border-amber-100 pb-4">
    <div className="flex items-center gap-2 text-amber-700 font-bold text-sm tracking-wider">
      <Award className="w-4 h-4 shrink-0" />
      <span>代表挨拶</span>
    </div>
    <h1 
      className="text-xl sm:text-2xl font-black text-gray-900 mt-2 text-balance"
      style={{ wordBreak: 'auto-phrase' }}
    >
      母から受け継いだ「ご縁結び」の心と、20年の実績を未来へ
    </h1>
  </div>

  {/* Greeting Body Text with Floated Owner Image */}
  <div className="mt-6 text-base text-gray-700 leading-relaxed space-y-4">
    <p style={{ wordBreak: 'auto-phrase' }}>
      皆様、はじめまして。「大阪梅田ドクターズ結婚相談所」代表の加藤です。
    </p>

    <p style={{ wordBreak: 'auto-phrase' }}>
      当相談所の原点は、今から約20年前に遡ります。当時、公立小学校の校長を務めていた私の母が、定年退職後に多くの知人から「良い方を紹介してほしい」と頼まれたことがきっかけでした。入会金などは一切いただかず、経営というよりも純粋に「素晴らしいご縁を結びたい」という一心で活動を始めた、いわゆる“お見合いおばちゃん”としてのスタートでした。
    </p>

    <p style={{ wordBreak: 'auto-phrase' }}>
      当時はマッチングアプリなども一般的ではない時代でしたが、人と人を信頼でつなぐその温かいスタイルは多くの方に支持され、私の友人たちも数多く登録しておりました。私も結婚後は母の手伝いを始め、会員様の幸せな門出をサポートしてまいりました。
    </p>

    <p style={{ wordBreak: 'auto-phrase' }}>
      私たちが築き上げてきた「お見合い成立率」や「成婚実績」は、お一人おひとりと誠実に向き合い、地道にご縁を紡いできたノウハウの結晶です。
    </p>

    <p style={{ wordBreak: 'auto-phrase' }}>
      そしてこの度、私がメインカウンセラーとして男性ベテラン仲人とともに「大阪梅田ドクターズ結婚相談所」として新しくリニューアルオープンいたしました。
    </p>

    <p style={{ wordBreak: 'auto-phrase' }}>
      私自身も、医師として、女性として出産や子育てなど多くの人生経験を積み、人の心や人生に寄り添うことの大切さを学んでまいりました。母から受け継いだ「幸せのご縁を結ぶ」という温かい気持ちはそのままに、医師としての視点や信頼性を掛け合わせ、さらに質の高いサポートを提供してまいります。
    </p>

    <p style={{ wordBreak: 'auto-phrase' }}>
      時代が変わっても、生涯を共にするパートナーと出会う喜びは変わりません。培ってきた実績と確かなノウハウで、皆様の新たな一歩を全力で応援いたします。どうぞ安心してお気軽にご相談ください。
    </p>

    <div className="clear-both" />
  </div>

  <Image
    src="/owner.jpg"
    alt="大阪梅田ドクターズ結婚相談所 代表 加藤"
    width={300}
    height={400}
    priority
    className="rounded-2xl shadow-md object-cover w-full h-auto border border-amber-100"
  />

  {/* Signature Block (Signature stacked UNDER the name) */}
  <div className="mt-8 pt-4 flex flex-col items-end justify-end">
    {/* 1. Name First */}
    <div className="text-right">
      <p className="text-xs text-gray-500 font-medium">大阪梅田ドクターズ結婚相談所 代表</p>
      <p className="text-base font-bold text-gray-900 mt-0.5">加藤</p>
    </div>

    {/* 2. Signature Image Below */}
    <div className="relative w-30 sm:w-44 h-16 shrink-0 mt-2">
      <Image
        src="/name1.jpg"
        alt="代表 加藤の直筆サイン"
        fill
        className="object-contain object-right"
        priority
      />
    </div>
  </div>
</section>

<section className="w-full">
  <div className="w-full max-w-4xl mx-auto">
    <div className="relative w-full aspect-[1/1] overflow-hidden rounded-2xl shadow-md">
      <Image
        src="/rosesAndSky.jpg"
        alt="婚活で出会った女性とドライブデートをしながら成婚をめざすイメージ写真"
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

        {/* ============================================================
            SECTION 1: 現役女性医師【加藤】
            ============================================================ */}
        <section className="rounded-2xl bg-white border border-pink-200 p-6 sm:p-8 shadow-sm">

          {/* Section Title */}
          <div className="border-b border-pink-100 pb-4">
            <p className="text-sm font-bold text-pink-600 tracking-wider">
              メインカウンセラーのメッセージ
            </p>
            <h2 
              className="text-xl sm:text-2xl font-black text-gray-900 mt-2 text-balance"
              style={{ wordBreak: 'auto-phrase' }}
            >
              現役女性医師【加藤】
            </h2>
            <p 
              className="text-lg font-bold text-pink-700 mt-2 text-balance"
              style={{ wordBreak: 'auto-phrase' }}
            >
              人生の分岐点で、あなたの心に優しく寄り添う灯火でありたい
            </p>
          </div>

          {/* Letter Content */}
          <div className="mt-6 text-base leading-relaxed text-gray-700 space-y-4">

            {/* Profile Image */}
            <div className="float-left mr-5 mb-3 w-32 sm:w-40 md:w-48">
              <Image
                src={femaleAdvisor}
                alt="現役女性医師 メインカウンセラー加藤"
                className="rounded-2xl shadow-md object-cover w-full h-auto border border-pink-100"
                priority
              />
            </div>

            <p style={{ wordBreak: 'auto-phrase' }}>
              私はこれまで現役の女性医師として、日々多くの患者様と真摯に向き合ってまいりました。医師の仕事は単に病気を治すだけではありません。患者様が抱える不安に耳を傾け、その方の健康、お気持ち、そして人生の価値観に深く寄り添う毎日です。
            </p>

            <p style={{ wordBreak: 'auto-phrase' }}>
              このように「人の心と人生に伴走すること」を大切にしてきた中で、ある時、婚活業界で長年多くの成婚実績を上げてこられた「ベテランカウンセラー」との素晴らしい出会いがありました。
            </p>

            <p 
              className="font-semibold text-gray-900 bg-pink-50/60 p-4 rounded-xl border border-pink-100"
              style={{ wordBreak: 'auto-phrase' }}
            >
              「結婚という人生最大の分岐点で悩む人々を、温かく支えたい」
            </p>

            <p style={{ wordBreak: 'auto-phrase' }}>
              共通の強い想いを持つベテランカウンセラーと話し合う中で、お互いの理念に深く共感し、意気投合いたしました。医師としての私の論理的アプローチ、そして彼が持つ確かな婚活ノウハウと成婚メソッド。この2つの専門性を掛け合わせれば、どこよりも手厚く、確実なサポートができると確信しました。
            </p>

            <p style={{ wordBreak: 'auto-phrase' }}>
              私自身は昔から、ゲームや読書、マンガが大好きで、パソコンや細かな作業が得意な、まさに「ロジカルな理系女子」でした。その後、自身も結婚を経験し、専門職と家庭の両立に奮闘し、出産、子育て、そして親の介護など、人生のあらゆるライフステージを経験してまいりました。
            </p>

            <p style={{ wordBreak: 'auto-phrase' }}>
              人生の後半を迎えた今、様々な経験を重ねてきたからこそ、深く共感し、お伝えできる何かがあると感じています。
            </p>

            <p style={{ wordBreak: 'auto-phrase' }}>
              人生は選択の繰り返しです。<br />
              私たちは、多くの分岐点で、迷いながら、考え、選び、人生を一歩ずつ進めていきます。
            </p>

            <p style={{ wordBreak: 'auto-phrase' }}>
              あなたが、振り返ったときに「あの選択をして本当に良かった」と、心からの笑顔になれるように。私のこれまでの人生経験すべてを、あなたの未来を優しく照らす「道しるべの灯火」として捧げたいと考えています。
            </p>

            <p style={{ wordBreak: 'auto-phrase' }}>
              「ずっと一緒にいたい」と思われるような、あなたらしい魅力の引き出し方を、医師の視点からスマートに、アンド家族のように誠意と愛情を込めてプロデュースいたします。あなたの理想を超えた、心から幸せだと思える最高の結婚へと、一緒に歩んでまいりましょう。
            </p>

            <div className="clear-both" />

          </div>

          {/* Profile Details */}
          <div className="mt-8 pt-6 border-t border-pink-100 space-y-4">
            
            {/* 得意なサポート */}
            <div className="p-4 rounded-xl bg-pink-50/50 border border-pink-100">
              <div className="flex items-center gap-2 text-pink-800 font-bold mb-1">
                <Compass className="w-4 h-4 shrink-0 text-pink-600" />
                <span className="text-base">得意なサポート</span>
              </div>
              <p className="text-base text-gray-700 leading-relaxed pl-6" style={{ wordBreak: 'auto-phrase' }}>
                論理性、客観性の高いスマートな判断。さまざまな価値観に寄り添うアドバイス。
              </p>
            </div>

            {/* 経歴 */}
            <div className="p-4 rounded-xl bg-pink-50/50 border border-pink-100">
              <div className="flex items-center gap-2 text-pink-800 font-bold mb-1">
                <Stethoscope className="w-4 h-4 shrink-0 text-pink-600" />
                <span className="text-base">経歴</span>
              </div>
              <div className="text-base text-gray-700 leading-relaxed pl-6 space-y-1" style={{ wordBreak: 'auto-phrase' }}>
                <p>医師【開業医、勤務医】、経営者、公務員といった親族。</p>
                <p>職場の医師と結婚後、出産と子育てを経て、現在は医療法人の役員を務めながら、現役の医師として病院に勤務。さまざまな業界の第一線で働く多くの知人あり。</p>
              </div>
            </div>

            {/* 趣味 */}
            <div className="p-4 rounded-xl bg-pink-50/50 border border-pink-100">
              <div className="flex items-center gap-2 text-pink-800 font-bold mb-1">
                <BookOpen className="w-4 h-4 shrink-0 text-pink-600" />
                <span className="text-base">趣味</span>
              </div>
              <p className="text-base text-gray-700 leading-relaxed pl-6" style={{ wordBreak: 'auto-phrase' }}>
                漫画、アニメ、映画。料理。散歩。
              </p>
            </div>

          </div>

        </section>

        {/* ============================================================
            SECTION 2: ベテランカウンセラー【石田】
            ============================================================ */}
        <section className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">

          {/* Section Title */}
          <div className="border-b border-slate-100 pb-4">
            <p className="text-sm font-bold text-sky-700 tracking-wider">
              メインカウンセラーのメッセージ
            </p>
            <h2 
              className="text-xl sm:text-2xl font-black text-slate-900 mt-2 text-balance"
              style={{ wordBreak: 'auto-phrase' }}
            >
              ベテランカウンセラー【石田】
            </h2>
          </div>

          {/* Letter Content */}
          <div className="mt-6 text-base leading-relaxed text-slate-700 space-y-4">

            {/* Profile Image */}
            <div className="float-left mr-5 mb-3 w-32 sm:w-40 md:w-48">
              <Image
                src={maleAdvisor}
                alt="メインカウンセラー 石田"
                className="rounded-2xl shadow-md object-cover w-full h-auto border border-slate-200"
              />
            </div>

            <p style={{ wordBreak: 'auto-phrase' }}>
              婚活カウンセラーとして約20年、これまで数百組以上の「成婚の瞬間」に立ち会ってまいりました。
            </p>

            <p style={{ wordBreak: 'auto-phrase' }}>
              婚活はただ単に出会いを求めれば良いというものではありません。<br />
              男性の心理はもちろん、これまで多くの女性会員様を成婚へ導いてきた経験から「選ばれる男性の共通点」「女性の本音」をロジカルにお伝えできるのが私の強みです。
            </p>

            <p style={{ wordBreak: 'auto-phrase' }}>
              私のカウンセリングは、お仕事の邪魔をしない「穏やかで無駄のない時間」を大切にしています。<br />
              男同士だからこそ話せる本音、譲れない条件を、まずは私にぶつけてください。
            </p>

            <p style={{ wordBreak: 'auto-phrase' }}>
              長年の経験から、あなたにとっての『最適な一手』を論理的にアドバイスいたします。<br />
              プレッシャーの多い日常を離れ、どうぞ肩の力を抜いて何でもご相談ください。あなたの理想の未来を、最も信頼できる「戦略参謀」として全力でサポートいたします。
            </p>

            <p style={{ wordBreak: 'auto-phrase' }}>
              「いつまでに、どんな相手と、どう生きたいか」を一緒に考え、迷ったときにはいつでも客観的かつ温かいアドバイスで背中を押します。確実で迷いのない婚活を、私と一緒に始めましょう。
            </p>

            <div className="clear-both" />

          </div>

          {/* Profile Details */}
          <div className="mt-8 pt-6 border-t border-slate-100 space-y-4">
            
            {/* 得意なサポート */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-2 text-sky-800 font-bold mb-2">
                <Target className="w-4 h-4 shrink-0 text-sky-600" />
                <span className="text-base">得意なサポート</span>
              </div>
              <ul className="list-disc list-inside text-base text-slate-700 leading-relaxed pl-2 space-y-1">
                <li style={{ wordBreak: 'auto-phrase' }}>20年の成婚データに基づく具体的な活動プランニング</li>
                <li style={{ wordBreak: 'auto-phrase' }}>女性心理を踏まえた、お見合い・デートの徹底アドバイス</li>
                <li style={{ wordBreak: 'auto-phrase' }}>男性の魅力を最大限に引き出すプロフィール作成・アドバイス</li>
              </ul>
            </div>

            {/* 性格 */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-2 text-sky-800 font-bold mb-1">
                <Smile className="w-4 h-4 shrink-0 text-sky-600" />
                <span className="text-base">性格</span>
              </div>
              <p className="text-base text-slate-700 leading-relaxed pl-6" style={{ wordBreak: 'auto-phrase' }}>
                穏やか・我慢強い・好奇心旺盛・ポジティブ・共感力が高い
              </p>
            </div>

            {/* 趣味 */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-2 text-sky-800 font-bold mb-1">
                <HeartHandshake className="w-4 h-4 shrink-0 text-sky-600" />
                <span className="text-base">趣味</span>
              </div>
              <p className="text-base text-slate-700 leading-relaxed pl-6" style={{ wordBreak: 'auto-phrase' }}>
                野球、サッカー、テニス、食べ歩き、旅行
              </p>
            </div>

          </div>

        </section>

      </div>
    </main>
  );
}