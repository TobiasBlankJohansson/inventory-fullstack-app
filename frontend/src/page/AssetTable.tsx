import {BodyContainer, Navbar, renderTableHeaders, ScreenContainer, Table} from "@/components";
import {renderTableAsset} from "@/components/tabel/RenderAsset.tsx";
import {useGetEquipment, useOrderItem} from "@/hooks";
import {getTableHeaders} from "@/util";
import {Equipment} from "@/types";

export const AssetTable = () => {
  const {orderObject, asset} = useEquipmentTable();

  return <ScreenContainer>
    <Navbar currentPageName="item"></Navbar>
    <BodyContainer>
      <Table
        renderHeadersInTable={renderTableHeaders(getTableHeaders(asset), orderObject.setOrder, orderObject.order, true, "equipment")}
        renderItemInTable={renderTableAsset(orderObject.orderItems(asset, orderObject.order) as Equipment[], "equipment", true)}></Table>
    </BodyContainer>
  </ScreenContainer>
}

const useEquipmentTable = () => {
  const {equipment} = useGetEquipment();
  const orderObject = useOrderItem()

  return {asset: equipment, orderObject}
}