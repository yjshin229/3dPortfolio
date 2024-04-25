import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import { styled } from "styled-components";
import Island from "../components/models/Island";

const About = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale;
    let screenPosition = [0, -23, -1000];
    let rotation = [0.1, 10, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };
  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();
  return (
    <HomeSection>
      <StyledCanvas camera={{ near: 0.1, far: 1000 }}>
        <Suspense>
          <ambientLight intensity={0.5} />
          <directionalLight position={[1, 1, 1]} intensity={1.5} />
          <hemisphereLight
            skyColor="#ffc233"
            groundColor={"#1f3019"}
            intensity={1}
          />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
          />
        </Suspense>
      </StyledCanvas>
    </HomeSection>
  );
};

export default About;

const HomeSection = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const HomeContainer = styled.div`
  position: absolute;
  top: 7rem;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCanvas = styled(Canvas)`
  width: 100%;
  height: 100vh;
  background-color: transparent;
  cursor: ${(props) => (props.isRotating ? "grabbing" : "grab")};
`;
