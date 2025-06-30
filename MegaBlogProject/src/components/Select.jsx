import { forwardRef } from "react";
import { useId } from "react";

function Select({ label, options, className = "", ...props }) {
  const id = useId();
  return (
    <>
      <div>
        // label for dropdown
        {label && <label htmlFor={id}>{label}</label>}
        // dropdown
        <select className={`${className}`} {...props}>
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default forwardRef(Select);
