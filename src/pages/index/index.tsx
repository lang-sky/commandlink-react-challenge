import * as yup from "yup";
import { useFormik } from "formik";
import { DynamicLayout } from "components/DynamicLayout";
import { Field } from "types/field";
import { FIELD_SET } from "constants/field-set";
import { Button, Card, Input, Label, Option, Select, Textarea } from "components/common";
import { createYupSchema } from "./helpers";
import * as Styled from "./index.styles";
import { PersonState } from "store/reducers/personReducer";
import { useAppDispatch } from "hooks";
import { SET_PERSON } from "store/types";

export const Index = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {} as PersonState,
    validationSchema: yup.object().shape(createYupSchema(FIELD_SET)),
    onSubmit: (values) => {
      dispatch({ type: SET_PERSON, payload: values });
    },
  });

  const renderComponent = (field: Field) => {
    const render = () => {
      switch (field.type) {
        case "text":
          return (
            <Input
              id={field.id}
              name={field.id}
              aria-required={field.required}
              type="text"
              aria-label={field.id}
              placeholder={field.placeholder ?? field.id}
              value={formik.values[field.id]}
              onChange={formik.handleChange}
            />
          );
        case "textarea":
          return (
            <Textarea
              id={field.id}
              name={field.id}
              aria-required={field.required}
              aria-label={field.id}
              placeholder={field.placeholder ?? field.id}
              value={formik.values[field.id]}
              onChange={formik.handleChange}
            />
          );
        case "select":
          return (
            <Select
              id={field.id}
              name={field.id}
              aria-required={field.required}
              aria-label="field.id"
              placeholder={field.placeholder ?? field.id}
              value={formik.values[field.id]}
              onChange={formik.handleChange}
            >
              {field.options.map((v) => (
                <Option key={v} value={v}>
                  {v}
                </Option>
              ))}
            </Select>
          );
      }
    };

    return (
      <div>
        <Label htmlFor={field.id} aria-required={field.required}>
          {field.placeholder ?? field.id} {!!field.required && "*"}
        </Label>
        {render()}
        {formik.touched[field.id] && formik.errors[field.id] && (
          <Styled.ErrorText>{formik.errors[field.id]}</Styled.ErrorText>
        )}
      </div>
    );
  };

  return (
    <Card>
      <form onSubmit={formik.handleSubmit}>
        <DynamicLayout fieldSet={FIELD_SET} renderComponent={renderComponent} />
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
};
