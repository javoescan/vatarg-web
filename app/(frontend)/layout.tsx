import type { Metadata } from "next";
import Navbar from './_components/navbar';
import Footer from './_components/footer';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

export const metadata: Metadata = {
  title: "VATSIM Argentina",
  description: "VATSIM Argentina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
