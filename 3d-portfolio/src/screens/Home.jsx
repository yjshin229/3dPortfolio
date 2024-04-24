import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { styled } from "styled-components";
import Loader from "../components/Loader";

const Home = () => {
  return (
    <HomeSection>
      <HomeContainer>PopUp</HomeContainer>
      <StyledCanvas camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}></Suspense>
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
`;
