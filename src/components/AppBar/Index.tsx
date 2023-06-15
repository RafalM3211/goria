"use client";

import { Sheet, Link, Button } from "@mui/joy";
import Image from "next/image";

export default function AppBar() {
  return (
    <Sheet
      sx={{
        px: "5%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      component="header"
    >
      <Image src="/images/logo.jpg" height={60} width={100} alt="goria logo" />
      <nav>
        <Button variant="plain" color="neutral" component="div">
          <Link href="#about">o nas</Link>
        </Button>
        <Button variant="plain" color="neutral" component="div">
          <Link href="#about">koncerty</Link>
        </Button>
      </nav>
    </Sheet>
  );
}
