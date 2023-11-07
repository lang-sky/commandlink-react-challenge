import * as yup from "yup";
import { Field, RecursiveArray } from "types";
import { phoneRegExp } from "utils";

export const flattenRecursiveArray = <T>(arr: RecursiveArray<T>): T[] => {
  return arr.reduce<T[]>((result, current) => {
    if (Array.isArray(current)) {
      result.push(...flattenRecursiveArray(current));
    } else {
      result.push(current);
    }
    return result;
  }, []);
};

export const createYupSchema = (fieldArray: Field[]) => {
  return fieldArray.reduce((schema, field) => {
    const { id, required } = field;

    let validator = yup.string();
    if (required) {
      validator = validator.required("This field is required");
    }
    if (id === "phone") {
      validator = validator.matches(phoneRegExp, "Phone number is not valid");
    }
    if (id === "email") {
      // yup email validation is not correct, this can be changed by email regex check
      validator = validator.email();
    }
    schema[id] = validator;

    return schema;
  }, {} as { [key: string]: yup.StringSchema });
};
