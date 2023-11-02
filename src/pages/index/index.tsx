import * as yup from "yup";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { DynamicLayout } from "components/DynamicLayout";
import { FIELD_SET } from "constants/field-set";
import { Button, Card } from "components/common";
import { createYupSchema } from "./helpers";
import { useAppDispatch, useAppSelector } from "hooks";
import { SET_PERSON } from "store/types";
import { routes } from "constants/routes";
import { Person } from "types";
import { LabeledFormField } from "./components/LabeledFormField";

export const Index = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { data } = useAppSelector((state) => state.person);

  const validationSchema = yup.object().shape(createYupSchema(FIELD_SET));

  const handleSubmit = (values: Person) => {
    dispatch({ type: SET_PERSON, payload: values });
    navigate(routes.thankyou);
  };

  return (
    <Card>
      <Formik initialValues={data} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form>
          <DynamicLayout fieldSet={FIELD_SET} FieldComponent={LabeledFormField} />
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    </Card>
  );
};
