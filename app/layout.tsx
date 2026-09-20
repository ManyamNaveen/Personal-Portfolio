import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
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
    <html lang="en" className={`scroll-smooth dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var params = new URLSearchParams(window.location.search);
                  var queryTheme = params.get('theme');
                  var saved = localStorage.getItem('mn-theme');
                  var theme = queryTheme || saved || 'dark';
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
