import React, { useRef, useEffect, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import { useGraph } from '@react-three/fiber'

export default function AnimatedModel() {
  const group = useRef()
  const { scene } = useGLTF('/man.gltf')
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes } = useGraph(clone)

  const hand = useRef()

  useEffect(() => {
    console.log('All nodes:', nodes)
  }, [nodes])

  useFrame(() => {
    if (hand.current) {
      hand.current.rotation.z += 0.01
    }
  })

  return (
    <group ref={group}>
      <primitive object={clone} />
      {nodes.RightHand && <primitive object={nodes.RightHand} ref={hand} />}
    </group>
  )
}

useGLTF.preload('/man.gltf')
