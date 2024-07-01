import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The King Cloneflix | Watch TV Shows Online, Watch Movies Online",
  description: "Watch TV Shows Online, Watch Movies Online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
