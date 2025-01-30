type inputSelect = {
  setStorageArea: React.Dispatch<React.SetStateAction<string>>;
};

export function Select({ setStorageArea }: inputSelect) {
  return (
    <div className="h-10">
      <select
        className="select select-bordered w-full max-w-xs min-h-full h-full"
        onChange={(e) => setStorageArea(e.target.value)}
      >
        <option>All</option>
        <option>Verksdagen</option>
        <option>Annex</option>
      </select>
    </div>
  );
}
