import type { Metadata } from "next";
import { Bodoni_Moda, Geist, Geist_Mono } from "next/font/google";

export const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const FONT_CLASS_NAMES = `${bodoniModa.variable} ${geistSans.variable} ${geistMono.variable} h-full`;

export const BASE_METADATA: Metadata = {
  metadataBase: new URL("https://wahabdinn.my.id"),
  title: {
    default: "Wahabdin Sangadji",
    template: "%s | Wahabdin Sangadji",
  },
  description:
    "Wahabdin Sangadji, Associate Partner Technology IAI, Admin, and Full-Stack Developer. Creator of Hubz Publisher and Hubz Video.",
};
