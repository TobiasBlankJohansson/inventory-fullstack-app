export type item = {
  id: string;
  name: string;
  quantity: string;
  storageArea: string;
};

type inputTable = {
  items: item[];
};

const renderHeadersInTableDashboard = (header: string[]) => {
  return (
    <tr key={"tableDashboard"}>
      {header.map((head) => (
        <th>{head}</th>
      ))}
    </tr>
  );
};

const renderItemInTableDashboard = (items: item[]) => {
  return items.map((item: item) => {
    return (
      <tr key={item.id}>
        <th>{item.id}</th>
        <th>{item.name}</th>
        <th>{item.quantity}</th>
        <th>{item.storageArea}</th>
      </tr>
    );
  });
};

const renderHeadersInTableManage = (header: string[]) => {
  return (
    <tr key={"tableDashboard"}>
      {header.map((head) => (
        <th>{head}</th>
      ))}
      <th>
        <div className="btn-ghost flex justify-center text-xl px-2">+</div>
      </th>
    </tr>
  );
};

const renderItemInTableManage = (items: item[]) => {
  return items.map((item: item) => {
    return (
      <tr key={item.id}>
        <th>{item.id}</th>
        <th>{item.name}</th>
        <th>{item.quantity}</th>
        <th>{item.storageArea}</th>
        <th className="flex justify-center">
          <input type="checkbox" className="checkbox" />
        </th>
      </tr>
    );
  });
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
