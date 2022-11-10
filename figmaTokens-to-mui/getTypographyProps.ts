import { cloneDeep, set } from "lodash";
import { getFigmaTokens } from "./utils/getFigmaTokens";
import { loopbackToValidNode } from "./utils/loopbackToValidNode";

type KeyValueProps = Record<string, string>;

function transformTokenismToMui(value: KeyValueProps) {
  const {
    textCase,
    ...validProps
  } = cloneDeep(value);
  return {
    ...validProps,
    textTransform: textCase,
  };
}

export function getTypographyProps() {
  const figmaTypography = getFigmaTokens().typography;
  const result = cloneDeep(figmaTypography);
  const propList: string[] = [];

  // Iterate through the Typography object until the "value" prop is found,
  // then merge it back to the parent node
  const iterate = (obj: any) => {
    Object.entries(obj).forEach(([ key, value ]) => {
      // Has nested object
      if (typeof value === "object") {
        if (key === "value" && typeof value === "object") {
          // Merge {value} -> [parent]
          set(
            result,
            propList,
            transformTokenismToMui(value as KeyValueProps)
          );
          propList.pop();
        } else {
          propList.push(key);
          // Check if key belongs in this nest
          loopbackToValidNode(
            figmaTypography,
            propList
          );
          iterate(value);
        }
      }
    });
  };

  iterate(figmaTypography);
  console.log(
    "getTypographyProps = ",
    result
  );
  return result;
}
