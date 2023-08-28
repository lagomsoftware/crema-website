import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Crema",
  description: "Register, log and analyze your espresso shots",
  openGraph: {
    images:
      "https://res.cloudinary.com/albin-groen/image/upload/v1693225631/Lagom/Crema/crema-seo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={`${inter.variable} font-sans`}>{children}</main>
      </body>
    </html>
  );
}
