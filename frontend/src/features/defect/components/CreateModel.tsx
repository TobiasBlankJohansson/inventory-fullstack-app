import {useState} from "react";
import {Defect, Status} from "@/features";
import {useEquipment, useResponsible} from "@/hooks";
import {useGetDefect, usePostDefect} from "@/features/defect/hooks/Defect.ts";
import {toast} from "react-toastify";

export const DefectReportModal = () => {
  const [defectReport, setDefectReport] = useState<Defect>({
    id: "",
    defect: "",
    status: "",
    date: "",
    equipment: "",
    filed: "",
    responsible: ""
  });
  const {asset: responsible} = useResponsible();
  const {asset: equipment} = useEquipment();
  const {mutateAsync} = usePostDefect()
  const {setDefect} = useGetDefect()

  const handleCloseModal = () => {
    const modal = document.getElementById('defect_report_modal') as HTMLDialogElement | null;
    if (modal) {
      modal.close();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(defectReport);
    const requiredFields: (keyof Defect)[] = ["defect", "date", "equipment", "filed", "responsible"];
    const isEmptyField = requiredFields.some(field => defectReport[field] === "");
    if (isEmptyField) {
      toast.error("All fields need to be filled");
      return;
    }

    defectReport.status = Status.Registered;
    const defect = await mutateAsync(defectReport);
    setDefect(prevData => [...prevData, defect]);
    setDefectReport({
      id: "",
      defect: "",
      status: "",
      date: "",
      equipment: "",
      filed: "",
      responsible: ""
    })
    console.log(defectReport);
    handleCloseModal();
  };

  return (
    <div>
      <dialog id="defect_report_modal" className="modal">
        <div className="modal-box bg-white rounded-lg p-8 shadow-lg max-w-lg w-full">
          <h3 className="font-bold text-3xl text-center mb-6 decoration-gray-300">
            Defect report
          </h3>

          <form method="dialog" onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="responsible" className="block text-sm font-medium text-gray-700">
                  Responsible
                </label>
                <select
                  id="responsible"
                  className="select select-bordered w-full max-w-xs mt-1"
                  value={defectReport.responsible}
                  onChange={(e) => setDefectReport(prev => ({...prev, responsible: e.target.value}))}
                >
                  <option value="" disabled selected>
                    Value
                  </option>
                  {responsible.map((responsible) => (
                    <option key={responsible.id} value={responsible.id}>{responsible.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  type="text"
                  id="date"
                  placeholder="Value"
                  className="input input-bordered w-full max-w-xs mt-1"
                  value={defectReport.date}
                  onChange={(e) => setDefectReport(prev => ({...prev, date: e.target.value}))}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="filedBy" className="block text-sm font-medium text-gray-700">
                  Filed by
                </label>
                <input
                  type="text"
                  id="filedBy"
                  placeholder="Value"
                  className="input input-bordered w-full max-w-xs mt-1"
                  value={defectReport.filed}
                  onChange={(e) => setDefectReport(prev => ({...prev, filed: e.target.value}))}
                />
              </div>
              <div>
                <label htmlFor="equipment" className="block text-sm font-medium text-gray-700">
                  Equipment
                </label>
                <select
                  id="equipment"
                  className="select select-bordered w-full max-w-xs mt-1"
                  value={defectReport.equipment}
                  onChange={(e) => setDefectReport(prev => ({...prev, equipment: e.target.value}))}
                >
                  <option value="" disabled selected>
                    Value
                  </option>
                  {equipment.map((equipment) => (
                    <option key={equipment.id} value={equipment.id}>{equipment.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="defect" className="block text-sm font-medium text-gray-700">
                Defect, deficiency
              </label>
              <textarea
                id="defect"
                placeholder="Value"
                className="textarea textarea-bordered w-full mt-1 resize-none"
                value={defectReport.defect}
                onChange={(e) => setDefectReport(prev => ({...prev, defect: e.target.value}))}
              />
            </div>

            <p className="text-sm text-gray-500">
              Defect : e.g "Axe , Defect"
              <br/>
              Deficiency : e.g "Spirit Burner, Deficiency"
            </p>

            <div className="modal-action justify-between">
              <button type="button" className="btn" onClick={handleCloseModal}>
                Cancel
              </button>
              <div>
                <button type="submit" className="btn bg-button_primary text-white hover:bg-button_primary_hover mr-2">
                  Create another one
                </button>
                <button type="submit" className="btn bg-button_secondary text-white hover:bg-button_secondary_hover">
                  Create
                </button>
              </div>

            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};
