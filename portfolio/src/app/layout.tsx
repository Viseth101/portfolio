import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
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
        className={`${inter.variable} min-h-full bg-slate-50 text-slate-900 font-sans dark:bg-background-primary dark:text-text-primary`}
      >
        <div className="relative flex min-h-screen flex-col">
          <Navbar />

          {/* Very subtle grain texture to avoid flat backgrounds and add depth. */}
          <div
            className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22 viewBox=%220 0 120 120%22%3E%3Ccircle cx=%2213%22 cy=%2211%22 r=%221%22 fill=%22%23ffffff%22/%3E%3Ccircle cx=%2242%22 cy=%2278%22 r=%221%22 fill=%22%23ffffff%22/%3E%3Ccircle cx=%2294%22 cy=%2246%22 r=%221%22 fill=%22%23ffffff%22/%3E%3Ccircle cx=%2274%22 cy=%22105%22 r=%221%22 fill=%22%23ffffff%22/%3E%3C/svg%3E")',
            }}
          />

          <main className="relative z-10 flex-1">{children}</main>
          <div className="relative z-10">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
