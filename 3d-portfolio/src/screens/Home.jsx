import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState, useEffect, useRef } from "react";
import { styled } from "styled-components";
import Loader from "../components/Loader";
import FantasyIsland from "../components/models/FantasyIsland";
import Sky from "../components/models/Sky";
import Plane from "../components/models/Plane";
import Popup from "../components/Popup";
import natureSound from "../assets/nature_sound.mp3";
import { GiSoundOff, GiSoundOn } from "react-icons/gi";

//render Island
const Home = () => {
  const audioRef = useRef(new Audio(natureSound));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(null);
  const [isMusicOn, setIsMusicOn] = useState(false);

  useEffect(() => {
    if (isMusicOn) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [isMusicOn]);

  const adjustIslandForScreenSize = () => {
    let screenScale;
    let screenPosition = [0, -23, -120];
    let rotation = [0.1, 0 - 1, 0];

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
      planePosition = [1.5, 1.5, 0];
    } else {
      planeScale = [3, 3, 3];
      planePosition = [5, 3, -4];
    }

    return [planeScale, planePosition];
  };

  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <HomeSection>
      <HomeContainer>
        {currentStage && <Popup currentStage={currentStage} />}
      </HomeContainer>
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
            rotation={[0, -1, 0]}
          />
          <FantasyIsland
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </StyledCanvas>
      <SoundToggleContainer>
        <SoundIcon onClick={() => setIsMusicOn(!isMusicOn)}>
          {isMusicOn ? <GiSoundOff /> : <GiSoundOn />}
        </SoundIcon>
      </SoundToggleContainer>
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
  top: 15rem;
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

const SoundToggleContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
`;

const SoundIcon = styled.div`
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  color: white;
  font-size: 1.5rem;
`;
