import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Talking Labs | AI-Powered English Communication Platform",
  description:
    "Talking Labs EdTech LLP builds Auravo — an AI-powered English communication coach that assesses speaking ability, creates personalized learning plans, and helps learners improve real-world communication skills.",
  keywords: [
    "Talking Labs",
    "Auravo",
    "English communication",
    "AI coaching",
    "spoken English",
    "EdTech India",
    "language learning",
  ],
  authors: [{ name: "Talking Labs EdTech LLP" }],
  openGraph: {
    title: "Talking Labs | Transform English Communication with AI",
    description:
      "AI-powered English communication platform. Meet Auravo — your personal AI speaking coach.",
    url: "https://www.talkinglabs.in",
    siteName: "Talking Labs",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Talking Labs | AI-Powered English Communication",
    description:
      "Transform English communication with AI. Launch Auravo today.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
