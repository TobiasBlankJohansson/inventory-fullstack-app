import {FormFieldItem} from "@/features/item/types/form-field-item.ts";

export interface FormFieldConfig {
  key: keyof FormFieldItem;
  label: string;
  type: "text" | "number" | "select";
  options?: string[];
  placeholder?: string;
}
