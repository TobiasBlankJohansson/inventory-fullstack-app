import {BodyContainer, DeleteCheck, FormField, Navbar, ScreenContainer} from "@/components";
import {FORM_FIELDS_ASSET} from "@/constants.ts";
import {useLocation} from "react-router-dom";
import {capitalize, openModal} from "@/lib";
import {EditItemForm, FormFieldItem, useAssetData} from "@/features";

export const AssetEditPage = () => {
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
              onDelete={() => openModal("delete_check")}
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
      <DeleteCheck name={type} deleteFunction={onDelete}></DeleteCheck>
    </ScreenContainer>
  )
}