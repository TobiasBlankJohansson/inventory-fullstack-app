import { FormFieldConfig } from "./types";

export const FORM_FIELDS_ITEM: FormFieldConfig[] = [
  { key: "id", label: "Id", type: "text", placeholder: "Enter id" },
  { key: "name", label: "Name", type: "text", placeholder: "Enter name" },
  {
    key: "quantity",
    label: "Quantity",
    type: "number",
    placeholder: "Enter quantity",
  },
  { key: "storageArea", label: "Storage Area", type: "select" },
  { key: "responsible", label: "Responsible", type: "select" },
];
