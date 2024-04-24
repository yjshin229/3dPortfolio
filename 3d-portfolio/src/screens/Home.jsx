import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import { styled } from "styled-components";
import Loader from "../components/Loader";
import Island from "../components/models/Island";
import Sky from "../components/models/Sky";
import Plane from "../components/models/Plane";

//render Island
const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);

  const adjustIslandForScreenSize = () => {
    let screenScale;
    let screenPosition = [0, -23, -100];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  const adjustPlaneForScreenSize = () => {
    let planeScale, planePosition;

    if (window.innerWidth < 768) {
      planeScale = [1.5, 1.5, 1.5];
      planePosition = [-2, 1.5, 0];
    } else {
      planeScale = [3, 3, 3];
      planePosition = [-7, 3, -4];
    }

    return [planeScale, planePosition];
  };

  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <HomeSection>
      <HomeContainer>PopUp</HomeContainer>
      <StyledCanvas camera={{ near: 0.1, far: 1000 }} isRotating={isRotating}>
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[1, 1, 1]} intensity={1.5} />
          <hemisphereLight
            skyColor="#ffc233"
            groundColor={"#1f3019"}
            intensity={1}
          />
          <Sky isRotating={isRotating} />
          <Plane
            position={planePosition}
            scale={planeScale}
            isRotating={isRotating}
            rotation={[0, 1, 0]}
          />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </StyledCanvas>
    </HomeSection>
  );
};

export default Home;

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
