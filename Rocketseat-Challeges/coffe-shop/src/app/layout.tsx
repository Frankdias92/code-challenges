import type { Metadata } from "next";
import { Baloo_2, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const baloo = Baloo_2({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Coffe Shop",
  description: "O melhor café do mundo",
}; 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={baloo.className} >
        <Header />
        <section className="flex flex-col w-full h-full min-h-screen justify-between relative pt-[104px]">
          {children}
        </section>
        <Footer />
      </body>
    </html>
  );
}
