import {Item} from "./item";

export interface FormFieldConfig {
  key: keyof Item;
  label: string;
  type: "text" | "number" | "select";
  options?: string[];
  placeholder?: string;
}



