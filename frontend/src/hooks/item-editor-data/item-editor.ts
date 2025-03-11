import { useDeleteItem } from "../delete-item";
import { useFetchItems } from "../fetch-items";

export const useItemEditorData = (id: string) => {
  const { items, setItems } = useFetchItems();
  const item = items.find((item) => item.id === id);
  const { mutate } = useDeleteItem(setItems, id);

  const onDelete = () => {
    if (item) {
      mutate(item.id);
    }
  };

  return { item, onDelete };
};
