// Web Audio API Synthesizer for educational game
import { useSyncExternalStore } from 'react';

let audioCtx: AudioContext | null = null;
let isMuted = false;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function setSoundMuted(muted: boolean) {
  isMuted = muted;
  if (typeof window !== 'undefined') {
    localStorage.setItem('ipas_sound_muted', muted ? '1' : '0');
  }
}

export function getSoundMuted(): boolean {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('ipas_sound_muted');
    if (stored !== null) {
      isMuted = stored === '1';
    }
  }
  return isMuted;
}

// Crisp pop sound for button clicks & flips
export function playClickSound() {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.06);
  } catch {
    // Ignore audio error if autoplay restricted
  }
}

// Cheerful rising major arpeggio for correct answer
export function playCorrectSound() {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      const startTime = ctx.currentTime + idx * 0.07;
      const duration = 0.2;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.15, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + duration + 0.01);
    });
  } catch {
    // Ignore audio error
  }
}

// Gentle low tone for wrong answer (encouraging, not harsh)
export function playWrongSound() {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(320, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(240, ctx.currentTime + 0.25);

    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.26);
  } catch {
    // Ignore audio error
  }
}

// Victory fanfare when completing a level
export function playVictorySound() {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    // Melody: C5, E5, G5, C6, G5, C6 (extended)
    const melody = [
      { f: 523.25, d: 0.12, wait: 0.0 },
      { f: 659.25, d: 0.12, wait: 0.13 },
      { f: 783.99, d: 0.14, wait: 0.26 },
      { f: 1046.5, d: 0.35, wait: 0.42 },
      { f: 880.0, d: 0.15, wait: 0.8 },
      { f: 1046.5, d: 0.5, wait: 0.98 },
    ];

    melody.forEach((note) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      const startTime = ctx.currentTime + note.wait;
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(note.f, startTime);

      gain.gain.setValueAtTime(0.18, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + note.d);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + note.d + 0.02);
    });
  } catch {
    // Ignore audio error
  }
}

// Quick combo sparkle sound
export function playStreakSound() {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const freqs = [880, 1174.66, 1567.98];
    freqs.forEach((f, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const st = ctx.currentTime + i * 0.05;
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, st);
      gain.gain.setValueAtTime(0.1, st);
      gain.gain.exponentialRampToValueAtTime(0.001, st + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(st);
      osc.stop(st + 0.16);
    });
  } catch {
    // Ignore audio error
  }
}

// ========================================================
// BACKGROUND MUSIC (BGM) PROCEDURAL SYNTHESIZER
// ========================================================
// Cheerful, gentle, and relaxing marimba & acoustic-style procedural melody
// In C Major Pentatonic for Indonesian elementary school educational setting.
let bgmGainNode: GainNode | null = null;
let bgmFilterNode: BiquadFilterNode | null = null;
let bgmTimerId: ReturnType<typeof setInterval> | null = null;
let bgmIsPlaying = false;
let bgmVolume = 0.28; // Pleasant background level (not overpowering)
let bgmCurrentStep = 0;
let bgmNextNoteTime = 0;
const bgmListeners = new Set<(playing: boolean) => void>();

// Pentatonic & diatonic frequencies (Hz)
const C3 = 130.81, E3 = 164.81, F3 = 174.61, G3 = 196.0, A3 = 220.0, B3 = 246.94;
const C4 = 261.63, D4 = 293.66, E4 = 329.63, F4 = 349.23, G4 = 392.0, A4 = 440.0, B4 = 493.88;
const C5 = 523.25, D5 = 587.33, E5 = 659.25, F5 = 698.46, G5 = 783.99, A5 = 880.0;

// 16-bar cyclical friendly chord sequence:
// Bars 1-4:  C maj -> Am -> F maj -> G maj
// Bars 5-8:  C maj -> Em -> F maj -> C maj
interface NotePattern {
  bass: number;
  chord: number[];
  arpeggio: number[];
}

const BGM_PATTERNS: NotePattern[] = [
  // 1: C Major (Warm root, gentle arpeggios)
  { bass: C3, chord: [C4, E4, G4], arpeggio: [C5, E5, G4, E5] },
  // 2: A Minor (Soft reflective)
  { bass: A3, chord: [C4, E4, A4], arpeggio: [A4, C5, E5, C5] },
  // 3: F Major (Bright uplifting)
  { bass: F3, chord: [C4, F4, A4], arpeggio: [A4, C5, F5, C5] },
  // 4: G Major (Playful turnaround)
  { bass: G3, chord: [B3, D4, G4], arpeggio: [D5, G4, B4, D5] },
  // 5: C Major (Confident walk)
  { bass: C3, chord: [C4, E4, G4], arpeggio: [E5, G4, C5, G4] },
  // 6: E Minor (Curious inquiry)
  { bass: E3, chord: [B3, E4, G4], arpeggio: [B4, E5, G4, E5] },
  // 7: F Major (Gentle stride)
  { bass: F3, chord: [C4, F4, A4], arpeggio: [C5, F5, A4, F5] },
  // 8: G -> C cadence (Satisfying loop resolution)
  { bass: G3, chord: [B3, D4, G4], arpeggio: [D5, B4, G4, C5] },
];

function notifyBgmListeners() {
  bgmListeners.forEach((fn) => fn(bgmIsPlaying));
}

export function subscribeBgm(callback: (playing: boolean) => void) {
  bgmListeners.add(callback);
  return () => {
    bgmListeners.delete(callback);
  };
}

export function isBgmPlaying(): boolean {
  return bgmIsPlaying;
}

export function useBgmStatus(): boolean {
  return useSyncExternalStore(
    subscribeBgm,
    isBgmPlaying,
    () => false
  );
}

export function getBgmVolume(): number {
  return bgmVolume;
}

export function setBgmVolume(val: number) {
  bgmVolume = Math.max(0, Math.min(val, 1));
  if (bgmGainNode && audioCtx) {
    bgmGainNode.gain.setValueAtTime(bgmIsPlaying ? bgmVolume : 0, audioCtx.currentTime);
  }
}

function scheduleBgmNote(time: number, freq: number, duration: number, type: OscillatorType = 'sine', gainAmt = 0.08) {
  if (!audioCtx || !bgmGainNode) return;
  try {
    const osc = audioCtx.createOscillator();
    const noteGain = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, time);

    // Warm envelope: rapid attack, smooth exponential decay
    noteGain.gain.setValueAtTime(0.0001, time);
    noteGain.gain.exponentialRampToValueAtTime(gainAmt, time + 0.02);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(noteGain);
    noteGain.connect(bgmGainNode);

    osc.start(time);
    osc.stop(time + duration + 0.05);
  } catch {
    // Ignore audio scheduler errors
  }
}

function bgmScheduler() {
  const ctx = getAudioContext();
  if (!ctx || !bgmIsPlaying) return;

  const tempo = 92; // Gentle, cheerful, non-rushed tempo
  const beatLength = 60 / tempo; // ~0.652 seconds per beat
  const subBeatLength = beatLength / 2; // eighth notes

  // Look ahead 0.8 seconds to maintain continuous, jitter-free playback
  while (bgmNextNoteTime < ctx.currentTime + 0.8) {
    const patternIdx = Math.floor(bgmCurrentStep / 4) % BGM_PATTERNS.length;
    const subStep = bgmCurrentStep % 4;
    const pattern = BGM_PATTERNS[patternIdx];

    // Downbeat of each bar (subStep === 0): Play warm bass note & soft ambient chord pad
    if (subStep === 0) {
      // Warm bass note
      scheduleBgmNote(bgmNextNoteTime, pattern.bass, beatLength * 2.5, 'triangle', 0.12);

      // Gentle pad chord
      pattern.chord.forEach((noteFreq) => {
        scheduleBgmNote(bgmNextNoteTime, noteFreq, beatLength * 2.2, 'sine', 0.035);
      });
    }

    // Melodic bell/marimba note on each eighth note
    const melFreq = pattern.arpeggio[subStep % pattern.arpeggio.length];
    scheduleBgmNote(bgmNextNoteTime, melFreq, beatLength * 0.9, 'sine', 0.07);

    // Subtle counterpoint sparkle on offbeats (for playful game atmosphere)
    if (subStep === 1 || subStep === 3) {
      const sparkleFreq = melFreq * 1.5; // harmonic 5th
      scheduleBgmNote(bgmNextNoteTime + 0.08, sparkleFreq, beatLength * 0.4, 'sine', 0.02);
    }

    bgmNextNoteTime += subBeatLength;
    bgmCurrentStep++;
  }
}

export function startBgm() {
  const ctx = getAudioContext();
  if (!ctx) return;

  if (bgmIsPlaying) return;

  try {
    if (!bgmGainNode) {
      bgmGainNode = ctx.createGain();
      // Low pass filter to remove high harshness and give a comforting warm acoustic tone
      bgmFilterNode = ctx.createBiquadFilter();
      bgmFilterNode.type = 'lowpass';
      bgmFilterNode.frequency.setValueAtTime(1400, ctx.currentTime);

      bgmGainNode.connect(bgmFilterNode);
      bgmFilterNode.connect(ctx.destination);
    }

    bgmGainNode.gain.cancelScheduledValues(ctx.currentTime);
    bgmGainNode.gain.setValueAtTime(0.0001, ctx.currentTime);
    bgmGainNode.gain.linearRampToValueAtTime(bgmVolume, ctx.currentTime + 0.8); // gentle fade-in

    bgmIsPlaying = true;
    bgmNextNoteTime = ctx.currentTime + 0.05;
    bgmCurrentStep = 0;

    if (bgmTimerId) clearInterval(bgmTimerId);
    bgmTimerId = setInterval(bgmScheduler, 200);

    notifyBgmListeners();
  } catch {
    // Autoplay policy or unsupported
  }
}

export function stopBgm() {
  if (!bgmIsPlaying) return;

  const ctx = getAudioContext();
  if (ctx && bgmGainNode) {
    try {
      bgmGainNode.gain.cancelScheduledValues(ctx.currentTime);
      bgmGainNode.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.4); // gentle fade-out
    } catch {
      // Ignore
    }
  }

  bgmIsPlaying = false;
  if (bgmTimerId) {
    clearInterval(bgmTimerId);
    bgmTimerId = null;
  }
  notifyBgmListeners();
}

export function toggleBgm(): boolean {
  if (bgmIsPlaying) {
    stopBgm();
    if (typeof window !== 'undefined') {
      localStorage.setItem('ipas_bgm_enabled', '0');
    }
    return false;
  } else {
    startBgm();
    if (typeof window !== 'undefined') {
      localStorage.setItem('ipas_bgm_enabled', '1');
    }
    return true;
  }
}
