import { Label } from "components/common";
import { useFormikContext } from "formik";
import { FC } from "react";
import { Field, Person } from "types";
import { FormField } from "./FormField";
import * as Styled from "./LabeledFormField.styles";
import { capitalizeFirstLetter } from "utils";

export const LabeledFormField: FC<{ field: Field }> = ({ field }) => {
  const label = capitalizeFirstLetter(field.id);
  const {
    submitCount,
    errors: { [field.id]: error },
  } = useFormikContext<Person>();

  return (
    <div>
      <Label htmlFor={field.id} $required={field.required}>
        {label}
      </Label>
      <FormField field={field} />
      {!!submitCount && !!error && <Styled.ErrorText>{error}</Styled.ErrorText>}
    </div>
  );
};
