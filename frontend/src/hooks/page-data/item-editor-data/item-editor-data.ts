import {useGetEquipment, useGetItems, useGetResponsible, useGetStorage} from "@/hooks";
import {useState} from "react";

export const useItemEditorData = (id: string) => {
  const {items} = useGetItems();
  const {storageArea} = useGetStorage();
  const {equipment} = useGetEquipment();
  const {responsible} = useGetResponsible();
  const item = items.find((item) => item.id === id);

  const [edit, setEdit] = useState(false);

  return {
    options: {equipment, responsible, storageArea},
    item, edit, setEdit
  };
};
