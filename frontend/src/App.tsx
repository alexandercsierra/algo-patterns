import "./App.css";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Nav from "./components/Nav";
import Signin from "./pages/Signin";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4BB2F9",
      dark: "#2b668e",
    },
    secondary: {
      main: "#1F2122",
    },
    text: {
      primary: "#E4E4E4",
    },
  },
  typography: {
    fontFamily: "Nunito, sans-seif, Arial, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
