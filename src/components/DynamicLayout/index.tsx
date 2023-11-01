import { FC, ReactElement } from "react";
import * as Styled from "./index.styles";
import { Field } from "types/field";

interface DynamicLayoutProps {
  fieldSet: Array<Array<Field> | Field>;
  renderComponent: (field: Field) => ReactElement;
}

export const DynamicLayout: FC<DynamicLayoutProps> = ({ fieldSet, renderComponent }) => {
  return (
    <Styled.Container>
      {fieldSet.map((d) => {
        const isArray = Array.isArray(d);
        return isArray ? (
          <Styled.Row key={`array-${d[0].id}`} $cols={d.length}>
            {d.map((v) => (
              <Styled.Col key={v.id}>{renderComponent(v)}</Styled.Col>
            ))}
          </Styled.Row>
        ) : (
          <Styled.Col key={d.id}>{renderComponent(d)}</Styled.Col>
        );
      })}
    </Styled.Container>
  );
};
