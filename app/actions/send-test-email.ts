"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ConsultationFormData = {
  name: string;
  age: string;
  gender: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
  agreePrivacy: boolean;
};

export async function sendConsultationEmail(
  formData: ConsultationFormData
) {
  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["englishsteps20@gmail.com"],

      subject: `無料相談のお申し込み - ${formData.name}`,

      html: `
        <h2>無料相談のお申し込み</h2>

        <h3>基本情報</h3>

        <p>
          <strong>お名前:</strong><br>
          ${formData.name}
        </p>

        <p>
          <strong>年齢:</strong><br>
          ${formData.age}
        </p>

        <p>
          <strong>性別:</strong><br>
          ${formData.gender}
        </p>

        <p>
          <strong>電話番号:</strong><br>
          ${formData.phone}
        </p>

        <p>
          <strong>メールアドレス:</strong><br>
          ${formData.email}
        </p>

        <hr>

        <h3>希望日時</h3>

        <p>
          <strong>第一希望日:</strong><br>
          ${formData.preferredDate || "指定なし"}
        </p>

        <p>
          <strong>希望時間帯:</strong><br>
          ${formData.preferredTime || "指定なし"}
        </p>

        <hr>

        <h3>相談内容</h3>

        <p>
          ${formData.message || "記入なし"}
        </p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return {
        success: false,
        error: error.message,
      };
    }

    console.log("Email sent:", data);

    return {
      success: true,
    };

  } catch (error) {
    console.error("Email sending failed:", error);

    return {
      success: false,
      error: "メールの送信に失敗しました。",
    };
  }
}