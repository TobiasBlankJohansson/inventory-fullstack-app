import {BodyContainer, Navbar, renderTableHeaders, ScreenContainer, Table,} from "@/components";
import {renderTableAsset} from "@/components/tabel/RenderAsset.tsx";
import {capitalize, getTableHeaders, openModal} from "@/util";
import {Equipment} from "@/types";
import {useLocation} from "react-router-dom";
import {useAssetTable} from "@/hooks";
import {CreateAssetModal} from "@/features";

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
    useId
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
      <CreateAssetModal
        saveAsset={saveAsset}
        dialogName={type}
        useId={useId}
      ></CreateAssetModal>
    </ScreenContainer>
  );
};