import React from "react";
import {
  Building2,
  UserCheck,
  MapPin,
  Mail,
  Phone,
  CreditCard,
  Receipt,
  CalendarCheck,
  ShieldAlert,
  FileText,
  Lock,
  AlertCircle,
} from "lucide-react";

export default function CompanyProfileTable() {
  const legalData = [
    {
      icon: <Building2 className="w-4 h-4 text-slate-500 shrink-0" />,
      term: "事業者の名称",
      description: "大阪梅田ドクターズ結婚相談所",
    },
    {
      icon: <UserCheck className="w-4 h-4 text-slate-500 shrink-0" />,
      term: "代表者氏名",
      description:
        "加藤とあこ",
    },
    {
      icon: <MapPin className="w-4 h-4 text-slate-500 shrink-0" />,
      term: "所在地",
      description:
        "〒530-0001大阪市北区梅田1丁目2番2-200号大阪駅前第2ビル2階3-1-2",
    },
    {
      icon: <Mail className="w-4 h-4 text-slate-500 shrink-0" />,
      term: "連絡先（メール）",
      description:
        "dabanmeitiandokutazu.26@gmail.com",
    },
    {
      icon: <Phone className="w-4 h-4 text-slate-500 shrink-0" />,
      term: "連絡先（電話番号）",
      description:
        "09066463456",
    },
    {
      icon: <CreditCard className="w-4 h-4 text-slate-500 shrink-0" />,
      term: "お支払い方法",
      description: "銀行振り込み",
    },
    {
      icon: <Receipt className="w-4 h-4 text-slate-500 shrink-0" />,
      term: "商品代金以外の必要料金",
      description:
        "お見合い時におけるご自身の飲食代、交通費、および各種証明書類の取得費用",
    },
    {
      icon: <CalendarCheck className="w-4 h-4 text-slate-500 shrink-0" />,
      term: "役務の提供時期",
      description: "入会手続きおよび登録完了後から、ご成婚退会または退会時まで",
    },
    {
      icon: <ShieldAlert className="w-4 h-4 text-slate-500 shrink-0" />,
      term: "契約の解除（中途解約）",
      description:
        "特定商取引法に基づき、入会契約書面を受領した日から8日以内であれば、無条件でクーリング・オフ（全額返金）が可能です。\nクーリング・オフ期間経過後の退会（中途解約）につきましても、特定商取引法および当相談所の規約に準じて、適切に返金等の対応を行います。",
    },
    {
      icon: <Lock className="w-4 h-4 text-slate-500 shrink-0" />,
      term: "プライバシーポリシー\n（個人情報の取り扱い）",
      description:
        "当サイトは、お客様からお預かりした個人情報（お名前、メールアドレス等）を、以下の目的以外には一切使用いたしません。\n・お客様からのお問い合わせに対応するため\n・お申し込みいただいたサービスを提供するため\nお預かりした個人情報は適切に管理し、法律に基づく場合を除き、第三者に開示・提供することはいたしません。",
    },
    {
      icon: <AlertCircle className="w-4 h-4 text-slate-500 shrink-0" />,
      term: "サイトの利用について",
      description:
        "当サイトの料金やサービス内容を、事前の承諾なく比較サイト、おすすめランキング、ブログ等に掲載・紹介することは、情報の正確性を保つため固くお断りいたします。掲載をご希望される場合は、必ず事前にお問い合わせフォームよりご連絡ください。",
    },
  ];

  return (
    <section className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden max-w-4xl mx-auto my-8">
      {/* Header Banner */}
      <div className="bg-slate-900 px-6 py-5 text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-slate-800 rounded-lg border border-slate-700">
            <FileText className="w-5 h-5 text-slate-300" />
          </div>
          <div>
            <h2
              className="text-base sm:text-lg font-bold tracking-tight text-slate-100"
              style={{ wordBreak: "break-all" }}
            >
              特定商取引法に基づく表記
            </h2>
            <p className="text-xs text-slate-400 font-medium mt-0.5">
              Legal Information & Company Profile
            </p>
          </div>
        </div>
        <span className="hidden sm:inline-block text-xs font-semibold px-2.5 py-1 bg-slate-800 text-slate-300 rounded-md border border-slate-700">
          特定商取引法第11条に基づく表示
        </span>
      </div>

      {/* Table Area */}
      <div className="p-6">
        <div className="overflow-hidden border border-slate-200 rounded-lg">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100/80 text-slate-700 border-b border-slate-200">
                <th
                  className="py-3 px-4 font-semibold w-1/3 sm:w-1/4 text-slate-900 border-r border-slate-200/60"
                  style={{ wordBreak: "break-all" }}
                >
                  項目
                </th>
                <th
                  className="py-3 px-4 font-semibold w-2/3 sm:w-3/4 text-slate-900"
                  style={{ wordBreak: "break-all" }}
                >
                  記載内容
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              {legalData.map((row, index) => (
                <tr
                  key={index}
                  className="hover:bg-slate-50/80 transition-colors"
                >
                  <th
                    scope="row"
                    className="py-3.5 px-4 font-medium text-slate-900 bg-slate-50/40 sm:bg-transparent border-r border-slate-200/60 align-top"
                    style={{ wordBreak: "break-all" }}
                  >
                    <div className="flex items-start gap-2.5">
                      {row.icon}
                      <span className="text-slate-800 font-medium whitespace-pre-line">
                        {row.term}
                      </span>
                    </div>
                  </th>
                  <td
                    className="py-3.5 px-4 whitespace-pre-line leading-relaxed text-slate-600 align-top"
                    style={{ wordBreak: "break-all" }}
                  >
                    {row.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}