import { useSpring, useTransform } from 'framer-motion';

// ----------------------------------------------------------------------

export function useHoverParallax(stiffness = 250, damping = 20) {
  const x = useSpring(0, { stiffness, damping });
  const y = useSpring(0, { stiffness, damping });

  const useOffsetX = (force) => useTransform(x, (event) => event / force);
  const useOffsetY = (force) => useTransform(y, (event) => event / force);

  const onMouseMove = (event) => {
    x.set(event.clientX);
    y.set(event.clientY);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return {
    offsetX: useOffsetX,
    offsetY: useOffsetY,
    onMouseMove,
    onMouseLeave,
  };
}
