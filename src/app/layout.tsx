import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '@/styles/tailwind.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}