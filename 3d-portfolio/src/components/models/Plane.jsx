import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import React from "react";
import Moon_crate_base from "../../assets/textures/Moon_crate_base.jpg";

const Plane = () => {
  const texture = useTexture(Moon_crate_base);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;

  return (
    <mesh position={[0, 0, 0]} rotation-x={-Math.PI / 2}>
      <planeGeometry args={[200, 200]} />
      <meshStandardMaterial
        color={"#c3bda4"}
        map={texture}
        map-repeat={[100, 100]}
      />
    </mesh>
  );
};

export default Plane;
