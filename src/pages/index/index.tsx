import * as yup from "yup";
import { useFormik } from "formik";
import { DynamicLayout } from "components/DynamicLayout";
import { Field } from "types/field";
import { FIELD_SET } from "constants/field-set";
import { Button, Card, Input, Label, Option, Select, Textarea } from "components/common";
import { createYupSchema } from "./helpers";
import * as Styled from "./index.styles";
import { useAppDispatch, useAppSelector } from "hooks";
import { SET_PERSON } from "store/types";
import { useNavigate } from "react-router-dom";
import { routes } from "constants/routes";
import { FormEvent, useState } from "react";
import { capitalCase } from "change-case";

export const Index = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [submitTried, setSubmitTried] = useState(false);
  const { data } = useAppSelector((state) => state.person);

  const formik = useFormik({
    initialValues: data,
    validationSchema: yup.object().shape(createYupSchema(FIELD_SET)),
    onSubmit: (values) => {
      dispatch({ type: SET_PERSON, payload: values });
      navigate(routes.thankyou);
    },
  });

  const renderComponent = (field: Field) => {
    const label = capitalCase(field.id);

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
              placeholder={field.placeholder ?? label}
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
              placeholder={field.placeholder ?? label}
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
              placeholder={field.placeholder ?? label}
              value={formik.values[field.id]}
              onChange={formik.handleChange}
            >
              <Option value=""></Option>
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
          {label} {!!field.required && "*"}
        </Label>
        {render()}
        {submitTried && formik.errors[field.id] && (
          <Styled.ErrorText>{formik.errors[field.id]}</Styled.ErrorText>
        )}
      </div>
    );
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitTried(true);
    formik.handleSubmit();
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <DynamicLayout fieldSet={FIELD_SET} renderComponent={renderComponent} />
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
};
