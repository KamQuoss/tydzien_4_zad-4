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

export default function App() {
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
              <Form />
            </Grid>
            <Grid item xs={6}>
              Wydatki
              {/* ten sam model wyświetlania różnice w szczegółach */}
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
