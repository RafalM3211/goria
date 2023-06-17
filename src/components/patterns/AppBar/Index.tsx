"use client";

import { Box } from "@mui/system";
import { Sheet } from "@mui/joy";
import NavLink from "../../atoms/NavLink";
import Image from "next/image";

export default function AppBar() {
  return (
    <Sheet
      sx={(theme) => ({
        px: "5%",
        py: "5px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: theme.vars.palette.neutral["100"],
        zIndex: theme.zIndex.table,
      })}
      component="header"
    >
      <Image
        src="/images/rectangle-logo.jpg"
        height={60}
        width={100}
        alt="goria logo"
      />
      <Box
        sx={{
          display: "flex",
        }}
        component="nav"
      >
        <NavLink href="#about">o nas</NavLink>
        <NavLink href="#about">koncerty</NavLink>
      </Box>
    </Sheet>
  );
}
