import "./globals.css";
import { Inter } from "next/font/google";
import AppBar from "@/components/AppBar/Index";

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
        <AppBar />
        {children}
      </body>
    </html>
  );
}
