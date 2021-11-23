import React from "react";
import { Item } from "./Item";

export const ItemList = ({ state, operationType, onItemRemove }) => (
  <ul>
    {state.length > 0 &&
      state
        .filter((item) => item.transaction === operationType)
        .map((item) => (
          <Item
            key={state.id}
            name={item.operationName}
            category={item.category}
            amount={item.amount}
            onItemRemove={onItemRemove}
            id={item.id}
          />
        ))}
  </ul>
);
