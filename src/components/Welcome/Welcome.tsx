"use client";

import Image from "next/image";
import Grid from "@mui/joy/Grid";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";

export default function Welcome() {
  return (
    <Grid
      sx={{
        minHeight: "90vh",
        backgroundColor: (theme) => theme.vars.palette.background.body,
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
          <Image src="/images/logo.jpg" width={300} height={250} alt="goria" />
          <Typography
            sx={{
              display: "block",
              minWidth: "35%",
              ml: "20px",
            }}
          >
            {" "}
            asjfhaskf jaslkfj jasdl fjsklg afsasf asf asf asf af ndlajksd
            fgnlkdj fgnjkdlf gfd gjkd fbg jkdfgkjdfgjdkfg{" "}
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
          src="/images/background1.jpg"
          width={470}
          height={670}
          alt="band"
          style={{
            filter: "brightness(60%)",
          }}
        />
      </Grid>
    </Grid>
  );
}
