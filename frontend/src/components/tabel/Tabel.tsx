export type item = {
  id: string;
  name: string;
  quantity: string;
  storageArea: string;
};

type inputTable = {
  items: item[];
};

export function Tabel({ items }: inputTable) {
  return (
    <>
      <div className="overflow-x-auto bg-white m-2 h-full rounded-lg">
        <table className="table table-zebra table-pin-rows">
          <thead>
            {renderHeadersInTableDashboard(["Id","Name","Quantity","Storage Area"])}
          </thead>
          <tbody>{renderItemInTableDashboard(items)}</tbody>
        </table>
      </div>
    </>
  );
}
