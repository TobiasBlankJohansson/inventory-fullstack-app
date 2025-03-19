import {useDeleteItem, useGetEquipment, useGetItems, useGetResponsible, useGetStorage, usePutItem} from "@/hooks";
import {useState} from "react";
import {FORM_FIELDS_ITEM} from "@/constants.ts";
import {FormField, Item, toItemFrom} from "@/types";
import {useNavigate} from "react-router-dom";

export const useItemEditorData = (id: string) => {
  const {items, setItems} = useGetItems();
  const {mutateAsync: mutatePut} = usePutItem();
  const {mutateAsync: mutateDelete} = useDeleteItem();
  const {storageArea} = useGetStorage();
  const {equipment} = useGetEquipment();
  const {responsible} = useGetResponsible();
  const [edit, setEdit] = useState(false);
  const item = items.find((item) => item.id === id);
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!item) return;

    const newItemData = Object.fromEntries(
      FORM_FIELDS_ITEM.map(({key}) =>
        [key, new FormData(e.currentTarget).get(`item_${key}`)])
    ) as FormField;

    const itemData = await mutatePut(toItemFrom(newItemData, equipment, item.id));
    if (!itemData) return;

    setItems((prev: Item[]) =>
      prev.map((listItem) =>
        listItem.id === item.id ? (listItem = itemData) : listItem
      )
    );
    navigate(`/item-editor?id=${itemData.id}`);
    setEdit(false);
  }

  const onDelete = async () => {
    if (!item) return;
    const response = await mutateDelete(id)
    if (!response) return;

    setItems((prev: Item[]) => prev.filter((item) => item.id != id));
    navigate("/");
  }

  return {
    options: {equipment, responsible, storageArea},
    item, edit, setEdit, onSubmit, onDelete
  };
};
