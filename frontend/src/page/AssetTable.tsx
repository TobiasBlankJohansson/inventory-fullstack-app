import {BodyContainer, Navbar, renderTableHeaders, ScreenContainer, Table} from "@/components";
import {renderTableAsset} from "@/components/tabel/RenderAsset.tsx";
import {useGetEquipment, useOrderItem} from "@/hooks";
import {getTableHeaders} from "@/util";
import {Equipment} from "@/types";

export const AssetTable = () => {
  const {equipment} = useGetEquipment();
  const {setOrder, order, orderItems} = useOrderItem()

  return <ScreenContainer>
    <Navbar currentPageName="item"></Navbar>
    <BodyContainer>
      <Table
        renderHeadersInTable={renderTableHeaders(getTableHeaders(equipment), setOrder as (string: string) => void, order)}
        renderItemInTable={renderTableAsset(orderItems(equipment, order) as Equipment[], "equipment")}></Table>
    </BodyContainer>
  </ScreenContainer>
}