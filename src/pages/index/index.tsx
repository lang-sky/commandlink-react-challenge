import * as yup from "yup";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { DynamicLayout } from "components/DynamicLayout";
import { Button, Card } from "components/common";
import { createYupSchema } from "./helpers";
import { useAppDispatch, useAppSelector } from "hooks";
import { SET_PERSON } from "store/types";
import { routes } from "constants/routes";
import { Field, Person } from "types";
import { LabeledFormField } from "./components/LabeledFormField";
import { FC } from "react";

interface IndexProps {
  fieldSet: Array<Array<Field> | Field>;
}

export const Index: FC<IndexProps> = ({ fieldSet }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { data } = useAppSelector((state) => state.person);

  const validationSchema = yup.object().shape(createYupSchema(fieldSet));

  const handleSubmit = (values: Person) => {
    dispatch({ type: SET_PERSON, payload: values });
    navigate(routes.thankyou);
  };

  return (
    <Card>
      <Formik initialValues={data} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form>
          <DynamicLayout fieldSet={fieldSet} FieldComponent={LabeledFormField} />
          <Button type="submit" aria-label="submit">
            Submit
          </Button>
        </Form>
      </Formik>
    </Card>
  );
};
