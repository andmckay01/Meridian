"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useScroll } from 'framer-motion';

const useGlobeAnimation = (
    globe: THREE.Mesh | null,
    rendererRef: THREE.WebGLRenderer | null,
    camera: THREE.PerspectiveCamera | null,
    scene: THREE.Scene | null,
) => {

    const previousScrollYProgress = useRef<number>(0);
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        if (!globe || !rendererRef || !camera || !scene) return;

        // animate function, loops continuously
        const animate = () => {
            const currentScrollYProgress = scrollYProgress.get();
            const scrollDelta = currentScrollYProgress - previousScrollYProgress.current;

            if (scrollDelta < 0) {
            } else {
                globe.rotation.y -= 0.00033 + scrollDelta * 2.25;
            }

            camera.position.y = 5 - currentScrollYProgress * 12;
            camera.position.z = 6 - currentScrollYProgress * 2.25;
            camera.position.x = 6 - currentScrollYProgress * 2.25;
            camera.lookAt(new THREE.Vector3(0, 0, 0));

            if (rendererRef) {
                rendererRef.render(scene, camera);
            }

            previousScrollYProgress.current = currentScrollYProgress;

            // This keeps it going by requesting the next frame
            requestID = requestAnimationFrame(animate);
        };

        // This starts the animation loop
        let requestID = requestAnimationFrame(animate);

        // Cleanup function
        return () => {
            cancelAnimationFrame(requestID);
        };
    }, [globe, camera, scene]);

};

export default useGlobeAnimation;
