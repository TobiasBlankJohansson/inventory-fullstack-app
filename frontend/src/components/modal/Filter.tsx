import { StorageArea } from "../storage_area";

type Prop = {
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  storageArea: string[];
};

export const Filter = ({ setSelected, storageArea }: Prop) => {
  return (
    <dialog id="filter" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-5">Filter</h3>
        <StorageArea
          setSelected={setSelected}
          storageArea={storageArea}
        ></StorageArea>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
