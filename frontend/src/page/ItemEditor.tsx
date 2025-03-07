import {
  BodyContainer,
  Button,
  FormFieldItem,
  Navbar,
  ScreenContainer,
} from "@/components";
import { FORM_FIELDS_ITEM } from "@/constants";
import { Item } from "@/types";

export const ItemEditor = () => {
  const item: Item = {
    id: "1",
    name: "Screwdriver",
    quantity: "3",
    storageArea: "Annex",
  };
  const storageAreas: string[] = ["Annex", "Verksdag"];
  
  return (
    <ScreenContainer>
      <Navbar currentPageName="item"></Navbar>
      <BodyContainer>
        <section className="bg-white my-5 h-full rounded-xl min-[768px]:mx-20 min-[1024px]:mx-60 overflow-scroll scrollbar-hide">
          <form className="flex flex-col items-center h-full w-full flex-grow justify-between">
            <h1 className="text-3xl my-8">{item.name}</h1>
            {FORM_FIELDS_ITEM.map((field) => (
              <FormFieldItem
                key={field.key}
                field={field}
                value={item[field.key]}
                options={field.type === "select" ? storageAreas : undefined}
              />
            ))}
            <div className="modal-action flex justify-between pb-8 w-80">
              <Button className="w-20 text-button_warning hover:bg-button_warning btn-outline">
                Delete
              </Button>
              <Button className="btn w-40 bg-button_info hover:bg-button_info_hover border-button_info text-white">
                Save
              </Button>
            </div>
          </form>
        </section>
      </BodyContainer>
    </ScreenContainer>
  );
};
