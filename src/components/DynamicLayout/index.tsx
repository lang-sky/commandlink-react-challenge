import { FC } from "react";
import * as Styled from "./index.styles";
import { Field } from "types/field";

export interface DynamicLayoutProps {
  fieldSet: Array<Array<Field> | Field>;
  FieldComponent: FC<{ field: Field }>;
}

export const DynamicLayout: FC<DynamicLayoutProps> = ({ fieldSet, FieldComponent }) => {
  return (
    <Styled.Container>
      {fieldSet.map((d) => {
        const isArray = Array.isArray(d);
        return isArray ? (
          <Styled.Row key={`array-${d[0].id}`} $cols={d.length}>
            {d.map((v) => (
              <Styled.Col key={v.id}>
                <FieldComponent field={v} />
              </Styled.Col>
            ))}
          </Styled.Row>
        ) : (
          <Styled.Col key={d.id}>
            <FieldComponent field={d} />
          </Styled.Col>
        );
      })}
    </Styled.Container>
  );
};
