import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import pepperScene from "../../assets/3d/pepper.glb";

const Cat = ({ currentAnimation, ...props }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(pepperScene);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    Object.values(actions).forEach((action) => action.stop());

    if (actions[currentAnimation]) {
      actions[currentAnimation].play(2);
    }
  }, [actions, currentAnimation]);
  return (
    <group ref={group} {...props} dispose={null}>
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
    </group>
  );
};

export default Cat;
