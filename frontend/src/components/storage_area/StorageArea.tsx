type importStorageArea = {
  storageArea: string[];
};

export function StorageArea({ storageArea }: importStorageArea) {
  return (
    <>
      <ol className="flex h-12 gap-2 m-2 mb-0 overflow-scroll scrollbar-hide">
        <li
          className="px-2 w-10 text-xl btn min-h-full h-full"
          onClick={() =>
            (
              document.getElementById("my_modal_1") as HTMLDialogElement
            ).showModal()
          }
        >
          +
        </li>
        {storageArea.map((area) => (
          <li className="px-2 btn min-h-full h-full">{area}</li>
        ))}
      </ol>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box p-4 w-fit">
          <form method="dialog">
            <h3 className="font-bold text-lg">Storage area creation</h3>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Storage area name</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                required
              />
            </label>
            <div className="modal-action flex justify-between">
              <button className="btn">Add another one</button>
              <button className="btn">Save</button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}
