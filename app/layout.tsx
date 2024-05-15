import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react";


export const metadata: Metadata = {
  title: "Booking App Clone",
  description: "Educational purpose",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body >
        <Header />
        {children}</body>
          <Analytics />
    </html>
  );
}
