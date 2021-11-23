import React from "react";

const AmountField = React.forwardRef(
  ({ label, onChange, onBlur, name }, ref) => {
    return (
      <fieldset>
        <legend>{label}</legend>
        <input
          type="number"
          min={0}
          step="0.01"
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          ref={ref}
        />
      </fieldset>
    );
  }
);

export default AmountField;
