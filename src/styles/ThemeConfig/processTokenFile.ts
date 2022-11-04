import {
  cloneDeep, get, set
} from "lodash";
import tokens from "../../../tokens.json";

const rootProperty = "global";

function getSafeToken(): any {
  if (typeof tokens === "undefined") {
    return {
      palette: {},
      typography: {},
    };
  }
  return tokens[rootProperty as keyof typeof tokens];
}

const validPaletteColours = [
  "primary",
  "secondary",
  "error",
  "warning",
  "info",
  "success",
  "mode",
  "tonalOffset",
  "contrastThreshold",
  "common",
  "grey",
  "text",
  "divider",
  "action",
  "background",
];

function loopbackToValidProp(figmaTokenPalette: Record<string, any>, propList: string[]) {
  const propExists = get(
    figmaTokenPalette,
    propList,
    false
  );

  if (!propExists) {
    propList.pop();
  }
  return;
}

export function getPaletteProps() {
  const figmaTokenPalette = getSafeToken().palette;
  const result = cloneDeep(figmaTokenPalette);
  let propList: string[] = [];

  // Iterate through the palette object until the "value" prop is found,
  // then merge it back to the parent node
  const iterate = (obj: any) => {
    Object.keys(obj).forEach((key) => {
      const value = obj[key];
      // If key is a root colour, reset the propList
      if (validPaletteColours.includes(key)) {
        propList = [key];
      }
      // Has nested object
      if (typeof value === "object") {
        propList.push(key);
        // Check if key belongs in this nest
        loopbackToValidProp(
          figmaTokenPalette,
          propList
        );
        iterate(value);
      } else if (key === "value" && typeof value === "string" && value.length > 0) {
        // Merge {value} -> [parent]
        set(
          result,
          propList,
          value
        );
        propList.pop();
      }
    });
  };

  iterate(figmaTokenPalette);
  // console.log(
  //   "getPaletteProps = ",
  //   result
  // );
  return result;
}

export function getTypographyProps() {
  const figmaTokenPalette = getSafeToken().typography;
  const result = cloneDeep(figmaTokenPalette);
  let propList: string[] = [];

  // Iterate through the palette object until the "value" prop is found,
  // then merge it back to the parent node
  const iterate = (obj: any) => {
    Object.keys(obj).forEach((key) => {
      const value = obj[key];
      // If key is a root colour, reset the propList
      if (validPaletteColours.includes(key)) {
        propList = [key];
      }
      // Has nested object
      if (typeof value === "object") {
        if (key === "value" && typeof value === "object") {
          // Merge {value} -> [parent]
          set(
            result,
            propList,
            value
          );
          propList.pop();
        } else {
          propList.push(key);
          // Check if key belongs in this nest
          loopbackToValidProp(
            figmaTokenPalette,
            propList
          );
          iterate(value);
        }
      }
    });
  };

  iterate(figmaTokenPalette);
  // console.log(
  //   "getTypographyProps = ",
  //   result
  // );
  return result;
}
