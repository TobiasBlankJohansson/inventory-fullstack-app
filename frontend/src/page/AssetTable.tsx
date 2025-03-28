import {BodyContainer, CreateAsset, Navbar, renderTableHeaders, ScreenContainer, Table} from "@/components";
import {renderTableAsset} from "@/components/tabel/RenderAsset.tsx";
import {useDeleteEquipment, useGetEquipment, useOrderItem, usePostEquipment, useSaveAsset} from "@/hooks";
import {getTableHeaders, openModal} from "@/util";
import {Equipment} from "@/types";
import {useState} from "react";
import {useLocation} from "react-router-dom";
import {UseMutationResult} from "@tanstack/react-query";
import {toast} from "react-toastify";

export const AssetTable = () => {
  const type = new URLSearchParams(useLocation().search).get("type") as string;
  const {orderObject, asset, saveAsset, deleteAsset, checkedItems, setCheckedItems} = useEquipmentTable();

  return <ScreenContainer>
    <Navbar currentPageName="item"></Navbar>
    <BodyContainer>
      <Table
        renderHeadersInTable={
          renderTableHeaders(getTableHeaders(asset),
            orderObject.setOrder,
            orderObject.order,
            true,
            type,
            checkedItems,
            deleteAsset,
            () => openModal(type))}
        renderItemInTable={
          renderTableAsset(orderObject.orderItems(asset, orderObject.order) as Equipment[],
            type,
            true,
            checkedItems,
            setCheckedItems
          )}></Table>
    </BodyContainer>
    <CreateAsset
      saveAsset={saveAsset}
      dialogName={type}
      useId={true}
    ></CreateAsset>
  </ScreenContainer>
}

const useEquipmentTable = () => {
  const {equipment, setEquipment} = useGetEquipment();
  const orderObject = useOrderItem()
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const saveAssetEquipment = useSaveAsset(setEquipment, usePostEquipment(), equipment)
  const deleteAssetEquipment = useDeleteAsset(setEquipment, useDeleteEquipment(), equipment, checkedItems, setCheckedItems)

  return {
    asset: equipment,
    orderObject,
    saveAsset: saveAssetEquipment,
    deleteAsset: deleteAssetEquipment,
    checkedItems,
    setCheckedItems
  }
}

const useDeleteAsset = (
  setEquipment: (updateFn: (prevData: Equipment[]) => Equipment[]) => void,
  {mutateAsync}: UseMutationResult<boolean, Error, string, unknown>,
  equipment: Equipment[],
  checkedItems: string[],
  setCheckedItems: React.Dispatch<React.SetStateAction<string[]>>
) => {
  return async () => {
    const prevEquipment = [...equipment];
    const updatedEquipment = equipment.filter(e => !checkedItems.includes(e.id));
    setEquipment(() => updatedEquipment);
    setCheckedItems([]);
    try {
      await Promise.all(checkedItems.map(id => mutateAsync(id)));
      throw new Error;
      toast.success("Deleted successfully!");
    } catch {
      setEquipment(() => prevEquipment);
      setCheckedItems(() => checkedItems);
      toast.error("Something went wrong, please try again");
    }
  };
};