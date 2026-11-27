import type { Metadata } from "next";
import { BASE_METADATA, BODY_CLASS_NAMES, FONT_CLASS_NAMES } from "@/app/fonts";
import { I18nProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = BASE_METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${FONT_CLASS_NAMES} overflow-x-clip`}>
      <body className={BODY_CLASS_NAMES}>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
