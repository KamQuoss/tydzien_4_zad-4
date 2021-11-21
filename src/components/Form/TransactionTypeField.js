import React from "react";
// income , expence
const TransactionTypeField = () => {
  return (
    <fieldset>
      <legend>Rodzaj ?</legend>
      <input type="radio" id="income" name="transaction" value="income" />
      <label htmlFor="income">przychód</label>
      <input type="radio" id="expence" name="transaction" value="expence" />
      <label htmlFor="expence">wydatek</label>
    </fieldset>
  );
};
export default TransactionTypeField;
