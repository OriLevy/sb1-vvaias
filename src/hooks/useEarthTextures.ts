import { useState, useEffect } from 'react';
import * as THREE from 'three';
import { useSpring } from '@react-spring/three';

interface EarthTextures {
  dayMap: THREE.Texture;
  bumpMap: THREE.Texture;
  specularMap: THREE.Texture;
}

export function useEarthTextures() {
  const [textures, setTextures] = useState<EarthTextures | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const [springs, api] = useSpring(() => ({
    scale: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 20,
    },
  }));

  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    const textureUrls = {
      dayMap: 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg',
      bumpMap: 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_normal_2048.jpg',
      specularMap: 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_specular_2048.jpg',
    };

    Promise.all([
      textureLoader.loadAsync(textureUrls.dayMap),
      textureLoader.loadAsync(textureUrls.bumpMap),
      textureLoader.loadAsync(textureUrls.specularMap),
    ])
      .then(([dayMap, bumpMap, specularMap]) => {
        setTextures({ dayMap, bumpMap, specularMap });
        setIsLoading(false);
        api.start({ scale: 1 });
      })
      .catch((error) => {
        console.error('Error loading Earth textures:', error);
        setIsLoading(false);
      });
  }, [api]);

  return { textures, isLoading, springs };
}