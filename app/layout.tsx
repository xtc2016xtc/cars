import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";
export const metadata: Metadata = {
  title: "汽车中心",
  description: "发现优质车辆",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
