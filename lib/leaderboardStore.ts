'use client';

import { useSyncExternalStore } from 'react';
import { LeaderboardEntry } from './types';

export const DEFAULT_LEADERBOARD: LeaderboardEntry[] = [
  {
    id: 'seed-1',
    name: 'Siti Aisyah',
    score: 2500,
    accuracy: 100,
    levelId: 1,
    levelName: 'Level 1: Rangka & Tulang',
    badge: 'Penjelajah Rangka',
    date: '2026-09-18',
    streak: 25,
  },
  {
    id: 'seed-2',
    name: 'Budi Pratama',
    score: 2420,
    accuracy: 96,
    levelId: 2,
    levelName: 'Level 2: Sistem Persendian',
    badge: 'Ahli Persendian',
    date: '2026-09-19',
    streak: 20,
  },
  {
    id: 'seed-3',
    name: 'Dewi Lestari',
    score: 2380,
    accuracy: 92,
    levelId: 3,
    levelName: 'Level 3: Sistem Otot',
    badge: 'Komandan Otot',
    date: '2026-09-19',
    streak: 18,
  },
  {
    id: 'seed-4',
    name: 'Fauzan Hakim',
    score: 2300,
    accuracy: 92,
    levelId: 4,
    levelName: 'Level 4: Kelainan & Kesehatan',
    badge: 'Dokter Cilik Bugar',
    date: '2026-09-20',
    streak: 15,
  },
  {
    id: 'seed-5',
    name: 'Rian Maulana',
    score: 2150,
    accuracy: 88,
    levelId: 1,
    levelName: 'Level 1: Rangka & Tulang',
    badge: 'Penjelajah Rangka',
    date: '2026-09-20',
    streak: 12,
  },
];

const STORAGE_KEY = 'ipas_organ_gerak_leaderboard';
let memorySnapshot = JSON.stringify(DEFAULT_LEADERBOARD);
const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

function notify() {
  for (const listener of listeners) {
    listener();
  }
}

function getSnapshot(): string {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== null) {
      memorySnapshot = stored;
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_LEADERBOARD));
      memorySnapshot = JSON.stringify(DEFAULT_LEADERBOARD);
    }
  }
  return memorySnapshot;
}

function getServerSnapshot(): string {
  return JSON.stringify(DEFAULT_LEADERBOARD);
}

export function useLeaderboard(): [LeaderboardEntry[], (entries: LeaderboardEntry[]) => void] {
  const json = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  let parsed: LeaderboardEntry[] = DEFAULT_LEADERBOARD;
  try {
    parsed = JSON.parse(json);
  } catch {
    parsed = DEFAULT_LEADERBOARD;
  }

  const setEntries = (newEntries: LeaderboardEntry[]) => {
    const raw = JSON.stringify(newEntries);
    memorySnapshot = raw;
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, raw);
    }
    notify();
  };

  return [parsed, setEntries];
}

export function clearLeaderboard(): void {
  const raw = JSON.stringify([]);
  memorySnapshot = raw;
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, raw);
  }
  notify();
}

export function resetDefaultLeaderboard(): void {
  const raw = JSON.stringify(DEFAULT_LEADERBOARD);
  memorySnapshot = raw;
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, raw);
  }
  notify();
}

export function saveLeaderboardEntry(newEntry: LeaderboardEntry) {
  let current: LeaderboardEntry[] = [];
  try {
    const raw = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    current = raw ? JSON.parse(raw) : DEFAULT_LEADERBOARD;
  } catch {
    current = DEFAULT_LEADERBOARD;
  }
  const updated = [newEntry, ...current];
  memorySnapshot = JSON.stringify(updated);
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, memorySnapshot);
  }
  notify();
}
