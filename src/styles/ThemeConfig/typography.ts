import { TypographyOptions } from "@mui/material/styles/createTypography";
import { COLOURS } from "./colourPalette";
import { getTypographyProps } from "./processTokenFile";

const baseTypography: TypographyOptions = {
  // fontSize: 16,
  allVariants: {
    fontFamily: "DMSans, sans-serif",
    color: "#333",
  },
  button: {
    fontFamily: "DMSansBold, sans-serif",
    lineHeight: "1.5rem",
  },
  h1: {
    fontWeight: 700,
    letterSpacing: "-0.7px",
    fontSize: "2.25rem",
    marginBottom: "1.5rem",
    color: COLOURS.primary.main,
  },
  h2: {
    fontWeight: 700,
    fontSize: "1.75rem",
    marginBottom: "1.5rem",
  },
  h3: {
    fontSize: "1.5em",
    fontWeight: 700,
    marginBottom: "1.5rem",
  },
  h4: {
    fontSize: "1.25em",
    fontWeight: 700,
    marginBottom: "1.5rem",
  },
  h5: {
    fontSize: "1.125em",
    fontWeight: 700,
    marginBottom: "1.5rem",
  },
  h6: {
    fontSize: "1.1rem",
    marginBottom: "1.5rem",
  },
  overline: { letterSpacing: "0.125em" },
  body2: { fontSize: "0.8rem" },
  link: {
    textDecoration: "underline",
    cursor: "pointer",
    color: COLOURS.secondary.dark,
    fontWeight: 700,
    fontSize: "0.875rem",
  },
};

const figmaTokenTypography = getTypographyProps();

export const typography: TypographyOptions = {
  ...baseTypography,
  ...figmaTokenTypography as any,
};
