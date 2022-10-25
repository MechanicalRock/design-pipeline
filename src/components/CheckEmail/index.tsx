import { Stack, Typography } from "@mui/material";
import React from "react";
import { CheckEmailSvg } from "../Svgs";

function CheckEmail({ children }: { children?: React.ReactNode }) {
  return (
    <Stack
      direction="column"
      padding="2em"
      alignItems="center"
      spacing={5}
      textAlign="center"
    >
      <CheckEmailSvg sx={{ fontSize: "6em" }} />
      <Typography variant="h2">Check your email</Typography>
      {children}
    </Stack>
  );
}

export { CheckEmail };
