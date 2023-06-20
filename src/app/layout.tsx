"use client";

import "./globals.css";
import { CssVarsProvider } from "@mui/joy/styles";
import { CssBaseline } from "@mui/joy";
import { Inter } from "next/font/google";
import AppBar from "@/components/patterns/AppBar/Index";
import theme from "./theme";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <Head>
          <title>Goria</title>
        </Head>
        <CssBaseline />
        <CssVarsProvider defaultMode="dark" theme={theme}>
          <AppBar />
          {children}
        </CssVarsProvider>
      </body>
    </html>
  );
}
