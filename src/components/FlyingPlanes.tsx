import { animated } from '@react-spring/three';
import { Airplane } from './Airplane';

const AnimatedAirplane = animated(Airplane);

export function FlyingPlanes() {
  return (
    <>
      <AnimatedAirplane radius={1.2} speed={0.3} rotationOffset={0} yOffset={0.1} />
      <AnimatedAirplane radius={1.3} speed={-0.4} rotationOffset={Math.PI / 2} yOffset={-0.2} />
      <AnimatedAirplane radius={1.25} speed={0.2} rotationOffset={Math.PI} yOffset={0.3} />
    </>
  );
}