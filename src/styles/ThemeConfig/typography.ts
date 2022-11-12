import { getTypographyProps } from "@mechanicalrock/figma-tokens-to-mui";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import tokens from "../../../tokens.json";
import { colourPalette } from "./colourPalette";

const baseTypography: TypographyOptions = {
  // fontSize: 16,
  allVariants: {
    fontFamily: "sans-serif",
    color: "#333",
  },
  button: {
    fontFamily: "sans-serif",
    lineHeight: "1.5rem",
  },
  h1: {
    fontWeight: 700,
    letterSpacing: "-0.7px",
    fontSize: "2.25rem",
    marginBottom: "1.5rem",
    color: colourPalette.primary.main,
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
    color: colourPalette.secondary.dark,
    fontWeight: 700,
    fontSize: "0.875rem",
  },
};

export const typography: TypographyOptions = getTypographyProps(
  tokens,
  "global",
  baseTypography
);
