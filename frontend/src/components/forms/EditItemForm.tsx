import {Item} from "@/types";
import {Button} from "@/components";

export function EditItemForm({onSubmit, item, children, edit, setEdit, onDelete}: {
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined,
  item: Item,
  children: React.ReactNode,
  edit: boolean,
  onDelete: () => void,
  setEdit: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return <form
    onSubmit={onSubmit}
    className="flex flex-col items-center h-full w-full flex-grow justify-between"
  >
    <h1 className="text-3xl my-8">{item.name}</h1>
    {children}
    <div className="modal-action flex justify-between pb-8 w-80">
      {edit ? (
        <>
          <Button
            onClick={onDelete}
            className="w-20 text-button_warning hover:bg-button_warning btn-outline"
          >
            Delete
          </Button>
          <Button
            className="btn w-40 bg-button_info hover:bg-button_info_hover border-button_info text-white"
            type="submit"
          >
            Save
          </Button>
        </>
      ) : (
        <>
          <div></div>
          <Button
            className="bg-button_secondary text-white hover:bg-button_secondary_hover"
            type="button"
            aria-label="Edit item"
            onClick={e => {
              e.preventDefault();
              setEdit(true);
            }
            }
          >
            Edit
          </Button>
        </>
      )}
    </div>
  </form>;
}