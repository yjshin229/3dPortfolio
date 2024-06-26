import React, { useRef, useEffect } from "react";
import planeScene from "../../assets/3d/plane.glb";
import { useAnimations, useGLTF } from "@react-three/drei";

//open source 3d model
// added functions to auto play animation
const Plane = ({ ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    actions["Take 001"]?.play();
  }, [actions]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene}></primitive>
    </mesh>
  );
};

export default Plane;
