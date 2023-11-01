
import { useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import { useFrame } from "@react-three/fiber"

import PongoModel from "./PongoModel.js"



import React, { useRef } from 'react';

function Model({ activeModel }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(activeModel.model);
  const { actions, mixer } = useAnimations(animations, group);

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  if (activeModel.name === 'Pongo') {
    return (
      <PongoModel activeModel={activeModel}/>
    )
  } else {
    return (
      <group ref={group} >
        <mesh material={materials['Material']} geometry={nodes['Mesh'].geometry} scale={activeModel.scale} position={activeModel.position} rotation={activeModel.rotation}>
          <meshStandardMaterial map={materials['Material'].map} />
        </mesh>
      </group>
    );
  }

  
}

export default Model;