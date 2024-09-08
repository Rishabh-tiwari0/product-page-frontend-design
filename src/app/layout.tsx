import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Product Page",
  description: "Created by Rishabh Tiwari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/images/image-product-1-thumbnail.jpg"
          type="image/x-icon"
          sizes="16x16"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
