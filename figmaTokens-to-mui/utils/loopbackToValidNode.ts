import { get } from "lodash";

/*
  @def Check if key belongs in this nest
*/
export function loopbackToValidNode(figmaToken: Record<string, any>, propList: string[]) {
  const propExists = get(
    figmaToken,
    propList,
    false
  );

  if (!propExists) {
    propList.pop();
  }
  return;
}
