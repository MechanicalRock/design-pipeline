import { FC } from "react";

import AppBar from "@/components/Design/AppBar";
import { styled } from "@mui/material/styles";

const Main = styled("main")({
  display: "flex",
  height: "calc(100vh - var(--appBarHeight) - var(--footerHeight))",
});

const Content = styled("div")({
  margin: "0 auto",
  width: "50em",
  "section > h3": { marginTop: "2em" },
});

const DesignLayout: FC<{ children: React.ReactElement }> = ({ children }) => (
  <>
    <AppBar />
    <Main>
      <Content>{children}</Content>
    </Main>
  </>
);

export default DesignLayout;

export function DesignWrapper(page: React.ReactElement) {
  return <DesignLayout>{page}</DesignLayout>;
}
