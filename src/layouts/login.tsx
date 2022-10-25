import React, { FC } from "react";

import { styled } from "@mui/material/styles";

import { Box } from "@mui/system";
import { FCXLogo } from "../components/Svgs";
import ThemeConfig, { Layouts } from "../styles/ThemeConfig";

const Main = styled("main")(({ theme }) => ({
  display: "flex",
  maxWidth: Layouts.main.maxWidth,
  margin: "0 auto",
  alignItems: "center",
  flexDirection: "column",

  [theme.breakpoints.up("xs")]: { padding: "0" },
  [theme.breakpoints.up("md")]: { padding: "2em" },
}));

function Background() {
  return (
    <Box
      sx={{
        background: ThemeConfig.palette.primary.main,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      component="section"
    />
  );
}

const LoginLayout: FC<{ children: React.ReactChildren | React.ReactChild }> = ({ children }) => {
  return (
    <div style={{
      position: "relative", minHeight: "100vh",
    }}
    >
      <Background />
      <Main>
        <FCXLogo
          theme="COLOUR"
          sx={{ margin: "1em 0 1.5em" }}
        />
        {children}
      </Main>
    </div>
  );
};

export default LoginLayout;

export function LoginWrapper(page: React.ReactElement) {
  return <LoginLayout>{page}</LoginLayout>;
}
