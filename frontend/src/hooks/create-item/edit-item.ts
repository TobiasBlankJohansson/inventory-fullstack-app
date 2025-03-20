import {Equipment, FormField, Item, toItemFromFormField} from "@/types";
import {FORM_FIELDS_ITEM} from "@/constants.ts";
import {useNavigate} from "react-router-dom";
import {useDeleteItem, usePutItem} from "@/hooks";

export const useEditItem =
  (id: string,
   items: Item[],
   setItems: (updateFn: (prevData: Item[]) => Item[]) => void,
   equipments: Equipment[],
   setEdit: React.Dispatch<React.SetStateAction<boolean>>) => {
    const item = items.find((item) => item.id === id);
    const navigate = useNavigate();
    const {mutateAsync: mutatePut} = usePutItem();
    const {mutateAsync: mutateDelete} = useDeleteItem();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!item) return;

      const newItemData = Object.fromEntries(
        FORM_FIELDS_ITEM.map(({key}) =>
          [key, new FormData(e.currentTarget).get(`item_${key}`)])
      ) as FormField;

      if (items.some(
        (item) =>
          item.equipment.name === newItemData.equipment && item.responsible === newItemData.responsible
      )) return;

      const itemData = await mutatePut(toItemFromFormField(newItemData, equipments, item.id));
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

    return {onSubmit, onDelete, item};
  };
