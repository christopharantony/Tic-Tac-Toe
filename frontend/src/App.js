import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Views/Home/Home";
import ThemeProvider from "./theme";
import { CssBaseline } from "@mui/material";
import Landing from "./Views/Landing/Landing";

function App() {
  return (
    <ThemeProvider>
      <CssBaseline enableColorScheme />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        {/* <ToastContainer /> */}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
