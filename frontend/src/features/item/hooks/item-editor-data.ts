import {useGetEquipment, useGetItems, useGetResponsible, useGetStorage,} from "@/features";
import {useState} from "react";
import {useEditItem} from "@/features/item/hooks/edit-item.ts";

export const useItemEditorData = (id: string) => {
  const {items, setItems} = useGetItems();
  const {storage} = useGetStorage();
  const {equipment} = useGetEquipment();
  const {responsible} = useGetResponsible();
  const [edit, setEdit] = useState(false);
  const {item, onSubmit, onDelete} = useEditItem(
    id,
    items,
    setItems,
    equipment,
    responsible,
    storage,
    setEdit
  );

  return {
    options: {equipment, responsible, storage},
    item,
    edit,
    setEdit,
    onSubmit,
    onDelete,
  };
};
