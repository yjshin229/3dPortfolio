import { useGLTF } from "@react-three/drei";
import React, { useRef, useState } from "react";
import skyScene from "../../assets/3d/sky.glb";
import { useFrame } from "@react-three/fiber";

//open source 3d model
//added auto-rotation and manual rotation
const Sky = ({ isRotating }) => {
  const sky = useGLTF(skyScene);
  const ref = useRef();

  const [autoRotate, setAutoRotate] = useState(true);

  useFrame((_, delta) => {
    const rotationSpeed = isRotating ? 0.15 * delta : 0.05 * delta;

    if (isRotating) {
      setAutoRotate(false);
    } else {
      setAutoRotate(true);
    }
    if (isRotating || autoRotate) {
      ref.current.rotation.y += rotationSpeed;
    }
  });
  return (
    <mesh ref={ref}>
      <primitive object={sky.scene}></primitive>
    </mesh>
  );
};

export default Sky;
