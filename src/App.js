import {
  Paper,
  Container,
  Typography,
  Grid,
  ThemeProvider,
  CssBaseline
} from "@mui/material";
import { createTheme } from "@mui/material/styles";

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
        <Paper elevation={2} sx={{ mt: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              miejsce na formularz
            </Grid>
            <Grid item xs={6}>
              Wydatki
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
