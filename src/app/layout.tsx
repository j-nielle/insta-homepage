import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import { Footer } from "@/components";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Instagram",
  description: "Junior Frontend Developer Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Analytics/>
      <body
        className={`${openSans.variable} antialiased bg-white dark:bg-black`}
      >
        <Providers>
          <main className="flex flex-col justify-center">
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
