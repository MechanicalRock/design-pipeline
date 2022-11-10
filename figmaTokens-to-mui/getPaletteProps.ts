import { cloneDeep, set } from "lodash";
import { getFigmaTokens } from "./utils/getFigmaTokens";
import { loopbackToValidNode } from "./utils/loopbackToValidNode";

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

export function getPaletteProps() {
  const figmaPalette = getFigmaTokens().palette;
  const result = cloneDeep(figmaPalette);
  let propList: string[] = [];

  // Iterate through the palette object until the "value" prop is found,
  // then merge it back to the parent node
  const iterate = (obj: any) => {
    Object.entries(obj).forEach(([ key, value ]) => {
      // If key is a root colour, reset the propList
      if (validPaletteColours.includes(key)) {
        propList = [key];
      }
      // Has nested object
      if (typeof value === "object") {
        propList.push(key);
        // Check if key belongs in this nest
        loopbackToValidNode(
          figmaPalette,
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

  iterate(figmaPalette);
  // console.log(
  //   "getPaletteProps = ",
  //   result
  // );
  return result;
}
