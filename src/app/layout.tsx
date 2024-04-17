import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { StrictMode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trading Info",
  description: "Display fake trading info",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StrictMode>
        <body className={inter.className}>{children}</body>
      </StrictMode>
    </html>
  );
}
