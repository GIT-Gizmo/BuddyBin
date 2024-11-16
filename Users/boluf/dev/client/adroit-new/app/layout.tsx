import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from 'react-hot-toast';
import "@/styles/globals.css";

import { Navbar } from "@/components/nav/Navbar";
import Footer from "@/components/nav/Footer";
import Whatsapp from "@/components/Whatsapp";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Adroit HandyMan Services - Not just any Handyman will do",
  description: "Get the job done right today with ADROIT HANDYMAN SERVICES",
  icons: {
    icon: ['/assets/favicon/favicon.ico?v=4'],
    apple: ['/assets/favicon/apple-touch-icon.png?v=4'],
    shortcut: ['/assets/favicon/apple-touch-icon.png']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster position="top-center" reverseOrder={false} />
        <Navbar />
        <Whatsapp />
        {children}
        <Footer />
      </body>
    </html>
  );
}
