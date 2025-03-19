import {FormEvent, useState} from "react";
import {FORM_FIELDS_ITEM} from "@/constants.ts";
import {Equipment, FormField, Item, toItemFrom} from "@/types";
import {usePostItem} from "@/hooks";

export const useCreateItem = (
  setItems: (updateFn: (prevItems: Item[]) => Item[]) => void,
  equipment: Equipment[]
) => {
  const [addAnotherOne, setAddAnotherOne] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const {mutate} = usePostItem(setErrorMessage);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formField = Object.fromEntries(
      FORM_FIELDS_ITEM.map(({key}) => [key, formData.get(`item_${key}`)])
    ) as FormField;

    if (
      !formField.equipment ||
      !formField.quantity ||
      !formField.storageArea ||
      !formField.responsible
    ) {
      setErrorMessage("Please fill in all required fields");
      return;
    }

    if (parseInt(formField.quantity) < 1) {
      setErrorMessage("Quantity can't be negative");
      return;
    }

    const newItem = toItemFrom(formField, equipment, "null")

    const form = e.currentTarget;
    setItems((prevItems) => {
      const isUnique = !prevItems.some(
        (item) =>
          item.equipment === newItem.equipment && item.responsible === newItem.responsible
      );

      if (!isUnique) {
        setErrorMessage("Item already exists with equipment and responsible");
        return prevItems;
      }

      mutate(newItem);
      setErrorMessage(null);
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

  return {errorMessage, handleSubmit, setAddAnotherOne};
};
