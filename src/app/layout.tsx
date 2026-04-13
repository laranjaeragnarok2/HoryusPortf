import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Inter, Source_Code_Pro } from 'next/font/google';

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
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/favicon-60x60.png', sizes: '60x60', type: 'image/png' },
      { url: '/favicon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/favicon-76x76.png', sizes: '76x76', type: 'image/png' },
      { url: '/favicon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/favicon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/favicon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/favicon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/favicon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/favicon-152x152.png',
      },
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
        {children}
        <Toaster />
      </body>
    </html>
  );
}
