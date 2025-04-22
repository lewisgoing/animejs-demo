import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import "./globals.css";

import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "animejs demo",
  description: "A Next.js app with a bento-styled grid using react-grid-layout",
};

// ${geistSans.variable} ${geistMono.variable} antialiased

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-gray-100 dark:bg-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
