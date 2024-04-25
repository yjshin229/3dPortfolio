import React, { useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { a } from "@react-spring/three";
import islandScene from "../../assets/3d/island.glb";

const Island = ({ props }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(islandScene);
  const { actions } = useAnimations(animations, group);
  return (
    <a.group ref={group} {...props}>
      <group name="Sketchfab_Scene">
        <group
          {...props}
          name="Sketchfab_model"
          position={[20.99, 0, -85.977]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2 + 2]}
          scale={0.15}
        >
          <group
            name="e75494d6885b4d1f8979ba72d497fe0dfbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <group
                    name="Island"
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.981}
                  >
                    <mesh
                      name="Island_01_-_Default_0"
                      geometry={nodes["Island_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                    />
                  </group>
                  <group
                    name="Tree2"
                    position={[1.397, 50.417, -38.659]}
                    rotation={[-Math.PI / 2, 0, -0.96]}
                    scale={[0.157, 0.157, 2.074]}
                  >
                    <mesh
                      name="Tree2_02_-_Default_0"
                      geometry={nodes["Tree2_02_-_Default_0"].geometry}
                      material={materials["02_-_Default"]}
                    />
                    <mesh
                      name="Tree2_03_-_Default_0"
                      geometry={nodes["Tree2_03_-_Default_0"].geometry}
                      material={materials["03_-_Default"]}
                    />
                  </group>
                  <group
                    name="Tree3"
                    position={[39.338, 47.879, -4.395]}
                    rotation={[-Math.PI / 2, 0, -Math.PI / 9]}
                    scale={[0.153, 0.153, 2.397]}
                  >
                    <group name="Object_48" position={[27.99, 0, 0]}>
                      <mesh
                        name="Tree3_02_-_Default_0"
                        geometry={nodes["Tree3_02_-_Default_0"].geometry}
                        material={materials["02_-_Default"]}
                      />
                      <mesh
                        name="Tree3_03_-_Default_0"
                        geometry={nodes["Tree3_03_-_Default_0"].geometry}
                        material={materials["03_-_Default"]}
                      />
                    </group>
                  </group>

                  <group
                    name="CoCoNut001"
                    position={[4.473, 53.076, -36.43]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.383}
                  >
                    <mesh
                      name="CoCoNut001_05_-_Default_0"
                      geometry={nodes["CoCoNut001_05_-_Default_0"].geometry}
                      material={materials["05_-_Default"]}
                    />
                  </group>
                  <group
                    name="CoCoNut002"
                    position={[8.213, 53.326, -38.515]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.383}
                  >
                    <mesh
                      name="CoCoNut002_05_-_Default_0"
                      geometry={nodes["CoCoNut002_05_-_Default_0"].geometry}
                      material={materials["05_-_Default"]}
                    />
                  </group>
                  <group
                    name="CoCoNut003"
                    position={[37.157, 50.676, -0.465]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.383}
                  >
                    <mesh
                      name="CoCoNut003_05_-_Default_0"
                      geometry={nodes["CoCoNut003_05_-_Default_0"].geometry}
                      material={materials["05_-_Default"]}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </a.group>
  );
};

export default Island;
