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
        <section className="bg-white my-5 w-full h-full rounded-xl">
          <form className="flex flex-col items-center h-full w-full flex-grow justify-between">
            <h1 className="flex flex-col items-center w-full text-3xl my-8">
              {item.name}
            </h1>
            <div className="flex flex-col items-center space-y-5">
              {FORM_FIELDS_ITEM.map((field) => (
                <FormFieldItem
                  key={field.key}
                  field={field}
                  value={item[field.key]}
                  options={field.type === "select" ? storageAreas : undefined}
                />
              ))}
            </div>
            <div className="modal-action flex justify-between mb-8">
              <Button className="btn w-40 bg-button_primary hover:bg-button_primary_hover border-button_primary text-white">
                Add another one
              </Button>
              <Button className="btn w-40 bg-button_secondary hover:bg-button_warning_hover border-button_secondary text-white">
                Save
              </Button>
            </div>
          </form>
        </section>
      </BodyContainer>
    </ScreenContainer>
  );
};
