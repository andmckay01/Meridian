import { useState, useEffect } from 'react';
import * as THREE from 'three';

interface GlobeObjectProps {
    renderer: THREE.WebGLRenderer | null,
    scene: THREE.Scene | null;
}

const useGlobeObject = ({ renderer, scene }: GlobeObjectProps) => {
    const [globe, setGlobe] = useState<THREE.Object3D | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!renderer || !scene) {
            setIsLoading(false);
            return;
        }

        // Create a texture loader
        const textureLoader = new THREE.TextureLoader();

        // Load textures
        const texture = textureLoader.load(
            '/basecolor8k.png',
            () => console.log('Texture loaded successfully'),
            undefined,
            (error) => console.error('Error loading texture:', error)
        );
        
        const texturePole = textureLoader.load(
            '/texture-pole.png',
            () => console.log('Texture loaded successfully'),
            undefined,
            (error) => console.error('Error loading texture:', error)
        );

        // Create a sphere geometry
        const geometry = new THREE.SphereGeometry(1.5, 50, 50);

        // Create materials
        // const material = new THREE.MeshStandardMaterial({ map: texture });
        const material = new THREE.MeshStandardMaterial({ 
            map: texture,
            roughness: .5,
            metalness: 0.1,
            // alphaMap: texture,
            emissiveMap: texture,
            emissiveIntensity: 1,
            emissive: 0xfff5dc,
            // transparent: true
        });
        const materialPole = new THREE.MeshStandardMaterial({
            map: texturePole,
            alphaMap: texturePole,
            transparent: true,
            side: THREE.DoubleSide
        });

        // Create sphere and spherePole meshes
        const sphere = new THREE.Mesh(geometry, material);
        const spherePole = new THREE.Mesh(geometry, materialPole);

        // Before positioning and scaling, attach spherePole to sphere
        // sphere.add(spherePole);

        // Adjust spherePole's position relative to its new parent (the sphere)
        spherePole.position.set(-0.005, -0.005, 0); // Adjust these values as needed
        spherePole.rotation.y = -1.5;
        spherePole.rotation.x = 1.5;

        // Add the parent sphere to the scene (which now includes spherePole)
        scene.add(sphere);

        // Set the loaded globe (sphere) to state
        setGlobe(sphere);
        setIsLoading(false);
    }, [renderer, scene]);

    return { globe, isLoading };
};

export default useGlobeObject;
