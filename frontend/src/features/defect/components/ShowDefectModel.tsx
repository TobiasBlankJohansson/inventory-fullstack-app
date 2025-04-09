import {Defect} from "@/features";

export const ShowDefectModel = (defect: Defect) => {
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-2xl mb-8">Defect report</h3>

        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
          <div className="mb-4">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Responsible</span>
              </label>
              <div className="border rounded-md p-2 bg-base-100">
                {defect.responsible}
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <div className="border rounded-md p-2 bg-base-100">
                {defect.date}
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Filed by</span>
              </label>
              <div className="border rounded-md p-2 bg-base-100">
                {defect.filed}
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Equipment</span>
              </label>
              <div className="border rounded-md p-2 bg-base-100"> {/* Simulate input look */}
                {defect.equipment}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Fel, brist</span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full h-24"
              readOnly
            >{defect.defect}</textarea>
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
