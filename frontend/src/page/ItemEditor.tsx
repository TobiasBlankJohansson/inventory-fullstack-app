import {BodyContainer, Button, FormFieldItem, Navbar, ScreenContainer,} from "@/components";
import {FORM_FIELDS_ITEM} from "@/constants";
import {useItemEditorData} from "@/hooks";
import {useLocation} from "react-router-dom";

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
            <form
              onSubmit={onSave}
              className="flex flex-col items-center h-full w-full flex-grow justify-between"
            >
              <h1 className="text-3xl my-8">{item.name}</h1>
              {FORM_FIELDS_ITEM.map((field) => (
                <FormFieldItem
                  key={field.key}
                  field={field}
                  value={item[field.key]}
                  options={field.type === "select" ? storageAreas : undefined}
                  edit={!edit}
                />
              ))}
              <div className="modal-action flex justify-between pb-8 w-80">
                {edit ? (
                  <>
                    <Button
                      onClick={onDelete}
                      className="w-20 text-button_warning hover:bg-button_warning btn-outline"
                    >
                      Delete
                    </Button>
                    <Button
                      className="btn w-40 bg-button_info hover:bg-button_info_hover border-button_info text-white"
                      type="submit"
                    >
                      Save
                    </Button>
                  </>
                ) : (
                  <>
                    <div></div>
                    <Button
                      className="bg-button_secondary text-white hover:bg-button_secondary_hover"
                      type="button"
                      aria-label="Edit item"
                      onClick={(e) => {
                        e.preventDefault();
                        setEdit(true);
                      }}
                    >
                      Edit
                    </Button>
                  </>
                )}
              </div>
            </form>
          )}
        </section>
      </BodyContainer>
    </ScreenContainer>
  );
};
