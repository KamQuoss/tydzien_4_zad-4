import React from "react";

const CategoryField = React.forwardRef(
  ({ label, onChange, onBlur, name, options }, ref) => {
    return (
      <fieldset>
        <legend>{label}</legend>
        <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
          {options.map((option) => (
            <option key={option.name} value={option.name}>
              {option.value}
            </option>
          ))}
        </select>
      </fieldset>
    );
  }
);

export default CategoryField;
