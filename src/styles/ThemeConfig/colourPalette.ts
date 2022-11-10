import { PaletteOptions } from "@mui/material/styles";
import { getPaletteProps } from "../../../figmaTokens-to-mui/getPaletteProps";

export const COLOURS = {
  primary: {
    light: "#3A8FA3",
    main: "#123347",
    dark: "#0D2D36",
  },
  secondary: {
    light: "#72E491",
    main: "#32A142",
    dark: "#288C37",
  },
  text: {
    primary: "#414042",
    secondary: "#FFF",
  },
  grey: { 300: "#5F7784" },
  success: {
    main: "#327F36",
    dark: "#2D7230",
  },
  error: {
    main: "#BD2A2A",
    dark: "#AA2525",
  },
  blue: {
    100: "#C5DCFA",
    800: "#0F56B3",
  },
  info: {
    main: "#006DA9",
    dark: "#006298",
  },
  warning: {
    main: "#F57C00",
    dark: "#DC6F00",
    contrastText: "#000000DE",
  },
  border: "#E0E0E0",
};

const figmaTokenPalette = getPaletteProps();

export const colourPalette: PaletteOptions = {
  ...COLOURS,
  ...figmaTokenPalette as any,
};
