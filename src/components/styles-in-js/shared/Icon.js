import styled from 'styled-components';

export const Icon = styled.img`
  width: ${(p) => p.w || 'auto'};
  height: ${(p) => p.h || 'auto'};
  margin-right: ${(p) => p.mr || '12px'};
`;
