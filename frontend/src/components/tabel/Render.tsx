import { item } from "@/types";

export const renderTableHeaders = (
  headers: string[],
  includeActionColumn: boolean = false,
  checkedItems: string[] | number[],
  onDelete: () => void
): JSX.Element => {
  const hasCheckedItems = checkedItems.length > 0;

  return (
    <tr>
      {headers.map((head, index) => (
        <th key={index}>{head}</th>
      ))}
      {includeActionColumn && (
        <th>
          <div
            className="btn-ghost flex justify-center text-xl px-2 cursor-pointer"
            onClick={hasCheckedItems ? onDelete : undefined}
          >
            {hasCheckedItems ? "−" : "+"}
          </div>
        </th>
      )}
    </tr>
  );
};

export const renderTableItems = (
  items: item[],
  includeCheckbox: boolean = false,
  checkedItems: string[],
  setCheckedItems: React.Dispatch<React.SetStateAction<(string | number)[]>>
): JSX.Element[] => {
  if (!items || items.length === 0) {
    return [
      <tr key="empty">
        <td colSpan={includeCheckbox ? 5 : 4}>No items found</td>
      </tr>,
    ];
  }

  return items.map((item) => {
    const isChecked = checkedItems.includes(item.id);

    const handleCheckboxChange = () => {
      setCheckedItems((prev) =>
        isChecked ? prev.filter((id) => id !== item.id) : [...prev, item.id]
      );
    };

    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.quantity}</td>
        <td>{item.storageArea}</td>
        {includeCheckbox && (
          <td className="flex justify-center">
            <input
              type="checkbox"
              className="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
          </td>
        )}
      </tr>
    );
  });
};
