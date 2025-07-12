import React, { useEffect, useRef, useMemo } from 'react';
import { useFrame, useGraph } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

export default function Model(props) {
  const group = useRef();
  const handRef = useRef();

  const { scene, animations } = useGLTF('/man.gltf');
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions['Wave']?.play();
  }, [actions]);

  useFrame(() => {
    if (handRef.current) {
      handRef.current.rotation.z += 0.01; // Rotate hand
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.011}>
          <group name="09a5774c66ac493c91c5c07547e49d4dfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="john_rig">
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    {/* Example: attach ref to a joint or mesh */}
                    <group name="Object_7" ref={handRef} />
                    <group name="john" />
                    <skinnedMesh
                      name="Object_8"
                      geometry={nodes.Object_8.geometry}
                      material={materials.M_clothes}
                      skeleton={nodes.Object_8.skeleton}
                      morphTargetDictionary={nodes.Object_8.morphTargetDictionary}
                      morphTargetInfluences={nodes.Object_8.morphTargetInfluences}
                    />
                    <skinnedMesh
                      name="Object_9"
                      geometry={nodes.Object_9.geometry}
                      material={materials.M_hair}
                      skeleton={nodes.Object_9.skeleton}
                      morphTargetDictionary={nodes.Object_9.morphTargetDictionary}
                      morphTargetInfluences={nodes.Object_9.morphTargetInfluences}
                    />
                    <skinnedMesh
                      name="Object_10"
                      geometry={nodes.Object_10.geometry}
                      material={materials.M_eyes}
                      skeleton={nodes.Object_10.skeleton}
                      morphTargetDictionary={nodes.Object_10.morphTargetDictionary}
                      morphTargetInfluences={nodes.Object_10.morphTargetInfluences}
                    />
                    <skinnedMesh
                      name="Object_11"
                      geometry={nodes.Object_11.geometry}
                      material={materials.M_john}
                      skeleton={nodes.Object_11.skeleton}
                      morphTargetDictionary={nodes.Object_11.morphTargetDictionary}
                      morphTargetInfluences={nodes.Object_11.morphTargetInfluences}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/man.gltf');
