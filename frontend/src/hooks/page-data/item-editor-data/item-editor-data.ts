import {useGetEquipment, useGetItems, useGetResponsible, useGetStorage, usePutItem} from "@/hooks";
import {useState} from "react";
import {FORM_FIELDS_ITEM} from "@/constants.ts";
import {Equipment, Item} from "@/types";
import {useNavigate} from "react-router-dom";

export const useItemEditorData = (id: string) => {
  const {items, setItems} = useGetItems();
  const {mutateAsync} = usePutItem();
  const {storageArea} = useGetStorage();
  const {equipment} = useGetEquipment();
  const {responsible} = useGetResponsible();
  const [edit, setEdit] = useState(false);
  const item = items.find((item) => item.id === id);
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const newItemData = Object.fromEntries(
      FORM_FIELDS_ITEM.map(({key}) => [key, formData.get(`item_${key}`)])
    ) as {
      equipment: string;
      quantity: string;
      storageArea: string;
      responsible: string;
    };

    const newItem: Item = {
      id: "null",
      ...newItemData,
      equipment: equipment.find(equipment => equipment.name === newItemData.equipment) as Equipment
    };

    const itemData = await mutateAsync(newItem);
    if (itemData && item) {
      setItems((prev: Item[]) =>
        prev.map((listItem) =>
          listItem.id === item.id ? (listItem = newItem) : listItem
        )
      );
      navigate(`/item-editor?id=${itemData.id}`);
      setEdit(false);
    }
  }

  return {
    options: {equipment, responsible, storageArea},
    item, edit, setEdit, onSubmit
  };
};
