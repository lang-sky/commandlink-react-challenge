export interface GeneralField {
  id: string;
  placeholder?: string;
  required?: boolean;
  type: "text" | "textarea";
}

export interface SelectField {
  id: string;
  options: Array<string>;
  placeholder?: string;
  type: "select";
}

export type Field = GeneralField | SelectField;
