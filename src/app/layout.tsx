// FIX: Added React import to resolve 'Cannot find namespace "React"'.
import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PrismUI - Beautifully designed components",
  description: "Get started building beautiful, animated, and accessible components with PrismUI. Discover our React component library built on Tailwind CSS with advanced animations and modern design patterns.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}