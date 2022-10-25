import ScrollTop from "@/components/ScrollToTop";
import Buttons from "@/design/Content/buttons";
import ColourPalette from "@/design/Content/colourPalette";
import TypographyText from "@/design/Content/typography";
import { styled } from "@mui/material/styles";

import { DesignWrapper } from "../layouts/design";

const SectionWrapper = styled("div")({
  "& section[id]": {
    marginTop: "7em",

    "& > h3": {
      fontSize: "1.6rem",
      marginTop: "1em",
      marginBottom: "0.2em",
    },
  },
  "& hr": { margin: "1em 0 2em" },
});

export default function Design() {
  return (
    <SectionWrapper data-testid="designSectionWrapper">
      <ScrollTop />
      <TypographyText />
      <ColourPalette />
      <Buttons />
    </SectionWrapper>
  );
}

Design.getLayout = DesignWrapper;
Design.title = "Component Library";
