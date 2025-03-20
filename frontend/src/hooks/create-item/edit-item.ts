import {Equipment, FormField, Item, toItemFromFormField} from "@/types";
import {FORM_FIELDS_ITEM} from "@/constants.ts";
import {useNavigate} from "react-router-dom";
import {useDeleteItem, usePutItem} from "@/hooks";
import {toast} from "react-toastify";

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

      if (parseInt(newItemData.quantity) < 1 || newItemData.quantity.includes(".")) {
        toast.error("Quantity can't be negative or contain decimal")
        return;
      }

      if (item.responsible != newItemData.responsible || item.equipment.name != newItemData.equipment) {
        if (items.some(
          (item) =>
            item.equipment.name === newItemData.equipment && item.responsible === newItemData.responsible
        )) {
          toast.error("Item already exists with equipment and responsible");
          return;
        }
      }

      const itemData = await mutatePut(toItemFromFormField(newItemData, equipments, item.id));
      if (!itemData) {
        toast.error("Error updating item, try again");
        return;
      }

      setItems((prev: Item[]) =>
        prev.map((listItem) =>
          listItem.id === item.id ? (listItem = itemData) : listItem
        )
      );
      toast.success("Item updated successfully");
      navigate(`/item-editor?id=${itemData.id}`);
      setEdit(false);
    }

    const onDelete = async () => {
      if (!item) return;
      const response = await mutateDelete(id)
      if (!response) {
        toast.error("Error deleting item")
        return;
      }

      setItems((prev: Item[]) => prev.filter((item) => item.id != id));
      toast.success("Item deleted");
      navigate("/");
    }

    return {onSubmit, onDelete, item};
  };
