import React from "react";

export const DeleteButton = ({ onItemRemove, id }) => (
  <button onClick={() => onItemRemove({ type: "remove", value: { id: id } })}>
    usuń
  </button>
);
