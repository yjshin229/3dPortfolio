import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";
import pepper from "../../assets/models/pepper.glb";

const Cat = ({ activeAnimation, ...props }) => {
  const group = useRef();
  const catRef = useRef();
  const { nodes, materials, animations } = useGLTF(pepper);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const currentAction = actions[activeAnimation];
    if (currentAction) {
      Object.values(actions).forEach((action) => {
        if (action !== currentAction) {
          action.stop();
        }
      });
      currentAction.reset().play();
    }
  }, [actions, activeAnimation]);

  return (
    <a.group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <skinnedMesh
            name="Cube"
            geometry={nodes.Cube.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.Cube.skeleton}
          />
          <primitive object={nodes.Bone} />
          <primitive object={nodes.Bone003} />
          <primitive object={nodes.Bone005} />
          <primitive object={nodes.Bone008} />
          <primitive object={nodes.Bone011} />
          <primitive object={nodes.Bone015} />
          <primitive object={nodes.Bone004} />
        </group>
      </group>
    </a.group>
  );
};

export default Cat;
