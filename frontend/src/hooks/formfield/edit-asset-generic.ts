import {useNavigate} from "react-router-dom";
import {FORM_FIELDS_ASSET} from "@/constants.ts";
import {toast} from "react-toastify";
import {UseMutationResult} from "@tanstack/react-query";

type Asset = {
  id: string;
  name: string;
}

export const useEditAsset = <T extends Asset, >(
  id: string,
  assetList: Asset[],
  setAsset: (updateFn: (prevData: T[]) => T[]) => void,
  setEdit: React.Dispatch<React.SetStateAction<boolean>>,
  {mutateAsync: mutatePut}: UseMutationResult<T, Error, T, unknown>,
  {mutateAsync: mutateDelete}: UseMutationResult<boolean, Error, string, unknown>
) => {
  const asset = assetList.find((asset) => asset.id === id);
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!asset) return;

    const newAssetData = Object.fromEntries(
      FORM_FIELDS_ASSET.map(({key}) =>
        [key, new FormData(e.currentTarget).get(`form_field_${key}`)])
    ) as Asset;

    if (asset.id != newAssetData.id || asset.name != newAssetData.name) {
      if (assetList.some(
        (asset) =>
          asset.name === newAssetData.name && asset.id === newAssetData.id
      )) {
        toast.error("Asset already exists with name and id");
        return;
      }

      const AssetData = await mutatePut(newAssetData as T);
      if (!AssetData) {
        toast.error("Error updating asset, try again");
        return;
      }

      setAsset((prev: T[]) =>
        prev.map((listAsset) =>
          listAsset.id === asset.id ? (listAsset = AssetData) : listAsset
        )
      );

      toast.success("Asset updated successfully");
      navigate(`/asset?id=${AssetData.id}`);
      setEdit(false);

    }
  }

  const onDelete = async () => {
    if (!asset) return;
    const response = await mutateDelete(id)
    if (!response) {
      toast.error("Error deleting asset")
      return;
    }

    setAsset((prev: T[]) => prev.filter((asset) => asset.id != id));
    toast.success("Asset deleted");
    navigate("/");
  }

  return {asset, onSubmit, onDelete}
}