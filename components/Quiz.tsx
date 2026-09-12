"use client";

import React, { useState } from 'react';
import { RefreshCw, ArrowRight } from 'lucide-react';

export default function EQQuizComponent() {
  // クイズ状態の管理
  const [currentQuestion, setCurrentQuestion] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  // クイズの質問データ
  const quizQuestions = [
    {
      q: "デート中に予期せぬトラブル（予約の不手際や電車の遅延など）が起きた時、あなたの最初の反応は？",
      options: [
        { text: "つい不機嫌になったり、動揺して相手に気を遣わせてしまう", score: 1 },
        { text: "「焦っている自分」を冷静に自覚し、まずは心を落ち着かせるよう努める", score: 3 },
        { text: "問題解決を優先し、相手の気持ちを置き去りにしてテキパキ動きすぎる", score: 2 }
      ]
    },
    {
      q: "お相手が仕事の愚痴や悩みを話してきた時、あなたはどのように対応しますか？",
      options: [
        { text: "「こうすればいいのに」と、すぐに具体的な解決策やアドバイスを伝えてしまう", score: 2 },
        { text: "「それは大変だったね」と相手の言葉を反復し、まずは感情を丸ごと受け止める", score: 3 },
        { text: "話があまり長くなると、どう返していいか分からず適当に聞き流してしまう", score: 1 }
      ]
    },
    {
      q: "交際相手との意見の食い違いや衝突が起きた時、あなたの対話のスタンスは？",
      options: [
        { text: "自分の意見を我慢して相手に合わせるか、逆に感情的に自分の主張を押し通してしまう", score: 1 },
        { text: "「どうせ言っても無駄だ」と諦め、距離を置いてフェードアウトしようとする", score: 1 },
        { text: "お互いの違いを認め合い、勝ち負けではなく「二人にとっての最適解」を話し合おうとする", score: 3 }
      ]
    }
  ];

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);
    
    if (currentQuestion !== null && currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(null);
    setAnswers([]);
    setQuizFinished(false);
  };

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const maxScore = quizQuestions.length * 3;

  return (
    <>
      {currentQuestion === null && !quizFinished ? (
        <div className="text-center py-4">
          <button
            onClick={() => setCurrentQuestion(0)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-bold px-8 py-4 rounded-full shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 cursor-pointer"
          >
            診断をスタートする
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      ) : !quizFinished && currentQuestion !== null ? (
        <div className="space-y-4 p-6 bg-sky-50/30 rounded-2xl border border-sky-200/60 shadow-xs">
          <div className="flex justify-between text-slate-400 font-semibold text-base">
            <span>質問 {currentQuestion + 1} / {quizQuestions.length}</span>
            <span>進行度 {Math.round(((currentQuestion) / quizQuestions.length) * 100)}%</span>
          </div>
          <h4 className="font-bold text-slate-900 text-lg">
            {quizQuestions[currentQuestion].q}
          </h4>
          <div className="space-y-3 pt-2">
            {quizQuestions[currentQuestion].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(opt.score)}
                className="w-full text-left p-4 rounded-xl border border-sky-200 hover:border-sky-400 hover:bg-sky-50 font-medium transition text-slate-700 leading-relaxed bg-white shadow-2xs cursor-pointer"
              >
                {opt.text}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center space-y-4 p-6 bg-sky-50/50 rounded-2xl border border-sky-200">
          <p className="text-sky-600 font-bold uppercase tracking-wider text-base">心理チェック結果</p>
          <h4 className="font-bold text-slate-900 text-xl">あなたのEQ意識スコア</h4>
          <p className="font-black text-sky-700 text-3xl">{totalScore} <span className="text-slate-400 text-lg">/ {maxScore} 点</span></p>
          <p className="text-slate-700 leading-relaxed text-left bg-white p-5 rounded-xl border border-sky-200/60 shadow-2xs">
            {totalScore >= 8 ? "素晴らしい感情知性をお持ちです！自他の感情の客観視能力が高く、衝突があってもアサーティブで前向きな対話で良好な関係を育めます。" : 
             totalScore >= 5 ? "平均的なEQをお持ちです。少し意識して「6秒猶予」や「反復傾聴」を練習することでお相手への深い安心感提供力を劇的に高められます。" : 
             "感情が少し先走ってしまう傾向があります。まずは日頃から自分の喜怒哀楽の原因を言語化し、客観的に感情を認知することから始めましょう。"}
          </p>
          <button
            onClick={resetQuiz}
            className="inline-flex items-center gap-2 font-bold text-slate-500 hover:text-slate-800 transition pt-2 cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" /> もう一度診断する
          </button>
        </div>
      )}
    </>
  );
}