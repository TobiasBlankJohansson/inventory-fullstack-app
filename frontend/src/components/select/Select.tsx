export function Select() {
  return (
    <div className="h-10">
      <select className="select select-bordered w-full max-w-xs min-h-full h-full">
        <option>All</option>
        <option>Verksdag</option>
        <option>Annex</option>
      </select>
    </div>
  );
}
