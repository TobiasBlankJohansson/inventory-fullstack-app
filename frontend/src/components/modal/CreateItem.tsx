import { FormEvent, useState } from "react";
import { Button } from "../button";
import { Item } from "@/types";
import { FORM_FIELDS_ITEM } from "@/constants";
import { FormFieldItem } from "../forms";

type Props<T> = {
  setItems: React.Dispatch<React.SetStateAction<T[]>>;
  storageAreas: string[];
};

export function CreateItem<T extends Item>({
  setItems,
  storageAreas,
}: Props<T>) {
  const [addAnotherOne, setAddAnotherOne] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData);
    const newItem = Object.fromEntries(
      FORM_FIELDS_ITEM.map(({ key }) => {
        console.log(`item_${key}`);
        console.log([key, formData.get(`item_${key}`)]);
        return [key, formData.get(`item_${key}`)];
      })
    ) as T;
    console.log(newItem);
    setItems((prevItems) => [...prevItems, newItem]);

    if (addAnotherOne) {
      e.currentTarget.reset();
      setAddAnotherOne(false);
    } else {
      const dialog = document.getElementById(
        "create_item"
      ) as HTMLDialogElement;
      dialog.close();
    }
  };

  return (
    <dialog id="create_item" className="modal">
      <div className="modal-box px-10 py-6 w-fit bg-background">
        <form method="dialog" onSubmit={handleSubmit}>
          <h3 className="font-bold text-lg">Item Creation</h3>

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
