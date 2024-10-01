import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { AudioContextProvider } from "@/context/AudioContext";
import Header from "@/components/header/Header";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Star E",
  description: "Hybrid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <AudioContextProvider>
          <Header />
          {children}
        </AudioContextProvider>
      </body>
    </html>
  );
}
