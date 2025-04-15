import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { FORM_FIELDS_ASSET } from "@/constants.ts";
import { toast } from "react-toastify";
import { UseMutationResult } from "@tanstack/react-query";

type Asset = {
  id: string;
  name: string;
};

export const useEditAsset = <T extends Asset>(
  id: string,
  assetList: Asset[],
  setAsset: (updateFn: (prevData: T[]) => T[]) => void,
  setEdit: React.Dispatch<React.SetStateAction<boolean>>,
  { mutateAsync: mutatePut }: UseMutationResult<T, Error, T, unknown>,
  {
    mutateAsync: mutateDelete,
  }: UseMutationResult<boolean, Error, string, unknown>
) => {
  const asset = assetList.find((a) => a.id === id);
  const navigate = useNavigate();

  if (!asset) {
    return {
      asset: null,
      onSubmit: () => {},
      onDelete: () => {},
    };
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newAssetData = FORM_FIELDS_ASSET.reduce(
      (acc, { key }) => ({ ...acc, [key]: formData.get(`form_field_${key}`) }),
      {} as Asset
    );

    if (asset.name !== newAssetData.name) {
      const isDuplicate = assetList.some((a) => a.name === newAssetData.name);

      if (isDuplicate) {
        toast.error("PageEdit with this name already exists");
        return;
      }

      try {
        const updatedAsset = await mutatePut({
          ...newAssetData,
          id: asset.id,
        } as T);
        setAsset((prev) =>
          prev.map((asset) => (asset.id === asset.id ? updatedAsset : asset))
        );
        toast.success("PageEdit updated successfully");
        setEdit(false);
      } catch {
        toast.error("Error updating asset, try again");
      }
    }
  };

  const onDelete = async () => {
    try {
      await mutateDelete(id);
      setAsset((prev) => prev.filter((a) => a.id !== id));
      toast.success("PageEdit deleted");
      navigate("/");
    } catch {
      toast.error("Error deleting asset");
    }
  };

  return { asset, onSubmit, onDelete };
};
