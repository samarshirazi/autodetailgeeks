import { useState, useEffect } from 'react';

export const useReducedMotion = () => {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    // Check for user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Check if it's a mobile device (simple check based on screen size and touch)
    const isMobile = window.innerWidth < 768 || 'ontouchstart' in window;
    
    // Reduce motion if user prefers it OR if on mobile device
    setShouldReduceMotion(prefersReducedMotion || isMobile);
  }, []);

  return shouldReduceMotion;
};

// Animation variants that respect reduced motion preference
export const createResponsiveAnimation = (
  normalAnimation: any,
  reducedAnimation: any = { initial: {}, animate: {}, transition: { duration: 0 } }
) => {
  const shouldReduceMotion = useReducedMotion();
  return shouldReduceMotion ? reducedAnimation : normalAnimation;
};