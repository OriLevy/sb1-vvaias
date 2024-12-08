import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { FlyingPlanes } from './FlyingPlanes';
import { useEarthTextures } from '../hooks/useEarthTextures';
import { animated } from '@react-spring/three';

const AnimatedGroup = animated('group');

export function Earth() {
  const earthRef = useRef<THREE.Mesh>(null);
  const { textures, isLoading, springs } = useEarthTextures();

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.0005;
    }
  });

  if (isLoading || !textures) {
    return null;
  }

  return (
    <AnimatedGroup
      rotation={[0.2, -0.6, 0]}
      position={[0, -0.5, 0]}
      scale={springs.scale}
    >
      <Sphere ref={earthRef} args={[1, 64, 64]}>
        <meshPhongMaterial
          map={textures.dayMap}
          bumpMap={textures.bumpMap}
          bumpScale={0.1}
          specularMap={textures.specularMap}
          specular={new THREE.Color('grey')}
          shininess={25}
        />
      </Sphere>
      <FlyingPlanes />
    </AnimatedGroup>
  );
}