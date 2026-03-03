import type {Metadata} from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css'; // Global styles

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Curso de Manicure Profissional | Espaço Nath Nails',
  description: 'Aprenda as melhores técnicas de manicure com a Nath Nails. Curso completo para você se tornar uma profissional de sucesso.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#FAF9F6] text-stone-800" suppressHydrationWarning>{children}</body>
    </html>
  );
}
