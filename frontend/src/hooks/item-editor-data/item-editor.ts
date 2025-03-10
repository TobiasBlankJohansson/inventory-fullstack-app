import { useFetchItems } from "../fetch-items";

export const useItemEditorData = (id: string) => {
  const { items } = useFetchItems();
  const item = items.find((item) => item.id === id);

  return { item };
};
