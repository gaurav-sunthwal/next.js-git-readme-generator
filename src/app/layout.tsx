import Navbar from "./Components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import AppFooter from "./Components/AppFooter";
import { Box, useMediaQuery } from "@chakra-ui/react";
import { AppWrapper } from "./Context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Generate Readme",
  description: "Create your perfect GitHub Profile ReadMe in the best possible way. Lots of features and tools included, all for free !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <Box h={"1vh"}></Box>
          <AppWrapper>
            <Box color={"#86EFAC"}>{children}</Box>
          </AppWrapper>
          <AppFooter />
        </Providers>
      </body>
    </html>
  );
}
