"use client";

import { CSSProperties, FC, useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import useCleanAnimation from './useCleanAnimation';

interface LoadingAnimationProps {
  onAnimationComplete: () => void;
}

const LoadingAnimation: FC<LoadingAnimationProps> = ({ onAnimationComplete }) => {
  const animationContainer = useRef<HTMLDivElement>(null);
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useCleanAnimation(animationPlayed);

  const containerStyle: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: animationPlayed ? 'none' : 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF5DC',
    opacity: animationPlayed ? 0 : 1,
    transition: 'opacity 0.5s ease',
    zIndex: 1000,
  };

  useEffect(() => {
    if (animationContainer.current) {
      const animation = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: '/meridianIntro.json',
      });

      animation.addEventListener('complete', () => {
        setAnimationPlayed(true);
        onAnimationComplete();
      });

      return () => animation.destroy(); // Cleanup
    }
  }, []);

  return (
    <div style={containerStyle}>
      <div ref={animationContainer} />
    </div>
  );
};

export default LoadingAnimation;
