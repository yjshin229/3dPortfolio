import { Canvas } from "@react-three/fiber";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import styled from "styled-components";
import { Home, About, Projects, Contact } from "./screens";
import Plane from "./components/models/Plane";
import Cat from "./components/models/Cat";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <StyledMain className="App">
      {/* <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
      <Canvas camera={{ position: [0, 10, 0] }}>
        <OrbitControls />
        <Plane />
        <ambientLight intensity={1.5} />
        <directionalLight
          position={[0, 10, 3]}
          intensity={1.5}
          color={"#ffcc91"}
        />
        <Cat position={[0, 1.4, 0]} activeAnimation={"walk"} />
      </Canvas>
    </StyledMain>
  );
}

export default App;

const StyledMain = styled.main`
  font-family: "Chakra Petch", sans-serif;
  height: 100vh;
`;
