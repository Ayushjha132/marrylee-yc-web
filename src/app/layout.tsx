import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mary Lee",
  description: "Yuchen Li, a seasoned real estate investor and consultant, has been deeply engaged in the Dubai market for seven years, possessing extensive experience in market analysis and investment. From 2018 to 2022, she successfully generated returns of 30% to 200% for 100% of her clients. Between 2022 and 2024, she provided comprehensive investment planning, implementation, asset management, resale, short-term rental, renovation, and operation services for private family offices and high-net-worth clients. Additionally, she has represented Dubai government developers and real estate companies in marketing and exhibition activities in China and the UK, leveraging her extensive experience in organizing and executing both online and offline advertising campaigns",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
