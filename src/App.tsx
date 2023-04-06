import { Canvas, useLoader } from '@react-three/fiber';
import { ARButton, Controllers, Hands, XR } from '@react-three/xr';
import { useEffect, useRef } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

export default function App() {
  const colorMap = useLoader(TextureLoader, '/src/assets/img.jpg');
  const ref = useRef(null);

  useEffect(() => {}, []);

  return (
    <>
      <ARButton />
      <Canvas ref={ref}>
        <XR>
          <Controllers />
          <Hands />
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[-12, 300, 300]} />
            <meshBasicMaterial map={colorMap} />
          </mesh>
        </XR>
      </Canvas>
    </>
  );
}
