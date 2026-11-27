import type { Metadata } from "next";
import { BASE_METADATA, FONT_CLASS_NAMES } from "@/app/fonts";
import "../globals.css";

export const metadata: Metadata = BASE_METADATA;

export default function EnglishRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${FONT_CLASS_NAMES} overflow-x-clip`}>
      <body className="min-h-full flex flex-col overflow-x-clip bg-paper text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
