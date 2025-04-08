import {getItemKeys} from "@/util";
import {Link} from "react-router-dom";

export type DefectTableItem = {
  id: string;
  date: string;
  item: string;
}

export const renderTableDefect = (
  defect: DefectTableItem[],
): JSX.Element[] => {
  const keys = getItemKeys(defect[0]);

  return defect.map((defect) => {

    return (
      <tr key={defect.id}>
        {keys.map((key) => (
          key !== "id" && (
            <td key={String(key)}>
              {key === "item" ? (
                <Link to={`/defect/?id=${defect.id}`} className="link text-info">
                  {defect.item}
                </Link>
              ) : (
                defect[key] as string
              )}
            </td>
          )
        ))}
      </tr>
    );
  });
};
