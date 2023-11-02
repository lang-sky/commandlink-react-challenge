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
