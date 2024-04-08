import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const noto_sans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xeraphinite",
  description: "Say it back.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={noto_sans.className}>{children}</body>
      <Script src="//unpkg.com/heti/umd/heti-addon.min.js" />
      <Script src="/heti.js"></Script>
    </html>
  );
}
