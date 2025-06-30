import { forwardRef } from "react";
import { useId } from "react";

const Input = forwardRef(function Input(
  { label, type = "text", className = "", placeholder, ...props },
  ref
) {
  const id = useId();
  return (
    <div>
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      <input
        type={type}
        className={`${className}`}
        placeholder={placeholder}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
