'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

// ✅ Import components
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
