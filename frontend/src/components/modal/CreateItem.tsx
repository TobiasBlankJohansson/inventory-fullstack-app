import { Button } from "../button";
import { Item } from "@/types";
import { FORM_FIELDS_ITEM } from "@/constants";
import { FormFieldItem } from "../forms";
import { useCreateItem } from "@/hooks";

type Props<T> = {
  setItems: (updateFn: (prevItems: T[]) => T[]) => void;
  options: {
    equipment: string[];
    storageAreas: string[];
    responsible: string[];
  };
};

export function CreateItem<T extends Item>({ setItems, options }: Props<T>) {
  const { handleSubmit, errorMessage, setAddAnotherOne } =
    useCreateItem(setItems);

  const option = (label: string) => {
    if (label === "Storage Area") {
      return options.storageAreas;
    }
    if (label === "Equipment") {
      return options.equipment;
    }
    if (label === "Responsible") {
      return options.responsible;
    }
    return undefined;
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
              options={option(field.label)}
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
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
