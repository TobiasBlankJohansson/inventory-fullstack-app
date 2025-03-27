import {BodyContainer, Navbar, renderTableHeaders, ScreenContainer, Table} from "@/components";
import {renderTableAsset} from "@/components/tabel/RenderAsset.tsx";
import {useGetEquipment, useOrderItem} from "@/hooks";
import {getTableHeaders} from "@/util";

export const AssetTable = () => {
  const {equipment} = useGetEquipment();
  const {setOrder, order, orderItems} = useOrderItem()

  return <ScreenContainer>
    <Navbar currentPageName="item"></Navbar>
    <BodyContainer>
      <Table renderHeadersInTable={renderTableHeaders(getTableHeaders(equipment))}
             renderItemInTable={renderTableAsset(equipment, "equipment")}></Table>
    </BodyContainer>
  </ScreenContainer>
}