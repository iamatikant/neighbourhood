import "./App.css";
import LandingPage from "./components/LandingPage";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1a237e", // Your primary color
    },
    secondary: {
      main: "#ff6f00", // Your secondary color
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <LandingPage />
      </ThemeProvider>
    </>
  );
}

export default App;
