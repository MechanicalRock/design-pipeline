import {
  Box, useMediaQuery, useTheme
} from "@mui/material";
import React from "react";

function BoxWithFullScreen({ children }: { children: React.ReactChild }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      data-testid="width-controller"
      data-fullscreen={fullScreen}
      sx={{
        padding: 4,
        width: fullScreen
          ? "calc(100% - 1em)"
          : "100%",
        margin: "0 auto",
        maxWidth: "28em",
        background: "white",
        zIndex: 1,
        borderRadius: "0.2em",
      }}
    >
      {children}
    </Box>
  );
}

export { BoxWithFullScreen };
