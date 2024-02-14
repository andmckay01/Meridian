"use client";

import React, { FC, useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import useGlobeAnimation from './useGlobeAnimation';
import { preloadSphere } from './preloadSphere';

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
  const sphereRef = useRef<THREE.Mesh | null>(null);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    preloadSphere().then((loadedSphere) => {
        sphereRef.current = loadedSphere;
        setIsLoaded(true);
    }).catch(error => console.error("Error preloading globe assets:", error));
  }, []);

    // Set scale variables
    const baseScale = 1.75;
    const maxScale = 2;
    const minScale = 1.25;

    // this is used in the resize window useEffect to control globe size
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

      if (!rendererRef.current && mountRef.current) {
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        mountRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;
      }

      if (!ambientLightRef.current) {
        ambientLightRef.current = new THREE.AmbientLight(0xFFFFFF, 3.1);
        sceneRef.current.add(ambientLightRef.current);
      }

      if (!cameraRef.current) {
        cameraRef.current = new THREE.PerspectiveCamera(15, window.innerWidth / window.innerHeight, 0.1, 1000);
        //camera movement and look is handled in useGlobeAnimation
      }
      
      if (isLoaded && sphereRef.current) {
        sceneRef.current.add(sphereRef.current);
        sphereRef.current.rotation.x = THREE.MathUtils.degToRad(-23.5);
        const initialScale = calculateScale();
        sphereRef.current.scale.set(initialScale, initialScale, initialScale);
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }

    }, [isLoaded, sphereRef.current]);

    useGlobeAnimation(sphereRef.current, rendererRef.current, cameraRef.current, sceneRef.current);

  useEffect(() => {
    const onWindowResize = () => {
      if (cameraRef.current && rendererRef.current && sphereRef.current) {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
        const newScale = calculateScale();
        sphereRef.current.scale.set(newScale, newScale, newScale);
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