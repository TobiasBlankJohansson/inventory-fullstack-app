import {
  BodyContainer,
  CreateAsset,
  Navbar,
  renderTableHeaders,
  ScreenContainer,
  Table,
} from "@/components";
import { renderTableAsset } from "@/components/tabel/RenderAsset.tsx";
import {
  saveAsset,
  useDeleteAsset,
  useEquipment,
  useOrderItem,
  useResponsible,
  useStorage,
} from "@/hooks";
import { capitalize, getTableHeaders, openModal } from "@/util";
import { Equipment } from "@/types";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export const AssetTable = () => {
  const type = capitalize(
    new URLSearchParams(useLocation().search).get("type") as string
  );
  const {
    orderObject,
    asset,
    saveAsset,
    deleteAsset,
    checkedItems,
    setCheckedItems,
  } = useEquipmentTable(type);

  return (
    <ScreenContainer>
      <Navbar currentPageName="item"></Navbar>
      <BodyContainer>
        <Table
          renderHeadersInTable={renderTableHeaders(
            getTableHeaders(asset),
            orderObject.setOrder,
            orderObject.order,
            true,
            type,
            checkedItems,
            deleteAsset,
            () => openModal(type)
          )}
          renderItemInTable={renderTableAsset(
            orderObject.orderItems(asset, orderObject.order) as Equipment[],
            type,
            true,
            checkedItems,
            setCheckedItems
          )}
        ></Table>
      </BodyContainer>
      <CreateAsset
        saveAsset={saveAsset}
        dialogName={type}
        useId={true}
      ></CreateAsset>
    </ScreenContainer>
  );
};

const useEquipmentTable = (type: string) => {
  const hooksMap = {
    Equipment: useEquipment,
    Responsible: useResponsible,
    Storage: useStorage,
  };

  const hook = hooksMap[type as keyof typeof hooksMap];

  const { asset, setAsset, usePost, useDelete } = hook();
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const saveAssetEquipment = saveAsset(setAsset, usePost(), asset);
  const deleteAssetEquipment = useDeleteAsset(
    setAsset,
    useDelete(),
    asset,
    checkedItems,
    setCheckedItems
  );
  const orderObject = useOrderItem();

  return {
    asset,
    orderObject,
    saveAsset: saveAssetEquipment,
    deleteAsset: deleteAssetEquipment,
    checkedItems,
    setCheckedItems,
  };
};
