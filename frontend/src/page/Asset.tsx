import {BodyContainer, EditItemForm, FormField, Navbar, ScreenContainer} from "@/components";
import {FORM_FIELDS_EQUIPMENT} from "@/constants.ts";
import {useAssetData} from "@/hooks/page-data/asset-data";

export const Asset = () => {
  const {} = useAssetData();

  return (
    <ScreenContainer>
      <Navbar currentPageName="item"></Navbar>
      <BodyContainer>
        <section
          className="bg-white my-5 h-full rounded-xl min-[768px]:mx-20 min-[1024px]:mx-60 overflow-scroll scrollbar-hide">
          {equipment && (
            <EditItemForm
              onSubmit={onSubmit}
              item={equipment}
              edit={edit}
              onDelete={onDelete}
              setEdit={setEdit}
            >
              {FORM_FIELDS_EQUIPMENT.map((field) => (
                <FormField
                  key={field.key}
                  field={field}
                  value={equipment[field.key]}
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