import type { Metadata } from "next";
import { Bodoni_Moda, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wahabdinn.my.id"),
  title: {
    default: "Wahabdin Sangadji",
    template: "%s | Wahabdin Sangadji",
  },
  description:
    "Wahabdin Sangadji, Associate Partner Technology IAI, Admin, and Full-Stack Developer. Creator of Hubz Publisher and Hubz Video.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodoniModa.variable} ${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
