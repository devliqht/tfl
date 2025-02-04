import React from 'react';
import { animated, useSpring } from '@react-spring/web'

interface AnimatedContainerProps {
  children: React.ReactNode; 
  from?: object;
  to?: object; 
  config?: object; 
  duration?: number;
  delay?: number;
  className?: string;
}

const AnimatedContainer: React.FC<AnimatedContainerProps> = ({
  children,
  from = { opacity: 0, transform: "translateY(20px)" },
  to = { opacity: 1, transform: "translateY(0)" },
  config = { tension: 80, friction: 20 }, 
  duration,
  delay = 0, 
  className = "",
}) => {
  const animation = useSpring(
    duration
      ? { from, to, config: { duration }, delay } 
      : { from, to, config, delay }
  );

  return <animated.div style={animation} className={`${className} justify-center w-full`}>{children}</animated.div>;
};

export {
    AnimatedContainer
}

