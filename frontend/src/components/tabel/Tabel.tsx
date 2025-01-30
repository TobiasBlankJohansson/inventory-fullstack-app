type item = {
  id: string;
  name: string;
  quantity: string;
  storageArea: string;
};

type inputTable = {
  items: item[];
};

const renderItemInTable = (items: item[]) => {
  return items.map((item:item) => {
    return <tr key={item.id}>
      <th>{item.id}</th>
      <th>{item.name}</th>
      <th>{item.quantity}</th>
      <th>{item.storageArea}</th>
    </tr>;
  });
};

export function Tabel({ items }: inputTable) {
  return (
    <>
      <div className="overflow-x-auto bg-white m-2 h-full rounded-lg">
        <table className="table table-zebra table-pin-rows">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Storage Area</th>
            </tr>
          </thead>
          <tbody>
            {renderItemInTable(items)}
          </tbody>
        </table>
      </div>
    </>
  );
}
