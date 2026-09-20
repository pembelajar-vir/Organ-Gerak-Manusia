'use client';

import React, { useState } from 'react';
import { X, BookOpen, ShieldCheck, Link2, Zap, HeartPulse, Sparkles, CheckCircle2 } from 'lucide-react';
import { playClickSound } from '@/lib/sound';

interface MaterialSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: number;
}

export default function MaterialSummaryModal({ isOpen, onClose, initialTab = 1 }: MaterialSummaryModalProps) {
  const [activeTab, setActiveTab] = useState<number>(initialTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        id="material-modal-card"
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-xs">
              <BookOpen className="w-5 h-5 text-blue-100" />
            </div>
            <div>
              <h2 className="text-lg font-bold leading-tight">Rangkuman Materi Organ Gerak</h2>
              <p className="text-xs text-blue-100 font-medium">Panduan Belajar Cepat IPAS Kelas 6 SD</p>
            </div>
          </div>
          <button
            id="close-material-modal-btn"
            onClick={() => {
              playClickSound();
              onClose();
            }}
            className="p-2 rounded-xl text-blue-100 hover:text-white hover:bg-white/20 transition"
            aria-label="Tutup ringkasan materi"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-slate-200 bg-slate-50 text-xs sm:text-sm font-semibold">
          <button
            id="tab-materi-1"
            onClick={() => {
              playClickSound();
              setActiveTab(1);
            }}
            className={`flex items-center justify-center gap-1.5 py-3 px-2 border-b-2 transition ${
              activeTab === 1
                ? 'border-emerald-500 text-emerald-700 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>1. Rangka</span>
          </button>

          <button
            id="tab-materi-2"
            onClick={() => {
              playClickSound();
              setActiveTab(2);
            }}
            className={`flex items-center justify-center gap-1.5 py-3 px-2 border-b-2 transition ${
              activeTab === 2
                ? 'border-blue-500 text-blue-700 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Link2 className="w-4 h-4 text-blue-600" />
            <span>2. Sendi</span>
          </button>

          <button
            id="tab-materi-3"
            onClick={() => {
              playClickSound();
              setActiveTab(3);
            }}
            className={`flex items-center justify-center gap-1.5 py-3 px-2 border-b-2 transition ${
              activeTab === 3
                ? 'border-amber-500 text-amber-700 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Zap className="w-4 h-4 text-amber-600" />
            <span>3. Otot</span>
          </button>

          <button
            id="tab-materi-4"
            onClick={() => {
              playClickSound();
              setActiveTab(4);
            }}
            className={`flex items-center justify-center gap-1.5 py-3 px-2 border-b-2 transition ${
              activeTab === 4
                ? 'border-rose-500 text-rose-700 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <HeartPulse className="w-4 h-4 text-rose-600" />
            <span>4. Kesehatan</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-slate-700 text-xs sm:text-sm leading-relaxed">
          {/* TAB 1: RANGKA & TULANG */}
          {activeTab === 1 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4">
                <h3 className="font-bold text-emerald-900 text-base mb-1 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  Sistem Rangka Manusia (Alat Gerak Pasif)
                </h3>
                <p className="text-emerald-800">
                  Tulang disebut <strong>alat gerak pasif</strong> karena tidak dapat bergerak sendiri tanpa ditarik oleh otot. Jumlah tulang orang dewasa adalah <strong>206 ruas tulang</strong>.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="border border-slate-200 rounded-xl p-3.5 bg-slate-50">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-1.5 text-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    4 Fungsi Utama Rangka:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    <li>• <strong>Menegakkan & memberi bentuk tubuh</strong>.</li>
                    <li>• <strong>Melindungi organ vital</strong> (otak oleh tengkorak; jantung & paru-paru oleh rusuk & dada).</li>
                    <li>• <strong>Tempat melekatnya otot-otot</strong> rangka.</li>
                    <li>• <strong>Pabrik sel darah merah</strong> di sumsum tulang merah.</li>
                  </ul>
                </div>

                <div className="border border-slate-200 rounded-xl p-3.5 bg-slate-50">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-1.5 text-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Bentuk-Bentuk Tulang:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    <li>• <strong>Tulang Pipa:</strong> Silinder panjang berongga (tulang paha, lengan atas, betis, hasta).</li>
                    <li>• <strong>Tulang Pipih:</strong> Lempengan tipis gepeng (tulang belikat, rusuk, dada, panggul).</li>
                    <li>• <strong>Tulang Pendek:</strong> Bulat/kubus kecil (pergelangan tangan & kaki).</li>
                    <li>• <strong>Tulang Tak Beraturan:</strong> Bentuk rumit (ruas tulang belakang).</li>
                  </ul>
                </div>
              </div>

              <div className="border border-emerald-100 rounded-xl p-3.5 bg-emerald-50/50">
                <h4 className="font-bold text-emerald-900 mb-1 text-sm">Jenis Tulang Berdasarkan Penyusun:</h4>
                <p className="text-xs text-emerald-950">
                  1. <strong>Tulang Rawan (Kartilago):</strong> Mengandung banyak zat perekat kolagen, lentur (contoh: daun telinga, cuping hidung, persendian).<br />
                  2. <strong>Tulang Keras (Osteon):</strong> Mengandung banyak kalsium karbonat dan fosfor, sangat padat dan keras.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: SENDI */}
          {activeTab === 2 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-4">
                <h3 className="font-bold text-blue-900 text-base mb-1 flex items-center gap-2">
                  <Link2 className="w-5 h-5 text-blue-600" />
                  Sistem Persendian (Artikulasi)
                </h3>
                <p className="text-blue-800">
                  Sendi adalah <strong>penghubung antartulang</strong> yang memungkinkan gerakan. Di dalamnya terdapat cairan pelumas alami (<strong>cairan sinovial</strong>) dan pita pengikat tulang (<strong>ligamen</strong>).
                </p>
              </div>

              <div className="space-y-2.5">
                <h4 className="font-bold text-slate-900 text-sm">3 Golongan Sendi:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                    <p className="font-bold text-slate-800">1. Sendi Mati (Sinartrosis)</p>
                    <p className="text-slate-600 mt-1">Sama sekali tidak dapat bergerak. Contoh: hubungan antartulang tengkorak (sutura).</p>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                    <p className="font-bold text-slate-800">2. Sendi Kaku (Amfiartrosis)</p>
                    <p className="text-slate-600 mt-1">Gerakan terbatas. Contoh: ruas tulang belakang & sambungan rusuk ke dada.</p>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                    <p className="font-bold text-slate-800">3. Sendi Gerak (Diartrosis)</p>
                    <p className="text-slate-600 mt-1">Dapat digerakkan secara leluasa ke berbagai arah.</p>
                  </div>
                </div>
              </div>

              <div className="border border-blue-200 rounded-xl p-3.5 bg-blue-50/40">
                <h4 className="font-bold text-blue-950 mb-2 text-sm">5 Macam Sendi Gerak Populer:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="bg-white p-2.5 rounded-lg border border-blue-100 shadow-2xs">
                    <p className="font-bold text-blue-800">📌 Sendi Engsel (1 Arah)</p>
                    <p className="text-slate-600">Seperti pintu membuka & menutup. Lokasi: <strong>siku, lutut, dan ruas jari</strong>.</p>
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-blue-100 shadow-2xs">
                    <p className="font-bold text-blue-800">📌 Sendi Peluru (Segala Arah)</p>
                    <p className="text-slate-600">Paling bebas. Lokasi: <strong>bahu dengan lengan atas</strong> & <strong>panggul dengan paha</strong>.</p>
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-blue-100 shadow-2xs">
                    <p className="font-bold text-blue-800">📌 Sendi Putar (Memutar)</p>
                    <p className="text-slate-600">Satu tulang memutari poros. Lokasi: <strong>tulang leher dengan tengkorak</strong>.</p>
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-blue-100 shadow-2xs">
                    <p className="font-bold text-blue-800">📌 Sendi Pelana (2 Arah)</p>
                    <p className="text-slate-600">Maju-mundur & samping. Lokasi: <strong>pangkal ibu jari dengan telapak tangan</strong>.</p>
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-blue-100 shadow-2xs col-span-1 sm:col-span-2">
                    <p className="font-bold text-blue-800">📌 Sendi Geser (Menggeser Datar)</p>
                    <p className="text-slate-600">Menggeser halus antartulang pipih. Lokasi: <strong>pergelangan tangan & pergelangan kaki</strong>.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: OTOT */}
          {activeTab === 3 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4">
                <h3 className="font-bold text-amber-900 text-base mb-1 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-600" />
                  Sistem Otot Manusia (Alat Gerak Aktif)
                </h3>
                <p className="text-amber-900">
                  Otot disebut <strong>alat gerak aktif</strong> karena memiliki kemampuan <strong>kontraksi</strong> (memendek, membesar, mengeras) dan <strong>relaksasi</strong> (memanjang, mengendur, lemas).
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="border border-slate-200 rounded-xl p-3 bg-slate-50">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 text-xs sm:text-sm mb-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                    Otot Lurik (Rangka)
                  </div>
                  <ul className="space-y-1 text-xs text-slate-600">
                    <li>• Menempel pada rangka</li>
                    <li>• Bekerja <strong>sadar (volunter)</strong></li>
                    <li>• Bentuk silinder berlurik</li>
                    <li>• Inti banyak di tepi</li>
                    <li>• Reaksi cepat, cepat lelah</li>
                  </ul>
                </div>

                <div className="border border-slate-200 rounded-xl p-3 bg-slate-50">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 text-xs sm:text-sm mb-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    Otot Polos
                  </div>
                  <ul className="space-y-1 text-xs text-slate-600">
                    <li>• Di organ dalam (lambung, usus)</li>
                    <li>• Bekerja <strong>tidak sadar (involunter)</strong></li>
                    <li>• Bentuk gelendong runcing</li>
                    <li>• Inti 1 di tengah</li>
                    <li>• Lambat, tidak mudah lelah</li>
                  </ul>
                </div>

                <div className="border border-slate-200 rounded-xl p-3 bg-slate-50">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 text-xs sm:text-sm mb-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                    Otot Jantung
                  </div>
                  <ul className="space-y-1 text-xs text-slate-600">
                    <li>• Hanya di dinding jantung</li>
                    <li>• Bekerja <strong>otomatis tanpa henti</strong></li>
                    <li>• Bentuk berlurik & bercabang</li>
                    <li>• Inti 1-2 di tengah</li>
                    <li>• Sangat tahan lama</li>
                  </ul>
                </div>
              </div>

              <div className="border border-amber-200 rounded-xl p-3.5 bg-amber-50/50">
                <h4 className="font-bold text-amber-950 mb-1 text-sm">Gerak Antagonis Bisep & Trisep:</h4>
                <p className="text-xs text-amber-950 leading-relaxed">
                  • <strong>Saat Menekuk Lengan (Fleksi):</strong> Otot Bisep (depan) <em>berkontraksi</em> (mengeras/memendek), otot Trisep (belakang) <em>berelaksasi</em> (mengendur).<br />
                  • <strong>Saat Meluruskan Lengan (Ekstensi):</strong> Otot Trisep <em>berkontraksi</em>, otot Bisep <em>berelaksasi</em>.
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: KELAINAN & KESEHATAN */}
          {activeTab === 4 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="bg-rose-50/70 border border-rose-200 rounded-xl p-4">
                <h3 className="font-bold text-rose-900 text-base mb-1 flex items-center gap-2">
                  <HeartPulse className="w-5 h-5 text-rose-600" />
                  Kelainan & Cara Menjaga Kesehatan Organ Gerak
                </h3>
                <p className="text-rose-900">
                  Kelainan organ gerak dapat terjadi karena <strong>kebiasaan postur tubuh yang salah</strong>, kekurangan gizi, kecelakaan, maupun infeksi kuman.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="border border-slate-200 rounded-xl p-3 bg-slate-50">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-2 text-rose-700">
                    Kelainan Tulang Belakang:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    <li>• <strong>Lordosis:</strong> Pinggang melengkung maju ke depan.</li>
                    <li>• <strong>Kifosis:</strong> Punggung melengkung bungkuk ke belakang.</li>
                    <li>• <strong>Skoliosis:</strong> Tulang belakang meliuk ke samping seperti huruf S.</li>
                  </ul>
                </div>

                <div className="border border-slate-200 rounded-xl p-3 bg-slate-50">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-2 text-rose-700">
                    Penyakit & Cedera Tulang/Otot:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    <li>• <strong>Osteoporosis:</strong> Tulang keropos karena kurang kalsium.</li>
                    <li>• <strong>Rakhitis:</strong> Kaki O atau X akibat kurang vit D & kalsium.</li>
                    <li>• <strong>Fraktura:</strong> Patah tulang | <strong>Fisura:</strong> Retak tulang.</li>
                    <li>• <strong>Atrofi:</strong> Otot mengecil | <strong>Tetanus:</strong> Kejang otot.</li>
                  </ul>
                </div>
              </div>

              <div className="border border-emerald-200 rounded-xl p-3.5 bg-emerald-50/60">
                <h4 className="font-bold text-emerald-950 mb-1.5 text-sm flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  6 Langkah Nyata Menjaga Kesehatan Organ Gerak:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-emerald-950">
                  <p>1. Duduk tegak saat belajar, tidak membungkuk atau miring.</p>
                  <p>2. Konsumsi makanan kaya kalsium (susu, keju, teri, brokoli).</p>
                  <p>3. Berjemur matahari pagi 10-15 menit (vitamin D alami).</p>
                  <p>4. Selalu pemanasan & peregangan sebelum olahraga.</p>
                  <p>5. Angkat beban dari lantai dengan menekuk lutut, bukan pinggang.</p>
                  <p>6. Batasi beban tas ransel sekolah maksimal 10-15% berat badan.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Kuasai konsepnya untuk meraih skor tertinggi di kuis!</span>
          </div>
          <button
            id="close-material-bottom-btn"
            onClick={() => {
              playClickSound();
              onClose();
            }}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-xs sm:text-sm transition shadow-sm"
          >
            Tutup Rangkuman
          </button>
        </div>
      </div>
    </div>
  );
}
