'use client';

import React, { useState } from 'react';
import { RotateCw, ArrowLeft, ArrowRight, Shuffle, Lightbulb, Sparkles, BookOpen, Play, CheckCircle2 } from 'lucide-react';
import { Question } from '@/lib/types';
import { playClickSound } from '@/lib/sound';

interface FlashcardStudyModeProps {
  questions: Question[];
  currentLevelId: number;
  onSelectLevel: (levelId: number) => void;
  onStartQuizWithLevel: (levelId: number) => void;
  onBackToHome: () => void;
}

export default function FlashcardStudyMode({
  questions,
  currentLevelId,
  onSelectLevel,
  onStartQuizWithLevel,
  onBackToHome,
}: FlashcardStudyModeProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const filteredQuestions = questions.filter((q) => q.levelId === currentLevelId);
  const total = filteredQuestions.length;
  const currentQ = filteredQuestions[currentIndex] || filteredQuestions[0];

  const handleFlip = () => {
    playClickSound();
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    playClickSound();
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    playClickSound();
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleShuffle = () => {
    playClickSound();
    setIsFlipped(false);
    const randomIdx = Math.floor(Math.random() * total);
    setCurrentIndex(randomIdx);
  };

  const handleLevelChange = (lvl: number) => {
    playClickSound();
    setIsFlipped(false);
    setCurrentIndex(0);
    onSelectLevel(lvl);
  };

  if (!currentQ) return null;

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6 animate-in fade-in duration-200">
      {/* Top Controls Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
        <button
          id="back-to-home-btn"
          onClick={() => {
            playClickSound();
            onBackToHome();
          }}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Menu Utama</span>
        </button>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {[1, 2, 3, 4].map((lvl) => (
            <button
              key={lvl}
              id={`study-level-pill-${lvl}`}
              onClick={() => handleLevelChange(lvl)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                currentLevelId === lvl
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Level {lvl}
            </button>
          ))}
        </div>
      </div>

      {/* Progress & Quick Actions */}
      <div className="flex items-center justify-between px-2 text-xs sm:text-sm font-medium text-slate-500">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-emerald-600" />
          <span>Mode Flashcard Belajar: <strong>{currentIndex + 1}</strong> dari <strong>{total}</strong> kartu</span>
        </div>
        <button
          id="shuffle-flashcards-btn"
          onClick={handleShuffle}
          className="flex items-center gap-1 text-slate-600 hover:text-emerald-700 font-semibold transition"
          title="Acak kartu"
        >
          <Shuffle className="w-3.5 h-3.5" />
          <span>Acak</span>
        </button>
      </div>

      {/* The 3D Flashcard Container */}
      <div
        id="flashcard-card-touch-area"
        onClick={handleFlip}
        className="relative w-full min-h-[380px] sm:min-h-[340px] cursor-pointer group perspective-1000"
      >
        <div
          className={`w-full min-h-[380px] sm:min-h-[340px] rounded-3xl p-6 sm:p-8 transition-all duration-300 transform flex flex-col justify-between shadow-lg border ${
            isFlipped
              ? 'bg-gradient-to-br from-emerald-50 via-teal-50 to-white border-emerald-300 ring-2 ring-emerald-400/30'
              : 'bg-gradient-to-br from-white via-slate-50 to-slate-100 border-slate-200 hover:border-emerald-300 hover:shadow-xl'
          }`}
        >
          {/* Card Header */}
          <div className="flex items-center justify-between gap-2 border-b border-slate-200/60 pb-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                {currentQ.levelTitle}
              </span>
              <span className="text-xs font-semibold text-slate-400">
                Kategori: {currentQ.category}
              </span>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-slate-400 group-hover:text-emerald-600 transition">
              <RotateCw className="w-3.5 h-3.5" />
              <span>{isFlipped ? 'Lihat Pertanyaan' : 'Klik untuk Membalik'}</span>
            </div>
          </div>

          {/* Card Body */}
          <div className="my-auto py-4 text-center">
            {!isFlipped ? (
              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Pertanyaan Soal #{currentQ.id}</p>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-800 leading-snug max-w-xl mx-auto">
                  {currentQ.question}
                </h3>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-medium">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                  <span>Petunjuk: {currentQ.hint}</span>
                </div>
              </div>
            ) : (
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Kunci Jawaban Tepat:</span>
                </div>
                <div className="p-3.5 bg-emerald-600 text-white font-bold rounded-2xl text-sm sm:text-base shadow-sm">
                  {currentQ.options[currentQ.answerIndex]}
                </div>
                <div className="text-xs sm:text-sm text-slate-700 bg-white/90 p-4 rounded-xl border border-emerald-100 shadow-2xs leading-relaxed">
                  <strong>Pembahasan Konsep:</strong> {currentQ.explanation}
                </div>
                {currentQ.funFact && (
                  <div className="flex items-start gap-2 text-xs text-teal-800 bg-teal-50/80 p-3 rounded-xl border border-teal-200">
                    <Sparkles className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Tahukah Kamu?</strong> {currentQ.funFact}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Card Footer Hint */}
          <div className="border-t border-slate-200/60 pt-3 text-center text-xs text-slate-400 font-medium">
            {!isFlipped ? '💡 Klik di sembarang area kartu untuk membalik dan melihat kunci jawaban & pembahasan!' : '🔄 Klik lagi untuk kembali melihat soal'}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between gap-4">
        <button
          id="prev-flashcard-btn"
          onClick={handlePrev}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold rounded-2xl text-xs sm:text-sm transition shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Sebelumnya</span>
        </button>

        <button
          id="start-quiz-from-study-btn"
          onClick={() => {
            playClickSound();
            onStartQuizWithLevel(currentLevelId);
          }}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl text-xs sm:text-sm transition shadow-sm"
        >
          <Play className="w-4 h-4 fill-white" />
          <span>Mulai Kuis Level Ini</span>
        </button>

        <button
          id="next-flashcard-btn"
          onClick={handleNext}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold rounded-2xl text-xs sm:text-sm transition shadow-xs"
        >
          <span>Berikutnya</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
