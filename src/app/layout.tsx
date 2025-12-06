import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Script from 'next/script';
import type React from 'react';
import '@/styles/tailwind.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head />
      <body className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CMHFH6H6F6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CMHFH6H6F6');
          `}
        </Script>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}