import React, { useMemo, useRef, useEffect } from "react";
import { DoubleSide } from "three";

export default function CustomObject() {
  const geometryRef = useRef();

  useEffect(() => {
    geometryRef.current.computeVertexNormals();
  }, []);

  const verticesCount = 10 * 3; //  10 triangles, 3 vertices per triangle

  const positions = useMemo(() => {
    const positions = new Float32Array(verticesCount * 3); // 3 coordinates per vertex (x, y, z)

    for (let i = 0; i < verticesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 2; // 2 is the radius
    }

    return positions;
  }, []);
  return (
    <mesh>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach='attributes-position'
          array={positions}
          count={verticesCount}
          itemSize={3}
        />
      </bufferGeometry>
      <meshStandardMaterial color='red' side={DoubleSide} />
    </mesh>
  );
}
