import "./App.css";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4BB2F9",
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
