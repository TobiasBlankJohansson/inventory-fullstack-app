import { useState } from "react";

type importStorageArea = {
  storageArea: string[];
  setStorageArea: React.Dispatch<React.SetStateAction<string[]>>;
};

export function StorageArea({
  storageArea,
  setStorageArea,
}: importStorageArea) {
  const [addAnotherOne, setAddAnotherOne] = useState<boolean>(false);

  return (
    <>
      <ol className="flex h-12 gap-2 m-2 mb-0 overflow-scroll scrollbar-hide">
        <li
          className="px-2 w-10 text-xl btn min-h-full h-full"
          onClick={() =>
            (
              document.getElementById(
                "storage_area_name_modal"
              ) as HTMLDialogElement
            ).showModal()
          }
        >
          +
        </li>
        {storageArea.map((area) => (
          <li className="px-2 btn min-h-full h-full">{area}</li>
        ))}
      </ol>

      <dialog id="storage_area_name_modal" className="modal">
        <div className="modal-box p-4 w-fit">
          <form
            method="dialog"
            onSubmit={(event) =>
              SaveStorageArea(
                setStorageArea,
                addAnotherOne,
                setAddAnotherOne,
                event
              )
            }
          >
            <h3 className="font-bold text-lg">Storage area creation</h3>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Storage area name</span>
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
              <button
                className="btn"
                onClick={() => setAddAnotherOne(() => true)}
              >
                Add another one
              </button>
              <button className="btn">Save</button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

function SaveStorageArea(
  setStorageArea: React.Dispatch<React.SetStateAction<string[]>>,
  addAnotherOne: boolean,
  setAddAnotherOne: React.Dispatch<React.SetStateAction<boolean>>,
  event?: React.FormEvent
) {
  if (addAnotherOne) {
    event?.preventDefault();
    setAddAnotherOne(() => false);
  }
  const storageAreaInput: HTMLInputElement = document.getElementById(
    "storage_area_name"
  ) as HTMLInputElement;
  const storageName = storageAreaInput.value;
  setStorageArea((storageArea) => [...storageArea, storageName]);
  storageAreaInput.value = "";
}
