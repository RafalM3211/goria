"use client";

import { Divider, Stack, Typography, useTheme } from "@mui/joy";
import { Box } from "@mui/system";
import ShowEntry from "./ShowEntry";

export default function Shows() {
  const theme = useTheme();
  const sectionBgColor = theme.vars.palette.background.bodyDark;

  return (
    <Box
      sx={{
        py: "100px",
        backgroundColor: sectionBgColor,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Divider
        sx={{
          mb: "100px",
          width: "90%",
          mx: "auto",
        }}
      >
        <Typography level="display2">Koncerty</Typography>
      </Divider>
      <Stack
        sx={{
          width: "75%",
        }}
      >
        <ShowEntry />
        <ShowEntry />
      </Stack>
    </Box>
  );
}
