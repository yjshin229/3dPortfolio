import React, { useRef, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import styled from "styled-components";
import { Home, About, Projects, Contact } from "./screens";

function App() {
  return (
    <StyledMain className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </StyledMain>
  );
}

export default App;

const StyledMain = styled.main`
  font-family: "Chakra Petch", sans-serif;
  height: 100vh;
`;
