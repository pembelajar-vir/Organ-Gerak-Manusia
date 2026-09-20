import { DeveloperInfo } from './types';

// Locked official developer profile
export const LOCKED_DEVELOPER_INFO: DeveloperInfo = {
  name: 'Robiyanto, S.Pd.',
  nip: '19930720 201902 1 005',
  unitKerja: 'SD Negeri 2 Kebondalem, Banjarnegara',
  email: 'robiyantospd07@guru.sd.belajar.id',
  photoUrl: 'https://i.ibb.co.com/YFv9gCPj/Pas-Foto.jpg',
  role: 'Guru Kelas & Pengembang Media Pembelajaran IPAS SD',
};

// Clean legacy localStorage overrides if present to enforce lock
if (typeof window !== 'undefined') {
  try {
    localStorage.removeItem('ipas_developer_profile');
  } catch {
    // Ignore
  }
}

export function getDeveloperInfo(): DeveloperInfo {
  return LOCKED_DEVELOPER_INFO;
}

export function useDeveloperInfo(): DeveloperInfo {
  return LOCKED_DEVELOPER_INFO;
}

