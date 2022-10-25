import { responsiveFontSizes } from "@mui/material";
import { createTheme } from "@mui/material/styles";

// TODO, ADDING THIS BREAKS TSC!
// import type {} from "@mui/x-data-grid-pro/themeAugmentation";

import { colourPalette } from "./colourPalette";
import { componentOverrides } from "./componentOverrides";
import { typography } from "./typography";

export const Layouts = { main: { maxWidth: "1110px" } };

declare module "@mui/material/styles" {
  interface TypographyVariants {
    link: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    link?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    link: true;
  }
}

const theme = createTheme({
  components: componentOverrides,
  palette: colourPalette,
  typography: typography,
});

export default responsiveFontSizes(theme, { factor: 2 });
