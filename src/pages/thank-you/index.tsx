import { DynamicLayout } from "components/DynamicLayout";
import { Card } from "components/common";
import { FIELD_SET } from "constants/field-set";
import { useAppSelector } from "hooks";
import { Field } from "types/field";
import * as Styled from "./index.styles";
import { Navigate } from "react-router-dom";
import { routes } from "constants/routes";
import { capitalCase } from "change-case";

export const ThankYou = () => {
  const { data } = useAppSelector((state) => state.person);

  if (!data.firstName) {
    return <Navigate to={routes.index} />;
  }

  const renderComponent = (field: Field) => {
    const label = capitalCase(field.id);
    switch (field.type) {
      case "textarea":
        return (
          <Styled.Field>
            <Styled.Label>{label}:</Styled.Label>
            {data[field.id]
              ? data[field.id]?.split("\n").map((p, idx) => <p key={idx}>{p}</p>)
              : "N/A"}
          </Styled.Field>
        );
      default:
        return (
          <Styled.Field>
            <Styled.Label>{label}:</Styled.Label> {data[field.id] || "N/A"}
          </Styled.Field>
        );
    }
  };

  return (
    <Card>
      <Styled.Title>Thank you</Styled.Title>
      <DynamicLayout fieldSet={FIELD_SET} renderComponent={renderComponent} />
    </Card>
  );
};
