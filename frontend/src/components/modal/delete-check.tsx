import {Button} from "@/components";

export const DeleteCheck = ({name, deleteFunction}: { name: string, deleteFunction: () => void }) => {
  return <dialog id={"delete_check"} className="modal modal-bottom sm:modal-middle">
    <div className="modal-box bg-background">

      <div className="flex items-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6 mr-3 text-warning"
             fill="none"
             viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
        </svg>
        <h3 className="font-bold text-xl">Confirm Deletion</h3>
      </div>

      <p className="py-4 text-base">
        Are you sure you want to permanently delete <strong className="font-semibold">{name}</strong>?
        <br/>
        This action cannot be undone.
      </p>

      <div className="modal-action mt-6">
        <form method="dialog">
          <Button type="submit" className="btn-ghost mr-2">
            Cancel
          </Button>
        </form>
        <form method="dialog">
          <Button
            type="submit"
            className="bg-button_warning hover:bg-button_warning_hover text-white"
            onClick={deleteFunction}
          >
            Delete
          </Button>
        </form>
      </div>

    </div>

    <form method="dialog" className="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
}
