import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KanAI Solutions | AI-Powered Sales & Automation",
  description: "Bespoke AI tools to help individuals and businesses stay productive and efficient in their niche. Master sales and automation with KanAI.",
  keywords: ["AI", "Sales Optimization", "Automation", "Workflow Efficiency", "KanAI Solutions"],
  authors: [{ name: "KanAI Solutions" }],
  openGraph: {
    title: "KanAI Solutions | AI-Powered Sales & Automation",
    description: "Empowering your business with high-performance AI tools.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}
