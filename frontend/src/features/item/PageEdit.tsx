import {BodyContainer, FormField, Navbar, ScreenContainer,} from "@/components";
import {useLocation} from "react-router-dom";
import {FORM_FIELDS_ITEM} from "@/constants.ts";
import {option} from "@/util";
import {EditItemForm, fromItemToFormField, useItemEditorData} from "@/features";


export const ItemEdit = () => {
  const id = new URLSearchParams(useLocation().search).get("id");
  const {item, edit, setEdit, options, onSubmit, onDelete} = useItemEditorData(
    id as string
  );

  return (
    <ScreenContainer>
      <Navbar currentPageName="item"></Navbar>
      <BodyContainer>
        <section
          className="bg-white my-5 h-full rounded-xl min-[768px]:mx-20 min-[1024px]:mx-60 overflow-scroll scrollbar-hide">
          {item && (
            <EditItemForm
              onSubmit={onSubmit}
              name={item.equipment.name}
              edit={edit}
              onDelete={onDelete}
              setEdit={setEdit}
            >
              {FORM_FIELDS_ITEM.map((field) => (
                <FormField
                  key={field.key}
                  field={field}
                  value={fromItemToFormField(item)[field.key]}
                  options={option(field.label, options)}
                  edit={!edit}
                />
              ))}
            </EditItemForm>
          )}
        </section>
      </BodyContainer>
    </ScreenContainer>
  );
};
