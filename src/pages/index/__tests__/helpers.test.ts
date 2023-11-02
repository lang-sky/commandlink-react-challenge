import * as yup from "yup";
import { createYupSchema } from "../helpers";
import { phoneRegExp } from "utils";
import { Field } from "types";
import { reestablishJson } from "utils/testUtils";

describe("createYupSchema", () => {
  test("should return correct Yup Schema", () => {
    const fieldSet: (Field | Field[])[] = [
      [
        {
          id: "firstName",
          placeholder: "First name",
          required: true,
          type: "text",
        },
        {
          id: "lastName",
          placeholder: "Last name",
          type: "text",
        },
      ],
      {
        id: "email",
        required: true,
        type: "text",
      },
      {
        id: "phone",
        required: true,
        type: "text",
      },
    ];

    const expected = {
      firstName: yup.string().required("This field is required"),
      lastName: yup.string(),
      phone: yup
        .string()
        .required("This field is required")
        .matches(phoneRegExp, "Phone number is not valid"),
      email: yup.string().required("This field is required").email(),
    };

    expect(reestablishJson(createYupSchema(fieldSet))).toStrictEqual(reestablishJson(expected));
  });
});
