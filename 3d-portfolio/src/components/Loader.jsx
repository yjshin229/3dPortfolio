import React from "react";
import { Html } from "@react-three/drei";
import { styled, keyframes } from "styled-components";
import HashLoader from "react-spinners/HashLoader";

//A Spinner (3d websites usually taking longer to load)
const Loader = () => {
  return (
    <Html>
      <LoaderContainer>
        <HashLoader color={"#f59e0b"} loading={true} size={50} />
      </LoaderContainer>
    </Html>
  );
};

export default Loader;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
