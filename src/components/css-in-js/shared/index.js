import { keyframes } from 'styled-components';

export * from './Container';
export * from './Flex';
export * from './FloatingImage';
export * from './Icon';

// TOOD: Convert all to a single framework
// Animations, others are AOS and Framer Motion
export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
  `;

export const rotateAndColor = keyframes`
0%{
    /* filter: hue-rotate(0deg); */
    transform: rotate(0deg);
  }
  100%{
    /* filter: hue-rotate(360deg); */
    transform: rotate(360deg);
  }
`;

export const fadein = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10px) translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(10px) translateY(10px);
  }
`;

export const windmove = keyframes`
  from {
    transform: rotateX(0deg) ;
  }
  to {
    transform: rotateX(5deg) ;
  }
`;
