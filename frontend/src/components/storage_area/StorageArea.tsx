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
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Add another one</button>
              <button className="btn">Add</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
