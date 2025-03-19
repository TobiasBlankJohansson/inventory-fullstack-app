import {FormField} from "@/types/form-field-item.ts";

export interface FormFieldConfig {
  key: keyof FormField;
  label: string;
  type: "text" | "number" | "select";
  options?: string[];
  placeholder?: string;
}
