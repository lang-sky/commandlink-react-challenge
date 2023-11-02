import * as yup from "yup";
import { Field } from "types/field";
import { phoneRegExp } from "utils";

export const createYupSchema = (fieldSet: (Field | Field[])[]) => {
  return fieldSet.flat().reduce((schema, field) => {
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
