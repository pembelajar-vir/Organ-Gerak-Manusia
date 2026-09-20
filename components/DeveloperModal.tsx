'use client';

import React, { useState } from 'react';
import { 
  X, 
  UserCheck, 
  Mail, 
  Building2, 
  CreditCard, 
  Check, 
  Copy,
  ExternalLink,
  ShieldCheck,
  Lock,
  GraduationCap
} from 'lucide-react';
import { useDeveloperInfo } from '@/lib/developerStore';
import { playClickSound } from '@/lib/sound';

interface DeveloperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DeveloperModal({ isOpen, onClose }: DeveloperModalProps) {
  const developer = useDeveloperInfo();
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [imgError, setImgError] = useState(false);

  if (!isOpen) return null;

  const handleCopy = (text: string, fieldName: string) => {
    playClickSound();
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Primary image source from ImgBB with fallback
  const currentPhoto = imgError 
    ? 'https://i.ibb.co/YFv9gCPj/Pas-Foto.jpg' 
    : (developer.photoUrl || 'https://i.ibb.co.com/YFv9gCPj/Pas-Foto.jpg');

  return (
    <div
      id="developer-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="developer-modal-content"
        className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-800 text-white p-6 sm:p-7 relative rounded-t-3xl">
          <button
            id="close-developer-modal-btn"
            onClick={() => {
              playClickSound();
              onClose();
            }}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <span className="p-2 rounded-xl bg-white/20 text-emerald-100 backdrop-blur-xs">
              <UserCheck className="w-6 h-6" />
            </span>
            <div>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest text-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                <span>Identitas Resmi Terverifikasi</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                Profil Pengembang
              </h3>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-emerald-100 max-w-md leading-relaxed">
            Identitas resmi tenaga pendidik dan pengembang media pembelajaran interaktif IPAS SD.
          </p>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-7 space-y-6">
          {/* Photo & Main Identity Card */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 p-5 rounded-2xl bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/20 border border-slate-200">
            {/* Photo container */}
            <div className="relative shrink-0">
              <a
                href="https://ibb.co.com/RkLn8FYH"
                target="_blank"
                rel="noreferrer noopener"
                title="Buka Pas-Foto di ImgBB"
                className="block group"
              >
                <div className="w-24 h-28 sm:w-28 sm:h-32 rounded-2xl overflow-hidden border-2 border-emerald-500 shadow-md bg-white flex items-center justify-center transition group-hover:scale-105 group-hover:border-emerald-600">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={currentPhoto}
                    alt="Pas-Foto"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </a>
              <div 
                className="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-emerald-600 text-white shadow-md border-2 border-white pointer-events-none"
                title="Profil Terkunci Resmi"
              >
                <Lock className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Identity Text */}
            <div className="text-center sm:text-left space-y-1.5 flex-1 min-w-0">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-200">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-700" />
                <span>Pendidik & Pengembang Media</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug break-words">
                {developer.name}
              </h4>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                {developer.role}
              </p>
              <a
                href="https://ibb.co.com/RkLn8FYH"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 hover:text-emerald-800 hover:underline pt-0.5"
              >
                <span>Lihat Foto Asli</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Data Grid: NIP, Unit Kerja, Email */}
          <div className="grid grid-cols-1 gap-3">
            {/* NIP */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200 flex items-center justify-between gap-3 hover:border-slate-300 transition shadow-2xs">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2.5 rounded-xl bg-slate-100 text-slate-700 shrink-0">
                  <CreditCard className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
                    Nomor Induk Pegawai (NIP)
                  </div>
                  <div className="text-sm font-bold text-slate-800 font-mono truncate">
                    {developer.nip}
                  </div>
                </div>
              </div>
              <button
                id="copy-nip-btn"
                onClick={() => handleCopy(developer.nip, 'nip')}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition shrink-0"
                title="Salin NIP"
                aria-label="Salin NIP"
              >
                {copiedField === 'nip' ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Unit Kerja */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200 flex items-center justify-between gap-3 hover:border-slate-300 transition shadow-2xs">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700 shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
                    Unit Kerja / Satuan Pendidikan
                  </div>
                  <div className="text-sm font-bold text-slate-800 truncate">
                    {developer.unitKerja}
                  </div>
                </div>
              </div>
              <button
                id="copy-unit-btn"
                onClick={() => handleCopy(developer.unitKerja, 'unit')}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition shrink-0"
                title="Salin Unit Kerja"
                aria-label="Salin Unit Kerja"
              >
                {copiedField === 'unit' ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Email Kontak */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200 flex items-center justify-between gap-3 hover:border-slate-300 transition shadow-2xs">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
                    Email Kontak Resmi
                  </div>
                  <a
                    href={`mailto:${developer.email}`}
                    className="text-sm font-bold text-emerald-700 hover:underline truncate block"
                  >
                    {developer.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <a
                  href={`mailto:${developer.email}`}
                  className="p-2 rounded-xl text-slate-400 hover:text-emerald-700 hover:bg-slate-100 transition"
                  title="Kirim Pesan Email"
                  aria-label="Kirim Pesan Email"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  id="copy-email-btn"
                  onClick={() => handleCopy(developer.email, 'email')}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
                  title="Salin Email"
                  aria-label="Salin Email"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Locked status note & Close Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
            <div className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <Lock className="w-3.5 h-3.5 text-slate-400" />
              <span>Profil resmi terverifikasi dan terkunci</span>
            </div>

            <button
              type="button"
              id="close-developer-btn"
              onClick={() => {
                playClickSound();
                onClose();
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition shadow-2xs"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
