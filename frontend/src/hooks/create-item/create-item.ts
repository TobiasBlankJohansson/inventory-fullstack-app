import {FormEvent, useState} from "react";
import {FORM_FIELDS_ITEM} from "@/constants.ts";
import {Item} from "@/types";
import {usePostItem} from "@/hooks";

export const useCreateItem = <T extends Item>(
  setItems: (updateFn: (prevItems: T[]) => T[]) => void
) => {
  const [addAnotherOne, setAddAnotherOne] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const {mutate} = usePostItem(setErrorMessage);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newItem = Object.fromEntries(
      FORM_FIELDS_ITEM.map(({key}) => [key, formData.get(`item_${key}`)])
    ) as T;
    newItem.id = "5";

    if (
      !newItem.equipment ||
      !newItem.quantity ||
      !newItem.storageArea ||
      !newItem.responsible
    ) {
      setErrorMessage("Please fill in all required fields");
      return;
    }

    if (parseInt(newItem.quantity) < 1) {
      setErrorMessage("Quantity can't be negative");
      return;
    }

    const form = e.currentTarget;
    setItems((prevItems) => {
      const isUnique = !prevItems.some(
        (item) =>
          item.id === newItem.id && item.responsible === newItem.responsible
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
