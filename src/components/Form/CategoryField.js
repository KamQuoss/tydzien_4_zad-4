import React from "react";

const incomeOptions = [
  { name: "food", value: "Jedzenie" },
  { name: "home", value: "Mieszkanie" },
  { name: "transport", value: "Transport" },
  { name: "heatlh", value: "Opieka zdrowotna" },
  { name: "higene", value: "Higiena" },
  { name: "clothes", value: "Ubrania" },
  { name: "entertainment", value: "Rozrywka" },
  { name: "other", value: "Inne" }
];

const CategoryField = React.forwardRef(
  ({ label, onChange, onBlur, name }, ref) => {
    return (
      <fieldset>
        <legend>Kategoria</legend>
        <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
          {incomeOptions.map((option) => (
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
