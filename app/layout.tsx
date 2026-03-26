import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'DeepGuard AI | Advanced Deepfake Detection',
  description: 'Modern AI-powered cybersecurity platform for deepfake detection and digital integrity.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="dark">
      <body 
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-[#0B0F17] text-slate-200 antialiased selection:bg-cyan-500/30 selection:text-cyan-200`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
