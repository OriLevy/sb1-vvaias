import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Shape, ExtrudeGeometry } from 'three';

interface AirplaneProps {
  radius: number;
  speed: number;
  rotationOffset: number;
  yOffset: number;
}

export function Airplane({ radius, speed, rotationOffset, yOffset }: AirplaneProps) {
  const airplaneRef = useRef<Mesh>(null);
  
  useFrame(({ clock }) => {
    if (airplaneRef.current) {
      const time = clock.getElapsedTime();
      const angle = time * speed + rotationOffset;
      
      airplaneRef.current.position.x = Math.cos(angle) * radius;
      airplaneRef.current.position.z = Math.sin(angle) * radius;
      airplaneRef.current.position.y = yOffset;
      
      // Rotate airplane to face direction of travel
      airplaneRef.current.rotation.y = -angle - Math.PI / 2;
    }
  });

  // Create arrow shape
  const shape = new Shape();
  shape.moveTo(0, 0);
  shape.lineTo(-0.05, 0.02);
  shape.lineTo(-0.05, -0.02);
  shape.lineTo(0, 0);

  const extrudeSettings = {
    steps: 1,
    depth: 0.01,
    bevelEnabled: false,
  };

  return (
    <mesh ref={airplaneRef}>
      <mesh>
        <extrudeGeometry args={[shape, extrudeSettings]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </mesh>
  );
}