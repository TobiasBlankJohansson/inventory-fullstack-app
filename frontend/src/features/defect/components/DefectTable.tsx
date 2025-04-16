import {Defect, Status} from "@/features";
import {Button} from "@/components";
import {openModal} from "@/lib";
import {useDeleteDefect, usePutDefect} from "@/features/defect/hooks/Defect.ts";
import {toast} from "react-toastify";

interface DefectTableProps {
  registeredItems: Defect[];
  processingItems: Defect[];
  finalizedItems: Defect[];
  setDefects: (defects: (prev: Defect[]) => Defect[]) => void;
  setShowDefect: (defect: Defect) => void;
}

export const DefectTable =
  ({registeredItems, processingItems, finalizedItems, setDefects, setShowDefect}: DefectTableProps) => {
    const {mutateAsync: putDefect} = usePutDefect();
    const {mutateAsync: deleteDefect} = useDeleteDefect()

    const handelStatus = async (item: Defect, status: typeof Status[keyof typeof Status]) => {
      const updatedItem = await putDefect({...item, status});
      setDefects(prev =>
        prev.map(def => (def.id === updatedItem.id ? updatedItem : def))
      );
    };

    const handelDelete = async (item: Defect) => {
      const deleted = await deleteDefect(item.id);
      if (!deleted) {
        toast.error("Defect report failed to delete");
        return;
      }
      setDefects(prev => prev.filter(def => def.id !== item.id));
    }

    return (
      <div className="flex flex-col md:flex-row gap-5 h-full mt-2">
        <section className="bg-white rounded-md shadow w-full">
          <div className="overflow-x-auto h-full">
            <header className="bg-primary rounded-t-md flex justify-between items-center">
              <h2
                className="text-white py-2 px-4 text-left text-sm font-medium">{Status.Registered}</h2>
              <Button
                className={"flex justify-center px-5 w-fit mr-4 btn-xs text-white " +
                  "bg-button_success border-button_success hover:bg-button_success_hover hover:border-button_success"}
                onClick={() => openModal("defect_report_modal")}>
                Create Report
              </Button>
            </header>
            <table className="table table-zebra table-pin-rows">
              <thead>
              <tr className="">
                <th>Equipment</th>
                <th>Date</th>
                <th className={"text-center"}>Action</th>
              </tr>
              </thead>
              <tbody>
              {registeredItems && registeredItems.map((item) => (
                <tr key={item.id}>
                  <td className="link text-info" onClick={() => {
                    setShowDefect(item);
                    openModal("showDefect");
                  }}>{item.equipment}</td>
                  <td>{item.date}</td>
                  <td className={"text-center"}>
                    <button className="btn btn-xs h-7 bg-button_secondary hover:bg-button_secondary_hover"
                            onClick={() => handelStatus(item, Status.Processing)}>
                      <span className={"text-white"}>→</span>
                    </button>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white rounded-md shadow w-full">
          <div className="overflow-x-auto h-full">
            <h2
              className="text-white bg-primary py-2 px-4 rounded-t-md text-left text-sm font-medium">{Status.Processing}</h2>
            <table className="table table-zebra w-full">
              <thead>
              <tr className="bg-transparent">
                <th>Equipment</th>
                <th>Date</th>
                <th className={"text-center"}>Action</th>
              </tr>
              </thead>
              <tbody>
              {processingItems && processingItems.map((item) => (
                <tr key={item.id}>
                  <td className="link text-info" onClick={() => {
                    setShowDefect(item);
                    openModal("showDefect");
                  }}>{item.equipment}</td>
                  <td>{item.date}</td>
                  <td>
                    <div className="flex justify-center gap-2">
                      <button className="btn btn-xs h-7 bg-button_primary hover:bg-button_primary_hover"
                              onClick={() => handelStatus(item, Status.Registered)}>
                        <span className={"text-white"}>←</span>
                      </button>
                      <button className="btn btn-xs h-7 bg-button_secondary hover:bg-button_secondary_hover"
                              onClick={() => handelStatus(item, Status.Finalized)}>
                        <span className={"text-white"}>→</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white rounded-md shadow w-full">
          <div className="overflow-x-auto h-full">
            <h2 className="text-white bg-primary py-2 px-4 rounded-t-md text-left text-sm font-medium">Finalized</h2>
            <table className="table table-zebra w-full">
              <thead>
              <tr className="bg-transparent">
                <th>Equipment</th>
                <th>Date</th>
                <th className={"text-center"}>Action</th>
              </tr>
              </thead>
              <tbody>
              {finalizedItems && finalizedItems.map((item) => (
                <tr key={item.id}>
                  <td className="link text-info" onClick={() => {
                    setShowDefect(item);
                    openModal("showDefect");
                  }}>{item.equipment}</td>
                  <td>{item.date}</td>
                  <td className={"text-center"}>
                    <button className="btn btn-xs my-0.5 text-button_warning hover:bg-button_warning btn-outline"
                            onClick={() => handelDelete(item)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    );
  };

