import {BodyContainer, CreateAsset, Navbar, renderTableHeaders, ScreenContainer, Table,} from "@/components";
import {renderTableAsset} from "@/components/tabel/RenderAsset.tsx";
import {capitalize, getTableHeaders, openModal} from "@/util";
import {Equipment} from "@/types";
import {useLocation} from "react-router-dom";
import {useAssetTable} from "@/hooks";

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
  } = useAssetTable(type);

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