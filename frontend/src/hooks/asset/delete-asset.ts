import {Asset} from "@/types";
import {UseMutationResult} from "@tanstack/react-query";
import {toast} from "react-toastify";

export const useDeleteAsset = <T extends Asset>(
  setAsset: (updateFn: (prevData: T[]) => T[]) => void,
  {mutateAsync}: UseMutationResult<boolean, Error, string, unknown>,
  asset: T[],
  checkedItems: string[],
  setCheckedItems: React.Dispatch<React.SetStateAction<string[]>>
) => {
  return async () => {
    const prevAsset = [...asset];
    const updatedAsset = asset.filter(e => !checkedItems.includes(e.id));
    setAsset(() => updatedAsset);
    setCheckedItems([]);
    try {
      await Promise.all(checkedItems.map(id => mutateAsync(id)));
      toast.success("Deleted successfully!");
    } catch {
      setAsset(() => prevAsset);
      setCheckedItems(() => checkedItems);
      toast.error("Something went wrong, please try again");
    }
  };
};