import { CreateStorage } from "../modal/CreateStorage";
import { AreaItem } from "./AreaItem";

type importStorageArea = {
  storageArea: string[];
  setStorageArea: React.Dispatch<React.SetStateAction<string[]>>;
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
};

export function StorageArea({
  storageArea,
  setStorageArea,
  setSelected,
}: importStorageArea) {
  return (
    <>
      <ol className="flex h-12 gap-2 ml-2 overflow-scroll scrollbar-hide">
        <li
          key="storage_add"
          className="btn px-2 w-10 text-xl min-h-full h-full bg-button_primary hover:bg-button_primary_hover text-white"
          onClick={() =>
            (
              document.getElementById("create_storage") as HTMLDialogElement
            ).showModal()
          }
        >
          +
        </li>
        {storageArea.map((area) => (
          <AreaItem
            key={"area_" + area}
            area={area}
            setSelected={setSelected}
          />
        ))}
      </ol>
      <CreateStorage setStorageArea={setStorageArea} />
    </>
  );
}
