import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yayan Faturrohman",
  description: "Front end React developer",
  openGraph: {
    images: [
      {
        url: "/mee.png",
      },
    ],
    authors: "Yayan Faturrohman",
  },
  icons: {
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Navbar />
          <section>{children}</section>
        </main>
      </body>
    </html>
  );
}
