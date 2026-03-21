import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Viseth | Portfolio",
  description:
    "Portfolio website showcasing full-stack, cybersecurity, and AI-focused projects.",
  keywords: [
    "Viseth",
    "CS student",
    "portfolio",
    "full-stack",
    "cybersecurity",
    "AI",
  ],
  openGraph: {
    title: "Viseth | Portfolio",
    description:
      "Portfolio website showcasing full-stack, cybersecurity, and AI-focused projects.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className={`${inter.variable} min-h-full bg-background-primary text-text-primary font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
