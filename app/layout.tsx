import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway, Langar } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway", // Use a unique variable name for Raleway
  subsets: ["latin"],
});

const langar = Langar({
  variable: "--font-langar", // Use a unique variable name for Raleway
  subsets: ["latin"],
  weight: "400"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PortFolio",
  description: "CJ PortFolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} ${langar.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
