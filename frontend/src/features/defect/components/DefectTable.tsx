import {Defect, Status} from "@/features";

interface DefectTableProps {
  registeredItems: Defect[];
  processingItems: Defect[];
  finalizedItems: Defect[];
  setDefects: (defects: (prev: Defect[]) => Defect[]) => void;
}

export const DefectTable =
  ({registeredItems, processingItems, finalizedItems, setDefects}: DefectTableProps) => {
    return (
      <div className="flex flex-col md:flex-row gap-5 h-full">
        <div className="bg-white rounded-md shadow w-full">

          <div className="overflow-x-auto h-full">
            <h2
              className="text-white bg-primary py-2 px-4 rounded-t-md text-left text-sm font-medium">{Status.Registered}</h2>
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
                  <td>{item.item}</td>
                  <td>{item.date}</td>
                  <td className={"text-center"}>
                    <button className="btn btn-xs h-7 bg-button_secondary hover:bg-button_secondary_hover"
                            onClick={() => {
                              setDefects(prev =>
                                prev.map(def =>
                                  def.id === item.id ? {...def, status: Status.Processing} : def
                                ))
                            }}>
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
                  <td>{item.item}</td>
                  <td>{item.date}</td>
                  <td>
                    <div className="flex justify-center gap-2">
                      <button className="btn btn-xs h-7 bg-button_primary hover:bg-button_primary_hover"
                              onClick={() => {
                                setDefects(prev =>
                                  prev.map(def =>
                                    def.id === item.id ? {...def, status: Status.Registered} : def
                                  ))
                              }}>
                        <span className={"text-white"}>←</span>
                      </button>
                      <button className="btn btn-xs h-7 bg-button_secondary hover:bg-button_secondary_hover"
                              onClick={() => {
                                setDefects(prev =>
                                  prev.map(def =>
                                    def.id === item.id ? {...def, status: Status.Finalized} : def
                                  ))
                              }}>
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
                  <td>{item.item}</td>
                  <td>{item.date}</td>
                  <td className={"text-center"}>
                    <button className="btn btn-xs my-0.5 text-button_warning hover:bg-button_warning btn-outline"
                            onClick={() => {
                              setDefects(prev =>
                                prev.filter(def => def.id != item.id))
                            }}>
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

