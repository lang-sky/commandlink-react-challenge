import { FC } from "react";
import { useAppSelector } from "hooks";
import { Field } from "types";

import * as Styled from "./ResultField.styles";
import { capitalizeFirstLetter } from "utils";

export const ResultField: FC<{ field: Field }> = ({ field }) => {
  const label = capitalizeFirstLetter(field.id);
  const { data } = useAppSelector((state) => state.person);

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
