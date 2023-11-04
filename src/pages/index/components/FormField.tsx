import { Input, Option, Select, Textarea } from "components/common";
import { useFormikContext } from "formik";
import { FC } from "react";
import { Field, Person } from "types";
import { capitalizeFirstLetter } from "utils";

export const FormField: FC<{ field: Field }> = ({ field }) => {
  const label = capitalizeFirstLetter(field.id);
  const {
    values: { [field.id]: value },
    handleChange,
    handleBlur,
  } = useFormikContext<Person>();

  switch (field.type) {
    case "text":
      return (
        <Input
          id={field.id}
          name={field.id}
          aria-required={field.required}
          type="text"
          placeholder={field.placeholder ?? label}
          value={value ?? ""}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      );
    case "textarea":
      return (
        <Textarea
          id={field.id}
          name={field.id}
          aria-required={field.required}
          placeholder={field.placeholder ?? label}
          value={value ?? ""}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      );
    case "select":
      return (
        <Select
          id={field.id}
          name={field.id}
          aria-required={field.required}
          placeholder={field.placeholder ?? label}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <Option value="">{field.placeholder ?? ""}</Option>
          {field.options.map((v) => (
            <Option key={v} value={v}>
              {v}
            </Option>
          ))}
        </Select>
      );
  }
};
