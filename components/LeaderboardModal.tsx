'use client';

import React, { useState } from 'react';
import { X, Trophy, Medal, Trash2, User, Search, Filter } from 'lucide-react';
import { LeaderboardEntry } from '@/lib/types';
import { playClickSound } from '@/lib/sound';
import { useLeaderboard, DEFAULT_LEADERBOARD } from '@/lib/leaderboardStore';

interface LeaderboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentEntryToAdd?: Partial<LeaderboardEntry> | null;
  onEntryAdded?: () => void;
}

export default function LeaderboardModal({ isOpen, onClose }: LeaderboardModalProps) {
  const [entries, setEntries] = useLeaderboard();
  const [filterLevel, setFilterLevel] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleReset = () => {
    if (confirm('Apakah Ibu/Bapak Guru yakin ingin mengosongkan riwayat papan peringkat untuk kelas ini?')) {
      playClickSound();
      setEntries(DEFAULT_LEADERBOARD);
    }
  };

  const filteredEntries = entries
    .filter((entry) => {
      if (filterLevel !== 'all' && entry.levelId.toString() !== filterLevel) {
        return false;
      }
      if (searchQuery.trim()) {
        return entry.name.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return true;
    })
    .sort((a, b) => b.score - a.score);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        id="leaderboard-modal-card"
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-xs shadow-inner">
              <Trophy className="w-5 h-5 text-amber-100" />
            </div>
            <div>
              <h2 className="text-lg font-bold leading-tight">Papan Peringkat Prestasi Siswa</h2>
              <p className="text-xs text-amber-100 font-medium">Bintang Kelas IPAS 6 SD - Organ Gerak Manusia</p>
            </div>
          </div>
          <button
            id="close-leaderboard-btn"
            onClick={() => {
              playClickSound();
              onClose();
            }}
            className="p-2 rounded-xl text-amber-100 hover:text-white hover:bg-white/20 transition"
            aria-label="Tutup papan peringkat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filters and Search Bar */}
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="search-student-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari nama siswa..."
              className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Filter className="w-4 h-4 text-slate-400 shrink-0" />
            <select
              id="filter-level-select"
              value={filterLevel}
              onChange={(e) => {
                playClickSound();
                setFilterLevel(e.target.value);
              }}
              className="text-xs sm:text-sm bg-white border border-slate-300 rounded-xl px-3 py-1.5 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <option value="all">Semua Level</option>
              <option value="1">Level 1 (Rangka)</option>
              <option value="2">Level 2 (Sendi)</option>
              <option value="3">Level 3 (Otot)</option>
              <option value="4">Level 4 (Kesehatan)</option>
            </select>
          </div>
        </div>

        {/* List Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-2.5 flex-1">
          {filteredEntries.length === 0 ? (
            <div className="text-center py-10 text-slate-400">
              <User className="w-10 h-10 mx-auto mb-2 opacity-40" />
              <p className="text-sm font-medium">Belum ada data siswa untuk filter ini.</p>
              <p className="text-xs text-slate-400 mt-1">Selesaikan kuis untuk mencatatkan nama di papan peringkat!</p>
            </div>
          ) : (
            filteredEntries.map((entry, idx) => {
              const rank = idx + 1;
              const isTop1 = rank === 1;
              const isTop2 = rank === 2;
              const isTop3 = rank === 3;

              return (
                <div
                  key={entry.id || idx}
                  className={`flex items-center justify-between p-3.5 rounded-xl border transition ${
                    isTop1
                      ? 'bg-amber-50/80 border-amber-300 shadow-xs'
                      : isTop2
                      ? 'bg-slate-50 border-slate-300'
                      : isTop3
                      ? 'bg-amber-50/30 border-orange-200'
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {/* Rank Badge */}
                    <div
                      className={`w-8 h-8 rounded-xl font-bold flex items-center justify-center text-xs shrink-0 ${
                        isTop1
                          ? 'bg-amber-400 text-amber-950 shadow-xs'
                          : isTop2
                          ? 'bg-slate-300 text-slate-800'
                          : isTop3
                          ? 'bg-orange-300 text-orange-950'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {isTop1 ? '🥇' : isTop2 ? '🥈' : isTop3 ? '🥉' : `#${rank}`}
                    </div>

                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-slate-800 text-sm">{entry.name}</span>
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                          {entry.badge}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-slate-500 mt-0.5">
                        <span>{entry.levelName}</span>
                        <span>•</span>
                        <span>Akurasi: {entry.accuracy}%</span>
                        {entry.streak > 0 && (
                          <>
                            <span>•</span>
                            <span className="text-amber-600 font-semibold">Streak: {entry.streak}x 🔥</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <p className="font-extrabold text-sm sm:text-base text-amber-600">
                      {entry.score.toLocaleString('id-ID')} <span className="text-xs font-semibold text-slate-500">Poin</span>
                    </p>
                    <p className="text-[11px] text-slate-400">{entry.date}</p>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-3.5 flex items-center justify-between">
          <button
            id="reset-leaderboard-btn"
            onClick={handleReset}
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-rose-600 font-medium transition"
            title="Reset data kelas"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Reset Data Kelas</span>
          </button>

          <button
            id="close-leaderboard-bottom-btn"
            onClick={() => {
              playClickSound();
              onClose();
            }}
            className="px-5 py-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl text-xs sm:text-sm transition shadow-xs"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
