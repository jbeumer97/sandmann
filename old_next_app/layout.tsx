import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Naturheilzentrum Sandmann | Ayurveda, TCM & Ästhetik Meerbusch",
  description: "Ganzheitliche Naturheilkunde in Harmonie mit der Natur. Erleben Sie Ayurveda, TCM und moderne Ästhetik in Meerbusch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${playfair.variable} ${outfit.variable} font-outfit antialiased selection:bg-sand-gold selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
