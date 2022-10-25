import React from "react";
import { styled } from "@mui/material/styles";

type Props = {
  message: string;
};

const StyledGridOverlay = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "auto !important",
}));

export function NoRowsOverlay({ message }: Props) {
  return (
    <StyledGridOverlay sx={{ height: "100% !important" }}>
      {message}
    </StyledGridOverlay>
  );
}
