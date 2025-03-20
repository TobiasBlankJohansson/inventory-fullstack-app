import {FormEvent, useState} from "react";
import {FORM_FIELDS_ITEM} from "@/constants.ts";
import {Equipment, FormField, Item, toItemFromFormField} from "@/types";
import {usePostItem} from "@/hooks";
import {toast} from "react-toastify";

export const useCreateItem = (
  setItems: (updateFn: (prevItems: Item[]) => Item[]) => void,
  equipment: Equipment[]
) => {
  const [addAnotherOne, setAddAnotherOne] = useState(false);
  const {mutate} = usePostItem();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formField = Object.fromEntries(
      FORM_FIELDS_ITEM.map(({key}) => [key, formData.get(`item_${key}`)])
    ) as FormField;

    if (parseInt(newItemData.quantity) < 1 || parseInt(newItemData.quantity) % 1 !== 0) {
      toast.error("Quantity can't be negative")
      return;
    }

    const newItem = toItemFromFormField(formField, equipment, "null")
    const form = e.currentTarget;
    setItems((prevItems) => {
      const isUnique = !prevItems.some(
        (item) =>
          item.equipment === newItem.equipment && item.responsible === newItem.responsible
      );

      if (!isUnique) {
        toast.error("Item already exists with equipment and responsible");
        return prevItems;
      }

      mutate(newItem);
      const updatedItems = [...prevItems, newItem];

      if (form) {
        form.reset();
      }

      if (addAnotherOne) {
        setAddAnotherOne(false);
      } else {
        const dialog = document.getElementById(
          "create_item"
        ) as HTMLDialogElement;
        dialog.close();
      }

      return updatedItems;
    });
  };

  return {handleSubmit, setAddAnotherOne};
};
