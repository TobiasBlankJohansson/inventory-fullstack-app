import {BodyContainer, Navbar, renderTableHeaders, ScreenContainer, Table} from "@/components";
import {renderTableAsset} from "@/components/tabel/RenderAsset.tsx";

export const AssetTabel = () => {
  return <ScreenContainer>
    <Navbar currentPageName="item"></Navbar>
    <BodyContainer>
      <Table renderHeadersInTable={renderTableHeaders()} renderItemInTable={renderTableAsset()}></Table>
    </BodyContainer>
  </ScreenContainer>
}