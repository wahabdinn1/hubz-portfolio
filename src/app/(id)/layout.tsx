import type { Metadata } from "next";
import { BASE_METADATA, FONT_CLASS_NAMES } from "@/app/fonts";
import { SITE_CONTENT } from "@/content/site";
import "../globals.css";

export const metadata: Metadata = {
  ...BASE_METADATA,
  description: SITE_CONTENT.id.meta.homeDescription,
};

export default function IndonesianRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${FONT_CLASS_NAMES} overflow-x-clip`}>
      <body className="min-h-full flex flex-col overflow-x-clip bg-paper text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
