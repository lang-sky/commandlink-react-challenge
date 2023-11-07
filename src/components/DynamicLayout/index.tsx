import { ComponentType, FC, Fragment } from "react";
import * as Styled from "./index.styles";
import { Field, RecursiveFieldArray } from "types";

export interface DynamicLayoutProps {
  fieldSet: RecursiveFieldArray;
  FieldComponent: ComponentType<{ field: Field }>;
  depth?: number;
}

export const DynamicLayout: FC<DynamicLayoutProps> = ({ fieldSet, FieldComponent, depth = 0 }) => {
  return (
    <Fragment>
      {fieldSet.map((v, i) =>
        Array.isArray(v) ? (
          <Styled.Row key={`row-${depth}-${i}`} $cols={v.length}>
            <DynamicLayout fieldSet={v} FieldComponent={FieldComponent} depth={depth + 1} />
          </Styled.Row>
        ) : (
          <Styled.Col key={v.id}>
            <FieldComponent field={v} />
          </Styled.Col>
        )
      )}
    </Fragment>
  );
};
