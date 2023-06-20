"use client";

import Image from "next/image";
import Grid from "@mui/joy/Grid";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";

export default function Welcome() {
  return (
    <Grid
      sx={{
        minHeight: "100vh",
        pb: "10vh",
        backgroundColor: (theme) => theme.vars.palette.background.bodyDark,
      }}
      container
      spacing={0}
    >
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        xs={6}
      >
        <Sheet
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            p: "20px",
            py: "30px",
            position: "relative",
            left: "50px",
            zIndex: 4,
          }}
        >
          <Image
            src="/images/square-logo.jpg"
            width={300}
            height={250}
            alt="goria"
          />
          <Typography
            sx={{
              display: "block",
              minWidth: "35%",
              ml: "20px",
            }}
          >
            {" "}
            Goria to formacja pięciu młodych muzyków, którzy połączyli swoje
            siły w lutym i od tego czasu z pasją dzielą się z innymi swoim
            zamiłowaniem do cięższych brzmień.{" "}
          </Typography>
        </Sheet>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
        }}
        xs={6}
      >
        <Image
          src="/images/welcome-background.jpg"
          width={470}
          height={670}
          alt="band"
          style={{
            filter: "brightness(60%)",
            boxShadow: "-25px 5px 230px #09090d",
          }}
        />
      </Grid>
    </Grid>
  );
}
