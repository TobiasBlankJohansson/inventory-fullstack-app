import {Defect} from "@/features";

export const ShowDefectModel = ({defect}: { defect: Defect }) => {
  const formatDate = (date: string | Date) =>
    new Date(date).toLocaleDateString();

  const InfoField = ({label, value}: { label: string; value?: string }) => (
    <section className="form-control w-full">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <div className="border rounded-md p-2 bg-base-100 min-h-[2.5rem]">
        {value || "—"}
      </div>
    </section>
  );

  return (
    <dialog id="showDefect" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-3xl mb-8 text-center">Defect report</h3>

        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
          <InfoField label="Responsible" value={defect.responsible}/>
          <InfoField label="Date" value={formatDate(defect.date)}/>
          <InfoField label="Filed by" value={defect.filed}/>
          <InfoField label="Equipment" value={defect.equipment}/>
        </div>

        <section className="form-control w-full mt-6">
          <label className="label">
            <span className="label-text">Fel, brist</span>
          </label>
          <textarea
            className="textarea textarea-bordered w-full h-24 overflow-y-auto resize-none"
            readOnly
            value={defect.defect || ""}
          />
        </section>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
