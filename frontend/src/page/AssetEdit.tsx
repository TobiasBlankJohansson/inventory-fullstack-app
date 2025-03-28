import {BodyContainer, EditItemForm, FormField, Navbar, ScreenContainer} from "@/components";
import {FORM_FIELDS_ASSET} from "@/constants.ts";
import {useLocation} from "react-router-dom";
import {FormFieldItem} from "@/types";
import {useEditAsset, useEquipment, useResponsible, useStorage} from "@/hooks";
import {useState} from "react";
import {capitalize} from "@/util";

export const AssetEdit = () => {
  const id = new URLSearchParams(useLocation().search).get("id") as string;
  const type = capitalize(
    new URLSearchParams(useLocation().search).get("type") as string
  );
  const {asset, edit, setEdit, onDelete, onSubmit} = useAssetData(id, type);

  return (
    <ScreenContainer>
      <Navbar currentPageName={type}></Navbar>
      <BodyContainer>
        <section
          className="bg-white my-5 h-full rounded-xl min-[768px]:mx-20 min-[1024px]:mx-60 overflow-scroll scrollbar-hide">
          {asset && (
            <EditItemForm
              onSubmit={onSubmit}
              name={type}
              edit={edit}
              onDelete={onDelete}
              setEdit={setEdit}
            >
              {FORM_FIELDS_ASSET.map((field) => (
                <FormField
                  key={field.key}
                  field={field}
                  value={(asset as FormFieldItem)[field.key]}
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
  const hooksMap = {
    Equipment: useEquipment,
    Responsible: useResponsible,
    Storage: useStorage,
  };

  const hook = hooksMap[type as keyof typeof hooksMap];
  const {asset: assetList, setAsset, usePost, useDelete} = hook();
  const [edit, setEdit] = useState(false);
  const {
    asset,
    onSubmit,
    onDelete
  } = useEditAsset(id, assetList, setAsset, setEdit, usePost(), useDelete());

  return {
    asset, edit, setEdit, onSubmit, onDelete
  };
};