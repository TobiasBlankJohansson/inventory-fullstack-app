import {BodyContainer, EditItemForm, FormFieldItem, Navbar, ScreenContainer,} from "@/components";
import {useItemEditorData} from "@/hooks";
import {useLocation} from "react-router-dom";
import {FORM_FIELDS_ITEM} from "@/constants.ts";

export const ItemEditor = () => {
  const id = new URLSearchParams(useLocation().search).get("id");
  const {item, onDelete, onSave, edit, setEdit} = useItemEditorData(id as string);
  const storageAreas: string[] = ["Annex", "Verksdag"];

  return (
    <ScreenContainer>
      <Navbar currentPageName="item"></Navbar>
      <BodyContainer>
        <section
          className="bg-white my-5 h-full rounded-xl min-[768px]:mx-20 min-[1024px]:mx-60 overflow-scroll scrollbar-hide">
          {item && (
            <EditItemForm onSubmit={onSave} item={item} edit={edit} onDelete={onDelete}
                          setEdit={setEdit}>
              {FORM_FIELDS_ITEM.map((field) => (
                <FormFieldItem
                  key={field.key}
                  field={field}
                  value={item[field.key]}
                  options={field.type === "select" ? storageAreas : undefined}
                  edit={!edit}
                />
              ))}</EditItemForm>
          )}
        </section>
      </BodyContainer>
    </ScreenContainer>
  );
};
