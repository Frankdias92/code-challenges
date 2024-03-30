import type { Metadata } from "next";
import { Poppins, Staatliches,  } from "next/font/google";
import "./globals.css";

const staatliches = Staatliches({ subsets: ["latin"], style:"normal", weight:"400" });
const poppins = Poppins({ subsets: ["devanagari"], weight: ["100", "300", "400", "700"], style: ["italic", "normal"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={staatliches.className}>{children}</body>
    </html>
  );
}
