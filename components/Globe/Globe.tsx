"use client";

import React, { FC, useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import useGlobeAnimation from './useGlobeAnimation';
import { useSphere } from './SphereContext';

const globeStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -2,
};

const Globe: FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const ambientLightRef = useRef<THREE.AmbientLight | null>(null);
  const [state, setState] = useState(false);

  const {sphere, isLoaded} = useSphere();

  console.log('sphere in globe', sphere);

  console.log('renderer ref', rendererRef.current);


    // Set scale variables
    const baseScale = 1.75;
    const maxScale = 2;
    const minScale = 1.25;

    const calculateScale = () => {
        const baseWidth = 1920; // base width for scale 1
        let scaleFactor = (window.innerWidth / baseWidth) * baseScale;

        scaleFactor = Math.max(scaleFactor, minScale); // min scale
        scaleFactor = Math.min(scaleFactor, maxScale); // max scale

        return scaleFactor;
    };

  useEffect(() => {
      if (!sceneRef.current) {
        sceneRef.current = new THREE.Scene();
        sceneRef.current.background = new THREE.Color(0xFFF5DC);
      }

      console.log('hello');

      console.log('renderer ref', rendererRef);

      if (!rendererRef.current && mountRef.current) {
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.outputColorSpace = THREE.SRGBColorSpace;

        console.log('mountref current', mountRef.current);

        mountRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;
      }

      if (!ambientLightRef.current) {
        ambientLightRef.current = new THREE.AmbientLight(0xFFFFFF, 3.1);
        sceneRef.current.add(ambientLightRef.current);
      }

      if (!cameraRef.current) {
        cameraRef.current = new THREE.PerspectiveCamera(15, window.innerWidth / window.innerHeight, 0.1, 1000);
        // cameraRef.current.position.z = 5;
        // cameraRef.current.position.y = 5;
        // cameraRef.current.position.x = 5;
        // cameraRef.current.lookAt(new THREE.Vector3(0, 0, 0));
        // console.log('camera ref');
      }
      
      if (isLoaded && sphere) {
        sceneRef.current.add(sphere);
        console.log('adding to scene');
        sphere.rotation.x = THREE.MathUtils.degToRad(-23.5);
        const initialScale = calculateScale();
        sphere.scale.set(initialScale, initialScale, initialScale);
        setState(true);

      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }

    }, [isLoaded, sphere, state]);

    // const animate = () => {
    //     requestAnimationFrame(animate);
    //     if(rendererRef.current && sceneRef.current && cameraRef.current) {
    //       rendererRef.current.render(sceneRef.current, cameraRef.current);
    //     }
    //   };

    // animate();

    useGlobeAnimation(sphere, rendererRef.current, cameraRef.current, sceneRef.current);

  useEffect(() => {
    const onWindowResize = () => {
      if (cameraRef.current && rendererRef.current && sphere) {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
        const newScale = calculateScale();
        sphere.scale.set(newScale, newScale, newScale);
      }
    };

    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return <div ref={mountRef} style={globeStyle}></div>;
};

export default Globe;
