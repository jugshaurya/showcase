import styled from 'styled-components';

export const Icon = styled.img`
  width: ${(p) => p.w || 'auto'};
  height: ${(p) => p.h || 'auto'};
  margin: ${(p) => p.m || 0};
  &:hover {
    cursor: hand;
    transform: scale(1.2);
  }
`;
