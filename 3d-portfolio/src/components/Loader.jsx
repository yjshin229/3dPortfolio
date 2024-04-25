import React from "react";
import { Html } from "@react-three/drei";
import { styled, keyframes } from "styled-components";
import HashLoader from "react-spinners/HashLoader";

const Loader = () => {
  return (
    <Html>
      <LoaderContainer>
        {/* <Spinner /> */}
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
