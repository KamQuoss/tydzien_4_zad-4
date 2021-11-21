import React from "react";

const AmountField = () => {
  return (
    <fieldset>
      <legend>Kwota</legend>
      <input type="number" min={0} />
    </fieldset>
  );
};

export default AmountField;
