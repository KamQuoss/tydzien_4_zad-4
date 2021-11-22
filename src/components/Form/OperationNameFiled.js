import React from "react";

const OperationNameField = React.forwardRef(
  ({ label, onChange, onBlur, name }, ref) => {
    return (
      <fieldset>
        <legend>{label}</legend>
        <input
          type="text"
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          ref={ref}
        />
      </fieldset>
    );
  }
);

export default OperationNameField;
