import {BodyContainer, CreateAsset, Navbar, renderTableHeaders, ScreenContainer, Table} from "@/components";
import {renderTableAsset} from "@/components/tabel/RenderAsset.tsx";
import {useGetEquipment, useOrderItem, usePostEquipment, useSaveAsset} from "@/hooks";
import {getTableHeaders, openModal} from "@/util";
import {Equipment} from "@/types";
import {useState} from "react";
import {useLocation} from "react-router-dom";

export const AssetTable = () => {
  const type = new URLSearchParams(useLocation().search).get("type") as string;
  const {orderObject, asset, saveAsset, checkedItems} = useEquipmentTable();

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
            () => {
            },
            () => openModal(type))}
        renderItemInTable={renderTableAsset(orderObject.orderItems(asset, orderObject.order) as Equipment[], type, true)}></Table>
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
  const [checkedItems] = useState<string[]>([]);

  const saveAssetEquipment = useSaveAsset(setEquipment, usePostEquipment(), equipment)

  return {asset: equipment, orderObject, saveAsset: saveAssetEquipment, checkedItems}
}