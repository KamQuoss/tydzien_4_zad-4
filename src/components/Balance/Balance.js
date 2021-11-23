import React from "react";
import { Box } from "@mui/material";
import toPLN from "../../utils/toPLN";

export const Balance = ({ state }) => {
  const balance = state.reduce((prev, curr) => {
    return curr.transaction == "income"
      ? prev + parseFloat(curr.amount)
      : prev - parseFloat(curr.amount);
  }, 0);
  return (
    <Box
      sx={{
        border: "2px solid grey",
        padding: 2,
        textAlign: "center",
        backgroundColor:
          balance > 0 ? "#B0E9D8" : balance < 0 ? "#F99E86" : "white"
      }}
    >
      Stan konta: {toPLN(balance)}
    </Box>
  );
};
