import {FormFieldConfig} from "./types";

export const FORM_FIELDS_ITEM: FormFieldConfig[] = [
  {key: "equipment", label: "Equipment", type: "select"},
  {
    key: "quantity",
    label: "Quantity",
    type: "number",
    placeholder: "Enter quantity",
  },
  {key: "storage", label: "Storage", type: "select"},
  {key: "responsible", label: "Responsible", type: "select"},
];

export const FORM_FIELDS_ASSET: FormFieldConfig[] = [
  {key: "name", label: "Name", type: "text"},
];

export type categories = { [key: string]: string };

export const categories: categories[] = [
  {name: "Tält och skydd", id: "1"},
  {name: "Kläder och komfort", id: "2"},
  {name: "Eld och matlagning", id: "3"},
  {name: "Köks- och matlagningsutrustning", id: "4"},
  {name: "Förvaring", id: "5"},
  {name: "Handverktyg", id: "6"},
  {name: "Belysning och teknik", id: "7"},
  {name: "Navigering och sjö", id: "8"},
  {name: "Kontorsmaterial", id: "9"}
];
