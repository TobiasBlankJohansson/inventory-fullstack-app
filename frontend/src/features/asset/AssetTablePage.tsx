import {BodyContainer, Navbar, ScreenContainer, Table,} from "@/components";
import {renderTableAsset} from "@/features/asset/components/RenderAsset.tsx";
import {capitalize, getTableHeaders, openModal} from "@/util";
import {useLocation} from "react-router-dom";
import {CreateAssetModal, Equipment, renderTableHeaders, useAssetTable} from "@/features";

export const AssetTablePage = () => {
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