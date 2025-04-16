import {Button} from "@/components";

export const DeleteCheck = ({name, deleteFunction}: { name: string, deleteFunction: () => void }) => {
  return <dialog id="delete_check" className="modal">
    <div className="modal-box">
      <h3 className="font-bold text-lg">Delete check</h3>
      <p className="py-4">You are about to delete {name}</p>
      <form method="dialog" className="modal-backdrop">
        <Button type={"submit"} onClick={deleteFunction}>{`Delete ${name}`}</Button>
      </form>
    </div>
    <form method="dialog" className="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
}
