import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav/NavBar";
import Footer from "@/components/footer/Footer";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "iEdito",
  description:
    "Elevate your image editing game with iEdito – powered by Next.js for lightning-fast performance. Seamlessly resize and crop images to perfection, effortlessly enhancing their visual appeal. Unlock a world of creativity with our premium presets, meticulously crafted to suit your needs. Dive into precise color adjustments and bring your vision to life with iEdito on Next.js. Experience the future of photo editing today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
