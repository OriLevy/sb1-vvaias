import { useSpring, animated } from '@react-spring/three';
import { useEffect } from 'react';

export function useSpawnAnimation(isLoading: boolean) {
  const [springs, api] = useSpring(() => ({
    scale: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 20,
    },
  }));

  useEffect(() => {
    if (!isLoading) {
      api.start({
        scale: 1,
      });
    }
  }, [isLoading, api]);

  return springs.scale;
}