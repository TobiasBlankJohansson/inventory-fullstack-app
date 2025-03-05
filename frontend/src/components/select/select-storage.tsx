type inputSelect = {
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
};

export function SelectStorage({ setSelected }: inputSelect) {
  return (
    <div className="h-10">
      <select
        className="select select-bordered w-full max-w-xs min-h-full h-full"
        onChange={(e) => setSelected([e.target.value])}
      >
        <option>All</option>
        <option>Verksdag</option>
        <option>Annex</option>
      </select>
    </div>
  );
}
