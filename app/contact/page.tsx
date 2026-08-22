"use client";

import React, { useState } from "react";
import { sendConsultationEmail } from "../actions/send-test-email";
import {
  Calendar,
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
  CheckCircle2,
  ShieldCheck,
  Clock,
  ChevronDown,
  Sparkles,
} from "lucide-react";

export default function ContactConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
    agreePrivacy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;

      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await sendConsultationEmail(formData);

      if (result.success) {
        setIsSuccess(true);

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        alert("送信に失敗しました。もう一度お試しください。");
      }
    } catch (error) {
      console.error("Submission failed:", error);
      alert("送信に失敗しました。もう一度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FFF8FA] via-[#FAF8F5] to-[#F7EEF1] px-4 py-12 sm:py-20">
        <div className="mx-auto flex min-h-[70vh] max-w-xl items-center justify-center">

          <div className="relative w-full overflow-hidden rounded-[30px] border border-[#E9DDE1] bg-white px-6 py-10 text-center shadow-[0_20px_70px_rgba(180,110,130,0.10)] sm:px-12 sm:py-14">

            <div className="absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-[#E6A2B3] via-[#D9889D] to-[#C9788E]" />

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#FBECEF] to-[#F6DDE4]">
              <CheckCircle2 className="h-10 w-10 text-[#D4778E]" />
            </div>

            <h2 className="mt-7 text-[22px] font-black leading-relaxed text-gray-900 sm:text-2xl">
              無料相談のご予約を承りました
            </h2>

            <p className="mt-5 text-[18px] leading-8 text-gray-600">
              この度はお問い合わせいただき誠にありがとうございます。
              <br />
              ご入力いただいた内容を確認の上、担当カウンセラーより24時間以内に日時確定のご連絡を差し上げます。
            </p>

            <div className="mt-7 rounded-2xl border border-[#F0E2E6] bg-[#FFF8FA] px-5 py-4 text-[15px] leading-7 text-gray-500">
              ※返信が届かない場合は、迷惑メールフォルダをご確認ください。
            </div>

            <button
              onClick={() => setIsSuccess(false)}
              className="mt-7 rounded-xl bg-gray-900 px-7 py-4 text-[18px] font-bold text-white transition hover:bg-gray-800"
            >
              もう一度フォームを開く
            </button>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF9FA] via-[#FAF8F5] to-[#F8F0F2] px-4 pb-20 pt-6 text-gray-950 sm:px-6 sm:pt-10 lg:px-8">

      <div className="mx-auto max-w-4xl">

        {/* HEADER */}
        <div className="mb-7 sm:mb-9">

          <div className="inline-flex items-center gap-2 rounded-full border border-[#F0D8DE] bg-[#FFF5F7] px-3.5 py-2 text-[13px] font-bold tracking-[0.15em] text-[#C8758A] shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            <span>FREE CONSULTATION</span>
          </div>

          <h1 className="mt-4 text-[27px] font-black tracking-tight text-gray-900 sm:text-3xl">
            無料カウンセリング予約
          </h1>

          <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-[#E6A2B3] to-[#D9889D]" />

          <p className="mt-4 max-w-2xl text-[18px] leading-7 text-gray-600 sm:text-[15px]">
            ご相談やお問い合わせはこちらからお気軽にお申し込みください。
            オンラインまたは大阪梅田オフィスでの面談を承っております。
          </p>

        </div>

        {/* MAIN FORM */}
        <div className="relative overflow-hidden rounded-[30px] border border-[#E9DDE1] bg-white shadow-[0_20px_70px_rgba(170,100,120,0.08)]">

          {/* DECORATIVE TOP */}
          <div className="h-1.5 bg-gradient-to-r from-[#E9A7B8] via-[#D9889D] to-[#C9788E]" />

          <div className="border-b border-[#F0E7E9] bg-gradient-to-r from-[#FFF4F7] via-[#FFF9FA] to-white px-5 py-7 sm:px-9 sm:py-8">

            <div className="flex items-start justify-between gap-4">

              <div>
                <div className="flex items-center gap-2">

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm">
                    <Calendar className="h-4.5 w-4.5 text-[#D9889D]" />
                  </div>

                  <h2 className="text-[19px] font-black text-gray-900 sm:text-xl">
                    ご予約・お問い合わせ内容
                  </h2>

                </div>

                <p className="mt-2 pl-11 text-[15px] leading-6 text-gray-500">
                  必須項目をご入力ください。
                </p>
              </div>

              <div className="hidden rounded-full border border-[#F0D9DF] bg-white px-3 py-1.5 text-[11px] font-bold text-[#C8758A] shadow-sm sm:block">
                約1〜2分
              </div>

            </div>

          </div>

          <form
            onSubmit={handleSubmit}
            className="px-5 py-7 sm:px-9 sm:py-9"
          >

            <div className="space-y-9">

              {/* BASIC INFORMATION */}
              <section>

                <div className="mb-5 flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#FBECEF] to-[#F5DDE4]">
                    <User className="h-4 w-4 text-[#D4778E]" />
                  </div>

                  <div>
                    <h3 className="text-[18px] font-black text-gray-900">
                      基本情報
                    </h3>

                    <p className="text-[13px] text-[#C78393]">
                      お客様の基本的な情報
                    </p>
                  </div>

                </div>

                <div className="space-y-6">

                  {/* NAME */}
                  <div>

                    <label
                      htmlFor="name"
                      className="mb-2 block text-[16px] font-bold text-gray-800"
                    >
                      お名前
                      <span className="ml-2 rounded-full bg-[#FBECEF] px-2 py-0.5 text-[10px] font-bold text-[#C96F85]">
                        必須
                      </span>
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="梅田 太郎"
                      className="w-full rounded-xl border border-[#E5DDDF] bg-[#FFFCFC] px-4 py-4 text-[18px] text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#D9889D] focus:bg-white focus:ring-4 focus:ring-[#E6A2B3]/10 sm:text-[16px]"
                    />

                  </div>

                  {/* AGE / GENDER */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                    <div>

                      <label
                        htmlFor="age"
                        className="mb-2 block text-[16px] font-bold text-gray-800"
                      >
                        ご年齢
                        <span className="ml-2 rounded-full bg-[#FBECEF] px-2 py-0.5 text-[10px] font-bold text-[#C96F85]">
                          必須
                        </span>
                      </label>

                      <input
                        type="number"
                        id="age"
                        name="age"
                        required
                        min="20"
                        max="80"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="35"
                        className="w-full rounded-xl border border-[#E5DDDF] bg-[#FFFCFC] px-4 py-4 text-[18px] text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#D9889D] focus:bg-white focus:ring-4 focus:ring-[#E6A2B3]/10 sm:text-[16px]"
                      />

                    </div>

                    <div>

                      <label
                        htmlFor="gender"
                        className="mb-2 block text-[16px] font-bold text-gray-800"
                      >
                        性別
                        <span className="ml-2 rounded-full bg-[#FBECEF] px-2 py-0.5 text-[10px] font-bold text-[#C96F85]">
                          必須
                        </span>
                      </label>

                      <div className="relative">

                        <select
                          id="gender"
                          name="gender"
                          required
                          value={formData.gender}
                          onChange={handleChange}
                          className="w-full appearance-none rounded-xl border border-[#E5DDDF] bg-[#FFFCFC] px-4 py-4 pr-12 text-[18px] text-gray-900 outline-none transition-all focus:border-[#D9889D] focus:bg-white focus:ring-4 focus:ring-[#E6A2B3]/10 sm:text-[16px]"
                        >
                          <option value="">選択してください</option>
                          <option value="male">男性</option>
                          <option value="female">女性</option>
                          <option value="other">
                            その他 / 回答しない
                          </option>
                        </select>

                        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#D9889D]" />

                      </div>

                    </div>

                  </div>

                  {/* PHONE */}
                  <div>

                    <label
                      htmlFor="phone"
                      className="mb-2 block text-[16px] font-bold text-gray-800"
                    >
                      電話番号
                      <span className="ml-2 rounded-full bg-[#FBECEF] px-2 py-0.5 text-[10px] font-bold text-[#C96F85]">
                        必須
                      </span>
                    </label>

                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="090-1234-5678"
                      className="w-full rounded-xl border border-[#E5DDDF] bg-[#FFFCFC] px-4 py-4 text-[18px] text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#D9889D] focus:bg-white focus:ring-4 focus:ring-[#E6A2B3]/10 sm:text-[16px]"
                    />

                  </div>

                  {/* EMAIL */}
                  <div>

                    <label
                      htmlFor="email"
                      className="mb-2 block text-[16px] font-bold text-gray-800"
                    >
                      メールアドレス
                      <span className="ml-2 rounded-full bg-[#FBECEF] px-2 py-0.5 text-[10px] font-bold text-[#C96F85]">
                        必須
                      </span>
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@example.com"
                      className="w-full rounded-xl border border-[#E5DDDF] bg-[#FFFCFC] px-4 py-4 text-[18px] text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#D9889D] focus:bg-white focus:ring-4 focus:ring-[#E6A2B3]/10 sm:text-[16px]"
                    />

                  </div>

                </div>
              </section>

              {/* APPOINTMENT */}
              <section className="border-t border-[#F0E7E9] pt-9">

                <div className="mb-5 flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#FBECEF] to-[#F5DDE4]">
                    <Calendar className="h-4 w-4 text-[#D4778E]" />
                  </div>

                  <div>
                    <h3 className="text-[18px] font-black text-gray-900">
                      ご希望日時
                    </h3>

                    <p className="text-[13px] text-[#C78393]">
                      ご都合のよい日時をお知らせください
                    </p>
                  </div>

                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                  <div>

                    <label
                      htmlFor="preferredDate"
                      className="mb-2 block text-[16px] font-bold text-gray-800"
                    >
                      第一希望日
                      <span className="ml-2 rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-bold text-gray-500">
                        任意
                      </span>
                    </label>

                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[#E5DDDF] bg-[#FFFCFC] px-4 py-4 text-[18px] text-gray-900 outline-none transition-all focus:border-[#D9889D] focus:bg-white focus:ring-4 focus:ring-[#E6A2B3]/10 sm:text-[16px]"
                    />

                  </div>

                  <div>

                    <label
                      htmlFor="preferredTime"
                      className="mb-2 block text-[16px] font-bold text-gray-800"
                    >
                      希望時間帯
                      <span className="ml-2 rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-bold text-gray-500">
                        任意
                      </span>
                    </label>

                    <div className="relative">

                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full appearance-none rounded-xl border border-[#E5DDDF] bg-[#FFFCFC] px-4 py-4 pr-12 text-[18px] text-gray-900 outline-none transition-all focus:border-[#D9889D] focus:bg-white focus:ring-4 focus:ring-[#E6A2B3]/10 sm:text-[16px]"
                      >
                        <option value="">選択してください</option>
                        <option value="11:00-13:00">
                          11:00 ～ 13:00
                        </option>
                        <option value="13:00-15:00">
                          13:00 ～ 15:00
                        </option>
                        <option value="15:00-17:00">
                          15:00 ～ 17:00
                        </option>
                        <option value="17:00-19:00">
                          17:00 ～ 19:00
                        </option>
                        <option value="any">
                          いつでも可
                        </option>
                      </select>

                      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#D9889D]" />

                    </div>

                  </div>

                </div>
              </section>

              {/* MESSAGE */}
              <section className="border-t border-[#F0E7E9] pt-9">

                <div className="mb-5 flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#FBECEF] to-[#F5DDE4]">
                    <MessageSquare className="h-4 w-4 text-[#D4778E]" />
                  </div>

                  <div>
                    <h3 className="text-[18px] font-black text-gray-900">
                      ご相談内容
                    </h3>

                    <p className="text-[13px] text-[#C78393]">
                      ご質問やお悩みなどをご自由にお書きください
                    </p>
                  </div>

                </div>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="「特別サポート紹介プランに興味がある」「まずは現状のお悩み相談を希望」など、自由にご記入ください。"
                  className="w-full resize-none rounded-xl border border-[#E5DDDF] bg-[#FFFCFC] px-4 py-4 text-[18px] leading-8 text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#D9889D] focus:bg-white focus:ring-4 focus:ring-[#E6A2B3]/10 sm:text-[16px]"
                />

              </section>

              {/* PRIVACY */}
              <section className="border-t border-[#F0E7E9] pt-7">

                <label className="flex cursor-pointer items-start gap-3 text-[16px] leading-7 text-gray-600">

                  <input
                    type="checkbox"
                    name="agreePrivacy"
                    required
                    checked={formData.agreePrivacy}
                    onChange={handleChange}
                    className="mt-1 h-5 w-5 shrink-0 accent-[#D9889D]"
                  />

                  <span>
                    当相談所の{" "}
                    <a
                      href="/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#C8758A] underline underline-offset-2 hover:text-[#A85F73]"
                    >
                      個人情報保護方針（プライバシーポリシー）
                    </a>{" "}
                    に同意の上、送信します。
                  </span>

                </label>

              </section>

              {/* SUBMIT */}
              <div className="pt-1">

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#E6A2B3] via-[#D9889D] to-[#C9788E] px-6 py-5 text-[18px] font-black text-white shadow-[0_12px_30px_rgba(207,119,141,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_35px_rgba(207,119,141,0.36)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:text-[16px]"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      <span>送信中...</span>
                    </>
                  ) : (
                    <>
                      <span>この内容で無料相談を予約する</span>
                      <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                <p className="mt-4 text-center text-[13px] leading-6 text-gray-400">
                  送信いただいた内容を確認後、担当者よりご連絡いたします。
                </p>

              </div>

            </div>
          </form>
        </div>

        {/* INFORMATION */}
        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-[#E9DDE1] bg-white p-5 shadow-sm">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFF1F4]">
              <Clock className="h-4 w-4 text-[#D4778E]" />
            </div>

            <h3 className="mt-3 text-[15px] font-black text-gray-900">
              営業時間
            </h3>

            <p className="mt-1 text-[13px] leading-6 text-gray-500">
              11:00 ～ 20:00
              <br />
              定休日：火曜日
            </p>
          </div>

          <div className="rounded-2xl border border-[#E9DDE1] bg-white p-5 shadow-sm">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFF1F4]">
              <Calendar className="h-4 w-4 text-[#D4778E]" />
            </div>

            <h3 className="mt-3 text-[15px] font-black text-gray-900">
              面談時間
            </h3>

            <p className="mt-1 text-[13px] leading-6 text-gray-500">
              約60～90分
              <br />
              完全予約制
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-5 shadow-sm">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
            </div>

            <h3 className="mt-3 text-[15px] font-black text-emerald-900">
              プライバシー保護
            </h3>

            <p className="mt-1 text-[13px] leading-6 text-emerald-700">
              お預かりした個人情報は、ご連絡・ご案内の目的以外には使用いたしません。
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}