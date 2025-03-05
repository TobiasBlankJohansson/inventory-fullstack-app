import { Button } from "../button";
import { CreateStorage } from "../modal/CreateStorage";

type importStorageArea = {
  storageArea: string[];
  setStorageArea: React.Dispatch<React.SetStateAction<string[]>>;
};

const onClick = (
  select: boolean,
  setSelect: React.Dispatch<React.SetStateAction<boolean>>,
  area: string,
  setSelected: React.Dispatch<React.SetStateAction<string[]>>,
  selected: string[]
) => {
  setSelect(() => !select);
  if (!select) {
    setSelected([...selected, area]);
  } else {
    setSelected(selected.filter(item => item !== area));
  }
};

export function StorageArea({
  storageArea,
  setStorageArea,
}: importStorageArea) {
  return (
    <>
      <ol className="flex h-12 gap-2 m-2 mb-0 overflow-scroll scrollbar-hide">
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
          <li key={"storage_" + area}>
            <Button className="px-2 min-h-full h-full hover:bg-button_secondary hover:text-white">
              {area}
            </Button>
          </li>
        ))}
      </ol>
      <CreateStorage setStorageArea={setStorageArea} />
    </>
  );
}
