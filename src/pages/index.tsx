import { DynamicLayout } from "components/DynamicLayout";
import { Field } from "types/field";
import { FIELD_SET } from "constants/field-set";
import { Card } from "components/common";

export const Index = () => {
  const renderComponent = (field: Field) => {
    return <div>{field.id}</div>;
  };

  return (
    <Card>
      <DynamicLayout fieldSet={FIELD_SET} renderComponent={renderComponent} />
    </Card>
  );
};
