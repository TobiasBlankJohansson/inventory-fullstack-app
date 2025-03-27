import {getItemKeys} from "@/util";
import {Link} from "react-router-dom";

type Asset = {
  id: string,
  name: string,
}

export const renderTableAsset = <T extends Asset>(
  assets: T[],
  assetType: string,
  includeCheckbox: boolean = false,
  checkedAssets: string[] = [],
  setCheckedAsset: React.Dispatch<React.SetStateAction<string[]>> = () => {
  }
): JSX.Element[] => {
  if (!assets || assets.length === 0) {
    return [
      <tr key="empty">
        <td colSpan={includeCheckbox ? 5 : 4}>No items found</td>
      </tr>,
    ];
  }

  const keys = getItemKeys(assets[0]);

  return assets.map((asset) => {
    const isChecked = checkedAssets.includes(asset.id);

    const handleCheckboxChange = () => {
      setCheckedAsset((prev) =>
        isChecked
          ? prev.filter((id) => id !== asset.id)
          : [...prev, asset.id]
      );
    };

    return (
      <tr key={asset.id}>
        {keys.map((key) => (
          <td key={String(key)}>
            {key === "name" ? (
                <Link to={`/asset/${assetType}?id=${asset.id}`} className="link text-info">
                  {asset.name}
                </Link>
              ) :
              asset[key] as string
            }
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