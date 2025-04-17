import {SelectableList} from "@/components";
import {useResponsible, useStorage} from "@/features";

type Prop = {
  setStorage: React.Dispatch<React.SetStateAction<string[]>>;
  setResponsible: React.Dispatch<React.SetStateAction<string[]>>;
};

export const Filter = ({
                         setStorage,
                         setResponsible,
                       }: Prop) => {
  const {asset: storage} = useStorage();
  const {asset: responsible} = useResponsible();

  return (
    <dialog id="filter" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Filter</h3>
        <p className="mt-2">Storage</p>
        <SelectableList
          setSelected={setStorage}
          list={storage.map((storage) => storage.name)}
        ></SelectableList>
        <p className="mt-5">Responsible</p>
        <SelectableList
          setSelected={setResponsible}
          list={responsible.map((responsible) => responsible.name)}
        ></SelectableList>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
