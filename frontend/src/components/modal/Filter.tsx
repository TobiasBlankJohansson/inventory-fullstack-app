import { StorageArea } from "../storage_area";

type Prop = {
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  storageArea: string[];
  setResponsible: React.Dispatch<React.SetStateAction<string[]>>;
  responsible: string[];
};

export const Filter = ({
  setSelected,
  storageArea,
  setResponsible,
  responsible,
}: Prop) => {
  return (
    <dialog id="filter" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Filter</h3>
        <p className="mt-2">Storage area</p>
        <StorageArea
          setSelected={setSelected}
          storageArea={storageArea}
        ></StorageArea>
        <p className="mt-5">Responsible</p>
        <StorageArea
          setSelected={setResponsible}
          storageArea={responsible}
        ></StorageArea>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
