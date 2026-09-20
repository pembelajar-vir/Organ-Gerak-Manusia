'use client';

import React from 'react';
import { X, BookOpen, Target, CheckCircle2, Award, HeartHandshake } from 'lucide-react';
import { playClickSound } from '@/lib/sound';

interface LearningModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LearningModal({ isOpen, onClose }: LearningModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        id="learning-modal-card"
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-xs">
              <BookOpen className="w-5 h-5 text-emerald-100" />
            </div>
            <div>
              <h2 className="text-lg font-bold leading-tight">Capaian & Tujuan Pembelajaran</h2>
              <p className="text-xs text-emerald-100 font-medium">IPAS Fase C - Kelas 6 Sekolah Dasar</p>
            </div>
          </div>
          <button
            id="close-learning-modal-btn"
            onClick={() => {
              playClickSound();
              onClose();
            }}
            className="p-2 rounded-xl text-emerald-100 hover:text-white hover:bg-white/20 transition"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700 text-sm leading-relaxed">
          {/* Topik & Sasaran */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
              <p className="text-xs text-slate-500 font-medium">Mata Pelajaran</p>
              <p className="font-bold text-slate-800 text-sm mt-0.5">IPAS</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
              <p className="text-xs text-slate-500 font-medium">Fase / Kelas</p>
              <p className="font-bold text-slate-800 text-sm mt-0.5">Fase C / Kelas 6</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
              <p className="text-xs text-slate-500 font-medium">Topik Utama</p>
              <p className="font-bold text-emerald-700 text-sm mt-0.5">Organ Gerak</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
              <p className="text-xs text-slate-500 font-medium">Bank Soal</p>
              <p className="font-bold text-emerald-700 text-sm mt-0.5">100 Soal (4 Level)</p>
            </div>
          </div>

          {/* Tujuan Pembelajaran Utama */}
          <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-4">
            <div className="flex items-center gap-2 text-emerald-800 font-bold mb-2">
              <Target className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Tujuan Pembelajaran (TP) Khusus:</span>
            </div>
            <p className="text-emerald-950 font-medium bg-white/80 p-3 rounded-lg border border-emerald-100 shadow-xs">
              &ldquo;Peserta didik mampu merefleksikan sistem organ gerak manusia (rangka, sendi, dan otot) yang dikaitkan dengan cara menjaga kesehatan tubuhnya dalam kehidupan sehari-hari.&rdquo;
            </p>
          </div>

          {/* Capaian Pembelajaran Resmi */}
          <div>
            <div className="flex items-center gap-2 text-slate-800 font-bold mb-2">
              <Award className="w-4 h-4 text-emerald-600" />
              <span>Capaian Pembelajaran (CP) Fase C:</span>
            </div>
            <p className="text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-justify">
              &ldquo;Merefleksikan sistem organ tubuh manusia yang dikaitkan dengan cara menjaga kesehatan tubuhnya; menganalisis hubungan antar komponen biotik dan abiotik, serta pengaruhnya terhadap ekosistem; menjelaskan fenomena gelombang bunyi dan cahaya dalam kehidupan sehari-hari; menghasilkan upaya penghematan energi, serta pemanfaatan sumber energi alternatif dari sumber daya yang ada di sekitarnya sebagai upaya mitigasi perubahan iklim; menjelaskan sistem tata surya, serta kaitannya dengan rotasi dan revolusi bumi...&rdquo;
            </p>
          </div>

          {/* Indikator Keberhasilan Siswa */}
          <div>
            <div className="flex items-center gap-2 text-slate-800 font-bold mb-3">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>Indikator Penguasaan Materi Peserta Didik:</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</span>
                <span><strong>Sistem Rangka (Level 1):</strong> Mengidentifikasi fungsi rangka, bagian-bagian rangka (kepala, badan, anggota gerak), dan jenis tulang berdasarkan bentuk serta zat penyusunnya.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</span>
                <span><strong>Sistem Persendian (Level 2):</strong> Menjelaskan fungsi sendi dan membedakan sendi mati, kaku, serta sendi gerak (engsel, peluru, putar, pelana, geser) beserta contoh lokasinya.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</span>
                <span><strong>Sistem Otot (Level 3):</strong> Menganalisis perbedaan karakteristik 3 jenis otot (otot lurik, otot polos, otot jantung) dan cara kerja antagonis (bisep-trisep).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">4</span>
                <span><strong>Kesehatan & Kebiasaan Baik (Level 4):</strong> Mendiagnosis kelainan organ gerak (lordosis, kifosis, skoliosis, osteoporosis, dll.) dan mempraktikkan cara merawatnya dalam keseharian.</span>
              </li>
            </ul>
          </div>

          {/* Pesan Motivasi Pedagogis */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-3.5 flex items-center gap-3">
            <HeartHandshake className="w-6 h-6 text-amber-600 shrink-0" />
            <p className="text-xs text-amber-900 leading-snug">
              <strong>Catatan untuk Guru & Siswa:</strong> Setiap soal dilengkapi petunjuk (hint), fakta unik anatomi, dan pembahasan konsep lengkap agar belajar menjadi menyenangkan, berpusat pada siswa, dan bermakna!
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex justify-end">
          <button
            id="understood-learning-btn"
            onClick={() => {
              playClickSound();
              onClose();
            }}
            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm transition shadow-sm"
          >
            Saya Siap Belajar!
          </button>
        </div>
      </div>
    </div>
  );
}
