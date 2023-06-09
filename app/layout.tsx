"use client";

import Navbar from "@/component/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import Footer from "@/component/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Navbar />
          {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
