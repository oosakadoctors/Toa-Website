import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '大阪梅田ドクターズ結婚相談所 | 現役女医とベテランが支える温かな婚活',
  description: '大阪で圧倒的な成婚率、満足度、お見合い成立率を誇る温かみある結婚相談所。リーズナブルな料金体系で医師監修の専門的なサポートを提供。',
  keywords: ['大阪梅田', '結婚相談所', 'ドクターズ結婚', '婚活', '現役女医', 'リーズナブル'],
};

export default function UmedaMarriagePage() {
  return (
    <main className="mx-auto max-w-[600px] bg-[#f0f7fc] px-4 py-6 text-[18px] leading-[1.8] text-[#2b3a4a] box-border">
      {/* Hero Section */}
      <section className="mb-10 text-center">
        <div className="mb-6 rounded-xl bg-gradient-to-r from-[#0259C2] to-[#0284c7] px-6 py-4 shadow-md text-white">
          <p className="m-0 text-[24px] sm:text-[26px] font-bold tracking-wider drop-shadow-sm">大阪梅田ドクターズ結婚相談所</p>
        </div>
        
        <div className="mb-6 overflow-hidden rounded-lg w-full shadow-md">
          <Image
            src="/osaka-umeda-marriage-agency.jpg"
            alt="大阪梅田ドクターズ結婚相談所 メインビジュアル"
            width={600}
            height={400}
            priority={true}
            className="w-full h-auto block object-cover"
          />
        </div>
        
        <h1 className="mb-4 text-2xl font-bold leading-[1.4] text-[#1a365d]">大手のマニュアルにはない、家族のような温もりがここにあります。</h1>
        
        <p className="mb-4 mt-0 text-[18px]">大手のマニュアルにはない、家族のような温もりがここにあります。ご縁のあった会員様を大切な家族のように送り出す気持ちで支えます。</p>
        
        <p className="mb-4 mt-0 text-[18px]">小さな不安や疑問も、親身にサポートします。</p>
        
        <p className="mb-4 mt-0 text-[18px] font-bold text-center">大阪梅田で、一番アットホームなサポートをお届けします</p>
      </section>

      <hr className="my-10 border-none border-t border-[#bae6fd]" />

      {/* New Section: Low Romance Experience Welcome */}
      <section className="mb-10 text-center">
        <div className="mb-6 overflow-hidden rounded-lg w-full">
          <Image
            src="/low-romance-experience-welcome.jpg"
            alt="恋愛経験が少なくても大丈夫"
            width={600}
            height={400}
            className="w-full h-auto block object-cover"
          />
        </div>
        
        <h2 className="mb-4 text-[21px] font-bold leading-[1.4] text-[#1a365d]">恋愛経験が少なくても大丈夫！</h2>
        
        <p className="mb-4 mt-0 text-[18px] text-left">
          婚活初心者や恋愛経験が少ない方も安心。<br />
          大阪梅田ドクターズ結婚相談所では、<br />
          何からはじめたらいいの？お見合いはどんな感じ？メイクや服装も教えてほしい。どうやったら早く結婚できるの？<br />
          様々な疑問にお答えします。<br />
          なんでも質問してくださいね！
        </p>
      </section>

      <hr className="my-10 border-none border-t border-[#bae6fd]" />

      {/* Section 1 */}
      <section className="mb-10 text-center">
        <div className="mb-6 overflow-hidden rounded-lg w-full">
          <Image
            src="/safe-secure-meeting.jpg"
            alt="身元が保証された確かな安心"
            width={600}
            height={400}
            className="w-full h-auto block object-cover"
          />
        </div>
        
        <h2 className="mb-4 text-[21px] font-bold leading-[1.4] text-[#1a365d]">身元が保証された「確かな安心」<br />｜4つの公的証明書の提出を義務化</h2>
        
        <p className="mb-4 mt-0 text-[18px] text-left">
          大阪梅田ドクターズ結婚相談所では、会員の皆様に心から安心して婚活していただけるよう、入会時に「身分証明」「独身証明」「年収証明」「学歴証明」の各種証明書を100%ご提出いただいております。プロフィールに嘘や偽りのない、結婚に対し真剣なお相手だけが在籍する安全な環境を整えています。
        </p>
      </section>

      <hr className="my-10 border-none border-t border-[#bae6fd]" />

      {/* Section 2 */}
      <section className="mb-10 text-center">
        <div className="mb-6 overflow-hidden rounded-lg w-full">
          <Image
            src="/doctor-counselor-marriage-plan.jpg"
            alt="現役女医×ベテランカウンセラーが伴走"
            width={600}
            height={400}
            className="w-full h-auto block object-cover"
          />
        </div>
        
        <h2 className="mb-4 text-[21px] font-bold leading-[1.4] text-[#1a365d]">現役女医×ベテランカウンセラーが伴走<br />｜月々15,000円（税込）のシンプルな1コースのみ</h2>
        
        <p className="mb-4 mt-0 text-[18px] text-left">
          複雑な料金プランは一切ありません。私たちは、どなたでも負担なく婚活を継続していただけるよう、月会費15,000円（税込）の一つのコースにすべての情熱を注いでいます。最大の強みは、現役女医による親身なアドバイスと、ベテランカウンセラーによる細やかなケアを同時に受けられることです。価格以上の圧倒的な安心感と温もりを、ぜひ実感してください。
        </p>
      </section>

      <hr className="my-10 border-none border-t border-[#bae6fd]" />

      {/* Section 3 */}
<section className="mb-10 text-center">
  <div className="mb-6 overflow-hidden rounded-lg w-full">
    <Image
      src="/osaka-umeda-doctors-kekkon-soudansho-support.jpg"
      alt="高い実績と会員満足度"
      width={600}
      height={400}
      className="w-full h-auto block object-cover"
    />
  </div>

  <h2 className="mb-4 text-[21px] font-bold leading-[1.4] text-[#1a365d]">
    会員満足度・1年以内のご成婚・お見合い成立の「すべてにおいて高い質のサポート」を目指す相談所
  </h2>

  <p className="mb-4 mt-0 text-[18px] text-left">
    一人ひとりの会員様に寄り添い、確かな満足度、1年以内のご成婚、そして一歩目となるお見合い成立のすべてにおいて「高い目標と質の高いサポート」を目指しているのが、私たち「大阪梅田ドクターズ結婚相談所」です。現役女医である代表と、20年寄り添い続けてきたベテランがタッグを組み、お一人おひとりの魅力を最大限に引き出す「手作りの温かい婚活サポート」を徹底いたします。確かなお見合い成立へとつなげるプロの特別推薦に加え、活動開始から「1年以内のご成婚」を本気で目指す体制を整えているからこそ、多くの会員様からお喜びの声をいただいております。
  </p>

  <p className="mb-4 mt-5 text-[18px] font-bold text-center text-[#0284c7]">
    家族のような温もりと安心感のある「大阪梅田ドクターズ結婚相談所」で、あなたにとっての理想の出会いへと一歩を踏み出してみませんか？
  </p>
</section>

      <hr className="my-10 border-none border-t border-[#bae6fd]" />

      {/* Closing Section */}
      <section className="mb-0 text-center">
        <div className="flex flex-col gap-4 mb-5">
          <div className="mb-6 overflow-hidden rounded-lg w-full">
            <Image
              src="/successful-marriage-reports.jpg"
              alt="成婚報告イメージ 1"
              width={600}
              height={400}
              className="w-full h-auto block object-cover"
            />
          </div>
          <div className="mb-6 overflow-hidden rounded-lg w-full">
            <Image
              src="/successful-marriage-reports2.jpg"
              alt="成婚報告イメージ 2"
              width={600}
              height={400}
              className="w-full h-auto block object-cover"
            />
          </div>
        </div>
        
        <p className="mb-4 mt-0 text-[18px]">おかげさまで、今も私たちの元にはたくさんの幸せな成婚報告が届いています。</p>
        
        <p className="mb-0 text-[20px] font-bold  text-center">次はあなたの番かもしれません</p>
     
<Link
  href="/dating-journeys"
  className="mx-auto block w-10/12 max-w-[340px] rounded-xl bg-[#6F292B] px-6 py-4 text-center text-[20px] font-bold text-white shadow-[0_6px_0_#4a1b1d] transition-all hover:translate-y-[2px] hover:shadow-[0_4px_0_#4a1b1d] active:translate-y-[6px] active:shadow-none no-underline"
>
  嬉しい成婚報告を見る →
</Link>
      </section>
    </main>
  );
}