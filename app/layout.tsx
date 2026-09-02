import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Sea trail",
  description: "Parte do Global Digital Marketeiro Group, a SEATRAIL combina conhecimento do mercado local com uma mentalidade de serviço internacional. Damos suporte aos clientes em todo o ciclo operacional — desde a mobilização de pessoal e trocas de tripulação até o suporte a embarcações, portos e bases em terra",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-br"
      className={`h-full antialiased ${inter.className}`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
