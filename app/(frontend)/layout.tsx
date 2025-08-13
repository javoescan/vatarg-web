import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import Navbar from './_components/navbar';
import Footer from './_components/footer';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

export const metadata: Metadata = {
  title: "VATSIM Argentina",
  description: "VATSIM Argentina",
};

const RobotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={RobotoCondensed.className}>
      <body>
        <Navbar />
        <div className="mt-5 pt-4">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
