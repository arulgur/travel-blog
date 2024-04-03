import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";

const theme = createTheme({
  palette: {
    text: {
      primary: "#708238",
    },
    primary: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: "Poppins",
    h2: {
      fontFamily: "Alex Brush",
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container maxWidth='lg'>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}
