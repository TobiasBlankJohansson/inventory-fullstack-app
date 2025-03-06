import { FormFieldConfig } from "@/types";

export const FormFieldItem = ({
  field,
  options,
}: {
  field: FormFieldConfig;
  options?: string[];
}) => (
  <label className="form-control w-full max-w-xs">
    <div className="label">
      <span className="label-text">{field.label}</span>
    </div>
    {field.type === "select" ? (
      <select
        key={`item_${field.key}`}
        name={`item_${field.key}`}
        className="select select-bordered w-full max-w-xs"
        required
        defaultValue=""
      >
        <option value="" disabled>
          Select {field.label.toLowerCase()}
        </option>
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    ) : (
      <input
        key={`item_${field.key}`}
        name={`item_${field.key}`}
        type={field.type}
        placeholder={field.placeholder}
        className="input input-bordered w-full max-w-xs"
        required
      />
    )}
  </label>
);
