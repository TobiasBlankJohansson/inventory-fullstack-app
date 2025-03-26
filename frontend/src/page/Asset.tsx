import {BodyContainer, EditItemForm, FormField, Navbar, ScreenContainer} from "@/components";
import {FORM_FIELDS_ITEM} from "@/constants.ts";
import {fromItemToFormField} from "@/types";
import {option} from "@/util";

export const Asset = () => {
  return (
    <ScreenContainer>
      <Navbar currentPageName="item"></Navbar>
      <BodyContainer>
        <section
          className="bg-white my-5 h-full rounded-xl min-[768px]:mx-20 min-[1024px]:mx-60 overflow-scroll scrollbar-hide">
          {item && (
            <EditItemForm
              onSubmit={onSubmit}
              item={item}
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
  )
}