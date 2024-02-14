"use client";

import React, { FC, useState } from 'react';
import LoadingAnimation from './LoadingAnimation';
import Globe from '../Globe/Globe';
import { useSphere } from '../Globe/SphereContext';

const AnimationState: FC = () => {
    const [animationPlayed, setAnimationPlayed] = useState(false);
    const { sphere, isLoaded } = useSphere();

    console.log('isloaded', isLoaded);
    console.log('animation played', animationPlayed);

  return (
        <div>
            <LoadingAnimation onAnimationComplete={() => setAnimationPlayed(true)} />
            {animationPlayed && isLoaded && <Globe />}
        </div>
  );
};

export default AnimationState;
