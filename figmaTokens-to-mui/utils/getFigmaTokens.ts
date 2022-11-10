import tokens from "../../tokens.json";

const rootProperty = process.env.FIGMA_THEME_NAME; // || "global";

export function getFigmaTokens(): any {
  if (typeof tokens === "undefined") {
    return {
      palette: {},
      typography: {},
    };
  }
  return tokens[rootProperty as keyof typeof tokens];
}
