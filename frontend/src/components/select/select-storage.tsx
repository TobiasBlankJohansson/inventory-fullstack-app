type inputSelect = {
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  storageArea: string[];
};

export function SelectStorage({ setSelected, storageArea }: inputSelect) {
  return (
    <div className="h-10">
      <select
        className="select select-bordered w-full max-w-xs min-h-full h-full"
        onChange={(e) => setSelected([e.target.value])}
      >
        <option key={"storage_all"}>{"All"}</option>
        {storageArea.map((storage) => (
          <option key={"storage_" + storage}>{storage}</option>
        ))}
      </select>
    </div>
  );
}
