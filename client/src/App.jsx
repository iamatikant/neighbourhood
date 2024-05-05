import "./App.css";
import "./component.css";
import LandingPage from "./components/LandingPage";

// eslint-disable-next-line react-refresh/only-export-components
// export const themeOptions = {
//   palette: {
//     mode: "light",
//     primary: {
//       main: "#DA7B93",
//     },
//     secondary: {
//       main: "#9c27b0",
//     },
//   },
// };
// const theme = createTheme(themeOptions);

function App() {
  return (
    <>
      <LandingPage />
    </>
  );
}

export default App;
