import type { Metadata } from 'next';
import './globals.css';
import { EditorProvider } from "@/components/editor/editor-provider";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <EditorProvider>{children}</EditorProvider>
      </body>
    </html>
  );
}
