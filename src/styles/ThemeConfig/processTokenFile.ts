import { set } from "lodash";
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

export function getPaletteProps() {
  const figmaTokenPalette = getSafeToken().palette;
  let propList: string[] = [];

  // Iterate through the palette object until the "value" prop is found,
  // then merge it back to the parent node
  const iterate = (obj: any) => {
    Object.keys(obj).forEach((key) => {
      const value = obj[key];
      // Has nested object
      if (typeof value === "object") {
        propList.push(key);
        iterate(value);
      } else if (key === "value" && typeof value === "string" && value.length > 0) {
        // Merge {value} -> [parent]
        set(
          figmaTokenPalette,
          propList,
          value
        );
        propList = [];
      }
    });
  };

  iterate(figmaTokenPalette);
  return figmaTokenPalette;
}
