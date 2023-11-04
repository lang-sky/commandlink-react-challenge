import * as yup from "yup";
import { Form, Formik, FormikProps } from "formik";
import { useNavigate } from "react-router-dom";
import { DynamicLayout } from "components/DynamicLayout";
import { Card } from "components/common";
import { createYupSchema } from "./helpers";
import { useAppDispatch, useAppSelector } from "hooks";
import { SET_PERSON } from "store";
import { routes } from "constants/routes";
import { Field, Person } from "types";
import { LabeledFormField } from "./components/LabeledFormField";
import { FC, useEffect, useRef } from "react";
import * as Styled from "./index.styles";

interface IndexProps {
  fieldSet: Array<Array<Field> | Field>;
}

export const Index: FC<IndexProps> = ({ fieldSet }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { data } = useAppSelector((state) => state.person);
  const formRef = useRef<FormikProps<Person>>(null);

  const validationSchema = yup.object().shape(createYupSchema(fieldSet));

  useEffect(() => {
    const showConfirmationWarning = (e: BeforeUnloadEvent) => {
      const touched = formRef.current?.touched ?? {};
      if (!Object.keys(touched).length) {
        return;
      }

      var confirmationMessage =
        "It looks like you have been editing something. " +
        "If you leave before saving, your changes will be lost.";

      (e || window.event).returnValue = confirmationMessage; //Gecko + IE
      return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
    };
    window.addEventListener("beforeunload", showConfirmationWarning);

    return () => {
      window.removeEventListener("beforeunload", showConfirmationWarning);
    };
  }, []);

  const handleSubmit = (values: Person) => {
    dispatch({ type: SET_PERSON, payload: values });
    navigate(routes.thankyou);
  };

  console.log("formRef.current?.touched", formRef.current?.touched);

  return (
    <Card>
      <Formik
        initialValues={data}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        innerRef={formRef}
      >
        <Form>
          <DynamicLayout fieldSet={fieldSet} FieldComponent={LabeledFormField} />
          <Styled.Submit type="submit" aria-label="submit">
            Submit
          </Styled.Submit>
        </Form>
      </Formik>
    </Card>
  );
};
