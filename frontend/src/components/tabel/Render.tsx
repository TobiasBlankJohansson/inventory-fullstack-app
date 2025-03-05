import { item } from "@/types";

export const renderTableHeaders = (
  headers: string[],
  includeActionColumn: boolean = false
): JSX.Element => {
  return (
    <tr>
      {headers.map((head, index) => (
        <th key={index}>{head}</th>
      ))}
      {includeActionColumn && (
        <th>
          <div className="btn-ghost flex justify-center text-xl px-2">+</div>
        </th>
      )}
    </tr>
  );
};

export const renderTableItems = (
  items: item[],
  includeCheckbox: boolean = false
): JSX.Element[] => {
  if (!items || items.length === 0) {
    return [<tr key="empty"><td colSpan={includeCheckbox ? 5 : 4}>No items found</td></tr>];
  }
  return items.map((item) => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.quantity}</td>
      <td>{item.storageArea}</td>
      {includeCheckbox && (
        <td className="flex justify-center">
          <input type="checkbox" className="checkbox" />
        </td>
      )}
    </tr>
  ));
};