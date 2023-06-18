"use client";

import { Sheet, Typography, Stack, Divider, Link } from "@mui/joy";
import Image from "next/image";

export default function ShowEntry() {
  return (
    <Sheet
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "150px",
        my: "50px",
        pr: "25px",
        position: "relative",
      }}
    >
      <Image
        src={"/images/shows/ambasada.png"}
        width={150}
        height={150}
        alt="gig place logo or photo"
      />
      <Stack>
        <Typography level="body2">miejscowość</Typography>
        <Typography level="h2">Lubliniec</Typography>
      </Stack>
      <Stack>
        <Typography level="body2">miejsce</Typography>
        <Typography level="h5">ambasada pub</Typography>
      </Stack>
      <Stack
        sx={{
          textAlign: "center",
        }}
      >
        <Typography>18.07.2023</Typography>
        <Divider sx={{ my: "5px" }} />
        <Typography>20:00</Typography>
      </Stack>
      <Link
        sx={{ position: "absolute", right: "20px", bottom: "10px" }}
        href="https://www.facebook.com/profile.php?id=100092541858230"
      >
        Link do wydarzenia
      </Link>
    </Sheet>
  );
}
