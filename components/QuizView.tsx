'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  Heart,
  Volume2,
  VolumeX,
  Lightbulb,
  ArrowRight,
  RotateCcw,
  Trophy,
  Award,
  CheckCircle2,
  XCircle,
  Sparkles,
  ArrowLeft,
  Flame,
  HelpCircle,
  BookOpen
} from 'lucide-react';
import { Question, LevelConfig, LeaderboardEntry } from '@/lib/types';
import { saveLeaderboardEntry } from '@/lib/leaderboardStore';
import {
  playClickSound,
  playCorrectSound,
  playWrongSound,
  playVictorySound,
  playStreakSound,
  getSoundMuted,
  setSoundMuted
} from '@/lib/sound';

interface QuizViewProps {
  levelConfig: LevelConfig;
  allQuestions: Question[];
  onFinishQuiz: (score: number, accuracy: number) => void;
  onBackToHome: () => void;
  onOpenMaterial: (levelId: number) => void;
  onOpenLeaderboard: () => void;
  triggerConfetti: () => void;
}

interface ShuffledOption {
  text: string;
  originalIndex: number;
}

export default function QuizView({
  levelConfig,
  allQuestions,
  onBackToHome,
  onOpenMaterial,
  onOpenLeaderboard,
  triggerConfetti,
}: QuizViewProps) {
  // Questions for current level (25 questions)
  const levelQuestions = useMemo(() => {
    return allQuestions.filter((q) => q.levelId === levelConfig.id);
  }, [allQuestions, levelConfig.id]);

  const totalQuestions = levelQuestions.length;

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [hearts, setHearts] = useState<number>(3);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [isMuted, setIsMutedState] = useState<boolean>(() => getSoundMuted());
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  // Student name input for leaderboard submission
  const [studentName, setStudentName] = useState<string>('');
  const [hasSavedScore, setHasSavedScore] = useState<boolean>(false);

  const currentQ = levelQuestions[currentIndex] || levelQuestions[0];

  // Shuffle options for the current question
  const shuffledOptions = useMemo<ShuffledOption[]>(() => {
    if (!currentQ) return [];
    const opts = currentQ.options.map((text, idx) => ({ text, originalIndex: idx }));
    // Simple deterministic-ish shuffle based on question id to keep it stable during render
    const shuffled = [...opts];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = (currentQ.id * 7 + i) % (i + 1);
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, [currentQ]);

  const toggleSound = () => {
    const next = !isMuted;
    setIsMutedState(next);
    setSoundMuted(next);
  };

  const handleSelectOption = (shuffledIdx: number) => {
    if (isAnswered || isFinished || isGameOver) return;

    const chosen = shuffledOptions[shuffledIdx];
    const isCorrect = chosen.originalIndex === currentQ.answerIndex;

    setSelectedOption(shuffledIdx);
    setIsAnswered(true);

    if (isCorrect) {
      playCorrectSound();
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) {
        setMaxStreak(newStreak);
      }
      if (newStreak % 5 === 0) {
        playStreakSound();
      }

      // Dynamic scoring: 100 base pts + streak bonus
      const streakMultiplier = 1 + Math.min(newStreak * 0.1, 1.0); // up to 2x
      const pointsEarned = Math.round(100 * streakMultiplier);
      setScore((prev) => prev + pointsEarned);
      setCorrectCount((prev) => prev + 1);
    } else {
      playWrongSound();
      setStreak(0);
      const newHearts = hearts - 1;
      setHearts(newHearts);

      if (newHearts <= 0) {
        setIsGameOver(true);
      }
    }
  };

  const handleNextQuestion = () => {
    playClickSound();
    if (currentIndex + 1 >= totalQuestions) {
      // Completed level!
      setIsFinished(true);
      triggerConfetti();
      playVictorySound();
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setShowHint(false);
    }
  };

  const handleRestart = () => {
    playClickSound();
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setCorrectCount(0);
    setHearts(3);
    setSelectedOption(null);
    setIsAnswered(false);
    setShowHint(false);
    setIsFinished(false);
    setIsGameOver(false);
    setHasSavedScore(false);
  };

  const handleSaveToLeaderboard = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || hasSavedScore) return;

    playClickSound();
    const finalAccuracy = Math.round((correctCount / totalQuestions) * 100);

    const newEntry: LeaderboardEntry = {
      id: `entry-${Date.now()}`,
      name: studentName.trim(),
      score: score,
      accuracy: finalAccuracy,
      levelId: levelConfig.id,
      levelName: levelConfig.title,
      badge: levelConfig.badge,
      date: new Date().toISOString().split('T')[0],
      streak: maxStreak,
    };

    saveLeaderboardEntry(newEntry);
    setHasSavedScore(true);
    triggerConfetti();
  };

  const accuracy = Math.round((correctCount / Math.max(currentIndex + (isAnswered ? 1 : 0), 1)) * 100);

  // ========================================================
  // VIEW: GAME OVER SCREEN (Kehabisan Hati)
  // ========================================================
  if (isGameOver) {
    return (
      <div className="w-full max-w-xl mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-xl text-center space-y-6 animate-in zoom-in-95 duration-200">
        <div className="w-20 h-20 mx-auto rounded-3xl bg-rose-100 border border-rose-200 flex items-center justify-center text-3xl">
          💔
        </div>

        <div className="space-y-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-700">
            Kesempatan Habis
          </span>
          <h2 className="text-2xl font-extrabold text-slate-800">Jangan Menyerah, Terus Berlatih!</h2>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Organ gerak kita semakin kuat saat terus dilatih, begitu juga dengan ingatanmu! Ulas rangkuman materinya dan coba tantang kembali.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
          <div>
            <p className="text-xs text-slate-500 font-medium">Skor Diraih</p>
            <p className="text-lg font-extrabold text-amber-600 mt-0.5">{score}</p>
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Soal Terjawab</p>
            <p className="text-lg font-extrabold text-emerald-600 mt-0.5">{correctCount} / {currentIndex + 1}</p>
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Kombo Terbaik</p>
            <p className="text-lg font-extrabold text-orange-600 mt-0.5">{maxStreak}x</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            id="retry-quiz-btn"
            onClick={handleRestart}
            className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl text-sm transition shadow-sm flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Coba Lagi dari Awal</span>
          </button>

          <button
            id="review-material-on-loss-btn"
            onClick={() => onOpenMaterial(levelConfig.id)}
            className="flex-1 py-3 px-4 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 font-bold rounded-2xl text-sm transition flex items-center justify-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>Baca Rangkuman Materi</span>
          </button>
        </div>

        <button
          id="back-home-from-loss-btn"
          onClick={() => {
            playClickSound();
            onBackToHome();
          }}
          className="text-xs text-slate-500 hover:text-slate-800 font-semibold"
        >
          ← Kembali ke Beranda
        </button>
      </div>
    );
  }

  // ========================================================
  // VIEW: LEVEL COMPLETE / VICTORY SCREEN
  // ========================================================
  if (isFinished) {
    const finalAccuracy = Math.round((correctCount / totalQuestions) * 100);
    const starCount = finalAccuracy >= 90 ? 3 : finalAccuracy >= 70 ? 2 : 1;

    return (
      <div className="w-full max-w-xl mx-auto p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-xl text-center space-y-6 animate-in zoom-in-95 duration-200">
        {/* Star Rating Header */}
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2 text-3xl sm:text-4xl text-amber-400">
            {[1, 2, 3].map((star) => (
              <span key={star} className={star <= starCount ? 'opacity-100 scale-110 transition-transform' : 'opacity-25'}>
                ⭐
              </span>
            ))}
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-amber-100 text-amber-800 border border-amber-200">
            <Award className="w-4 h-4 text-amber-600" />
            <span>Level {levelConfig.id} Berhasil Diselesaikan!</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
            Luar Biasa, Kamu Hebat!
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
            Kamu telah menuntaskan seluruh 25 soal di {levelConfig.title} dengan pemahaman yang sangat membanggakan!
          </p>
        </div>

        {/* Badge Card */}
        <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-100 p-4 rounded-2xl border border-emerald-200 flex items-center justify-between gap-3 text-left">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-2xl shadow-xs border border-emerald-200 shrink-0">
              🎖️
            </div>
            <div>
              <p className="text-xs font-semibold text-emerald-700">Lencana Kehormatan Diraih:</p>
              <h3 className="font-extrabold text-emerald-950 text-base">{levelConfig.badge}</h3>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-600 text-white font-bold text-xs">
            Terbuka
          </span>
        </div>

        {/* Score Statistics Cards */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
            <p className="text-xs text-slate-500 font-medium">Total Skor</p>
            <p className="text-xl font-extrabold text-amber-600 mt-1">{score.toLocaleString('id-ID')}</p>
          </div>
          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
            <p className="text-xs text-slate-500 font-medium">Akurasi</p>
            <p className="text-xl font-extrabold text-emerald-600 mt-1">{finalAccuracy}%</p>
          </div>
          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
            <p className="text-xs text-slate-500 font-medium">Streak Terpanjang</p>
            <p className="text-xl font-extrabold text-orange-600 mt-1">{maxStreak}x 🔥</p>
          </div>
        </div>

        {/* Save to Leaderboard Box */}
        <div className="bg-amber-50/70 border border-amber-200 p-4 rounded-2xl text-left space-y-3">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-xs sm:text-sm">
            <Trophy className="w-4 h-4 text-amber-600" />
            <span>Catatkan Prestasimu ke Papan Peringkat Kelas:</span>
          </div>

          {!hasSavedScore ? (
            <form onSubmit={handleSaveToLeaderboard} className="flex gap-2">
              <input
                id="student-name-input"
                type="text"
                required
                maxLength={25}
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Ketik namamu di sini..."
                className="flex-1 px-3.5 py-2 text-xs sm:text-sm bg-white border border-amber-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
              />
              <button
                id="save-score-btn"
                type="submit"
                className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm rounded-xl transition shadow-xs whitespace-nowrap"
              >
                Simpan
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-between bg-emerald-100 text-emerald-900 px-3.5 py-2.5 rounded-xl border border-emerald-200 text-xs sm:text-sm font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Skor & namamu berhasil disimpan!</span>
              </div>
              <button
                id="view-leaderboard-after-save-btn"
                type="button"
                onClick={onOpenLeaderboard}
                className="text-xs text-emerald-800 underline font-bold"
              >
                Lihat Peringkat
              </button>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            id="play-again-level-btn"
            onClick={handleRestart}
            className="flex-1 py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-2xl text-xs sm:text-sm transition flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Main Lagi Level Ini</span>
          </button>

          <button
            id="finish-to-home-btn"
            onClick={() => {
              playClickSound();
              onBackToHome();
            }}
            className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl text-xs sm:text-sm transition shadow-sm flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Pilih Level Lain</span>
          </button>
        </div>
      </div>
    );
  }

  // ========================================================
  // VIEW: ACTIVE QUIZ GAMEPLAY
  // ========================================================
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4 sm:space-y-6 animate-in fade-in duration-200">
      {/* Top Bar: Progress, Hearts, Points, Streak, Sound Toggle */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          {/* Back & Level Title */}
          <div className="flex items-center gap-2">
            <button
              id="exit-quiz-btn"
              onClick={() => {
                if (confirm('Apakah kamu ingin kembali ke menu utama? Progres kuis level ini akan diulang.')) {
                  playClickSound();
                  onBackToHome();
                }
              }}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition"
              aria-label="Kembali ke beranda"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div>
              <span className="font-extrabold text-xs sm:text-sm text-slate-800">
                {levelConfig.title}
              </span>
              <span className="hidden sm:inline text-xs text-slate-400 ml-2">
                ({levelConfig.difficulty})
              </span>
            </div>
          </div>

          {/* Right Status Indicators */}
          <div className="flex items-center gap-3">
            {/* Hearts */}
            <div className="flex items-center gap-1 bg-rose-50 border border-rose-200 px-2.5 py-1 rounded-xl">
              {[1, 2, 3].map((h) => (
                <Heart
                  key={h}
                  className={`w-4 h-4 ${
                    h <= hearts
                      ? 'fill-rose-500 text-rose-500 scale-105'
                      : 'text-rose-200 fill-rose-100'
                  } transition-all duration-200`}
                />
              ))}
            </div>

            {/* Streak Multiplier */}
            {streak > 1 && (
              <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-xl text-amber-800 font-extrabold text-xs animate-in zoom-in-90">
                <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>Streak {streak}x</span>
              </div>
            )}

            {/* Points Badge */}
            <div className="bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-xl font-black text-xs sm:text-sm text-emerald-700">
              {score.toLocaleString('id-ID')} <span className="text-[10px] font-semibold text-emerald-600">Poin</span>
            </div>

            {/* Sound Mute Toggle */}
            <button
              id="sound-toggle-btn"
              onClick={toggleSound}
              className="p-1.5 rounded-xl border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition"
              aria-label={isMuted ? 'Nyalakan suara' : 'Bisukan suara'}
              title={isMuted ? 'Nyalakan suara' : 'Bisukan suara'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-rose-500" /> : <Volume2 className="w-4 h-4 text-emerald-600" />}
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-[11px] font-bold text-slate-500">
            <span>Soal {currentIndex + 1} dari {totalQuestions}</span>
            <span>Akurasi: {accuracy}%</span>
          </div>
          <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Question Card */}
      <div
        id="current-question-card"
        className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6 relative overflow-hidden"
      >
        {/* Category Header & Hint Button */}
        <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
              #{currentQ.id} • {currentQ.category}
            </span>
          </div>

          <button
            id="toggle-hint-btn"
            onClick={() => {
              playClickSound();
              setShowHint(!showHint);
            }}
            className="flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-3 py-1 rounded-xl transition"
          >
            <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
            <span>{showHint ? 'Tutup Petunjuk' : 'Bantuan Petunjuk'}</span>
          </button>
        </div>

        {/* Hint Box (if active) */}
        {showHint && (
          <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-900 flex items-start gap-2.5 animate-in fade-in duration-150">
            <HelpCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Petunjuk Konsep:</p>
              <p className="mt-0.5">{currentQ.hint}</p>
            </div>
          </div>
        )}

        {/* Main Question Text */}
        <div className="py-2">
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-800 leading-snug">
            {currentQ.question}
          </h3>
        </div>

        {/* 4 Interactive Option Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {shuffledOptions.map((opt, sIdx) => {
            const isCorrectOption = opt.originalIndex === currentQ.answerIndex;
            const isThisSelected = selectedOption === sIdx;

            let buttonStyle = 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200 hover:border-slate-300';
            let optionBadge = 'bg-slate-200 text-slate-700';

            if (isAnswered) {
              if (isCorrectOption) {
                buttonStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold ring-2 ring-emerald-300 shadow-xs';
                optionBadge = 'bg-emerald-600 text-white';
              } else if (isThisSelected && !isCorrectOption) {
                buttonStyle = 'bg-rose-50 border-rose-400 text-rose-950 font-medium ring-2 ring-rose-300';
                optionBadge = 'bg-rose-600 text-white';
              } else {
                buttonStyle = 'opacity-40 bg-slate-50 border-slate-200 text-slate-500';
              }
            }

            const letterLabel = ['A', 'B', 'C', 'D'][sIdx];

            return (
              <button
                key={sIdx}
                id={`quiz-option-btn-${sIdx}`}
                disabled={isAnswered}
                onClick={() => handleSelectOption(sIdx)}
                className={`min-h-[56px] p-3.5 sm:p-4 rounded-2xl border text-left text-xs sm:text-sm transition-all duration-150 flex items-start gap-3 disabled:cursor-default ${buttonStyle}`}
              >
                <span className={`w-7 h-7 rounded-xl font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 transition ${optionBadge}`}>
                  {letterLabel}
                </span>
                <span className="leading-snug self-center">{opt.text}</span>
              </button>
            );
          })}
        </div>

        {/* Instant Pedagogical Feedback Banner */}
        {isAnswered && (
          <div
            className={`p-4 sm:p-5 rounded-2xl border animate-in fade-in duration-150 space-y-3 ${
              selectedOption !== null && shuffledOptions[selectedOption]?.originalIndex === currentQ.answerIndex
                ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950'
                : 'bg-rose-50/90 border-rose-300 text-rose-950'
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 font-black text-sm sm:text-base">
                {selectedOption !== null && shuffledOptions[selectedOption]?.originalIndex === currentQ.answerIndex ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Jawaban Benar! Hebat Sekali! 🎉</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    <span>Belum Tepat, Terus Semangat! 💪</span>
                  </>
                )}
              </div>

              <button
                id="next-question-btn"
                onClick={handleNextQuestion}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm rounded-xl transition shadow-sm flex items-center gap-1.5"
              >
                <span>{currentIndex + 1 >= totalQuestions ? 'Lihat Hasil Akhir' : 'Lanjut Soal Berikutnya'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="text-xs sm:text-sm bg-white/80 p-3.5 rounded-xl border border-black/5 shadow-2xs leading-relaxed">
              <strong>Penjelasan Konsep:</strong> {currentQ.explanation}
            </div>

            {currentQ.funFact && (
              <div className="flex items-start gap-2 text-xs opacity-90">
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span><strong>Fakta Unik:</strong> {currentQ.funFact}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
