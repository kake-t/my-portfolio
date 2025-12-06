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
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CMHFH6H6F6"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CMHFH6H6F6');
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}