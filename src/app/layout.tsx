import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Inter, Source_Code_Pro } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { BackToTop } from '@/components/back-to-top';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code-pro',
});

export const metadata: Metadata = {
  title: "Horyu Arthur | Portfolio Web",
  description: "Portfólio profissional de Horyu Arthur - Desenvolvedor Full Stack, Designer e Artista Audiovisual. Explore projetos que unem tecnologia, design e cultura.",
  openGraph: {
    title: "Horyu Arthur | Portfolio Web",
    description: "Conheça o trabalho de Horyu Arthur, especialista em soluções digitais e criação audiovisual.",
    images: [
      {
        url: "https://i.ibb.co/DSMjdWF/image.jpg",
        width: 1200,
        height: 630,
        alt: "Horyu Arthur Portfolio",
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Horyu Arthur | Portfolio Web",
    description: "Conheça o trabalho de Horyu Arthur, especialista em soluções digitais e criação audiovisual.",
    images: ["https://i.ibb.co/DSMjdWF/image.jpg"],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`dark ${inter.variable} ${sourceCodePro.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Toaster />
        <BackToTop />
      </body>
    </html>
  );
}
