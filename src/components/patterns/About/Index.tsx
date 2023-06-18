"use client";

import { Sheet, Typography } from "@mui/joy";
import { Box } from "@mui/system";
import Image from "next/image";

export default function About() {
  return (
    <Sheet
      sx={{
        py: "120px",
        pb: "200px",
      }}
      id="about"
    >
      <Box
        sx={{
          mx: "auto",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src="/images/about-background.jpg"
          width={700}
          height={500}
          alt="band playing"
        />
        <Sheet
          sx={(theme) => ({
            width: "45%",
            p: "30px",
            mx: "auto",
            position: "absolute",
            top: "250px",
            boxShadow: `0px -13px 55px 32px ${theme.vars.palette.background.surface}`,
          })}
        >
          <Typography sx={{ mb: "20px", textAlign: "center" }} level="h1">
            Goria
          </Typography>
          <Typography level="body1">
            Goria to formacja pięciu młodych muzyków, którzy połączyli swoje
            siły w lutym i od tego czasu z pasją dzielą się z innymi swoim
            zamiłowaniem do cięższych brzmień. Goria to formacja pięciu młodych
            muzyków, którzy połączyli swoje siły w lutym i od tego czasu z pasją
            dzielą się z innymi swoim zamiłowaniem do cięższych brzmień. Goria
            to formacja pięciu młodych muzyków, którzy połączyli swoje siły w
            lutym i od tego czasu z pasją dzielą się z innymi swoim zamiłowaniem
            do cięższych brzmień
          </Typography>
        </Sheet>
      </Box>
    </Sheet>
  );
}
