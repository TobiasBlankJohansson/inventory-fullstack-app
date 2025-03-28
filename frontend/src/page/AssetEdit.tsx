import {BodyContainer, EditItemForm, FormField, Navbar, ScreenContainer} from "@/components";
import {FORM_FIELDS_ASSET} from "@/constants.ts";
import {useLocation} from "react-router-dom";
import {FormFieldItem} from "@/types";
import {useDeleteEquipment, useEditAsset, useGetEquipment, usePutEquipment} from "@/hooks";
import {useState} from "react";
import {capitalize} from "@/util";

export const AssetEdit = () => {
  const id = new URLSearchParams(useLocation().search).get("id") as string;
  const type = capitalize(
    new URLSearchParams(useLocation().search).get("type") as string
  );
  const {equipment, edit, setEdit, onDelete, onSubmit} = useAssetData(id, type);

  return (
    <ScreenContainer>
      <Navbar currentPageName={type}></Navbar>
      <BodyContainer>
        <section
          className="bg-white my-5 h-full rounded-xl min-[768px]:mx-20 min-[1024px]:mx-60 overflow-scroll scrollbar-hide">
          {equipment && (
            <EditItemForm
              onSubmit={onSubmit}
              name={"Equipment"}
              edit={edit}
              onDelete={onDelete}
              setEdit={setEdit}
            >
              {FORM_FIELDS_ASSET.map((field) => (
                <FormField
                  key={field.key}
                  field={field}
                  value={(equipment as FormFieldItem)[field.key]}
                  edit={!edit}
                />
              ))}
            </EditItemForm>
          )}
        </section>
      </BodyContainer>
    </ScreenContainer>
  )
}

export const useAssetData = (id: string, type: string) => {
  const {equipment: equipmentList, setEquipment} = useGetEquipment();
  const [edit, setEdit] = useState(false);
  const {
    asset,
    onSubmit,
    onDelete
  } = useEditAsset(id, equipmentList, setEquipment, setEdit, usePutEquipment(), useDeleteEquipment());

  return {
    equipmentList, equipment: asset, edit, setEdit, onSubmit, onDelete
  };
};