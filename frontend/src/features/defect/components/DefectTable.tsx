import {Defect} from "@/features";

interface DefectTableProps {
  registeredItems: Defect[];
  processingItems: Defect[];
  finalizedItems: Defect[];
  setDefects: (defects: Defect[]) => void;
}

export const DefectTable: React.FC<DefectTableProps> = ({registeredItems, processingItems, finalizedItems}) => {

  return (
    <div className="flex flex-col md:flex-row gap-5 h-full">
      <div className="bg-white rounded-md shadow w-full">
        <h2 className="text-white bg-primary py-2 px-4 rounded-t-md text-left text-sm font-medium">Registered</h2>
        <div className="overflow-x-auto">
          <table className="table table-zebra table-pin-rows w-full">
            <thead>
            <tr className="bg-transparent">
              <th>Equipment</th>
              <th>Date</th>
              <th className={"text-center"}>Action</th>
            </tr>
            </thead>
            <tbody>
            {registeredItems.map((item) => (
              <tr key={item.id}>
                <td>{item.item}</td>
                <td>{item.date}</td>
                <td className={"text-center"}>
                  <button className="btn btn-xs h-7 bg-button_secondary hover:bg-button_secondary_hover"
                          onClick={() => item.status = "processing"}>
                    <span className={"text-white"}>→</span>
                  </button>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-md shadow w-full">
        <h2 className="text-white bg-primary py-2 px-4 rounded-t-md text-left text-sm font-medium">Processing</h2>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
            <tr className="bg-transparent">
              <th>Equipment</th>
              <th>Date</th>
              <th className={"text-center"}>Action</th>
            </tr>
            </thead>
            <tbody>
            {processingItems.map((item) => (
              <tr key={item.id}>
                <td>{item.item}</td>
                <td>{item.date}</td>
                <td>
                  <div className="flex justify-center gap-2">
                    <button className="btn btn-xs h-7 bg-button_primary hover:bg-button_primary_hover">
                      <span className={"text-white"}>←</span>
                    </button>
                    <button className="btn btn-xs h-7 bg-button_secondary hover:bg-button_secondary_hover">
                      <span className={"text-white"}>→</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-md shadow w-full">
        <h2 className="text-white bg-primary py-2 px-4 rounded-t-md text-left text-sm font-medium">Finalized</h2>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
            <tr className="bg-transparent">
              <th>Equipment</th>
              <th>Date</th>
              <th className={"text-center"}>Action</th>
            </tr>
            </thead>
            <tbody>
            {finalizedItems.map((item) => (
              <tr key={item.id}>
                <td>{item.item}</td>
                <td>{item.date}</td>
                <td className={"text-center"}>
                  <button className="btn btn-xs my-0.5 text-button_warning hover:bg-button_warning btn-outline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

