import { item } from "./Tabel";

export const renderHeadersInTableDashboard = (header: string[]) => {
  return (
    <tr key={"tableDashboard"}>
      {header.map((head) => (
        <th>{head}</th>
      ))}
    </tr>
  );
};

export const renderItemInTableDashboard = (items: item[]) => {
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

export const renderHeadersInTableManage = (header: string[]) => {
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

export const renderItemInTableManage = (items: item[]) => {
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
