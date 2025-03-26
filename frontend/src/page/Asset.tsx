import {BodyContainer, EditItemForm, FormField, Navbar, ScreenContainer} from "@/components";
import {FORM_FIELDS_ASSET} from "@/constants.ts";
import {useAssetData} from "@/hooks/page-data/asset-data";
import {useLocation} from "react-router-dom";
import {FormFieldItem} from "@/types";

export const Asset = () => {
  const id = new URLSearchParams(useLocation().search).get("id");
  const {equipment, edit, setEdit, onDelete, onSubmit} = useAssetData(id as string);

  return (
    <ScreenContainer>
      <Navbar currentPageName="item"></Navbar>
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