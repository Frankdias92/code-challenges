import type { Metadata } from "next";
import { Caveat, Poppins, Staatliches } from "next/font/google";
import "./globals.css";

const staatliches = Staatliches({ subsets: ["latin"], style:"normal", weight:"400" });
const poppins = Poppins({ subsets: ["devanagari"], weight: ["100", "300", "400", "700"], style: ["italic", "normal"] });
const caveat = Caveat({ subsets: ["latin"], variable: '--caveat'})


export const metadata: Metadata = {
  title: "Desvendando JavaScript",
  description: "Uma Jornada Interativa com Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${staatliches.className} ${caveat.variable}`}>
        {children}
      </body>
    </html>
  );
}
