import {useDeleteItem, useGetEquipment, useGetItems, useGetResponsible, useGetStorage, usePutItem} from "@/hooks";
import {useState} from "react";
import {Item} from "@/types";
import {FORM_FIELDS_ITEM} from "@/constants.ts";

export const useItemEditorData = (id: string) => {
  const {items, setItems} = useGetItems();
  const {storageArea} = useGetStorage();
  const {equipment} = useGetEquipment();
  const {responsible} = useGetResponsible();
  const item = items.find((item) => item.id === id);
  const {mutate: deleteMutation} = useDeleteItem(setItems, id);
  const {mutate: saveMutation} = usePutItem(setItems, id);
  const [edit, setEdit] = useState(false);

  const onSave = <T extends Item>(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newItem = Object.fromEntries(
      FORM_FIELDS_ITEM.map(({key}) => [key, formData.get(`item_${key}`)])
    ) as T;
    saveMutation(newItem)
    setEdit(false);
  };

  const onDelete = () => {
    if (item) {
      deleteMutation(item.id);
    }
  };

  return {
    opions: {storageArea, equipment, responsible},
    item, onDelete, edit, setEdit, onSave
  };
};
