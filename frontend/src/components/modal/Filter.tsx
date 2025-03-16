import { StorageArea } from "../storage_area";

type Prop = {
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  setStorageArea: (updateFn: (prevStorage: string[]) => string[]) => void;
  storageArea: string[];
};

export const Filter = ({ setSelected, setStorageArea, storageArea }: Prop) => {
  return (
    <dialog id="filter" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Filter</h3>
        <StorageArea
          setSelected={setSelected}
          setStorageArea={setStorageArea}
          storageArea={storageArea}
        ></StorageArea>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
