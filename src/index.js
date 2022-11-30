import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { CineonToneMapping, sRGBEncoding, ACESFilmicToneMapping } from "three";

// https://journey.pmnd.rs/
// https://docs.pmnd.rs/react-three-fiber/getting-started/introduction
// https://docs.pmnd.rs/react-three-fiber/advanced/scaling-performance#instancing
// https://github.com/pmndrs/leva

import "./styles.css";
import Experience from "./Experience";

const root = createRoot(document.querySelector("#root"));

const cameraSettings = {
  position: [-1, 2.5, 5],
  // zoom: 100,
  fov: 50,
  near: 0.1,
  far: 1000,
};

const glSettings = {
  antialias: true,
  toneMapping: ACESFilmicToneMapping,
  outputEncoding: sRGBEncoding,
};

root.render(
  <Canvas
    // flat -> No ToneMapping
    // orthographic
    // dpr={ [1, 2 ]} -> Pixel ratio, array to clamp values (default value)
    gl={glSettings}
    camera={cameraSettings}
  >
    <Experience />
  </Canvas>
);
