import './globals.css';
import { Inter } from 'next/font/google';
import { Header } from './components/header';
import { Footer } from './components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Home',
  description: "Hector's website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <div className="flex flex-col h-screen justify-between">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
