import React from "react";
import { Html } from "@react-three/drei";
import { styled, keyframes } from "styled-components";

const Loader = () => {
  return (
    <Html>
      <LoaderContainer>
        <Spinner />
      </LoaderContainer>
    </Html>
  );
};

export default Loader;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.div`
  width: 5rem;
  height: 5rem;
  border-width: 0.5rem;
  border-color: rgba(245, 158, 11, 0.2);
  border-radius: 1000rem;
  animation: ${spin} 1s linear infinite;
`;
