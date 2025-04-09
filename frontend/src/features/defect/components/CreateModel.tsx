import {useState} from "react";

export const DefectReportModal = () => {
  const [responsible, setResponsible] = useState('');
  const [date, setDate] = useState('');
  const [filedBy, setFiledBy] = useState('');
  const [equipment, setEquipment] = useState('');
  const [defectDeficiency, setDefectDeficiency] = useState('');

  const handleCloseModal = () => {
    const modal = document.getElementById('defect_report_modal') as HTMLDialogElement | null;
    if (modal) {
      modal.close();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({responsible, date, filedBy, equipment, defectDeficiency});
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
                  value={responsible}
                  onChange={(e) => setResponsible(e.target.value)}
                >
                  <option disabled selected>
                    Value
                  </option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
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
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
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
                  value={filedBy}
                  onChange={(e) => setFiledBy(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="equipment" className="block text-sm font-medium text-gray-700">
                  Equipment
                </label>
                <select
                  id="equipment"
                  className="select select-bordered w-full max-w-xs mt-1"
                  value={equipment}
                  onChange={(e) => setEquipment(e.target.value)}
                >
                  <option disabled selected>
                    Value
                  </option>
                  <option>Option A</option>
                  <option>Option B</option>
                  <option>Option C</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="defectDeficiency" className="block text-sm font-medium text-gray-700">
                Defect, deficiency
              </label>
              <textarea
                id="defectDeficiency"
                placeholder="Value"
                className="textarea textarea-bordered w-full mt-1 resize-none"
                value={defectDeficiency}
                onChange={(e) => setDefectDeficiency(e.target.value)}
              />
            </div>

            <p className="text-sm text-gray-500">
              Defect : e.g "Axe , Defect"
              <br/>
              Deficiency : e.g "Spirit Burner, Deficiency"
            </p>

            <div className="modal-action justify-end">
              <button type="button" className="btn" onClick={handleCloseModal}>
                Cancel
              </button>
              <button type="submit" className="btn bg-button_secondary text-white hover:bg-button_secondary_hover">
                Create
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};
