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
  title: "Kolency - Social Media Collaboration Platform",
  description: "Kolency is the ultimate platform for teams to collaborate on social media content. Schedule, publish, and manage your social presence together with powerful team collaboration features.",
  keywords: "social media, collaboration, team management, content scheduling, social media marketing, buffer alternative, publer alternative",
  authors: [{ name: "Kolency Team" }],
  openGraph: {
    title: "Kolency - Social Media Collaboration Platform",
    description: "The ultimate platform for teams to collaborate on social media content. Schedule, publish, and manage your social presence together.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kolency - Social Media Collaboration Platform",
    description: "The ultimate platform for teams to collaborate on social media content.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
