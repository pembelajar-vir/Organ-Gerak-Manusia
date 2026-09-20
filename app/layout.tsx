import type {Metadata} from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Flashcard Tantangan: Organ Gerak Manusia - IPAS Kelas 6',
  description: 'Aplikasi kuis dan flashcard interaktif IPAS Kelas 6 SD tentang organ gerak manusia dengan 100 soal berjenjang, sistem poin, dan leaderboard.',
  openGraph: {
    title: 'Flashcard Tantangan: Organ Gerak Manusia - IPAS Kelas 6',
    description: 'Aplikasi kuis dan flashcard interaktif IPAS Kelas 6 SD tentang organ gerak manusia dengan 100 soal berjenjang, sistem poin, dan leaderboard.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flashcard Tantangan: Organ Gerak Manusia - IPAS Kelas 6',
    description: 'Aplikasi kuis dan flashcard interaktif IPAS Kelas 6 SD tentang organ gerak manusia dengan 100 soal berjenjang, sistem poin, dan leaderboard.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="id">
      <body className={`${plusJakartaSans.className} font-sans antialiased selection:bg-emerald-200 selection:text-emerald-900`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
