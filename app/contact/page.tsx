import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: '無料相談のご予約｜大阪梅田ドクターズ結婚相談所（完全予約制）',
  description: '大阪・梅田の結婚相談所の無料相談予約ページ。北新地駅徒歩1分、年中無休9時〜21時。LINE・Zoomでのオンライン相談も可能です。入会を決めていない方のご相談も歓迎します。',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: '無料相談のご予約｜大阪梅田ドクターズ結婚相談所',
    description: '完全予約制。北新地駅徒歩1分、年中無休9時〜21時。LINE・Zoomでのオンライン相談も承ります。',
    url: '/contact',
    type: 'website',
  },
};

export default function ContactConsultationPage() {
  return <ContactForm />;
}