import React from "react";
import { DeleteButton } from "./DeleteButton";
import toPLN from "../../utils/toPLN";

export const Item = ({ name, category, amount, onItemRemove, id }) => (
  <li key={id}>
    {category.toUpperCase()} {name} {toPLN(amount)}{" "}
    <DeleteButton onItemRemove={onItemRemove} id={id} />
  </li>
);
