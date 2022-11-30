import React, { useRef } from "react";
import { useFrame, extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { DoubleSide } from "three";
import CustomObject from "./CustomObject";

extend({ OrbitControls });

export default function Experience() {
  const torusRef = useRef();
  const three = useThree();
  const { camera, gl } = three;

  useFrame((state, delta) => {
    torusRef.current.rotation.x += 0.01;
    torusRef.current.rotation.y += 0.01;
    torusRef.current.rotation.z += delta;

    // const angle = state.clock.elapsedTime;
    // state.camera.position.x = Math.sin(angle);
    // state.camera.position.z = Math.cos(angle);
    // state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      <directionalLight position={[1, 3, 2]} intensity={1} />
      <ambientLight intensity={0.5} />
      <group>
        <mesh
          ref={torusRef}
          rotation-y={Math.PI * 1}
          scale={0.4}
          position={[0.1, 0, 2]}
        >
          <torusKnotGeometry args={[1.4]} />
          <meshNormalMaterial />
          {/* <meshNormalMaterial wireframe /> */}
        </mesh>
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color='orange' />
        </mesh>

        <mesh rotation-y={Math.PI * 0.25} position-x={2} scale={1.5}>
          <boxGeometry />
          <meshStandardMaterial color='mediumpurple' />
        </mesh>

        <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
          <planeGeometry />
          <meshStandardMaterial side={DoubleSide} color='greenyellow' />
        </mesh>
      </group>
      <CustomObject />
    </>
  );
}
