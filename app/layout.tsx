import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Cadeco Global Ecuador - Aditivos, Morteros y Recubrimientos",
  description: "Cadeco Global - Fabricamos aditivos, morteros y recubrimientos de alto desempeño con respaldo técnico, entrega eficiente y calidad certificada.",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}
