import {Button} from "@/components";

export const DeleteCheck = (name: string, deleteFunction: () => void) => {
  return <dialog id="delete_check" className="modal">
    <div className="modal-box">
      <h3 className="font-bold text-lg">Delete check</h3>
      <p className="py-4">You are about to delete {name}</p>
      <Button onClick={deleteFunction}>{`Delete ${name}`}</Button>
    </div>
    <form method="dialog" className="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
}
