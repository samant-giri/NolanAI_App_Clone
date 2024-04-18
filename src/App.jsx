import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/Theme";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
      <Toaster position="top-center" />
    </BrowserRouter>
  );
};

export default App;
