import * as yup from "yup";
import { Field } from "types/field";
import { phoneRegExp } from "utils";

export const createYupSchema = (fieldSet: (Field | Field[])[]) => {
  return fieldSet.flat().reduce((schema, field) => {
    const { id, required } = field;

    if (!required && !["phone", "Email"].includes(id)) {
      return schema;
    }

    let validator = yup.string();
    if (required) {
      validator = validator.required("This field is required");
    }
    if (id === "phone") {
      validator = validator.matches(phoneRegExp, "Phone number is not valid");
    }
    if (id === "Email") {
      validator = validator.email();
    }
    schema[id] = validator;

    return schema;
  }, {} as { [key: string]: yup.StringSchema });
};
