import React from "react";
// income , expence
const TransactionTypeField = React.forwardRef(
  ({ label, onChange, onBlur, name }, ref) => {
    return (
      <fieldset>
        <legend>{label}</legend>
        <input
          type="radio"
          id="income"
          value="income"
          defaultChecked
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          ref={ref}
        />
        <label htmlFor="income">przychód</label>
        <input
          type="radio"
          id="expence"
          value="expence"
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
        />
        <label htmlFor="expence">wydatek</label>
      </fieldset>
    );
  }
);
export default TransactionTypeField;
