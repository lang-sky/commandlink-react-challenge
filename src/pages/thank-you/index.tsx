import { Navigate } from "react-router-dom";
import { routes } from "constants/routes";

import { DynamicLayout } from "components/DynamicLayout";
import { Card } from "components/common";
import { FIELD_SET } from "constants/field-set";
import { useAppSelector } from "hooks";
import * as Styled from "./index.styles";
import { ResultField } from "./components/ResultField";

export const ThankYou = () => {
  const { data } = useAppSelector((state) => state.person);

  if (!data.firstName) {
    return <Navigate to={routes.index} />;
  }

  return (
    <Card>
      <Styled.Title>Thank you</Styled.Title>
      <DynamicLayout fieldSet={FIELD_SET} FieldComponent={ResultField} />
    </Card>
  );
};
