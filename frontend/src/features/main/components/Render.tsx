import {Item} from "@/features";
import {Button} from "@/components";
import {Link} from "react-router-dom";
import {getItemKeys} from "@/util";

export const renderTableHeaders = (
  headers: string[],
  setOrder: (string: string) => void = () => {
  },
  order = "",
  includeActionColumn: boolean = false,
  type: string = "",
  checkedItems: string[] = [],
  onDelete: () => void = () => {
  },
  onCreate: () => void = () => {
  },
) => {
  const hasCheckedItems = checkedItems.length > 0;

  return (
    <tr>
      {headers.map((head, index) => (
        <th key={index} onClick={() => {
          setOrder(head.toLowerCase())
        }} className={`cursor-pointer ${order == head.toLowerCase() && "text-primary"}`}>{head}</th>
      ))}
      {includeActionColumn && (
        <th className="flex justify-center p-0 py-2">
          <Button
            className={`btn-ghost flex justify-center min-h-8 h-8 w-32 ${
              hasCheckedItems
                ? "bg-button_warning text-white hover:bg-button_warning_hover"
                : "text-success btn-outline hover:bg-button_success_hover hover:border-button_success"
            }`}
            onClick={hasCheckedItems ? onDelete : onCreate}
          >
            {hasCheckedItems ? `Delete ${type}` : `New ${type}`}
          </Button>
        </th>
      )}
    </tr>
  );
};

export const renderTableItems = (
  items: Item[],
  includeCheckbox: boolean = false,
  checkedItems: string[] = [],
  setCheckedItems: React.Dispatch<React.SetStateAction<string[]>> = () => {
  }
): JSX.Element[] => {
  if (!items || items.length === 0) {
    return [
      <tr key="empty">
        <td colSpan={includeCheckbox ? 5 : 4}>No items found</td>
      </tr>,
    ];
  }

  const keys = getItemKeys(items[0]);

  return items.map((item) => {
    const isChecked = checkedItems.includes(item.id);

    const handleCheckboxChange = () => {
      setCheckedItems((prev) =>
        isChecked
          ? prev.filter((id) => id !== item.id)
          : [...prev, item.id]
      );
    };

    return (
      <tr key={item.id + item.responsible}>
        {keys.map((key) => (
          <td key={key}>
            {key === "equipment" ? (
              <Link to={`/item-editor?id=${item.id}`} className="link text-info">
                {item.equipment.name}
              </Link>
            ) : key === "id" ? item.equipment.id : (
              item[key as keyof Item] as string
            )}
          </td>
        ))}

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
