import {FormEvent, useState} from "react";
import {Button} from "../button";
import {Item} from "@/types";
import {FORM_FIELDS_ITEM} from "@/constants";
import {FormFieldItem} from "../forms";

type Props<T> = {
  setItems: (updateFn: (prevItems: T[]) => T[]) => void;
  storageAreas: string[];
};

export function CreateItem<T extends Item>(
  {
    setItems,
    storageAreas,
  }: Props<T>) {
  const [addAnotherOne, setAddAnotherOne] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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

  return (
    <dialog id="create_item" className="modal">
      <div className="modal-box px-10 py-6 w-96 bg-background">
        <form method="dialog" onSubmit={handleSubmit}>
          <h3 className="font-bold text-lg">Item Creation</h3>
          {errorMessage && (
            <div className="alert alert-error my-4">
              <span>{errorMessage}</span>
            </div>
          )}
          {FORM_FIELDS_ITEM.map((field) => (
            <FormFieldItem
              key={field.key}
              field={field}
              options={field.type === "select" ? storageAreas : undefined}
            />
          ))}
          <div className="modal-action flex justify-between">
            <Button
              type="submit"
              className="btn bg-button_primary hover:bg-button_primary_hover border-button_primary text-white"
              onClick={() => setAddAnotherOne(true)}
            >
              Add Another
            </Button>
            <Button
              type="submit"
              className="btn bg-button_secondary hover:bg-button_warning_hover border-button_secondary text-white"
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
