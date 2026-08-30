import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Pixel Penguin — Charming games & useful experiments',
  description:
    'A collection of playful student projects and learning games by Victory Ma, made in Minnesota.',
  openGraph: {
    title: 'Pixel Penguin',
    description: 'Charming games & useful experiments.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixel Penguin',
    description: 'Charming games & useful experiments.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
