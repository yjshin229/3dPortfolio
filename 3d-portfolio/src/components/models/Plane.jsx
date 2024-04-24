import React from "react";
import plane from "../../assets/3d/plane.glb";
import { useGLTF } from "@react-three/drei";

const Plane = ({ isRotating, ...props }) => {
  const { scene, animations } = useGLTF(plane);
  return (
    <mesh {...props}>
      <primitive object={scene}></primitive>
    </mesh>
  );
};

export default Plane;
