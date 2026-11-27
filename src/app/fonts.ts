import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";

export const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const FONT_CLASS_NAMES = `${archivo.variable} ${jetbrainsMono.variable} h-full`;

export const BODY_CLASS_NAMES =
  "min-h-full flex flex-col overflow-x-clip bg-background text-foreground antialiased";

export const BASE_METADATA: Metadata = {
  metadataBase: new URL("https://wahabdinn.my.id"),
  title: {
    default: "Wahabdin Sangadji",
    template: "%s | Wahabdin Sangadji",
  },
  description:
    "Wahabdin Sangadji, Associate Partner Technology IAI, Admin, and Full-Stack Developer. Creator of Hubz Publisher and Hubz Video.",
};
