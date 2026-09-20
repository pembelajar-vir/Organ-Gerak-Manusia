'use client';

import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Link2,
  Zap,
  HeartPulse,
  Trophy,
  BookOpen,
  Target,
  Play,
  Download,
  Volume2,
  VolumeX,
  Sparkles,
  Award,
  ChevronRight,
  ArrowRight,
  Flame,
  Layers,
  Heart,
  Music,
  UserCheck
} from 'lucide-react';
import { LEVEL_CONFIGS, QUESTIONS } from '@/data/questions';
import { LevelConfig } from '@/lib/types';
import { 
  getSoundMuted, 
  setSoundMuted, 
  playClickSound, 
  toggleBgm, 
  useBgmStatus
} from '@/lib/sound';
import { generateStandaloneHTML } from '@/lib/standaloneGenerator';
import ConfettiCanvas from '@/components/ConfettiCanvas';
import LearningModal from '@/components/LearningModal';
import MaterialSummaryModal from '@/components/MaterialSummaryModal';
import LeaderboardModal from '@/components/LeaderboardModal';
import { DeveloperModal } from '@/components/DeveloperModal';
import FlashcardStudyMode from '@/components/FlashcardStudyMode';
import QuizView from '@/components/QuizView';

type AppView = 'home' | 'quiz' | 'study';

export default function HomePage() {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [selectedLevelId, setSelectedLevelId] = useState<number>(1);
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(() => {
    return getSoundMuted();
  });
  const isBgmOn = useBgmStatus();
  const [confettiActive, setConfettiActive] = useState<boolean>(false);

  // Modals state
  const [isLearningModalOpen, setIsLearningModalOpen] = useState<boolean>(false);
  const [isMaterialModalOpen, setIsMaterialModalOpen] = useState<boolean>(false);
  const [isLeaderboardModalOpen, setIsLeaderboardModalOpen] = useState<boolean>(false);
  const [isDeveloperModalOpen, setIsDeveloperModalOpen] = useState<boolean>(false);
  const [materialInitialTab, setMaterialInitialTab] = useState<number>(1);

  const toggleSound = () => {
    const next = !isAudioMuted;
    setIsAudioMuted(next);
    setSoundMuted(next);
  };

  const handleToggleBgm = () => {
    playClickSound();
    toggleBgm();
  };

  const triggerConfetti = () => {
    setConfettiActive(true);
    setTimeout(() => {
      setConfettiActive(false);
    }, 4500);
  };

  const handleStartQuiz = (lvlId: number) => {
    playClickSound();
    setSelectedLevelId(lvlId);
    setCurrentView('quiz');
  };

  const handleStartStudy = (lvlId: number) => {
    playClickSound();
    setSelectedLevelId(lvlId);
    setCurrentView('study');
  };

  const handleOpenMaterial = (tabIndex: number = 1) => {
    playClickSound();
    setMaterialInitialTab(tabIndex);
    setIsMaterialModalOpen(true);
  };

  const handleDownloadStandalone = () => {
    playClickSound();
    const htmlContent = generateStandaloneHTML();
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Flashcard_Organ_Gerak_Manusia_Kelas6_SD.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    triggerConfetti();
  };

  const currentLevelConfig: LevelConfig =
    LEVEL_CONFIGS.find((l) => l.id === selectedLevelId) || LEVEL_CONFIGS[0];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col antialiased">
      {/* Dynamic Pure Canvas Confetti */}
      <ConfettiCanvas active={confettiActive} />

      {/* Global Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
          {/* Logo Brand */}
          <div
            id="brand-logo-btn"
            onClick={() => {
              playClickSound();
              setCurrentView('home');
            }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition">
              {/* Friendly Bone/Explorer SVG Icon */}
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 10c.7-.7 1.6-1 2.5-1a3.5 3.5 0 0 1 0 7c-.9 0-1.8-.3-2.5-1l-10 10c-.7.7-1.6 1-2.5 1a3.5 3.5 0 0 1 0-7c.9 0 1.8.3 2.5 1l10-10z" />
                <path d="m14 7 3 3" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-extrabold text-sm sm:text-base text-slate-900 leading-tight">
                  Flashcard Organ Gerak
                </h1>
                <span className="hidden md:inline-block px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  IPAS Kelas 6 SD
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium">
                100 Soal Tantangan Berjenjang • Kurikulum Merdeka
              </p>
            </div>
          </div>

          {/* Action Header Nav */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              id="nav-learning-goals-btn"
              onClick={() => {
                playClickSound();
                setIsLearningModalOpen(true);
              }}
              className="px-2.5 sm:px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition shadow-2xs"
              title="Capaian & Tujuan Pembelajaran"
            >
              <Target className="w-3.5 h-3.5 text-emerald-600" />
              <span className="hidden md:inline">Tujuan</span>
            </button>

            <button
              id="nav-material-summary-btn"
              onClick={() => handleOpenMaterial(1)}
              className="px-2.5 sm:px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition shadow-2xs"
              title="Rangkuman Materi"
            >
              <BookOpen className="w-3.5 h-3.5 text-blue-600" />
              <span className="hidden md:inline">Rangkuman</span>
            </button>

            <button
              id="nav-leaderboard-btn"
              onClick={() => {
                playClickSound();
                setIsLeaderboardModalOpen(true);
              }}
              className="px-2.5 sm:px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition shadow-2xs"
              title="Papan Peringkat"
            >
              <Trophy className="w-3.5 h-3.5 text-amber-500" />
              <span className="hidden md:inline">Peringkat</span>
            </button>

            <button
              id="nav-developer-btn"
              onClick={() => {
                playClickSound();
                setIsDeveloperModalOpen(true);
              }}
              className="px-2.5 sm:px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-teal-50 text-slate-700 hover:text-teal-800 font-bold text-xs flex items-center gap-1.5 transition shadow-2xs"
              title="Informasi Pengembang"
            >
              <UserCheck className="w-3.5 h-3.5 text-teal-600" />
              <span className="hidden sm:inline">Pengembang</span>
            </button>

            {/* Background Music BGM Toggle */}
            <button
              id="header-bgm-toggle-btn"
              onClick={handleToggleBgm}
              className={`px-2.5 py-1.5 rounded-xl border font-bold text-xs flex items-center gap-1.5 transition shadow-2xs ${
                isBgmOn
                  ? 'bg-emerald-500 border-emerald-600 text-white shadow-emerald-200'
                  : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
              aria-label={isBgmOn ? 'Matikan Musik Latar' : 'Nyalakan Musik Latar'}
              title={isBgmOn ? 'Musik Latar Aktif (Klik untuk Matikan)' : 'Nyalakan Musik Latar'}
            >
              <Music className={`w-3.5 h-3.5 ${isBgmOn ? 'animate-pulse' : 'text-slate-400'}`} />
              <span className="hidden lg:inline">{isBgmOn ? 'Musik: On' : 'Musik: Off'}</span>
            </button>

            {/* Sound FX Toggle */}
            <button
              id="header-sound-toggle-btn"
              onClick={toggleSound}
              className="p-2 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition"
              aria-label={isAudioMuted ? 'Nyalakan Efek Suara' : 'Bisukan Efek Suara'}
              title={isAudioMuted ? 'Nyalakan Efek Suara' : 'Bisukan Efek Suara'}
            >
              {isAudioMuted ? <VolumeX className="w-4 h-4 text-rose-500" /> : <Volume2 className="w-4 h-4 text-emerald-600" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Body Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* VIEW 1: HOME DASHBOARD */}
        {currentView === 'home' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* HERO SECTION WITH FRIENDLY SVG MASCOT */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white p-6 sm:p-10 shadow-xl">
              {/* Background ambient shapes */}
              <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-1/3 translate-y-16 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Text Content */}
                <div className="space-y-4 text-center md:text-left max-w-xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-extrabold text-emerald-100">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>Petualangan Sains Seru • Fase C Kelas 6</span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
                    Jelajahi Rahasia <br />
                    <span className="text-amber-300">Organ Gerak Manusia!</span>
                  </h2>

                  <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed font-medium">
                    Temukan kehebatan <strong>206 tulang rangka</strong>, beragam <strong>sendi penggerak</strong>, serta kekuatan <strong>otot aktif</strong>. Uji pengetahuanmu melalui <strong>100 soal kuis interaktif</strong> berjenjang dan raih lencana terbaikmu!
                  </p>

                  <div className="flex items-center justify-center md:justify-start gap-3 pt-2 flex-wrap">
                    <button
                      id="hero-start-quiz-btn"
                      onClick={() => handleStartQuiz(1)}
                      className="px-6 py-3 bg-white text-emerald-800 hover:bg-emerald-50 font-extrabold text-xs sm:text-sm rounded-2xl shadow-lg transition transform hover:-translate-y-0.5 flex items-center gap-2"
                    >
                      <Play className="w-4 h-4 fill-emerald-800" />
                      <span>Mulai Petualangan (Level 1)</span>
                    </button>

                    <button
                      id="hero-study-mode-btn"
                      onClick={() => handleStartStudy(1)}
                      className="px-5 py-3 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-xs sm:text-sm rounded-2xl transition flex items-center gap-2 backdrop-blur-xs"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Mode Belajar Flashcard</span>
                    </button>

                    <button
                      id="hero-developer-btn"
                      onClick={() => {
                        playClickSound();
                        setIsDeveloperModalOpen(true);
                      }}
                      className="px-5 py-3 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-xs sm:text-sm rounded-2xl transition flex items-center gap-2 backdrop-blur-xs"
                    >
                      <UserCheck className="w-4 h-4 text-emerald-200" />
                      <span>Info Pengembang</span>
                    </button>
                  </div>
                </div>

                {/* Friendly Anatomical Cartoon Mascot (Pure Inline SVG) */}
                <div className="shrink-0 flex items-center justify-center">
                  <div className="relative w-44 h-44 sm:w-56 sm:h-56 bg-white/15 rounded-3xl p-4 backdrop-blur-md border border-white/25 flex items-center justify-center shadow-2xl">
                    <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
                      {/* Character Body / Skeleton Silhouette Friendly Style */}
                      <circle cx="100" cy="55" r="32" fill="#FEF3C7" stroke="#065F46" strokeWidth="4" />
                      {/* Smiling Face */}
                      <circle cx="90" cy="50" r="4" fill="#065F46" />
                      <circle cx="110" cy="50" r="4" fill="#065F46" />
                      <path d="M 90 62 Q 100 72 110 62" fill="none" stroke="#065F46" strokeWidth="3.5" strokeLinecap="round" />
                      {/* Cute Headband / Magnifier */}
                      <path d="M 70 42 Q 100 32 130 42" fill="none" stroke="#10B981" strokeWidth="6" strokeLinecap="round" />
                      <circle cx="126" cy="38" r="8" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="2.5" />
                      {/* Torso with Ribs illustration */}
                      <rect x="84" y="90" width="32" height="52" rx="12" fill="#059669" stroke="#064E3B" strokeWidth="3" />
                      {/* Friendly rib bones lines */}
                      <line x1="90" y1="102" x2="110" y2="102" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                      <line x1="90" y1="112" x2="110" y2="112" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                      <line x1="92" y1="122" x2="108" y2="122" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                      {/* Spine segment */}
                      <line x1="100" y1="92" x2="100" y2="136" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                      {/* Arms waving */}
                      <path d="M 84 96 Q 55 90 48 68" fill="none" stroke="#FEF3C7" strokeWidth="10" strokeLinecap="round" />
                      <circle cx="48" cy="68" r="7" fill="#FEF3C7" />
                      <path d="M 116 96 Q 145 102 152 75" fill="none" stroke="#FEF3C7" strokeWidth="10" strokeLinecap="round" />
                      <circle cx="152" cy="75" r="7" fill="#FEF3C7" />
                      {/* Legs in active jumping pose */}
                      <path d="M 90 142 Q 80 165 72 185" fill="none" stroke="#FEF3C7" strokeWidth="10" strokeLinecap="round" />
                      <rect x="64" y="180" width="16" height="8" rx="4" fill="#3B82F6" />
                      <path d="M 110 142 Q 120 165 130 185" fill="none" stroke="#FEF3C7" strokeWidth="10" strokeLinecap="round" />
                      <rect x="122" y="180" width="16" height="8" rx="4" fill="#3B82F6" />
                      {/* Sparkling heart / health badge */}
                      <circle cx="138" cy="120" r="14" fill="#EF4444" stroke="#FFFFFF" strokeWidth="2.5" />
                      <path d="M 134 118 Q 138 114 142 118 Q 138 124 138 126 Q 138 124 134 118" fill="#FFFFFF" />
                    </svg>
                    <div className="absolute -bottom-2 px-3 py-1 rounded-full bg-amber-400 text-amber-950 font-black text-[10px] shadow-sm tracking-wide">
                      SAHABAT GERAK
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* QUICK STATS & EDUCATIONAL HIGHLIGHTS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div
                onClick={() => handleOpenMaterial(1)}
                className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-xs transition cursor-pointer group"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs mb-2 group-hover:scale-110 transition">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="font-extrabold text-slate-800 text-sm">206 Ruas Tulang</h3>
                <p className="text-xs text-slate-500 mt-0.5">Alat gerak pasif pelindung organ vital tubuh</p>
              </div>

              <div
                onClick={() => handleOpenMaterial(2)}
                className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xs transition cursor-pointer group"
              >
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs mb-2 group-hover:scale-110 transition">
                  <Link2 className="w-4 h-4" />
                </div>
                <h3 className="font-extrabold text-slate-800 text-sm">5 Sendi Gerak</h3>
                <p className="text-xs text-slate-500 mt-0.5">Engsel, peluru, putar, pelana, dan sendi geser</p>
              </div>

              <div
                onClick={() => handleOpenMaterial(3)}
                className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-xs transition cursor-pointer group"
              >
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs mb-2 group-hover:scale-110 transition">
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="font-extrabold text-slate-800 text-sm">3 Jenis Otot</h3>
                <p className="text-xs text-slate-500 mt-0.5">Otot lurik (sadar), otot polos, dan otot jantung</p>
              </div>

              <div
                onClick={() => handleOpenMaterial(4)}
                className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-rose-300 hover:shadow-xs transition cursor-pointer group"
              >
                <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-xs mb-2 group-hover:scale-110 transition">
                  <HeartPulse className="w-4 h-4" />
                </div>
                <h3 className="font-extrabold text-slate-800 text-sm">Pola Hidup Sehat</h3>
                <p className="text-xs text-slate-500 mt-0.5">Cegah lordosis, kifosis, skoliosis & osteoporosis</p>
              </div>
            </div>

            {/* LEVEL SELECTION SECTION (100 SOAL) */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                    Pilih Level Tantangan Kuis
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Tersedia 100 soal berjenjang dari Mudah, Sedang, hingga Menantang
                  </p>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                  Total 100 Soal
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {LEVEL_CONFIGS.map((lvl) => {
                  const tagColors: Record<string, string> = {
                    Mudah: 'bg-emerald-100 text-emerald-800 border-emerald-200',
                    Sedang: 'bg-blue-100 text-blue-800 border-blue-200',
                    Menantang: 'bg-rose-100 text-rose-800 border-rose-200',
                  };

                  return (
                    <div
                      key={lvl.id}
                      id={`level-card-${lvl.id}`}
                      className="bg-white rounded-3xl p-5 border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[11px] font-extrabold border ${
                              tagColors[lvl.difficulty]
                            }`}
                          >
                            {lvl.difficulty}
                          </span>
                          <span className="text-xs font-bold text-slate-400">25 Soal</span>
                        </div>

                        <div>
                          <h4 className="font-extrabold text-base text-slate-900 group-hover:text-emerald-700 transition leading-snug">
                            {lvl.title}
                          </h4>
                          <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                            {lvl.subtitle}
                          </p>
                        </div>

                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2">
                          <Award className="w-4 h-4 text-amber-500 shrink-0" />
                          <div className="text-[11px] leading-tight">
                            <span className="text-slate-400">Lencana: </span>
                            <span className="font-bold text-slate-700">{lvl.badge}</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 mt-3 border-t border-slate-100 flex items-center gap-2">
                        <button
                          id={`start-quiz-lvl-${lvl.id}`}
                          onClick={() => handleStartQuiz(lvl.id)}
                          className="flex-1 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition shadow-2xs flex items-center justify-center gap-1.5"
                        >
                          <Play className="w-3.5 h-3.5 fill-white" />
                          <span>Mulai Kuis</span>
                        </button>

                        <button
                          id={`study-flashcard-lvl-${lvl.id}`}
                          onClick={() => handleStartStudy(lvl.id)}
                          className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition"
                          title="Buka Flashcard Belajar"
                        >
                          <Layers className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* TEACHER OFFLINE SINGLE-FILE HTML EXPORT BANNER */}
            <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-7 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
              <div className="space-y-1 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 text-indigo-300 font-bold text-xs">
                  <Download className="w-3.5 h-3.5" />
                  <span>Fitur Mandiri Khusus Guru & Laboratorium Komputer</span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white">
                  Unduh Aplikasi Versi Single-File HTML
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                  Dapatkan 1 berkas HTML mandiri lengkap (berisi seluruh 100 soal, suara Web Audio, dan tampilan interaktif) untuk dipasang di komputer sekolah tanpa memerlukan koneksi internet!
                </p>
              </div>

              <button
                id="download-standalone-html-btn"
                onClick={handleDownloadStandalone}
                className="shrink-0 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs sm:text-sm rounded-2xl transition shadow-md flex items-center gap-2 transform hover:scale-105"
              >
                <Download className="w-4 h-4" />
                <span>Unduh File</span>
              </button>
            </div>
          </div>
        )}

        {/* VIEW 2: QUIZ VIEW */}
        {currentView === 'quiz' && (
          <QuizView
            levelConfig={currentLevelConfig}
            allQuestions={QUESTIONS}
            onFinishQuiz={() => {}}
            onBackToHome={() => setCurrentView('home')}
            onOpenMaterial={(lvl) => handleOpenMaterial(lvl)}
            onOpenLeaderboard={() => setIsLeaderboardModalOpen(true)}
            triggerConfetti={triggerConfetti}
          />
        )}

        {/* VIEW 3: FLASHCARD STUDY / FLIP MODE */}
        {currentView === 'study' && (
          <FlashcardStudyMode
            questions={QUESTIONS}
            currentLevelId={selectedLevelId}
            onSelectLevel={(lvl) => setSelectedLevelId(lvl)}
            onStartQuizWithLevel={(lvl) => {
              setSelectedLevelId(lvl);
              setCurrentView('quiz');
            }}
            onBackToHome={() => setCurrentView('home')}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500 font-medium">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            Media Pembelajaran Interaktif IPAS Kelas 6 SD • Kurikulum Merdeka (Fase C)
          </p>
          <div className="flex items-center gap-3 text-xs font-semibold text-slate-600 flex-wrap justify-center">
            <button onClick={() => setIsLearningModalOpen(true)} className="hover:text-emerald-700 transition">
              Capaian & Tujuan
            </button>
            <span>•</span>
            <button onClick={() => handleOpenMaterial(1)} className="hover:text-blue-700 transition">
              Rangkuman Materi
            </button>
            <span>•</span>
            <button onClick={() => setIsLeaderboardModalOpen(true)} className="hover:text-amber-700 transition">
              Papan Peringkat
            </button>
            <span>•</span>
            <button
              onClick={() => {
                playClickSound();
                setIsDeveloperModalOpen(true);
              }}
              className="hover:text-teal-700 font-bold text-teal-700 transition"
            >
              Profil Pengembang
            </button>
          </div>
        </div>
      </footer>

      {/* MODALS */}
      <LearningModal
        isOpen={isLearningModalOpen}
        onClose={() => setIsLearningModalOpen(false)}
      />

      <MaterialSummaryModal
        isOpen={isMaterialModalOpen}
        initialTab={materialInitialTab}
        onClose={() => setIsMaterialModalOpen(false)}
      />

      <LeaderboardModal
        isOpen={isLeaderboardModalOpen}
        onClose={() => setIsLeaderboardModalOpen(false)}
      />

      <DeveloperModal
        isOpen={isDeveloperModalOpen}
        onClose={() => setIsDeveloperModalOpen(false)}
      />
    </div>
  );
}
