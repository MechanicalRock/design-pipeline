import {
  fireEvent, screen, waitFor
} from "@testing-library/react";
import { AnyObjectSchema } from "yup";

export function getField(testid: string) {
  const field = screen.queryByTestId(testid)!;
  expect(field).not.toBe(undefined);
  expect(field).not.toBe(null);
  return field;
}

export function getFieldInput(testid: string) {
  const inputField = getField(testid).querySelector("input")!;
  expect(inputField).not.toBe(undefined);
  expect(inputField).not.toBe(null);
  return inputField;
}

//check value of a testid
export function getFieldInputValue(testid: string, value: string) {
  const input = getFieldInput(testid);
  expect(input.getAttribute("value")).toEqual(value);
}

export async function setFieldInputByEl(el: HTMLInputElement, value: string) {
  await waitFor(() => {
    fireEvent.change(el, { target: { value } });
  });

  await waitFor(() => {
    expect(el.value).toEqual(value);
  });
}

export async function setFieldInputById(testid: string, value: string) {
  const el = getFieldInput(testid)!;
  await setFieldInputByEl(el, value);
}

const ignoreKeys = ["userId"];
export async function TestFormFields(
  schema: AnyObjectSchema,
  scenario: "SCHEMA" | "INITIAL FIELD" | "SET FIELD" | "VALIDATE"
) {
  const keys = Object.keys(schema.fields);
  const requiredFieldNames = getRequiredFieldNames(schema, keys);

  switch (scenario) {
    case "SCHEMA": {
      expect(keys.length).toBeGreaterThan(0);
      break;
    }
    case "INITIAL FIELD": {
      for (const fieldName of keys) {
        if (!ignoreKeys.includes(fieldName)) {
          const testId = `field-${fieldName}`;
          expect(screen.queryByTestId(testId)).not.toBeNull();
        }
      }
      break;
    }
    case "SET FIELD": {
      for (const fieldName of requiredFieldNames) {
        const testId = `field-${fieldName}`;
        let value = "";
        switch (fieldName) {
          case "email":
            value = "mocked@email.com";
            break;
          case "countryCode":
            value = "AU";
            break;
          case "state":
            value = "WA";
            break;
          default:
            value = `mocked-${fieldName}`;
            break;
        }
        await setFieldInputById(testId, value);
      }
      break;
    }
    case "VALIDATE": {
      for (const fieldName of requiredFieldNames) {
        const testId = `field-${fieldName}`;
        expect(
          screen.queryByTestId(testId)!.textContent?.includes("is required")
        ).not.toBeNull();
      }
      break;
    }
  }
}

function getRequiredFieldNames(schema: AnyObjectSchema, keys: string[]) {
  const mandatedKeys = ["lineOne"];
  return keys.filter((fieldName) => {
    if (mandatedKeys.includes(fieldName)) {
      return fieldName;
    }
    if (!ignoreKeys.includes(fieldName)) {
      const field = schema.fields[fieldName as keyof AnyObjectSchema];
      return field.tests.some(
        (t: any) => t.OPTIONS.name === "required" && t.OPTIONS.exclusive
      );
    }
  });
}
