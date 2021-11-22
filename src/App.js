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

const theme = createTheme();

const reducer = (state, action) => {
  console.log("action", action);
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
  const [state, changeState] = React.useReducer(reducer, []);

  React.useEffect(() => {
    console.log("stan apki się zmienił", state);
  }, [state]);

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
              {/* formularz */}
              <Form onItemAdd={changeState} />
            </Grid>
            <Grid item xs={6}>
              Lista
              {/* {state.map((item) => {
                return (
                  <div>
                    {item.id}
                    <button
                      onClick={changeState({
                        type: "add",
                        value: { id: item.id }
                      })}
                    >
                      usuń
                    </button>
                  </div>
                );
              })} */}
            </Grid>
            <Grid item xs={6}>
              Przychody
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
