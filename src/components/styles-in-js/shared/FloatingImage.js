import styled from 'styled-components';

export const FloatingImage = styled.img`
  position: absolute;
  top: ${(p) => p.t};
  right: ${(p) => p.r};
  bottom: ${(p) => p.b};
  left: ${(p) => p.l};
  z-index: ${(p) => p.zi || -1};
  width: ${(p) => p.w || 'auto'};
  height: ${(p) => p.h || 'auto'};
`;
