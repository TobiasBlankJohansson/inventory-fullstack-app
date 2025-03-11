import {FormEvent, useState} from "react";
import {FORM_FIELDS_ITEM} from "@/constants.ts";
import {Item} from "@/types";
import {usePostItem} from "@/hooks/post-item";

export const useCreateItem = <T extends Item>(setItems: (updateFn: (prevItems: T[]) => T[]) => void) => {
  const [addAnotherOne, setAddAnotherOne] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const {mutate} = usePostItem(setErrorMessage);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newItem = Object.fromEntries(
      FORM_FIELDS_ITEM.map(({key}) => [key, formData.get(`item_${key}`)])
    ) as T;
    if (!newItem.id || !newItem.name || !newItem.quantity || !newItem.storageArea) {
      setErrorMessage("Please fill in all required fields");
      return;
    }
    if (newItem.id.length != 6) {
      setErrorMessage("Id need to be 6 characters");
      return;
    }
    if (parseInt(newItem.quantity) < 0) {
      setErrorMessage("Quantity can't be negative");
      return;
    }
    const form = e.currentTarget;

    setItems((prevItems) => {
      const isIdUnique = !prevItems.some((item) => item.id === newItem.id);
      const isNameUnique = !prevItems.some((item) => item.name === newItem.name);

      if (!isIdUnique) {
        setErrorMessage(`Item with ID "${newItem.id}" already exists`);
        return prevItems;
      }

      if (!isNameUnique) {
        setErrorMessage(`Item with name "${newItem.name}" already exists`);
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
  }

  return {errorMessage, handleSubmit, setAddAnotherOne};
};