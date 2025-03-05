import { CreateStorage } from "../model/CreateStorage";

type importStorageArea = {
  storageArea: string[];
  setStorageArea: React.Dispatch<React.SetStateAction<string[]>>;
};

export function StorageArea({
  storageArea,
  setStorageArea,
}: importStorageArea) {
  return (
    <>
      <ol className="flex h-12 gap-2 m-2 mb-0 overflow-scroll scrollbar-hide">
        <li
          className="px-2 w-10 text-xl btn min-h-full h-full"
          onClick={() =>
            (
              document.getElementById(
                "create_storage"
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
      <CreateStorage setStorageArea={setStorageArea} />
    </>
  );
}
