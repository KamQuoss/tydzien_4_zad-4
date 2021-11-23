import React from "react";
import {
  Paper,
  Container,
  Typography,
  Grid,
  ThemeProvider,
  CssBaseline
} from "@mui/material";
import { createTheme } from "@mui/material/styles";

import Form from "./components/Form/Form";
import { ItemList } from "./components/ItemList/ItemList";
import { Balance } from "./components/Balance/Balance";

const theme = createTheme();

const initialState = [
  {
    id: "1",
    transaction: "income",
    operationName: "test wydatków",
    amount: "100",
    category: "food"
  },
  {
    id: "2",
    transaction: "expence",
    operationName: "test przychodów",
    amount: "100",
    category: "salary"
  }
];

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.value];
    case "remove":
      return state.filter((item) => item.id !== action.value.id);
    default:
      return state;
  }
};

export default function App() {
  const [state, changeState] = React.useReducer(reducer, initialState);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container fixed>
        <Typography component="h1" variant="h4">
          Zadanie 4
        </Typography>
        <Typography component="h2" variant="h6">
          Kalkulator wydatków
        </Typography>
        <Paper elevation={2} sx={{ mt: 4, p: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Form onItemAdd={changeState} />
            </Grid>
            <Grid item xs={12}>
              <Balance state={state} />
            </Grid>
            <Grid item xs={6}>
              Wydatki
              <ItemList
                state={state}
                operationType="income"
                onItemRemove={changeState}
              />
            </Grid>
            <Grid item xs={6}>
              Przychody
              <ItemList
                state={state}
                operationType="expence"
                onItemRemove={changeState}
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
