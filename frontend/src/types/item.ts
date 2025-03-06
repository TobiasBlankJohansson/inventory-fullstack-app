export type Item = {
  id: string;
  name: string;
  quantity: string;
  storageArea: string;
};

export interface FormFieldConfig {
  key: keyof Item;
  label: string;
  type: "text" | "number" | "select";
  options?: string[];
  placeholder?: string;
}
