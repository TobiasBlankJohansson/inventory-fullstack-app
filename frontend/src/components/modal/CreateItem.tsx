import {Button} from "../button";
import {Item} from "@/types";
import {FORM_FIELDS_ITEM} from "@/constants";
import {FormFieldItem} from "../forms";
import {useCreateItem} from "@/hooks";

type Props<T> = {
  setItems: (updateFn: (prevItems: T[]) => T[]) => void;
  storageAreas: string[];
};

export function CreateItem<T extends Item>(
  {
    setItems,
    storageAreas,
  }: Props<T>) {

  const {handleSubmit, errorMessage, setAddAnotherOne} = useCreateItem(setItems);

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
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
