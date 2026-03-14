import type { Metadata } from 'next';
import { Cinzel, Inter } from "next/font/google";
import './globals.css';
import { EditorProvider } from "@/components/editor/editor-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  title: 'IHSAN MUN 2026',
  description: 'Step into the shoes of global ambassadors at Ihsan Schools MUN.',
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cinzel.variable} font-body antialiased`}>
        <EditorProvider>{children}</EditorProvider>
      </body>
    </html>
  );
}
