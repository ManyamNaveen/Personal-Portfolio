import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

// Self-hosted (Latin, variable weight) so builds and dev never depend on reaching Google Fonts
const manrope = localFont({
  src: './fonts/Manrope-Variable.woff2',
  weight: '200 800',
  display: 'swap',
  variable: '--font-manrope',
});

const inter = localFont({
  src: './fonts/Inter-Variable.woff2',
  weight: '100 900',
  display: 'swap',
  variable: '--font-inter',
});

const spaceGrotesk = localFont({
  src: './fonts/SpaceGrotesk-Variable.woff2',
  weight: '300 700',
  display: 'swap',
  variable: '--font-grotesk',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://manyamnaveen.vercel.app'),
  title: 'Manyam Naveen | Java Backend Developer & System Engineer',
  description:
    'Portfolio of Manyam Naveen - Java Backend Developer specializing in Java 21, Spring Boot 3, REST APIs, PostgreSQL, AWS, and mission-critical distributed architectures.',
  keywords: [
    'Manyam Naveen',
    'Java Backend Developer',
    'Spring Boot 3',
    'REST APIs',
    'PostgreSQL',
    'AWS',
    'Redis',
    'Fintech',
    'PhonePe Gateway',
    'Collections Platform'
  ],
  authors: [{ name: 'Manyam Naveen' }],
  openGraph: {
    title: 'Manyam Naveen | Java Backend Developer & System Engineer',
    description:
      'Explore production systems, fintech integrations, and backend architectures engineered with Spring Boot 3 and Java 21.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${manrope.variable} ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="antialiased selection:bg-cyan-200 selection:text-slate-900">
        {children}
      </body>
    </html>
  );
}
