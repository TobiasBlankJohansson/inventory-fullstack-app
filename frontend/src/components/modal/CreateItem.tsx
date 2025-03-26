import { Equipment, Item, Responsible, Storage } from "@/types";
import { FORM_FIELDS_ITEM } from "@/constants";
import { useCreateItem } from "@/hooks";
import { Button, FormField } from "@/components";
import { option } from "@/util";

type Props = {
  setItems: (updateFn: (prevItems: Item[]) => Item[]) => void;
  items: Item[];
  options: {
    equipment: Equipment[];
    storageArea: Storage[];
    responsible: Responsible[];
  };
};

export function CreateItem({ setItems, items, options }: Props) {
  const { handleSubmit, setAddAnotherOne } = useCreateItem(
    setItems,
    items,
    options
  );

  return (
    <dialog id="create_item" className="modal">
      <div className="modal-box px-10 py-6 w-96 bg-background">
        <form method="dialog" onSubmit={handleSubmit}>
          <h3 className="font-bold text-lg">Item Creation</h3>
          {FORM_FIELDS_ITEM.map((field) => (
            <FormField
              key={field.key}
              field={field}
              options={option(field.label, options)}
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
