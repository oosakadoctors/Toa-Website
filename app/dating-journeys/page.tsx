import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'リアルな婚活の記録と成婚報告 | 大阪梅田ドクターズ結婚相談所',
  description: '結婚相談所の婚活で「上手くいかない」と悩むあなたへ。色々な困難を乗り越え、最高の出会いを掴んだ先輩たちのリアルな婚活の記録。',
  keywords: ['婚活記録', '成婚報告', '体験談', '結婚相談所', '大阪梅田', '女医婚活'],
};

export default function SuccessStoriesPage() {
  return (
    <main className="mx-auto max-w-[500px] bg-[#f0f7fc] px-4 py-1 text-[18px] leading-[1.8] text-[#2b3a4a] box-border">
      {/* Introduction Section */}
      <section className="mb-2 text-center">
<div className="mb-10 px-2 sm:px-6 py-1 text-slate-900 text-center w-full">
  <div className="flex flex-col items-center gap-4 w-full">
    <span className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-800 text-xs sm:text-sm font-bold tracking-widest px-4 py-1.5 rounded-full border border-sky-200 shadow-2xs">
      ✨ リアルな成婚ストーリー
    </span>
    
    <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white py-6 px-4 sm:px-8 rounded-2xl shadow-md w-full">
      <h1 className="text-[28px] sm:text-[38px] lg:text-[44px] font-bold tracking-wide leading-tight m-0 text-white font-serif w-full drop-shadow-sm">
        結婚相談所の婚活で<br className="sm:hidden" />
        「上手くいかない」と悩むあなたへ。
      </h1>
    </div>

    <div className="w-20 h-1 bg-sky-500 rounded-full my-1" />

    <p className="text-slate-600 text-base sm:text-lg leading-relaxed tracking-wider m-0 font-sans w-full">
      色々な困難を乗り越え、最高の出会いを掴んだ先輩たちのリアルな婚活の記録
    </p>
  </div>
</div>
        

        <div className="mb-6 overflow-hidden rounded-lg w-full shadow-md">
          <Image
            src="/member-success-stories.jpg"
            alt="リアルな婚活の記録と成婚報告"
            width={600}
            height={400}
            priority={true}
            sizes="(max-width: 768px) 100vw, 600px" // 👈 Add this line
            className="w-full h-auto block object-cover"
          />
        </div>
   
        
        <p className="mb-4 mt-0 text-[18px] text-left">
          「結婚相談所に入会すれば、トントン拍子に成婚できる」と思っていませんか？
        </p>
        <p className="mb-4 mt-0 text-[18px] text-left">
          実は、幸せに成婚退会していった先輩たちも、全員が一度は「婚活が上手くいかない」と悩み、壁にぶつかっていました。時には「もう退会してやめようか」と話されたこともあります。
        </p>
        <p className="mb-4 mt-0 text-[18px] text-left">
          それでも彼らが理想のパートナーを掴み取れたのは、アドバイスを素直に実践し、デートの進め方や自分の行動を少しずつ変えてみたからです。
        </p>
        <p className="mb-0 text-[18px] text-left">
          本ページでは、当結婚相談所の会員様たちが実際に経験した「リアルな試行錯誤と、婚活の停滞期を脱出した具体的な解決策」をお届けします。今まさに「どう動けばいいかわからない」と苦戦しているあなたへ。この記録が、理想の未来へ踏み出す優しいきっかけになりますように。
        </p>
      </section>

      <hr className="my-10 border-none border-t border-[#bae6fd]" />

      {/* Success Story Section */}
      <section className="mb-10 text-center">
        <div className="mb-1 overflow-hidden rounded-lg w-full shadow-md">
          <Image
            src="/happy-married-couple.png"
            alt="成婚報告イメージ"
            width={600}
            height={400}
            className="w-full h-auto block object-cover"
          />
          
        </div>
                <p className="text-xs text-slate-500 mb-2">
                ※画像はイメージです
              </p>
        
        <h2 className="mb-6 text-[24px] font-bold  text-[#db2777] ">成婚報告</h2>
        
        <div className="mb-6 rounded-xl bg-white p-5 text-left shadow-sm border border-[#bae6fd]">
          <p className="font-bold text-[#db2777] mb-2">【年齢・職業・活動期間】</p>
          <ul className="list-disc list-inside space-y-1 text-[16px] m-0">
            <li>女性会員Y様・29歳・医師</li>
            <li>お相手男性E様：36歳・医師</li>
            <li>活動期間：6か月</li>
          </ul>
        </div>

        <div className="text-left space-y-4">
          <p className="font-bold  text-[#db2777]  text-[20px] mb-2">【成婚報告メッセージ】</p>
          
          <p className="m-0 text-[18px]">
            学会や論文を書いたりして忙しくしていましたが、周りの同僚たちが結婚していく姿を見て、少し焦りを感じて入会しました。
          </p>
          
          <p className="m-0 text-[18px]">
            職場の同僚はみんな医師との同職婚ばかりだったし、私も自分と同レベルの人がいいかなとは思ってました。
          </p>

          {/* Collapsible content for the long text after the second picture */}
          <details className="group rounded-xl bg-white p-4 shadow-sm border border-[#bae6fd] cursor-pointer">
            <summary className="font-bold text-[#db2777] list-none flex justify-between items-center select-none text-[18px]">
              <span>続きの体験談を読む（タップして展開）</span>
              <span className="transition-transform duration-300 group-open:rotate-180 text-[14px]">▼</span>
            </summary>
            
            <div className="mt-4 space-y-4 pt-2 border-t border-[#f0f7fc] text-[18px]">
              <p className="m-0">
                カウンセラーIさんからは「男性医師は人気なので、歳の差がある男性医師との可能性も考えてみた方がいい。また男性医師で共働き女医さんを希望している人もいるので、ターゲットを絞りましょう」といわれました。
              </p>
              
              <p className="m-0">
                同世代の方を希望していましたが同時28歳前後の男性医師の登録は少なく同じ歳くらいだとなかなかお見合いが組めなかったです。
              </p>
              
              <p className="m-0">
                カウンセラーIさんから勧められた他府県の男性医師ともお見合いし、可能性のある男性からのお申し込みは断らず、複数人との同時仮交際デートも頑張りました。
              </p>
              
              <p className="m-0">
                職業を絞ってしまうと申し込みしたい人が少なくなり、経営者や企業の方ともお会いしましたが、「女医さんすごいね」と褒めてもらうのが、逆に違和感を感じたりもしました。
              </p>
              
              <p className="m-0">
                また仮交際中、他府県の男性に会いに行く際に交通費をいつもこちらが負担していた時が多くて「割り勘して欲しいな。女医だからいいだろうと思われてるかな？」と疑問を感じたりもしました。お相手の親との同居やお相手のクリニックの近くに新居の地域が決められている場合もあり、就職試験を受けさせられているような気持ちになり、精神的に落ち込んでいました。
              </p>
              
              <p className="m-0">
                カウンセラーIさんが、「努力家だと思いますよ。みんななかなかそんなにがんばれないし。素晴らしい」と褒めてくれました。
              </p>
              
              <p className="m-0">
                そして「可能性を広げるために自分からもっと積極的に医師に申し込みましょう」と言っておすすめの男性をピックアップしてくれました。
              </p>
              
              <p className="m-0">
                そのアドバイス通り、諦めずに頑張って出会ったのが、他府県の35歳の医師である彼です。
              </p>
              
              <p className="m-0">
                彼は、勤務医で逆に私の家の近くで働いてもいいと言ってくれました。専門科は違いましたが、仕事話がスムーズで説明しなくても伝わるのはほっとしたのを覚えています。
              </p>
              
              <p className="m-0">
                遠距離のデートでもこちらの負担を常に気遣ってくれ、「協力してこれからの二人の生活」を一緒に作ろうと言ってくれました。仮交際になってから真剣交際まではすぐになりました。
              </p>
              
              <p className="m-0">
                あの就職試験のような苦しい時期を乗り越え、わたしの婚活を支えてくれたIさんには感謝しかありません。ありがとうございました。
              </p>
            </div>
          </details>

          <div className="mt-6 p-4 rounded-xl bg-[#fdf2f8] border-l-4 border-[#db2777]">
            <p className="font-bold text-[#831843] mb-2">婚活を頑張る皆さんへ</p>
            <p className="m-0 text-[16px] text-[#831843]">
              医療従事者は同業種の結婚が多いと思います。職業を希望条件にいれるのは良し悪しがあると思うので、色々出会ってみてから考えてもいいのかなと思います。<br />
              それと、自分は、オンラインお見合いより遠くても会った方が良かったです。<br />
              頑張ってください！
            </p>
          </div>

          <p className="text-[14px] text-gray-500 text-center mt-4">
            ※掲載にあたりご本人の許可を得ており、個人情報保護厳守しています。
          </p>
        </div>
      </section>

      <section className="mb-10 text-center">
  <div className="mb-2 overflow-hidden rounded-lg w-full shadow-md">
    <Image
      src="/office-worker-couple.png"
      alt="成婚報告イメージ"
      width={600}
      height={400}
      className="w-full h-auto block object-cover"
    />
  </div>
     <p className="text-xs text-slate-500 mb-2">
                ※画像はイメージです
              </p>
  
  <h2 className="mb-6 text-[24px] font-bold text-[#db2777]">成婚報告</h2>
  
  <div className="mb-6 rounded-xl bg-white p-5 text-left shadow-sm border border-[#bae6fd]">
    <p className="font-bold text-[#db2777] mb-2">【年齢・職業・活動期間】</p>
    <ul className="list-disc list-inside space-y-1 text-[16px] m-0">
      <li>女性会員Ｔ様・40歳・会社員</li>
      <li>お相手男性M様：49歳・会社員</li>
      <li>活動期間：15か月</li>
    </ul>
  </div>

  <div className="text-left space-y-4">
    <p className="font-bold text-[#db2777] text-[20px] mb-2">【成婚報告メッセージ】</p>
    
    <p className="m-0 text-[18px]">
      会社の担当異動をきっかけに、将来への不安からファイナンシャルプランナーの資格勉強を始めました。「仕事をやめたい、自分の将来を預けられる高収入の男性と結婚したい」と思ったのが入会のきっかけです。過去に医師との交際経験もあり、それなりにモテてきた自負もありました。
    </p>
    
    <p className="m-0 text-[18px]">
      39歳でスタートし、途中で40歳になった時、目に見えて申し込みが激減。「40歳の壁」をリアルに実感しました。子供がいない再婚男性まで視野を広げたのに、自分の理想より少し下の条件の方を、カウンセラーのＩさんから「この人なら好条件ですよ」と言われた時は、言葉にできないモヤモヤでいっぱいになりました。「この年齢まで待ったんだから、あきらめたくないから入会したのに！」と、心が折れそうでした。
    </p>

    <details className="group rounded-xl bg-white p-4 shadow-sm border border-[#bae6fd] cursor-pointer">
      <summary className="font-bold text-[#db2777] list-none flex justify-between items-center select-none text-[18px]">
        <span>続きの体験談を読む（タップして展開）</span>
        <span className="transition-transform duration-300 group-open:rotate-180 text-[14px]">▼</span>
      </summary>
      
      <div className="mt-4 space-y-4 pt-2 border-t border-[#f0f7fc] text-[18px]">
        <p className="m-0">
          勉強の忙しさもあり、一度は少し休会しました。その後も検索画面を見るのにも飽きてしまい、もう相談所をやめようかなと思っていた時のことです。
        </p>
        
        <p className="m-0">
          カウンセラーのＩさんが、「男性のご両親から依頼されていて、ご結婚相手を探している人がいる」と、彼を紹介してくれました。彼は結婚相談所システムに登録していなかったため、釣書（つりしょ）などを別で用意しなければならず手間はかかりましたが、「これが最後のチャンスかも」と会ってみることにしました。
        </p>
        
        <p className="m-0">
          お会いした彼は、口数が少なく、とてもおだやかに話をする人でした。彼はそんなことはないといいますが、私の記憶では、最初の頃は私しか喋っていなかったように思います。
        </p>
        
        <p className="m-0">
          これまで高収入の男性とたくさん会ってきましたが、どこか品定めされているようで疲れることばかりでした。でも彼は、私の少し我が儘なところも、すべてを包み込むように優しくしてくれたんです。「条件にこだわっていたけれど、私のすべてを受け入れてくれるのは、世界中でこの人しかいないかもしれない」と自然と思えました。
        </p>
        
        <p className="m-0">
          綺麗事ばかりの婚活ではありませんでした。Ｉさんの言葉にモヤモヤしたことも、年齢の壁にガッカリしたこともすべて事実です。でも、諦めずに私のことを理解し、最後にご縁を繋いでくれたＩさんには、本当に感謝しています。頑張って本当に良かったです。
        </p>
      </div>
    </details>

    <div className="mt-6 p-4 rounded-xl bg-[#fdf2f8] border-l-4 border-[#db2777]">
      <p className="font-bold text-[#831843] mb-2">婚活を頑張る皆さんへ</p>
      <p className="m-0 text-[16px] text-[#831843]">
        30代後半の人へ。<br />
        会社でも婚活でも年齢が見られてしまうので、急いだほうがいいのかなと思いました。今思えば、カウンセラーさんが言ってたみたいに最初の頃にお見合いした人が条件はいいということは、やっぱりあるので、スタートダッシュ頑張ってくださいっ。
      </p>
    </div>

    <p className="text-[14px] text-gray-500 text-center mt-4">
      ※掲載にあたりご本人の許可を得ており、個人情報保護厳守しています。
    </p>
  </div>
</section>

<section className="mb-10 text-center">
  <div className="mb-1 overflow-hidden rounded-lg w-full shadow-md">
    <Image
      src="/just-married-couple.jpg"
      alt="成婚報告イメージ"
      width={600}
      height={400}
      className="w-full h-auto block object-cover"
    />
  </div>
     <p className="text-xs text-slate-500 mb-2">
                ※画像はイメージです
      </p>
  
  <h2 className="mb-6 text-[24px] font-bold text-[#db2777]">成婚報告</h2>
  
  <div className="mb-6 rounded-xl bg-white p-5 text-left shadow-sm border border-[#bae6fd]">
    <p className="font-bold text-[#db2777] mb-2">【年齢・職業・活動期間】</p>
    <ul className="list-disc list-inside space-y-1 text-[16px] m-0">
      <li>女性会員N様・34歳・学校教員</li>
      <li>お相手男性K様：37歳・地方公務員</li>
      <li>活動期間：約8ヶ月</li>
    </ul>
  </div>

  <div className="text-left space-y-4">
    <p className="font-bold text-[#db2777] text-[20px] mb-2">【成婚報告メッセージ】</p>
    
    <p className="m-0 text-[18px]">
      私は公立の学校教員をしており他府県へ移住はできない仕事です。「同世代・年収600万・身長168cm以上」という希望でスタートしました。
    </p>
    
    <p className="m-0 text-[18px]">
      活動中、他府県の男性からお申し込みをいただいたのですが、他府県の男性は結婚後は私の引越しを希望している方が多かったので、その人達はお断りするしかありませんでした。「地域が合わないだけで断るなんてもったいない……」と、思いましたが、どうしたらいいかわかりませんでした。
    </p>

    <details className="group rounded-xl bg-white p-4 shadow-sm border border-[#bae6fd] cursor-pointer">
      <summary className="font-bold text-[#db2777] list-none flex justify-between items-center select-none text-[18px]">
        <span>続きの体験談を読む（タップして展開）</span>
        <span className="transition-transform duration-300 group-open:rotate-180 text-[14px]">▼</span>
      </summary>
      
      <div className="mt-4 space-y-4 pt-2 border-t border-[#f0f7fc] text-[18px]">
        <p className="m-0">
          私を気に入ってくれる人の中から選びたいなと申し込みはあまりしていなかったのですが、カウンセラーのＩさんから「自分の希望があるなら、女性でも待っているだけじゃダメです。自分から積極的に申し込んでいかないと出会えません！」と強く背中を押されました。耳が痛かったですが、その言葉で目が覚め、同じ府内の男性に絞って自分からたくさん申し込みを開始しました。
        </p>
        
        <p className="m-0">
          成婚したお相手さんは最初に考えていた条件がすべて合致していたわけではありません。Ｉさんのアドバイス通り、「まず申し込み、そして会ってみよう」と自分から動いたのがきっかけでした。
        </p>
        
        <p className="m-0">
          実際にお会いしてみると、居心地が良く、私の「教員の仕事を続けたい、遠方への引越しは無理」という事情を、最初から当たり前のように理解してくれました。お互い平日は忙しいですが、週末にカフェで少しお茶をするだけでも心が休まる存在です。プロポーズしていただいたときは嬉しさで涙がでました。
        </p>
        
        <p className="m-0">
          あとから考えると、仮交際は合計三人で、どの方も自分から申し込みした男性でした。
        </p>
        
        <p className="m-0">
          カウンセラーIさんに言われた「自分から動く」ということを守って活動したから早めに成婚できたのだと思います。Ｉさんは優しくてとてもいいカウンセラーさんだと思います。お世話になり本当にありがとうございました。
        </p>
      </div>
    </details>

    <div className="mt-6 p-4 rounded-xl bg-[#fdf2f8] border-l-4 border-[#db2777]">
      <p className="font-bold text-[#831843] mb-2">婚活を頑張る皆さんへ</p>
      <p className="m-0 text-[16px] text-[#831843]">
        私のように居住地に制限がある人がいると思うのですが、結婚して仕事やめるのはもったいないです。今のお仕事を理解してくれる人が絶対にいるので、みんなも頑張ってください。
      </p>
    </div>

    <p className="text-[14px] text-gray-500 text-center mt-4">
      ※掲載にあたりご本人の許可を得ており、個人情報保護厳守しています。
    </p>
  </div>
</section>

<section className="mb-10 text-center">
  <div className="mb-1 overflow-hidden rounded-lg w-full shadow-md">
    <Image
      src="/smiling-young-couple.png"
      alt="成婚報告イメージ"
      width={600}
      height={400}
      className="w-full h-auto block object-cover"
    />
  </div>
     <p className="text-xs text-slate-500 mb-2">
                ※画像はイメージです
    </p>
  
  <h2 className="mb-6 text-[24px] font-bold text-[#0284c7]">成婚報告</h2>
  
  <div className="mb-6 rounded-xl bg-white p-5 text-left shadow-sm border border-[#bae6fd]">
    <p className="font-bold text-[#0284c7] mb-2">【年齢・職業・活動期間】</p>
    <ul className="list-disc list-inside space-y-1 text-[16px] m-0">
      <li>男性会員N様・33歳・建築系会社勤務（有名国立大学卒）</li>
      <li>お相手女性Ｙ様：31歳・会社員</li>
      <li>活動期間：約9ヶ月</li>
    </ul>
  </div>

  <div className="text-left space-y-4">
    <p className="font-bold text-[#0284c7] text-[20px] mb-2">【婚活体験記】</p>
    
    <p className="m-0 text-[18px]">
      大学を卒業後、建築系の会社で仕事に邁進していましたが、職場での出会いがなく33歳になりました。そんな時、親の知人であったカウンセラーのＩさんをご紹介いただき、結婚相談所に入会しました。
    </p>
    
    <p className="m-0 text-[18px]">
      入会直後は想像以上にたくさんの申し込みをいただき驚きましたが、正直どの女性とお会いすべきか分かりませんでした。そのため、最初は自分と同じように仕事を頑張っている高学歴の女性を中心に、写真を見てお見合いを選んでいたように思います。自分からはお断りをしないと決めていたこともあり、すぐに数人の方と仮交際へと進みました。
    </p>

    <details className="group rounded-xl bg-white p-4 shadow-sm border border-[#bae6fd] cursor-pointer">
      <summary className="font-bold text-[#0284c7] list-none flex justify-between items-center select-none text-[18px]">
        <span>続きの体験談を読む（タップして展開）</span>
        <span className="transition-transform duration-300 group-open:rotate-180 text-[14px]">▼</span>
      </summary>
      
      <div className="mt-4 space-y-4 pt-2 border-t border-[#f0f7fc] text-[18px]">
        <p className="m-0">
          しかし、ここから少し上手くいかない時期がはじまりました。Ｉさんとの面談で「どんな女性が好みか」と聞かれても、当時の私は「優しい人」としか答えられませんでした。そんな私にＩさんは、「結婚は生活を共にするもの。対等に生活できる女性を選ぶか、あるいは自分が少し重荷を背負う覚悟で女性を選ぶか、それだけでも真剣に考えるべき」と、現実的なアドバイスをくれました。
        </p>
        
        <p className="m-0">
          実際に高学歴の女性とお見合いした際に少しこだわりが高い印象を受けたこともあり、その後は学歴や収入だけでなく、家庭的かどうかや趣味があいそうかなどもしっかりプロフィール文を読み込んで自分から申し込みをするように方針を変えました。
        </p>
        
        <p className="m-0">
          ただ、自分から申し込んだ人とはなかなかお見合いが組めず落ち込むこともありました。その際もＩさんから「お見合いの成立率は一般的にそれほど高くないものだから、毎回30人以上は申し込むように」と言われ、アドバイス通りに必死に申し込みを続けました。
        </p>
        
        <p className="m-0">
          また、仮交際に入ってもなぜか途中で終了になってしまい、理由が分からず相談したこともあります。Ｉさんからは「ただ食事をして楽しむだけの『遠足のようなデート』や『恋愛ごっこ』をしていては成婚には至らない。デートは結婚への前段階、短期決戦だと思わなければダメ」と厳しく注意されました。また髪型についても、スキンフェードの短髪にしていたので「若々しくていいが、もう少し上品さを」をとアドバイスいただきました。
        </p>

        <p className="m-0">
          これらの言葉で意識が変わり、お見合いやデートへの臨み方を変えていく中で出会ったのが、私立女子大を卒業した今のパートナーでした。彼女の可愛い笑顔に、私は一目惚れでした。
        </p>

        <p className="m-0">
          明るくておしゃれな彼女とは話がとても楽しく、すぐに仮交際へ。Ｉさんの強い勧めもあり、4回目のデートで真剣交際を申し込みました。しかし、彼女からは「もう少し今のままでお互いを知りたい」とお断りされてしまい、仮交際のまま継続することになりました。
        </p>

        <p className="m-0">
          ここで諦めず、Ｉさんの教え通り、デート中は「遠足」にせず、できるだけ結婚を意識した前向きな発言や具体的な将来の話を心がけました。その努力が実を結び、その後、彼女の相談所側から真剣交際の逆依頼をいただくことができました。
        </p>

        <p className="m-0">
          プロポーズを経て無事に成婚退会となった今、振り返ると、Ｉさんの厳しいけれど的確なアドバイスと、毎回の申し込みを続けたこと、そしてデートの意識を変えたこと、そのすべてが今のご縁に繋がっています。不器用な私を成婚に導いてくださったＩさんには、感謝の気持ちでいっぱいです。ありがとうございました。
        </p>
      </div>
    </details>

    <div className="mt-6 p-4 rounded-xl bg-[#f0f9ff] border-l-4 border-[#0284c7]">
      <p className="font-bold text-[#0369a1] mb-2">婚活を頑張る皆さんへ</p>
      <p className="m-0 text-[16px] text-[#0369a1]">
        彼女が欲しいなという気持ちだけでなく、結婚生活へのビジョンをしっかり考えた方が早く結婚にいたると思いました。カウンセラーさんにどんどん質問してわからない所を教えてもらって進んだ方が近道だと思いました。
      </p>
    </div>

    <p className="text-[14px] text-gray-500 text-center mt-4">
      ※掲載にあたりご本人の許可を得ており、個人情報保護厳守しています。
    </p>
  </div>
</section>
<div className="mb-10 overflow-hidden rounded-2xl bg-white shadow-md border border-[#fbcfe8]">
  <div className="overflow-hidden w-full">
    <Image
      src="/wedding-dress-and-ring.jpg"
      alt="ウェディングドレスと指輪のイメージ"
      width={600}
      height={400}
      className="w-full h-auto block object-cover transition-transform duration-500 hover:scale-105"
    />
  </div>
  <div className="p-4 text-center bg-[#fff1f2]">
    <p className="text-[15px] font-bold text-[#db2777] tracking-wider m-0">
      〜 憧れのウェディングドレスと輝く指輪 〜
    </p>
  </div>
</div>


{/* Story 1 */}
<section className="mb-10 text-center">
  <div className="mb-6 overflow-hidden rounded-lg w-full shadow-md">
    <Image
      src="/story1.jpg"
      alt="32歳女性 医師 × 39歳男性 医師"
      width={600}
      height={400}
      className="w-full h-auto block object-cover"
    />
  </div>
  
  <h2 className="mb-6 text-[24px] font-bold text-[#db2777]">32歳女性 医師 × 39歳男性 医師</h2>
  
  <div className="mb-6 rounded-xl bg-white p-5 text-left shadow-sm border border-[#bae6fd]">
    <ul className="space-y-2 text-[16px] m-0 list-none">
      <li className="flex items-center gap-2"><span className="text-xl">❤️</span><span>32歳女性 医師</span></li>
      <li className="flex items-center gap-2"><span className="text-xl">🩵</span><span>お相手：39歳男性 医師</span></li>
    </ul>
  </div>

  <div className="text-left space-y-4">
    <div className="rounded-xl bg-[#fff1f2] p-4 shadow-sm border border-[#fbcfe8]">
      <p className="font-bold text-[#db2777] mb-2">【お悩み】</p>
      <p className="m-0 text-[18px]">
        病院勤務が忙しく婚活の時間がない。医師と結婚したいけど職場は既婚者ばかり。
      </p>
    </div>

    <div className="rounded-xl bg-white p-4 shadow-sm border border-[#bae6fd]">
      <p className="font-bold text-[#db2777] mb-2">【サポート】</p>
      <p className="m-0 text-[18px]">
        男性医師の中から共働き希望、尊敬できる女性を希望している男性を中心にご紹介
      </p>
    </div>

    <div className="mt-6 p-4 rounded-xl bg-[#fdf2f8] border-l-4 border-[#db2777]">
      <p className="font-bold text-[#831843] mb-2">【結果】</p>
      <p className="m-0 text-[16px] text-[#831843]">
        活動開始から6ヶ月。女性医師の仕事に深い理解を持つ、誠実なハイステータス医師と成婚退会されました。
      </p>
    </div>
  </div>
</section>

{/* Story 2 */}
<section className="mb-10 text-center">
  <div className="mb-6 overflow-hidden rounded-lg w-full shadow-md">
    <Image
      src="/story2.jpg"
      alt="38歳男性 会社経営者 × 27歳女性"
      width={600}
      height={400}
      className="w-full h-auto block object-cover"
    />
  </div>
  
  <h2 className="mb-6 text-[24px] font-bold text-[#0284c7]">38歳男性 会社経営者 × 27歳女性</h2>
  
  <div className="mb-6 rounded-xl bg-white p-5 text-left shadow-sm border border-[#bae6fd]">
    <ul className="space-y-2 text-[16px] m-0 list-none">
      <li className="flex items-center gap-2"><span className="text-xl">🩵</span><span>38歳男性 会社経営者</span></li>
      <li className="flex items-center gap-2"><span className="text-xl">❤️</span><span>お相手：27歳女性 家事手伝い</span></li>
    </ul>
  </div>

  <div className="text-left space-y-4">
    <div className="rounded-xl bg-[#f0f9ff] p-4 shadow-sm border border-[#bae6fd]">
      <p className="font-bold text-[#0284c7] mb-2">【お悩み】</p>
      <p className="m-0 text-[18px]">
        会社経営者。他社婚活で成果が出ず、自分は結婚できないのではと諦めかけていた。
      </p>
    </div>

    <div className="rounded-xl bg-white p-4 shadow-sm border border-[#bae6fd]">
      <p className="font-bold text-[#0284c7] mb-2">【サポート】</p>
      <p className="m-0 text-[18px]">
        高収入男性なのに成婚にいたらなかった原因を優しく分析。価値観の偏りを認識していただき、女性を包み込むエスコート力をアドバイス
      </p>
    </div>

    <div className="mt-6 p-4 rounded-xl bg-[#f0f9ff] border-l-4 border-[#0284c7]">
      <p className="font-bold text-[#0369a1] mb-2">【結果】</p>
      <p className="m-0 text-[16px] text-[#0369a1]">
        8ヶ月後、お互い自然体でいられる家庭的で笑顔のかわいい女性と巡り合い成婚されました。
      </p>
    </div>
  </div>
</section>

{/* Story 3 */}
<section className="mb-10 text-center">
  <div className="mb-6 overflow-hidden rounded-lg w-full shadow-md">
    <Image
      src="/story3.jpg"
      alt="26歳女性 会社員 × 35歳男性 医師"
      width={600}
      height={400}
      className="w-full h-auto block object-cover"
    />
  </div>
  
  <h2 className="mb-6 text-[24px] font-bold text-[#db2777]">26歳女性 会社員 × 35歳男性 医師</h2>
  
  <div className="mb-6 rounded-xl bg-white p-5 text-left shadow-sm border border-[#bae6fd]">
    <ul className="space-y-2 text-[16px] m-0 list-none">
      <li className="flex items-center gap-2"><span className="text-xl">❤️</span><span>26歳女性 会社員</span></li>
      <li className="flex items-center gap-2"><span className="text-xl">🩵</span><span>お相手：35歳男性 医師</span></li>
    </ul>
  </div>

  <div className="text-left space-y-4">
    <div className="rounded-xl bg-[#fff1f2] p-4 shadow-sm border border-[#fbcfe8]">
      <p className="font-bold text-[#db2777] mb-2">【お悩み】</p>
      <p className="m-0 text-[18px]">
        医師と結婚したいが周囲にもツテがなくアプリでもうまくいかなかった。
      </p>
    </div>

    <div className="rounded-xl bg-white p-4 shadow-sm border border-[#bae6fd]">
      <p className="font-bold text-[#db2777] mb-2">【サポート】</p>
      <p className="m-0 text-[18px]">
        可愛らしい女性でしたのでプロフィールで魅力を最大限にお伝え。ベテランカウンセラーの人脈も生かしてお見合い成立。男性医師が本当に求めている女性像や好感をもたれる外見など様々なアドバイスをしました。
      </p>
    </div>

    <div className="mt-6 p-4 rounded-xl bg-[#fdf2f8] border-l-4 border-[#db2777]">
      <p className="font-bold text-[#831843] mb-2">【結果】</p>
      <p className="m-0 text-[16px] text-[#831843]">
        活動から10ヶ月で、誠実な勤務医と成婚を掴み取られました。
      </p>
    </div>
  </div>
</section>

{/* Story 4 */}
<section className="mb-10 text-center">
  <div className="mb-6 overflow-hidden rounded-lg w-full shadow-md">
    <Image
      src="/story4.jpg"
      alt="29歳女性 会社員 × 32歳男性 会社員"
      width={600}
      height={400}
      className="w-full h-auto block object-cover"
    />
  </div>
  
  <h2 className="mb-6 text-[24px] font-bold text-[#db2777]">29歳女性 会社員 × 32歳男性 会社員</h2>
  
  <div className="mb-6 rounded-xl bg-white p-5 text-left shadow-sm border border-[#bae6fd]">
    <ul className="space-y-2 text-[16px] m-0 list-none">
      <li className="flex items-center gap-2"><span className="text-xl">❤️</span><span>29歳女性 会社員</span></li>
      <li className="flex items-center gap-2"><span className="text-xl">🩵</span><span>お相手：32歳男性 会社員</span></li>
    </ul>
  </div>

  <div className="text-left space-y-4">
    <div className="rounded-xl bg-[#fff1f2] p-4 shadow-sm border border-[#fbcfe8]">
      <p className="font-bold text-[#db2777] mb-2">【お悩み】</p>
      <p className="m-0 text-[18px]">
        結婚後お仕事をやめたい、居住地は他府県はさけたい。
      </p>
    </div>

    <div className="rounded-xl bg-white p-4 shadow-sm border border-[#bae6fd]">
      <p className="font-bold text-[#db2777] mb-2">【サポート】</p>
      <p className="m-0 text-[18px]">
        豊かな生活ができる年収のお相手にこだわらず、居心地の良さを重視する視点をアドバイス
      </p>
    </div>

    <div className="mt-6 p-4 rounded-xl bg-[#fdf2f8] border-l-4 border-[#db2777]">
      <p className="font-bold text-[#831843] mb-2">【結果】</p>
      <p className="m-0 text-[16px] text-[#831843]">
        4ヶ月後、男性の積極的なアピールの助けもあり徐々に価値観をすりあわせ成婚されました。
      </p>
    </div>
  </div>
</section>

{/* Story 5 */}
<section className="mb-10 text-center">
  <div className="mb-6 overflow-hidden rounded-lg w-full shadow-md">
    <Image
      src="/story5.jpg"
      alt="38歳男性 検査技師 × 37歳女性 ピアニスト"
      width={600}
      height={400}
      className="w-full h-auto block object-cover"
    />
  </div>
  
  <h2 className="mb-6 text-[24px] font-bold text-[#0284c7]">38歳男性 検査技師 × 37歳女性 ピアニスト</h2>
  
  <div className="mb-6 rounded-xl bg-white p-5 text-left shadow-sm border border-[#bae6fd]">
    <ul className="space-y-2 text-[16px] m-0 list-none">
      <li className="flex items-center gap-2"><span className="text-xl">🩵</span><span>38歳男性 検査技師</span></li>
      <li className="flex items-center gap-2"><span className="text-xl">❤️</span><span>お相手：37歳 ピアニスト</span></li>
    </ul>
  </div>

  <div className="text-left space-y-4">
    <div className="rounded-xl bg-[#f0f9ff] p-4 shadow-sm border border-[#bae6fd]">
      <p className="font-bold text-[#0284c7] mb-2">【お悩み】</p>
      <p className="m-0 text-[18px]">
        恋愛経験がほとんどなく会話やデートが不安。
      </p>
    </div>

    <div className="rounded-xl bg-white p-4 shadow-sm border border-[#bae6fd]">
      <p className="font-bold text-[#0284c7] mb-2">【サポート】</p>
      <p className="m-0 text-[18px]">
        ベテラン仲人としてデート設計と会話シミュレーションを徹底サポート。素直に気持ちを表現する練習もおこないました。
      </p>
    </div>

    <div className="mt-6 p-4 rounded-xl bg-[#f0f9ff] border-l-4 border-[#0284c7]">
      <p className="font-bold text-[#0369a1] mb-2">【結果】</p>
      <p className="m-0 text-[16px] text-[#0369a1]">
        活動か11ヶ月後、ピアニストの女性と出会い少しリードしてもらいながら人生初の交際からそのまま見事に成婚。
      </p>
    </div>
  </div>
</section>

{/* Story 6 */}
<section className="mb-10 text-center">
  <div className="mb-6 overflow-hidden rounded-lg w-full shadow-md">
    <Image
      src="/story6.jpg"
      alt="36歳 会計士 × 31歳 医療事務"
      width={600}
      height={400}
      className="w-full h-auto block object-cover"
    />
  </div>
  <h2 className="mb-4 text-[22px] font-bold text-[#0284c7]">36歳 会計士 × 31歳 医療事務</h2>
  <div className="rounded-xl bg-white p-4 shadow-sm border border-[#bae6fd]">
    <ul className="space-y-1 text-[16px] m-0 list-none text-left">
      <li className="flex items-center gap-2"><span className="text-lg">💙</span><span>36歳 会計士</span></li>
      <li className="flex items-center gap-2"><span className="text-lg">🩷</span><span>31歳 医療事務</span></li>
    </ul>
  </div>
</section>

{/* Story 7 */}
<section className="mb-10 text-center">
  <div className="mb-6 overflow-hidden rounded-lg w-full shadow-md">
    <Image
      src="/story7.jpg"
      alt="31歳 電車運転手 × 30歳 看護師"
      width={600}
      height={400}
      className="w-full h-auto block object-cover"
    />
  </div>
  <h2 className="mb-4 text-[22px] font-bold text-[#0284c7]">31歳 会社員【電車運転手】 × 30歳 看護師</h2>
  <div className="rounded-xl bg-white p-4 shadow-sm border border-[#bae6fd]">
    <ul className="space-y-1 text-[16px] m-0 list-none text-left">
      <li className="flex items-center gap-2"><span className="text-lg">💙</span><span>31歳 会社員【電車運転手】</span></li>
      <li className="flex items-center gap-2"><span className="text-lg">🩷</span><span>30歳 看護師</span></li>
    </ul>
  </div>
</section>

{/* Story 8 */}
<section className="mb-10 text-center">
  <div className="mb-6 overflow-hidden rounded-lg w-full shadow-md">
    <Image
      src="/story8.jpg"
      alt="38歳 薬剤師 × 35歳 検査技師"
      width={600}
      height={400}
      className="w-full h-auto block object-cover"
    />
  </div>
  <h2 className="mb-4 text-[22px] font-bold text-[#0284c7]">38歳 薬剤師 × 35歳 検査技師</h2>
  <div className="rounded-xl bg-white p-4 shadow-sm border border-[#bae6fd]">
    <ul className="space-y-1 text-[16px] m-0 list-none text-left">
      <li className="flex items-center gap-2"><span className="text-lg">💙</span><span>38歳 薬剤師</span></li>
      <li className="flex items-center gap-2"><span className="text-lg">🩷</span><span>35歳 検査技師</span></li>
    </ul>
  </div>
</section>

{/* Story 9 */}
<section className="mb-10 text-center">
  <div className="mb-6 overflow-hidden rounded-lg w-full shadow-md">
    <Image
      src="/story9.jpg"
      alt="32歳 上場企業会社員 × 28歳 上場企業会社員"
      width={600}
      height={400}
      className="w-full h-auto block object-cover"
    />
  </div>
  <h2 className="mb-4 text-[22px] font-bold text-[#0284c7]">32歳 会社員【上場企業】 × 28歳 会社員【上場企業】</h2>
  <div className="rounded-xl bg-white p-4 shadow-sm border border-[#bae6fd]">
    <ul className="space-y-1 text-[16px] m-0 list-none text-left">
      <li className="flex items-center gap-2"><span className="text-lg">💙</span><span>32歳 会社員【上場企業】</span></li>
      <li className="flex items-center gap-2"><span className="text-lg">🩷</span><span>28歳 会社員【上場企業】</span></li>
    </ul>
  </div>
</section>

{/* Story 10 */}
<section className="mb-10 text-center">
  <div className="mb-6 overflow-hidden rounded-lg w-full shadow-md">
    <Image
      src="/story10.jpg"
      alt="40歳 経営者 × 34歳 小学校教諭"
      width={600}
      height={400}
      className="w-full h-auto block object-cover"
    />
  </div>
  <h2 className="mb-4 text-[22px] font-bold text-[#0284c7]">40歳 経営者 × 34歳 小学校教諭</h2>
  <div className="rounded-xl bg-white p-4 shadow-sm border border-[#bae6fd]">
    <ul className="space-y-1 text-[16px] m-0 list-none text-left">
      <li className="flex items-center gap-2"><span className="text-lg">💙</span><span>40歳 経営者</span></li>
      <li className="flex items-center gap-2"><span className="text-lg">🩷</span><span>34歳 小学校教諭</span></li>
    </ul>
  </div>
</section>

{/* Story 11 */}
<section className="mb-10 text-center">
  <div className="mb-6 overflow-hidden rounded-lg w-full shadow-md">
    <Image
      src="/story11a.jpg"
      alt="39歳 医師 × 32歳 歯科医師"
      width={600}
      height={400}
      className="w-full h-auto block object-cover"
    />
  </div>
  <h2 className="mb-4 text-[22px] font-bold text-[#db2777]">39歳 医師 × 32歳 歯科医師</h2>
  <div className="rounded-xl bg-white p-4 shadow-sm border border-[#bae6fd]">
    <ul className="space-y-1 text-[16px] m-0 list-none text-left">
      <li className="flex items-center gap-2"><span className="text-lg">💙</span><span>39歳 医師</span></li>
      <li className="flex items-center gap-2"><span className="text-lg">🩷</span><span>32歳 歯科医師</span></li>
    </ul>
  </div>
</section>
    </main>
  );
}