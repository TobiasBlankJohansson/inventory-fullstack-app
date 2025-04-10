import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {categories} from "@/constants.ts";
import {Button} from "@/components";

type Props = {
  saveAsset: (formId: string,
              addAnotherOne: boolean,
              setAddAnotherOne: React.Dispatch<React.SetStateAction<boolean>>,
              event?: React.FormEvent) => Promise<void>;
  dialogName: string;
  useId?: boolean;
  useTable?: boolean;
};

export function CreateAssetModal({saveAsset, dialogName, useId, useTable}: Props) {
  const [addAnotherOne, setAddAnotherOne] = useState<boolean>(false);
  const navigate = useNavigate();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <dialog id={dialogName} className="modal">
      <div className="modal-box px-10 py-6 w-fit bg-background">
        <form
          method="dialog"
          onSubmit={(event) =>
            saveAsset(dialogName, addAnotherOne, setAddAnotherOne, event)
          }
        >
          <h3 className="font-bold text-lg ">{dialogName} creation</h3>
          {useId && <label
              className="form-control w-full max-w-xs">
              <div className="label">
                  <span className="label-text ">{dialogName} id</span>
              </div>
              <div className="flex">
                  <select
                      id={"select id " + dialogName}
                      key={"select id " + dialogName}
                      name={"select id " + dialogName}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      className={`select select-bordered w-fit focus:w-full`}
                      required
                  >
                    {categories.map((option: categories) => (
                      <option key={option.name} value={option.id}>
                        {isFocused ? `${option.id} - ${option.name}` : option.id}
                      </option>
                    ))}
                  </select>
                  <input
                      id={"input id " + dialogName}
                      key={"input id " + dialogName}
                      type="number"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs"
                      required
                  />
              </div>
          </label>}
          <label
            className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text ">{dialogName} name</span>
            </div>
            <input
              id={"input name " + dialogName}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </label>

          <div className="modal-action flex justify-between">
            <Button
              type="submit"
              className="btn bg-button_primary hover:bg-button_primary_hover border-button_primary text-white"
              onClick={() => setAddAnotherOne(() => true)}
            >
              Add another one
            </Button>
            <Button
              type="submit"
              className="btn bg-button_secondary hover:bg-button_warning_hover border-button_secondary text-white">
              Save
            </Button>
          </div>
        </form>
        {useTable && <Button className={"w-full mt-6"} onClick={() => {
          navigate(`/table?type=${dialogName.toLowerCase()}`);
        }
        }>{dialogName} table</Button>}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
