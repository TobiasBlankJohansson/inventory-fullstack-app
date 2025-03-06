import { useState } from "react";
import { Button } from "../button"; 
import { Item } from "@/types";

type Props<T> = {
  setItems: React.Dispatch<React.SetStateAction<T[]>>;
  storageAreas: string[]; 
};

const getInputType = (key: string, value: string): "text" | "number" | "select" => {
  if (key === "storageArea") return "select"; 
  if (typeof value === "number") return "number";
  return "text"; 
};

export function CreateItem<T extends Item>({ setItems, storageAreas }: Props<T>) {
  const [addAnotherOne, setAddAnotherOne] = useState<boolean>(false);

  const defaultItem: Item = {
    id: "",
    name: "",
    quantity: "",
    storageArea: "",
  };

  const fields = Object.keys(defaultItem) as (keyof Item)[];

  return (
    <dialog id="create_item" className="modal">
      <div className="modal-box px-10 py-6 w-fit bg-background">
        <form
          method="dialog"
          onSubmit={(event) =>
            saveItem(setItems, addAnotherOne, setAddAnotherOne, fields, event)
          }
        >
          <h3 className="font-bold text-lg">Item creation</h3>

          {fields.map((field) => {
            const inputType = getInputType(field, defaultItem[field]);
            const fieldId = `item_${String(field)}`;
            const label = field
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, (str) => str.toUpperCase());

            return (
              <label key={field} className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">{label}</span>
                </div>
                {inputType === "select" ? (
                  <select
                    id={fieldId}
                    className="select select-bordered w-full max-w-xs"
                    required
                  >
                    <option value="" disabled selected>
                      Select {label.toLowerCase()}
                    </option>
                    {storageAreas.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    id={fieldId}
                    type={inputType}
                    placeholder={`Enter ${label.toLowerCase()}`}
                    className="input input-bordered w-full max-w-xs"
                    required
                  />
                )}
              </label>
            );
          })}

          <div className="modal-action flex justify-between">
            <Button
              className="btn bg-button_primary hover:bg-button_primary_hover border-button_primary text-white"
              onClick={() => setAddAnotherOne(() => true)}
            >
              Add another one
            </Button>
            <Button className="btn bg-button_secondary hover:bg-button_warning_hover border-button_secondary text-white">
              Save
            </Button>
          </div>
        </form>
      </div>
    </dialog>
  );
}

function saveItem<T extends Item>(
  setItems: React.Dispatch<React.SetStateAction<T[]>>,
  addAnotherOne: boolean,
  setAddAnotherOne: React.Dispatch<React.SetStateAction<boolean>>,
  fields: (keyof T)[],
  event?: React.FormEvent
) {
  if (addAnotherOne) {
    event?.preventDefault();
    setAddAnotherOne(() => false);
  }

  const newItem = fields.reduce((acc, field) => {
    const input = document.getElementById(`item_${String(field)}`) as
      | HTMLInputElement
      | HTMLSelectElement;
    acc[field] = input.value as T[keyof T];
    input.value = ""; 
    return acc;
  }, {} as Partial<T>) as T;

  setItems((items) => [...items, newItem]);
}