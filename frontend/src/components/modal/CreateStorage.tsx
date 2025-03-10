import { useState } from "react";
import { Button } from "../button";
import { postStorageArea } from "@/api/InventoryApiService";

type Props = {
  setStorageArea: (updateFn: (prevStorage: string[]) => string[]) => void;
};

export function CreateStorage({ setStorageArea }: Props) {
  const [addAnotherOne, setAddAnotherOne] = useState<boolean>(false);
  return (
    <dialog id="create_storage" className="modal">
      <div className="modal-box px-10 py-6 w-fit bg-background">
        <form
          method="dialog"
          onSubmit={(event) =>
            SaveStorage(setStorageArea, addAnotherOne, setAddAnotherOne, event)
          }
        >
          <h3 className="font-bold text-lg ">Storage area creation</h3>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text ">Storage area name</span>
            </div>
            <input
              id="storage_area_name"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </label>
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

async function SaveStorage(
  setStorageArea: (updateFn: (prevStorage: string[]) => string[]) => void,
  addAnotherOne: boolean,
  setAddAnotherOne: React.Dispatch<React.SetStateAction<boolean>>,
  event?: React.FormEvent
) {
  const storageAreaInput: HTMLInputElement = document.getElementById(
    "storage_area_name"
  ) as HTMLInputElement;
  const storageName = storageAreaInput.value;
  if (await postStorageArea(storageName))
    setStorageArea((storageArea) => [...storageArea, storageName]);
  storageAreaInput.value = "";
  if (addAnotherOne) {
    event?.preventDefault();
    setAddAnotherOne(() => false);
  }
}
