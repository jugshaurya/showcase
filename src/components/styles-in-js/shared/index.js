import { keyframes } from 'styled-components';

export * from './Container';
export * from './Flex';
export * from './Grid';
export * from './FloatingImage';
export * from './Icon';

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
