"use client";

import "./globals.css";
import { CssVarsProvider } from "@mui/joy/styles";
import { CssBaseline } from "@mui/joy";
import { Inter } from "next/font/google";
import AppBar from "@/components/patterns/AppBar/Index";
import theme from "./theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Goria band",
  description: "Strona legendarnego lublinieckiego zepołu Goria",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <CssBaseline />
        <CssVarsProvider defaultMode="dark" theme={theme}>
          <AppBar />
          {children}
        </CssVarsProvider>
      </body>
    </html>
  );
}
