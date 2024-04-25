import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import styled from "styled-components";
import { Home, About, Projects, Contact } from "./screens";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Chakra Petch",
      textTransform: "none",
      fontSize: 16,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledMain className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </StyledMain>
    </ThemeProvider>
  );
}

export default App;

const StyledMain = styled.main`
  font-family: "Chakra Petch", sans-serif;
  height: 100vh;
`;
