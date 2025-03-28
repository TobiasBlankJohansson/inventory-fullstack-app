import { SelectableList } from "../storage_area";

type Prop = {
  setStorage: React.Dispatch<React.SetStateAction<string[]>>;
  storage: string[];
  setResponsible: React.Dispatch<React.SetStateAction<string[]>>;
  responsible: string[];
};

export const Filter = ({
  setStorage,
  storage,
  setResponsible,
  responsible,
}: Prop) => {
  return (
    <dialog id="filter" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Filter</h3>
        <p className="mt-2">Storage</p>
        <SelectableList
          setSelected={setStorage}
          list={storage}
        ></SelectableList>
        <p className="mt-5">Responsible</p>
        <SelectableList
          setSelected={setResponsible}
          list={responsible}
        ></SelectableList>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
