import { FormFieldConfig } from "./types";

export const FORM_FIELDS_ITEM: FormFieldConfig[] = [
  { key: "equipment", label: "Equipment", type: "select" },
  {
    key: "quantity",
    label: "Quantity",
    type: "number",
    placeholder: "Enter quantity",
  },
  { key: "storageArea", label: "Storage Area", type: "select" },
  { key: "responsible", label: "Responsible", type: "select" },
];
