import { MessageParams } from "yup/lib/types";

export function generateLabelFromPath(params: MessageParams | string) {
  const fieldLabel = (typeof params === "string" ? params : params.path)
    .replace(/([A-Z])/g, " $1")
    .replace(/([0-9])/g, " $1");
  const label = fieldLabel.charAt(0).toUpperCase() + fieldLabel.slice(1);
  return label;
}

export function generateRequiredString(params: MessageParams) {
  const label = generateLabelFromPath(params);
  const finalResult = `${label} is required`;
  return finalResult;
}
