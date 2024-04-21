import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";

// Create a custom theme
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

function CustomThemeExample() {
  return (
    <ThemeProvider theme={theme}>
      <Button color="primary">Primary Button</Button>
      <Button color="secondary">Secondary Button</Button>
    </ThemeProvider>
  );
}

export default CustomThemeExample;
